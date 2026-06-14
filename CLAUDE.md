# Hermes Dash — Claude Code Context

## Project

This repository is the public Hermes report dashboard.

- Public read-only dashboard: `/`
- Password-protected management dashboard: `/manage`
- Markdown reports live under `content/reports/*`
- Project ideas live under `content/reports/project-ideas/`

## Design system

Use `design.md` as the primary visual source of truth for this repo.

Follow its Modal-inspired vocabulary:

- black / near-black runtime surfaces
- pale green foreground text
- neon green action and selected states
- muted green secondary copy
- pill buttons, tabs, and controls
- translucent green borders
- flat dark panels with minimal elevation
- Inter/system sans typography

Avoid retro catalog styling: bevel stickers, square black page frames, Times New Roman body copy, multi-color tint systems, and heavy nostalgic browser chrome unless explicitly asked.

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

When using taste output for this repo, adapt the result to the Modal-inspired dashboard direction. Preserve the dashboard's report-browsing clarity and the public/management split.

## Development commands

- Install: `npm install`
- Dev server: `npm run dev`
- Production build/type check: `npm run build`

Before saying work is done, run `npm run build` and check the relevant page in a browser when UI changed.
