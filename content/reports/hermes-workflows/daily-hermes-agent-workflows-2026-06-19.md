# Daily Hermes Agent Workflows — 2026-06-19

A practical coffee brief for turning Hermes + Codex + Telegram into a useful personal operator for product building, research, marketing, and small-business leverage.

## Top findings

### 1. Hermes Agent docs now have a clear “layer features after base chat works” path
Source: https://hermes-agent.nousresearch.com/docs/

**Why it matters:** The most useful bit is not a shiny feature — it is the recommended order of operations. Hermes docs explicitly push: get plain chat working first, then add gateway, cron, skills, voice, routing, MCP, and messaging. This is the right operating model for your setup because it prevents “agent spaghetti” before the basics are stable.

**Practical use for Konrad’s setup:** Treat Hermes like a local operator OS. First stabilize model/provider, tools, profile, and sessions. Then add one workflow at a time: Telegram inbox, daily coffee brief, Codex repo maintenance, research watcher, product-growth monitor.

Useful commands from the docs:

```bash
hermes model
hermes tools
hermes gateway setup
hermes doctor
hermes sessions list
hermes --continue
hermes gateway status
```

Config pattern worth keeping nearby for MCP:

```yaml
mcp_servers:
  github:
    command: npx
    args: ["-y", "@modelcontextprotocol/server-github"]
    env:
      GITHUB_PERSONAL_ACCESS_TOKEN: "ghp_xxx"
```

### 2. OpenAI Codex CLI remains the simplest bridge from “agent idea” to repo work
Source: https://github.com/openai/codex

**Why it matters:** Codex CLI is a local coding agent you can run inside real projects. For you, this is the practical partner to Hermes: Hermes decides and schedules; Codex executes code tasks in specific repos.

**Practical use for Konrad’s setup:** Use Hermes as the orchestrator and Codex as the repo worker. Example: a Hermes cron finds conversion issues or product ideas, writes a brief, then opens a Codex task against `utllo.com` or Analog Hive content tooling.

Useful setup:

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
# or
npm install -g @openai/codex
```

Good prompt pattern for Codex:

```text
You are working in this repo. First inspect the codebase, then make the smallest safe change. Run the relevant tests/build. Report changed files, commands run, and any risks. Do not invent results.
```

### 3. `remem` targets exactly the “coding-agent amnesia” problem
Source: https://github.com/majiayu000/remem

**Why it matters:** `remem` is described as persistent memory for Claude Code and OpenAI Codex. It captures, distills, and injects project context across sessions: decisions, patterns, preferences, and learnings. This is useful if you keep switching between Hermes, Codex, and manual work.

**Practical use for Konrad’s setup:** For utllo.com and Analog Hive, create a per-repo memory layer with product decisions, code conventions, launch constraints, SEO assumptions, brand voice, analytics notes, and “do not break this” warnings. This turns coding agents from one-off interns into repeat collaborators.

First practical move: test it in one non-critical repo before wiring it into daily workflows. The core operating rule: every completed Codex task should leave behind a short memory note: what changed, why, what to watch next.

Suggested memory note format:

```text
Decision: ...
Context: ...
Repo/files affected: ...
Future agent warning: ...
Next useful task: ...
```

### 4. Agentic Task System turns TickTick/Obsidian-style tasks into MCP memory
Source: https://github.com/renezander030/agentic-task-system

**Why it matters:** The project’s thesis is strong: “Your task manager is the best agent memory you’re not using.” It exposes task systems such as TickTick, Taskmaster, Beads, or Obsidian vaults through an MCP server/CLI, giving agents goal hierarchy, relationships, scoped access, and execution context.

**Practical use for Konrad’s setup:** This is close to the ideal Hermes second-brain layer. Instead of Hermes remembering everything in chat history, it can use a task graph: product ideas, research leads, launch tasks, marketing experiments, bug reports, content drafts, and follow-ups.

A useful workflow:

```text
Telegram note → Hermes triages → creates/updates task → Codex acts on repo task → Hermes posts result back to Telegram → task memory keeps continuity.
```

For you, the strongest use case is “daily operator planning”: Hermes reads open tasks tagged `today`, `launch`, `utllo`, `analog-hive`, and returns a realistic plan with one coding task, one marketing task, and one admin task.

### 5. Lilo is a strong reference model for Telegram-native personal assistants
Source: https://github.com/abi/lilo

**Why it matters:** Lilo is a self-hosted personal assistant centered on Telegram. The examples are concrete: send food photos, voice notes, reminders, article summaries, receipts, calendar-like requests, and HN summaries. It shows what a useful personal assistant feels like when the UI is just chat.

**Practical use for Konrad’s setup:** You do not need to clone Lilo’s whole architecture. Use it as a product spec for your Hermes Telegram interface. The valuable pattern is multimodal inbox → intent extraction → durable memory/task → action/reminder.

Commands/prompts to adapt as Telegram shortcuts:

```text
/brief today — summarize agenda, urgent tasks, and product opportunities
/capture idea ... — save product/content idea with tags
/research topic ... — run a research job and return sources
/ship repo task ... — ask Hermes to prepare a Codex-ready task brief
/watch keyword ... — monitor trends, HN, Reddit, GitHub, or competitors
```

### 6. TrendWatch is a lightweight growth-monitoring pattern for product ideas
Source: https://github.com/trendsmcp/TrendWatch

**Why it matters:** TrendWatch watches Google, TikTok, YouTube, Reddit, Amazon, and similar sources, then pings Slack/Discord/Telegram when a topic breaks out. It runs from GitHub Actions and is positioned as “fork → add key → pick keywords.”

**Practical use for Konrad’s setup:** This is immediately relevant to Analog Hive and small SaaS ideation. Track keywords like “AI product design”, “AI photo workflow”, “UX portfolio”, “Framer template”, “Notion second brain”, “SEO automation”, and “MCP server”. Hermes can turn trend alerts into content briefs, landing-page experiments, or tiny product ideas.

First version: fork/template it, configure 10 keywords, send alerts to Telegram, then have Hermes create a weekly “trend-to-product” digest.

### 7. StatusCraft gives agents live status checks for 3,405 services
Source: https://github.com/jabbawocky/statuscraft

**Why it matters:** StatusCraft is an MCP server that checks live status pages for thousands of services. That is mundane but very useful: agents should know whether GitHub, Stripe, OpenAI, Cloudflare, Vercel, Sentry, or a vendor is down before blaming your app.

**Practical use for Konrad’s setup:** Add it to Hermes/Codex workflows as a pre-debug step. If utllo.com deploys fail or automations break, Hermes can check vendor status before opening a debugging rabbit hole.

Setup shown by the project:

```bash
npx -y github:jabbawocky/statuscraft
```

Good Hermes instruction:

```text
Before debugging a failed build, deployment, payment, email, analytics, or API issue, check relevant external service status and mention whether any outage may explain the failure.
```

## Best idea of the day

Build a **Telegram Operator Inbox** for Hermes with five commands: `/capture`, `/brief`, `/research`, `/ship`, and `/watch`.

Why this is the strongest idea: it connects your real daily behavior — sending quick messages, links, photos, voice notes, product thoughts — to durable action. Hermes becomes useful when it can receive messy input, classify it, save it, and trigger Codex/research/monitoring workflows without you opening a laptop.

First step: create a simple command spec in `~/konrad-brain/hermes-telegram-operator.md` or the Hermes profile memory, then wire only `/capture` and `/brief` first. Do not build all five at once.

## Things to try next

1. **Create one Codex-ready task template** for utllo.com: goal, files to inspect, constraints, test/build command, expected report format.
2. **Add a trend watcher** for 10 Analog Hive / product-design / AI-workflow keywords and deliver alerts to Telegram.
3. **Add a “preflight” checklist to Hermes debugging workflows:** run build/test, check git diff, check external service status, then summarize only verified facts.

## Notes on uncertainty

- GitHub repos discovered by update time can be noisy; some are experimental, thin, or promotional. Test in a sandbox before trusting them with private repos or credentials.
- Lilo and similar Telegram assistants are useful as product references, but their full architectures may be heavier than needed for Hermes.
- Trend monitoring tools often depend on third-party APIs and may change pricing or limits. Start with a small keyword set.
- Status/MCP tools should be treated as helpers, not final truth. For critical incidents, verify directly on the vendor status page.
