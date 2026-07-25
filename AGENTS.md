# Agent Contract

## Authority

The supplied InTelluric and Pitch Synthase screenshots are binding UI/UX
contracts. `contracts/VISUAL_SYSTEM_CONTRACT.md` records the universal choices
made where those screenshots contain incidental inconsistencies.

Observable screenshot geometry governs page-specific composition. The shared
token system governs every repeated visual property.

## Non-negotiable rules

1. Use `@intelluric/design-tokens` for every shared color, type style, spacing
   interval, radius, border, shadow, material, motion value, and breakpoint.
2. Do not add raw hexadecimal, RGB, HSL, font-family, box-shadow, border-radius,
   or transition values inside application components.
3. Do not create page-local substitutes for an existing primitive or compound
   component.
4. Contextual color is selected with `data-accent`. Contextual accents may
   change hue; they may not change component construction.
5. Public pages use the editorial shell. Pitch Synthase uses the instrument
   shell. Both consume the same tokens and primitives.
6. Generated files under `packages/design-tokens/dist/` are read-only.
7. New shared values begin in `packages/design-tokens/src/`, followed by
   `npm run tokens:build`.
8. `npm run check` must pass before a change is eligible for review.
9. A functional change is not authorization to alter layout, copy, or style.
10. Legacy code is quarantined until a migration inventory names the exact
    source, destination, dependency, and acceptance test.

## Drift rule

When two pages depict the same kind of object differently, select the canonical
variant already recorded in the visual-system contract. Do not preserve both
unless the difference is explicitly classified as semantic, responsive, or
shell-specific.

