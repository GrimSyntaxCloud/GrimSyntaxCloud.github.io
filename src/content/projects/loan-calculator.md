---
title: 'Loan Calculator'
description: 'An Angular financial workbench with fixed-rate payment estimates and a remaining-balance visualization.'
category: 'Web app'
builtWithAI: true
tags: ['Angular', 'TypeScript', 'Material']
year: 2022
order: 4
status: 'Live'
visual: 'code'
repository: 'https://github.com/GrimSyntaxCloud/loan-app'
demo: 'https://grimsyntaxcloud.github.io/loan-app/'
image: 'images/projects/loan-calculator-home.webp'
imageAlt: 'Loan Calculator with a white parameter rail and navy payment summary showing a glacier-blue balance curve.'
imageFit: 'contain'
screenshots:
  - src: 'images/projects/loan-calculator-home.webp'
    alt: 'Loan Calculator with a white parameter rail and navy payment summary showing a glacier-blue balance curve.'
    caption: 'The financial workbench connects the entered loan terms to monthly payment, interest and remaining principal.'
    width: 1265
    height: 1116
---

## The project

A loan calculator built with Angular reactive forms and Angular Material. Enter a loan amount, annual interest rate, and term to see the monthly payment and total interest.

## How it works

The home component calculates the payment using a fixed-rate amortization formula. Separate payment and accrued-interest components display the results. An SVG curve samples the remaining principal across the term using the same fixed-rate model. Its curve uses unrounded payments; displayed payment and interest figures retain the existing rounding behavior.

The repository also includes about and contact pages, interface prototypes, and an object relationship diagram.

## The redesign

I worked with AI to turn the original calculator into a navy and glacier-blue financial workbench. The parameter rail, large payment figure and balance chart make the inputs and their effects visible together. The responsive layout stacks the workspace on small screens, while reset clears both results and form validation state.

## What this demonstrates

Reactive forms, component inputs, client-side calculations, and reusable interface components. The fixed-rate model handles zero-interest loans, decimal principal values and invalid inputs. It is an educational calculation tool, not a personalized lending quote.

## Deployment

The compiled Angular app runs on GitHub Pages. Its calculations happen in the browser and do not require a server.
