# Daily Hermes Agent Workflows — 2026-06-20

A practical coffee brief for turning Hermes + Codex + Telegram into a personal operator for shipping products, monitoring opportunities, and reducing admin drag.

## Top findings

### 1. Hermes Agent now has an explicit OpenClaw migration path
Source: https://hermes-agent.nousresearch.com/docs/guides/migrate-from-openclaw

**Why it matters:** The official Hermes docs published a migration guide for OpenClaw users. The signal: Hermes is positioning itself as the maintained path for a self-improving, gateway-enabled agent with skills, memories, cron, session search, and multi-channel access.

**Practical use for Konrad’s setup:** If any old OpenClaw-era configs, habits, or examples appear in tutorials, translate them into current Hermes primitives: profiles, gateways, skills, cron jobs, and docs-first config. Keep the daily operator boring and stable before adding fancy workflows.

Useful baseline commands to keep in the setup checklist:

```bash
hermes doctor
hermes model
hermes gateway setup
hermes gateway status
hermes sessions list
hermes --continue
```

### 2. `hermes-on-railway` is a minimal Telegram gateway deployment reference
Source: https://github.com/indrad3v4/hermes-on-railway

**Why it matters:** This repo is not a big platform. It is a small deployment pattern: Hermes Agent on Railway, Telegram gateway polling, Dockerfile, environment variables, and `/status` verification. That makes it useful as a reference for a “Hermes reachable from phone” setup.

**Practical use for Konrad’s setup:** Use it as a checklist for a low-maintenance cloud Hermes instance: one service, Telegram bot token, allowlisted user IDs, and one model provider key. Good for daily briefs, trend checks, lightweight research, and “start a Codex task brief” messages while away from the laptop.

Core variables shown by the repo:

```bash
TELEGRAM_BOT_TOKEN=...
TELEGRAM_ALLOWED_USERS=123456789
OPENAI_API_KEY=...
# or ANTHROPIC_API_KEY / OPENROUTER_API_KEY / STEPFUN_API_KEY
```

Verification pattern:

```text
Send /status to the Telegram bot. If it answers, gateway + provider are alive.
```

Note: the README says Railway storage is ephemeral, so do not treat that deployment as the long-term memory source unless persistence is added.

### 3. Circus Chief turns code agents into a mobile-controlled production line
Source: https://github.com/ferrislucas/Circus-Chief

**Why it matters:** Circus Chief supports Claude Code, OpenAI Codex, and Gemini CLI from one touch-optimized dashboard. The useful ideas are worktree-per-session isolation, scheduled sessions, chainable templates, Kanban lanes that trigger prompts, retry-on-limit, command buttons for tests/builds, and GitHub PR linking.

**Practical use for Konrad’s setup:** Even if you do not adopt the whole app, copy the operating model: each product repo gets lanes like `Backlog → Plan → Implement → Review → PR`. Hermes can generate the card/task; Codex handles implementation; the dashboard pattern keeps work visible from phone.

Quick run command from the repo:

```bash
npx circuschief
```

Template pipeline worth adapting for utllo.com:

```text
Plan the smallest safe change → review plan → implement → run build/tests → review diff → prepare PR notes
```

### 4. Phleet is a serious self-hosted multi-agent pattern with Telegram in the loop
Source: https://github.com/anurmatov/phleet

**Why it matters:** Phleet is heavier than a personal Hermes install, but it demonstrates a useful architecture: agent containers, Temporal workflows, GitHub App access, memory directories, a dashboard, and Telegram bots for co-CTO/notifier flows. It is designed around “request → agents coordinate → PR/deploy” rather than one-off chat.

**Practical use for Konrad’s setup:** Use it as a blueprint for a future “small product operating room.” For now, steal two patterns: split Telegram bots by role when needed, and keep repo credentials scoped through a GitHub App instead of broad personal tokens.

Setup shape from the README:

```bash
git clone https://github.com/anurmatov/phleet.git
cd phleet
./setup.sh
```

Good Hermes adaptation:

```text
When I ask for a product change, create a short implementation brief, identify the repo, define acceptance checks, and only then hand it to a coding agent.
```

### 5. `mcp-tg` exposes Telegram itself as an MCP tool surface
Source: https://github.com/lexfrei/mcp-tg

**Why it matters:** This is an MCP server for Telegram’s MTProto client API, not just a bot wrapper. It lists tools for dialogs, messages, search, send/edit/delete/forward, reactions, read state, contacts, users, media, prompts, and resources. That means an agent can potentially work with Telegram as a real inbox/archive, not only receive bot commands.

**Practical use for Konrad’s setup:** This could become the research/inbox layer: search your own saved links, summarize a Telegram channel, draft replies, pull recent messages around a topic, or turn a forwarded message into a task. Use carefully: user-account Telegram automation has more privacy and account-risk surface than bot-only workflows.

Useful workflow idea:

```text
Forward article/product idea to Saved Messages → Hermes searches recent Saved Messages → groups by project → returns “act / archive / research” suggestions.
```

### 6. OmniMCP is a fast way to give agents everyday SaaS actions without wiring every API
Source: https://github.com/arcadeai-labs/omnimcp

**Why it matters:** OmniMCP exposes many tools — Slack, Gmail, GitHub, Google Calendar, Notion, Linear, Dropbox, and more — over one MCP endpoint with OAuth-style sign-in. The practical value is reducing integration yak-shaving.

**Practical use for Konrad’s setup:** For a personal operator, this is useful for low-risk actions: calendar checks, GitHub issue creation, Notion lookup, Slack summaries, and email triage. Start read-first, then allow write actions only for narrow commands.

Claude Code setup shown by the repo:

```bash
claude mcp add --transport http omni https://omni.arcade.dev/mcp
```

Prompt rule to add before connecting broad SaaS tools:

```text
For external SaaS tools, read before writing. Before sending, deleting, inviting, purchasing, or publishing anything, show the exact proposed action and wait for approval.
```

### 7. OpenAI Codex CLI remains the clean execution layer for repo work
Source: https://github.com/openai/codex

**Why it matters:** The Codex README clearly separates local Codex CLI, IDE integration, desktop app, and Codex Web. For Hermes, the local CLI is the important piece: it can run inside real repos, inspect files, make changes, and report commands/results.

**Practical use for Konrad’s setup:** Hermes should not do all coding directly. Let Hermes be the planner/researcher/operator, then generate a Codex-ready task with goal, constraints, files to inspect, test command, and reporting format.

Install options from the README:

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
# or
npm install -g @openai/codex
# or
brew install --cask codex
```

A good default task prompt:

```text
Inspect the repo first. Make the smallest safe change. Run the relevant build/test/lint. Report changed files, commands run, exact results, and risks. Do not invent output.
```

## Best idea of the day

Build a **phone-first product operator loop**: Telegram capture → Hermes triage → Codex task brief → isolated code-agent session → verified result back to Telegram.

Why this is strongest: it connects the actual daily surface — quick Telegram messages while moving around — to product progress. The point is not “chat with AI.” The point is turning messy notes into shipped changes, research briefs, content drafts, and growth experiments.

First step: implement only one path for utllo.com: `/ship <small product task>`. Hermes should reply with a structured Codex brief, not immediately edit code.

## Things to try next

1. **Create a Codex task-brief template** in `~/konrad-brain`: goal, repo, constraints, likely files, acceptance checks, test/build command, final report format.
2. **Prototype Telegram `/status`, `/capture`, and `/ship` commands** before adding broader MCP or SaaS integrations.
3. **Test one cloud Hermes deployment reference** in a non-critical environment and decide how memory/persistence should work before relying on it.

## Notes on uncertainty

- GitHub repos discovered by recent update time can be experimental, thin, or promotional. Sandbox before granting credentials.
- `mcp-tg` uses a Telegram user account via MTProto, which is more powerful and more sensitive than a normal bot. Treat it as advanced/optional.
- Railway-style Hermes deployment is convenient, but ephemeral storage is a blocker for durable memory unless persistence is added.
- Multi-agent platforms like Phleet and dashboards like Circus Chief may be overkill today; the useful part is their workflow pattern, not necessarily full adoption.
