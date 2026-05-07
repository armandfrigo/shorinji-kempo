import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://armandfrigo.github.io',
  base: '/shorinji-kempo',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'fr', 'en', 'it'],
    routing: {
      prefixDefaultLocale: false
    },
    fallback: {
      fr: 'de',
      en: 'de',
      it: 'de'
    }
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});