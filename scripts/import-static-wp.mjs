import fs from 'node:fs/promises';
import path from 'node:path';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';

const ROOT = path.resolve('shorinjikempo.ch');
const OUT_ROOT = path.resolve('src/content/news/de-imported');

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  emDelimiter: '_',
});

turndown.addRule('removeScriptsStyles', {
  filter: ['script', 'style', 'noscript'],
  replacement: () => '',
});

function slugifyFilename(slug) {
  return slug
    .toLowerCase()
    .replace(/[^a-z0-9\-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
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

function isCandidatePostIndex(filePath) {
  const rel = path.relative(ROOT, filePath).replaceAll('\\', '/');
  if (!rel.endsWith('/index.htm') && rel !== 'index.htm') return false;

  // Exclude obvious non-post areas
  const blockedPrefixes = [
    'tag/',
    'category/',
    'author/',
    'comments/',
    'wp-json/',
    'startseite/', // WP pages, not posts
    'feed/',
  ];
  if (blockedPrefixes.some((p) => rel.startsWith(p))) return false;
  if (rel.startsWith('wp-login.php')) return false;

  // Root index is homepage
  if (rel === 'index.htm') return false;

  // Post slug is the first segment (e.g. "schwarzgurttrainings-2026/index.htm")
  const segs = rel.split('/');
  if (segs.length !== 2) return false;
  return true;
}

function extractPost($, slug) {
  const bodyClass = $('body').attr('class') ?? '';
  const isSinglePost = bodyClass.includes('single-post') || bodyClass.includes('post-template-default');
  if (!isSinglePost) return null;

  const title =
    $('h1.fl-post-title').first().text().trim() ||
    $('meta[property="og:title"]').attr('content')?.trim() ||
    slug;

  const author = $('span.fl-post-author span').first().text().trim() || undefined;
  const dateText = $('span.fl-post-date').first().text().trim() || undefined;
  const isoDate = $('meta[itemprop="datePublished"]').attr('content')?.trim() || undefined;

  const featuredImg =
    $('meta[itemprop="url"][content*="wp-content/uploads"]').first().attr('content')?.trim() ||
    undefined;

  // Main post content
  const contentEl = $('.fl-post-content[itemprop="text"]').first();
  const rawHtml = contentEl.html()?.trim() ?? '';
  const html = rawHtml
    .replaceAll(/https?:\/\/shorinjikempo\.ch\//gi, '/')
    .replaceAll(/"\.\.\/wp-content\/uploads\//g, '"/uploads/')
    .replaceAll(/'\.\.\/wp-content\/uploads\//g, "'/uploads/");
  let markdown = turndown.turndown(html).trim();
  markdown = markdown.replaceAll('](../wp-content/uploads/', '](/uploads/');

  const imagePath = featuredImg
    ? featuredImg
        .replace(/^https?:\/\/shorinjikempo\.ch\//, '/')
        .replace(/^\/wp-content\/uploads\//, '/uploads/')
    : undefined;

  // Quick excerpt: first non-empty paragraph text from markdown
  const excerpt = markdown
    .split('\n')
    .map((l) => l.trim())
    .find((l) => l && !l.startsWith('#') && !l.startsWith('![') && !l.startsWith('- '))
    ?.slice(0, 220);

  return {
    slug,
    title,
    author,
    dateText,
    isoDate,
    imagePath,
    excerpt,
    markdown,
  };
}

function toFrontmatter(post) {
  const lines = ['---', 'lang: de', `wpSlug: ${post.slug}`, `title: ${post.title}`];
  if (post.isoDate) lines.push(`date: ${post.isoDate}`);
  if (post.author) lines.push(`author: ${post.author}`);
  if (post.imagePath) lines.push(`image: ${post.imagePath}`);
  if (post.excerpt) lines.push(`excerpt: ${JSON.stringify(post.excerpt)}`);
  lines.push('---', '');
  return lines.join('\n');
}

async function main() {
  if (!(await fileExists(ROOT))) {
    console.error(`Input folder not found: ${ROOT}`);
    process.exit(1);
  }
  await fs.mkdir(OUT_ROOT, { recursive: true });

  const files = await walk(ROOT);
  const candidates = files.filter(isCandidatePostIndex);

  let imported = 0;
  for (const file of candidates) {
    const rel = path.relative(ROOT, file).replaceAll('\\', '/');
    const slug = rel.split('/')[0];
    const raw = await fs.readFile(file, 'utf8');
    const $ = cheerio.load(raw);
    const post = extractPost($, slug);
    if (!post) continue;

    const filename = `${slugifyFilename(post.slug)}.md`;
    const outPath = path.join(OUT_ROOT, filename);
    const body = `${toFrontmatter(post)}${post.markdown}\n`;
    await fs.writeFile(outPath, body, 'utf8');
    imported++;
  }

  console.log(`Imported ${imported} posts to ${OUT_ROOT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

