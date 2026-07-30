import { copyFile, mkdir, readdir, rm } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const appRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const repoRoot = resolve(appRoot, "../..");
const dist = join(appRoot, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(join(dist, "assets"), { recursive: true });
await mkdir(join(dist, "fonts"), { recursive: true });

await copyFile(join(appRoot, "index.html"), join(dist, "index.html"));
await copyFile(join(appRoot, "app.js"), join(dist, "app.js"));
await copyFile(join(repoRoot, "ui/visual-system.css"), join(dist, "visual-system.css"));

for (const name of await readdir(join(appRoot, "assets"))) {
  await copyFile(join(appRoot, "assets", name), join(dist, "assets", name));
}

for (const name of await readdir(join(repoRoot, "ui/fonts"))) {
  await copyFile(join(repoRoot, "ui/fonts", name), join(dist, "fonts", name));
}

console.log(`Built canonical visual reference at ${dist}`);
