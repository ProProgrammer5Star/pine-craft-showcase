# EPS Flooring & Carpentry site

This is a Vite/React static site. The estimate form posts directly to Formspree from the browser; it does not need a Cloudflare server function or a Netlify form.

## Cloudflare Workers Builds

The repository includes `wrangler.jsonc` for the existing Git-connected Worker. It publishes the Vite output from `dist` and serves `index.html` for navigation requests that do not match a static file. This replaces the old Netlify catch-all redirect without creating a redirect loop.

- Root directory: repository root
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Preview command: `npx wrangler preview`

The `name` in `wrangler.jsonc` matches the Worker name visible in the previous Cloudflare deployment log. If the Worker was renamed in Cloudflare, update that field to match before deploying. The pinned Node version in `.node-version` is used by Cloudflare's build image.

## Cloudflare Pages alternative

For a Pages project connected to this repository, choose the **React (Vite)** preset, build command `npm run build`, output directory `dist`, and production branch `main`. Pages serves a single page app automatically when there is no top-level `404.html`. The Worker configuration does not migrate Pages project settings because it has no `pages_build_output_dir` field.

## Local verification

Run `npm ci` and `npm run build`. For the Workers deployment package, run `npx wrangler deploy --dry-run` after building.
