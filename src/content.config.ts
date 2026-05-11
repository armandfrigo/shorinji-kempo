import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Glob `base` anchored to this file so collections resolve even when cwd ≠ project root. */
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: new URL('./content/news', import.meta.url) }),
  schema: z.object({
    lang: z.enum(['de', 'en', 'fr', 'it']),
    wpSlug: z.string().optional(),
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    excerpt: z.string().optional(),
  }),
});

/** Top-level site pages (Shorinji / Dojo locations). `scripts/import-static-pages.mjs` copies one HTML body into every `lang` folder — do not assume per-locale prose without manual edits. */
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: new URL('./content/pages', import.meta.url) }),
  schema: z.object({
    lang: z.enum(['de', 'en', 'fr', 'it']),
    routeSlug: z.string(),
    title: z.string(),
  }),
});

export const collections = { news, pages };

