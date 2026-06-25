# Daily Hermes Agent Workflows — 2026-06-26

Coffee brief for Konrad: practical agent workflows worth stealing for Hermes + Codex + Telegram.

## Top findings

### 1. Hermes Agent itself is moving fast: build your setup around profiles, cron, skills, and messaging
Source: https://github.com/NousResearch/hermes-agent and https://hermes-agent.nousresearch.com/docs/

**Why it matters:** The official repo was updated today and the docs remain the source of truth. Hermes is not just a chat wrapper: it is a local operator loop with tools, terminal, files, web/browser actions, persistent state, skills, scheduled jobs, and messaging gateways. That is exactly the architecture for “personal operator for Analog Hive + utllo + content + coding.”

**Practical use for Konrad:** Treat Hermes as the router, not the only worker. Let Telegram capture intent, Hermes decide the workflow, Codex implement code changes, and cron jobs produce recurring briefs/reports.

Useful baseline:
```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
```

Workflow shape to keep reusing:
```text
Telegram command → Hermes skill → repo/files/tools → verification command → markdown report → dashboard build → git push → Telegram summary
```

First skill worth formalizing: “daily product/operator scout” with sources, filtering rules, output path, build command, and commit policy. This cron already behaves like a template.

### 2. Dockerized Hermes workspace: reproducible personal OS instead of fragile laptop state
Source: https://github.com/Jak2/personal_os_hermes_setup

**Why it matters:** This is a fresh community example of wrapping Hermes in a Docker Compose workspace with persisted config, memory, skills, sessions, and optional gateway/dashboard profiles. The repo is tiny/unproven, but the pattern is strong: isolate the operator while keeping long-lived memory mounted on the host.

**Practical use for Konrad:** Useful if Hermes becomes business-critical. A containerized “operator box” makes it easier to move from Mac laptop to server, restart cleanly, and keep Telegram/Codex workflows running without breaking personal files.

Commands from the README:
```bash
cp .env.example .env
docker compose build
docker compose run --rm hermes setup
docker compose run --rm hermes
# always-on messaging gateway
docker compose --profile gateway up -d
# local dashboard
docker compose --profile dashboard up -d
```

Konrad version: mount only approved roots like `/Users/koni/Desktop/dev`, `/Users/koni/Desktop/hermes`, and `~/konrad-brain`; do not give the container broad access to private folders until permission boundaries are clear.

### 3. OpenAI Codex CLI: make it the repo-local implementation worker
Source: https://github.com/openai/codex and https://developers.openai.com/codex/mcp

**Why it matters:** Codex CLI is positioned as a local coding agent. The fresh angle for Hermes is delegation: Hermes can receive a goal, prepare context, call Codex inside one repo, then independently run build/tests and decide whether to commit.

**Practical use for Konrad:** For utllo.com or Analog Hive tooling, avoid “open-ended coding agent” sessions. Use small tickets and require verification output.

Install/login:
```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
# or
npm install -g @openai/codex
codex login
```

Prompt pattern for Hermes → Codex:
```text
In this repo only, implement [one small change]. Read AGENTS.md first. Do not touch unrelated files. Run npm run build. Do not commit. Return changed files, risks, and exact verification output.
```

Also worth checking: Codex’s MCP docs. If Codex can access the same MCP tools as Hermes, you can give it narrow tools like `get_recent_signups`, `create_content_draft`, or `search_brand_assets` instead of raw database/filesystem access.

### 4. Telegram Bridge MCP: turn Telegram into a controlled command + confirmation layer
Source: https://github.com/electrified-cortex/Telegram-Bridge-MCP

**Why it matters:** This repo is small but directly relevant: an MCP server that bridges AI assistants to Telegram for two-way messaging, confirmations, status updates, reminders, chat actions, voice transcription, and optional TTS. The important part is not “chatbot”; it is human-in-the-loop approval from the phone.

**Practical use for Konrad:** Use Telegram as the control plane for risky or useful workflows:
- “Approve pushing this landing-page change?”
- “Send me today’s Analog Hive content queue.”
- “Record this voice note, transcribe it, save to `~/konrad-brain/inbox`.”
- “Run SEO monitor for utllo and summarize only regressions.”

Quick start from README:
```bash
git clone https://github.com/electrified-cortex/Telegram-Bridge-MCP.git
pnpm install && pnpm build
pnpm pair
```

Local voice/TTS option mentioned:
```bash
docker run -d --name kokoro -p 8880:8880 ghcr.io/hexgrad/kokoro-onnx-server:latest
```

Best guardrail: require Telegram confirmation for destructive actions: pushes, deploys, bulk emails, public posts, paid API runs.

### 5. Luma Assistant: browser UI for Codex/Claude with cron, skills, MCP, Telegram config
Source: https://github.com/mertz1999/luma-assistant

**Why it matters:** Very low-star and should be treated as experimental, but the feature bundle maps almost perfectly to Konrad’s desired stack: self-hosted Codex/Claude workspace, remote URL access, cron-style jobs, sandbox terminals, offline voice-to-text, MCP, plan mode, agents, skills, persistent session history, and Telegram automation.

**Practical use for Konrad:** Don’t necessarily adopt it, but steal the product pattern for Hermes Dash: a control panel that shows scheduled jobs, recent sessions, tool output, diffs, reports, and approval state. This could become a personal “operator cockpit.”

Setup snippets from README:
```bash
cp .env.example .env
npm install
codex login
```

Telegram config pattern worth copying:
```env
TELEGRAM_BOT_TOKEN=***
TELEGRAM_CHAT_ID=-1001234567890
TELEGRAM_MCP_PORT=9013
TELEGRAM_ALLOWED_ROOTS=/Users/koni/Desktop/dev,/Users/koni/Desktop/hermes
```

The key idea: remote access + persistent history matters. If Hermes does real work, Konrad needs to inspect what happened later, not just receive a final message.

### 6. MCP reference servers + Mastra: start product automation with boring, typed tools
Source: https://github.com/modelcontextprotocol/servers and https://github.com/mastra-ai/mastra

**Why it matters:** The MCP servers repo remains the reference catalog, and Mastra is a popular TypeScript agent framework. For small SaaS/product work, the practical move is not “build a giant agent.” It is to expose a few boring tools with narrow inputs and logs, then let Hermes/Codex call them.

**Practical use for Konrad:** For utllo/Analog Hive, create internal MCP tools before full admin UIs:
```text
get_kpi_snapshot(project, days)
list_new_leads(project, days)
generate_seo_brief(url)
create_content_task(channel, topic, due_date)
summarize_customer_feedback(source, days)
```

Reference install examples:
```bash
npx -y @modelcontextprotocol/server-memory
npm create mastra@latest
```

This gives agents safer handles for marketing, research, monitoring, and reporting without handing them raw database or browser control every time.

## Best idea of the day

Build a **Telegram-approved shipping loop**: Hermes receives a task, Codex makes the repo change, Hermes runs build/tests, then Telegram asks Konrad to approve commit/push/deploy. This gives autonomy without losing taste/control.

First step: create one Hermes skill for `repo_change_with_approval` that accepts `repo`, `task`, `verification_command`, and `approval_required=true`.

## Things to try next

1. Add a repo-level `AGENTS.md` to `utllo.com` and `hermes-dash` with build commands, forbidden paths, style rules, and commit policy.
2. Prototype one Telegram approval workflow: “Run build and ask before git push.” Keep it boring and reliable.
3. Define the first five MCP-style internal tools for utllo/Analog Hive before adding more dashboards.

## Notes on uncertainty

Several fresh GitHub repos found today have very low stars and may be demos, spam, or early experiments. I included them only when the workflow pattern was useful and cross-checked that the links/READMEs were reachable. Treat community repos as inspiration unless they pass a local install/security review. Official Hermes, Codex, MCP, and Mastra links are stronger references.