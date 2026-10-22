---
title: 'Loc8r'
description: 'A map-first location guide with an illustrated neighborhood, place details and native motion.'
category: 'Web app'
builtWithAI: true
tags: ['Pug', 'Node.js', 'GitHub Pages']
year: 2023
order: 5
status: 'Live'
visual: 'web'
repository: 'https://github.com/GrimSyntaxCloud/loc8r'
demo: 'https://grimsyntaxcloud.github.io/loc8r/'
image: 'images/projects/loc8r-home.webp'
imageAlt: 'Loc8r map-first directory with a mineral-blue illustrated neighborhood, lime marker and indexed place panel.'
imageFit: 'contain'
screenshots:
  - src: 'images/projects/loc8r-home.webp'
    alt: 'Loc8r map-first directory with a mineral-blue illustrated neighborhood, lime marker and indexed place panel.'
    caption: 'The local index sits beside an illustrated map; the map is clearly labeled as a sample.'
    width: 1265
    height: 712
  - src: 'images/projects/loc8r-detail.webp'
    alt: 'Starcups detail page with address, rating, facilities and a link to OpenStreetMap.'
    caption: 'The place page preserves its hours, facilities and example reviews.'
    width: 1265
    height: 712
---

## The project

Loc8r is a location-directory learning project with sample listings, detail pages, and a sample review form.

This is a learning implementation of the Loc8r example from _Getting MEAN_, which is credited in the application's footer. The current listings use sample content.

## The implementation

The original Express application renders Pug templates. Because its current pages use fixed sample content, the deployment now renders those templates during the build and serves static HTML. The redesigned presentation uses native CSS, SVG and JavaScript. A compact place index and illustrated map replace the old repeated listings. An animated route and radar marker add movement, with a pause control and reduced-motion support.

## Working with AI

I worked with AI to turn the original sample directory into a cartographic field guide, refine its mobile layout and check the generated routes. The redesign keeps the original learning-project attribution and clearly distinguishes fictional content from a live location service.

## Scope

The repository demonstrates page routing and template-based views. Reviews are fixed examples; the review form is clearly labeled and does not submit or save information. The location page links to OpenStreetMap without an API key.

## Deployment

GitHub Actions builds and publishes the four sample pages to GitHub Pages when `main` changes. The deployed site needs no running Node.js server, database, or Azure subscription.
