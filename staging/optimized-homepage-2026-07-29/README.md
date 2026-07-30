# InTelluric Homepage UI Contract

A zero-dependency, responsive frontend implementation of the supplied desktop screenshot. The 1448 × 1086 reference image is included at `assets/contract-reference.jpeg`.

## Run locally

From this folder:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

No build step is required. The implementation uses semantic HTML, CSS, and a small amount of framework-free JavaScript.

## Backend integration hooks

Navigation and CTA elements use normal route URLs and also dispatch a custom browser event:

```js
document.addEventListener('intelluric:navigate', (event) => {
  console.log(event.detail.route, event.detail.href);
});
```

Service selection dispatches:

```js
document.addEventListener('intelluric:service-selected', (event) => {
  console.log(event.detail.service);
});
```

Expected routes:

- `/`
- `/services`
- `/sample-work`
- `/how-it-works`
- `/about`
- `/resources`
- `/start-project`
- `/sample-work/:service/:sample`

Replace the sample arrays in `src/app.js` with backend-provided data or render equivalent server-side markup. The CSS class contract can remain unchanged.

## Interaction contract

- Service tiles update the opened sample-work tray.
- Carousel arrows move one sample card at a time.
- Mobile navigation collapses behind a menu button.
- Desktop layout is calibrated to the supplied 1448 × 1086 screenshot.
- Tablet and mobile layouts preserve the same visual grammar without forcing desktop geometry.

## Asset note

The owl and sample-card art were cropped from the user-supplied UI contract image so the rendered frontend preserves its exact art direction. Replace these crops with source-resolution production assets when available; dimensions and placement can remain unchanged.
