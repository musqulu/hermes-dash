# Hermes Dash — Claude Code Context

## Project

This repository is the public Hermes report dashboard.

- Public read-only dashboard: `/`
- Password-protected management dashboard: `/manage`
- Markdown reports live under `content/reports/*`
- Project ideas live under `content/reports/project-ideas/`

## Design system

Use `DESIGN-dell-1996.md` as the primary visual source of truth for this repo.

Follow its Dell 1996-inspired vocabulary:

- black page frame
- white canvas
- square 1px black borders
- catalog tint blocks: sage, salmon, peach, lime, sky, steel, periwinkle
- Dell red only for high-emphasis callouts
- yellow sticker-style labels/buttons
- Arial Black display headings
- Helvetica UI labels/buttons
- Times New Roman body copy
- classic blue underlined links
- hard-edged bevels/stickers, not soft modern shadows

Avoid modern generic dashboard styling: rounded cards, glassmorphism, soft shadows, gradients, SaaS-neutral gray-on-gray UI, and vague “clean modern” redesigns unless explicitly asked.

## Taste skill

A user-level Claude Code skill is installed at:

`~/.claude/skills/taste`

Use it when Konrad asks to:

- analyze the design of a website
- extract design tokens from a URL
- understand why a site feels good
- build something in the style of a reference site
- compare this dashboard visually against another site
- generate design guidance for an AI coding agent

The skill requires the user-level Playwright MCP server named `playwright`, installed with:

`claude mcp add playwright -s user -- npx -y @playwright/mcp@latest --isolated`

When using taste output for this repo, adapt the result to the existing Dell 1996 dashboard direction instead of blindly replacing it. Preserve the dashboard's report-browsing clarity and the public/management split.

## Development commands

- Install: `npm install`
- Dev server: `npm run dev`
- Production build/type check: `npm run build`

Before saying work is done, run `npm run build` and check the relevant page in a browser when UI changed.
