---
title: 'Event Countdown'
description: 'A split-flap event board that turns a date into a bold countdown, milestone or today celebration.'
category: 'Web app'
builtWithAI: true
tags: ['JavaScript', 'Dates', 'DOM']
year: 2020
order: 8
status: 'Live'
visual: 'code'
repository: 'https://github.com/GrimSyntaxCloud/countdown'
demo: 'https://grimsyntaxcloud.github.io/countdown/'
image: 'images/projects/event-countdown-home.webp'
imageAlt: 'Event Countdown with amber split-flap digits on a dark board and a compact event-name and date form.'
imageFit: 'contain'
screenshots:
  - src: 'images/projects/event-countdown-home.webp'
    alt: 'Event Countdown with amber split-flap digits on a dark board and a compact event-name and date form.'
    caption: 'A split-flap display shows calendar days until or since the selected event.'
    width: 1440
    height: 1100
---

## The project

Enter an event name and a date in MM/DD/YYYY format to see how many days remain. The app also handles events that have already happened and events occurring today.

## The implementation

The script checks for missing values and real calendar dates, compares them with the current date, and updates the board and its accessible status message. Calendar-day arithmetic avoids daylight-saving changes producing an extra or missing day.

## What this demonstrates

Date arithmetic, input validation, string formatting, and DOM updates. I worked with AI to redesign the exercise as an amber-and-ink split-flap board with tactile input controls, animated digits and a motion toggle. Reduced-motion preferences are respected.

This is a calendar-day tool, not a timezone-aware scheduling system. Entries stay in the current browser tab; there is no account or database.

## Deployment

The application is static and runs on GitHub Pages without a backend.
