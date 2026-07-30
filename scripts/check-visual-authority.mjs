import { createHash } from "node:crypto";
import { readFile, stat } from "node:fs/promises";
import { join, resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const failures = [];
const exists = async (path) => { try { await stat(path); return true; } catch { return false; } };
const required = [
  "contracts/VISUAL_AUTHORITY.md",
  "contracts/HOMEPAGE_REVISION_CONTRACT.md",
  "contracts/SCREEN_GEOMETRY_CONTRACT.md",
  "contracts/VISUAL_SYSTEM_CONTRACT.md",
  "contracts/FRONTEND_ARCHITECTURE.md",
  "contracts/PIXEL_ACCEPTANCE_CONTRACT.md",
  "contracts/IMPLEMENTATION_HANDOFF.md",
  "reference/visual-contract/SCREENSHOT_MANIFEST.md",
  "reference/visual-contract/SOURCE_PROVENANCE.md",
  "reference/visual-contract/visual-contract.v3.json",
  "reference/visual-contract/INTELLURIC-HOMEPAGE-OPTIMIZED-2026-07-29.preview.webp",
  "packages/material-system/src/primitives.tsx"
];
for (const file of required) if (!(await exists(join(root, file)))) failures.push(`Missing authority file: ${file}`);

const previewPath = join(root, "reference/visual-contract/INTELLURIC-HOMEPAGE-OPTIMIZED-2026-07-29.preview.webp");
if (await exists(previewPath)) {
  const actual = createHash("sha256").update(await readFile(previewPath)).digest("hex");
  const expected = "66a9365fa9bd8e7bcfb00a7aa4f28dd169d5086566d4bcd97160a4e1308f43db";
  if (actual !== expected) failures.push(`Optimized homepage preview hash mismatch: ${actual}`);
}

const contract = JSON.parse(await readFile(join(root, "reference/visual-contract/visual-contract.v3.json"), "utf8"));
if (contract.schema_version !== "3.0.0" || contract.status !== "binding") failures.push("visual-contract.v3.json must be binding schema 3.0.0");
if ((contract.authority?.primary ?? []).length !== 2) failures.push("v3 must identify exactly two primary routes");
const homepage = contract.authority.primary.find((item) => item.route === "/");
if (homepage?.source_sha256 !== "b7a5d2fb39c86543c0b619ac8e5c3a729cb7de6cc0a3eefb629f89628a42ecc6") failures.push("Homepage source identity is not the optimized contract");

const expectedNav = ["Services", "Sample Work", "How It Works", "About", "Resources", "Start a Project"];
const expectedArtifacts = ["PITCH DECKS", "IRB PROPOSALS", "GRANT APPLICATIONS", "PATENT LITIGATION", "FEASIBILITY ASSESSMENTS", "TECHNICAL DUE DILIGENCE"];
const expectedSteps = ["Project Setup", "Reference Analysis", "Narrative Foundation", "Slide Structure", "Content Synthesis", "Visual Crafting", "Review & Export"];
if (JSON.stringify(contract.homepage?.navigation_labels) !== JSON.stringify(expectedNav)) failures.push("Homepage navigation differs from v3 contract");
if (JSON.stringify(contract.homepage?.artifact_labels) !== JSON.stringify(expectedArtifacts)) failures.push("Homepage artifact taxonomy differs from v3 contract");
if (contract.homepage?.interaction?.category_selection_navigation !== "none") failures.push("Artifact selection must update the tray without navigation");
if (JSON.stringify(contract.pitch_synthase?.steps) !== JSON.stringify(expectedSteps)) failures.push("Pitch Synthase seven-step contract changed");

const primitiveSource = await readFile(join(root, "packages/material-system/src/primitives.tsx"), "utf8");
for (const name of contract.shared.material_primitives) if (!primitiveSource.includes(`function ${name}`)) failures.push(`Missing material primitive: ${name}`);

const v2 = JSON.parse(await readFile(join(root, "reference/visual-contract/visual-contract.v2.json"), "utf8"));
if (v2.status !== "historical" || v2.superseded_by !== "visual-contract.v3.json") failures.push("v2 must be explicitly historical");

if (failures.length) {
  console.error(`Visual authority check failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}
console.log("Visual authority is singular: optimized homepage v3 plus unchanged seven-step Pitch Synthase contract.");
