# Canonical InTelluric public homepage

This is the deployable reference implementation for the InTelluric public-site visual system.

- Native acceptance viewport: `1448 × 1086` at DPR 1.
- The homepage uses real semantic text, links, buttons, service selection, and a working sample carousel.
- Service selection updates the attached tray in place; it does not navigate.
- Source artwork is stored as base64 text because repository mutations in the originating implementation environment were text-only. `npm run build` restores the runtime JPEG assets exactly.
- Other public pages should reuse this header, typography, material construction, panel anatomy, spacing density, controls, and responsive rules rather than creating another visual grammar.

Commands:

```bash
npm run build
npm run check
npm run serve
```

The backend can replace route targets and the sample data without altering the page structure or visual CSS.
