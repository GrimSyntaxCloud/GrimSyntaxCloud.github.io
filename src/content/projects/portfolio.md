---
title: 'A home for my work'
description: 'A lightweight portfolio for web apps, AI projects, and the stories behind them.'
category: 'Web app'
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

Astro turns Markdown project entries into static pages. The homepage lists the projects and lets visitors filter between web apps and AI projects.

The site offers two homepage designs: Editorial by default and an Industrial alternative. Both share the same content and include custom Three.js sculptures, project filters, and motion controls. The 3D renderer loads separately, respects reduced-motion preferences, and has a static fallback. The site uses system fonts and plain CSS, with no database, paid API, or external font service.

## Delivery

The GitHub Actions workflow checks the site and builds it for each pull request. Pushes to `main` also deploy the generated files to GitHub Pages once Pages is enabled.

## Built with AI assistance

AI tools assisted with the initial implementation and documentation. The source stays in GitHub so changes can be reviewed and tracked.

## Next steps

Add more project write-ups, screenshots, and lessons learned as the collection grows.
