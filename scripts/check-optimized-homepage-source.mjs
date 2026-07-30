import { createHash } from "node:crypto";
import { readFile, stat } from "node:fs/promises";
import { join, resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const failures = [];
const exists = async (path) => { try { await stat(path); return true; } catch { return false; } };
const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");

const files = {
  "staging/optimized-homepage-2026-07-29/README.md": "c37094ce0a13be63b6d424399269d712afe6924c08218b862dcc55bbbc4a612c",
  "staging/optimized-homepage-2026-07-29/index.html": "a6f9520d7d137f5b88e5f7d011e9d707b3d944434f71e9dbada4fb20a246faf6",
  "staging/optimized-homepage-2026-07-29/package.json": "fc3b8b195c88cd5a7abc199af26be4607b217900fd03f5855b2aac5b7d097c2a",
  "staging/optimized-homepage-2026-07-29/src/app.js": "606faf9cf07d9671837360eaea65f8805e6faad51d6ae200b2b6345ef1402fcd",
  "staging/optimized-homepage-2026-07-29/src/styles.css": "acf918081feafa2f2e4bd2205440fec2c14d668f08357b42c1e0e1184bd86d13"
};

for (const [relative, expected] of Object.entries(files)) {
  const path = join(root, relative);
  if (!(await exists(path))) {
    failures.push(`Missing extracted contract file: ${relative}`);
    continue;
  }
  const actual = sha256(await readFile(path));
  if (actual !== expected) failures.push(`Text source hash mismatch: ${relative} expected ${expected}, found ${actual}`);
}

if (failures.length) {
  console.error(`Optimized homepage text-source check failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}

console.log("Optimized homepage executable text contract is complete and byte-verified.");
