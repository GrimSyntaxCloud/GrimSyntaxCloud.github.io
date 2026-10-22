---
title: 'Endpoint Studio'
description: 'An interactive REST API workbench for exploring real requests, responses and private demo data.'
category: 'Web app'
builtWithAI: true
tags: ['REST API', 'Node.js', 'MongoDB', 'Azure']
year: 2026
order: 26
status: 'In progress'
visual: 'web'
image: 'images/projects/endpoint-studio-home.webp'
imageAlt: 'An orange and charcoal API instrument panel with a spirograph and MAKE CONTACT headline.'
imageFit: 'contain'
screenshots:
  - src: 'images/projects/endpoint-studio-home.webp'
    alt: 'An orange and charcoal API instrument panel with a spirograph and MAKE CONTACT headline.'
    caption: 'The opening design, captured from the working local preview.'
    width: 1265
    height: 889
  - src: 'images/projects/endpoint-studio-workbench.webp'
    alt: 'The workbench sends real API requests and displays status, timing and formatted JSON.'
    caption: 'The workbench sends real API requests and displays status, timing and formatted JSON.'
    width: 1265
    height: 889
  - src: 'images/projects/endpoint-studio-mobile.webp'
    alt: 'Endpoint Studio on a narrow mobile screen.'
    caption: 'A narrow-screen view with responsive content and controls.'
    width: 375
    height: 812
---

## The project

Endpoint Studio turns my WEB 420 REST API coursework into an interactive developer workbench. Its orange and charcoal instrument-panel layout pairs kinetic typography and a rotating spirograph with split-flap-style response codes. The visual feedback follows real request activity, so the interface makes the backend easier to explore.

Choose composers, people, teams or customers; create a private workspace; then send a request and inspect its response. The recovered API also includes team players, customer invoices and a signup/password-verification exercise. Example requests make the workflows approachable without hiding the JSON or HTTP methods.

## How it works

A Node.js and Express API validates requests and stores visitor records in an isolated workspace. The prepared Azure deployment uses native MongoDB access to the existing shared Cosmos DB database. A random bearer credential identifies each workspace; only its hash is stored on the server. Password examples use salted scrypt hashes, and invoice totals are calculated by the server.

Visitor workspaces expire 96 hours after creation. Editing data or signing in does not renew the deadline. Expired data is rejected by the API and physically removed by the next successful cleanup job. Fictional, read-only examples are bundled with the application and remain available after cleanup.

The signup exercise demonstrates password verification within a private demo workspace; it is not a production identity service. Visitors should use fictional details and a password they do not use elsewhere.

## Built together

I worked with ChatGPT/Codex to recover the coursework, modernize its dependencies and build an interface around the real API. Validation covers private workspace isolation, expiry boundaries, immutable examples, malformed input, password handling, invoice preservation and database persistence. Customer edits also preserve unique usernames so invoice routes remain unambiguous.

The local preview is ready. Public source and live deployment are awaiting approval.
