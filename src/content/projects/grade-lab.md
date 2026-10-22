---
title: "Grade Lab"
description: "An Angular GPA calculator with a bold academic dashboard and clear course management."
category: 'Web app'
builtWithAI: true
tags: ["Angular", "TypeScript", "Forms"]
year: 2026
order: 18
status: 'Live'
visual: 'web'
repository: 'https://github.com/GrimSyntaxCloud/angular-showcase'
demo: 'https://grimsyntaxcloud.github.io/angular-showcase/grade-lab/'
image: 'images/projects/grade-lab-home.webp'
imageAlt: "Grade Lab with cobalt navigation, citrus accents and a course table showing a calculated GPA."
imageFit: 'contain'
screenshots:
  - src: 'images/projects/grade-lab-home.webp'
    alt: "Grade Lab with cobalt navigation, citrus accents and a course table showing a calculated GPA."
    caption: 'The refreshed desktop interface preserves the original project workflow.'
    width: 1265
    height: 1408
  - src: 'images/projects/grade-lab-mobile.webp'
    alt: "Grade Lab on a narrow mobile screen."
    caption: 'The opening mobile view, checked for readable content and controls that fit.'
    width: 375
    height: 843
---

## The project

Grade Lab gives my Angular GPA-calculator coursework a cobalt-and-citrus academic dashboard. It keeps the original workflow: enter a demo student ID, add courses and grades, calculate a GPA, and clear or remove entries.

Try a fictional student ID from **1007 through 1012**. These IDs open the demo; they are not secure student accounts and do not connect to a school system.

## How it works

The calculation uses the original equal-weight grade scale, rather than credit-hour weighting. The recovery fixed the missing C grade, tightened student-ID validation and added clearer input feedback. A B+ remains 3.33 and a C is 2.00.

## Built together

I worked with ChatGPT/Codex on the redesign and repairs while keeping the exercise recognizable. Tests check the grade mapping and calculations; browser checks cover adding courses, clearing results, sign-in and mobile scrolling. The maintained Angular build runs on free GitHub Pages without a database.
