# PowerShell Script for Windows - Shorinji Kempo Astro Setup
# Run in PowerShell: powershell -ExecutionPolicy Bypass -File setup-windows.ps1

$projectName = "shorinji-kempo"
Write-Host "🥋 Creating $projectName..." -ForegroundColor Cyan

# Create directories
New-Item -ItemType Directory -Force -Path "$projectName/src/layouts" | Out-Null
New-Item -ItemType Directory -Force -Path "$projectName/src/components" | Out-Null
New-Item -ItemType Directory -Force -Path "$projectName/src/pages" | Out-Null
New-Item -ItemType Directory -Force -Path "$projectName/src/styles" | Out-Null
New-Item -ItemType Directory -Force -Path "$projectName/src/data" | Out-Null
New-Item -ItemType Directory -Force -Path "$projectName/public/images/basel" | Out-Null
New-Item -ItemType Directory -Force -Path "$projectName/public/images/aubonne" | Out-Null
New-Item -ItemType Directory -Force -Path "$projectName/public/images/muri" | Out-Null
New-Item -ItemType Directory -Force -Path "$projectName/.github/workflows" | Out-Null

# Function to create file
function CreateFile {
    param([string]$path, [string]$content)
    New-Item -ItemType File -Path $path -Value $content -Force | Out-Null
}

# ===== CONFIGURATION FILES =====

$packageJson = @'
{
  "name": "shorinji-kempo-astro",
  "type": "module",
  "version": "1.0.0",
  "description": "Shorinji Kempo Switzerland Official Website",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "astro": "^4.0.0",
    "react": "^18.0.0",
    "@astrojs/react": "^3.0.0",
    "@astrojs/tailwind": "^5.0.0",
    "tailwindcss": "^3.4.0"
  }
}
'@

CreateFile "$projectName/package.json" $packageJson

$astroConfig = @'
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/shorinji-kempo-astro',
  integrations: [react(), tailwind({ applyBaseStyles: false })],
  output: 'static'
});
'@

CreateFile "$projectName/astro.config.mjs" $astroConfig

$tailwindConfig = @'
export default {
  content: ['./src/**/*.{astro,html,js,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Crimson Text', 'Georgia', 'serif'],
        sans: ['Source Sans Pro', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
'@

CreateFile "$projectName/tailwind.config.mjs" $tailwindConfig

$tsConfig = '{ "extends": "astro/tsconfigs/strict" }'
CreateFile "$projectName/tsconfig.json" $tsConfig

$gitIgnore = @'
node_modules/
dist/
.astro/
.DS_Store
.env
'@

CreateFile "$projectName/.gitignore" $gitIgnore

# ===== GITHUB ACTIONS =====

$deployYaml = @'
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v2
        with:
          path: .
          node-version: '18'
          package-manager: npm

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v2
'@

CreateFile "$projectName/.github/workflows/deploy.yml" $deployYaml

# ===== DATA & CONTENT =====

$contentJs = @'
export const content = {
  en: {
    nav: ['Home', 'Philosophy', 'About', 'Dojos', 'Contact'],
    home: {
      hero: {
        tagline: '75 Years of Tradition. Global Presence. Local Roots.',
        headline: 'Shorinji Kempo Switzerland',
        subline: 'Self-Defense Meets Philosophy',
        cta: 'Free Trial Class'
      },
      stats: [
        { number: '3M+', label: 'Practitioners Worldwide' },
        { number: '50+', label: 'Countries on All Continents' },
        { number: '75', label: 'Years of Unbroken Tradition' },
        { number: '3', label: 'Dojos in Switzerland' }
      ],
      core: {
        title: 'Three Pillars of Our Practice',
        items: [
          { icon: '🥋', title: 'Self-Defense', desc: 'Scientific. Practical. Effective.' },
          { icon: '🧠', title: 'Philosophy', desc: 'Wisdom from 75 years of proven teaching.' },
          { icon: '🌍', title: 'Community', desc: '500+ Swiss practitioners, part of a global network.' }
        ]
      }
    },
    timeline: [
      { year: '1947', title: 'Founded', desc: 'So Doshin founds Shorinji Kempo in Tadotsu, Japan' },
      { year: '1950s', title: 'Global Expansion', desc: 'Shorinji Kempo spreads worldwide' },
      { year: '1975', title: 'Switzerland Opens', desc: 'First Swiss dojo established' },
      { year: '2025', title: 'Today', desc: '3 dojos, 500+ members, 50+ countries' }
    ],
    instructors: [
      { name: 'Marco Pellegrino', dan: '5th Dan', location: 'Basel', exp: '25 years', bio: 'Specialist in self-defense and modern training methods' },
      { name: 'Roberto Comino', dan: '4th Dan', location: 'Aubonne', exp: '20 years', bio: 'Focus on philosophical instruction and personal development' },
      { name: 'Tomoko Muth', dan: '4th Dan', location: 'Muri', exp: '18 years', bio: 'Specialist in children''s training and motor development' }
    ],
    philosophy: [
      { name: 'Ken Zen Ichinyo', sub: 'Body & Mind', text: 'Inseparable unity, equally developed.' },
      { name: 'Riki Ai Funi', sub: 'Strength & Love', text: 'Harmony between physical strength and compassion.' },
      { name: 'Shushu Koju', sub: 'Defense First', text: 'Avoid aggression, preserve safety.' },
      { name: 'Fusatsu Katsujin', sub: 'Protect Without Injure', text: 'Effective and humane defensive techniques.' },
      { name: 'Go Ju Ittai', sub: 'Hard & Soft', text: 'Hard and soft techniques in perfect harmony.' },
      { name: 'Kumite Shutai', sub: 'Partnership', text: 'Respectful training and mutual growth.' }
    ],
    dojos: [
      {
        name: 'Basel',
        instructor: 'Marco Pellegrino (5th Dan)',
        schedule: 'Tuesday 19:00–21:00',
        address: 'Winkelriedplatz 6, 4053 Basel',
        phone: '+41 79 636 56 82',
        fees: 'CHF 90/month',
        instagram: 'https://www.instagram.com/shorinjikempo.basel/'
      },
      {
        name: 'Aubonne',
        instructor: 'Roberto Comino (4th Dan)',
        schedule: 'Tuesday 19:00–20:30',
        address: 'Collège du Chêne, Ave du Mont-Blanc 53, 1170 Aubonne',
        email: 'comino.roberto@gmail.com',
        fees: 'CHF 150/quarter',
        instagram: 'https://www.instagram.com/shorinjikempo.aubonne'
      },
      {
        name: 'Muri (Kids)',
        instructor: 'Tomoko Muth (4th Dan)',
        schedule: 'Thursday 16:20–17:00',
        address: 'MüZe Family & Education Center, Kranichweg 10, 3074 Muri',
        email: 'tomoko.muth@shorinjikempo.ch',
        fees: 'CHF 14–18/class',
        instagram: 'https://www.instagram.com/shorinjikempo.muri/'
      }
    ]
  }
};
'@

CreateFile "$projectName/src/data/content.js" $contentJs

# ===== STYLES =====

$globalCss = @'
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600&family=Source+Sans+Pro:wght@300;400;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

html { scroll-behavior: smooth; }
body { font-family: 'Source Sans Pro', system-ui, sans-serif; color: #1f2937; }
h1, h2, h3, h4 { font-family: 'Crimson Text', Georgia, serif; font-weight: 400; }

.fade-in { animation: fadeIn 0.5s ease-in; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
'@

CreateFile "$projectName/src/styles/global.css" $globalCss

# ===== LAYOUTS =====

$layoutAstro = @'
---
import '../styles/global.css';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

export interface Props {
  title: string;
}

const { title } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>{title} - Shorinji Kempo</title>
  </head>
  <body>
    <Header />
    <main class="min-h-screen">
      <slot />
    </main>
    <Footer />
  </body>
</html>
'@

CreateFile "$projectName/src/layouts/Layout.astro" $layoutAstro

# ===== COMPONENTS =====

$headerAstro = @'
---
import { content } from '../data/content';
const t = content.en;
---

<header class="bg-black text-white sticky top-0 z-50 shadow-2xl">
  <div class="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
    <div class="flex items-center gap-3">
      <div class="text-3xl font-bold">拳士</div>
      <div class="hidden sm:block">
        <div class="text-lg font-light">Shorinji Kempo</div>
        <div class="text-xs opacity-60">Switzerland</div>
      </div>
    </div>

    <nav class="hidden md:flex gap-8 text-sm font-medium">
      <a href="/" class="pb-1 hover:text-gray-300 transition">Home</a>
      <a href="/philosophy/" class="pb-1 hover:text-gray-300 transition">Philosophy</a>
      <a href="/about/" class="pb-1 hover:text-gray-300 transition">About</a>
      <a href="/dojos/" class="pb-1 hover:text-gray-300 transition">Dojos</a>
      <a href="/contact/" class="pb-1 hover:text-gray-300 transition">Contact</a>
    </nav>

    <button class="px-3 py-2 text-xs font-bold bg-yellow-600 hover:bg-yellow-700 transition rounded">EN</button>
  </div>
</header>
'@

CreateFile "$projectName/src/components/Header.astro" $headerAstro

$footerAstro = '<footer class="bg-black text-white text-center py-8 border-t border-gray-800 mt-12"><p class="text-xs font-light opacity-60">© 2025 Shorinji Kempo Switzerland</p></footer>'
CreateFile "$projectName/src/components/Footer.astro" $footerAstro

$instagramFeed = @'
import { useEffect } from 'react';

export default function InstagramFeed({ url }) {
  useEffect(() => {
    if (window.instgrm) window.instgrm.Embeds.process();
  }, [url]);

  return (
    <section className="my-12 text-center">
      <blockquote className="instagram-media" data-instgrm-permalink={url} />
    </section>
  );
}
'@

CreateFile "$projectName/src/components/InstagramFeed.jsx" $instagramFeed

# ===== PAGES =====

$homeAstro = @'
---
import Layout from '../layouts/Layout.astro';
import InstagramFeed from '../components/InstagramFeed.jsx';
import { content } from '../data/content';

const t = content.en;
---

<Layout title="Shorinji Kempo">
  <section class="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-32 text-center">
    <div class="relative z-10 space-y-6 max-w-4xl mx-auto">
      <p class="text-yellow-500 text-xs font-light tracking-widest uppercase">{t.home.hero.tagline}</p>
      <h1 class="text-6xl md:text-8xl font-light tracking-tight">{t.home.hero.headline}</h1>
      <p class="text-2xl font-light text-gray-300">{t.home.hero.subline}</p>
      <button class="bg-yellow-600 hover:bg-yellow-700 text-black px-8 py-4 font-bold rounded">{t.home.hero.cta}</button>
    </div>
  </section>

  <section class="py-20 border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
      {t.home.stats.map(s => (
        <div class="text-center">
          <div class="text-5xl font-bold text-yellow-600 mb-2">{s.number}</div>
          <p class="text-gray-600 text-sm font-light">{s.label}</p>
        </div>
      ))}
    </div>
  </section>

  <section class="bg-gray-50 py-20">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-5xl font-light text-center mb-12">{t.home.core.title}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.home.core.items.map(item => (
          <div class="text-center">
            <div class="text-5xl mb-4">{item.icon}</div>
            <h3 class="text-2xl font-light mb-2">{item.title}</h3>
            <p class="text-gray-600 font-light">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section class="max-w-7xl mx-auto px-4 py-12">
    <InstagramFeed url={t.dojos[1].instagram} client:visible />
  </section>
</Layout>
'@

CreateFile "$projectName/src/pages/index.astro" $homeAstro

$philosophyAstro = @'
---
import Layout from '../layouts/Layout.astro';
import { content } from '../data/content';

const t = content.en;
---

<Layout title="Philosophy - Shorinji Kempo">
  <div class="max-w-7xl mx-auto px-4 py-20">
    <h1 class="text-5xl font-light text-center mb-12">The 6 Pillars</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      {t.philosophy.map(p => (
        <div class="border-l-4 border-yellow-600 pl-6 py-4">
          <h3 class="text-2xl font-light mb-1">{p.name}</h3>
          <p class="text-yellow-600 text-sm font-light italic mb-3">{p.sub}</p>
          <p class="text-gray-700 font-light">{p.text}</p>
        </div>
      ))}
    </div>
  </div>
</Layout>
'@

CreateFile "$projectName/src/pages/philosophy.astro" $philosophyAstro

$aboutAstro = @'
---
import Layout from '../layouts/Layout.astro';
import { content } from '../data/content';

const t = content.en;
---

<Layout title="About - Shorinji Kempo">
  <div class="max-w-7xl mx-auto px-4 py-20">
    <div class="mb-20">
      <h2 class="text-4xl font-light text-center mb-12">Our History</h2>
      <div class="space-y-8">
        {t.timeline.map((e, i) => (
          <div class="flex gap-6">
            <div class="w-20 flex-shrink-0">
              <p class="text-3xl font-bold text-yellow-600">{e.year}</p>
            </div>
            <div class="flex-grow">
              <h3 class="text-xl font-light mb-1">{e.title}</h3>
              <p class="text-gray-600 font-light">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div>
      <h2 class="text-4xl font-light text-center mb-12">Our Masters</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.instructors.map(instr => (
          <div class="text-center">
            <div class="w-32 h-32 bg-gray-300 rounded-lg mx-auto mb-6 flex items-center justify-center text-5xl">👤</div>
            <h3 class="text-xl font-light mb-1">{instr.name}</h3>
            <p class="text-yellow-600 font-bold text-sm mb-2">{instr.dan}</p>
            <p class="text-gray-600 font-light text-sm">{instr.exp}</p>
            <p class="text-gray-700 font-light text-sm mt-3">{instr.bio}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</Layout>
'@

CreateFile "$projectName/src/pages/about.astro" $aboutAstro

$dojosAstro = @'
---
import Layout from '../layouts/Layout.astro';
import InstagramFeed from '../components/InstagramFeed.jsx';
import { content } from '../data/content';

const t = content.en;
---

<Layout title="Dojos - Shorinji Kempo">
  <div class="max-w-7xl mx-auto px-4 py-20">
    <h1 class="text-5xl font-light text-center mb-12">Our Dojos</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      {t.dojos.map(dojo => (
        <div class="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
          <div class="h-40 bg-gray-300 flex items-center justify-center text-5xl">📍</div>
          <div class="p-6">
            <h2 class="text-2xl font-light mb-4">{dojo.name}</h2>
            <div class="space-y-2 text-sm font-light text-gray-600">
              <p><strong class="text-black">{dojo.instructor}</strong></p>
              <p>{dojo.schedule}</p>
              <p>{dojo.address}</p>
              <p class="font-bold text-black">{dojo.fees}</p>
              {dojo.phone && <p>{dojo.phone}</p>}
              {dojo.email && <p>{dojo.email}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div class="space-y-20">
      {t.dojos.map(dojo => (
        <InstagramFeed url={dojo.instagram} client:visible />
      ))}
    </div>
  </div>
</Layout>
'@

CreateFile "$projectName/src/pages/dojos.astro" $dojosAstro

$contactAstro = @'
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Contact - Shorinji Kempo">
  <div class="max-w-2xl mx-auto px-4 py-20">
    <h1 class="text-4xl font-light text-center mb-12">Contact Us</h1>
    <form class="space-y-6">
      <input type="text" placeholder="Name" class="w-full border-b-2 border-gray-300 py-3 focus:outline-none focus:border-yellow-600" />
      <input type="email" placeholder="Email" class="w-full border-b-2 border-gray-300 py-3 focus:outline-none focus:border-yellow-600" />
      <input type="tel" placeholder="Phone" class="w-full border-b-2 border-gray-300 py-3 focus:outline-none focus:border-yellow-600" />
      <textarea placeholder="Message" rows="5" class="w-full border-b-2 border-gray-300 py-3 focus:outline-none focus:border-yellow-600 font-light"></textarea>
      <button class="w-full bg-black text-white py-3 font-light hover:bg-gray-800 transition">Send</button>
    </form>
  </div>
</Layout>
'@

CreateFile "$projectName/src/pages/contact.astro" $contactAstro

# ===== README =====

$readme = @'
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
'@

CreateFile "$projectName/README.md" $readme

Write-Host ""
Write-Host "✅ Project created successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "📁 Folder: $projectName" -ForegroundColor Cyan
Write-Host ""
Write-Host "🚀 Next steps:" -ForegroundColor Yellow
Write-Host "1. Open $projectName in VS Code" -ForegroundColor White
Write-Host "2. Open PowerShell in that folder" -ForegroundColor White
Write-Host "3. Run: npm install" -ForegroundColor White
Write-Host "4. Run: npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "Then:" -ForegroundColor Yellow
Write-Host "- Add images to public/images/{basel,aubonne,muri}/" -ForegroundColor White
Write-Host "- Update Instagram URLs in src/data/content.js" -ForegroundColor White
Write-Host "- Push to GitHub (GitHub Actions will auto-deploy)" -ForegroundColor White
Write-Host ""
