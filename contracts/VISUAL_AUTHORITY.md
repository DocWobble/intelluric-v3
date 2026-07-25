# InTelluric Frontend Visual Authority

Status: **binding; no alternate visual grammar is permitted**

This file is the only entry point for frontend visual implementation.

## Authority order

1. `reference/visual-contract/SCREENSHOT_MANIFEST.md` and its referenced images govern observable geometry, density, hierarchy, responsive composition, and visual finish.
2. `contracts/VISUAL_SYSTEM_CONTRACT.md` governs shared material construction and resolves incidental differences between screenshots.
3. `contracts/FRONTEND_ARCHITECTURE.md` governs application topology, route ownership, responsive behavior, and component boundaries.
4. `packages/design-tokens/src/` is the sole source of shared scalar values: color, typography, spacing, radius, border, motion, layout, and contextual accents.
5. `packages/material-system/src/material-system.css` and `packages/material-system/src/primitives.tsx` are the sole browser implementation of repeated physical surfaces.
6. Route content and unique proof artwork remain editable only inside their declared content or asset boundaries.

A lower authority never overrides a higher authority.

## Deterministic implementation rule

Repeated surfaces must be composed only from:

- `MachinedFrame`
- `PanelWell`
- `RaisedCard`
- `RecessedControl`
- `CrystalButton`
- `TechnicalLabel`
- `TechnicalOverlay`

Applications may size and arrange these primitives according to the screenshots and responsive contract. Applications may not reproduce their gradients, borders, shadows, bevels, textures, glows, or pseudo-elements.

## Token reconciliation

The recovered `material-system.css` contained an embedded `:root` palette snapshot. That snapshot is historical evidence, not a second token source. The production stylesheet aliases all shared values to `@intelluric/design-tokens`; only compound optical recipes remain in the material-system package.

The generated design-token specimen formerly under `packages/design-tokens/specimen/` is removed because it demonstrated a flatter, incomplete construction and therefore competed with the binding screenshots and material specimen.

## Prohibited sources

No agent may use any of the following as visual authority:

- deleted or quarantined legacy stylesheets;
- generated mockup HTML outside the material-system specimen;
- page-local gradients, shadows, bevels, textures, or glow recipes;
- component-token background or shadow values as substitutes for material primitives;
- screenshots of obsolete implementations;
- prose descriptions not linked from this file.

## Required verification

`npm run check` must fail when:

- a page or application introduces raw color or material CSS;
- an application declares a shared box shadow, gradient, border radius, or font family;
- a second visual specimen appears outside `packages/material-system/specimen/`;
- generated token outputs are stale;
- the material-system package is missing any required primitive;
- a reference image listed in the manifest is absent or has a different SHA-256 digest.
