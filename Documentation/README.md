# Shorinji Kempo Switzerland - Astro

Production-ready website built with Astro.

## Quick Start

```
npm install
npm run dev
```

Opens on http://localhost:3000

## Deploy to GitHub Pages

1. Create GitHub repo and push:
```
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/shorinji-kempo-astro.git
git branch -M main
git push -u origin main
```

2. Update `astro.config.mjs`:
```javascript
site: 'https://YOUR_USERNAME.github.io',
```

3. GitHub Actions will deploy automatically.

Site will be at: `https://YOUR_USERNAME.github.io/shorinji-kempo-astro`

## Add Images

Place in `public/images/{basel,aubonne,muri}/` and use:
```
<img src="/images/basel/hero.jpg" alt="Dojo Basel" />
```

## Update Content

Edit `src/data/content.js` to change all text, schedules, fees, Instagram links.

## Links

- Astro docs: https://docs.astro.build
- Tailwind: https://tailwindcss.com