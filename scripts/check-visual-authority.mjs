import { createHash } from "node:crypto";
import { readdir, readFile, stat } from "node:fs/promises";
import { extname, join, relative, resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const failures = [];
const exists = async (path) => { try { await stat(path); return true; } catch { return false; } };
const walk = async (dir) => {
  const out = [];
  if (!(await exists(dir))) return out;
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...await walk(path)); else out.push(path);
  }
  return out;
};
const repoPath = (path) => relative(root, path).replaceAll("\\", "/");

const required = [
  "contracts/VISUAL_AUTHORITY.md",
  "contracts/HOMEPAGE_REVISION_CONTRACT.md",
  "contracts/BASELINE_SCOPE.md",
  "contracts/SCREEN_GEOMETRY_CONTRACT.md",
  "contracts/VISUAL_SYSTEM_CONTRACT.md",
  "contracts/FRONTEND_ARCHITECTURE.md",
  "contracts/PIXEL_ACCEPTANCE_CONTRACT.md",
  "contracts/IMPLEMENTATION_HANDOFF.md",
  "contracts/baselines/v2/FRONTEND_ARCHITECTURE.md",
  "contracts/baselines/v2/SCREEN_GEOMETRY_CONTRACT.md",
  "contracts/baselines/v2/PIXEL_ACCEPTANCE_CONTRACT.md",
  "contracts/baselines/v2/visual-contract.v2.full.json",
  "reference/visual-contract/SCREENSHOT_MANIFEST.md",
  "reference/visual-contract/SOURCE_PROVENANCE.md",
  "reference/visual-contract/visual-contract.v2.json",
  "reference/visual-contract/visual-contract.v3.json",
  "reference/visual-contract/INTELLURIC-HOMEPAGE-OPTIMIZED-2026-07-29.preview.webp",
  "reference/visual-contract/source/encoded-fixtures.json",
  "packages/material-system/src/primitives.tsx"
];
for (const file of required) if (!(await exists(join(root, file)))) failures.push(`Missing authority file: ${file}`);

const previewPath = join(root, "reference/visual-contract/INTELLURIC-HOMEPAGE-OPTIMIZED-2026-07-29.preview.webp");
if (await exists(previewPath)) {
  const actual = createHash("sha256").update(await readFile(previewPath)).digest("hex");
  if (actual !== "66a9365fa9bd8e7bcfb00a7aa4f28dd169d5086566d4bcd97160a4e1308f43db") failures.push(`Optimized homepage preview hash mismatch: ${actual}`);
}

const contract = JSON.parse(await readFile(join(root, "reference/visual-contract/visual-contract.v3.json"), "utf8"));
if (contract.schema_version !== "3.0.0" || contract.status !== "binding") failures.push("visual-contract.v3.json must be binding schema 3.0.0");
if ((contract.authority?.primary ?? []).length !== 2) failures.push("v3 must identify exactly two primary routes");
const homepage = contract.authority.primary.find((item) => item.route === "/");
if (homepage?.source_sha256 !== "b7a5d2fb39c86543c0b619ac8e5c3a729cb7de6cc0a3eefb629f89628a42ecc6") failures.push("Homepage source identity is not the optimized contract");
const pitch = contract.authority.primary.find((item) => item.route === "/pitch-synthase/wizard/reference");
if (pitch?.transport_sha256 !== "ac57f00a72df876ac7aa7431a399997422d92281b2d41a495f8abb7c035d3f53") failures.push("Pitch Synthase transport identity changed");

const expectedNav = ["Services", "Sample Work", "How It Works", "About", "Resources", "Start a Project"];
const expectedArtifacts = ["PITCH DECKS", "IRB PROPOSALS", "GRANT APPLICATIONS", "PATENT LITIGATION", "FEASIBILITY ASSESSMENTS", "TECHNICAL DUE DILIGENCE"];
const expectedSteps = ["Project Setup", "Reference Analysis", "Narrative Foundation", "Slide Structure", "Content Synthesis", "Visual Crafting", "Review & Export"];
if (JSON.stringify(contract.homepage?.navigation_labels) !== JSON.stringify(expectedNav)) failures.push("Homepage navigation differs from v3 contract");
if (JSON.stringify(contract.homepage?.artifact_labels) !== JSON.stringify(expectedArtifacts)) failures.push("Homepage artifact taxonomy differs from v3 contract");
if (contract.homepage?.interaction?.category_selection_navigation !== "none") failures.push("Artifact selection must update the tray without navigation");
if (JSON.stringify(contract.pitch_synthase?.steps) !== JSON.stringify(expectedSteps)) failures.push("Pitch Synthase seven-step contract changed");

const primitiveSource = await readFile(join(root, "packages/material-system/src/primitives.tsx"), "utf8");
for (const name of contract.shared.material_primitives) if (!primitiveSource.includes(`function ${name}`)) failures.push(`Missing material primitive: ${name}`);

const allowedVisualRoots = [
  "packages/design-tokens/src/",
  "packages/design-tokens/dist/",
  "packages/material-system/src/material-system.css",
  "packages/material-system/specimen/"
];
const inspectExtensions = new Set([".css", ".scss", ".sass", ".less", ".tsx", ".ts", ".jsx", ".js"]);
const forbiddenPatterns = [
  [/#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/g, "raw hex color"],
  [/\brgba?\s*\(/g, "raw rgb color"],
  [/\bhsla?\s*\(/g, "raw hsl color"],
  [/\b(?:linear|radial|conic|repeating-linear)-gradient\s*\(/g, "page-local gradient"],
  [/\bbox-shadow\s*:/g, "page-local box shadow"],
  [/\bfont-family\s*:/g, "page-local font family"]
];
for (const file of [...await walk(join(root, "apps")), ...await walk(join(root, "packages"))]) {
  const path = repoPath(file);
  if (!inspectExtensions.has(extname(file))) continue;
  if (allowedVisualRoots.some((allowed) => path === allowed || path.startsWith(allowed))) continue;
  const source = await readFile(file, "utf8");
  for (const [pattern, label] of forbiddenPatterns) {
    if (pattern.test(source)) failures.push(`${label} outside visual authority: ${path}`);
    pattern.lastIndex = 0;
  }
}

const encodedManifest = JSON.parse(await readFile(join(root, "reference/visual-contract/source/encoded-fixtures.json"), "utf8"));
const pitchFixture = encodedManifest.fixtures?.["1872091A-8BC0-4130-AEB8-8CF0D244ECD2.contract.webp"];
if (!pitchFixture || pitchFixture.sha256 !== "ac57f00a72df876ac7aa7431a399997422d92281b2d41a495f8abb7c035d3f53") failures.push("Pitch Synthase encoded fixture manifest changed");

const v2 = JSON.parse(await readFile(join(root, "reference/visual-contract/visual-contract.v2.json"), "utf8"));
if (v2.status !== "historical" || v2.superseded_by !== "visual-contract.v3.json") failures.push("v2 current-path contract must be explicitly historical");

if (failures.length) {
  console.error(`Visual authority check failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}
console.log("Visual authority is singular: optimized homepage v3 with full scoped v2 Pitch Synthase baseline preserved.");
