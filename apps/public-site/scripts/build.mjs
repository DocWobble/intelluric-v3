import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = resolve(fileURLToPath(new URL('..', import.meta.url)));
const dist = join(here, 'dist');
const sourceAssets = join(here, 'source-assets');
await rm(dist, { recursive: true, force: true });
await mkdir(join(dist, 'src'), { recursive: true });
await mkdir(join(dist, 'assets'), { recursive: true });

for (const relative of ['index.html', 'src/styles.css', 'src/app.js']) {
  const source = await readFile(join(here, relative));
  await writeFile(join(dist, relative), source);
}

const assets = [
  'hero-owl.jpg',
  'sample-investor.jpg',
  'sample-research.jpg',
  'sample-feasibility.jpg',
  'sample-litigation.jpg'
];
const sourceNames = await readdir(sourceAssets);

for (const filename of assets) {
  const single = `${filename}.b64`;
  const parts = sourceNames
    .filter(name => name.startsWith(`${filename}.b64.part`))
    .sort();
  const inputs = sourceNames.includes(single) ? [single] : parts;
  if (!inputs.length) throw new Error(`Missing encoded artwork source for ${filename}`);
  const encoded = (await Promise.all(inputs.map(name => readFile(join(sourceAssets, name), 'utf8'))))
    .join('')
    .replace(/\s+/g, '');
  await writeFile(join(dist, 'assets', basename(filename)), Buffer.from(encoded, 'base64'));
}

console.log(`Built canonical public homepage at ${dist}`);
