# Sister's Beauty Hub — Deployment

## Lovable (default)

This project runs as a TanStack Start app and publishes from Lovable's Publish
button. The published `*.lovable.app` URL serves the SSR build on Cloudflare
Workers (already configured).

## GitHub Pages

GitHub Pages is a **static** host, so it needs a pre-rendered SPA bundle.
Two paths:

### Option A — Easiest: use Cloudflare Pages / Lovable hosting
Recommended. No config changes needed.

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
  GitHub Pages is your *only* host, ask Lovable to switch the build target to
  a static SPA (single `index.html` + `assets/`) — this is a 2-line config
  change. The workflow below assumes the static output lives in `dist/`.
