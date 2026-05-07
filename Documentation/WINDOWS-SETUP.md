# 🥋 Shorinji Kempo - Windows Setup Guide

## ⚡ Quick Start (5 minutes)

### Step 1: Download setup script
- Download `setup-windows.ps1` from the outputs

### Step 2: Run the script
1. Open PowerShell (search "PowerShell" in Windows)
2. Navigate to where you want the project:
   ```powershell
   cd C:\Users\YourName\Documents
   ```
3. Run the script:
   ```powershell
   powershell -ExecutionPolicy Bypass -File C:\path\to\setup-windows.ps1
   ```
   Replace `C:\path\to\` with where you saved the script

4. Wait for ✅ confirmation (takes 10 seconds)

Result: Folder `shorinji-kempo-astro` is created with all files ready

### Step 3: Open in VS Code
1. Open VS Code
2. File → Open Folder → Select `shorinji-kempo-astro`
3. VS Code opens the project

### Step 4: Install & Run
1. In VS Code, open Terminal (Ctrl + `)
2. Copy & paste these commands one by one:
   ```
   npm install
   npm run dev
   ```
3. Wait for: "Local: http://localhost:3000"
4. Open that URL in your browser ✅

You're done! Website runs locally.

---

## 📝 Edit Content

All text is in one file: **`src/data/content.js`**

To change something:
1. Open `src/data/content.js`
2. Find what you want to change
3. Edit the text
4. Save (Ctrl + S)
5. Browser auto-refreshes

Examples to change:
- Headlines: Search for "headline"
- Dojos info: Search for "dojos"
- Instagram links: Search for "instagram"

---

## 🖼️ Add Images

1. Create images for each dojo (JPG or PNG, ~800x600px)
2. Put them in:
   - `public/images/basel/` → `hero.jpg`
   - `public/images/aubonne/` → `hero.jpg`
   - `public/images/muri/` → `hero.jpg`
3. In the pages, use:
   ```html
   <img src="/images/basel/hero.jpg" alt="Dojo Basel" />
   ```

---

## 🚀 Deploy to GitHub Pages (10 minutes)

### Step 1: Create GitHub repo
1. Go to https://github.com/new
2. Name: `shorinji-kempo-astro`
3. Public
4. Create

### Step 2: Push from VS Code
In VS Code Terminal:
```
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/armandfrigoE/shorinji-kempo.git
git branch -M main
git push -u origin main
```

### Step 3: Update config
In `astro.config.mjs`, change:
```javascript
site: 'https://armandfrigo.github.io',
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 4: Push again
```
git add .
git commit -m "Update GitHub Pages config"
git push
```

### Step 5: GitHub deploys automatically
- Wait 2-3 minutes
- Go to: `https://armandfrigo.github.io/shorinji-kempo`
- Website is live! ✅

GitHub Actions handles everything automatically on each push.

---

## 🛠️ Useful Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start local server (http://localhost:3000) |
| `npm run build` | Create production files |
| `npm run preview` | Test production build locally |
| Ctrl + C | Stop the server |

---

## 📁 Project Structure

```
shorinji-kempo-astro/
├── src/
│   ├── data/content.js          ← All text & content
│   ├── pages/
│   │   ├── index.astro          (home)
│   │   ├── philosophy.astro
│   │   ├── about.astro
│   │   ├── dojos.astro
│   │   └── contact.astro
│   ├── components/              (Header, Footer, Instagram)
│   ├── layouts/                 (Page template)
│   └── styles/                  (CSS)
├── public/images/               ← Your images go here
│   ├── basel/
│   ├── aubonne/
│   └── muri/
├── .github/workflows/
│   └── deploy.yml               (GitHub auto-deploy)
├── package.json                 (Dependencies)
├── astro.config.mjs             (Astro config)
└── README.md
```

---

## 🔧 Update Instagram Links

In `src/data/content.js`, find `dojos` and update:

```javascript
dojos: [
  {
    name: 'Basel',
    instagram: 'https://www.instagram.com/shorinjikempo.basel/'  // ← Update if needed
  },
  {
    name: 'Aubonne',
    instagram: 'https://www.instagram.com/shorinjikempo.aubonne'  // ✅ Already set
  },
  {
    name: 'Muri',
    instagram: 'https://www.instagram.com/shorinjikempo.muri/'    // ← Update if needed
  }
]
```

---

## ⚠️ Troubleshooting

**"npm is not recognized"**
- Install Node.js from https://nodejs.org (18+ recommended)
- Restart PowerShell/VS Code after install

**"Port 3000 already in use"**
- Close other apps or use different port: `npm run dev -- --port 3001`

**"GitHub Actions not deploying"**
- Check GitHub repo → Actions tab
- Click the failed action to see error
- Common issue: forgot to push twice (once for code, once for config)

**Images not showing**
- Check filename matches exactly (case sensitive)
- Path must start with `/images/` not `images/`

---

## 📞 Resources

- **Astro docs**: https://docs.astro.build
- **Tailwind CSS**: https://tailwindcss.com
- **GitHub Pages help**: https://pages.github.com

---

## ✅ Checklist Before Showing

- [ ] npm install works
- [ ] npm run dev shows website
- [ ] Images added to public/images/
- [ ] Instagram URLs updated in content.js
- [ ] Website tested locally
- [ ] Pushed to GitHub
- [ ] GitHub Pages live
- [ ] Show to team 🎉

---

**Good luck! 🥋**
