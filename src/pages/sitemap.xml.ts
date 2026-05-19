import type { APIRoute } from 'astro';
import { buildSitemapUrls } from '../lib/sitemap-urls.ts';

export const prerender = true;

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = async ({ site }) => {
  const siteOrigin = (site?.href ?? import.meta.env.SITE ?? 'https://armandfrigo.github.io').replace(/\/$/, '');
  const base = import.meta.env.BASE_URL;
  const entries = await buildSitemapUrls(siteOrigin, base);

  const body = entries
    .map((entry) => {
      const altLinks = entry.alternates
        .map(
          (alt) =>
            `    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}" />`,
        )
        .join('\n');
      return `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
${altLinks}
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
