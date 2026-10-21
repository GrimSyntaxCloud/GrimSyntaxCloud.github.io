---
title: 'Pets-R-Us'
description: 'A pet-service website exploring accounts, appointments, and server-rendered pages.'
category: 'Web app'
tags: ['Express', 'MongoDB', 'Passport']
year: 2022
order: 6
status: 'Live'
demo: 'https://white-sand-0e657a60f.1.azurestaticapps.net'
visual: 'code'
repository: 'https://github.com/GrimSyntaxCloud/pets-r-us'
---

## The project

A coursework project for a pet-service business, with pages for grooming, boarding, and training. Visitors can register, sign in, edit their profile, and save private appointment requests.

## The implementation

Express handles routing, Passport handles authentication, and Mongoose models represent users and appointments. The project renders its EJS pages through managed Node.js HTTP functions on Azure Static Web Apps Free. Cosmos DB for MongoDB stores accounts, appointments, and secure sessions in separate collections within a shared database.

## What to explore

The separation of routes, models, page templates, and shared headers and footers illustrates how a small server-rendered application is organized.

## Current status

The original Heroku deployment has been replaced by a free Azure demo. Try the read-only fictional sample or register with fictional details to explore the full flow. Visitor accounts expire after 96 hours; appointments expire no later than their owner. Hourly cleanup preserves permanent samples. No real booking or payment takes place.
