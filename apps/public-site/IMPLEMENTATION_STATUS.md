# Canonical homepage implementation status

This branch contains the deployable canonical public homepage at `apps/public-site`.

Acceptance target: the approved `1448 × 1086` homepage contract.

Required gates:

- `npm run public:build`
- `npm run public:check`
- `npm run check`

The page exposes semantic navigation, real CTAs, keyboard-operable service selection, an attached sample carousel tray, responsive behavior, and backend integration events. Other public routes must derive from this page's header, spacing, typography, material construction, controls, and density rather than creating another visual grammar.
