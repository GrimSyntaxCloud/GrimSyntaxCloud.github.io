---
title: 'Interval'
description: 'An expressive event-registration demo with server-side validation and clearly labeled sample statistics.'
category: 'Web app'
builtWithAI: true
tags: ['JavaScript', 'Node.js', 'Azure']
year: 2026
order: 21
status: 'Live'
visual: 'web'
repository: 'https://github.com/GrimSyntaxCloud/javascript-showcase'
demo: 'https://lively-desert-0d824e10f.2.azurestaticapps.net/'
image: 'images/projects/interval-home.webp'
imageAlt: 'Interval event page with lilac and apricot panels, editorial type and a registration form.'
imageFit: 'contain'
screenshots:
  - src: 'images/projects/interval-home.webp'
    alt: 'Interval event page with lilac and apricot panels, editorial type and a registration form.'
    caption: 'The redesigned desktop experience.'
    width: 1600
    height: 739
  - src: 'images/projects/interval-mobile.webp'
    alt: 'Interval on a narrow mobile screen.'
    caption: 'A closer look at the responsive mobile experience.'
    width: 375
    height: 843
---

## The project

Interval recovers my JavaScript event-registration exercise as a fictional creative event. An editorial layout, lilac and apricot palette, and dimensional CSS artwork give the form and statistics a shared identity.

Use the fictional sample-fill option, submit the form and explore the three statistics views. The server validates the request and returns a clear result.

## A working API, with honest demo boundaries

The original backend returned a response without saving registrations. This version preserves that behavior: submissions are validated and discarded. There is no ticket, account, payment, email or real event booking. The charts use the original fixed sample arrays and do not change after a submission.

Azure Static Web Apps Free serves the interface and a managed Node.js API. Server-side allowlists and request-size limits check submitted fields independently of the browser. No database is needed and no personal details need to be entered.

## Built together

I worked with ChatGPT/Codex to recover the coursework, develop its visual identity and repair the form workflow. We tested server validation, actual browser submission and the original chart values. GitHub Actions runs the checks before deploying; the app adds no paid assets or services.
