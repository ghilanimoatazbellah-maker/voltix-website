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
- **Fixed pixel widths:** Audited all components and `globals.css` — no hardcoded `width: Xpx` values found. All containers use Tailwind responsive utilities (`max-w-7xl`, `w-full`, `px-4`, etc.).
- **Status:** ✅ No horizontal overflow issues detected.
