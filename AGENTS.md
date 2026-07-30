# Agent Contract

## Repository role

`intelluric-v3` owns the InTelluric design system, the canonical public-site frontend, and frontend visual contracts. It does not own Pitch Synthase product behavior, backend orchestration, workflow labels, routes, or state.

## Start here

Before implementation, read:

1. `contracts/VISUAL_AUTHORITY.md`
2. `contracts/VISUAL_SYSTEM_CONTRACT.md`
3. `contracts/CONSUMER_BOUNDARIES.md`
4. `packages/design-tokens/README.md`
5. `contracts/FRONTEND_ARCHITECTURE.md`
6. `contracts/SCREEN_GEOMETRY_CONTRACT.md`
7. `contracts/PIXEL_ACCEPTANCE_CONTRACT.md`
8. `apps/public-site/README.md`

## Required execution order

1. Complete and validate semantic design tokens.
2. Complete and validate the material-system primitives.
3. Prove the system through specimens and acceptance checks.
4. Treat `apps/public-site/` as the canonical deployed editorial surface and derive subsequent public pages from it.
5. Build or update Pitch Synthase by reading the current `DocWobble/Pitch_Synthase_v2` contract and mapping its live states into generic design-system components.

Do not begin consumer implementation by inventing product requirements that the token and material foundation does not yet support.

## Authority chain

1. Approved visual references define the intended appearance.
2. The deployable canonical homepage under `apps/public-site/` fixes the public editorial composition and its calibrated physical recipes.
3. `VISUAL_SYSTEM_CONTRACT.md` defines the reusable visual grammar.
4. `@intelluric/design-tokens` defines reusable scalar and semantic values.
5. `@intelluric/material-system` defines repeated physical surfaces for new shared components.
6. Generic component contracts define visual anatomy and responsive behavior.
7. Consumer repositories define their own routes, product state, backend behavior, and user workflow.

A design-system contract never overrides a consumer application's current product contract.

## Pitch Synthase boundary

Any Pitch Synthase screenshot in this repository is a style specimen only. It may inform frame construction, density, panel relationships, typography, control treatment, and state legibility. It may not define:

- a fixed step count or order;
- route names;
- backend orchestration mappings;
- user-gate logic;
- payment or entitlement behavior;
- generation, verification, review, or export semantics.

At implementation time, inspect `DocWobble/Pitch_Synthase_v2` and render the actions and states it actually exposes. Never preserve a copied workflow merely because it exists in this repository's history.

## Non-negotiable rules

1. Do not ship a whole-page screenshot as the interface.
2. Preserve `apps/public-site/` as the singular public editorial reference implementation.
3. New shared values begin in `@intelluric/design-tokens`; new repeated physical surfaces begin in `@intelluric/material-system`.
4. The calibrated stylesheet at `apps/public-site/src/styles.css` is the one application-level exception because it is the deployed canonical page from which later public pages are derived. No second application-level material grammar is permitted.
5. Contextual accents change hue or semantic state, not the underlying geometry or material construction.
6. Copy, product data, route data, and state remain outside reusable visual component recipes.
7. A functional change is not authorization to alter the approved visual grammar.
8. `npm run check` must pass before review.

## Ambiguity rule

When visual intent is ambiguous, inspect the canonical public homepage, then repair the tokens, material recipes, component contract, or visual reference notes. When product behavior is ambiguous, consult the consumer repository. Do not fill either gap with an invented cross-repository requirement.
