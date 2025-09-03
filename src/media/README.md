# Media Derivatives

This folder holds the original screenshots and a PowerShell script to generate responsive derivatives used by the app.

## Originals vs. derivatives

- Originals (you edit these):
  - `dashboard.png`
  - `builder.png`
  - `backtesting.png`
- Derivatives (auto‑generated):
  - `derivs/dashboard/640.webp`, `960.webp`, `1280.webp`, `1920.webp`
  - `derivs/builder/320.webp`, `640.webp`, `960.webp`, `1280.webp`
  - `derivs/backtesting/320.webp`, `640.webp`, `960.webp`, `1280.webp`

You can generate PNG instead of WebP (or both) if needed.

## Generate derivatives

From `src/media` run:

- Full rebuild (default):
  - `./generate-derivatives.ps1`
- Incremental (don’t wipe existing outputs):
  - `./generate-derivatives.ps1 -Clean:$false`
- Choose format:
  - WebP only (default): `./generate-derivatives.ps1 -Format webp`
  - PNG only: `./generate-derivatives.ps1 -Format png`
  - Both: `./generate-derivatives.ps1 -Format both`

### Requirements

- Optional: ImageMagick (`magick`) on PATH for WebP and higher‑quality output.
- If `magick` isn’t found, the script falls back to .NET and writes PNG derivatives.

## How the app finds images

`InsideApp` auto‑discovers derivatives via Vite’s `import.meta.glob`:

- Supports both patterns:
  - Flat names: `src/media/dashboard-640.webp`
  - Nested names: `src/media/derivs/dashboard/640.webp` (recommended)
- It builds `<picture>` with `srcset`/`sizes` automatically and falls back to the original PNG if no derivatives exist.

No code changes are required after (re)generating—just reload your dev server.

## Target sizes (defaults in the script)

- Dashboard (full width): `640, 960, 1280, 1920`
- Builder/Backtesting (half width on lg): `320, 640, 960, 1280`

Tweak these in `generate-derivatives.ps1` if your layout changes.

## Troubleshooting

- “Images look aliased”: ensure you generated derivatives; browsers will pick the closest size for sharper results.
- “404 for derivatives”: confirm files exist under `src/media/derivs/...` and restart the dev server.
- “Need PNG instead of WebP”: run with `-Format png` or `-Format both`.

