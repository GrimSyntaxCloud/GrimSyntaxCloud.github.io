---
title: 'Loc8r'
description: 'A location-directory learning project with sample listings, Pug templates, and free static hosting.'
category: 'Web app'
tags: ['Pug', 'Node.js', 'GitHub Pages']
year: 2023
order: 5
status: 'Live'
visual: 'web'
repository: 'https://github.com/GrimSyntaxCloud/loc8r'
demo: 'https://grimsyntaxcloud.github.io/loc8r/'
image: 'images/projects/loc8r-home.webp'
imageAlt: 'Loc8r location directory with a red navigation bar, teal background and sample Wi-Fi listings.'
imageFit: 'contain'
screenshots:
  - src: 'images/projects/loc8r-home.webp'
    alt: 'Loc8r location directory with a red navigation bar, teal background and sample Wi-Fi listings.'
    caption: 'A preview of the live project interface.'
    width: 1280
    height: 800
---

## The project

Loc8r is a location-directory learning project with sample listings, detail pages, and a sample review form.

This is a learning implementation of the Loc8r example from _Getting MEAN_, which is credited in the application's footer. The current listings use sample content.

## The implementation

The original Express application renders Pug templates. Because its current pages use fixed sample content, the deployment now renders those templates during the build and serves static HTML. The presentation uses Bootstrap and shared layout styles.

## Scope

The repository demonstrates page routing and template-based views. Reviews are fixed examples; the review form is clearly labeled and does not submit or save information. The location page links to OpenStreetMap without an API key.

## Deployment

GitHub Actions builds and publishes the four sample pages to GitHub Pages when `main` changes. The deployed site needs no running Node.js server, database, or Azure subscription.
