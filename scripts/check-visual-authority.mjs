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
  "AGENTS.md",
  "contracts/VISUAL_AUTHORITY.md",
  "contracts/VISUAL_SYSTEM_CONTRACT.md",
  "contracts/CONSUMER_BOUNDARIES.md",
  "contracts/FRONTEND_ARCHITECTURE.md",
  "contracts/HOMEPAGE_REVISION_CONTRACT.md",
  "contracts/SCREEN_GEOMETRY_CONTRACT.md",
  "contracts/PIXEL_ACCEPTANCE_CONTRACT.md",
  "contracts/IMPLEMENTATION_HANDOFF.md",
  "reference/visual-contract/README.md",
  "reference/visual-contract/SCREENSHOT_MANIFEST.md",
  "reference/visual-contract/SOURCE_PROVENANCE.md",
  "reference/visual-contract/visual-contract.v3.json",
  "packages/design-tokens/src/semantic.json",
  "packages/material-system/src/primitives.tsx",
  "apps/public-site/package.json",
  "apps/public-site/index.html",
  "apps/public-site/src/app.js",
  "apps/public-site/src/styles.css",
  "apps/public-site/scripts/build.mjs",
  "apps/public-site/scripts/check.mjs"
];
for (const file of required) if (!(await exists(join(root, file)))) failures.push(`Missing design authority file: ${file}`);

const legacyBaselineFiles = await walk(join(root, "contracts/baselines/v2"));
if (legacyBaselineFiles.length) {
  failures.push(`Stale product baseline remains under contracts/baselines/v2: ${legacyBaselineFiles.map(repoPath).join(", ")}`);
}

const contract = JSON.parse(await readFile(join(root, "reference/visual-contract/visual-contract.v3.json"), "utf8"));
if (contract.schema_version !== "3.1.0" || contract.status !== "binding") failures.push("visual-contract.v3.json must be binding schema 3.1.0");
if (contract.scope !== "design_system_and_visual_contracts") failures.push("Machine contract scope must be design_system_and_visual_contracts");

const expectedBuildOrder = [
  "design_tokens",
  "material_system",
  "generic_component_patterns",
  "public_site_frontend",
  "pitch_synthase_frontend"
];
if (JSON.stringify(contract.build_order) !== JSON.stringify(expectedBuildOrder)) failures.push("Build order must remain token-first and material-system-first");

if ((contract.authority?.primary ?? []).length !== 1) failures.push("Exactly one application-specific primary visual contract is allowed here");
const homepage = contract.authority?.primary?.[0];
if (homepage?.route !== "/" || homepage?.source_sha256 !== "a821c8ab2562a7d06d0bfb03eae5b3b4eb9f07312de7ff725fc15c9f58cbee5f") {
  failures.push("The canonical homepage must remain the sole primary application-specific visual contract");
}
if (homepage?.implementation_root !== "apps/public-site") failures.push("Canonical homepage implementation must remain under apps/public-site");

const instrumentSpecimen = (contract.authority?.style_specimens ?? []).find((item) => item.id === "instrument_style_specimen");
if (!instrumentSpecimen || instrumentSpecimen.behavioral_authority !== false) failures.push("Instrument screenshot must be classified as a non-behavioral style specimen");

const pitchConsumer = contract.consumers?.pitch_synthase;
if (pitchConsumer?.source_of_truth !== "DocWobble/Pitch_Synthase_v2") failures.push("Pitch Synthase source of truth must be DocWobble/Pitch_Synthase_v2");
if (pitchConsumer?.progress_model !== "data_driven_variable_count") failures.push("Pitch Synthase progress model must remain data-driven and variable-count");
if (contract.pitch_synthase?.steps || pitchConsumer?.steps) failures.push("Pitch Synthase steps must not be duplicated in the design-system contract");

const requiredForbidden = [
  "routes",
  "workflow_stage_names",
  "workflow_stage_count",
  "workflow_stage_order",
  "backend_dag",
  "api_payloads",
  "product_state",
  "payment_behavior",
  "generation_behavior",
  "review_behavior",
  "verification_behavior",
  "export_behavior"
];
for (const item of requiredForbidden) {
  if (!(pitchConsumer?.forbidden_here ?? []).includes(item)) failures.push(`Missing Pitch Synthase consumer boundary: ${item}`);
}

const expectedNav = ["Services", "Sample Work", "How It Works", "About", "Resources", "Start a Project"];
const expectedArtifacts = ["PITCH DECKS", "IRB PROPOSALS", "GRANT APPLICATIONS", "PATENT LITIGATION", "FEASIBILITY ASSESSMENTS", "TECHNICAL DUE DILIGENCE"];
if (JSON.stringify(contract.homepage?.navigation_labels) !== JSON.stringify(expectedNav)) failures.push("Homepage navigation differs from the approved composition");
if (JSON.stringify(contract.homepage?.artifact_labels) !== JSON.stringify(expectedArtifacts)) failures.push("Homepage artifact taxonomy differs from the approved composition");
if (contract.homepage?.interaction?.category_selection_navigation !== "none") failures.push("Artifact selection must update the tray without navigation");

const primitiveSource = await readFile(join(root, "packages/material-system/src/primitives.tsx"), "utf8");
for (const name of contract.shared?.material_primitives ?? []) {
  if (!primitiveSource.includes(`function ${name}`)) failures.push(`Missing material primitive: ${name}`);
}

const staleProductTerms = [
  "Project Setup",
  "Reference Analysis",
  "Narrative Foundation",
  "Slide Structure",
  "Content Synthesis",
  "Visual Crafting",
  "Review & Export",
  "/pitch-synthase/wizard/reference",
  "exact seven labels",
  "seven-step workflow",
  "backend-DAG mapping"
];
const activeAuthorityFiles = [
  "README.md",
  "AGENTS.md",
  "contracts/VISUAL_AUTHORITY.md",
  "contracts/VISUAL_SYSTEM_CONTRACT.md",
  "contracts/CONSUMER_BOUNDARIES.md",
  "contracts/FRONTEND_ARCHITECTURE.md",
  "contracts/BASELINE_SCOPE.md",
  "contracts/SCREEN_GEOMETRY_CONTRACT.md",
  "contracts/PIXEL_ACCEPTANCE_CONTRACT.md",
  "contracts/IMPLEMENTATION_HANDOFF.md",
  "reference/visual-contract/README.md",
  "reference/visual-contract/SCREENSHOT_MANIFEST.md",
  "reference/visual-contract/SOURCE_PROVENANCE.md",
  "reference/visual-contract/visual-contract.v3.json"
];
for (const relativePath of activeAuthorityFiles) {
  const source = await readFile(join(root, relativePath), "utf8");
  for (const term of staleProductTerms) {
    if (source.includes(term)) failures.push(`Stale Pitch Synthase product requirement '${term}' in ${relativePath}`);
  }
}

const allowedVisualRoots = [
  "packages/design-tokens/src/",
  "packages/design-tokens/dist/",
  "packages/material-system/src/material-system.css",
  "packages/material-system/specimen/",
  "apps/public-site/src/styles.css"
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

if (failures.length) {
  console.error(`Design authority check failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}
console.log("Design authority is canonical, deployable, and free of duplicated Pitch Synthase product requirements.");
