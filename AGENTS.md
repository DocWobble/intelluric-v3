# Parametric Visual Authority

## Repository role

This repository contains the irreducible, parametric visual foundation for
InTelluric.

`ui/visual-system.css` is the sole visual authority. Its material primitives,
tone parameters, and reusable noise field define the aesthetic. The executable
reference under `apps/canonical-reference/` demonstrates those primitives with
semantic HTML and replaceable fixture content.

## Permanent rules

1. The parametric material grammar governs observable style; implementation
   code may be replaced when the rendered design does not change.
2. Content, labels, links, page names, records, routes, workflow stages, and backend behavior are mutable inputs, never visual invariants.
3. Consumers compose the structural frame, recessed well, mineral surface,
   mineral button, and declared tones. They do not create page-local colors,
   typography, gradients, shadows, borders, radii, or material recipes.
4. Add a visual rule only for a real page requirement and express it through
   the existing parameters whenever the material remains the same.
5. Do not add another executable template, page-level screenshot, noise recipe,
   style specimen, token package, material package, framework adapter, or
   duplicate contract.
6. Fixture text and symbolic actions may change without modifying the visual authority.
7. `npm run check` must pass before review.

## Ambiguity

If a proposed rule could later be superseded without changing the visible design, it does not belong in this foundation. Keep the observable result; omit the speculative abstraction.
