---
title: 'Nodebucket'
description: 'A calm Angular task workspace with drag-and-drop, accessible move controls and persistent Cosmos DB storage.'
category: 'Web app'
builtWithAI: true
tags: ['Angular', 'Node.js', 'Azure', 'Cosmos DB']
year: 2023
order: 3
status: 'Live'
visual: 'web'
repository: 'https://github.com/GrimSyntaxCloud/nodebucket'
demo: 'https://red-mushroom-0f3c1260f.1.azurestaticapps.net'
image: 'images/projects/nodebucket-home.webp'
imageAlt: 'Nodebucket workspace with lilac accents, a completion ring, and Todo and Done task cards.'
imageFit: 'contain'
screenshots:
  - src: 'images/projects/nodebucket-home.webp'
    alt: 'Nodebucket workspace with lilac accents, a completion ring, and Todo and Done task cards.'
    caption: 'The redesigned board, shown with controlled fictional tasks, keeps task entry and movement in one workspace.'
    width: 1265
    height: 1054
  - src: 'images/projects/nodebucket-signin.webp'
    alt: 'Nodebucket sign-in page with the prefilled shared-demo employee ID and Open demo button.'
    caption: 'The sign-in explains the shared workspace and its sample-data rules before visitors enter.'
    width: 1265
    height: 771
---

## The project

Nodebucket is a task management project with a straightforward workflow: add a task, organize it, and move it to done. Originally built as WEB 450 coursework, it now has a working Azure-hosted demo.

## Try the shared demo

Open the demo and use employee ID **1007**. Add a sample task, drag it between **Todo** and **Done** or use its move button, and reload the page to see it persist.

Everyone shares this board and can change visitor-created tasks. A permanent fictional sample task is protected from deletion. It holds up to 50 tasks and is intended for sample data, so please do not enter personal information. The employee number opens the demo; it is not private account authentication.

## Demo data and cleanup

Visitor-created tasks expire 96 hours after creation. Editing a task or moving it between lists does not restart that clock. The shared employee board and permanent sample task remain available.

The API filters expired tasks immediately. Cleanup on API access and an hourly GitHub Actions workflow remove expired records; delayed scheduled runs may postpone physical deletion. Nodebucket shares the existing 400 RU/s Cosmos database pool with the other backend demos, using a collection and credentials scoped to the app.

## The interface

Angular Material provides the form fields, cards, and controls. Angular CDK handles dragging tasks between the lists. Tasks can be added through a validated form and removed using a confirmation dialog. Move buttons provide a keyboard and touch alternative to dragging, using the same saved task operations.

I worked with AI to redesign the app as a graphite, warm-grey and lilac workspace. A completion ring reflects the actual board, task cards show their status, and mobile layouts keep entry and movement controls usable. The redesign preserves the database and cleanup rules.

## Behind the interface

Azure Static Web Apps serves the frontend and a managed Node.js Functions API. The API stores tasks in Cosmos DB through its MongoDB interface. The same task operations run through Express for local development.

The backend validates task input, limits stored tasks, and detects conflicting updates. GitHub Actions runs integration tests, builds the frontend and API, deploys changes from the main branch, and checks database connectivity afterward.

The demo uses Azure's free service tiers. The frontend runs Angular 21 LTS with compatible Material and PrimeNG libraries. CI checks dependency advisories alongside the automated tests and production build.
