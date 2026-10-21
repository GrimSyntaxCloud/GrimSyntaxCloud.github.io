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

Astro turns Markdown project entries into static pages. Visitors can browse all projects or filter by Web apps and Built with AI. These filters overlap: this portfolio and Trivia Turbo are web apps developed with AI assistance.

The site offers two homepage designs: Editorial by default and an Industrial alternative. Both share the same content and include custom Three.js sculptures, project filters, and motion controls. The 3D renderer loads separately, respects reduced-motion preferences, and has a static fallback. The site uses system fonts and plain CSS, with no database, paid API, or external font service.

## Delivery

The GitHub Actions workflow checks the site and builds it for each pull request. Pushes to `main` also deploy the generated files to GitHub Pages once Pages is enabled.

## Built with AI

I built this portfolio with ChatGPT/Codex as an AI development collaborator. I set the goals, chose what to showcase, and directed the wording and visual design through feedback and working previews. Together, we developed the site from its initial Astro setup into the Editorial and Industrial designs available today.

AI helped implement the layouts, interactive 3D scenes, project filters, deployment workflow, and documentation. I reviewed the results and requested changes as the portfolio evolved, including keeping both designs and adding Trivia Turbo's gameplay trailer. Build checks, link checks, and browser verification supported those iterations, with the source tracked in GitHub.

“Built with AI” describes how we developed the project. The published portfolio runs as a static website and does not call an AI model when someone visits.

## Next steps

Add more project write-ups, screenshots, and lessons learned as the collection grows.
