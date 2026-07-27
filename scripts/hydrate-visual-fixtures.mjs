import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { basename, dirname, join, resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const visualRoot = join(root, "reference/visual-contract");
const sourceRoot = join(visualRoot, "source");
const sourceManifestPath = join(sourceRoot, "encoded-fixtures.json");

const sourceManifest = JSON.parse(await readFile(sourceManifestPath, "utf8"));
if (sourceManifest.schema_version !== "1.0.0") {
  throw new Error(`Unsupported encoded fixture manifest: ${sourceManifest.schema_version}`);
}

for (const [file, fixture] of Object.entries(sourceManifest.fixtures ?? {})) {
  if (!Array.isArray(fixture.parts) || !fixture.parts.length) {
    throw new Error(`No ordered encoded source parts declared for ${file}`);
  }

  const encoded = (
    await Promise.all(
      fixture.parts.map(async (part) => {
        const sourcePath = join(sourceRoot, part);
        return (await readFile(sourcePath, "utf8")).trim();
      }),
    )
  ).join("");

  const bytes = Buffer.from(encoded, "base64");
  const actual = createHash("sha256").update(bytes).digest("hex");
  if (actual !== fixture.sha256) {
    throw new Error(`Hydrated fixture hash mismatch for ${file}: expected ${fixture.sha256}, found ${actual}`);
  }

  const destination = join(visualRoot, file);
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, bytes);
  console.log(`Hydrated ${basename(destination)} (${bytes.length.toLocaleString()} bytes, ${actual})`);
}
