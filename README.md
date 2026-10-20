# AmDev portfolio

A static Astro portfolio for web applications and AI projects. Plain CSS, system fonts, Markdown case studies, browser-rendered 3D, and GitHub Pages. No paid service, database, or runtime API is required.

## Run locally

Use Node.js 24 (see `.nvmrc`).

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro. Before committing:

```sh
npm run validate
```

This checks Astro/TypeScript, builds the site, and verifies generated internal links, assets, and anchors. `npm run preview` serves the production build.

Run `npm run format` to format Astro, CSS, Markdown, and configuration files.

## Personalize

- `src/data/profile.ts`: display name, bio, headline, GitHub URL, optional contact email, and tools.
- `src/styles/home.css`: Editorial and Industrial homepage designs.
- `src/styles/global.css`: project-page and archive styles.
- `src/components/PortfolioHome.astro`: shared homepage content and design switcher.
- `src/scripts/home.ts`: filters, motion controls, and progressively loaded Three.js scenes.
- `src/content/projects/*.md`: project entries and case studies.
- `public/`: images, videos, captions, credits, and favicon.

The collection includes 13 project case studies and a searchable archive of 55 public repositories. `src/data/repositories.json` contains the archive entries, optional case-study slugs, and verified demo URLs. Update this file when adding a repository to the archive; it is a curated static snapshot, not a live GitHub API feed.

Project entries are based on repository source. BCRS is credited as team work and Loc8r as a learning implementation. Loan Calculator and PIG Dice Game use actual demo screenshots; Trivia Turbo uses a frame from its gameplay trailer. Other covers use decorative illustrations. Trivia Turbo links to its existing live site; its local source is not part of the public GitHub repository archive.

See `docs/repository-review.md` for the review scope, hosting decisions, and known limitations.

## Homepage designs

Editorial is the default at `/`. Industrial is available at `/industrial/`. The “Choose your view” bar switches between them using normal links; opening `/` always starts with Editorial. Both pages use the same profile and project data, with a canonical URL pointing to the main homepage.

Both designs include a motion toggle, reduced-motion support, and a static fallback when WebGL is unavailable. Three.js loads separately from the controls. There are no hosted 3D services or additional recurring costs. See `docs/homepage-designs.md` for implementation and verification details.

## Add a project

1. Copy `templates/project.md` to `src/content/projects/your-project.md`.
2. Set its title, description, category (`Web app` or `AI project`), tags, year, and links.
3. Write the case study and set `draft: false` when ready. Drafts appear in neither the homepage nor generated routes.
4. Optionally put a screenshot in `public/images/your-project.webp` and set `image: "images/your-project.webp"` with a descriptive `imageAlt`.
5. Run `npm run validate`, then commit and push.

The filename becomes `/projects/your-project/`. Lower `order` numbers appear first. Projects stay in their existing repositories; add their URLs in `repository`. A `demo` URL is optional. Each project app keeps its own deployment configuration.

Trivia Turbo embeds its 20-second MP4 directly on its case-study page, with native playback controls, English WebVTT captions, and no autoplay. The video, captions, and credits live in `public/video/` and deploy with the portfolio to GitHub Pages; no external video service is needed. Its `trailer` frontmatter provides the asset paths and description, while `image` supplies the poster. Keep media attribution with any replacement trailer and update the player’s visible music credit if the music changes.

## GitHub Pages and CI/CD

Use a **public repository** for free GitHub Pages and standard GitHub Actions runners.

Recommended repository: `GrimSyntaxCloud/GrimSyntaxCloud.github.io`, which serves at `https://grimsyntaxcloud.github.io/`. A repository with another name also works at `https://grimsyntaxcloud.github.io/REPOSITORY/`.

1. Push this project to the chosen repository on branch `main`.
2. In **Settings → Pages → Build and deployment**, select **GitHub Actions**.
3. Open **Actions → Check and deploy portfolio** and run the workflow, or push a commit.

The workflow:

- On a pull request to `main`: installs locked dependencies, checks types, builds, and checks internal links.
- On a push to `main`: runs the same checks, uploads `dist`, and deploys only after the build succeeds.
- Supports manual runs from the Actions tab. Only `main` can deploy.
- Uses the built-in GitHub token; no personal token or paid secret is needed.
- Gives the build read-only repository access and grants Pages deployment permissions only to the deployment job.

The workflow is configured in `.github/workflows/deploy.yml`. It becomes active once pushed to GitHub; a local build does not deploy anything. You can optionally require the **Check and build** status in a GitHub branch rule before merging PRs.

`astro.config.mjs` infers the host and base path from `GITHUB_REPOSITORY` in Actions, including user-site versus project-site URLs. To test a repository subpath locally:

```sh
GITHUB_REPOSITORY=GrimSyntaxCloud/PortfolioSite npm run validate
```

For a custom domain later, set `SITE_URL` and `BASE_PATH` in the workflow build environment and configure the domain in GitHub Pages. Custom domain registration is outside this project's zero-cost setup.

## Cost boundaries

GitHub Pages serves static files. It cannot run a Python model, Node backend, or database. Link to each project's separately hosted demo, or show screenshots and a case study when a free live demo is impractical. The portfolio itself makes no AI API calls and requires no AI subscription.

Reference: [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages), [GitHub Actions billing](https://docs.github.com/en/billing/concepts/product-billing/github-actions).
