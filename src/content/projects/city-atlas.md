---
title: "City Atlas"
description: "An interactive D3 map exploring a historical sample of 50 U.S. cities."
category: 'Web app'
builtWithAI: true
tags: ["D3", "JavaScript", "Data visualization"]
year: 2026
order: 20
status: 'Live'
visual: 'web'
repository: 'https://github.com/GrimSyntaxCloud/city-atlas'
demo: 'https://grimsyntaxcloud.github.io/city-atlas/'
image: 'images/projects/city-atlas-home.webp'
imageAlt: "City Atlas with a paper-and-ink United States map, proportional city markers and a ranked city index."
imageFit: 'contain'
screenshots:
  - src: 'images/projects/city-atlas-home.webp'
    alt: "City Atlas with a paper-and-ink United States map, proportional city markers and a ranked city index."
    caption: 'The refreshed desktop interface preserves the original project workflow.'
    width: 1265
    height: 1400
  - src: 'images/projects/city-atlas-mobile.webp'
    alt: "City Atlas on a narrow mobile screen."
    caption: 'The opening mobile view, checked for readable content and controls that fit.'
    width: 375
    height: 843
---

## The project

City Atlas recovers the D3 mapping exercise from my Emerging-tech coursework. A paper-and-ink cartographic layout puts the map, selected city and searchable index into one responsive workspace.

Explore 50 cities, filter the top 10 or 25, toggle state labels, step through the selection or download the CSV. Marker area remains proportional to population.

## How it works

D3 projects the state boundaries and city coordinates into an accessible SVG map. Search and ranking filters work together, with keyboard-selectable markers and clear empty results. Code and data are bundled locally, so the demo needs no map API, key or subscription.

The city values are the original historical example dataset, with no consistent census year declared. They are not current population figures. The published state boundaries use attributed U.S. Census data distributed by the openly licensed us-atlas project.

## Built together

I worked with ChatGPT/Codex to redesign and modernize the original exercise while preserving its data and proportional-marker behavior. Tests cover all 50 records, filtering, projection and marker sizing; browser checks cover interaction and narrow screens. GitHub Actions publishes the verified build to GitHub Pages.
