import { createHash } from "node:crypto";
import { readFile, readdir, stat } from "node:fs/promises";
import { extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import "./build.mjs";

const appRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const repoRoot = resolve(appRoot, "../..");
const dist = join(appRoot, "dist");
const failures = [];
const expectedCanonHash = "53591502d254040929b05cbe1a85f076d5477715c9e8dcb312c2f5bdd9d80258";

const exists = async path => {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
};

const sha256 = bytes => createHash("sha256").update(bytes).digest("hex");

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

function jpegDimensions(bytes) {
  if (bytes[0] !== 0xff || bytes[1] !== 0xd8) return null;
  let offset = 2;
  while (offset + 8 < bytes.length) {
    if (bytes[offset] !== 0xff) {
      offset += 1;
      continue;
    }
    const marker = bytes[offset + 1];
    offset += 2;
    if (marker === 0xd8 || marker === 0xd9) continue;
    const length = bytes.readUInt16BE(offset);
    if (length < 2 || offset + length > bytes.length) return null;
    if ([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf].includes(marker)) {
      return {
        height: bytes.readUInt16BE(offset + 3),
        width: bytes.readUInt16BE(offset + 5),
      };
    }
    offset += length;
  }
  return null;
}

const tracked = await walk(repoRoot);

const required = [
  ".github/workflows/visual-authority-check.yml",
  "AGENTS.md",
  "README.md",
  "package.json",
  "canon/README.md",
  "canon/homepage-canon.jpg",
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

const forbiddenRoots = ["contracts/", "packages/", "reference/", "scripts/", "staging/"];
for (const path of tracked) {
  if (forbiddenRoots.some(root => path.startsWith(root))) {
    failures.push(`Superseded authority surface remains tracked: ${path}`);
  }
}

const pageCanons = tracked.filter(path => path.startsWith("canon/") && /\.(?:jpe?g|png|webp)$/i.test(path));
if (pageCanons.length !== 1 || pageCanons[0] !== "canon/homepage-canon.jpg") {
  failures.push(`Expected exactly one page-level visual canon, found: ${pageCanons.join(", ") || "none"}`);
}

const executablePages = tracked.filter(path => path.endsWith("/index.html") || path === "index.html");
if (executablePages.length !== 1 || executablePages[0] !== "apps/canonical-reference/index.html") {
  failures.push(`Expected exactly one executable reference page, found: ${executablePages.join(", ") || "none"}`);
}

const stylesheets = tracked.filter(path => extname(path) === ".css");
if (stylesheets.length !== 1 || stylesheets[0] !== "ui/visual-system.css") {
  failures.push(`Expected exactly one visual stylesheet, found: ${stylesheets.join(", ") || "none"}`);
}

const canon = await readFile(join(repoRoot, "canon/homepage-canon.jpg"));
if (sha256(canon) !== expectedCanonHash) failures.push("Canonical screenshot bytes changed");
const dimensions = jpegDimensions(canon);
if (!dimensions || dimensions.width !== 1280 || dimensions.height !== 960) {
  failures.push(`Canonical screenshot must remain 1280x960, found ${dimensions ? `${dimensions.width}x${dimensions.height}` : "an unreadable image"}`);
}

const html = await readFile(join(appRoot, "index.html"), "utf8");
const css = await readFile(join(repoRoot, "ui/visual-system.css"), "utf8");
if (!html.includes('href="visual-system.css"')) failures.push("Reference page must consume ui/visual-system.css");
if (!html.includes('src="app.js"')) failures.push("Reference page must consume its visual interaction script");
if (/<style\b|style\s*=/i.test(html)) failures.push("Reference page contains page-local styling");

for (const match of html.matchAll(/<a\b[^>]*href="([^"]*)"/gi)) {
  if (match[1] !== "#fixture-action") failures.push(`Reference action has a production destination: ${match[1]}`);
}

for (const token of ["--material-grain", "--material-sheen", "--material-edge", "--material-depth", "--material-frame"]) {
  if (!css.includes(`${token}:`)) failures.push(`Missing structural material token: ${token}`);
}

for (const selector of [".hero-frame", ".scope-strip", ".service-well", ".service-card", ".sample-tray", ".sample-card", ".closing-panel"]) {
  const escaped = selector.replace(".", "\\.");
  const rule = css.match(new RegExp(`${escaped}\\{([^}]*)\\}`));
  if (!rule || !rule[1].includes("background-image:") || !rule[1].includes("box-shadow:")) {
    failures.push(`${selector} must have procedural material and depth, not a flat fill`);
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
  "assets/hero-owl.jpg",
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

console.log("Visual authority is singular, content-independent, and buildable.");
