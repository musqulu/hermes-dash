# Daily Hermes Agent workflows brief — 2026-06-23

Practical signal only: Hermes/Codex/MCP/Telegram workflows that can become useful personal operators for Analog Hive, utllo.com, content, research, coding, marketing, and small-business leverage.

## Top findings

### 1. Hermes migration guide: OpenClaw-style agent setups now have a clearer path into Hermes
Source: https://hermes-agent.nousresearch.com/docs/guides/migrate-from-openclaw

**Why it matters:** This is useful because the practical “personal operator” pattern is converging: a chat gateway, persistent context, tool permissions, scheduled jobs, skills, and repeatable workflows. The Hermes migration guide is not just for people coming from OpenClaw; it is a checklist for what a durable agent setup needs.

**Practical use for Konrad’s setup:** Treat the guide as an audit for the current Hermes + Codex + Telegram direction. For each workflow, ask: where is config, where is memory, what tools can it call, what is the approval boundary, and what survives restart?

Useful operator checklist:

```md
For every Hermes workflow:
- trigger: cron / Telegram / manual
- context: ~/konrad-brain + repo files + previous reports
- tools: web/search, files, git, npm build, Codex handoff
- output: Markdown artifact + dashboard copy + Telegram-sized summary
- safety: no private finance/legal/company secrets written to public reports
```

### 2. Hermes Desktop + native Windows docs show Hermes is moving from “terminal tool” to everyday operator surface
Sources: https://hermes-agent.nousresearch.com/desktop and https://hermes-agent.nousresearch.com/docs/user-guide/windows-native

**Why it matters:** The more Hermes runs as a normal app/service, the easier it is to use it for boring daily leverage: morning briefs, monitoring, build checks, research queues, and content prompts. The Windows native guide also documents practical service-style concerns: PATH, console encoding, scheduled task gateway, editor handling, uninstall, and common pitfalls.

**Practical use for Konrad’s setup:** Even on macOS, copy the same mental model: Hermes should be a resident operator, not something manually launched only when inspired. Daily jobs should save artifacts, build dashboards, push changes, and only notify when useful.

Good first workflow to harden:

```md
Daily Market Scout:
collect listings -> dedupe in SQLite -> score compact JSON with local model -> save top 10 -> send only deals above threshold -> open Codex task if scraper broke
```

### 3. langstage-hermes: closed-loop “reflection → skill creation” is the pattern to steal
Source: https://github.com/dkedar7/langstage-hermes

**Why it matters:** This project recreates the Hermes idea on LangGraph/deepagents and describes a very practical loop: after roughly 10 tool-using iterations, a review subagent writes or patches a `SKILL.md`; the next session loads the skill description and can fetch the full body on demand. That is exactly how an agent stops being a stateless prompt box.

**Practical use for Konrad’s setup:** Use this pattern manually first. When Hermes successfully completes a repeatable task — publishing a report, researching Analog Hive posts, fixing a dashboard build, scouting marketplace listings — turn the steps into a skill. The goal is fewer huge prompts and more reusable operating procedures.

Starter skill skeleton:

```md
# Skill: publish-daily-report
Use when a cron brief must be saved locally and mirrored to Hermes Dash.
Steps: get date, research, write Markdown, save two copies, npm run build, git status, commit only report file, push, final status.
```

### 4. Open Chronicle gives Codex/Claude “screen memory” over MCP
Source: https://github.com/Screenata/open-chronicle

**Why it matters:** Open Chronicle records local screen context, performs OCR/summarization, stores it locally, and exposes the memory to Claude Code and Codex CLI through MCP. The killer use case: instead of telling the coding agent “this is failing” or “continue where I left off,” the agent can query recent work context.

**Practical use for Konrad’s setup:** This is directly relevant for design/coding sessions. When working on Hermes Dash, utllo.com, or Analog Hive, an MCP-backed local memory layer could help Codex understand what was just on screen: failing browser state, terminal errors, app UI, design references, or research pages.

Action shape:

```bash
# Conceptual flow
install local memory MCP -> connect Codex/Claude -> ask:
"Look at recent screen memory and repo state. Explain what I was doing and propose the next smallest patch."
```

For a product designer, this is also a second-brain bridge between visual work and code-agent work.

### 5. agentspace: run long-running Codex/Claude coding agents in isolated Docker workspaces
Source: https://github.com/ImreC/agentspace

**Why it matters:** Long-running agent sessions are messy when they share your real repo, shell history, and working tree. agentspace wraps Codex and Claude Code in disposable Docker workspaces so each task gets isolation, detach/reattach behavior, and host-side review before commits/merges.

**Practical use for Konrad’s setup:** This is useful for giving Hermes more confidence when handing work to a code agent. Example: Hermes writes a crisp implementation brief, then starts an isolated Codex session for “add report filters” or “build Market Scout adapter,” while Konrad reviews the final diff before merge.

Commands from the project:

```bash
npm i -g agentspace-cli
cd ~/Desktop/dev/hermes-dash
agentspace spawn claude report-filter-task
# Project also says it wraps Codex; use this pattern for isolated coding runs.
```

### 6. Goose Skills: GTM/SEO/lead-gen skills for Codex, Claude Code, and Cursor
Source: https://github.com/athina-ai/goose-skills

**Why it matters:** Most coding agents are overused for code and underused for distribution. Goose Skills is a catalog of growth and GTM workflows: sales, marketing, competitive intelligence, SEO, and lead generation. Even if the package is promotional, the structure is valuable: package repeatable marketing work as agent skills.

**Practical use for Konrad’s setup:** Create small skills for Analog Hive and utllo.com: competitor scan, landing-page teardown, keyword cluster, founder-led LinkedIn post, outreach list, SEO content refresh, and changelog-to-launch-post.

Install commands shown by the repo:

```bash
npx gooseworks install --codex
npx gooseworks install --claude
npx gooseworks install --all
```

A useful prompt for utllo.com:

```md
Act as a GTM research agent. Find 20 adjacent tools, extract positioning, pricing, audience, and acquisition channels. Return 5 landing-page angles we can ship this week.
```

### 7. Telegram personal assistants are becoming “agent gateways,” not just chatbots
Sources: https://github.com/azfarh95/sentinel-stack-public and https://github.com/CatiesGames/catclaw

**Why it matters:** Sentinel Stack is a self-hosted Telegram-controlled personal AI assistant with memory, web, calendar, reminders, downloads, browser automation, and dashboards. CatClaw is a Rust daemon that exposes Claude Code through Discord, Telegram, Slack, and TUI, with multi-agent personas, SQLite persistence, and approval buttons for sensitive tools.

**Practical use for Konrad’s setup:** This validates the Hermes + Telegram plan. Telegram should be the remote control, not the brain. Hermes remains the orchestrator; Telegram sends commands, receives approvals, and delivers concise status.

Good command set:

```md
/scout analog-hive competitors
/brief utllo seo opportunities
/code hermes-dash fix failing build
/remind follow up on top 3 leads Friday
/approve run npm build
```

## Best idea of the day

Build a **Telegram Mission Control layer for Market Scout + product work**. Hermes already has the right shape: scheduled jobs, files, tools, and dashboard publishing. Add a tiny command vocabulary so Telegram can trigger bounded operators: scout listings, research competitors, summarize repo status, ask Codex to patch one issue, or publish a content draft.

**First step:** define 5 Telegram commands and map each to one Hermes workflow with a saved Markdown output. Start with `/scout market`, because the Market Scout plan already has watchlists, SQLite, scoring, and a dashboard direction.

## Things to try next

1. Turn today’s successful report publishing flow into a Hermes skill: save local copy, mirror to Hermes Dash, build, commit only report file, push, report status.
2. Add a `~/konrad-brain/workflows/telegram-commands.md` spec with 5 commands, required inputs, allowed tools, and approval rules.
3. Prototype one Codex handoff: Hermes writes a 20-line implementation brief for a Hermes Dash improvement; Codex works in an isolated branch/workspace; Hermes only reports the diff and build result.

## Notes on uncertainty

Some GitHub projects found today are very new, alpha, or possibly promotional. Treat `langstage-hermes`, `agentspace`, `Goose Skills`, `Sentinel Stack`, and `CatClaw` as patterns to inspect before adopting, not dependencies to trust blindly. Open Chronicle is older than the 7–14 day window but still highly relevant because MCP-based local memory for Codex/Claude solves a real workflow gap. Hermes official docs are the strongest source for Hermes-specific behavior.