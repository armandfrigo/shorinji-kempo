import { stripBaseFromPath } from './paths.ts';

export const SITE_LOCALES = ['de', 'fr', 'en', 'it'] as const;
export type SiteLocale = (typeof SITE_LOCALES)[number];

/** BCP 47 tags for hreflang / sitemap. */
export const HREFLANG_TAGS: Record<SiteLocale, string> = {
  de: 'de-CH',
  fr: 'fr-CH',
  en: 'en',
  it: 'it-CH',
};

const LOCALE_PREFIXES = new Set(['en', 'fr', 'it']);

export const DEFAULT_OG_IMAGE = '/images/hero-main.jpg';

/** Site-wide fallback meta description (German default locale). */
export const DEFAULT_META_DESCRIPTION =
  'Schweizerische Shorinji Kempo Föderation (SSKF): Dojos in Basel, Aubonne und Muri. Kostenloses Probetraining — Körper und Geist trainieren.';

export function parseLocalePath(pathname: string): { locale: SiteLocale; logicalPath: string } {
  const path = stripBaseFromPath(pathname);
  const segments = path.split('/').filter(Boolean);
  const first = segments[0];
  if (first && LOCALE_PREFIXES.has(first)) {
    const rest = segments.slice(1).join('/');
    return { locale: first as SiteLocale, logicalPath: rest ? `/${rest}` : '/' };
  }
  return { locale: 'de', logicalPath: path === '' || path === '/' ? '/' : path.startsWith('/') ? path : `/${path}` };
}

/** Path segment after deploy base, without locale prefix (e.g. `/dojo`, `/basel`). */
export function logicalPathForLocale(logicalPath: string, locale: SiteLocale): string {
  const normalized = logicalPath === '/' ? '' : logicalPath.replace(/^\//, '');
  if (!normalized) {
    return locale === 'de' ? '/' : `/${locale}/`;
  }
  return locale === 'de' ? `/${normalized}` : `/${locale}/${normalized}`;
}

export function absoluteSiteUrl(path: string, site: string, base: string): string {
  const siteOrigin = site.replace(/\/$/, '');
  const basePath = base.replace(/\/$/, '');
  const pathPart = path.startsWith('/') ? path : `/${path}`;
  if (pathPart === '/') {
    return `${siteOrigin}${basePath}/`;
  }
  return `${siteOrigin}${basePath}${pathPart}`;
}

export type HreflangLink = { hreflang: string; href: string };

/** Build hreflang alternates when the same logical path exists in each listed locale. */
export function buildHreflangAlternates(
  logicalPath: string,
  locales: SiteLocale[],
  site: string,
  base: string,
): HreflangLink[] {
  const links: HreflangLink[] = locales.map((locale) => ({
    hreflang: HREFLANG_TAGS[locale],
    href: absoluteSiteUrl(logicalPathForLocale(logicalPath, locale), site, base),
  }));

  const defaultLocale = locales.includes('de') ? 'de' : locales[0];
  if (defaultLocale) {
    links.push({
      hreflang: 'x-default',
      href: absoluteSiteUrl(logicalPathForLocale(logicalPath, defaultLocale), site, base),
    });
  }

  return links;
}
