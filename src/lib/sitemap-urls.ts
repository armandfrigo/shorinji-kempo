import { getCollection } from 'astro:content';
import {
  absoluteSiteUrl,
  buildHreflangAlternates,
  logicalPathForLocale,
  SITE_LOCALES,
  type HreflangLink,
  type SiteLocale,
} from '../utils/seo.ts';

export type SitemapUrl = {
  loc: string;
  alternates: HreflangLink[];
};

const STATIC_LOGICAL_PATHS = ['/', '/dojo', '/shorinji-kempo', '/aktuell'] as const;

function groupPagesByRouteSlug(
  pages: Awaited<ReturnType<typeof getCollection<'pages'>>>,
): Map<string, SiteLocale[]> {
  const map = new Map<string, SiteLocale[]>();
  for (const page of pages) {
    const slug = page.data.routeSlug;
    const langs = map.get(slug) ?? [];
    if (!langs.includes(page.data.lang)) {
      langs.push(page.data.lang);
    }
    map.set(slug, langs);
  }
  return map;
}

export async function buildSitemapUrls(site: string, base: string): Promise<SitemapUrl[]> {
  const urls: SitemapUrl[] = [];
  const seenLocs = new Set<string>();

  const push = (logicalPath: string, locales: SiteLocale[]) => {
    const alternates = buildHreflangAlternates(logicalPath, locales, site, base);
    for (const locale of locales) {
      const loc = absoluteSiteUrl(logicalPathForLocale(logicalPath, locale), site, base);
      if (seenLocs.has(loc)) continue;
      seenLocs.add(loc);
      urls.push({ loc, alternates });
    }
  };

  for (const logical of STATIC_LOGICAL_PATHS) {
    push(logical, [...SITE_LOCALES]);
  }

  const pages = await getCollection('pages');
  for (const [routeSlug, locales] of groupPagesByRouteSlug(pages)) {
    push(`/${routeSlug}`, locales);
  }

  const news = await getCollection('news');
  for (const post of news) {
    const slug = post.data.wpSlug ?? post.slug;
    push(`/${slug}`, [post.data.lang]);
  }

  return urls.sort((a, b) => a.loc.localeCompare(b.loc));
}
