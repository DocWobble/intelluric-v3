# Agent Contract

## Start here

Before frontend work, read in this order:

1. `contracts/VISUAL_AUTHORITY.md`
2. `reference/visual-contract/SCREENSHOT_MANIFEST.md`
3. `contracts/VISUAL_SYSTEM_CONTRACT.md`
4. `contracts/FRONTEND_ARCHITECTURE.md`

These files and the referenced screenshots are binding. There is no discretionary visual-design phase.

## Single authority chain

- Screenshots define observable geometry, density, hierarchy, and finish.
- Design tokens define shared scalar values.
- `@intelluric/material-system` defines every repeated physical surface.
- Applications compose primitives and supply editable content; they do not invent style.

## Non-negotiable rules

1. Use `@intelluric/design-tokens` for shared color, type, spacing, radius, border, motion, layout, and contextual accent values.
2. Use `@intelluric/material-system` for frames, wells, raised cards, recessed controls, crystal actions, technical labels, and overlays.
3. Do not add raw hexadecimal, RGB, HSL, gradient, box-shadow, font-family, bevel, texture, or glow recipes in applications or page components.
4. Do not create page-local substitutes for a material primitive.
5. Contextual accents change hue only; geometry and material construction remain fixed.
6. Public pages use the editorial shell. Pitch Synthase uses the instrument shell.
7. Generated files under `packages/design-tokens/dist/` are read-only.
8. Copy and record data remain separate from JSX composition.
9. A functional change is not authorization to alter layout or style.
10. `npm run check` must pass before review.

Any ambiguity is a defect in the repository. Stop and repair the authority documents or primitives; do not make an interpretive design choice.
