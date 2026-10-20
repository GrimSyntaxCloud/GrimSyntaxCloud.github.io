---
title: 'Loc8r'
description: 'A location-directory prototype with listings, location details, and review forms.'
category: 'Web app'
tags: ['Express', 'Node.js', 'Pug']
year: 2023
order: 5
status: 'Live'
visual: 'web'
repository: 'https://github.com/GrimSyntaxCloud/loc8r'
demo: 'https://loc8r.onrender.com'
---

## The project

Loc8r is a server-rendered web application with location listings, detail pages, and an add-review form.

This is a learning implementation of the Loc8r example from _Getting MEAN_, which is credited in the application's footer. The current listings use sample content.

## The implementation

Express routes requests to controller functions, which render Pug templates. The presentation uses Bootstrap and shared layout styles.

## Scope

The repository demonstrates page routing and server-rendered views. The presence of a review form does not imply that reviews are persisted; a production review system would need storage and validation.

## Deployment

The existing Render deployment is linked here. This app needs a Node.js server, so GitHub Pages cannot host the application itself.
