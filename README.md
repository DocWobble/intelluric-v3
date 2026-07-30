# intelluric-v3

Canonical design-system and frontend visual-contract repository for InTelluric.

This repository establishes the shared visual system, contains the deployable public-site reference implementation, and supplies that foundation to Pitch Synthase. It is **not** a second source of truth for Pitch Synthase product behavior.

## Build order

1. **Design-token foundation** — semantic color, typography, spacing, radius, border, motion, elevation, and contextual accents.
2. **Material system** — canonical frames, wells, raised cards, recessed controls, crystal actions, technical labels, and overlays.
3. **Design-system specimens and acceptance** — prove the tokens and material recipes across editorial and instrument-shaped surfaces.
4. **Public-site frontend** — the canonical deployable homepage under [`apps/public-site/`](apps/public-site/).
5. **Pitch Synthase frontend** — consume the current product contract from `DocWobble/Pitch_Synthase_v2` and render its live states with the shared system.

No Pitch Synthase frontend should be built by inventing or copying routes, workflow steps, state models, or backend behavior into this repository.

## Start here

1. [`contracts/VISUAL_AUTHORITY.md`](contracts/VISUAL_AUTHORITY.md)
2. [`contracts/VISUAL_SYSTEM_CONTRACT.md`](contracts/VISUAL_SYSTEM_CONTRACT.md)
3. [`contracts/CONSUMER_BOUNDARIES.md`](contracts/CONSUMER_BOUNDARIES.md)
4. [`contracts/FRONTEND_ARCHITECTURE.md`](contracts/FRONTEND_ARCHITECTURE.md)
5. [`apps/public-site/README.md`](apps/public-site/README.md)

The public homepage is a real semantic implementation, not a screenshot trace. Its artifact controls replace the attached sample collection in place without leaving the page. The application includes deterministic artwork hydration, production output, route-ready links, keyboard interaction, responsive derivation, and source checks.

Run:

```bash
npm run check
npm run public:build
npm run public:serve
```

A passing check proves that the token/material authority is singular, the canonical homepage source and artwork are intact, the deployable build succeeds, and no stale Pitch Synthase workflow has been duplicated into this repository.
