---
title: 'Savings Calculator'
description: 'A botanical savings studio with growth rings, annual balances and an accessible compound-interest model.'
category: 'Web app'
builtWithAI: true
tags: ['JavaScript', 'HTML', 'CSS']
year: 2020
order: 9
status: 'Live'
visual: 'code'
repository: 'https://github.com/GrimSyntaxCloud/savings-calculator-app'
demo: 'https://grimsyntaxcloud.github.io/savings-calculator-app/'
image: 'images/projects/savings-calculator-home.webp'
imageAlt: 'Savings Calculator with three horizontal input cards, green-and-yellow growth rings and a future-balance summary.'
imageFit: 'contain'
screenshots:
  - src: 'images/projects/savings-calculator-home.webp'
    alt: 'Savings Calculator with three horizontal input cards, green-and-yellow growth rings and a future-balance summary.'
    caption: 'A garden-bench layout connects the entered assumptions to actual growth rings and balance totals.'
    width: 1265
    height: 1255
---

## The project

Enter an initial amount, a number of years, and an annual interest rate to calculate a future value with annual compounding.

## The implementation

The script validates the fields, iterates over the requested years, and displays a formatted result. The SVG rings and year-by-year table use that same annual progression. Circle areas represent balances: the dark center shows the starting amount and the yellow area shows interest. At zero interest the rings overlap.

A clear action resets inputs and results. Editing assumptions or entering invalid values clears stale results. The original amount, rate and term limits remain in place.

## The redesign

I worked with AI to give the calculator a botanical identity using moss, mint and warm yellow. Three input cards form a horizontal bench above the growth visualization and balance breakdown. A brief ring reveal, responsive stacking, keyboard controls and reduced-motion support make the interface expressive without changing its calculation model.

## Scope and limitations

This is an educational programming exercise. It uses a constant annual rate and excludes deposits, withdrawals, fees and inflation. Validation rejects malformed inputs, and currency formatting handles both small amounts and large results.

## Deployment

All calculations run in the browser. The existing GitHub Pages deployment is linked below the project introduction.
