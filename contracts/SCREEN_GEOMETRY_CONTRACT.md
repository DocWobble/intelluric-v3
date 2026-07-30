# Binding Screen Geometry Contract

Status: **binding for the approved public homepage**

Native coordinate system: `1448 × 1086`, CSS pixels, origin at top left. Source pixels remain authoritative when prose measurements differ by one pixel because of antialiasing.

## Canonical public homepage

Route: `/`

Source identity: SHA-256 `a821c8ab2562a7d06d0bfb03eae5b3b4eb9f07312de7ff725fc15c9f58cbee5f`.

| Region | x | y | width | height |
|---|---:|---:|---:|---:|
| Public header | 0 | 0 | 1448 | 78 |
| Hero frame | 20 | 78 | 1408 | 427 |
| Scope strip | 51 | 505 | 1304 | 64 |
| Six-category selector | 52 | 576 | 1303 | 141 |
| Attached sample tray | 51 | 718 | 1305 | 214 |
| Closing intake callout | 51 | 936 | 1305 | 109 |

The implementation under `apps/public-site/` encodes these landmarks directly. At the native viewport, each major-region edge must remain within `±2 CSS px`; border and rim thickness remain within `±1 physical px`.

Major vertical sequence:

1. shared header;
2. large rounded hero frame;
3. physically attached four-cell scope strip;
4. six-control artifact selector;
5. attached sample-work carousel tray;
6. integrated closing project-intake callout.

Homepage geometry invariants:

- page content is horizontally compressed to the dense source composition;
- hero copy occupies the left field and owl cutaway occupies the right field;
- the hero is not a generic vertically centered two-column box;
- scope strip remains physically attached to the hero;
- six artifact controls share one geometry system and vary by accent hue only;
- tray is visually attached beneath the controls and changes in place when a category is selected;
- four cards are visible at native desktop width;
- continuation controls overlap tray edges;
- closing callout spans the available width and remains visually distinct;
- no superseded selected-work/diagnostic split band appears;
- no whitespace band interrupts the first-viewport causal sequence.

Responsive behavior below the native viewport may reflow, but it must preserve hierarchy, material depth, complete labels, working controls, and visible carousel continuation.

## Generic instrument geometry

Instrument-shaped consumer applications may use visual specimens to derive reusable relationships such as:

- one enclosing machined frame;
- a progress or status region;
- a title/action band;
- one or more dominant task surfaces;
- optional context or explanation rails;
- persistent action or status areas.

Those are component relationships, not a product route contract. Exact panel counts, progress-node counts, labels, dimensions, and conditional regions are derived from the current consumer application and its content needs.

No Pitch Synthase route, fixed workspace, step-node position, or stage label is binding in this repository.
