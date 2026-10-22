---
title: 'Eny Salon'
description: 'A warm salon website with private booking workspaces, appointment management and persistent demo data.'
category: 'Web app'
builtWithAI: true
tags: ['Node.js', 'Express', 'Azure', 'Cosmos DB', 'PHP']
year: 2026
order: 23
status: 'Live'
visual: 'web'
repository: 'https://github.com/GrimSyntaxCloud/eny-salon'
demo: 'https://zealous-grass-00a9b990f.3.azurestaticapps.net/'
image: 'images/projects/eny-salon-home.webp'
imageAlt: 'Eny Salon with a giant peach masthead, aubergine background, sculptural satin artwork and curved rose sections.'
imageFit: 'contain'
screenshots:
  - src: 'images/projects/eny-salon-home.webp'
    alt: 'Eny Salon with a giant peach masthead, aubergine background, sculptural satin artwork and curved rose sections.'
    caption: 'The redesigned desktop experience.'
    width: 1425
    height: 990
  - src: 'images/projects/eny-salon-mobile.webp'
    alt: 'Eny Salon on a narrow mobile screen.'
    caption: 'A closer look at the responsive mobile experience.'
    width: 375
    height: 843
---

## The project

Eny Salon began as my PHP salon-booking coursework. The recovery keeps its original services and prices, giving the experience a bold aubergine-and-peach beauty-studio identity. A giant ENY masthead, sculptural satin artwork, horizontal service rows and curved rose sections establish a distinct layout across the booking and staff workflows.

Explore the service menu, choose an available appointment, enter fictional customer details and try the staff workspace. Appointment editing, rescheduling, availability management and a message inbox demonstrate the complete workflow.

## A private space to try the features

Each visitor works in an isolated demo workspace. Bookings and staff changes persist in Cosmos DB without changing another visitor's records. Optional workspace sign-in lets you return with your own demo credentials. Permanent fictional examples remain protected.

Visitor workspaces expire 96 hours after creation; edits do not extend that deadline. The server rejects expired access, and scheduled cleanup removes expired data. Workspace and record limits keep the demo small.

Confirmation messages stay in a clearly labeled demo outbox. The app sends no email, takes no payment and reserves no real salon appointment.

## From PHP coursework to a hosted edition

The repository retains the PHP/SQLite edition. The published edition adapts its workflows to Express/EJS and managed Node.js functions on Azure Static Web Apps Free, using the existing shared Cosmos database. Server-side validation, CSRF protection, hashed passwords and collection-scoped credentials protect the hosted workflow.

## Built together

I worked with ChatGPT/Codex to recover the project, redesign the interface and prepare its free hosted edition. We verified booking, edits, workspace isolation, expiry and the serverless adapter, then tested the published experience.
