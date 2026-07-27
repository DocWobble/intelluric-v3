import { createHash } from "node:crypto";
import { readdir, readFile, stat } from "node:fs/promises";
import { extname, join, relative, resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const failures = [];

const requiredPrimitives = [
  "MachinedFrame",
  "PanelWell",
  "RaisedCard",
  "RecessedControl",
  "CrystalButton",
  "TechnicalLabel",
  "TechnicalOverlay",
];

const allowedVisualRoots = [
  "packages/design-tokens/src/",
  "packages/design-tokens/dist/",
  "packages/material-system/src/material-system.css",
  "packages/material-system/specimen/",
];

const forbiddenSpecimens = ["packages/design-tokens/specimen/index.html"];

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function walk(dir) {
  const out = [];
  if (!(await exists(dir))) return out;
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(path)));
    else out.push(path);
  }
  return out;
}

const repoPath = (path) => relative(root, path).replaceAll("\\", "/");

for (const path of forbiddenSpecimens) {
  if (await exists(join(root, path))) failures.push(`Conflicting visual specimen exists: ${path}`);
}

const requiredAuthorityFiles = [
  "contracts/VISUAL_AUTHORITY.md",
  "contracts/SCREEN_GEOMETRY_CONTRACT.md",
  "contracts/VISUAL_SYSTEM_CONTRACT.md",
  "contracts/FRONTEND_ARCHITECTURE.md",
  "contracts/PIXEL_ACCEPTANCE_CONTRACT.md",
  "reference/visual-contract/SCREENSHOT_MANIFEST.md",
  "reference/visual-contract/SOURCE_PROVENANCE.md",
  "reference/visual-contract/visual-contract.v2.json",
  "reference/visual-contract/source/encoded-fixtures.json",
  "packages/material-system/src/material-system.css",
  "packages/material-system/specimen/MaterialLab.tsx",
];

for (const required of requiredAuthorityFiles) {
  if (!(await exists(join(root, required)))) failures.push(`Missing authority file: ${required}`);
}

const primitiveSource = await readFile(
  join(root, "packages/material-system/src/primitives.tsx"),
  "utf8",
);

for (const name of requiredPrimitives) {
  if (!primitiveSource.includes(`function ${name}`)) {
    failures.push(`Missing material primitive: ${name}`);
  }
}

const files = [
  ...(await walk(join(root, "apps"))),
  ...(await walk(join(root, "packages"))),
];

const inspectExtensions = new Set([".css", ".scss", ".sass", ".less", ".tsx", ".ts", ".jsx", ".js"]);
const forbiddenPatterns = [
  [/#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/g, "raw hex color"],
  [/\brgba?\s*\(/g, "raw rgb color"],
  [/\bhsla?\s*\(/g, "raw hsl color"],
  [/\b(?:linear|radial|conic|repeating-linear)-gradient\s*\(/g, "page-local gradient"],
  [/\bbox-shadow\s*:/g, "page-local box shadow"],
  [/\bfont-family\s*:/g, "page-local font family"],
];

for (const file of files) {
  const path = repoPath(file);
  if (!inspectExtensions.has(extname(file))) continue;
  if (allowedVisualRoots.some((allowed) => path === allowed || path.startsWith(allowed))) continue;
  const source = await readFile(file, "utf8");
  for (const [pattern, label] of forbiddenPatterns) {
    if (pattern.test(source)) failures.push(`${label} outside visual authority: ${path}`);
    pattern.lastIndex = 0;
  }
}

const manifestPath = join(root, "reference/visual-contract/SCREENSHOT_MANIFEST.md");
const contractPath = join(root, "reference/visual-contract/visual-contract.v2.json");
const encodedSourceManifestPath = join(root, "reference/visual-contract/source/encoded-fixtures.json");
const encodedSourceRoot = join(root, "reference/visual-contract/source");
let encodedSourceManifest = null;

if (await exists(encodedSourceManifestPath)) {
  try {
    encodedSourceManifest = JSON.parse(await readFile(encodedSourceManifestPath, "utf8"));
    if (encodedSourceManifest.schema_version !== "1.0.0") {
      failures.push("encoded-fixtures.json schema_version must be 1.0.0");
    }
  } catch (error) {
    failures.push(`Encoded fixture manifest is unreadable: ${error.message}`);
  }
}

async function readEncodedFixture(file, expectedSha) {
  const fixture = encodedSourceManifest?.fixtures?.[file];
  if (!fixture) {
    failures.push(`Missing ordered encoded source declaration: ${file}`);
    return null;
  }
  if (fixture.sha256 !== expectedSha) {
    failures.push(`Encoded source manifest and screenshot manifest disagree: ${file}`);
  }
  if (!Array.isArray(fixture.parts) || !fixture.parts.length) {
    failures.push(`Encoded source declaration has no parts: ${file}`);
    return null;
  }
  if (new Set(fixture.parts).size !== fixture.parts.length) {
    failures.push(`Encoded source declaration contains duplicate parts: ${file}`);
    return null;
  }

  try {
    const encoded = (
      await Promise.all(
        fixture.parts.map(async (part) => {
          const path = resolve(encodedSourceRoot, part);
          if (!path.startsWith(`${encodedSourceRoot}/`)) {
            throw new Error(`Part escapes source root: ${part}`);
          }
          return (await readFile(path, "utf8")).trim();
        }),
      )
    ).join("");
    return Buffer.from(encoded, "base64");
  } catch (error) {
    failures.push(`Cannot reconstruct encoded fixture ${file}: ${error.message}`);
    return null;
  }
}

if (await exists(manifestPath)) {
  const manifest = await readFile(manifestPath, "utf8");
  const rowPattern =
    /\| `(primary|supplemental|historical)` \| `([^`]+\.(?:jpeg|webp))` \|[^|]*\| `([^`]*)` \| `([^`]*)` \| `(\d+) × (\d+)` \| `([0-9a-f]{64})` \|/g;
  const rows = [...manifest.matchAll(rowPattern)].map((m) => ({
    authority: m[1],
    file: m[2],
    route: m[3],
    viewport: m[4],
    width: Number(m[5]),
    height: Number(m[6]),
    sha256: m[7],
  }));

  if (rows.length !== 8) failures.push(`Screenshot manifest must identify 8 fixtures; found ${rows.length}`);

  const primary = rows.filter((row) => row.authority === "primary");
  if (primary.length !== 2) failures.push(`Screenshot manifest must identify exactly 2 primary fixtures; found ${primary.length}`);

  const requiredPrimary = new Map([
    [
      "/",
      {
        file: "DECF9777-2952-4B46-A439-DF4BE7F67DEF.jpeg",
        sha256: "e8c3fba4d380f8bb60fa4254915201bdd3aac89d51e4dcdeaae5baac687508fe",
      },
    ],
    [
      "/pitch-synthase/wizard/reference",
      {
        file: "1872091A-8BC0-4130-AEB8-8CF0D244ECD2.contract.webp",
        sha256: "ac57f00a72df876ac7aa7431a399997422d92281b2d41a495f8abb7c035d3f53",
      },
    ],
  ]);

  for (const row of rows) {
    const path = join(root, "reference/visual-contract", row.file);
    const bytes = (await exists(path))
      ? await readFile(path)
      : await readEncodedFixture(row.file, row.sha256);
    if (!bytes) continue;

    const actual = createHash("sha256").update(bytes).digest("hex");
    if (actual !== row.sha256) {
      failures.push(`Screenshot fixture hash mismatch: ${row.file} expected ${row.sha256}, found ${actual}`);
    }
    if (row.authority === "primary" && (row.width !== 1448 || row.height !== 1086)) {
      failures.push(`Primary fixture must preserve native 1448 × 1086 dimensions: ${row.file}`);
    }
  }

  for (const [route, expected] of requiredPrimary) {
    const row = primary.find((candidate) => candidate.route === route);
    if (!row) {
      failures.push(`Missing primary route fixture: ${route}`);
      continue;
    }
    if (row.file !== expected.file || row.sha256 !== expected.sha256) {
      failures.push(`Primary route fixture changed without contract revision: ${route}`);
    }
  }
}

if (await exists(contractPath)) {
  const contract = JSON.parse(await readFile(contractPath, "utf8"));
  if (contract.schema_version !== "2.0.0") failures.push("visual-contract.v2.json schema_version must be 2.0.0");

  const primary = contract?.authority?.primary ?? [];
  if (primary.length !== 2) failures.push("Machine contract must identify exactly 2 primary fixtures");

  const steps = contract?.screens?.pitch_synthase_reference_analysis_desktop?.wizard?.steps ?? [];
  const expectedLabels = [
    "Project Setup",
    "Reference Analysis",
    "Narrative Foundation",
    "Slide Structure",
    "Content Synthesis",
    "Visual Crafting",
    "Review & Export",
  ];

  if (steps.length !== 7) failures.push(`Pitch Synthase machine contract must contain 7 steps; found ${steps.length}`);
  if (JSON.stringify(steps.map((step) => step.label)) !== JSON.stringify(expectedLabels)) {
    failures.push("Pitch Synthase step labels differ from the binding seven-step contract");
  }

  const manifest = await readFile(manifestPath, "utf8");
  for (const fixture of primary) {
    if (!manifest.includes(fixture.file) || !manifest.includes(fixture.sha256)) {
      failures.push(`Machine contract and manifest disagree for ${fixture.id}`);
    }
  }
}

if (failures.length) {
  console.error(`Visual authority check failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}

console.log("Visual authority is singular, byte-verified, and aligned to the two primary contracts.");
