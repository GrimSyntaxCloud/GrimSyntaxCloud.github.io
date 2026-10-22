# Repository review — October 20, 2026

> Historical snapshot of the initial migration. Hosting, database allocation and project coverage below have since changed. See the [October 22 health review](repository-health-2026-10-22.md) and current project case studies for the maintained state.

Reviewed the public repository metadata, README files, recursive file lists, and selected application source under `GrimSyntaxCloud`.

## Portfolio coverage

- 55 public repositories in the searchable archive.
- 13 selected projects with Markdown case studies, including the locally reviewed Trivia Turbo game.
- 17 existing or newly enabled demo links, checked for HTTP availability.
- No public AI application identified in this review. The AI category remains ready for future entries.
- Private repositories were not published or described.

The archive is intentionally broader than the selected-work section. It labels coursework, design studies, and browser exercises separately. An unflagged GitHub fork is not proof of original authorship; credits and learning-project context are retained where evident.

## New GitHub Pages deployments

| Repository           | Branch | Publishing source |
| -------------------- | ------ | ----------------- |
| Dice-game            | master | Root              |
| countdown            | master | Root              |
| investment-estimator | main   | Root              |
| taskManager-OOP      | master | Root              |

These are existing static HTML/CSS/JavaScript projects. GitHub Pages branch publishing builds automatically when their configured branch changes. No source changes, paid host, external AI API, or database were added to these projects.

The portfolio keeps its separate Astro GitHub Actions workflow.

## Existing deployments

Verified the renamed `grimsyntaxcloud.github.io` URLs for the loan app, BioSite, earlier personal portfolio, signup form, practice projects, savings calculator, test scores, WEB 231, WEB 330, and WEB 425. WEB 425 currently serves an In-N-Out Books Angular exercise.

Loc8r is a _Getting MEAN_ learning implementation with fixed sample location data. Its Pug templates now build to four static pages on GitHub Pages; no running backend or database is needed. The sample review form does not submit or save information, and its map links to OpenStreetMap without an API key.

BCRS now uses Azure Static Web Apps Free and an included Node.js Functions API. Its full-stack demo supports registration, authenticated sessions, profile editing, password changes, account deletion, and account-specific invoices and charts. It stores up to 100 registered accounts with 50 invoices each in Cosmos. The separate guest account previews read-only fictional administration records and shared invoices. Email recovery is not configured. No original MongoDB Atlas data was accessed or copied. Both backend demos share the same Cosmos free-tier account: 400 RU/s each, 800 RU/s total, under the existing 1,000 RU/s cap. The trial spending limit remains enabled; the trial can disable services on expiry. The portfolio and other existing static demos remain on GitHub Pages.

Render auto-deploy is off for Loc8r and BCRS. Their old services were not deleted. Nodebucket did not appear in the current Render workspace.

Nodebucket now runs on Azure Static Web Apps Free, with a managed Node.js Functions API and Cosmos DB's MongoDB interface. The shared demo uses employee ID 1007 and holds at most 50 sample tasks. Cosmos free tier is enabled with one region, 400 RU/s collection throughput, and a 1,000 RU/s account cap. The Azure trial spending limit remains on. GitHub Actions tests and deploys changes from `main`, then checks database connectivity.

Pets-R-Us' old Heroku URL returns “No such app”; it was not added as a demo. It needs backend hosting and cannot be made functional by publishing its frontend source on Pages.

PHP and Drupal projects remain source links. No server migration or paid hosting setup was performed.

## Exclusions and limitations

| Repository         | Reason for exclusion from the archive        |
| ------------------ | -------------------------------------------- |
| in-n-out-books     | README-only placeholder                      |
| gpa-calculator     | README-only placeholder                      |
| webDevAndres       | Profile README                               |
| advanced-css       | Third-party course starter/finished material |
| drupalphotogallery | Database export without application source   |

The separate `invoice-calculator` prototype has an empty implementation file and a missing script reference. It is labeled as a prototype and has no demo link.

Dynamic Recipes has placeholder navigation and old visitor-tracking/debug code; it is documented as a source project without a new deployment.

The loan calculator needs more input handling for edge cases such as zero interest. The two older growth calculators have currency-formatting edge cases below one thousand. These are described as educational exercises.

## Verification

- PIG Dice Game: started two players, rolled, held, and verified score/turn changes.
- Countdown: entered an event/date and verified the days-until message.
- Investment Estimator: 10,000 at 5% for three years displayed 11,576.25.
- Object-Oriented Task Manager: added a temporary task, confirmed persistence after reload, then removed the test task.
- Loan Calculator: 10,000 at 5% for three years displayed 299.71 monthly and 789.56 total interest.
- Savings Calculator: the same growth inputs displayed 11,576.25.
- Nodebucket: Azure deployment and database health check passed. Added a task through the live browser, reloaded to confirm Cosmos persistence, dragged it to Done, reloaded again, and deleted the temporary task. Seven backend integration tests passed before deployment.
- Loc8r: GitHub Pages build and deployment passed. Verified the sample listing, location detail page, OpenStreetMap link, and generated local asset links.
- BCRS: eleven backend integration tests passed, covering registration, password hashing, sessions, ownership, profile editing, password changes, account deletion, guest isolation, concurrent quotas, request limits, and sanitized errors. Azure deployment and Cosmos connectivity checks passed. Opened the live demo, added a service, saved an invoice, and confirmed its purchase count after a browser reload. Verified live registration, sign-in, profile persistence, invoice ownership, password-change session revocation, guest isolation, and account deletion against Azure Cosmos. Temporary QA accounts and invoices were removed; fictional guest seed data was retained.

Demo availability checks are not a full audit of legacy projects. Portfolio CI validates the portfolio build and its internal links. Explicit demo URLs in the repository catalog are treated as separate deployments even when they share the `github.io` origin.

## Trivia Turbo addition

Reviewed the user-provided Trivia Turbo source, README, architecture, and release notes on October 20, 2026. Verified its existing public homepage at https://trivia-turbo-race.grassyape5.chatgpt.site/. Added a featured case study with a frame from its existing gameplay trailer. The game uses React/Canvas, a Sites gateway, Cloudflare Durable Objects and WebSockets, and D1. Its running multiplayer backend remains on its existing host. No game source, credentials, new cloud resources, or paid services were published by this portfolio update.

The local game checkout has no GitHub remote, and no matching GitHub repository was found. It is therefore a selected project, not an invented entry in the repository archive. Also corrected the BCRS and Nodebucket case studies to reflect their completed Angular 21 upgrades.
