# Homepage design comparisons

These are local-only alternatives. The current homepage, project pages, shared production CSS, and deployment workflow are unchanged. Nothing has been pushed or published for this comparison.

## Open locally

Run `npm run dev`, then visit:

- http://127.0.0.1:4321/previews/editorial/
- http://127.0.0.1:4321/previews/industrial/

The comparison bar switches between designs and pauses/resumes motion. Project and archive links open the existing local portfolio pages, whose designs remain unchanged in this homepage-only comparison.

## Directions

Editorial uses white, cobalt, oversized mixed typography, a custom folded-ribbon WebGL sculpture, alternating featured project layouts, and a compact project index.

Industrial uses graphite, orange, a technical grid, bold uppercase typography, an animated exploded assembly, framed project presentations, and a compact project index.

Both retain the existing profile text, project descriptions, tagline, calls to action, and button labels. Typography, colors, layout, project order, and decorative graphics vary. BCRS and Nodebucket covers are typographic illustrations, not screenshots. Trivia Turbo retains its actual gameplay image and links to its existing case study and trailer.

## Motion and cost

Three.js is MIT-licensed and runs locally in the browser. There are no paid assets, hosted 3D services, AI API calls, or new accounts. The scenes use generated geometry; existing site assets supply the project imagery.

- Pointer position adjusts the sculpture's orientation on pointer devices.
- The industrial layers gently separate and settle.
- Sections reveal on entry and buttons/images respond to hover.
- A progress line follows scrolling; native scrolling remains intact.
- Reduced-motion preferences start the scene paused and disable CSS animation.
- The preview bar provides an explicit motion toggle.
- Rendering stops while the scene is offscreen or the tab is hidden.
- Pixel density is capped; a static typographic fallback appears without WebGL.

The 3D renderer adds a larger JavaScript bundle than the production portfolio. Before adopting a design, load the renderer progressively and evaluate it on physical mobile devices. The previews are visual comparisons, not a deployment decision.

## Validation and isolation

`DESIGN_PREVIEWS=1 npm run validate` builds and checks the comparison pages too.

`npm run validate` builds the ordinary portfolio. The dynamic preview route returns no paths for a normal production build. No preview links or 3D scripts are included in the production homepage. The preview pages also carry `noindex,nofollow`.

A redesign should only be integrated into production after a direction is selected.
