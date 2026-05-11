import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import rehypeInternalLinks from './rehype-internal-links.mjs';

/** Published under https://armandfrigo.github.io/shorinji-kempo/ */
const SITE_BASE = '/shorinji-kempo';

export default defineConfig(({ command }) => {
  const base = command === 'dev' ? '/' : SITE_BASE;

  return {
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
  };
});
