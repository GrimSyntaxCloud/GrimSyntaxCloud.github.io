---
title: 'Relay Room'
description: 'A small-group video chat with private invitations, camera controls and a flowing aurora interface.'
category: 'Web app'
builtWithAI: true
tags: ['WebRTC', 'Node.js', 'Azure', 'Cosmos DB']
year: 2026
order: 25
status: 'Live'
repository: 'https://github.com/GrimSyntaxCloud/relay-room'
demo: 'https://mango-sea-0c6bba80f.4.azurestaticapps.net/'
visual: 'web'
image: 'images/projects/relay-room-home.webp'
imageAlt: 'An aurora-lit video chat landing page with translucent panels and a liquid orb.'
imageFit: 'contain'
screenshots:
  - src: 'images/projects/relay-room-home.webp'
    alt: 'An aurora-lit video chat landing page with translucent panels and a liquid orb.'
    caption: 'The opening design, captured from the verified working application.'
    width: 1265
    height: 889
  - src: 'images/projects/relay-room-room.webp'
    alt: 'The room interface includes camera preview, invitations and call controls.'
    caption: 'The room interface includes camera preview, invitations and call controls.'
    width: 1265
    height: 889
  - src: 'images/projects/relay-room-mobile.webp'
    alt: 'Relay Room on a narrow mobile screen.'
    caption: 'A narrow-screen view with responsive content and controls.'
    width: 375
    height: 812
---

## The project

Relay Room recovers my videoCallWebRTC project as a small-group calling experience. A dark teal and periwinkle palette, translucent panels, a slowly morphing orb and a flowing canvas background give it a calm, atmospheric identity. Buttons respond to interaction, while a motion-pause control and reduced-motion support keep the effects optional.

Create a room, invite up to three other people, mute your microphone, turn your camera off and on, or leave. The host can end the room for everyone. Camera and microphone access begins only after an explicit start or join action.

## How it works

Native WebRTC carries media directly between participants. A Node.js API coordinates invitations, membership and connection messages; the Azure deployment uses a collection in the existing shared Cosmos DB database. The server stores connection metadata, never recordings or media streams. Random invitation and participant credentials are stored as hashes, and each participant can retrieve only connection messages addressed to them.

Rooms expire 30 minutes after creation, a shorter privacy window than the 96-hour policy for saved demo work. Edits and joins do not extend the deadline. Expired rooms become inaccessible immediately; scheduled cleanup removes their stored metadata on its next successful run.

## The free connection tradeoff

The app uses a public STUN server to help browsers establish direct connections. It has no TURN relay, so calls may fail on restrictive work networks, VPNs or some home network configurations. The interface explains the limitation and reports connection problems. A successful local test cannot guarantee that every pair of networks will connect.

## Built together

I worked with ChatGPT/Codex to recover the original project, redesign the interface and replace its signaling layer. Automated tests cover invitation access, room limits, private signaling, host controls, expiry and MongoDB persistence. Two browser participants connected using generated test video and silent audio; the controls and departure flow were checked without using a real camera or microphone.

The live demo is published with automated checks and deployment through GitHub Actions.
