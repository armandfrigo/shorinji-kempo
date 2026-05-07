import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://armandfrigo.github.io',
  base: '/shorinji-kempo',
  integrations: [react(), tailwind({ applyBaseStyles: false })],
  output: 'static'
});