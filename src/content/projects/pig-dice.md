---
title: 'PIG Dice Game'
description: 'A two-player browser game built around a simple choice: roll again or hold.'
category: 'Web app'
tags: ['JavaScript', 'HTML', 'CSS']
year: 2020
order: 7
status: 'Live'
visual: 'web'
repository: 'https://github.com/GrimSyntaxCloud/Dice-game'
demo: 'https://grimsyntaxcloud.github.io/Dice-game/'
image: 'images/pig-dice.jpg'
imageAlt: 'PIG Dice Game with two sample players, score fields, and roll and hold controls.'
---

## The game

Two players take turns rolling a die. Holding adds the turn total to the player's score; rolling a one loses the points accumulated during that turn. The first player to reach 100 wins.

## The implementation

Plain JavaScript tracks the current player, die result, turn total, and player scores. Button handlers connect the rules to the interface.

## What this demonstrates

Random number generation, conditional logic, event handlers, and keeping game state in sync with the DOM. This is an earlier JavaScript learning project.

## Deployment

The game runs entirely in the browser. GitHub Pages serves the HTML, CSS, and JavaScript directly from its repository.
