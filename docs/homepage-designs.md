# Homepage designs

Editorial is the default homepage at `/`. Industrial is available at `/industrial/`. Both are static Astro pages sharing `src/components/PortfolioHome.astro`, the profile, and the project collection. The design bar uses normal links and does not override the default based on browser storage. The site identity remains AmDev; Behind the Code introduces Andres.

## Presentation

Editorial uses white, cobalt, oversized mixed typography, a custom folded-ribbon WebGL sculpture, alternating featured project layouts, and a compact project index.

Industrial uses graphite, orange, a technical grid, bold uppercase typography, an animated exploded assembly, framed projects, and a compact project index.

Both retain the original project descriptions, tagline, calls to action, and button labels. BCRS and Nodebucket covers are typographic illustrations, not screenshots. Trivia Turbo retains its gameplay image and links to its existing case study and trailer. Project detail pages and the archive use the existing shared layout.

## Motion and cost

Three.js is MIT-licensed and runs in the browser. Its license is distributed at `public/licenses/three.txt`. Geometry is generated locally; there are no paid assets, hosted 3D services, AI API calls, or new accounts.

- The renderer loads through a separate dynamic import after filters and motion controls are initialized.
- Pointer position adjusts the scene's orientation; industrial layers gently separate and settle.
- Sections reveal on entry, with button and image hover feedback.
- A progress line follows native scrolling.
- Reduced-motion preferences start the scene paused and disable CSS animation.
- The design bar provides an explicit motion toggle.
- Rendering stops offscreen or in a hidden tab and resumes on return.
- Pixel density is capped; a static typographic fallback appears without WebGL.

The dynamically loaded renderer exceeds the bundler's 500 kB warning threshold before compression. It is separate from the lightweight page controls. Physical-device performance testing remains a follow-up; desktop and narrow browser layouts have been checked.

## Development and validation

Run `npm run dev`, then open `/` and `/industrial/`. Old `/previews/editorial/` and `/previews/industrial/` paths redirect locally and are not emitted in a normal production build.

`npm run validate` checks types, builds all public pages, and checks internal links and assets. To verify a repository subpath, run `GITHUB_REPOSITORY=GrimSyntaxCloud/PortfolioSite npm run validate`.

Both designs publish through the existing GitHub Pages workflow. No backend or hosting-plan changes are required.
