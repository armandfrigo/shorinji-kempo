import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://armandfrigo.github.io',
  base: '/shorinji-kempo',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
  output: 'static'
});