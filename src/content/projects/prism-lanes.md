---
title: 'Prism Lanes'
description: 'A neon bowling-venue concept with an interactive 3D lane, playful motion, and a sample visit planner—all running on GitHub Pages.'
category: 'Web app'
builtWithAI: true
tags: ['JavaScript', 'Three.js', 'CSS', 'GitHub Pages']
year: 2019
order: 7
status: 'Live'
visual: 'web'
repository: 'https://github.com/GrimSyntaxCloud/prism-lanes'
demo: 'https://grimsyntaxcloud.github.io/prism-lanes/'
image: 'images/projects/prism-lanes-home.webp'
imageAlt: 'Prism Lanes After Dark homepage with oversized neon lettering and an interactive three-dimensional bowling lane.'
imageFit: 'contain'
screenshots:
  - src: 'images/projects/prism-lanes-planner.webp'
    alt: 'The Prism Lanes sample visit planner showing cosmic bowling for four players and a fictional 48-dollar total.'
    caption: 'The visit planner updates an illustrative total from the bowling option and player count. It does not make a reservation, collect personal details, or take payment.'
    width: 1265
    height: 712
---

## From Rainbow Bowling to Prism Lanes

Originally a bowling-venue coursework concept credited to Andres M. and Dan S., this project started as Rainbow Bowling. Its original WordPress experiments remain in the repository. The current demo is a standalone static site, renamed Prism Lanes and redesigned in 2026.

I wanted it to feel like a bowling night out. After exploring two directions, I chose **After Dark**: oversized typography, neon lime and violet, glowing lanes, and a more immersive first impression.

## More than a static poster

The homepage features a browser-rendered 3D bowling lane. Visitors can roll the ball, explore the cosmic-bowling concept and illustrative prices, expand the original league ideas, and open a sample visit planner. The food section presents an original pizza illustration and a proposed food concept.

The planner calculates sample totals from the selected bowling option and player count. Standard bowling includes one game per player plus shoes; the cosmic option includes shoes. This is a fictional venue: nothing is booked, registered, paid for, or saved.

## How the experience works

Plain HTML, CSS, and JavaScript handle the page, expandable league descriptions, and keyboard-accessible planner dialog. A locally bundled Three.js module renders the bowling scene. It includes a graphic fallback when WebGL is unavailable and stops its rendering loop when paused or offscreen.

Visitors can pause motion, and the site respects operating-system reduced-motion preferences. Fonts are self-hosted under the SIL Open Font License; Three.js is MIT-licensed. The artwork combines original SVG and procedural 3D.

GitHub Actions validates the static build and publishes it to GitHub Pages. The demo needs no database, backend, API key, paid assets, or Azure resources. Older league, event, food, and contact URLs lead to the relevant sections of the new site.

## Built with AI, directed through feedback

I worked with ChatGPT/Codex to explore the two designs and develop the After Dark version. I set the goal, compared the working previews, selected the direction, and kept the requirement that it remain free. AI helped implement the styling, 3D scene, interactions, and deployment workflow; browser and build checks supported the iterations.

The original team coursework remains credited. The AI collaboration describes the modernization, and the published site does not call an AI model.
