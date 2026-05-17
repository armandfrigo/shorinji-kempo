# 🎨 **SHORINJI KEMPO SWISS — 2026 Premium Overhaul**

## What You're Getting

**Complete redesign with:**
- ✅ Modern storytelling content (4 pages rewritten: Entstehung, Gründer, Techniken, Philosophie)
- ✅ Premium CSS design system (white/black/red, Japanese aesthetic)
- ✅ Hero components with image placeholders
- ✅ DojoCards with Google Maps
- ✅ Contact form (Formspree integration)
- ✅ Ready for DE/FR/EN translations

**Philosophy**: Not "textbook martial arts" — but "join our community, transform yourself"

---

## 📋 **Integration Checklist (90 minutes)**

### Phase 1: Content Updates (30 min)

1. **Replace German content files** in `src/content/pages/de/`:
   - Delete old: `entstehung.md`, `gruender.md`, `techniken.md`
   - Add new versions: `entstehung-modern-de.md`, `gruender-modern-de.md`, `techniken-modern-de.md`
   - Add new: `philosophie-modern-de.md`

2. **Add missing image placeholders** to markdown:
   ```markdown
   ![Foto: Goho Training](/images/placeholder-goho.jpg)
   ![Foto: Group Training](/images/placeholder-training-group.jpg)
   ```
   (Create `/public/images/placeholder-*.jpg` or use any placeholder service)

3. **Translate to FR/EN** (optional but recommended):
   - Use the German versions as reference
   - Translate maintaining the storytelling tone
   - Place in `src/content/pages/fr/` and `src/content/pages/en/`

---

### Phase 2: Design Integration (30 min)

1. **Add premium CSS** to `src/styles/global.css`:
   - Copy content from `styles-premium-2026.css`
   - Keep your existing Tailwind setup
   - The new CSS adds typography, color system, animations

2. **Update components** in `src/components/`:
   - Copy new: `HeroPremium.astro`, `DojoCard.astro`, `ContactForm.astro`
   - These replace older versions (check what exists)
   - They use your existing `withBase()` and `localizePath()` utilities

3. **Create pages that use components**:
   ```astro
   <!-- src/pages/[lang]/index.astro -->
   ---
   import HeroPremium from '../../components/HeroPremium.astro';
   import DojoCard from '../../components/DojoCard.astro';
   import ContactForm from '../../components/ContactForm.astro';
   
   const lang = Astro.params.lang;
   ---
   
   <HeroPremium 
     lang={lang}
     title="Shorinji Kempo Schweiz"
     subtitle="Körper & Geist — Kraft & Liebe"
     ctaText="Kostenloses Probetraining"
     ctaHref="/#contact"
     imageUrl={withBase('/images/hero-main.jpg')}
   />
   
   <!-- Dojos Section -->
   <section class="py-3xl">
     <div class="container">
       <h2>Unsere Dojos</h2>
       <div class="grid grid-3">
         {dojos.map(dojo => <DojoCard {...dojo} />)}
       </div>
     </div>
   </section>
   
   <ContactForm lang={lang} />
   ```

---

### Phase 3: Forms & Maps (20 min)

#### Option A: Formspree (Recommended - Simplest)

1. Go to https://formspree.io
2. Create free account
3. Add new form: `contact@shorinjikempo.ch`
4. Get the **Form ID** (looks like: `f/abc123xyz`)
5. In `ContactForm.astro`, update:
   ```javascript
   const formspreeAction = `https://formspree.io/f/abc123xyz`;
   ```
6. Test: fill out form → you should receive email ✅

#### Option B: Direct mailto (Ultra-simple)
```astro
<a href="mailto:contact@shorinjikempo.ch?subject=Probetraining&body=Hallo...">
  Contact Us
</a>
```

---

### Google Maps for Each Dojo

In your dojo data (wherever you store it), add `googleMapsUrl`:

```javascript
dojos: [
  {
    name: "Basel",
    address: "Winkelriedplatz 6, CH-4053 Basel",
    googleMapsUrl: "https://maps.google.com/?q=Winkelriedplatz+6,+4053+Basel",
    // ... other fields
  },
  {
    name: "Aubonne",
    address: "Collège du Chêne, Ave du Mont-Blanc 53, CH-1170 Aubonne",
    googleMapsUrl: "https://maps.google.com/?q=Coll%C3%A9ge+du+Ch%C3%AAne,+Aubonne",
  },
  {
    name: "Muri",
    address: "MüZe, Kranichweg 10, CH-3074 Muri bei Bern",
    googleMapsUrl: "https://maps.google.com/?q=M%C3%BCZe+Familienzentr um+Muri",
  }
]
```

The DojoCard component will automatically render Google Maps buttons.

---

## 📸 **Photo Placeholders Strategy**

You mentioned photos exist — place them here:

```
/public/images/
  ├── hero-main.jpg                 (Hero banner, 1200x800 min)
  ├── hero-dojos/
  │   ├── basel-training.jpg
  │   ├── aubonne-dojo.jpg
  │   └── muri-kids.jpg
  ├── instructors/
  │   ├── marco-pellegrino.jpg       (5. Dan Basel)
  │   ├── roberto-comino.jpg         (4. Dan Aubonne)
  │   └── tomoko-muth.jpg            (4. Dan Muri)
  └── placeholder-*.jpg              (fallback images)
```

In markdown, reference them:
```markdown
![Marco Pellegrino - Basel Instructor](/images/instructors/marco-pellegrino.jpg)
```

---

## 🎯 **The Tone Shift Explained**

### Before (Academic):
> "Der Gründer des Shorinji Kempo, So Doshin, ist im Chaos der Nachkriegszeit anhand seiner eigenen Erfahrungen zur Erkenntnis gelangt..."

### After (Story):
> "Es war 1947 in Japan. Der Krieg hatte enorme Narben hinterlassen. In dieser Zeit realisierte So Doshin etwas Fundamentales: Nicht Gesetze verändern Gesellschaften. Menschen verändern sie."

**Why?** People connect with stories, not encyclopedias. Your visitors don't want to *read about* Shorinji Kempo — they want to **feel** what it's about.

---

## 🚀 **Deployment Workflow**

1. **Local**:
   ```bash
   npm install
   npm run dev
   # Test everything at localhost:3000
   ```

2. **GitHub**:
   ```bash
   git add .
   git commit -m "2026 premium redesign"
   git push origin main
   ```

3. **Netlify** (if using):
   - Auto-deploys on push
   - Check build logs if anything fails

4. **GitHub Pages**:
   - GitHub Actions runs `npm run build`
   - Deploys to `gh-pages` branch
   - Your domain points to it

---

## 🎨 **Design System Quick Reference**

```css
/* Colors */
--color-white: #fafaf8;        /* Off-white, warm */
--color-black: #0a0a08;        /* True black */
--color-red-deep: #8b1a1a;     /* Main accent */
--color-red-accent: #c41e3a;   /* CTA buttons */

/* Typography */
--font-jp: 'Noto Sans JP';     /* Japanese text */
--font-modern: 'Space Grotesk'; /* Headers, modern */

/* Buttons */
.btn-primary        /* Red button, white text */
.btn-secondary      /* Black border */
.btn-outline        /* Red border, hollow */

/* Cards */
.card               /* White background, subtle shadow, hover lift */

/* Hero animations */
.animate-fade-in-up /* Smooth entrance from bottom */
```

---

## 💡 **What Makes This "2026"**

✅ **Minimal color** (white/black/red only)  
✅ **Generous whitespace** (not cramped)  
✅ **Japanese typography** (Noto Sans JP)  
✅ **Subtle animations** (no flashing)  
✅ **Mobile-first design** (works on phones first)  
✅ **Purpose-driven layout** (every element has a job)  
✅ **Storytelling over specs** (narrative beats facts)  

Not trendy. **Timeless.**

---

## 🔧 **If Something Breaks**

| Issue | Fix |
|-------|-----|
| Images not loading | Check `/public/images/` path is correct |
| Form not sending | Verify Formspree Form ID in ContactForm.astro |
| Styling looks wrong | Check CSS is imported in Layout.astro |
| Maps links broken | Verify `googleMapsUrl` field is present in dojo data |
| Mobile looks bad | Run `npm run dev`, check responsive in DevTools |

---

## 📞 **Next Steps**

1. **Run this locally first** — test all features
2. **Get Roberto/Sensei feedback** — does the tone feel right?
3. **Add instructor photos** — replace placeholders
4. **Test on mobile** — is it readable?
5. **Launch** — push to GitHub, Netlify auto-deploys

---

## 📝 **Files Provided**

- `entstehung-modern-de.md` — Origin story
- `gruender-modern-de.md` — Founder biography
- `techniken-modern-de.md` — Techniques explained (energy-focused)
- `philosophie-modern-de.md` — Six pillars
- `styles-premium-2026.css` — Complete design system
- `HeroPremium.astro` — Modern hero component
- `DojoCard.astro` — Dojo cards with maps
- `ContactForm.astro` — Contact form with Formspree
- `SETUP-PREMIUM-DESIGN.md` — Design guide
- `SITE-2026-INTEGRATION.md` — This file

---

## 🎯 **Bottom Line**

You have everything to launch a **2026-level site** that:
- Looks premium (not basic)
- Tells a compelling story
- Gives people a reason to join
- Works on all devices
- Requires zero ongoing maintenance (Formspree handles forms)

**Time to implementation: ~2 hours**

**Quality: Professional-grade**

**Cost: $0**

---

**Ready to launch? Let me know if you hit any snags.** 🚀
