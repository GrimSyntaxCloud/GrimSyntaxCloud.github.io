# Demo hosting and database migration

Approved and executed on 2026-10-21. The user authorized backups, a brief maintenance window, shared storage, and 96-hour visitor-data cleanup. Billing upgrades and removal of the subscription spending limit are not authorized.

## Hosting

| Project                                | Host                       | Database collection(s)                             |
| -------------------------------------- | -------------------------- | -------------------------------------------------- |
| Portfolio                              | GitHub Pages               | None                                               |
| Dynamic Recipes                        | GitHub Pages               | None                                               |
| Prism Lanes (formerly Rainbow Bowling) | GitHub Pages               | None                                               |
| Nodebucket                             | Azure Static Web Apps Free | `employees`                                        |
| BCRS                                   | Azure Static Web Apps Free | `bcrs_demo`                                        |
| Pets-R-Us                              | Azure Static Web Apps Free | `pets_users`, `pets_appointments`, `pets_sessions` |

All five collections share **one 400 RU/s manual pool**, database `portfolio-demos`, in the existing Cosmos DB for MongoDB 4.2 free-tier account. The previous Nodebucket and BCRS dedicated collections were removed after verified restoration and live application checks. Their old database shells are empty and have no throughput allocation.

The account remains single-region with a 1,000 RU/s cap. All three web resources use the Free SKU. No paid supporting resource was added. The subscription spending limit remains enabled. If the trial becomes disabled, stop; do not upgrade it or remove the spending limit. Free-tier capacity does not extend a subscription trial.

## Data isolation and credentials

Each application has a collection-scoped MongoDB role. Separate cleanup users have only the operations their maintenance scripts require. Own-collection access and cross-application denial were verified for all six users.

Application connection strings live in server-only Azure settings. Each public repository has its cleanup connection string in the `azure` environment secret `DEMO_CLEANUP_MONGODB_URI`. Deployment tokens are separate secrets. None of these values belong in frontend bundles, source files, logs, or screenshots.

Pets-R-Us uses Mongoose 8.24.6 because its driver supports the existing MongoDB 4.2 protocol. Mongoose 9 is not compatible with that endpoint. This avoids changing the Azure database version or tier.

## 96-hour policy

- Nodebucket visitor tasks expire 96 hours after creation. Moving a task preserves its deadline. Its employee board and permanent sample task remain.
- BCRS visitor accounts and their private invoices expire at the account deadline. Visitor invoices in the shared guest preview have individual deadlines. The two permanent sample invoices remain. Cleanup releases expired username reservations safely.
- Pets-R-Us visitor accounts expire 96 hours after registration. Appointments expire at the earlier of their own deadline or their owner's deadline. Its fictional sample appointment remains read-only.
- Creation and expiry metadata and the `isDemo` flag are controlled by the server. Edits and sign-ins do not renew retention.
- APIs reject expired data and sessions at the deadline. Hourly GitHub Actions jobs physically delete expired records; API access also attempts cleanup. Jobs log counts only.

Physical deletion occurs on the next successful cleanup, usually within about an hour of expiry. GitHub can delay schedules and can disable public-repository schedules after 60 days without activity. Check Actions during upkeep and re-enable a disabled workflow. This is not an exact-to-the-second purge guarantee.

Do not apply local MongoDB TTL scripts to Cosmos 4.2: its TTL behavior differs, and deleting a board/account document indiscriminately would also remove embedded samples.

## Backup and verification

Encrypted backups were taken before changes and again with both existing APIs returning maintenance responses. Source archives and server configuration were included. Database exports were restored into a disposable local MongoDB instance and compared exactly before any old allocation was removed. Raw backups and their recovery key are private local files outside Git.

Migration preserved the existing Nodebucket sample task and both BCRS sample invoices. Pets received one fictional sample appointment. Existing records without reliable expiry metadata received a one-time 96-hour grace period; samples were identified against the verified original fixtures and their IDs.

Verification included:

- Local controlled-clock boundary tests, metadata tampering, repeated cleanup, sample preservation, and username reuse.
- Live Nodebucket task creation/read/delete and permanent-sample protection.
- Live BCRS registration, login, private invoice persistence, account deletion, and guest samples.
- Pets Azure-adapter registration, secure sessions, persisted appointments, and sorted profile history against Cosmos.
- Expired synthetic tasks, accounts, invoices, appointments, and sessions removed from the actual shared database while all four permanent samples remained.
- Dependency audits, production builds, CI checks, and portfolio link validation.

`DEMO_MAINTENANCE=true` pauses an application's API before database access. Confirm HTTP 503 responses and allow in-flight requests to drain before taking a migration backup. Recheck backup equality immediately before destructive changes. Never raise capacity to work around a failed migration.

## Additional recovered applications — October 22, 2026

Relay Room and Endpoint Studio are deployed to Azure Static Web Apps Free. Fold & Fork is deployed to GitHub Pages. The user explicitly approved public repositories, live demos and portfolio publication.

- A fresh encrypted backup of all eight existing collections was restored into disposable MongoDB and compared before adding new collections.
- `endpoint_demo` and `relay_rooms` now share the existing 400 RU/s database pool. No dedicated throughput, extra region or paid supporting resource was added.
- The two new Static Web Apps use the Free SKU, bringing the account's sites to nine. The subscription spending limit remains on, and the Cosmos account remains on its free tier with the existing 1,000 RU/s account cap.
- Separate app and cleanup credentials were created for each new collection. Own-collection access succeeded and access to an existing project's collection was denied. Encrypted credentials and backup recovery material are held privately outside the repositories. App credentials are installed in server-only Azure settings; cleanup and deployment credentials are stored in main-only GitHub environments. Both hourly cleanup workflows completed successfully.
- Endpoint Studio visitor workspaces have a fixed 96-hour lifetime; fictional read-only samples are application fixtures and are never removed by workspace cleanup.
- Relay Room expires rooms and signaling metadata after 30 minutes. Media travels directly between browsers and is never stored. The shorter retention window avoids keeping connection metadata for four days.
- Fold & Fork is a static browser-only demo with no database, submitted orders or payment processing.

All 14 application tests pass, including actual MongoDB persistence. Live verification confirmed private workspace isolation, create/read/update operations, password verification, protected samples, fixed 96-hour expiry, room invitation and membership checks, recipient-only signaling, host controls and 30-minute room expiry. Scoped cleanup removed expired synthetic data while retaining a permanent sample fixture in each collection. The permanent REST catalog also remained available. No existing project records were changed.

Azure reserves the standard authorization header; these apps use `X-Demo-Authorization` for their independently validated private bearer credentials. Browser and live API checks verified the deployed fix. Free resources do not extend the subscription trial or authorize a billing upgrade.

## References

- [Cosmos free-tier allowance](https://learn.microsoft.com/en-us/azure/cosmos-db/free-tier)
- [Throughput minimums and service limits](https://learn.microsoft.com/en-us/azure/cosmos-db/concepts-limits)
- [MongoDB scoped roles](https://learn.microsoft.com/en-us/azure/cosmos-db/mongodb/how-to-setup-role-based-access-control)
- [Mongoose compatibility](https://mongoosejs.com/docs/compatibility.html)
- [GitHub scheduled workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule)
