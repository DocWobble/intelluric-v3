# intelluric-v3

Canonical repository for the InTelluric public site and Pitch Synthase.

## Active visual contract — version 3

Frontend work begins at [`contracts/VISUAL_AUTHORITY.md`](contracts/VISUAL_AUTHORITY.md).

Primary routes:

- `/` — optimized public homepage contract, source identity `b7a5d2fb39c86543c0b619ac8e5c3a729cb7de6cc0a3eefb629f89628a42ecc6` at `1448 × 1086`;
- `/pitch-synthase/wizard/reference` — unchanged seven-step Pitch Synthase instrument contract.

The optimized homepage implementation source is staged at [`staging/optimized-homepage-2026-07-29/`](staging/optimized-homepage-2026-07-29/). Its artifact controls replace the scrolling sample collection in place without leaving the page.

## Exact-source gate

The reduced and duplicated staging derivatives from the interrupted import were removed. The repository will not report a passing visual contract until the exact ZIP members—including the native homepage image and distinct sample assets—are present byte-for-byte.

The required source identity and member hashes are enforced by:

```bash
npm run check
```

See [`staging/optimized-homepage-2026-07-29/SOURCE_IMPORT_REQUIRED.md`](staging/optimized-homepage-2026-07-29/SOURCE_IMPORT_REQUIRED.md).

The current contract, route topology, interaction requirements, and supersession rules remain under `contracts/` and `reference/visual-contract/`.
