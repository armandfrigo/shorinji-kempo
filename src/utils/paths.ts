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
