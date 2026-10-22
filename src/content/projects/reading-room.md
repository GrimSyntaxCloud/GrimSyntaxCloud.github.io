---
title: 'The Reading Room'
description: 'An Angular bookshop-style catalog with book details, search and a saved wishlist.'
category: 'Web app'
builtWithAI: true
tags: ['Angular', 'TypeScript', 'Open Library']
year: 2026
order: 17
status: 'Live'
visual: 'web'
repository: 'https://github.com/GrimSyntaxCloud/angular-showcase'
demo: 'https://grimsyntaxcloud.github.io/angular-showcase/reading-room/'
image: 'images/projects/reading-room-home.webp'
imageAlt: 'The Reading Room with an ink-blue library index, parchment reading desk and dimensional illustrated books.'
imageFit: 'contain'
screenshots:
  - src: 'images/projects/reading-room-home.webp'
    alt: 'The Reading Room with an ink-blue library index, parchment reading desk and dimensional illustrated books.'
    caption: 'The refreshed desktop interface preserves the original project workflow.'
    width: 1600
    height: 739
  - src: 'images/projects/reading-room-mobile.webp'
    alt: 'The Reading Room on a narrow mobile screen.'
    caption: 'The opening mobile view, checked for readable content and controls that fit.'
    width: 375
    height: 843
---

## The project

The Reading Room recovers the In-N-Out Books app inside my Angular coursework. Its original nine-book catalog now lives on a parchment reading desk with an ink-blue library index, stacked book spines and individually illustrated jackets. Subtle opening effects and layered page edges give the bookshelf depth while keeping the catalog easy to browse.

Explore the catalog, search for a book, open its details or add an entry to your wishlist. The wishlist is saved in the current browser.

## How it works

A maintained Angular workspace separates catalog data, interface state and wishlist behavior. Open Library supplies book metadata; validation and failure handling keep unavailable or incomplete responses from breaking the page. This is a reading-list demo, with no checkout, payments or user-account service.

## Built together

I worked with ChatGPT/Codex to modernize the coursework and develop the visual direction. We preserved the original catalog and manual wishlist workflow, repaired API handling and tested persistence, details and responsive layouts. GitHub Actions checks the app before publishing its static build to GitHub Pages.
