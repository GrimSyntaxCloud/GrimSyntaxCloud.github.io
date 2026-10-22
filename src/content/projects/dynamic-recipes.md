---
title: 'Dynamic Recipes'
description: 'A colorful food magazine with adjustable recipe portions, interactive directions and clean kitchen printouts.'
category: 'Web app'
builtWithAI: true
tags: ['JavaScript', 'CSS', 'Responsive design']
year: 2018
order: 12
status: 'Live'
demo: 'https://grimsyntaxcloud.github.io/Dynamic-recipe-project/'
visual: 'web'
image: 'images/projects/dynamic-recipes-home.webp'
imageAlt: 'Dynamic Recipes with an oversized cobalt magazine masthead, tomato accents and an asymmetric food-photo collection.'
imageFit: 'contain'
screenshots:
  - src: 'images/projects/dynamic-recipes-collection.webp'
    alt: 'Dynamic Recipes food magazine with three original recipe photos in an asymmetric collection.'
    caption: 'The collection uses existing food photography, a cobalt masthead and butter-yellow editorial panels.'
    width: 1265
    height: 2446
  - src: 'images/projects/dynamic-recipes-recipe.webp'
    alt: 'Fried chicken sandwich recipe with portion controls, ingredient quantities and collapsible preparation steps.'
    caption: 'Original, half and double portions update the recipe; print styling includes the selected amounts and all directions.'
    width: 1265
    height: 2520
repository: 'https://github.com/GrimSyntaxCloud/Dynamic-recipe-project'
---

## The project

An earlier recipe website prototype containing recipe pages for chili and chicken dishes. JavaScript controls update ingredient amounts for original, half, or double servings.

## The interface

The project combines a recipe index, navigation, ingredient lists, photography and print controls. I worked with AI to redesign it as a cobalt, tomato and butter-yellow food magazine, with an asymmetric collection and a focused ingredients-and-method workspace. Native CSS and JavaScript provide hover feedback, rotating accents and collapsible directions. Motion can be paused and respects reduced-motion preferences.

## What this demonstrates

Coordinating content across multiple pages, updating recipe quantities in the DOM, and designing a repeatable recipe layout. A shared fraction-scaling module always starts from the original quantities, avoiding accumulated rounding errors. It also corrects an old half-portion error: half of 1½ cups is now ¾ cup.

Printing opens collapsed ingredient lists and directions, then restores their previous state. Original recipe credits and photographs remain. This is the refreshed Dynamic Recipes coursework, separate from the Fold & Fork ordering demo.

## Current status

The refreshed demo runs entirely on GitHub Pages. Broken navigation and old visitor-tracking experiments have been removed. Explore three recipes, adjust portions, or print the instructions—no account or backend is needed.
