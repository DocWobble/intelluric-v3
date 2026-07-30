# Frontend Implementation Handoff

Status: **binding and implementation-ready**

## Authority state

The frontend design phase is closed. Implementation begins from the following authority chain, in order:

1. `contracts/VISUAL_AUTHORITY.md`
2. `reference/visual-contract/SCREENSHOT_MANIFEST.md`
3. The two primary fixtures named by that manifest
4. `contracts/SCREEN_GEOMETRY_CONTRACT.md`
5. `contracts/VISUAL_SYSTEM_CONTRACT.md`
6. `contracts/PIXEL_ACCEPTANCE_CONTRACT.md`
7. `reference/visual-contract/visual-contract.v2.json`
8. `contracts/FRONTEND_ARCHITECTURE.md`
9. `packages/design-tokens/`
10. `packages/material-system/`

The archived pre-realignment state is preserved at `archive/2026-07-27-pre-contract-realignment`. `main` is the canonical implementation branch.

## Primary visual contracts

### Public homepage

- Route: `/`
- Native viewport: `1448 × 1086`
- Fixture: `reference/visual-contract/DECF9777-2952-4B46-A439-DF4BE7F67DEF.jpeg`
- Governs the public editorial shell, navigation, hero composition, owl framing, confidence strip, category row, proof carousel, selected-work row, and diagnostic callout.

### Pitch Synthase — Reference Analysis

- Route: `/pitch-synthase/wizard/reference`
- Native viewport: `1448 × 1086`
- Fixture: `reference/visual-contract/1872091A-8BC0-4130-AEB8-8CF0D244ECD2.contract.webp`
- Governs the instrument shell, seven-step progress rail, heading/action geometry, reference-image well, analysis stack, contextual explanation rail, carry-forward controls, save state, and footer context.

## Required wizard sequence

1. Project Setup
2. Reference Analysis
3. Narrative Foundation
4. Slide Structure
5. Content Synthesis
6. Visual Crafting
7. Review & Export

All seven routes inherit the Step 2 instrument shell. A step changes task content and state, not the shell’s material grammar or alignment system.

## Implementation rule

Agents reproduce observable geometry and finish from the primary fixtures. They do not redesign, simplify, flatten, modernize, reinterpret, or substitute a generic SaaS system. Repeated physical surfaces come only from `@intelluric/material-system`; scalar values come only from `@intelluric/design-tokens`.

## Completion proof

A page is not complete because it resembles the reference. Completion requires the regression artifacts, landmark tolerances, OCR checks, interaction states, responsive evidence, and similarity thresholds defined in `contracts/PIXEL_ACCEPTANCE_CONTRACT.md`. `npm run check` must pass before visual review.
