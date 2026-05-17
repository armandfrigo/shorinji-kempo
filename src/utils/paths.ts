/**
 * Prefix root-relative URLs with Astro `config.base` (subpath on GitHub Pages).
 * In `astro dev`, `base` is `/` so paths stay unchanged.
 */
export function withBase(path: string): string {
  if (!path) return path;
  if (
    path.startsWith('http:') ||
    path.startsWith('https:') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:')
  ) {
    return path;
  }
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!base) return normalized;
  return `${base}${normalized}`;
}

/** Strip deploy subpath from `URL.pathname` for locale-neutral routing logic. */
export function stripBaseFromPath(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (base && pathname.startsWith(base)) {
    const rest = pathname.slice(base.length);
    if (!rest || rest === '') return '/';
    return rest.startsWith('/') ? rest : `/${rest}`;
  }
  return pathname;
}

/** Generate locale-prefixed URL path. */
export function localizePath(path: string, lang: string = 'de'): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Handle anchor links (e.g., "/#contact" → locale-prefixed /fr/#contact)
  if (path.startsWith('/#')) {
    const hash = path.slice(1);
    const localizedPath =
      lang === 'de' ? `/${hash}` : `/${lang}/${hash}`;
    return withBase(localizedPath.replace(/\/+/g, '/'));
  }

  // Default locale (de) has no URL prefix (see astro.config i18n.prefixDefaultLocale)
  const localizedPath =
    lang === 'de'
      ? `/${cleanPath}`.replace(/\/+/g, '/')
      : `/${lang}/${cleanPath}`.replace(/\/+/g, '/');

  return withBase(localizedPath);
}