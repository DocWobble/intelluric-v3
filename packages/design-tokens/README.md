# @intelluric/design-tokens

Executable visual grammar shared by the InTelluric public site and Pitch
Synthase.

## Source hierarchy

1. `src/primitives.json` — irreducible palette, scale, type, geometry and motion
2. `src/semantic.json` — meaning-bearing aliases
3. `src/components.json` — shared component geometry and material assignments
4. `src/themes.json` — permitted contextual accent mappings

All values use the Design Tokens Community Group `$type` / `$value` shape.
References use `{dot.separated.token.path}`.

## Generated outputs

- `dist/tokens.css`
- `dist/tokens.ts`
- `dist/tokens.resolved.json`

Run:

```bash
npm run tokens:build
npm run tokens:check
```

`--check` rebuilds in memory and fails if committed outputs are stale.

## Context accents

Set one of:

```html
<body data-accent="teal">
<body data-accent="sapphire">
<body data-accent="copper">
<body data-accent="violet">
<body data-accent="amber">
```

Components consume `--it-color-accent-context`, never the raw contextual hue.

