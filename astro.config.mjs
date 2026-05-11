import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import rehypeInternalLinks from './rehype-internal-links.mjs';

/** Published under https://armandfrigo.github.io/shorinji-kempo/ (no trailing slash; Astro normalizes). */
function normalizeBase(raw) {
  if (raw == null || String(raw).trim() === '') return '/shorinji-kempo';
  const s = String(raw).trim();
  const withSlash = s.startsWith('/') ? s : `/${s}`;
  return withSlash.replace(/\/+$/, '') || '/shorinji-kempo';
}

const deployBase = normalizeBase(process.env.SITE_BASE);

/**
 * `defineConfig` does not call a function export — a callback config is ignored and `base` falls back to `/`.
 * Use the Astro CLI subcommand: only `dev` serves at `/`; `build`, `preview`, etc. use the deploy base.
 */
const astroSubcommand = process.argv[2];
const base = astroSubcommand === 'dev' ? '/' : deployBase;

export default defineConfig({
  site: 'https://armandfrigo.github.io',
  base,
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'fr', 'en', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      fr: 'de',
      en: 'de',
      it: 'de',
    },
  },
  integrations: [markdoc()],
  markdown: {
    rehypePlugins: [[rehypeInternalLinks, { base }]],
  },
});
