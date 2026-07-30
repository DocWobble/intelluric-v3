import { createHash } from "node:crypto";
import { readFile, readdir, stat } from "node:fs/promises";
import { join, resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const appRoot = join(root, "apps/public-site");
const failures = [];
const exists = async (path) => { try { await stat(path); return true; } catch { return false; } };
const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");

const required = [
  "README.md",
  "package.json",
  "index.html",
  "src/app.js",
  "src/styles.css",
  "scripts/build.mjs",
  "scripts/check.mjs",
  "scripts/serve.mjs"
];
for (const relative of required) {
  if (!(await exists(join(appRoot, relative)))) failures.push(`Missing canonical homepage source: apps/public-site/${relative}`);
}

const packageJson = JSON.parse(await readFile(join(appRoot, "package.json"), "utf8"));
if (packageJson.name !== "@intelluric/public-site") failures.push("Canonical public-site package name changed");
for (const script of ["build", "check", "serve"]) if (!packageJson.scripts?.[script]) failures.push(`Missing public-site script: ${script}`);

const html = await readFile(join(appRoot, "index.html"), "utf8");
for (const exact of [
  "TECHNICAL DOCUMENTS AND PRESENTATIONS",
  "We help your idea",
  "defend itself.",
  "START FROM ANYWHERE",
  "RESEARCH AND ANALYSIS INCLUDED",
  "ONE COMPLETE PROCESS",
  "BUILT FOR THE DECISION",
  "PITCH DECKS",
  "IRB PROPOSALS",
  "GRANT APPLICATIONS",
  "PATENT LITIGATION",
  "FEASIBILITY ASSESSMENTS",
  "TECHNICAL DUE DILIGENCE",
  "SAMPLE WORK",
  "Not sure what the deliverable should be?"
]) if (!html.includes(exact)) failures.push(`Missing fixed homepage copy: ${exact}`);
if (html.includes("SELECTED WORK") || html.includes("Run the Diagnostic")) failures.push("Superseded redundant homepage band returned");

const css = await readFile(join(appRoot, "src/styles.css"), "utf8");
for (const landmark of [
  ".site-header{height:78px",
  ".hero-frame{height:427px;margin:0 20px",
  ".main-nav{left:823px",
  ".scope-strip{height:64px",
  ".service-well{height:141px",
  ".sample-tray{height:214px",
  ".closing-panel{height:109px"
]) if (!css.includes(landmark)) failures.push(`Missing native geometry landmark: ${landmark}`);

const app = await readFile(join(appRoot, "src/app.js"), "utf8");
for (const service of ["pitch", "irb", "grant", "patent", "feasibility", "diligence"]) {
  if (!app.includes(`${service}: [`)) failures.push(`Missing service tray dataset: ${service}`);
}
for (const event of ["intelluric:service-selected", "intelluric:navigate"]) if (!app.includes(event)) failures.push(`Missing integration event: ${event}`);

const assetHashes = {
  "hero-owl.jpg": "d44d36ebf218bd86a933c6051d523906797e0ab4eee48ad2e54ffe4096b3ff4f",
  "sample-investor.jpg": "acbb29f3749fe626c4f16fe74de77ef4e55fd1faa38a6bb40c840aae0a90c590",
  "sample-research.jpg": "7dd7ca8b6626cc6027b11acf26f5521bf704dcf851709da93e401da26080d4a2",
  "sample-feasibility.jpg": "3813f2822879ca7efee9543f3517b55703fa9a25ee2248f6a9c4f85d0d573670",
  "sample-litigation.jpg": "fd844c644ee2005fb684d7622e04699897d83edc917443faaebf1fdd7d991a6d"
};
const sourceRoot = join(appRoot, "source-assets");
const sourceNames = await readdir(sourceRoot);
for (const [filename, expected] of Object.entries(assetHashes)) {
  const single = `${filename}.b64`;
  const parts = sourceNames.filter(name => name.startsWith(`${filename}.b64.part`)).sort();
  const inputs = sourceNames.includes(single) ? [single] : parts;
  if (!inputs.length) {
    failures.push(`Missing encoded artwork source: ${filename}`);
    continue;
  }
  const encoded = (await Promise.all(inputs.map(name => readFile(join(sourceRoot, name), "utf8")))).join("").replace(/\s+/g, "");
  const actual = sha256(Buffer.from(encoded, "base64"));
  if (actual !== expected) failures.push(`Artwork identity mismatch: ${filename} expected ${expected}, found ${actual}`);
}

if (failures.length) {
  console.error(`Canonical homepage source check failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}
console.log("Canonical homepage implementation, geometry, behavior, and artwork sources are verified.");
