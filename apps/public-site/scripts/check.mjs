import { createHash } from 'node:crypto';
import { readFile, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import './build.mjs';

const here = resolve(fileURLToPath(new URL('..', import.meta.url)));
const dist = join(here, 'dist');
const failures = [];
const exists = async path => { try { await stat(path); return true; } catch { return false; } };
const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');

for (const relative of ['index.html', 'src/styles.css', 'src/app.js', 'assets/hero-owl.jpg', 'assets/sample-investor.jpg', 'assets/sample-research.jpg', 'assets/sample-feasibility.jpg', 'assets/sample-litigation.jpg']) {
  if (!(await exists(join(dist, relative)))) failures.push(`Missing build output: ${relative}`);
}

const html = await readFile(join(dist, 'index.html'), 'utf8');
for (const exact of [
  'TECHNICAL DOCUMENTS AND PRESENTATIONS',
  'We help your idea',
  'defend itself.',
  'START FROM ANYWHERE',
  'RESEARCH AND ANALYSIS INCLUDED',
  'ONE COMPLETE PROCESS',
  'BUILT FOR THE DECISION',
  'PITCH DECKS',
  'IRB PROPOSALS',
  'GRANT APPLICATIONS',
  'PATENT LITIGATION',
  'FEASIBILITY ASSESSMENTS',
  'TECHNICAL DUE DILIGENCE',
  'Not sure what the deliverable should be?'
]) if (!html.includes(exact)) failures.push(`Missing fixed homepage copy: ${exact}`);

const hero = await readFile(join(dist, 'assets/hero-owl.jpg'));
if (sha256(hero) !== '7976988ce0b4e58e0682f5bb160efb9dbbfc4454daaf3f6d07a3521f5049640b') failures.push('Hero crop identity changed');

if (failures.length) {
  console.error(`Canonical homepage check failed:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}
console.log('Canonical homepage source, assets, fixed copy, and build outputs pass.');
