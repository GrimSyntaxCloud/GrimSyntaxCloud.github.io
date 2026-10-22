---
title: 'Meme Press'
description: 'A playful browser-based image workshop with live captions and downloadable memes.'
category: 'Web app'
builtWithAI: true
tags: ['JavaScript', 'Canvas', 'Accessible UI']
year: 2026
order: 15
status: 'Live'
visual: 'web'
repository: 'https://github.com/GrimSyntaxCloud/javascript-showcase'
demo: 'https://grimsyntaxcloud.github.io/javascript-showcase/meme-press/'
image: 'images/projects/meme-press-home.webp'
imageAlt: 'Meme Press in hot pink and ink, with a full-width print bed, tilted image proof and three editing stations.'
imageFit: 'contain'
screenshots:
  - src: 'images/projects/meme-press-home.webp'
    alt: 'Meme Press in hot pink and ink, with a full-width print bed, tilted image proof and three editing stations.'
    caption: 'A digital print shop: the image takes center stage above three numbered editing stations.'
    width: 1392
    height: 1600
  - src: 'images/projects/meme-press-mobile.webp'
    alt: 'Meme Press on a narrow mobile screen.'
    caption: 'The opening mobile view, checked for readable content and controls that fit.'
    width: 375
    height: 844
---

## The project

Meme Press started as my JavaScript meme-creator coursework. The redesigned tool feels like an independent internet print shop. Hot pink and ink surround a full-width press bed, a tilted paper proof and three numbered editing stations. An original SVG smile, registration marks and an acid-green export button give it a playful personality.

Choose a local JPEG, PNG or WebP, add captions, adjust the text size and download a PNG. Images stay in your browser; there is no upload service, account or API key.

## How it works

Short paper-arrival and hover effects respect reduced-motion preferences. The design uses native CSS, SVG and system fonts, with no additional libraries or asset subscriptions.

Canvas draws the selected image and wraps captions to fit. Image validation and output-size limits keep the workflow predictable. Downloads use a real PNG Blob, and the sample illustration is made with code rather than a paid image asset.

## Built together

The original exercise was mine. I worked with ChatGPT/Codex to recover it, choose a new visual direction and repair the experience. We checked caption editing, image selection and actual PNG download/re-import on desktop and mobile. The redesigned source is separated from the historical coursework and deploys through GitHub Actions to GitHub Pages.
