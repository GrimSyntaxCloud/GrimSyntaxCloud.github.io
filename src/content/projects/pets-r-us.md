---
title: 'Pets-R-Us'
description: 'A playful pet clubhouse with a warm illustrated design, secure accounts, and private appointment requests backed by Cosmos DB.'
category: 'Web app'
builtWithAI: true
tags: ['Express', 'EJS', 'Azure', 'Cosmos DB']
year: 2022
order: 6
status: 'Live'
demo: 'https://white-sand-0e657a60f.1.azurestaticapps.net'
visual: 'web'
repository: 'https://github.com/GrimSyntaxCloud/pets-r-us'
image: 'images/projects/pets-r-us-home.webp'
imageAlt: 'The Pets-R-Us homepage with warm cream and terracotta colors, playful typography, and illustrated dog and cat companions.'
imageFit: 'contain'
screenshots:
  - src: 'images/projects/pets-r-us-grooming.webp'
    alt: 'The grooming page with a bubbly dog illustration, warm peach artwork, and the heading From scruffy to stunning.'
    caption: 'The clubhouse identity continues into the service pages, with original illustrations and a consistent route into appointment requests.'
    width: 1265
    height: 712
  - src: 'images/projects/pets-r-us-appointments.webp'
    alt: 'The sample appointment dashboard displaying Taylor Sample and a fictional grooming request.'
    caption: 'The public sample dashboard shows a permanent fictional record. Registered visitors have a separate, private view of their own requests.'
    width: 1265
    height: 712
---

## The project

Pets-R-Us began as my 2022 coursework project for a fictional pet-service business. In 2026, I brought it back online and redesigned it as a quirky, pet-loving clubhouse—while keeping the working full-stack experience at its center.

Visitors can explore grooming, boarding, and training, create an account, sign in, edit their profile, and save private appointment requests. The site demonstrates a real account-and-database flow without taking bookings or payments.

## A warmer kind of pet website

I wanted the design to feel like it belonged to people who love pets: a little goofy, welcoming, and full of personality. Cream, terracotta, peach, and honey colors pair with cocoa text, expressive Fraunces headings, and self-hosted DM Sans body text.

Original SVG pets appear throughout the site, from the homepage companions to the grooming bathtub and boarding bed. A small “Boop!” interaction adds playful feedback, and Ferdinand’s original dog-of-the-week spotlight became a photo feature. The same visual language carries through the service catalog, registration, sign-in, profile, and appointment screens.

The interface includes responsive navigation, visible keyboard focus, Escape-to-close navigation, and reduced-motion support. Text contrast and narrow-screen layouts were checked alongside the functional tests.

## Try the full-stack demo

Choose **Take a peek inside** for permanent, read-only sample appointments. To try the complete flow, choose **Join the club**, register with fictional details and a unique demo password, and save a grooming, boarding, or training request. Your clubhouse shows your own saved requests, and **Edit profile** updates your account details.

Requests do not reserve dates, send emails, or collect payments. Visitor accounts expire 96 hours after registration; their requests expire no later than the account. The server rejects expired data immediately, and scheduled cleanup removes expired records while preserving the fictional samples.

## Behind the clubhouse

Express renders EJS pages through managed Node.js HTTP functions on Azure Static Web Apps Free. Passport handles authentication, passwords are hashed with scrypt, and form submissions use session-bound CSRF tokens. The server checks appointment ownership independently of the interface.

Cosmos DB’s MongoDB-compatible interface stores accounts, appointments, and sessions in app-specific collections. Pets-R-Us shares a 400 RU/s database pool with BCRS and Nodebucket, with credentials scoped to each app’s collections. The original Heroku deployment has been replaced by this free Azure setup.

GitHub Actions runs the integration tests, dependency audit, and production packaging before deployment, then checks database connectivity. The redesign adds no paid assets, external font requests, or new backend services.

## Built together, iterated together

The original coursework was mine. For the hosting repairs and 2026 redesign, I worked with ChatGPT/Codex as a development collaborator. I set the direction, reviewed the working design, and asked for a warmer palette after the first version. Together, we implemented the illustrations, layouts, responsive behavior, and deployment updates, using browser checks and automated tests to verify the result.

“Built with AI” describes that development process. The live app does not call an AI model or require an AI subscription.
