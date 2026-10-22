---
title: 'The Edit'
description: 'A newsroom-style CMS with private editorial workspaces, roles, image uploads and CSV exchange.'
category: 'Web app'
builtWithAI: true
tags: ['Node.js', 'Express', 'Azure', 'Cosmos DB', 'PHP']
year: 2026
order: 24
status: 'Live'
visual: 'web'
repository: 'https://github.com/GrimSyntaxCloud/the-edit-cms'
demo: 'https://salmon-pebble-0af10980f.2.azurestaticapps.net/'
image: 'images/projects/the-edit-home.webp'
imageAlt: 'The Edit publication with slate and red accents, oversized headlines and a modern editorial layout.'
imageFit: 'contain'
screenshots:
  - src: 'images/projects/the-edit-home.webp'
    alt: 'The Edit publication with slate and red accents, oversized headlines and a modern editorial layout.'
    caption: 'The redesigned desktop experience.'
    width: 1600
    height: 739
  - src: 'images/projects/the-edit-mobile.webp'
    alt: 'The Edit on a narrow mobile screen.'
    caption: 'A closer look at the responsive mobile experience.'
    width: 375
    height: 843
---

## The project

The Edit recovers the content-management project inside my advanced PHP coursework. A slate-and-red newsroom layout connects a publication-style homepage with a practical editorial desk.

Create a private demo workspace, write and edit articles and pages, manage fictional users and roles, upload images, and exchange stories through CSV. The project also includes a latest-article widget and read-only JSON routes. The recovery completes the original intended CSV import/export workflow and fixes its broken methods.

## Real persistence, isolated editing

Each visitor's editorial workspace is stored separately in Cosmos DB. Server-side sessions and role checks control access; users cannot read or edit another workspace. Permanent sample content is read-only and can be copied into a workspace for experimentation.

Workspaces expire 96 hours after creation. The server checks that deadline, and an hourly cleanup job clears expired content, credentials, sessions and images while preserving the permanent examples. Images are validated, resized and compressed; explicit content and storage limits keep the public demo bounded.

## The hosted edition

The PHP/SQLite edition remains in the repository. The live edition preserves the editorial workflows in Node.js, Express and EJS so it can use Azure Static Web Apps Free and the existing shared Cosmos database. Credentials stay in server settings and protected deployment secrets.

## Built together

I worked with ChatGPT/Codex on the recovery, visual direction and hosted adaptation. We tested article and page editing, roles, private images, CSV validation, workspace isolation and cleanup before publication. The project is coursework restored and extended with AI assistance.
