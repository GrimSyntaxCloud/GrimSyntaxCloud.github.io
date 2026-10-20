# Repository review — October 20, 2026

Reviewed the public repository metadata, README files, recursive file lists, and selected application source under `GrimSyntaxCloud`.

## Portfolio coverage

- 55 public repositories in the searchable archive.
- 12 selected projects with Markdown case studies.
- 16 existing or newly enabled demo links, checked for HTTP availability.
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

BCRS and Loc8r have existing Render deployments. Their public pages loaded. BCRS initially timed out, then responded on a later check; its account/database flows were not tested. Loc8r is a _Getting MEAN_ learning implementation with sample location data.

Pets-R-Us' old Heroku URL returns “No such app”; it was not added as a demo. Nodebucket has no verified public deployment. These applications need backend hosting, and cannot be made functional by publishing their frontend source on Pages.

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

Demo availability checks are not a full audit of legacy projects. Portfolio CI validates the portfolio build and its internal links. Explicit demo URLs in the repository catalog are treated as separate deployments even when they share the `github.io` origin.
