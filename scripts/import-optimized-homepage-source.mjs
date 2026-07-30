import { createHash } from "node:crypto";
import { cp, mkdir, mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { basename, join, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const root = resolve(new URL("..", import.meta.url).pathname);
const archive = resolve(process.argv[2] ?? "intelluric-ui-contract-729.zip");
const expectedArchive = "bca746aff822eb2ea6b6df270d1b7898e92912ced4a9f23997efef034e3fec03";
const expectedHomepage = "b7a5d2fb39c86543c0b619ac8e5c3a729cb7de6cc0a3eefb629f89628a42ecc6";
const hash = (bytes) => createHash("sha256").update(bytes).digest("hex");

const archiveBytes = await readFile(archive);
if (hash(archiveBytes) !== expectedArchive) throw new Error(`Wrong source package: ${basename(archive)}`);

const temp = await mkdtemp(join(tmpdir(), "intelluric-ui-contract-"));
try {
  const unzip = spawnSync("unzip", ["-q", "-o", archive, "-d", temp], { stdio: "inherit" });
  if (unzip.status !== 0) throw new Error("unzip failed");

  const source = join(temp, "intelluric-ui-contract");
  const staging = join(root, "staging/optimized-homepage-2026-07-29");
  await mkdir(staging, { recursive: true });
  await cp(source, staging, { recursive: true, force: true });

  const homepage = await readFile(join(source, "assets/contract-reference.jpeg"));
  if (hash(homepage) !== expectedHomepage) throw new Error("Homepage source hash mismatch after extraction");
  await cp(
    join(source, "assets/contract-reference.jpeg"),
    join(root, "reference/visual-contract/INTELLURIC-HOMEPAGE-OPTIMIZED-2026-07-29.jpeg"),
    { force: true },
  );

  const check = spawnSync(process.execPath, [join(root, "scripts/check-optimized-homepage-source.mjs")], { stdio: "inherit" });
  if (check.status !== 0) throw new Error("Exact-source verification failed");
  console.log("Imported and verified the exact optimized homepage source package.");
} finally {
  await rm(temp, { recursive: true, force: true });
}
