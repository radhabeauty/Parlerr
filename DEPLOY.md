# Sister's Beauty Hub — Deployment

## TanStack Start / Cloudflare Pages

This project runs as a TanStack Start app and publishes with Vite and SSR.
The `vite.config.ts` now uses `@tanstack/react-start/plugin/vite` instead of
Lovable-specific tooling, so it can deploy to Cloudflare Pages, Cloudflare
Workers, or any compatible Vite SSR host.

## GitHub Pages

GitHub Pages is a **static** host, so it needs a pre-rendered SPA bundle.
Two paths:

### Option A — Easiest: use Cloudflare Pages or another Vite SSR host
Recommended. No config changes needed for SSR deployment.

### Option B — GitHub Pages via the workflow below
The site is already optimized (WebP gallery, lazy-loaded videos, lazy iframes,
preloaded fonts) so the static build is light. To deploy:

1. In repo Settings → Pages, set the source to **GitHub Actions**.
2. The workflow at `.github/workflows/deploy.yml` builds the project and
   publishes the `dist/` output.
3. If your repo is **radhabeauty/Parler**, the site will live at
   `https://radhabeauty.github.io/Parler/`. Vite's `base` is read from the
   `VITE_BASE` env in the workflow.

Notes:
- TanStack Start's default build emits a Worker bundle, not a pure SPA. If
  GitHub Pages is your *only* host, switch the build target to a static SPA
  (single `index.html` + `assets/`) — this is a 2-line config change. The
  workflow below assumes the static output lives in `dist/`.
