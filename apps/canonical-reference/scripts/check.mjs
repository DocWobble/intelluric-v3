import { readFile, readdir, stat } from "node:fs/promises";
import { extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import "./build.mjs";

const appRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const repoRoot = resolve(appRoot, "../..");
const dist = join(appRoot, "dist");
const failures = [];

const exists = async path => {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
};

async function walk(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if ([".git", "dist", "node_modules"].includes(entry.name)) continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else files.push(relative(repoRoot, path).replaceAll("\\", "/"));
  }
  return files;
}

const tracked = await walk(repoRoot);

const required = [
  ".github/workflows/visual-authority-check.yml",
  "AGENTS.md",
  "README.md",
  "package.json",
  "ui/visual-system.css",
  "ui/fonts/eb-garamond-italic-400.ttf",
  "ui/fonts/eb-garamond-normal-400.ttf",
  "ui/fonts/inter-normal-400.ttf",
  "ui/fonts/inter-normal-500.ttf",
  "apps/canonical-reference/README.md",
  "apps/canonical-reference/index.html",
  "apps/canonical-reference/app.js",
  "apps/canonical-reference/package.json",
  "apps/canonical-reference/scripts/build.mjs",
  "apps/canonical-reference/scripts/check.mjs",
  "apps/canonical-reference/scripts/serve.mjs",
];

for (const path of required) {
  if (!tracked.includes(path)) failures.push(`Missing required authority file: ${path}`);
}

const forbiddenRoots = ["canon/", "contracts/", "packages/", "reference/", "scripts/", "staging/"];
for (const path of tracked) {
  if (forbiddenRoots.some(root => path.startsWith(root))) {
    failures.push(`Superseded authority surface remains tracked: ${path}`);
  }
}

const executablePages = tracked.filter(path => path.endsWith("/index.html") || path === "index.html");
if (executablePages.length !== 1 || executablePages[0] !== "apps/canonical-reference/index.html") {
  failures.push(`Expected exactly one executable reference page, found: ${executablePages.join(", ") || "none"}`);
}

const stylesheets = tracked.filter(path => extname(path) === ".css");
if (stylesheets.length !== 1 || stylesheets[0] !== "ui/visual-system.css") {
  failures.push(`Expected exactly one visual stylesheet, found: ${stylesheets.join(", ") || "none"}`);
}

const html = await readFile(join(appRoot, "index.html"), "utf8");
const css = await readFile(join(repoRoot, "ui/visual-system.css"), "utf8");
if (!html.includes('href="visual-system.css"')) failures.push("Reference page must consume ui/visual-system.css");
if (!html.includes('src="app.js"')) failures.push("Reference page must consume its visual interaction script");
if (/<style\b|style\s*=/i.test(html)) failures.push("Reference page contains page-local styling");

for (const match of html.matchAll(/<a\b[^>]*href="([^"]*)"/gi)) {
  if (match[1] !== "#fixture-action") failures.push(`Reference action has a production destination: ${match[1]}`);
}

for (const token of [
  "--frame-width",
  "--frame-radius",
  "--frame-inner-radius",
  "--surface-radius",
  "--mineral-noise",
  "--material-key",
  "--material-warm",
  "--material-void",
  "--grain-opacity",
]) {
  if (!css.includes(`${token}:`)) failures.push(`Missing parametric material token: ${token}`);
}

for (const fragment of [
  "stitchTiles='stitch'",
  "PHYSICAL DEPTH MODEL",
  ".structural-frame{",
  ".structural-frame__recess{",
  ".mineral-surface{",
  ".mineral-surface--inset{",
  ".mineral-button{",
  ".mineral-button--neutral{",
]) {
  if (!css.includes(fragment)) failures.push(`Missing parametric material primitive: ${fragment}`);
}

for (const fragment of [
  "Compact instrument-panel mode preserves the overview",
  "--frame-width:7px",
  "grid-template-columns:repeat(4,minmax(0,1fr))",
  "grid-template-columns:repeat(3,minmax(0,1fr))",
  "grid-auto-columns:calc(50% - 3px)",
]) {
  if (!css.includes(fragment)) failures.push(`Missing compact mobile overview contract: ${fragment}`);
}

for (const tone of ["charcoal", "cobalt", "cyan", "emerald", "amber", "violet", "copper"]) {
  if (!css.includes(`mineral-surface--${tone}`)) failures.push(`Missing mineral tone: ${tone}`);
}

for (const fragment of [
  'class="structural-frame hero-shell"',
  'class="structural-frame__recess hero-frame"',
  'class="hero__visual"',
  'class="hero__owl"',
  'class="sample-card__content"',
  'class="sample-card__image"',
  "mineral-surface--charcoal",
  "mineral-button--cobalt",
  "mineral-button--neutral",
]) {
  if (!html.includes(fragment)) failures.push(`Reference does not consume material primitive: ${fragment}`);
}

for (const superseded of ["--material-grain", "--material-frame", " crystal", " recessed", "data-accent=", "data-fixture-content", "hero-art", "hero-copy", "sample-text"]) {
  if (css.includes(superseded) || html.includes(superseded)) {
    failures.push(`Superseded one-off material recipe remains: ${superseded}`);
  }
}

const visualSyntax = [
  [/#(?:[0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})\b/gi, "raw color"],
  [/\brgba?\s*\(/gi, "raw rgb color"],
  [/\bhsla?\s*\(/gi, "raw hsl color"],
  [/\b(?:linear|radial|conic|repeating-linear)-gradient\s*\(/gi, "gradient"],
  [/\bbox-shadow\s*:/gi, "shadow recipe"],
  [/\bfont-family\s*:/gi, "font recipe"],
];

const inspectExtensions = new Set([".html", ".js", ".mjs", ".md", ".json", ".yml", ".yaml"]);
for (const path of tracked) {
  if (!inspectExtensions.has(extname(path)) || path === "apps/canonical-reference/scripts/check.mjs") continue;
  const source = await readFile(join(repoRoot, path), "utf8");
  for (const [pattern, label] of visualSyntax) {
    if (pattern.test(source)) failures.push(`${label} outside ui/visual-system.css: ${path}`);
    pattern.lastIndex = 0;
  }
}

for (const output of [
  "index.html",
  "app.js",
  "visual-system.css",
  "assets/intelluric-owl-cutaway.webp",
  "assets/sample-investor.jpg",
  "assets/sample-research.jpg",
  "assets/sample-feasibility.jpg",
  "assets/sample-litigation.jpg",
  "fonts/eb-garamond-italic-400.ttf",
  "fonts/eb-garamond-normal-400.ttf",
  "fonts/inter-normal-400.ttf",
  "fonts/inter-normal-500.ttf",
]) {
  if (!(await exists(join(dist, output)))) failures.push(`Missing reference build output: ${output}`);
}

if (failures.length) {
  console.error(`Visual authority check failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}

console.log("Parametric visual authority is singular, reusable, and buildable.");
