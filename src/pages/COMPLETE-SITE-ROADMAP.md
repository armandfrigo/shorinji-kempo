# 🎨 **SHORINJI KEMPO SWISS — 2026 COMPLETE OVERHAUL**

## 📦 What's Included

You now have **a complete, professional-grade website structure** with 10 rewritten pages + 2 components.

---

## 📋 **Complete Content Package**

### Core Pages (Philosophy & History)
- ✅ **entstehung-modern-de.md** — Origin story (Von Chaos zu Kraft)
- ✅ **gruender-modern-de.md** — So Doshin biography (narrative, inspiring)
- ✅ **techniken-modern-de.md** — Goho/Juho explained (energy-focused, Sochokun-inspired)
- ✅ **philosophie-modern-de.md** — The 6 pillars with real-life context

### Dojo Pages (Dedicated)
- ✅ **basel-modern-de.md** — Largest, oldest dojo (Marco Pellegrino)
- ✅ **aubonne-modern-de.md** — Community-focused, family-friendly (Roberto Comino)
- ✅ **muri-modern-de.md** — Kids-specialized dojo (Tomoko Muth-Akao)

**Each dojo page includes:**
- Location, schedule, costs
- Instructor biography with photo placeholder
- Social media (Instagram/Facebook specific to each)
- Google Maps link
- How to get started
- Contact info

### Utility Pages
- ✅ **faq-de.md** — 10+ key questions answered
  - "Why Shorinji Kempo?" (competitive vs. community)
  - "How do I start?" (first class, what to bring)
  - "Is it safe for kids?"
  - "What's the belt system?"
  - Plus 6+ more

- ✅ **links-de.md** — External resources
  - WSKO (Japan)
  - German, French, Italian federations
  - Taikai events
  - Useful educational links

---

## 🎨 **Design System**

### Premium CSS (already created)
- `styles-premium-2026.css`
- Japanese typography (Noto Sans JP)
- Modern sans-serif (Space Grotesk)
- Color: white/black/red only
- Subtle animations, generous spacing

### Components
- ✅ `HeroPremium.astro` — Hero section with image
- ✅ `DojoCard.astro` — Dojo cards with Google Maps
- ✅ `ContactForm.astro` — Contact form (Formspree)
- ✅ `FooterSocial.astro` — **NEW** Footer with national + dojo-specific social media

---

## 🗂️ **How to Organize in Your Repo**

```
src/content/pages/de/
├── entstehung.md          (replace old with new version)
├── gruender.md            (replace old with new version)
├── techniken.md           (replace old with new version)
├── philosophie.md         (new page)
├── basel.md               (replace old with new version)
├── aubonne.md             (replace old with new version)
├── muri.md                (replace old with new version)
├── faq.md                 (new page)
└── links.md               (new page)

src/components/
├── HeroPremium.astro      (new)
├── DojoCard.astro         (new)
├── ContactForm.astro      (new)
└── FooterSocial.astro     (new)

src/styles/
└── global.css             (replace with premium version)

public/images/
├── hero-main.jpg          (add your photo)
├── instructors/
│   ├── marco-pellegrino.jpg
│   ├── roberto-comino.jpg
│   └── tomoko-muth.jpg
└── placeholder-*.jpg      (for sections without photos yet)
```

---

## 🚀 **Implementation Steps (3-4 hours)**

### Phase 1: Content Swap (30 min)
1. Delete old markdown files from `src/content/pages/de/`
2. Add new markdown files (entstehung, gruender, techniken, philosophie, basel, aubonne, muri, faq, links)
3. Test locally: `npm run dev`

### Phase 2: Design Integration (30 min)
1. Replace `src/styles/global.css` with premium version
2. Copy new components to `src/components/`
3. Check all styles work
4. Add photo placeholders to `/public/images/`

### Phase 3: Component Integration (1 hour)
1. **Update footer** in your main Layout component:
   ```astro
   ---
   import FooterSocial from '../components/FooterSocial.astro';
   const dojoName = Astro.params.dojoName; // if on a dojo page
   ---
   
   <FooterSocial lang={lang} dojoName={dojoName} />
   ```

2. **Update home page** to use HeroPremium + DojoCard components (see SITE-2026-INTEGRATION.md)

3. **Update contact page** to use ContactForm component

### Phase 4: Forms & Links (30 min)
1. Set up Formspree (5 min)
2. Update Form ID in ContactForm.astro
3. Add Google Maps URLs to dojo pages
4. Test form submission

### Phase 5: Social Media Setup (20 min)
1. Verify Instagram/Facebook URLs are correct:
   - National: https://www.facebook.com/ShorinjiKempoSchweiz/
   - Basel: https://www.instagram.com/shorinjikempo.basel/
   - Aubonne: https://www.instagram.com/shorinjikempo.aubonne/
   - Muri: https://www.instagram.com/shorinjikempo.muri/ (in progress)

2. FooterSocial component automatically links these

---

## 📸 **Photo Strategy**

All pages include `![Photo description](/images/placeholder-*.jpg)` 

**You should add:**
- `hero-main.jpg` — Main hero image (1200x800px)
- `instructors/marco-pellegrino.jpg` — 4:5 portrait
- `instructors/roberto-comino.jpg` — 4:5 portrait
- `instructors/tomoko-muth.jpg` — 4:5 portrait
- `placeholder-goho.jpg` — Training photo (any size, will resize)
- `placeholder-training-group.jpg` — Group training photo

**Until photos are ready:**
- Placeholder images can be temporary
- Add real images later without breaking anything
- Use Unsplash for temp images if needed

---

## 🎯 **Site Navigation Structure**

After implementation, your site will have:

```
Home /
├── Philosophy /philosophie
│   └── 6 Pillars
├── History /entstehung
├── Founder /gruender
├── Techniques /techniken
├── Dojos /dojos (directory)
│   ├── Basel /dojos/basel
│   ├── Aubonne /dojos/aubonne
│   └── Muri /dojos/muri
├── Board /vorstand (existing page, already have)
├── FAQ /faq
├── Links /links
├── Contact (form at footer)
└── Footer with national + dojo-specific social
```

**All pages available in DE/FR/EN** (if translated)

---

## 🔗 **Social Media Integration**

### Footer Implementation
The `FooterSocial.astro` component automatically shows:

**Always:**
- National Facebook
- WSKO link

**When on dojo page (basel/aubonne/muri):**
- That dojo's Instagram
- That dojo's contact email

**This means:**
- Homepage footer: national links
- `/dojos/basel` footer: Basel Instagram + email
- `/dojos/aubonne` footer: Aubonne Instagram + email
- `/dojos/muri` footer: Muri Instagram + email

---

## 📊 **Content Tone Summary**

| Before | After |
|--------|-------|
| Academic, formal | Storytelling, inviting |
| "Here's what SK is" | "Join us, transform yourself" |
| Textbook-style | People-centered |
| No personality | Warm, authentic voice |

**Example:**
- Before: "Der Gründer...ist zur Erkenntnis gelangt, dass..."
- After: "Es war 1947 in Japan. Der Krieg hatte enorme Narben hinterlassen..."

---

## ✅ **Deployment Checklist**

- [ ] All markdown files copied/replaced
- [ ] CSS updated
- [ ] Components added (HeroPremium, DojoCard, ContactForm, FooterSocial)
- [ ] Formspree ID added to ContactForm
- [ ] Photos added to `/public/images/`
- [ ] Footer component integrated
- [ ] Home page uses HeroPremium + DojoCard
- [ ] Local test: `npm run dev` ✓
- [ ] Check mobile responsive ✓
- [ ] Test contact form (submit → email) ✓
- [ ] Test dojo pages load ✓
- [ ] Git push → GitHub ✓
- [ ] Netlify/GitHub Pages auto-deploys ✓

---

## 🎨 **Final Quality Checks**

**Visual:**
- [ ] Design is clean & modern (white/black/red only)
- [ ] Images load properly
- [ ] No placeholder images still visible
- [ ] Mobile looks good (test on phone)
- [ ] All buttons/links work

**Content:**
- [ ] All pages have new tone (not academic)
- [ ] All instructor names/contacts correct
- [ ] Instagram/Facebook URLs work
- [ ] Google Maps links go to correct dojos
- [ ] FAQ answers are helpful

**Functionality:**
- [ ] Contact form sends emails
- [ ] Social media buttons link correctly
- [ ] All pages load without errors
- [ ] Navigation works on all pages

---

## 📱 **Mobile-First Design**

All pages are **mobile-first responsive**:
- ✅ Readable on phones
- ✅ Proper spacing on tablets
- ✅ Full experience on desktop
- ✅ Touch-friendly buttons
- ✅ Fast loading

---

## 🚀 **Timeline**

| Phase | Time | What |
|-------|------|------|
| 1 | 30 min | Content swap |
| 2 | 30 min | Design integration |
| 3 | 1 hr | Components setup |
| 4 | 30 min | Forms & Maps |
| 5 | 20 min | Social media |
| Testing | 20 min | QA |
| **Total** | **3.5 hrs** | **Professional site ready** |

---

## 💡 **Pro Tips**

1. **Translation** — If you want FR/EN versions, translate one page at a time. The tone is now good, so translation is straightforward.

2. **Photos** — Instructor photos are the most important. Everything else can use placeholders temporarily.

3. **SEO** — Once deployed, consider adding meta tags and image alt-text for search engines.

4. **Analytics** — Add Google Analytics if you want to track visitors.

5. **Maintenance** — All content is now in markdown files. Easy to edit later without touching code.

---

## 📞 **Questions?**

**If something doesn't work:**
1. Check the markdown file isn't corrupt
2. Verify CSS is imported in Layout.astro
3. Check console for errors (`npm run dev`)
4. Images: verify path is `/images/filename.jpg`

---

## 🎉 **You're Ready**

You now have:
- ✅ Professional copywriting (10 pages)
- ✅ Modern design system
- ✅ Social media integration
- ✅ Contact forms
- ✅ Google Maps
- ✅ Photo placeholders ready
- ✅ Complete navigation

**This is a 2026-quality website.** Ready to launch. 🚀
