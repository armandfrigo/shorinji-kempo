import { getCollection } from 'astro:content';

/** Paths for `[slug].astro` at site root and under `en/`, `fr/`, `it/`. */
export async function getSlugStaticPaths() {
  const posts = await getCollection('news');
  const sitePages = await getCollection('pages');

  const newsSlugs = posts
    .map((p) => p.data.wpSlug ?? p.slug)
    .filter((s): s is string => typeof s === 'string' && s.length > 0);

  const pageSlugs = sitePages
    .map((p) => p.data.routeSlug)
    .filter((s): s is string => typeof s === 'string' && s.length > 0);

  const slugs = new Set([...newsSlugs, ...pageSlugs]);
  return Array.from(slugs).map((slug) => ({ params: { slug } }));
}
