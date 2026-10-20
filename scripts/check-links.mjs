import { readdir, readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import config from '../astro.config.mjs';

// Check the generated output, including GitHub Pages repository prefixes.
const base = `${(config.base || '/').replace(/\/$/, '')}/`;
const site = new URL(config.site);
const failures = [];
let checked = 0;
async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((entry) =>
        entry.isDirectory()
          ? walk(join(directory, entry.name))
          : join(directory, entry.name),
      ),
    )
  ).flat();
}
async function isFile(path) {
  try {
    return (await stat(path)).isFile();
  } catch {
    return false;
  }
}
const files = (await walk('dist')).filter((file) => file.endsWith('.html'));
for (const file of files) {
  const html = await readFile(file, 'utf8');
  const pagePath = base + file.slice(5).replace(/index\.html$/, '');
  for (const match of html.matchAll(
    /<(?:a|link|script|img)\b[^>]*?\b(?:href|src)="([^"]+)"[^>]*>/g,
  )) {
    const value = match[1].replaceAll('&amp;', '&');
    const url = new URL(value, new URL(pagePath, site));
    if (
      !['http:', 'https:'].includes(url.protocol) ||
      url.origin !== site.origin
    )
      continue;
    checked++;
    if (!url.pathname.startsWith(base)) {
      failures.push(`${file}: ${value} is outside the base path ${base}`);
      continue;
    }
    const relative = decodeURIComponent(url.pathname.slice(base.length));
    const candidate = join('dist', relative);
    const target = (await isFile(candidate))
      ? candidate
      : (await isFile(join(candidate, 'index.html')))
        ? join(candidate, 'index.html')
        : (await isFile(`${candidate.replace(/\/$/, '')}.html`))
          ? `${candidate.replace(/\/$/, '')}.html`
          : null;
    if (!target) {
      failures.push(`${file}: missing target ${value}`);
      continue;
    }
    if (url.hash && target.endsWith('.html')) {
      const targetHtml = await readFile(target, 'utf8');
      const id = decodeURIComponent(url.hash.slice(1));
      if (!targetHtml.includes(`id="${id}"`))
        failures.push(`${file}: missing anchor ${value}`);
    }
  }
}
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(
    `Verified ${checked} internal links/assets across ${files.length} pages (base: ${base}).`,
  );
}
