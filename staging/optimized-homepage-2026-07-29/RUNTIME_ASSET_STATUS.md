# Runtime Asset Status

The staging page now resolves every asset path used by `index.html`, `src/styles.css`, and `src/app.js`.

## Present runtime files

- `assets/contract-reference.jpeg` — 320 × 240 transport derivative of the exact 1448 × 1086 source image.
- `assets/hero-owl.jpg` — reduced transport derivative for staging execution.
- `assets/noise.png` — reduced transport derivative for staging execution.
- all four `sample-*.jpg` paths — currently resolve to the uploaded investor sample transport so the carousel has no broken images.

## Immutable source identities

The authoritative homepage source remains:

- native dimensions: `1448 × 1086`
- SHA-256: `b7a5d2fb39c86543c0b619ac8e5c3a729cb7de6cc0a3eefb629f89628a42ecc6`

The original ZIP and asset hashes remain recorded in `ASSET_MANIFEST.md`. Transport derivatives do not replace those identities and are not valid native pixel-regression masters.

## Required production replacement

Before visual acceptance, replace each runtime derivative with the corresponding exact or production-resolution asset while preserving filenames, crop contracts, and recorded provenance. The four sample image paths must regain their distinct original images; the temporary duplication is explicitly not approved public evidence.
