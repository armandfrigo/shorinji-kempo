import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/shorinji-kempo-astro',
  integrations: [react(), tailwind({ applyBaseStyles: false })],
  output: 'static'
});