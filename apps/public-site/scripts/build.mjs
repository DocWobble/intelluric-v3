import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { basename, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = resolve(fileURLToPath(new URL('..', import.meta.url)));
const dist = join(here, 'dist');
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

for (const filename of assets) {
  const encoded = (await readFile(join(here, 'source-assets', `${filename}.b64`), 'utf8')).replace(/\s+/g, '');
  await writeFile(join(dist, 'assets', basename(filename)), Buffer.from(encoded, 'base64'));
}

console.log(`Built canonical public homepage at ${dist}`);
