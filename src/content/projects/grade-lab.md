---
title: 'Grade Lab'
description: 'An Angular GPA calculator with a bold academic dashboard and clear course management.'
category: 'Web app'
builtWithAI: true
tags: ['Angular', 'TypeScript', 'Forms']
year: 2026
order: 18
status: 'Live'
visual: 'web'
repository: 'https://github.com/GrimSyntaxCloud/angular-showcase'
demo: 'https://grimsyntaxcloud.github.io/angular-showcase/grade-lab/'
image: 'images/projects/grade-lab-home.webp'
imageAlt: 'Grade Lab with a forest-green navigation rail, a sage GPA dial, orange accents and a course ledger.'
imageFit: 'contain'
screenshots:
  - src: 'images/projects/grade-lab-home.webp'
    alt: 'Grade Lab with a forest-green navigation rail, a sage GPA dial, orange accents and a course ledger.'
    caption: 'The course ledger and calculated GPA share a structured academic workspace.'
    width: 1600
    height: 1352
  - src: 'images/projects/grade-lab-mobile.webp'
    alt: 'Grade Lab on a narrow mobile screen.'
    caption: 'The opening mobile view, checked for readable content and controls that fit.'
    width: 375
    height: 844
---

## The project

Grade Lab gives my Angular GPA-calculator coursework a forest-green academic dashboard. A persistent navigation rail, a porcelain course ledger and a sage GPA dial separate course entry from the calculated result. Orange marks and short dial transitions add movement without distracting from the numbers. It keeps the original workflow: enter a demo student ID, add courses and grades, calculate a GPA, and clear or remove entries.

Try a fictional student ID from **1007 through 1012**. These IDs open the demo; they are not secure student accounts and do not connect to a school system.

## How it works

The dial reflects the same calculated result as the numeric GPA. Native CSS effects respect reduced-motion preferences, and system typography avoids external font services.

The calculation uses the original equal-weight grade scale, rather than credit-hour weighting. The recovery fixed the missing C grade, tightened student-ID validation and added clearer input feedback. A B+ remains 3.33 and a C is 2.00.

## Built together

I worked with ChatGPT/Codex on the redesign and repairs while keeping the exercise recognizable. Tests check the grade mapping and calculations; browser checks cover adding courses, clearing results, sign-in and mobile scrolling. The maintained Angular build runs on free GitHub Pages without a database.
