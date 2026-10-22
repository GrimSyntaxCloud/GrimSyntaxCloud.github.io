# Repository health review — October 22, 2026

## Scope

Inventory and alert access were checked for 68 repositories. README availability, recursive source inventories and dependency manifests were reviewed for all 67 public repositories. Deeper source, README, local-setup and build/test review focused on the **18 maintained repositories linked by the portfolio**. This is a maintenance review of selected code paths, not a line-by-line audit or a guarantee of security. The separate Trivia Turbo source has no GitHub repository and is outside this repository pass. One private repository has alerts disabled and was not inspected further.

## Maintained projects

All **14 npm lockfile audits** across maintained frontends, APIs and the portfolio reported zero known vulnerabilities on the review date, including development dependencies. Static projects without dependency manifests are not covered by npm audit. Bundled scripts and CDN references require manual maintenance.

- Existing API/UI tests, production builds and packaging passed for BCRS and Nodebucket.
- Tests and builds passed for Loan Calculator, the three Angular showcase apps, City Atlas and the JavaScript showcase apps/APIs.
- The Eny Salon, The Edit and Pets-R-Us integration suites and Azure packaging passed with disposable local MongoDB. No production accounts or database records were used.
- Prism Lanes and Dynamic Recipes passed their static asset/link validation; Loc8r rendered its Pages output successfully.
- New regression suites cover the repaired older browser exercises. Browser spot checks also verified calculator input handling, invalid calendar dates and literal task text surviving reload.
- The portfolio's own type check, static build and internal link/asset validation remain the publication gate.

The shared database, fictional samples, fixed 96-hour expiry rules, hosting plans and Azure subscription settings are unchanged. No paid tools or services were added.

## Repairs

| Repository             | Change                                                                                                                                                          |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BCRS                   | Corrected local `dev` and `server` commands that referenced a removed directory; documented the current API adapter and smoke-tested it.                        |
| loan-app               | Added zero-interest handling, preserved decimal principal values, rejected malformed inputs and fractional years, cleared stale results, and added regressions. |
| investment-estimator   | Correct dollar formatting below 1,000 and above one million; strict input validation and whole-year validation; clear stale results.                            |
| savings-calculator-app | Same formatting and input repairs, preserving its own rate/year limits and zero-rate support.                                                                   |
| countdown              | Explicit valid-date parsing and calendar-day comparison across daylight-saving changes.                                                                         |
| taskManager-OOP        | Versioned JSON keeps literal pipes intact; legacy saves still load; cancelled edits and whitespace-only tasks handled safely.                                   |
| Dice-game              | Player identity no longer depends on names; identical names get separate scores and a new game starts consistently.                                             |

The five older standalone exercises now have useful READMEs describing purpose, behavior, implementation, local setup, tests, storage boundaries and free hosting. BCRS, Loan Calculator and Loc8r documentation was corrected or expanded. Original attribution and educational context were retained.

## Dependency monitoring

Eny Salon's missing Dependabot alerts were enabled. Missing alerts were also enabled on 21 other non-archived public repositories so old dependencies are visible instead of appearing unchecked. Security-update pull requests were enabled for the five recovered-app repositories that lacked that setting. These settings do not auto-merge updates.

Weekly version-update configuration was added to 13 maintained repositories that lacked it. Existing configuration was retained in the other five. Frontend and API manifest directories are covered separately where appropriate, alongside GitHub Actions. PR limits keep update volume bounded. Cosmos-backed Mongoose installations remain on the compatible version 8 line; existing MongoDB driver exclusions are retained. Database protocol upgrades are a separate decision.

Configuration reference: [GitHub Dependabot options](https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference).

## Historical dependencies

`web-425` initially reported **3,075 open alerts** repeated across historical Angular exercise lockfiles (157 distinct advisories). The repository was archived with the owner’s approval after recovery of Reading Room, Grade Lab and Opus into `angular-showcase`. A verified Git bundle preserves the default branch history; the archive notice links maintained versions. The public Pages content is only a redirect to the maintained Loan Calculator. **Archiving preserves vulnerable historical dependencies; it does not patch them.**

Enabling the previously missing alerts revealed **405 additional alerts in eight legacy repositories**:

| Repository                                                                  | Open alerts at review | Main maintenance needed if retained as active code                                                                           |
| --------------------------------------------------------------------------- | --------------------: | ---------------------------------------------------------------------------------------------------------------------------- |
| [web-420](https://github.com/GrimSyntaxCloud/web-420)                       |                    48 | Modernize the original Node/Mongoose dependency chain and validate its endpoints.                                            |
| [web-340](https://github.com/GrimSyntaxCloud/web-340)                       |                     4 | Replace or patch the affected Moment copies and validate the old sports exercises.                                           |
| [web-426](https://github.com/GrimSyntaxCloud/web-426)                       |                    73 | Review the upstream coursework fork; upgrade and test the historical Angular toolchains before use.                          |
| [javaScript](https://github.com/GrimSyntaxCloud/javaScript)                 |                   139 | Use maintained javascript-showcase apps where available; separately modernize unrecovered Webpack-era exercises.             |
| [advanced-css](https://github.com/GrimSyntaxCloud/advanced-css)             |                    44 | Replace retired node-sass tooling and update its transitive build dependencies while preserving upstream course attribution. |
| [bootstrap-projects](https://github.com/GrimSyntaxCloud/bootstrap-projects) |                     4 | Update the old jQuery/Bootstrap combination and check template behavior.                                                     |
| [Emerging-tech](https://github.com/GrimSyntaxCloud/Emerging-tech)           |                    76 | Use City Atlas for the recovered map; modernize legacy Gulp/build tooling before running remaining exercises.                |
| [seleniumTest](https://github.com/GrimSyntaxCloud/seleniumTest)             |                    17 | Remove committed node_modules after preserving a reproducible manifest/lockfile, then upgrade and retest Selenium tooling.   |

After inspecting their contents, five repositories were archived under the owner’s instruction to preserve collections whose useful projects were already recovered or which had no standalone application worth extracting. Each received an archive notice and a verified Git bundle before archival:

| Archived repository  | Content assessment                                                                                                               |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `web-340`            | Small Node.js console exercises for books and sports teams.                                                                      |
| `advanced-css`       | Third-party Natours, Trillo and Nexter starter/finished course examples; attribution retained.                                   |
| `bootstrap-projects` | Component/form exercises; `myPhoto` is only a Hello World scaffold.                                                              |
| `Emerging-tech`      | The D3 visualization is maintained as City Atlas; remaining material is research and introductory Flask/Gulp/Selenium exercises. |
| `seleniumTest`       | Introductory browser-automation scripts and a small assertion example.                                                           |

Three repositories remain active because they contain possible recovery work:

- `javaScript`: `videoCallWebRTC` implements room creation/joining and video controls and has not been recovered. Four other applications are maintained in `javascript-showcase`; `forkify` is only an import/console scaffold.
- `web-420`: Express/Mongoose REST API exercises with routes, models and Swagger documentation. A hardcoded database connection string was removed from current source and replaced with `MONGODB_URI` from the server environment; environment files are ignored and setup documentation now explains the limitations. JavaScript syntax validation passed. The historical dependency stack was not upgraded or connected to a database. **The owning Atlas account must revoke the old credential; earlier commits still contain it.**
- `web-426`: an upstream Angular course fork, including a restaurant-ordering example not yet assessed for recovery and attribution. Keeping it active does not establish original authorship or readiness to deploy.

The three retained repositories account for **260 alerts in this review snapshot**. Another 145 alerts belong to the five newly archived snapshots and remain unpatched historical dependencies. These are separate source repositories from the maintained portfolio deployments. Counts may change as GitHub indexes manifests or publishes advisories. Unavailable/disabled alert access was never counted as a clean scan.

## Public repository inventory

“Maintained” means included in the deeper app review above. Other repositories received metadata, README-presence and manifest/alert review only. A present README is not a promise that all historical setup instructions were executed. Historical PHP, Drupal and WordPress source was not deployed or comprehensively modernized in this pass. README absence in these older collections remains a documentation backlog.

| Repository                                                                                                  | Review scope                | README after maintenance | Alert snapshot                    |
| ----------------------------------------------------------------------------------------------------------- | --------------------------- | ------------------------ | --------------------------------- |
| [advanced-css](https://github.com/GrimSyntaxCloud/advanced-css)                                             | Archived source             | Present                  | 44 before archive; not patched    |
| [advancedPHP](https://github.com/GrimSyntaxCloud/advancedPHP)                                               | Historical/source inventory | Missing — backlog        | 0                                 |
| [angular-showcase](https://github.com/GrimSyntaxCloud/angular-showcase)                                     | Maintained app              | Present                  | 0                                 |
| [BCRS](https://github.com/GrimSyntaxCloud/BCRS)                                                             | Maintained app              | Present                  | 0                                 |
| [bioSite](https://github.com/GrimSyntaxCloud/bioSite)                                                       | Historical/source inventory | Present                  | 0                                 |
| [bootstrap-projects](https://github.com/GrimSyntaxCloud/bootstrap-projects)                                 | Archived source             | Present                  | 4 before archive; not patched     |
| [city-atlas](https://github.com/GrimSyntaxCloud/city-atlas)                                                 | Maintained app              | Present                  | 0                                 |
| [closures-slideshow](https://github.com/GrimSyntaxCloud/closures-slideshow)                                 | Historical/source inventory | Present                  | 0                                 |
| [countdown](https://github.com/GrimSyntaxCloud/countdown)                                                   | Maintained app              | Present                  | 0                                 |
| [Dice-game](https://github.com/GrimSyntaxCloud/Dice-game)                                                   | Maintained app              | Present                  | 0                                 |
| [drupalphotogallery](https://github.com/GrimSyntaxCloud/drupalphotogallery)                                 | Historical/source inventory | Present                  | 0                                 |
| [Dynamic-recipe-project](https://github.com/GrimSyntaxCloud/Dynamic-recipe-project)                         | Maintained app              | Present                  | 0                                 |
| [email-list](https://github.com/GrimSyntaxCloud/email-list)                                                 | Historical/source inventory | Present                  | 0                                 |
| [Emerging-tech](https://github.com/GrimSyntaxCloud/Emerging-tech)                                           | Archived source             | Present                  | 76 before archive; not patched    |
| [eny-salon](https://github.com/GrimSyntaxCloud/eny-salon)                                                   | Maintained app              | Present                  | 0                                 |
| [FAQs](https://github.com/GrimSyntaxCloud/FAQs)                                                             | Historical/source inventory | Present                  | 0                                 |
| [Form-validation-project](https://github.com/GrimSyntaxCloud/Form-validation-project)                       | Historical/source inventory | Missing — backlog        | 0                                 |
| [gpa-calculator](https://github.com/GrimSyntaxCloud/gpa-calculator)                                         | Archived source             | Present                  | Unavailable for archived source   |
| [GrimSyntaxCloud.github.io](https://github.com/GrimSyntaxCloud/GrimSyntaxCloud.github.io)                   | Maintained app              | Present                  | 0                                 |
| [in-n-out-books](https://github.com/GrimSyntaxCloud/in-n-out-books)                                         | Archived source             | Present                  | Unavailable for archived source   |
| [investment-estimator](https://github.com/GrimSyntaxCloud/investment-estimator)                             | Maintained app              | Present                  | 0                                 |
| [invoice-calculator](https://github.com/GrimSyntaxCloud/invoice-calculator)                                 | Historical/source inventory | Present                  | 0                                 |
| [invoice-total-calculator](https://github.com/GrimSyntaxCloud/invoice-total-calculator)                     | Historical/source inventory | Present                  | 0                                 |
| [javaScript](https://github.com/GrimSyntaxCloud/javaScript)                                                 | Historical/source inventory | Present                  | 139                               |
| [javascript-showcase](https://github.com/GrimSyntaxCloud/javascript-showcase)                               | Maintained app              | Present                  | 0                                 |
| [loan-app](https://github.com/GrimSyntaxCloud/loan-app)                                                     | Maintained app              | Present                  | 0                                 |
| [loc8r](https://github.com/GrimSyntaxCloud/loc8r)                                                           | Maintained app              | Present                  | 0                                 |
| [mpgApplication](https://github.com/GrimSyntaxCloud/mpgApplication)                                         | Historical/source inventory | Present                  | 0                                 |
| [nodebucket](https://github.com/GrimSyntaxCloud/nodebucket)                                                 | Maintained app              | Present                  | 0                                 |
| [Paypal](https://github.com/GrimSyntaxCloud/Paypal)                                                         | Historical/source inventory | Missing — backlog        | 0                                 |
| [personal-portfolio](https://github.com/GrimSyntaxCloud/personal-portfolio)                                 | Archived source             | Present                  | Unavailable for archived source   |
| [pets-r-us](https://github.com/GrimSyntaxCloud/pets-r-us)                                                   | Maintained app              | Present                  | 0                                 |
| [photoblogone](https://github.com/GrimSyntaxCloud/photoblogone)                                             | Historical/source inventory | Missing — backlog        | 0                                 |
| [php_git_folder](https://github.com/GrimSyntaxCloud/php_git_folder)                                         | Historical/source inventory | Missing — backlog        | 0                                 |
| [phpPractice](https://github.com/GrimSyntaxCloud/phpPractice)                                               | Historical/source inventory | Missing — backlog        | 0                                 |
| [portfolio](https://github.com/GrimSyntaxCloud/portfolio)                                                   | Archived source             | Missing — backlog        | Unavailable for archived source   |
| [portfolio-day-splash-page-entry](https://github.com/GrimSyntaxCloud/portfolio-day-splash-page-entry)       | Historical/source inventory | Missing — backlog        | 0                                 |
| [portfolioDay](https://github.com/GrimSyntaxCloud/portfolioDay)                                             | Historical/source inventory | Missing — backlog        | 0                                 |
| [practice-projects](https://github.com/GrimSyntaxCloud/practice-projects)                                   | Historical/source inventory | Missing — backlog        | 0                                 |
| [prime-numbers](https://github.com/GrimSyntaxCloud/prime-numbers)                                           | Historical/source inventory | Present                  | 0                                 |
| [prism-lanes](https://github.com/GrimSyntaxCloud/prism-lanes)                                               | Maintained app              | Present                  | 0                                 |
| [register-application](https://github.com/GrimSyntaxCloud/register-application)                             | Historical/source inventory | Present                  | 0                                 |
| [registration-form](https://github.com/GrimSyntaxCloud/registration-form)                                   | Historical/source inventory | Present                  | 0                                 |
| [rentalApplication](https://github.com/GrimSyntaxCloud/rentalApplication)                                   | Historical/source inventory | Missing — backlog        | 0                                 |
| [rollover-images](https://github.com/GrimSyntaxCloud/rollover-images)                                       | Historical/source inventory | Present                  | 0                                 |
| [savings-calculator-app](https://github.com/GrimSyntaxCloud/savings-calculator-app)                         | Maintained app              | Present                  | 0                                 |
| [seleniumTest](https://github.com/GrimSyntaxCloud/seleniumTest)                                             | Archived source             | Present                  | 17 before archive; not patched    |
| [Signup-form](https://github.com/GrimSyntaxCloud/Signup-form)                                               | Historical/source inventory | Present                  | 0                                 |
| [slideshow](https://github.com/GrimSyntaxCloud/slideshow)                                                   | Historical/source inventory | Present                  | 0                                 |
| [taskManager](https://github.com/GrimSyntaxCloud/taskManager)                                               | Historical/source inventory | Present                  | 0                                 |
| [TaskManager-callbacks-and-closures](https://github.com/GrimSyntaxCloud/TaskManager-callbacks-and-closures) | Historical/source inventory | Present                  | 0                                 |
| [taskManager-OOP](https://github.com/GrimSyntaxCloud/taskManager-OOP)                                       | Maintained app              | Present                  | 0                                 |
| [test-scores](https://github.com/GrimSyntaxCloud/test-scores)                                               | Historical/source inventory | Present                  | 0                                 |
| [the-edit-cms](https://github.com/GrimSyntaxCloud/the-edit-cms)                                             | Maintained app              | Present                  | 0                                 |
| [todo-list](https://github.com/GrimSyntaxCloud/todo-list)                                                   | Historical/source inventory | Present                  | 0                                 |
| [todolist](https://github.com/GrimSyntaxCloud/todolist)                                                     | Historical/source inventory | Present                  | 0                                 |
| [videoplayers](https://github.com/GrimSyntaxCloud/videoplayers)                                             | Historical/source inventory | Missing — backlog        | 0                                 |
| [wdv446](https://github.com/GrimSyntaxCloud/wdv446)                                                         | Historical/source inventory | Missing — backlog        | 0                                 |
| [wdv495](https://github.com/GrimSyntaxCloud/wdv495)                                                         | Archived source             | Missing — backlog        | Unavailable for archived source   |
| [web-231](https://github.com/GrimSyntaxCloud/web-231)                                                       | Historical/source inventory | Present                  | 0                                 |
| [web-330](https://github.com/GrimSyntaxCloud/web-330)                                                       | Historical/source inventory | Present                  | 0                                 |
| [web-335](https://github.com/GrimSyntaxCloud/web-335)                                                       | Historical/source inventory | Present                  | 0                                 |
| [web-340](https://github.com/GrimSyntaxCloud/web-340)                                                       | Archived source             | Present                  | 4 before archive; not patched     |
| [web-420](https://github.com/GrimSyntaxCloud/web-420)                                                       | Historical/source inventory | Present                  | 48                                |
| [web-425](https://github.com/GrimSyntaxCloud/web-425)                                                       | Archived source             | Present                  | 3,075 before archive; not patched |
| [web-426](https://github.com/GrimSyntaxCloud/web-426)                                                       | Historical/source inventory | Present                  | 73                                |
| [webDevAndres](https://github.com/GrimSyntaxCloud/webDevAndres)                                             | Archived source             | Present                  | Unavailable for archived source   |
