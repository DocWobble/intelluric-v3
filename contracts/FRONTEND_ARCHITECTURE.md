# InTelluric Frontend Design Architecture

Status: **binding**

This document defines how the design system is built and consumed. It does not define application backend behavior, workflow order, or product state.

## Repository topology

```text
packages/
  design-tokens/         semantic scalar authority
  material-system/       canonical physical surface recipes
contracts/               visual, component, and consumer boundaries
reference/               visual references and provenance
staging/                 approved composition and interaction references
apps/                    consumer implementations, only after foundation acceptance
```

## Build phases

### Phase 1 — token foundation

Complete the semantic token model before application work:

- canvas and surface roles;
- text and icon roles;
- structural and contextual accents;
- typography scale and roles;
- spacing and density rhythm;
- radius and border roles;
- elevation, shadow, and illumination roles;
- motion durations and easing;
- focus, selection, status, and disabled states;
- responsive breakpoints and control-size floors.

Generated outputs must remain derivable from one source. No application may introduce a parallel scalar system.

### Phase 2 — material system

Implement and validate the canonical physical primitives:

- `MachinedFrame`
- `PanelWell`
- `RaisedCard`
- `RecessedControl`
- `CrystalButton`
- `TechnicalLabel`
- `TechnicalOverlay`

Material recipes own gradients, highlights, seams, textures, shadows, bevels, and illumination. Consumer components compose these primitives rather than recreating them.

### Phase 3 — generic component patterns

Prove reusable visual anatomy without product assumptions:

- `PublicHeader`
- `EditorialShell`
- `InstrumentFrame`
- data-driven `ProgressIndicator`
- `TaskSurface`
- `ContextRail`
- `SelectionGrid`
- `PreviewCard`
- `GenerationStatus`
- `ReviewSurface`
- `DeliveryPanel`

Labels, counts, routes, transitions, and data are injected by the consumer.

### Phase 4 — public-site frontend

Implement the approved public-site composition using the validated design system.

Homepage assembly:

1. `PublicHeader`
2. `HomepageHero`
3. `ScopeStrip`
4. `ArtifactEvidenceBrowser`
   - `ArtifactTypeSelector`
   - `SampleWorkCarouselTray`
5. `ProjectIntakeCallout`

The homepage evidence browser owns only presentation state:

```text
active_category_id
carousel_position_by_category
collection_status
focused_artifact_id
```

Content records remain the single source for initial markup, in-place category replacement, artifact links, metadata, and indexing.

The target public route structure may be represented here as a frontend composition contract, but backend submission, storage, delivery, analytics, payment, and content-management behavior remain external integrations.

### Phase 5 — Pitch Synthase frontend

Pitch Synthase is a consumer of the design system. `DocWobble/Pitch_Synthase_v2` is the sole authority for its current routes, runtime graph, API payloads, conditional user gates, state transitions, progress, errors, payment boundary, generation, review, verification, and delivery.

Implementation procedure:

1. inspect the current Pitch Synthase contract;
2. derive the surfaces needed for its current states;
3. map those states into generic design-system components;
4. keep product-specific labels and transition logic in the Pitch Synthase codebase;
5. do not hardcode a step count, fixed screen order, or copied backend model here.

A Pitch Synthase screenshot stored here may guide material depth, layout density, and generic panel anatomy only. It cannot define product behavior.

## Responsive contract

Desktop converges on approved visual references. Tablet and mobile reflow while preserving hierarchy, material depth, active state, semantic labels, real controls, keyboard operation, touch operation, and minimum target sizes.

Responsive behavior is defined at the component-pattern level. Consumer-specific branching remains in the consumer repository.

## Completion proof

The design architecture is ready for consumer implementation only when:

1. token source and generated outputs agree;
2. every material primitive exists and is specimen-tested;
3. no application-level material recipe competes with the canonical packages;
4. generic editorial and instrument patterns work with variable labels, counts, and states;
5. the homepage composition and artifact-tray interaction pass their visual and accessibility checks;
6. no Pitch Synthase route, fixed workflow, backend mapping, or product schema is duplicated here;
7. `npm run check` passes.

A finished design system enables the frontends. It does not invent them.