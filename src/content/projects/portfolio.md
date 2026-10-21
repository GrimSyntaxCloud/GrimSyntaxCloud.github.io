---
title: 'A home for my work'
description: 'A lightweight portfolio for web apps, AI projects, and the stories behind them.'
category: 'Web app'
builtWithAI: true
tags: ['Astro', 'CSS', 'GitHub Actions']
year: 2026
order: 1
status: 'Live'
visual: 'web'
repository: 'https://github.com/GrimSyntaxCloud/GrimSyntaxCloud.github.io'
---

## The idea

Give my projects a home that is easy to browse and easy to maintain. Each project keeps its own repository; this site brings the context, screenshots, and links together.

## How it works

Astro turns Markdown project entries into static pages. Visitors can browse all projects or filter by Web apps and Built with AI. These filters overlap: web apps can also appear under Built with AI. The project stories explain where AI contributed, including the portfolio, Trivia Turbo, and the recent Pets-R-Us and Prism Lanes redesigns.

The site offers two designs across the homepage, project stories, and archive: Editorial by default and an Industrial alternative. Both share the same content, navigation, and motion controls. The site remembers a visitor’s design choice for their next visit when browser storage is available. The homepages include custom Three.js sculptures and project filters; project stories and the archive carry the same typography, colors, and visual details into a reading-focused layout. The 3D renderer loads separately, respects reduced-motion preferences, and has a static fallback. The site uses system fonts and plain CSS, with no database, paid API, or external font service.

## Delivery

The GitHub Actions workflow checks the site and builds it for each pull request. Pushes to `main` deploy the generated files to GitHub Pages after the checks pass.

## Built with AI

I built this portfolio with ChatGPT/Codex as an AI development collaborator. I set the goals, chose what to showcase, and directed the wording and visual design through feedback and working previews. Together, we developed the site from its initial Astro setup into the Editorial and Industrial designs available today.

AI helped implement the layouts, interactive 3D scenes, project filters, deployment workflow, and documentation. I reviewed the results and requested changes as the portfolio evolved, including keeping both designs and adding Trivia Turbo's gameplay trailer. Build checks, link checks, and browser verification supported those iterations, with the source tracked in GitHub.

“Built with AI” describes how we developed the project. The published portfolio runs as a static website and does not call an AI model when someone visits.

## Next steps

Keep the collection current as the projects evolve. The latest refresh adds live-demo screenshots and galleries, the warm Pets-R-Us clubhouse, and Prism Lanes’ After Dark design.
