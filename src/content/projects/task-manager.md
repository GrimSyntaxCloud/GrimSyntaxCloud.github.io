---
title: 'Object-Oriented Task Manager'
description: 'A tactile task desk with inline editing, alphabetical organization and persistent browser storage.'
category: 'Web app'
builtWithAI: true
tags: ['JavaScript', 'Local storage', 'OOP']
year: 2020
order: 11
status: 'Live'
visual: 'web'
repository: 'https://github.com/GrimSyntaxCloud/taskManager-OOP'
demo: 'https://grimsyntaxcloud.github.io/taskManager-OOP/'
image: 'images/projects/task-manager-home.webp'
imageAlt: 'Object-Oriented Task Manager with a coral note-entry card and a paper filing folder containing numbered task cards.'
imageFit: 'contain'
screenshots:
  - src: 'images/projects/task-manager-home.webp'
    alt: 'Object-Oriented Task Manager with a coral note-entry card and a paper filing folder containing numbered task cards.'
    caption: 'The paper desk shown with three fictional local tasks. Visitors start with an empty list or their own saved tasks.'
    width: 1265
    height: 877
---

## The project

A task manager developed as a JavaScript learning exercise. Tasks can be added, edited, deleted, sorted, and restored from browser storage.

## The implementation

The repository separates task objects, storage helpers, list behavior, and interface event handlers. The task-list object exposes chainable operations such as load, save, sort and display. Tasks remain automatically alphabetized. The existing storage key and versioned JSON format are preserved, including migration from the older pipe-separated format; new task text can contain literal pipe characters.

I worked with AI to redesign the interface as an indexed paper desk with coral notes, navy folder tabs and tactile task cards. Inline editing makes saving or canceling visible, while short arrival and control feedback respects reduced-motion preferences.

## What this demonstrates

Object-oriented organization, local persistence, callbacks, and DOM rendering without a framework. Data remains in the browser; this is not a shared or synchronized task service. Tasks stay until they are cleared or browser storage is removed. The backend demos’ 96-hour cleanup does not apply to this local task list.

## Deployment

GitHub Pages serves the static files. Use sample tasks when exploring this older learning project.
