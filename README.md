# intelluric-v3

The parametric visual foundation for InTelluric.

- [`ui/visual-system.css`](ui/visual-system.css) is the sole visual authority.
- Its structural frame, recessed well, mineral surface, mineral button, tone
  parameters, and stitched noise field define the reusable aesthetic.
- Narrow screens preserve the complete instrument-panel overview through
  controlled density; they do not serialize the composition into full-width
  content blocks.
- [`apps/canonical-reference/`](apps/canonical-reference/) is one executable
  semantic demonstration with replaceable fixture content.

The foundation intentionally does not define a site map, routes, production
links, page names, backend behavior, framework component API, or product
workflow. Those inputs can change without changing the design.

```bash
npm run build
npm run check
npm run serve
```
