# @intelluric/design-tokens

Sole source of shared scalar visual values for InTelluric.

This package defines palette, type, spacing, geometry, layout, motion, and contextual accents. It does **not** define browser material construction. Frames, wells, raised faces, crystal controls, textures, bevels, shadows, and illumination are owned exclusively by `@intelluric/material-system`.

Source order:

1. `src/primitives.json`
2. `src/semantic.json`
3. `src/components.json` — geometry only; no background or shadow recipes
4. `src/themes.json`

Generated outputs are read-only. Run `npm run tokens:build` after changing source values.
