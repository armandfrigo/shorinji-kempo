/**
 * Normalize migrated WP asset paths and prefix root-relative URLs with Astro `base`
 * (e.g. GitHub Pages subpath). Handles `src`, `href`, `srcset`, and `source[srcset]`.
 */
export default function rehypeInternalLinks(options = {}) {
  const base = options.base ?? '/';
  const prefix = base === '/' ? '' : String(base).replace(/\/$/, '');

  return (tree) => {
    const visit = (node) => {
      if (node.type === 'element' && node.properties) {
        const { tagName, properties } = node;
        if (tagName === 'img' && typeof properties.src === 'string') {
          properties.src = prefixUrl(normalizeAssetUrl(properties.src), prefix);
        }
        if (tagName === 'img' && typeof properties.srcset === 'string') {
          properties.srcset = prefixSrcset(properties.srcset, prefix);
        }
        if (tagName === 'source' && typeof properties.srcset === 'string') {
          properties.srcset = prefixSrcset(properties.srcset, prefix);
        }
        if (tagName === 'a' && typeof properties.href === 'string') {
          properties.href = prefixUrl(normalizeAssetUrl(properties.href), prefix);
        }
      }
      if (node.children) {
        for (const child of node.children) {
          visit(child);
        }
      }
    };
    visit(tree);
  };
}

/** Map `wp-content/uploads/...` (and site-absolute variants) to `/uploads/...`. */
export function normalizeAssetUrl(url) {
  if (typeof url !== 'string') return url;
  let u = url.trim();

  // Keep external URLs (Google Maps, social, etc.) — only rewrite WP uploads on any host.
  const absolute = u.match(/^https?:\/\/[^/]+(\/.*)?$/i);
  if (absolute) {
    const path = absolute[1] ?? '/';
    const wpUploads = path.replace(/^\/wp-content\/uploads\//i, '/uploads/');
    if (wpUploads !== path) return wpUploads;
    return u;
  }

  u = u.replace(/^\/?wp-content\/uploads\//i, '/uploads/');
  u = u.replace(/^\.\.\/wp-content\/uploads\//i, '/uploads/');
  if (/^wp-content\/uploads\//i.test(u)) u = `/${u}`;
  return u;
}

function prefixSrcset(value, prefix) {
  return value
    .split(',')
    .map((part) => {
      const trimmed = part.trim();
      if (!trimmed) return trimmed;
      const lastSpace = trimmed.lastIndexOf(' ');
      if (lastSpace === -1) {
        return prefixUrl(normalizeAssetUrl(trimmed), prefix);
      }
      const url = trimmed.slice(0, lastSpace).trim();
      const desc = trimmed.slice(lastSpace + 1).trim();
      return `${prefixUrl(normalizeAssetUrl(url), prefix)} ${desc}`;
    })
    .join(', ');
}

function prefixUrl(url, prefix) {
  if (!prefix || typeof url !== 'string') return url;
  if (/^https?:\/\//i.test(url) || !url.startsWith('/') || url.startsWith('//')) {
    return url;
  }
  return `${prefix}${url}`;
}
