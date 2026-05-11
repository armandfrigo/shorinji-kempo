import { getCollection, render } from 'astro:content';
import { withBase } from '../utils/paths.ts';

export type SiteLang = 'de' | 'fr' | 'en' | 'it';

export type SlugPageResult =
  | { redirect: string }
  | {
      Content: Awaited<ReturnType<typeof render>>['Content'];
      isSitePage: boolean;
      pageEntry: Awaited<ReturnType<typeof getCollection<'pages'>>>[number] | undefined;
      postEntry: Awaited<ReturnType<typeof getCollection<'news'>>>[number] | undefined;
      lang: SiteLang;
    };

export async function resolveSlugPage(slug: string, lang: SiteLang): Promise<SlugPageResult> {
  const sitePages = await getCollection('pages');
  const pageEntry =
    sitePages.find((p) => p.data.routeSlug === slug && p.data.lang === lang) ??
    sitePages.find((p) => p.data.routeSlug === slug && p.data.lang === 'de');

  const posts = await getCollection('news');
  const postEntry =
    posts.find((p) => p.data.lang === lang && p.data.wpSlug === slug) ??
    posts.find((p) => p.data.lang === 'de' && p.data.wpSlug === slug);

  if (!pageEntry && !postEntry) {
    return { redirect: withBase('/') };
  }

  const entry = pageEntry ?? postEntry!;
  const { Content } = await render(entry);

  return {
    Content,
    isSitePage: Boolean(pageEntry),
    pageEntry,
    postEntry,
    lang,
  };
}
