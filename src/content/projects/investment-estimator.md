---
title: 'Investment Estimator'
description: 'A browser-based growth calculator with validated inputs and randomized examples.'
category: 'Web app'
tags: ['JavaScript', 'Bootstrap', 'HTML']
year: 2021
order: 10
status: 'Live'
visual: 'web'
repository: 'https://github.com/GrimSyntaxCloud/investment-estimator'
demo: 'https://grimsyntaxcloud.github.io/investment-estimator/'
image: 'images/projects/investment-estimator-home.webp'
imageAlt: 'Investment Estimator with an orange gradient background and a bordered calculation form.'
imageFit: 'contain'
screenshots:
  - src: 'images/projects/investment-estimator-home.webp'
    alt: 'Investment Estimator with an orange gradient background and a bordered calculation form.'
    caption: 'A preview of the live project interface.'
    width: 960
    height: 600
---

## The project

A JavaScript exercise that estimates annual compound growth from an initial amount, rate, and number of years. A second action generates random inputs so the calculation can be explored quickly.

## The implementation

The app validates its numeric fields before calculating a result. It uses plain DOM event handlers and Bootstrap styling.

## Scope and limitations

This is an educational calculator with a constant-rate model. The original formatting logic has edge cases for results below one thousand; it is not a financial planning product.

## Deployment

The calculator runs entirely in the browser and is served through GitHub Pages.
