# Consumer Boundaries

Status: **binding**

`intelluric-v3` is the visual-system and frontend design-contract repository. It owns reusable appearance, component anatomy, and visual acceptance. It does not own the product logic of applications that consume the system.

## Owned here

- design tokens and semantic roles;
- material recipes and browser-rendered primitives;
- typography, iconography, spacing, density, motion, and responsive behavior;
- generic editorial and instrument-shell component anatomy;
- homepage composition and interaction contracts derived from the approved homepage reference;
- visual specimens and acceptance rules;
- integration guidance describing how consumers apply the system.

## Not owned here

- backend DAGs or worker orchestration;
- API routes, payloads, or error schemas;
- application route maps;
- workflow stage names, counts, or order;
- conditional branches or gate logic;
- payment, entitlement, generation, verification, or export semantics;
- product data models or persistence rules.

## Pitch Synthase authority

`DocWobble/Pitch_Synthase_v2` is the sole authority for Pitch Synthase behavior. Its current main branch defines the runtime graph, API contract, user gates, branching, progress, errors, payment boundary, generation, review, verification, and delivery.

This repository may provide generic components such as an instrument frame, data-driven progress indicator, task surface, selection grid, preview card, generation status, review surface, and delivery panel. Those components receive labels and states from the current Pitch Synthase contract. They must not encode a fixed number of screens, fixed route sequence, or duplicated application state.

Any Pitch Synthase screenshot retained here is a **style specimen only**. It may inform material depth, density, panel anatomy, typography, and control treatment. It has no authority over current product behavior.

## Integration rule

Before implementing or updating a consumer frontend:

1. complete and validate the shared token and material foundation;
2. inspect the consumer repository's current contract;
3. map current consumer states into generic design-system components;
4. keep all product-specific strings, routes, schemas, and transitions in the consumer repository;
5. reject any local requirement that conflicts with the consumer's current source of truth.

A copied application specification is stale by construction and is prohibited.