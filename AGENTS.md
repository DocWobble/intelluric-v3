# Agent Contract

## Start here

Before any frontend work, read these files in order:

1. `contracts/VISUAL_AUTHORITY.md`
2. `reference/visual-contract/SCREENSHOT_MANIFEST.md`
3. `contracts/SCREEN_GEOMETRY_CONTRACT.md`
4. `reference/visual-contract/visual-contract.v2.json`
5. `contracts/VISUAL_SYSTEM_CONTRACT.md`
6. `contracts/FRONTEND_ARCHITECTURE.md`
7. `contracts/PIXEL_ACCEPTANCE_CONTRACT.md`

The two **primary** screenshot fixtures are binding visual contracts. There is no discretionary visual-design phase.

## Authority chain

1. Primary screenshots define observable pixels at the native `1448 × 1086` viewport.
2. `SCREEN_GEOMETRY_CONTRACT.md` defines measured regions, landmarks, density, and component placement.
3. `visual-contract.v2.json` is the machine-readable rendering contract.
4. `VISUAL_SYSTEM_CONTRACT.md` defines the shared material, typography, icon, color, and interaction grammar.
5. `FRONTEND_ARCHITECTURE.md` defines route ownership, state boundaries, and component assembly.
6. Design tokens define reusable scalar values.
7. `@intelluric/material-system` defines repeated browser-rendered physical surfaces.
8. Content records supply editable copy and project data only.

A lower authority never overrides a higher authority.

## Binding screens

- `/` must converge on `reference/visual-contract/DECF9777-2952-4B46-A439-DF4BE7F67DEF.jpeg`.
- `/pitch-synthase/wizard/reference` must converge on `reference/visual-contract/1872091A-8BC0-4130-AEB8-8CF0D244ECD2.contract.webp`.

The Pitch Synthase application uses the exact seven-step shell fixed by the reference-analysis screenshot:

1. Project Setup
2. Reference Analysis
3. Narrative Foundation
4. Slide Structure
5. Content Synthesis
6. Visual Crafting
7. Review & Export

Do not restore the former five-step shell.

## Non-negotiable rules

1. Do not redesign, simplify, flatten, modernize, reinterpret, or “clean up” the screenshots.
2. Do not ship a whole-page screenshot as the interface. Rebuild it as semantic DOM, CSS, real controls, and isolated visual assets.
3. Use `@intelluric/design-tokens` for shared color, type, spacing, radius, border, motion, and contextual accent values.
4. Use `@intelluric/material-system` for frames, wells, raised cards, recessed controls, crystal actions, technical labels, and overlays.
5. Do not add page-local gradients, shadows, bevels, textures, glows, raw colors, or font-family declarations.
6. Contextual accents change hue only. Geometry and material construction remain fixed.
7. Public pages use the editorial shell. Pitch Synthase uses the instrument shell inside the same public header.
8. Copy and record data remain separate from JSX composition.
9. A functional change is not authorization to alter layout or style.
10. Native-view visual regression is required. “Looks close” is not acceptance.
11. `npm run check` must pass before review.

## Ambiguity rule

Any ambiguity is a repository defect. Repair the authority documents, geometry contract, machine contract, tokens, or primitives before implementation. Do not fill the gap with personal taste.
