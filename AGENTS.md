# Visual Authority

## Repository role

This repository contains the irreducible visual foundation for InTelluric.

The sole page-level visual authority is `canon/homepage-canon.jpg`. The executable reference under `apps/canonical-reference/` demonstrates that authority with semantic HTML and replaceable fixture content. `ui/visual-system.css` is the only implementation surface allowed to define visual appearance.

## Permanent rules

1. The canon governs observable style; implementation code may be replaced when the rendered design does not change.
2. Content, labels, links, page names, records, routes, workflow stages, and backend behavior are mutable inputs, never visual invariants.
3. Consumers reuse the canonical stylesheet and its existing visual classes. They do not create page-local colors, typography, gradients, shadows, borders, radii, spacing systems, or material recipes.
4. Add a visual rule only for a real page requirement and derive it from the canon. Do not anticipate hypothetical pages or products.
5. Do not add another executable template, page-level screenshot, style specimen, token package, material package, framework adapter, or duplicate contract.
6. Fixture text and symbolic actions may change without modifying the visual authority.
7. `npm run check` must pass before review.

## Ambiguity

If a proposed rule could later be superseded without changing the visible design, it does not belong in this foundation. Keep the observable result; omit the speculative abstraction.
