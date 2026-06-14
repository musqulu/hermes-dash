# Hermes Dash

Open-source dashboard for Markdown reports produced by Hermes agents.

## Modes

- Public read-only dashboard: `/`
- Management dashboard: `/manage`
  - Password-protected via `DASHBOARD_PASSWORD`
  - Allows saving feedback/improvement drafts locally for now

Reports are stored in `content/reports/*` for now. Later this can move to a database without changing the public/management split.

## Design system

The repository uses the uploaded Dell 1996-inspired design spec in `DESIGN-dell-1996.md`.

Implementation notes:

- Global design tokens live in `src/app/globals.css` as CSS variables.
- Tailwind scans both `pages/**/*` and `src/**/*` so page-level classes are included in builds.
- UI should keep the DESIGN.md vocabulary: black page frame, square borders, catalog tint blocks, Arial Black display headings, Helvetica UI labels, Times New Roman body copy, classic blue links, and hard-edged sticker/bevel treatments.
- Avoid modern soft cards, rounded corners, gradients, glass effects, and soft shadows unless the design spec changes.

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
