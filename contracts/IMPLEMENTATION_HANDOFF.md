# Frontend Implementation Handoff

Status: **binding**

The deliverable sequence is design-system first, consumer frontends second.

## Phase A — foundation

Before building application routes:

1. complete semantic design-token coverage;
2. generate and verify token outputs;
3. complete the canonical material primitives;
4. prove editorial and instrument-shaped compositions in specimens;
5. verify focus, selection, disabled, loading, success, warning, and error treatments;
6. pass token and visual-authority checks.

No consumer application may introduce temporary local styling that later becomes de facto authority.

## Phase B — public-site frontend

Implement the optimized homepage and target public-site structure using only the validated token and material packages.

Preserve:

- direct two-line proposition;
- scope strip;
- six artifact controls;
- in-place filtered sample carousel;
- integrated closing intake callout;
- responsive behavior and commercial path.

The staged homepage is a composition and interaction reference, not a second design system. Port its structure through canonical tokens and primitives rather than copying its monolithic CSS as application authority.

## Phase C — Pitch Synthase frontend

Use `DocWobble/Pitch_Synthase_v2` as the sole source for current product behavior. At the time of implementation:

1. inspect its current routes, APIs, runtime states, conditional gates, errors, and completion behavior;
2. identify the generic visual surfaces required;
3. compose those surfaces from this repository's tokens, materials, and component patterns;
4. keep all product-specific labels, branching, state, and transitions in Pitch Synthase;
5. do not preserve any copied or historical workflow from `intelluric-v3`.

This repository supplies the visual language. Pitch Synthase supplies the actual application.

## Completion

Foundation completion requires `npm run check` to pass with no duplicate product contract. Public-site completion additionally requires route, interaction, accessibility, responsive, and production-build tests in the public-site implementation. Pitch Synthase completion requires its own current product tests plus visual conformance to this design system.

A report without repository-local remediation is not the deliverable.