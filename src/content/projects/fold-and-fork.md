---
title: 'Fold & Fork'
description: 'A playful restaurant ordering study with folded-paper layouts, sculpted food and an unfolding receipt.'
category: 'Web app'
builtWithAI: true
tags: ['JavaScript', 'CSS animation', 'Interaction design']
year: 2026
order: 27
status: 'Live'
repository: 'https://github.com/GrimSyntaxCloud/fold-and-fork'
demo: 'https://grimsyntaxcloud.github.io/fold-and-fork/'
visual: 'web'
image: 'images/projects/fold-and-fork-home.webp'
imageAlt: 'A cream, forest-green and peach restaurant page with folded posters and a sculpted taco.'
imageFit: 'contain'
screenshots:
  - src: 'images/projects/fold-and-fork-home.webp'
    alt: 'A cream, forest-green and peach restaurant page with folded posters and a sculpted taco.'
    caption: 'The opening design, captured from the verified working application.'
    width: 1265
    height: 889
  - src: 'images/projects/fold-and-fork-menu.webp'
    alt: 'The menu keeps the original choices and prices, with immediate selection feedback and a bill preview.'
    caption: 'The menu keeps the original choices and prices, with immediate selection feedback and a bill preview.'
    width: 1265
    height: 889
  - src: 'images/projects/fold-and-fork-mobile.webp'
    alt: 'Fold & Fork on a narrow mobile screen.'
    caption: 'A narrow-screen view with responsive content and controls.'
    width: 375
    height: 812
---

## The project

Fold & Fork is a restaurant-ordering interaction study with folded-paper posters, clay-like food illustrations and a warm cream, forest-green, peach and citrus palette. Selecting a dish gives a small spring-like response; the bill opens as a paper receipt. Motion can be paused, and the layout adapts to narrow screens.

Browse drinks, main courses and desserts, select from eleven menu items, add an optional tip and review the total. Confirming or cancelling the fictional order resets the selection.

## Origin and my contribution

The foundation is Richard Krasso's MIT-licensed restaurant example, preserved in my WEB 426 coursework repository. My contribution is this recovery, visual redesign, native-JavaScript rebuild, validation and portfolio presentation, developed with ChatGPT/Codex. The recovered project retains the original license.

## How it works

The app preserves the original three categories, eleven menu choices and prices. Each bill is calculated from the current selection, so reviewing it repeatedly cannot duplicate charges. Currency calculations use integer cents, and invalid or negative tips are rejected.

This is a browser-only ordering demo. It does not submit real orders, collect payment or store customer data. No database or 96-hour cleanup is needed. Its static files are hosted for free on GitHub Pages.

## Built together

We used native HTML, CSS, SVG and JavaScript to build the design without paid assets or runtime animation packages. Tests cover the original menu, arithmetic, duplicate-review prevention and invalid tips. Browser checks cover selection, tip entry, review, confirmation, reset and mobile layouts.

The live demo is published with automated checks and deployment through GitHub Actions.
