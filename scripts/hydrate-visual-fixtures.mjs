import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { basename, dirname, join, resolve } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname);
const visualRoot = join(root, "reference/visual-contract");
const sourceRoot = join(visualRoot, "source");

const encodedFixtures = [
  {
    file: "1872091A-8BC0-4130-AEB8-8CF0D244ECD2.contract.webp",
    sha256: "ac57f00a72df876ac7aa7431a399997422d92281b2d41a495f8abb7c035d3f53",
  },
];

for (const fixture of encodedFixtures) {
  const prefix = `${fixture.file}.b64.part`;
  const parts = (await readdir(sourceRoot))
    .filter((name) => name.startsWith(prefix))
    .sort();

  if (!parts.length) throw new Error(`No encoded source parts found for ${fixture.file}`);

  const encoded = (
    await Promise.all(parts.map((name) => readFile(join(sourceRoot, name), "utf8")))
  ).join("");

  const bytes = Buffer.from(encoded, "base64");
  const actual = createHash("sha256").update(bytes).digest("hex");
  if (actual !== fixture.sha256) {
    throw new Error(`Hydrated fixture hash mismatch for ${fixture.file}: ${actual}`);
  }

  const destination = join(visualRoot, fixture.file);
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, bytes);
  console.log(`Hydrated ${basename(destination)} (${bytes.length.toLocaleString()} bytes)`);
}
