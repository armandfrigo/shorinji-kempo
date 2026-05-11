import { config, fields, collection } from '@keystatic/core';

// Cloudflare Pages friendly default:
// - local dev: edit on filesystem
// - production: use Keystatic Cloud (business-user friendly)
//
// To enable Keystatic Cloud, set KEYSTATIC_STORAGE=cloud and
// KEYSTATIC_CLOUD_PROJECT / KEYSTATIC_CLOUD_KEY in your environment.
const storageMode = process.env.KEYSTATIC_STORAGE ?? 'local';

export default config({
  storage:
    storageMode === 'cloud'
      ? {
          kind: 'cloud',
          project: process.env.KEYSTATIC_CLOUD_PROJECT!,
          apiKey: process.env.KEYSTATIC_CLOUD_KEY!,
        }
      : { kind: 'local' },
  ui: {
    brand: { name: 'Shorinji Kempo' },
  },
  collections: {
    news: collection({
      label: 'News',
      path: 'src/content/news/*',
      format: { contentField: 'body' },
      schema: {
        lang: fields.select({
          label: 'Language',
          options: [
            { label: 'Deutsch', value: 'de' },
            { label: 'English', value: 'en' },
            { label: 'Français', value: 'fr' },
            { label: 'Italiano', value: 'it' },
          ],
          defaultValue: 'de',
        }),
        wpSlug: fields.slug({
          name: { label: 'WordPress slug' },
        }),
        title: fields.text({ label: 'Title', validation: { isRequired: true } }),
        date: fields.date({ label: 'Date', validation: { isRequired: true } }),
        author: fields.text({ label: 'Author', validation: { isRequired: false } }),
        image: fields.text({ label: 'Image path', validation: { isRequired: false } }),
        imageAlt: fields.text({ label: 'Image alt', validation: { isRequired: false } }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true, validation: { isRequired: false } }),
        body: fields.markdoc({ label: 'Body' }),
      },
    }),
  },
});

