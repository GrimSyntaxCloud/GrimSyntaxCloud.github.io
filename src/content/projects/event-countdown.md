---
title: 'Event Countdown'
description: 'A small browser tool that calculates the days until—or since—a named event.'
category: 'Web app'
tags: ['JavaScript', 'Dates', 'DOM']
year: 2020
order: 8
status: 'Live'
visual: 'code'
repository: 'https://github.com/GrimSyntaxCloud/countdown'
demo: 'https://grimsyntaxcloud.github.io/countdown/'
image: 'images/projects/event-countdown-home.webp'
imageAlt: 'Event Countdown form with event name and date fields inside a blue border.'
imageFit: 'contain'
screenshots:
  - src: 'images/projects/event-countdown-home.webp'
    alt: 'Event Countdown form with event name and date fields inside a blue border.'
    caption: 'A preview of the live project interface.'
    width: 630
    height: 394
---

## The project

Enter an event name and a date in MM/DD/YYYY format to see how many days remain. The app also handles events that have already happened and events occurring today.

## The implementation

The script checks for missing values, parses the date, compares it with the current date, and updates an inline message.

## What this demonstrates

Date arithmetic, input validation, string formatting, and DOM updates. This is a simple calendar-day approximation rather than a timezone-aware scheduling system.

## Deployment

The application is static and runs on GitHub Pages without a backend.
