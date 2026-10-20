---
title: 'Bob’s Computer Repair Shop'
description: 'A fictional repair-shop demo with a service catalog, sample invoices, and a purchases chart backed by Cosmos DB.'
category: 'Web app'
tags: ['Angular', 'Node.js', 'Azure', 'Cosmos DB']
year: 2023
order: 2
status: 'Live'
visual: 'code'
repository: 'https://github.com/GrimSyntaxCloud/BCRS'
demo: 'https://brave-river-09cd8f10f.6.azurestaticapps.net'
---

## The project

Bob’s Computer Repair Shop is a web development project built around a computer repair business.

The deployed application credits Andres Macias, Patrick Wolff, and April Yang. This entry describes the team application rather than attributing every feature to one contributor.

## Try the shared demo

Choose **Open demo**, then **Open shared demo**. Pick repair services, preview and save a sample invoice, and open **Configurations → Chart** from the demo account menu to see the purchase counts.

This is a public fictional demo. It retains the latest 50 shared sample invoices and places no real orders or payments. User, role, and security-question screens show read-only examples; registration, recovery, and account editing are disabled. No original customer or account data was migrated.

## The stack

Angular Material and PrimeNG provide interface components, and Chart.js displays service counts. Azure Static Web Apps Free serves the frontend and an included Node.js Functions API. The API uses Mongoose to access Cosmos DB's MongoDB-compatible interface.

The server calculates prices from the fixed catalog, validates adjustments, and bounds invoice storage. BCRS and Nodebucket share one Cosmos free-tier account, with a separate database for each app.

## Explore the code

The frontend lives in `src`, and the deployed demo API lives in `api`. Original team coursework remains credited in the source and interface. The repository includes setup instructions and a GitHub Actions workflow that tests, builds, deploys, and checks database connectivity.

The original Angular 14 frontend remains legacy software. The Azure deployment uses free service tiers with the trial spending limit enabled; availability depends on the subscription remaining active.
