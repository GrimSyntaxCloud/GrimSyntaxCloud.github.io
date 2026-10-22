---
title: 'PIG Dice Game'
description: 'A tactile two-player dice game with a cobalt tabletop, animated die and live turn feedback.'
category: 'Web app'
builtWithAI: true
tags: ['JavaScript', 'HTML', 'CSS']
year: 2020
order: 7
status: 'Live'
visual: 'web'
repository: 'https://github.com/GrimSyntaxCloud/Dice-game'
demo: 'https://grimsyntaxcloud.github.io/Dice-game/'
image: 'images/projects/pig-dice-home.webp'
imageAlt: 'PIG Dice Game with a cobalt tabletop, lime and ivory score cards, and a red die.'
imageFit: 'contain'
screenshots:
  - src: 'images/projects/pig-dice-home.webp'
    alt: 'PIG Dice Game with a cobalt tabletop, lime and ivory score cards, and a red die.'
    caption: 'A physical game-table layout makes scores, turn state and the roll-or-hold decision easy to read.'
    width: 1425
    height: 1089
  - src: 'images/projects/pig-dice-play.webp'
    alt: 'PIG Dice Game during a turn, with the current die and accumulated points.'
    caption: 'Roll, bank and bust feedback connects the animated die to the original game rules.'
    width: 1425
    height: 1089
---

## The game

Two players take turns rolling a die. Holding adds the turn total to the player's score; rolling a one loses the points accumulated during that turn. The first player to reach 100 wins.

## The implementation

Plain JavaScript tracks the current player, die result, turn total, and separate player scores—even when both players use the same name. Button handlers connect the rules to the interface. Rolling locks repeated actions during the animation, and resetting cancels an unfinished roll.

The redesign uses native CSS for a cobalt tabletop, layered score cards and a red clay-style die. Turn changes, banking and losing a roll each have distinct feedback. Keyboard controls, visible focus, announced results and a motion-pause option keep the game usable without relying on animation.

## What this demonstrates

Random number generation, conditional logic, event handlers, and keeping game state in sync with the DOM. This began as my JavaScript coursework. I worked with AI to redesign its interface and strengthen interaction checks while retaining the original two-player rules. Eight automated tests cover core scoring and interaction edge cases.

## Deployment

The game runs entirely in the browser. GitHub Pages serves the HTML, CSS, and JavaScript directly from its repository.
