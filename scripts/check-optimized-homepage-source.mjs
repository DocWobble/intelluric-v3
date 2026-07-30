import { createHash } from "node:crypto";
import { readFile, stat } from "node:fs/promises";
import { join, resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const failures = [];
const exists = async (path) => { try { await stat(path); return true; } catch { return false; } };
const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");

const files = {
  "reference/visual-contract/INTELLURIC-HOMEPAGE-OPTIMIZED-2026-07-29.jpeg": "b7a5d2fb39c86543c0b619ac8e5c3a729cb7de6cc0a3eefb629f89628a42ecc6",
  "staging/optimized-homepage-2026-07-29/README.md": "c37094ce0a13be63b6d424399269d712afe6924c08218b862dcc55bbbc4a612c",
  "staging/optimized-homepage-2026-07-29/index.html": "a6f9520d7d137f5b88e5f7d011e9d707b3d944434f71e9dbada4fb20a246faf6",
  "staging/optimized-homepage-2026-07-29/package.json": "fc3b8b195c88cd5a7abc199af26be4607b217900fd03f5855b2aac5b7d097c2a",
  "staging/optimized-homepage-2026-07-29/src/app.js": "606faf9cf07d9671837360eaea65f8805e6faad51d6ae200b2b6345ef1402fcd",
  "staging/optimized-homepage-2026-07-29/src/styles.css": "acf918081feafa2f2e4bd2205440fec2c14d668f08357b42c1e0e1184bd86d13",
  "staging/optimized-homepage-2026-07-29/assets/contract-reference.jpeg": "b7a5d2fb39c86543c0b619ac8e5c3a729cb7de6cc0a3eefb629f89628a42ecc6",
  "staging/optimized-homepage-2026-07-29/assets/hero-owl.jpg": "c4cfa090811edc6f820e8e80504133dd9cd24b34b0e01e08f439a2caf48ecb3a",
  "staging/optimized-homepage-2026-07-29/assets/noise.png": "9576e970fce9863c53fb2dea44550b08af6375ba674c09c3577615fcc0f2ae74",
  "staging/optimized-homepage-2026-07-29/assets/sample-feasibility.jpg": "1707f777e342d59a8a3cd9011ee576de6d06fa620b74dde89a90bbd80b678d8b",
  "staging/optimized-homepage-2026-07-29/assets/sample-investor.jpg": "26260eaeeb20f76d1029acef57ee47608e9d5240bbf33e62651d20047b1c1daa",
  "staging/optimized-homepage-2026-07-29/assets/sample-litigation.jpg": "e548dd93468bfcbdbab6c2785b0d2c6999a326eefbf5d7a602634fbe28603c4b",
  "staging/optimized-homepage-2026-07-29/assets/sample-research.jpg": "1e705efaa03de878449db83b56e71ffed86d1bbbeb7fe511edf4b2f4f2f48d82"
};

for (const [relative, expected] of Object.entries(files)) {
  const path = join(root, relative);
  if (!(await exists(path))) {
    failures.push(`Missing exact source file: ${relative}`);
    continue;
  }
  const actual = sha256(await readFile(path));
  if (actual !== expected) failures.push(`Source hash mismatch: ${relative} expected ${expected}, found ${actual}`);
}

if (failures.length) {
  console.error(`Optimized homepage source check failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}

console.log("Optimized homepage source package is exact, complete, and byte-verified.");
