# Voltix Digital Website - Development Notes

This Next.js 14 website was built from the Stitch design workspace, aligning with the brand guidelines and project requirements.

## 🛠️ Stack & Configuration
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS (Custom color extensions, Outfit & Inter font mappings)
- **Animations:** Framer Motion (Staggered card entries, smooth scroll-triggered fades, and floating mockup animation)
- **Icons:** Google Material Symbols Outlined (efficiently loaded from Google Fonts CDN)
- **Language:** Bilingual Arabic primary (RTL) and English secondary.

## 🎨 Design Tokens & Class System
All design tokens have been strictly followed:
- **Background:** `#0A0B10`
- **Surface:** `#12131C`
- **Primary:** `#0056F6` (Electric Blue)
- **Secondary:** `#8B5CF6` (Vibrant Purple)
- **Cyan Accent:** `#00F0FF`
- **Text:** `#F3F4F6`
- **Border:** `rgba(255,255,255,0.08)`
- **Glassmorphic Cards:** Deployed via the custom utility class `.glass` (defined in `globals.css`) containing:
  - `background: rgba(255, 255, 255, 0.03)`
  - `backdrop-filter: blur(12px)`
  - `border: 1px solid rgba(255, 255, 255, 0.08)`

## 📁 File Structure
- `app/layout.tsx`: Configured with `dir="rtl" lang="ar"` for primary Arabic layout flow, loads the Outfit and Inter fonts via `next/font/google`, and loads the Material Symbols Outlined stylesheet.
- `app/page.tsx`: Import and serial rendering of all 10 page sections.
- `app/globals.css`: Global base styles, CSS variables, and utility overrides (.glass).
- `tailwind.config.ts`: Custom extend configuration for color tokens and custom font properties.
- `components/`: Contains the 10 self-contained UI components (Navbar, Hero, WhyVoltix, HowItWorks, Portfolio, Pricing, Testimonials, FAQ, Contact, Footer).
- `public/`:
  - `logo.png`: Voltix Digital brand wordmark.
  - `images/`: Local portfolio assets (`nourbijoux.webp`, `dzsport.webp`, `serumaraqi.webp`, `voltixprox.webp`, `cleanxpro.webp`) copied from original design folders.

## ⚡ Animations & Layout Highlights
- **Performance-First:** Easing parameters cast with TypeScript literals (`as const`) to prevent compile-time type errors. All animation sequences are lightweight and won't block layouts or interactions on slow connections.
- **Why Choose Us:** Displays the corrected **69 ولاية** coverage detailing Algeria's new provinces and municipalities.
- **Pricing:** Displays the **3,000 دج** current package price, with details on the 5,000 دج limit text, completely avoiding strike-through formatting on the 5,000 DZD number.
- **Contact Form Validation:** Integrates name length checks and Algerian phone format regex:
  `const phoneRegex = /^0[2567]\d{8}$/;`
- **Spam Trap:** Invisible Honeypot input styled with absolute off-screen boundaries and zero layout parameters (`height: 0, width: 0, padding: 0`), preventing vertical space displacement.
- **Order Pipeline:** Handles submit by validating forms, checking the honeypot, and generating/opening a WhatsApp redirect link with a pre-filled client order message.

## 📞 Active Business Details
- **WhatsApp Business:** `0672099942` (`+213 672099942`)
- **Email Address:** `voltix.dz.studio@gmail.com`
- **Instagram Profile:** `https://www.instagram.com/voltix.dev/`
- **Facebook Page:** `https://www.facebook.com/share/18iPaVtUa5/`

## 🌓 Light & Dark Theme Configuration
- **Dynamic Tailwind Tokens:** Extended configuration maps core design tokens to CSS custom variables (`var(--color-bg)`, `var(--color-surface)`, etc.).
- **Theme Script Injection:** Inline script added to `<head>` inside `layout.tsx` to read the system preferences or `localStorage` settings immediately on request, resolving Next.js flash issues.
- **Glassmorphism:** Adapts automatically by utilizing light-saturated parameters (`--glass-bg` and `--glass-border`) depending on active classes.
- **Interactive Button Elevation:** Pricing CTA uses dynamic colors (`bg-textPrimary text-background`) ensuring perfect contrast on white/dark screens.

## 🔒 Form Security & HTTP Security Headers
- **Input Filtering:** Name and Phone inputs sanitized using regular expression filters before proceeding to message generation.
- **Honeypot Mechanism:** Deployed an invisible `0px` layout dimension Honeypot element to prevent automated spam bot submissions.
- **HTTP Hardening (next.config.mjs):** Configured nextConfig headers to deliver crucial security controls:
  - `X-Frame-Options: DENY` (anti-clickjacking)
  - `X-Content-Type-Options: nosniff` (anti-MIME type sniffing)
  - `Strict-Transport-Security` (enforces HTTPS encryption)
  - `X-XSS-Protection: 1; mode=block` (guards against cross-site scripting)

## 📱 Responsive Layout & Breakdown Specifications
- **Navbar (Fixed Header):** Anchored strictly at the top. On mobile (< 768px), it replaces horizontal links with a hamburger icon (☰) on the right. Tapping it slides down a clean, animated dropdown overlay with all sitemap links, theme toggles, and CTA. Links intercept default navigation using a React handler to perform smooth programmatic scrolling and automatically close the dropdown drawer on click. No bottom navigation bar is used. The dropdown background is set to a solid opaque `bg-surface` to block underlying text and ensure clear legibility.
- **Hero Section:** Stacks copy text on top of the mockup display on mobile, resizing typography and stretching CTA buttons to full width for comfortable touch target access.
- **Why Choose Us:** Grid scales dynamically from 1 column on mobile (< 768px), to 2–3 columns on tablet (768px - 1024px), to 5 columns on desktop (> 1024px).
- **How It Works (كيف نعمل):** On mobile, each step is encapsulated in an elegant, glassmorphic `.glass` card block with circles and copy aligned side-by-side. This eliminates overlapping vertical connector lines and creates a highly structured deck sequence. On desktop, cards return to horizontal grids.
- **Portfolio Grid:** Configured to dynamically adapt from 1 column (mobile), to 2 columns (tablet), to 3 columns (desktop).
- **Pricing Card:** Formats into a single column on mobile with full-width checkout action button and horizontal divider border.
- **Contact Form:** Form fields stack vertically with full width inputs and large tappable redirects.
- **Footer:** Fully centers all sitemaps, brand descriptions, legal links, and social elements in a vertical stack on mobile viewports.
- **Breakpoint Padding:** All sections enforce a minimum `px-4` padding buffer on mobile screens to prevent layout clipping and touch-screen border overlap.

## 🚀 Live Portfolio Links
1. **Nour Bijoux** -> [Live Site](https://nourbijoux-jewelry.netlify.app)
2. **DZSport Shoes** -> [Live Site](https://dzsport-shoes.netlify.app)
3. **SerumAraqi** -> [Live Site](https://serumaraqi-cosmetics.netlify.app)
4. **VoltixProX** -> [Live Site](https://voltix-pro-x.netlify.app)
5. **CleanX Pro** -> [Live Site](https://cleanx-pro.netlify.app)

## 🔧 Mobile Audit (2026-06-29)
- **Viewport meta tag:** Added `<meta name="viewport" content="width=device-width, initial-scale=1" />` to `app/layout.tsx` to ensure correct mobile scaling.
- **Fixed pixel widths:** Audited all components and `globals.css` — no hardcoded `width: Xpx` values found. All containers use Tailwind responsive utilities (`max-w-7xl`, `w-full`, `px-4`, etc.)
- **Status:** ✅ No horizontal overflow issues detected.

## 🐛 Mobile Navbar Fix (2026-06-29)
**Root cause:** Hydration mismatch from `theme` state (SSR=`"dark"`, client reads `localStorage`) causing React to inconsistently update the DOM on real devices. Also missing CSS safety net for hamburger visibility.

**Fixes applied:**
- **`Navbar.tsx`** — Added `suppressHydrationWarning` to all theme toggle buttons and their icon `<span>` elements. Added `desktop-nav` and `mobile-menu-btn` CSS classes as semantic fallback anchors.
- **`tailwind.config.ts`** — Removed unused `./pages/**` path. Content array now strictly covers `./app/**` and `./components/**` to prevent any purge issues.
- **`globals.css`** — Added explicit `@media (max-width: 1024px)` fallback: `.desktop-nav { display: none !important }` and `.mobile-menu-btn { display: flex !important }`. This guarantees hamburger visibility even if Tailwind class purging ever fails.

**Build output (npm run build):**
```
✓ Compiled successfully
✓ Generating static pages (5/5)
Route (app)        Size     First Load JS
○ /                63.7 kB  151 kB
○ /_not-found      871 B    87.9 kB
```
- No TypeScript errors, no hydration warnings in build output.
- Two minor Next.js font warnings (non-critical, Google Fonts CDN usage in `<head>`).

## 📱 Mobile Sizing Audit (2026-06-29)
**Reference:** Studied `VoltixProX_Headphones/index.html` and `CleanXPro_Vacuum/index.html` for mobile patterns.

**Reference page mobile patterns adopted:**
- Container: `max-w-sm mx-auto`, `px-4` padding (16px)
- Font sizes: 11–16px body, 18–20px headings
- Section padding: compact py, single-column stacking, no overflowing glow elements

**Changes applied (mobile only — desktop styles untouched):**

| Component | Change |
|-----------|--------|
| `Hero.tsx` | h1 `text-4xl` → `text-3xl sm:text-5xl`; buttons `text-base sm:text-lg` |
| `WhyVoltix.tsx` | `py-24` → `py-14 md:py-24`; `space-y-16` → `space-y-10 md:space-y-16`; added `overflow-hidden` |
| `HowItWorks.tsx` | `py-24` → `py-14 md:py-24`; `space-y-20` → `space-y-12 md:space-y-20` |
| `Portfolio.tsx` | `py-24` → `py-14 md:py-24`; `space-y-16` → `space-y-10 md:space-y-16`; added `overflow-hidden` |
| `Pricing.tsx` | `py-24` → `py-14 md:py-24`; `space-y-16` → `space-y-10 md:space-y-16` |
| `FAQ.tsx` | `py-24` → `py-14 md:py-24`; `space-y-16` → `space-y-10 md:space-y-16`; button `text-lg` → `text-base sm:text-lg`; padding `p-6` → `p-4 sm:p-6`; added `overflow-hidden` |
| `Contact.tsx` | `py-24` → `py-14 md:py-24`; `space-y-16` → `space-y-10 md:space-y-16` |
| `Testimonials.tsx` | `py-20` → `py-12 md:py-20`; `px-12` card → `px-6 sm:px-12`; added `overflow-hidden` |

## 🖼️ Logo Replacement & WebP/PNG Integration (2026-06-29)
- **Asset Integration:** Copied transparent PNG brand assets `logo-full-removebg-preview.png` and `logo-icon-removebg-preview.png` from the Brand repository to `public/logo-full.png` and `public/logo-icon.png`.
- **Navbar logo:** Replaced the logo image in `Navbar.tsx` with `<Image src="/logo-icon.png" alt="Voltix Digital Logo" width={44} height={44} className="object-contain rounded-lg logo-light-fix" />`.
- **Footer logo:** Replaced the logo image in `Footer.tsx` with `<Image src="/logo-full.png" alt="Voltix Digital Logo" width={160} height={48} className="object-contain rounded-lg logo-light-fix" />`.
- **Light Mode Visibility:** Added `.logo-light-fix` CSS styles to `globals.css` with a custom filter to auto-colorize/darken the transparent logos in light mode (`html.light`), preventing them from disappearing on the white background.
- **Clean up:** Deleted old WebP files from the `public/` directory.

## 📬 Outreach Messages Folder & Templates (2026-07-02)
- **Directory Created:** `07_Docs/Client_Workflow/Outreach_Messages/` containing all outreach templates.
- **Formulas & Philosophy:** Documented the "لا تبيع الخدمة، بع إزالة المشكلة" outreach structure in [README.md](file:///e:/Voltix/07_Docs/Client_Workflow/Outreach_Messages/README.md).
- **Messages & Templates Created:**
  - [perfume-message.md](file:///e:/Voltix/07_Docs/Client_Workflow/Outreach_Messages/perfume-message.md) (Finalized Arabic outreach message for Perfumes)
  - [jewelry-message.md](file:///e:/Voltix/07_Docs/Client_Workflow/Outreach_Messages/jewelry-message.md) (Template for Jewelry)
  - [cosmetics-message.md](file:///e:/Voltix/07_Docs/Client_Workflow/Outreach_Messages/cosmetics-message.md) (Template for Cosmetics)
  - [shoes-message.md](file:///e:/Voltix/07_Docs/Client_Workflow/Outreach_Messages/shoes-message.md) (Template for Shoes)
  - [clothing-message.md](file:///e:/Voltix/07_Docs/Client_Workflow/Outreach_Messages/clothing-message.md) (Template for Clothing)
  - [electronics-message.md](file:///e:/Voltix/07_Docs/Client_Workflow/Outreach_Messages/electronics-message.md) (Template for Electronics)
  - [home-appliances-message.md](file:///e:/Voltix/07_Docs/Client_Workflow/Outreach_Messages/home-appliances-message.md) (Template for Home Appliances)

## 👟 MyShoesDZ Sneakers Client Showcase (2026-07-02)
- **Directory Created:** [MyShoesDZ_Sneakers/](file:///e:/Voltix/03_Clients/MyShoesDZ_Sneakers/) containing the full mobile-first landing page.
- **Product Details:** Milano-style Men's Casual Sneaker. Pricing: 2,800 DZD per pair, with a 2-pair promo of 4,900 DZD.
- **Integrations:**
  - WhatsApp primary order submission flow (+213 672 099 942).
  - Google Sheets background backup logging flow (`no-cors` mode).
  - Algeria 69 wilayas & communes local cascade data populated from `assets/data.js`.
- **Assets:** Logo and 4 variant images (Black, Gray, Camel, Brown) copied from the user media attachments.
- **Verifications:** Fully audited and validated at a 390px viewport width using local server verification.

---

## ☁️ Cloudflare Pages Deployment Prep — 2026-07-04

### Changes Made

#### 1. `next.config.mjs` — Rewritten
- Added `output: 'export'` to enable static HTML export (no server needed).
- Added `images: { unoptimized: true }` — required because Next.js image optimization relies on a running Node.js server, which doesn't exist in static export mode. With `unoptimized: true`, images are served as-is from `public/` which is perfectly fine for Cloudflare Pages CDN.
- Removed the `async headers()` function entirely — it is a no-op in static export mode (no server to apply headers at request time).

#### 2. `public/_headers` — New File
- Migrated all 5 security headers from the old `headers()` config into a Cloudflare-native `_headers` plain-text file.
- Cloudflare Pages reads this file from the output root and applies headers as edge-level HTTP response headers for all routes (`/*`).
- Headers migrated:
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: origin-when-cross-origin`
  - `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
  - `X-XSS-Protection: 1; mode=block`

### Compatibility Audit Results

| Check | Result |
|---|---|
| `app/api/` routes | ✅ None found |
| `pages/api/` routes | ✅ None found |
| `getServerSideProps` | ✅ None found |
| Dynamic route segments `[slug]` | ✅ None found |
| `next/navigation` (server hooks) | ✅ None found |
| `next/image` usage | ⚠️ Found in 4 files (Navbar, Hero, Portfolio, Footer) → Fixed with `unoptimized: true` |
| Middleware | ✅ None found |

### Build Results
- **Command:** `npx next build`
- **Status:** ✅ SUCCESS — No errors
- **Warnings (non-blocking):**
  - `@next/next/google-font-display`: Material Symbols CSS loaded via `<link>` in layout.tsx — not blocking, fonts load correctly.
  - `@next/next/no-page-custom-font`: Same as above — warning only, not an error.
- **Output:** `out/` folder generated with `index.html` (63.7 kB), all assets, and `_headers` file.
- **Static pages generated:** 5/5 ✅

### Local Verification Results (via `npx serve out -p 3001`)
All HTTP requests returned `200 OK`:

| Asset | Status |
|---|---|
| `index.html` | ✅ 200 |
| All 6 portfolio images (`.webp`) | ✅ 200 |
| `logo-icon.png`, `logo-full.png` | ✅ 200 |
| `headphone-hero.webp` | ✅ 200 |
| All JS chunks + CSS | ✅ 200 |
| `favicon.ico` | ✅ 200 |

**UI Tests (at ~500px mobile width, closest to 390px in browser env):**
- ✅ Hero section renders correctly (Arabic default, countdown timer working)
- ✅ Hamburger menu opens/closes with animation
- ✅ Theme toggle: Dark ↔ Light mode works, persists via localStorage
- ✅ Language toggle: AR (RTL) ↔ EN (LTR) works, layout flips correctly
- ✅ Portfolio section: All 5 project cards render with images, demo links intact
- ✅ Pricing section: Renders with correct price (3,000 DZD)
- ✅ FAQ section: All questions visible
- ✅ Footer: WhatsApp CTA link (`wa.me/213672099942`), Instagram, Facebook links intact
- ✅ Contact section: WhatsApp submission link functional

### Git Commit
- **Commit:** `9831e90` — `chore: convert to static export for Cloudflare Pages deployment`
- **Branch:** `main` (connected to `origin/main`)
- **Files committed:** `next.config.mjs`, `public/_headers`
- **Status:** Committed, NOT pushed (manual push step pending)

### Next Steps (Manual)
1. Push to GitHub: `git push origin main`
2. Connect repo to Cloudflare Pages (Dashboard → Workers & Pages → Create → Connect Git)
3. Build settings in Cloudflare:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npx next build`
   - **Build output directory:** `out`
   - **Node.js version:** 18 or 20

---

## 📝 Changelog

### 2026-07-07 — Pricing Section Copy Update (Locked Pricing Decisions)

**Files changed:** `components/Pricing.tsx`, `context/LanguageContext.tsx`

#### Changes made:

1. **Price display** — Updated from `"3,000 دج"` / `"3,000 DZD"` to `"ابتداءً من 7,000 دج"` / `"Starting from 7,000 DZD"`. The `priceLabel` EN key was also updated from `"Current Price:"` to `"Starting From:"` to match.

2. **Removed: client-count price-jump line** — The `pricing.futurePrice` translation key and its rendered `<p>` element in `Pricing.tsx` have been removed entirely. No count-based scarcity statement replaced it.

3. **Delivery time** — Changed from `"تسليم سريع خلال 48 ساعة أو تسترجع أموالك وتأخذ الصفحة مجاناً"` to `"تسليم عادة خلال 2 إلى 3 أيام عمل"` (EN: `"Typical delivery within 2 to 3 business days"`). The money-back/free-page guarantee wording was removed entirely.

4. **Revisions** — Changed from `"3 جولات مراجعة وتعديل مجانية بالكامل لضمان رضاك التام"` to `"تعديلات معقولة قبل التسليم مشمولة لضمان رضاك"` (EN: `"Reasonable pre-delivery revisions included to ensure your satisfaction"`). Specific count of 3 removed.

5. **Scarcity subtitle (`pricing.sub`)** — Removed client-count-based urgency (`"لأول 3 عملاء فقط"` / `"first 3 clients"`). Replaced with time-based urgency: AR: `"عرض الإطلاق لفترة محدودة."` / EN: `"Launch offer — limited time."`.

6. **FAQ answers updated to match** — `faq.a1` (delivery time) and `faq.a2` (revisions) were updated in both AR and EN to be consistent with the new Pricing section copy. `faq.q2` question wording updated from "how many free revisions" to "what is the revision policy".

#### Unchanged (by design):
- 100% custom design line
- Google Sheets direct-link line
- 69 Wilayas/communes smart delivery form line
- All visual layout, colors, icons, and card structure

---

### 2026-07-07 — How It Works Subtitle Fix + Full Codebase Audit

**Files changed:** `context/LanguageContext.tsx`

#### Problem found:
The `how.sub` translation key in both AR and EN still contained the old rigid 48-hour delivery claim, contradicting the updated Pricing section.

#### Changes made:

| Key | Language | Before | After |
|-----|----------|--------|-------|
| `how.sub` | AR | `خطوات بسيطة ومدروسة للحصول على صفحة هبوط احترافية عالية التحويل في 48 ساعة فقط.` | `خطوات بسيطة ومدروسة للحصول على صفحة هبوط احترافية عالية التحويل خلال أيام قليلة فقط.` |
| `how.sub` | EN | `Simple, structured steps to get a high-converting landing page in under 48 hours.` | `Simple, structured steps to get a high-converting landing page in just a few business days.` |

#### Full codebase audit result:
Searched all `.tsx`, `.ts`, `.js` files for: `48 ساعة`, `48 hours`, `48-hour`, `3 جولات`, `3 rounds`, `3 complete`, `أول 3 عملاء`, `first 3 clients`, `futurePrice` → **0 matches found**. All stale copy has been eliminated.

