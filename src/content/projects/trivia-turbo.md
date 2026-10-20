---
title: 'Trivia Turbo'
description: 'A real-time multiplayer racing game where correct trivia answers earn turbo boosts. Race friends, challenge computer racers, or practice solo.'
category: 'Web app'
tags: ['React', 'TypeScript', 'WebSockets', 'Cloudflare']
year: 2026
order: 0
status: 'Live'
visual: 'web'
demo: 'https://trivia-turbo-race.grassyape5.chatgpt.site/'
image: 'images/trivia-turbo.jpg'
imageAlt: 'Gameplay frame from the Trivia Turbo trailer showing an orange race car, lap counter, and active three-second turbo boost.'
imageFit: 'contain'
---

## The game

Trivia Turbo combines arcade racing with shared trivia rounds. Up to eight human and computer racers compete over three laps. Cars accelerate automatically; players steer around cones and answer the same questions at shared checkpoints. A correct answer earns a three-second speed boost.

Nine tracks, 330 bundled questions across 11 categories, and adjustable answer timers give each room a different setup. Players can choose a single race or a multi-race cup, add computer opponents with different difficulty levels, or practice solo with personal bests saved in their browser.

## Try it

Open the **Live demo** and choose **Solo practice** for a quick look. For multiplayer, choose a racer name, create a room, and share its six-character code with friends. Each person joins from their own browser; no account or download is required. A host can also add computer racers in the lobby.

Use the arrow keys, A/D, or touch controls to change lanes. Everyone gets the same trivia question when a racer reaches a checkpoint. The host can select categories, a track, and the answer time before starting.

The home screen includes a **20-second gameplay trailer** showing real multiplayer footage. The image above is a frame from that trailer.

## How the multiplayer works

The React and TypeScript interface uses Canvas 2D to draw the race. Vinext builds the application for a Worker runtime. A separate Cloudflare Worker assigns each room a SQLite-backed Durable Object, which coordinates players and pushes updates over WebSockets.

The server controls movement, trivia timing, boosts, collisions, and finishing order. The browser predicts motion between updates to keep steering responsive, then reconciles it with the server's state. Reconnecting players keep their room session, with HTTP fallback when the live connection is unavailable.

Cloudflare D1 stores room routing and initialization records; active race state lives in the room's Durable Object. Session tokens and future answers stay out of public game snapshots. Computer racers use the same race engine and speed rules as human players.

## Engineering focus

The project includes automated checks for race rules, synchronized questions, steering, reconnects, host permissions, room capacity, and rematches. Its key challenges are keeping multiple browsers consistent, making movement feel responsive despite network delay, and presenting trivia clearly without stopping the race.

This is a casual multiplayer game. Broader physical-device and group playtesting remains ongoing; it is not presented as a competitive anti-cheat system or a proven large-scale service.

## Hosting and credits

The portfolio stays on GitHub Pages and links to the existing Sites-hosted game and its Cloudflare backend. Multiplayer coordination requires a running backend, so the game cannot be served as a static GitHub Pages export.

The game bundles its trivia and audio assets rather than calling a paid trivia or AI API during play. Its [sound credits](https://trivia-turbo-race.grassyape5.chatgpt.site/audio/CREDITS.txt), [visual credits](https://trivia-turbo-race.grassyape5.chatgpt.site/effects/CREDITS.txt), and [trivia sources](https://trivia-turbo-race.grassyape5.chatgpt.site/trivia-credits.html) are available on the live site.
