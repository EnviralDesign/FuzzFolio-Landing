# AGENTS.md

## Project
FuzzFolio Landing — static site built with Vite + Tailwind CSS v4, deployed to GitHub Pages.

## Environment
- Node 20.x
- Package manager: npm
- Runs on GitHub Pages under `/FuzzFolio-Landing/` so Vite `base` must be set accordingly.

## Setup
- Install: `npm ci`
- Dev server: `npm run dev`
- Build (required to pass): `npm run build`

## Checks before finishing any task
- `npm run build` exits 0
- Generated `dist/` contains `index.html` and assets
- For SPA safety on Pages, CI will copy `dist/index.html` → `dist/404.html` (no need to commit a 404)

## Conventions
- Tailwind v4 with `@tailwindcss/vite` plugin
- Put global CSS in `src/styles.css`:
  - `@import "tailwindcss";` at the top
  - Custom CSS below (can override utilities)
- JS entry: `src/main.js` (import CSS here)

## Notes
- Do not remove `.nojekyll`
- Keep PRs small and descriptive; include the `npm run build` log in the PR description.