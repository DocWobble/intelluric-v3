# @intelluric/design-tokens

Sole source of shared scalar and semantic visual values for InTelluric.

This package is the first implementation layer. Consumer frontend work begins only after its source and generated outputs agree.

It defines palette, type, spacing, geometry, layout, motion, status, focus, selection, and contextual accents. It does **not** define browser material construction. Frames, wells, raised faces, crystal controls, textures, bevels, shadows, and illumination are owned exclusively by `@intelluric/material-system`.

Source order:

1. `src/primitives.json`
2. `src/semantic.json`
3. `src/components.json` — geometry and semantic assignment only; no background or shadow recipes
4. `src/themes.json`

Generated outputs are read-only. Run:

```bash
npm run tokens:build
npm run tokens:check
```

No public-site or Pitch Synthase component may introduce a parallel value system, hardcoded visual scalar, or product-specific token taxonomy.