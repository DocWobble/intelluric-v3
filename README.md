# intelluric-v3

Canonical design-system and frontend visual-contract repository for InTelluric.

This repository exists to establish the style foundation first, then supply that foundation to the public-site frontend and Pitch Synthase frontend. It is **not** a second source of truth for either application's product behavior.

## Build order

1. **Design-token foundation** — semantic color, typography, spacing, radius, border, motion, elevation, and contextual accents.
2. **Material system** — canonical frames, wells, raised cards, recessed controls, crystal actions, technical labels, and overlays.
3. **Design-system specimens and acceptance** — prove the tokens and material recipes across editorial and instrument-shaped surfaces.
4. **Public-site frontend** — implement the approved homepage and site structure using the validated system.
5. **Pitch Synthase frontend** — consume the current product contract from `DocWobble/Pitch_Synthase_v2` and render its live states with the shared system.

No application frontend should be built by inventing or copying routes, workflow steps, state models, or backend behavior into this repository.

## Start here

1. [`contracts/VISUAL_AUTHORITY.md`](contracts/VISUAL_AUTHORITY.md)
2. [`contracts/VISUAL_SYSTEM_CONTRACT.md`](contracts/VISUAL_SYSTEM_CONTRACT.md)
3. [`contracts/CONSUMER_BOUNDARIES.md`](contracts/CONSUMER_BOUNDARIES.md)
4. [`contracts/FRONTEND_ARCHITECTURE.md`](contracts/FRONTEND_ARCHITECTURE.md)

The optimized homepage source is staged at [`staging/optimized-homepage-2026-07-29/`](staging/optimized-homepage-2026-07-29/) as a composition and interaction reference. Its artifact controls replace the scrolling sample collection in place without leaving the page.

Run:

```bash
npm run check
```

A passing check proves that the token/material authority is singular, the homepage contract is intact, and no stale Pitch Synthase workflow has been duplicated into this repository.