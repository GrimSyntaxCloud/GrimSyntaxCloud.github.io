---
title: 'Opus'
description: 'An Angular composer directory presented as a contemporary concert program.'
category: 'Web app'
builtWithAI: true
tags: ['Angular', 'TypeScript', 'Reactive search']
year: 2026
order: 19
status: 'Live'
visual: 'web'
repository: 'https://github.com/GrimSyntaxCloud/angular-showcase'
demo: 'https://grimsyntaxcloud.github.io/angular-showcase/opus/'
image: 'images/projects/opus-home.webp'
imageAlt: 'Opus with a black-cherry stage, oversized ivory masthead, chartreuse accents and numbered composer program listings.'
imageFit: 'contain'
screenshots:
  - src: 'images/projects/opus-home.webp'
    alt: 'Opus with a black-cherry stage, oversized ivory masthead, chartreuse accents and numbered composer program listings.'
    caption: 'A theatrical opening leads into a numbered composer program and a dedicated search rail.'
    width: 1600
    height: 739
  - src: 'images/projects/opus-mobile.webp'
    alt: 'Opus on a narrow mobile screen.'
    caption: 'The opening mobile view, checked for readable content and controls that fit.'
    width: 375
    height: 844
---

## The project

Opus turns my Angular composer-directory exercise into a theatrical concert playbill. An oversized ivory masthead sits on a black-cherry stage, crossed by musical staff lines and chartreuse accents. Below, a narrow search rail accompanies a sequence of numbered composer listings, giving the original five-composer collection room to breathe.

Search the directory and open an individual composer to explore their information. The interface includes useful empty-search and missing-record states instead of leaving visitors at a broken detail page.

## How it works

Original CSS musical motifs and restrained interaction effects support the concert identity, with reduced-motion support and no paid assets.

Reactive search filters the original records as you type. The recovery replaced the old search alert placeholder with a working filter and fixed detail fields that previously displayed literal text. Angular handles the directory and detail navigation; GitHub Pages serves the static build.

## Built together

I worked with ChatGPT/Codex to recover the coursework, create its new visual direction and verify the result. We tested search, navigation and record handling, then reviewed desktop and mobile layouts. This is a directory demo, not a music-streaming service.
