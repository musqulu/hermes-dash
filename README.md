# Hermes Dash

Open-source dashboard for Markdown reports produced by Hermes agents.

## Modes

- Public read-only dashboard: `/`
- Management dashboard: `/manage`
  - Password-protected via `DASHBOARD_PASSWORD`
  - Allows saving feedback/improvement drafts locally for now

Reports are stored in `content/reports/*` for now. Later this can move to a database without changing the public/management split.

## Design system

The dashboard uses the Modal-inspired design direction documented in `design.md`.

Implementation notes:

- Global design tokens live in `src/app/globals.css` as CSS variables.
- Tailwind scans both `pages/**/*` and `src/**/*` so page-level classes are included in builds.
- UI should keep the Modal-inspired vocabulary: dark runtime surfaces, pale green text, neon green action states, pill controls, translucent green borders, and flat panels.
- Avoid retro catalog styling, bevel stickers, square black page frames, Times New Roman body copy, and multi-color tint systems unless the design direction changes.

## Local setup

```bash
npm install
cp .env.example .env.local
# edit .env.local and set DASHBOARD_PASSWORD
npm run dev
```

## Vercel

Set `DASHBOARD_PASSWORD` in Vercel Project Settings → Environment Variables.

Note: Markdown reports are committed in the repo for now. Management feedback writes to local filesystem in development; on Vercel this should be moved to a database or GitHub-backed persistence before relying on it for durable storage.
