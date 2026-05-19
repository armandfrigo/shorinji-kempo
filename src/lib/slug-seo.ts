import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { SiteLocale } from '../utils/seo.ts';

const ORG_SUFFIX: Record<SiteLocale, string> = {
  de: 'Schweizerische Shorinji Kempo Föderation',
  fr: 'Fédération suisse de Shorinji Kempo',
  en: 'Swiss Shorinji Kempo Federation',
  it: 'Federazione svizzera di Shorinji Kempo',
};

export async function getSlugLayoutSeo(
  routeSlug: string,
  lang: SiteLocale,
  pageEntry?: CollectionEntry<'pages'>,
  postEntry?: CollectionEntry<'news'>,
): Promise<{ title: string; description: string; hreflangLocales?: SiteLocale[] }> {
  const title = pageEntry?.data.title ?? postEntry?.data.title ?? ORG_SUFFIX[lang];
  const description =
    (postEntry?.data.excerpt && postEntry.data.excerpt.length > 0
      ? postEntry.data.excerpt
      : undefined) ?? `${title} — ${ORG_SUFFIX[lang]}`;

  if (!pageEntry) {
    return { title, description };
  }

  const pages = await getCollection('pages');
  const hreflangLocales = pages
    .filter((p) => p.data.routeSlug === routeSlug)
    .map((p) => p.data.lang);

  return { title, description, hreflangLocales };
}
