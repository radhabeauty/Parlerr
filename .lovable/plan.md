# Sister's Beauty Hub — Premium 3D Animated Site

Single-page premium site for the beauty parlour, using the photos/videos from the GitHub repo and contact info from the visiting card (IMG-...WA0001), optimized to be fast and deployable to **GitHub Pages**.

## Brand details
- Name: **Sister's Beauty Hub**
- Services: Bridal Makeup, Party/Side Makeup, Mehndi
- Pricing: Bridal Makeup starting ₹4000/-
- **Primary phone (call + WhatsApp): 8103994349**
- Secondary phones: 7415222409, 9300954208
- Address: Damoh Naka, Koshi Mandir ke paas, Jabalpur
- Home service available

The primary number 8103994349 is wired to:
- A floating WhatsApp FAB (bottom-right, pulse glow) → `https://wa.me/918103994349`
- "Call Now" buttons in hero, services, and contact sections → `tel:+918103994349`
- A "WhatsApp Us" button next to every Call button
The two card numbers stay listed in the contact section as alternates.

## Page sections (single scroll)
1. **Hero** — Lightweight 3D scene (floating gold petals + bokeh) with serif wordmark, tagline, Call + WhatsApp CTAs.
2. **Marquee** — Auto-scrolling strip of best bridal photos.
3. **Signature Services** — 3 premium cards (Bridal ₹4000+, Party Makeup, Mehndi) with 3D tilt + gold shimmer.
4. **Bridal Gallery** — Masonry of all 27 photos, lazy-loaded, lightbox, scroll reveal.
5. **Video Showcase** — 5 reels, autoplay-on-view, muted, looped, scroll-snap.
6. **Why Choose Us** — Home-service badge + animated counters.
7. **Visit / Contact** — Address, embedded map link, Call + WhatsApp + alternate numbers.
8. **Footer** — Wordmark, hours, copyright.
9. **Sticky WhatsApp FAB** on every scroll position.

## Visual direction
- Palette: deep maroon `#3a0a18`, blush `#f7d9d3`, gold `#d4a574`, ivory `#fbf6ef`.
- Type: Cormorant Garamond (display) + Inter (body).
- Motion: Framer Motion + CSS scroll animations; a single lightweight Three.js hero canvas (lazy-loaded, paused off-screen).
- I'll generate 3 rendered design directions and let you pick before building.

## Performance & GitHub Pages optimization
- **Static export**: switch the project to a fully static SPA build (Vite + React, no SSR/server functions) so `dist/` drops straight into GitHub Pages.
- Add `404.html` = `index.html` copy + `<base href>` fix so deep links work on Pages.
- All 27 photos: convert to **WebP**, multiple sizes, `srcset` + `loading="lazy"` + `decoding="async"`; AVIF where small enough.
- All 5 videos: compress to ~720p H.264 MP4 + poster image; `preload="none"`, play only when visible.
- Hero 3D: dynamic import + `prefers-reduced-motion` fallback to a still gradient.
- Fonts: self-hosted woff2 subsets, `font-display: swap`.
- Bundle: code-split per section; gzip/br via Pages defaults; target <150 KB JS on first load.
- Lighthouse target: Performance ≥ 90 on mobile.

## Tech / deploy notes
- Stack stays React + Tailwind v4; remove TanStack server bits, single `index.html` SPA.
- Add deps: `three`, `@react-three/fiber`, `@react-three/drei`, `framer-motion`.
- Assets: enhance the 27 photos, convert to WebP, commit under `public/` (keeps GitHub Pages self-contained — no external CDN dependency).
- GitHub Pages setup: add `.github/workflows/deploy.yml` (build + publish `dist/` to `gh-pages` branch), set Vite `base` to the repo name (`/Parler/`).
- SEO: title, meta description, OG image (best bridal photo), JSON-LD `BeautySalon` with primary phone 8103994349 and address.

## Out of scope (ask if you want)
- Booking form (needs backend)
- Hindi/English toggle
- Admin gallery editor
