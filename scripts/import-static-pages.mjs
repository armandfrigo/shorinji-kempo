import fs from 'node:fs/promises';
import path from 'node:path';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';

const ROOT = path.resolve('shorinjikempo.ch');
const PAGE_LANGS = ['de', 'fr', 'en', 'it'];
const PAGES_BASE = path.resolve('src/content/pages');

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  emDelimiter: '_',
});

turndown.addRule('removeScriptsStyles', {
  filter: ['script', 'style', 'noscript'],
  replacement: () => '',
});

/** Routes already implemented as dedicated .astro pages — skip importing WP duplicates */
const SKIP_ROUTE_SLUGS = new Set([
  'dojo',
  'links',
  'aktuell',
  'blog',
  'shorinji-kempo',
  'startseite',
]);

const SKIP_PATH_PREFIXES = ['startseite/blog/', 'startseite/tag/', 'startseite/category/', 'startseite/author/'];

function slugifyFilename(slug) {
  return slug
    .toLowerCase()
    .replace(/[^a-z0-9\-/]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .replace(/\//g, '-')
    .slice(0, 120);
}

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const out = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

function normalizeHtmlUrls(html) {
  if (!html) return html;
  return html
    .replaceAll(/https?:\/\/shorinjikempo\.ch\//gi, '/')
    .replaceAll(/"\.\.\/wp-content\/uploads\//g, '"/uploads/')
    .replaceAll(/'\.\.\/wp-content\/uploads\//g, "'/uploads/");
}

function normalizeMarkdownUrls(md) {
  return md.replaceAll('](../wp-content/uploads/', '](/uploads/');
}

function isPageIndex(filePath) {
  const rel = path.relative(ROOT, filePath).replaceAll('\\', '/');
  if (!rel.startsWith('startseite/')) return false;
  if (!rel.endsWith('/index.htm') && !rel.endsWith('/index.html')) return false;
  if (SKIP_PATH_PREFIXES.some((p) => rel.startsWith(p))) return false;

  const rest = rel.slice('startseite/'.length);
  const segs = rest.split('/').filter(Boolean);
  if (segs.length < 2) return false;
  if (segs[segs.length - 1] !== 'index.htm' && segs[segs.length - 1] !== 'index.html') return false;

  const routeParts = segs.slice(0, -1);
  if (routeParts.length !== 1) return false;

  const slug = routeParts[0];
  if (SKIP_ROUTE_SLUGS.has(slug)) return false;
  return true;
}

function routeSlugFromPath(filePath) {
  const rel = path.relative(ROOT, filePath).replaceAll('\\', '/');
  const rest = rel.slice('startseite/'.length);
  const segs = rest.split('/').filter(Boolean);
  return segs[0];
}

function extractPage($, slug) {
  const bodyClass = $('body').attr('class') ?? '';
  if (bodyClass.includes('single-post') && bodyClass.includes('postid-')) {
    return null;
  }

  const title =
    $('h1.fl-post-title').first().text().trim() ||
    $('h1.entry-title').first().text().trim() ||
    $('meta[property="og:title"]').attr('content')?.trim() ||
    slug;

  let contentEl = $('.fl-post-content[itemprop="text"]').first();
  if (!contentEl.length) contentEl = $('.fl-post-content').first();
  if (!contentEl.length) contentEl = $('.entry-content').first();
  if (!contentEl.length) contentEl = $('article .fl-builder-content').first();
  if (!contentEl.length) contentEl = $('.fl-builder-content').first();

  const rawHtml = contentEl.html()?.trim() ?? '';
  if (!rawHtml) return null;

  const html = normalizeHtmlUrls(rawHtml);
  let markdown = turndown.turndown(html).trim();
  markdown = normalizeMarkdownUrls(markdown);

  return { slug, title, markdown };
}

function toFrontmatter(page, lang) {
  const safeTitle = page.title.replace(/"/g, '\\"');
  return ['---', `lang: ${lang}`, `routeSlug: ${page.slug}`, `title: "${safeTitle}"`, '---', ''].join('\n');
}

async function main() {
  if (!(await fileExists(ROOT))) {
    console.error(`Input folder not found: ${ROOT}`);
    process.exit(1);
  }
  const files = await walk(ROOT);
  const candidates = files.filter(isPageIndex);

  let imported = 0;
  for (const file of candidates) {
    const slug = routeSlugFromPath(file);
    const raw = await fs.readFile(file, 'utf8');
    const $ = cheerio.load(raw);
    const page = extractPage($, slug);
    if (!page) {
      console.warn(`Skip (no body): startseite/${slug}/`);
      continue;
    }

    const filename = `${slugifyFilename(page.slug)}.md`;
    for (const lang of PAGE_LANGS) {
      const dir = path.join(PAGES_BASE, lang);
      await fs.mkdir(dir, { recursive: true });
      const outPath = path.join(dir, filename);
      const body = `${toFrontmatter(page, lang)}${page.markdown}\n`;
      await fs.writeFile(outPath, body, 'utf8');
    }
    imported++;
    console.log(`OK ${slug} -> ${PAGE_LANGS.map((l) => path.join('src/content/pages', l, filename)).join(', ')}`);
  }

  console.log(`Imported ${imported} page(s) × ${PAGE_LANGS.length} locales under ${PAGES_BASE}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
