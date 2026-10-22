---
title: 'FIELD'
description: 'An atmospheric weather dashboard with worldwide city search and a shared, rate-controlled forecast cache.'
category: 'Web app'
builtWithAI: true
tags: ['JavaScript', 'Node.js', 'Azure', 'Cosmos DB']
year: 2026
order: 22
status: 'Live'
visual: 'web'
repository: 'https://github.com/GrimSyntaxCloud/javascript-showcase'
demo: 'https://lively-tree-03a3d9f0f.5.azurestaticapps.net/'
image: 'images/projects/field-weather-home.webp'
imageAlt: 'FIELD weather display with an indigo and teal sky, oversized temperature, curved horizon and a translucent city-search rail.'
imageFit: 'contain'
screenshots:
  - src: 'images/projects/field-weather-home.webp'
    alt: 'FIELD weather display with an indigo and teal sky, oversized temperature, curved horizon and a translucent city-search rail.'
    caption: 'A panoramic weather instrument with a dedicated search rail and an illustrated horizon.'
    width: 1600
    height: 739
  - src: 'images/projects/field-weather-mobile.webp'
    alt: 'FIELD on a narrow mobile screen.'
    caption: 'A closer look at the responsive mobile experience.'
    width: 375
    height: 812
---

## The project

FIELD restores the intent of my original weather widget after its old API services stopped being suitable. The interface becomes a window onto an indigo and teal sky: an oversized temperature sits above a curved horizon, with city search in a translucent side rail and the supporting measurements in a separate row. Original CSS weather artwork responds to the reported condition; it is an atmospheric illustration, not another source of forecast data.

A sky-motion control pauses the ambient effects, and reduced-motion preferences are respected. The artwork and animation use native CSS without adding a library or paid asset.

Search a city, view the weather and switch between Fahrenheit/mph and Celsius/km/h. An optional location button asks for browser permission only when you choose it; manual city search works without that permission.

## How it works

A bundled, attributed GeoNames city index handles search locally. A managed Node.js API retrieves attributed MET Norway forecasts and exposes temperature, wind, humidity, pressure and precipitation information.

A small Cosmos DB cache coordinates requests across server instances. It respects provider cache headers and backoff responses, limits upstream request frequency, and uses a fixed number of cache slots. The cache stores weather model data rather than visitor accounts or raw location histories. Expired cache entries are removed within the configured retention policy.

The interface is static, while the proxy runs on Azure Static Web Apps Free using the existing shared database pool. No weather subscription or API key is required.

## Built together

I worked with ChatGPT/Codex to replace the obsolete services, design the interface and test real city searches and unit conversion. The recovery keeps the original weather-project purpose while making the service dependencies and data attribution explicit.
