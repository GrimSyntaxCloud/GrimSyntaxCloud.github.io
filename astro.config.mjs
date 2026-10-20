import { defineConfig } from 'astro/config';

// GitHub provides this automatically in Actions. Local development uses /.
const [owner, repository] = (process.env.GITHUB_REPOSITORY || '').split('/');
const isUserSite =
  repository?.toLowerCase() === `${owner?.toLowerCase()}.github.io`;

export default defineConfig({
  output: 'static',
  site:
    process.env.SITE_URL ||
    (owner
      ? `https://${owner.toLowerCase()}.github.io`
      : 'http://localhost:4321'),
  base:
    process.env.BASE_PATH ||
    (repository && !isUserSite ? `/${repository}` : '/'),
  trailingSlash: 'always',
});
