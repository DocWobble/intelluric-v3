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
  if (await exists(join(root, path))) {
    failures.push(`Conflicting visual specimen exists: ${path}`);
  }
}

for (const required of [
  "contracts/VISUAL_AUTHORITY.md",
  "contracts/VISUAL_SYSTEM_CONTRACT.md",
  "contracts/FRONTEND_ARCHITECTURE.md",
  "reference/visual-contract/SCREENSHOT_MANIFEST.md",
  "reference/visual-contract/SOURCE_PROVENANCE.md",
  "packages/material-system/src/material-system.css",
  "packages/material-system/specimen/MaterialLab.tsx",
]) {
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
const inspectExtensions = new Set([
  ".css",
  ".scss",
  ".sass",
  ".less",
  ".tsx",
  ".ts",
  ".jsx",
  ".js",
]);
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
if (await exists(manifestPath)) {
  const manifest = await readFile(manifestPath, "utf8");
  const rows = [...manifest.matchAll(/\| `([^`]+\.jpeg)` \|[^\n]+\| `([0-9a-f]{64})` \|/g)];
  if (rows.length !== 7) failures.push(`Screenshot manifest must identify 7 source fixtures; found ${rows.length}`);
  const expectedViewports = (manifest.match(/`1448 × 1086`/g)?.length ?? 0) === 6 && manifest.includes("`864 × 1536`");
  if (!expectedViewports) failures.push("Screenshot manifest does not preserve the six desktop and one mobile contract viewports");
}

if (failures.length) {
  console.error(`Visual authority check failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}

console.log("Visual authority is singular and complete.");
