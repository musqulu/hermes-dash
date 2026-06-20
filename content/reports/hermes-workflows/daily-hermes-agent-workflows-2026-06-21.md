# Daily Hermes Agent Workflows — 2026-06-21

Coffee brief for Konrad: practical agent workflows worth stealing for Hermes + Codex + Telegram + small-product leverage.

## Top findings

### 1. Hermes Agent docs now have the exact building blocks for a personal operator
Source: https://hermes-agent.nousresearch.com/docs and especially:
- MCP: https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp
- Messaging gateway: https://hermes-agent.nousresearch.com/docs/user-guide/messaging
- MCP guide: https://hermes-agent.nousresearch.com/docs/guides/use-mcp-with-hermes

**Why it matters:** Hermes is already shaped like the “personal operator” you want: CLI, persistent memory, skills, MCP tools, messaging gateways, scheduled jobs, and `[SILENT]` delivery control. The useful part is not novelty; it is that these pieces can become small daily systems instead of one-off chats.

**Practical use for Konrad:** Build Hermes around repeatable operator loops: research → summarize → save Markdown → notify Telegram only if useful → optionally open a Codex task. This daily brief itself is the template.

Useful setup snippets from the docs:

```bash
hermes gateway setup
hermes gateway
hermes mcp catalog
hermes mcp enable filesystem
```

Example MCP config shape:

```yaml
mcp_servers:
  project_fs:
    command: "npx"
    args: ["-y", "@modelcontextprotocol/server-filesystem", "/Users/koni/Desktop/dev"]
```

First workflow to ship: give Hermes safe filesystem access to selected project folders, then make Telegram commands like “summarize utllo repo,” “draft Analog Hive post,” and “run today’s Market Scout.”

### 2. OpenAI Codex CLI is active, but watch usage economics closely
Source: https://github.com/openai/codex and live issue: https://github.com/openai/codex/issues/28879

**Why it matters:** Codex remains a strong local coding agent: installable through shell, npm, or Homebrew, usable in terminal, IDE, and desktop app. But a current GitHub issue reports Plus-plan Codex `gpt-5.5` rate-limit budget draining much faster after June 16. It is not verified by OpenAI in the issue, but it is practical signal: do not build critical pipelines that assume unlimited Codex turns.

**Practical use for Konrad:** Use Codex as the “expensive implementer/reviewer,” not the always-on researcher. Hermes should prepare compact specs, acceptance criteria, and file context before invoking Codex.

Install / run:

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
# or
npm install -g @openai/codex
codex
```

Prompt pattern for Hermes → Codex handoff:

```text
You are implementing one bounded change. Read AGENTS.md and the relevant files only.
Goal: <one feature>
Acceptance: <testable checks>
Constraints: do not refactor unrelated code; run npm run build/test; report exact commands and results.
```

This keeps Codex sessions short and reduces token waste.

### 3. Engram is a simple cross-agent memory layer for Codex, Claude, and Gemini
Source: https://github.com/the-long-ride/engram

**Why it matters:** Engram treats memory as filesystem-based infrastructure for agents. It installs hooks for Codex, Claude, and Gemini, and gives slash-command style operations for loading/saving project and global memory. This is close to what `~/konrad-brain` is already becoming.

**Practical use for Konrad:** Use the idea even if you do not adopt the package: separate global identity/strategy memory from per-project memory. For Analog Hive, utllo, and Market Scout, keep small Markdown files with product goals, constraints, commands, and “known decisions,” then force agents to load only what matters.

Commands from the repo:

```bash
npm install -g @the-long-ride/engram
engram install-agent-hooks codex --plan
engram install-agent-hooks codex
engram set-save-target both
engram set-read auto
```

Hermes adaptation: create a `project-operator.md` per product with sections: current goal, next shippable milestone, build command, deploy command, marketing angle, open risks.

### 4. Super-agent shows the Telegram + second-brain + scheduled-agents pattern
Source: https://github.com/FedericoCasarella/super-agent

**Why it matters:** This is almost exactly the category to study: a Telegram-native personal AI advisor with an Obsidian-style vault, Postgres index, scheduled agents, connectors, and MCP bridge. It is small and early, but the architecture is useful.

**Practical use for Konrad:** Copy the pattern, not necessarily the repo. Hermes can be the orchestrator, Telegram the UI, Markdown the vault, and cron the scheduler. The important design choice: real-world actions are proposed and confirmed in Telegram, not blindly executed.

Quick start from the repo:

```bash
npm install
npm run db:migrate
npm run dev
```

Workflow to steal: nightly “Self-review Agent” that reads the last 24h of notes, commits, saved links, and Telegram requests, then sends one compact brief: wins, stuck loops, and one best next action.

### 5. Lilo is a practical self-hosted Telegram assistant blueprint
Source: https://github.com/abi/lilo

**Why it matters:** Lilo frames the assistant as a single-user, self-hosted personal OS that lives in Telegram, with filesystem/network/shell access and strict allowed-user controls. The README is refreshingly honest about risk: shell + network access means prompt injection matters.

**Practical use for Konrad:** Use its Telegram setup as a checklist for Hermes hardening: bot token, webhook secret, allowed Telegram user IDs, per-contact persistent context, and clear boundaries on what the agent can do.

Setup snippets:

```bash
pnpm install
pnpm run dev
```

Telegram env shape:

```bash
TELEGRAM_BOT_TOKEN=***
TELEGRAM_WEBHOOK_SECRET=long-random-secret
LILO_TELEGRAM_ALLOWED_USER_IDS=123456789
```

Webhook pattern:

```bash
curl -X POST "https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/setWebhook" \
  -d "url=https://your-domain/api/inbound-telegram" \
  -d "secret_token=$TELEGRAM_WEBHOOK_SECRET"
```

For Hermes: keep Telegram as command-and-approval surface, not a dumping ground. Default to `[SILENT]` unless the result changes a decision.

### 6. Agent Smith is a good model for project-specific coding-agent onboarding
Source: https://github.com/gunesbizim/agent-smith

**Why it matters:** Agent Smith detects a repo stack, installs relevant MCP servers, writes a managed `CLAUDE.md`, adds slash commands, and aims toward ticket-to-PR workflows. This is the missing bridge between “agent can code” and “agent knows this repo’s commands and rules.”

**Practical use for Konrad:** For `hermes-dash`, utllo, Analog Hive, and Market Scout, create a lightweight version: one repo-local agent manual with commands, risks, deployment, style, and acceptance checks. Hermes can generate it; Codex can obey it.

Commands:

```bash
npx @gunesbizim/agent-smith analyze
npx @gunesbizim/agent-smith init
npx @gunesbizim/agent-smith doctor
```

Konrad-specific adaptation: add `/ship-small`, `/write-launch-copy`, `/audit-seo-page`, `/make-demo-gif-plan`, and `/open-pr` style prompts per repo.

### 7. AI Capability Registry points toward GitOps for skills, workflows, and MCPs
Source: https://github.com/Friz-zy/ai-capability-registry

**Why it matters:** Tool sprawl is becoming the real bottleneck. This repo treats skills, workflows, MCP servers, and role prompts as versioned infrastructure instead of hidden local config.

**Practical use for Konrad:** Keep a tiny private “capability registry” for Hermes: approved MCPs, approved commands, cron jobs, Telegram workflows, and project roles. This makes autonomy safer because the agent can route tasks without loading every tool all the time.

Useful command from the repo:

```bash
python scripts/generate-agent-configs.py --cli codex --output ~/.codex --preset openai --templates-path "$PWD"
```

For Hermes, the simpler first step is a Markdown index: `~/konrad-brain/agent-capabilities.md` with sections for research, coding, content, monitoring, finance/admin, and “never automate without approval.”

## Best idea of the day

**Build a Telegram-controlled “Market Scout operator” in Hermes.**

Why: your existing Market Scout plan already has the right architecture: deterministic collectors first, compact JSON to models second, local dashboard third. Hermes can schedule runs, save reports, notify Telegram only when there are high-signal finds, and hand implementation tasks to Codex.

First step: create one Hermes cron job that runs a single watchlist, saves `market-scout-YYYY-MM-DD.md`, and sends Telegram only if there are candidates above a threshold. Keep it boring: no autonomous contacting, no scraping arms race, no giant browser loop.

## Things to try next

1. **Create a Hermes operator folder per product:** `analog-hive`, `utllo`, `market-scout`, each with `brief.md`, `commands.md`, `content-angles.md`, and `open-decisions.md`.
2. **Add one Telegram command loop:** “/scout market” runs or summarizes Market Scout; “/ship utllo” returns the smallest next coding task plus Codex-ready prompt.
3. **Make Codex consume prepared briefs only:** Hermes writes a bounded implementation spec, then Codex executes. This avoids long exploratory Codex sessions and helps with rate-limit uncertainty.

## Notes on uncertainty

Some repos above are early-stage, low-star, or promotional. Treat them as pattern libraries, not dependencies. The Codex rate-limit issue is a user report, not confirmed platform policy. Telegram assistant repos with shell/network access need strict allowlists and human approval for external actions. For Hermes itself, the official docs are the source of truth.