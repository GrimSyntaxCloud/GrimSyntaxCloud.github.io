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
imageAlt: 'The Edit newsroom with an oversized black masthead, cobalt folded-newsprint artwork, orange annotations and numbered stories.'
imageFit: 'contain'
screenshots:
  - src: 'images/projects/the-edit-home.webp'
    alt: 'The Edit newsroom with an oversized black masthead, cobalt folded-newsprint artwork, orange annotations and numbered stories.'
    caption: 'The publication front page: a bold masthead, original newsprint artwork and a numbered story rail.'
    width: 1425
    height: 990
  - src: 'images/projects/the-edit-mobile.webp'
    alt: 'The Edit on a narrow mobile screen.'
    caption: 'A closer look at the responsive mobile experience.'
    width: 375
    height: 844
  - src: 'images/projects/the-edit-desk.webp'
    alt: 'The Edit private editorial desk with a dark publishing sidebar, searchable story table and protected sample articles.'
    caption: 'Inside a fictional private workspace: publishing tools, protected samples and a visible expiry deadline.'
    width: 1425
    height: 990
---

## The project

The Edit recovers the content-management project inside my advanced PHP coursework. The publication opens with an oversized black masthead, original cobalt folded-newsprint artwork, orange annotations and a numbered story rail. Inside the private editorial desk, a dark tool rail keeps publishing controls together while focused forms and mobile record cards make the working screens easier to scan.

The visual treatment uses original SVG artwork, native CSS and restrained effects with reduced-motion support.

Create a private demo workspace, write and edit articles and pages, manage fictional users and roles, upload images, and exchange stories through CSV. The project also includes a latest-article widget and read-only JSON routes. The recovery completes the original intended CSV import/export workflow and fixes its broken methods.

## Real persistence, isolated editing

Each visitor's editorial workspace is stored separately in Cosmos DB. Server-side sessions and role checks control access; users cannot read or edit another workspace. Permanent sample content is read-only and can be copied into a workspace for experimentation.

Workspaces expire 96 hours after creation. The server checks that deadline, and an hourly cleanup job clears expired content, credentials, sessions and images while preserving the permanent examples. Images are validated, resized and compressed; explicit content and storage limits keep the public demo bounded.

## The hosted edition

The PHP/SQLite edition remains in the repository. The live edition preserves the editorial workflows in Node.js, Express and EJS so it can use Azure Static Web Apps Free and the existing shared Cosmos database. Credentials stay in server settings and protected deployment secrets.

## Built together

I worked with ChatGPT/Codex on the recovery, visual direction and hosted adaptation. We tested article and page editing, roles, private images, CSV validation, workspace isolation and cleanup before publication. The project is coursework restored and extended with AI assistance.
