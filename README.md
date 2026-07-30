# intelluric-v3

Canonical repository for the InTelluric public site and Pitch Synthase.

## Active frontend contract — version 3

Frontend work begins at [`contracts/VISUAL_AUTHORITY.md`](contracts/VISUAL_AUTHORITY.md).

Primary routes:

- `/` — optimized public homepage contract;
- `/pitch-synthase/wizard/reference` — unchanged seven-step Pitch Synthase instrument contract.

The optimized homepage implementation source is staged at [`staging/optimized-homepage-2026-07-29/`](staging/optimized-homepage-2026-07-29/). Its artifact controls replace the scrolling sample collection in place without leaving the page.

## Extracted text-source gate

The source ZIP was extracted and its executable text members were preserved exactly. Repository acceptance now verifies the HTML, CSS, JavaScript, package metadata, and implementation notes rather than requiring the original binary image and cropped assets.

The binding text hashes are recorded in [`staging/optimized-homepage-2026-07-29/TEXT_SOURCE_MANIFEST.md`](staging/optimized-homepage-2026-07-29/TEXT_SOURCE_MANIFEST.md).

Run:

```bash
npm run check
```

The current contract, route topology, interaction requirements, and supersession rules remain under `contracts/` and `reference/visual-contract/`. The supplied screenshot remains the human visual reference; production imagery can be replaced independently without changing the executable frontend contract.
