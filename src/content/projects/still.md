---
title: "Still"
description: "A calm task list with local persistence, completion filters and a tactile sage-and-paper design."
category: 'Web app'
builtWithAI: true
tags: ["JavaScript", "Local storage", "DOM"]
year: 2026
order: 16
status: 'Live'
visual: 'web'
repository: 'https://github.com/GrimSyntaxCloud/javascript-showcase'
demo: 'https://grimsyntaxcloud.github.io/javascript-showcase/still/'
image: 'images/projects/still-home.webp'
imageAlt: "Still task manager with sage navigation, paper-colored content and a stacked-stone illustration."
imageFit: 'contain'
screenshots:
  - src: 'images/projects/still-home.webp'
    alt: "Still task manager with sage navigation, paper-colored content and a stacked-stone illustration."
    caption: 'The refreshed desktop interface preserves the original project workflow.'
    width: 1600
    height: 987
  - src: 'images/projects/still-mobile.webp'
    alt: "Still on a narrow mobile screen."
    caption: 'The opening mobile view, checked for readable content and controls that fit.'
    width: 375
    height: 843
---

## The project

Still is a quieter take on my earlier JavaScript to-do list. A sage sidebar, generous spacing and CSS stone artwork give a simple daily workflow room to breathe.

Add tasks, mark them complete, filter the list and remove finished items. Progress feedback helps show what is left without turning the page into a complicated dashboard.

## How it works

Tasks persist in localStorage on the current browser. The app can import valid task data from the original exercise and reports when storage is unavailable. Task text is rendered safely as text, including input that looks like HTML.

This is a browser-local tool: it does not create accounts or synchronize tasks between devices. It is a separate project from my object-oriented Task Manager coursework.

## Built together

I worked with ChatGPT/Codex to recover the original functionality and redesign it around a calmer visual identity. We verified add, complete, filter, delete and reload persistence, then checked the narrow-screen layout. GitHub Pages serves the app without a backend or paid service.
