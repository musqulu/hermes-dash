# Daily Hermes Agent Workflows — 2026-06-25

Coffee brief for Konrad: practical agent workflows worth stealing for Hermes + Codex + Telegram.

## Top findings

### 1. Hermes Agent docs: treat Hermes as the always-on operator, not just a chat UI
Source: https://hermes-agent.nousresearch.com/docs/llms.txt

**Why it matters:** The current Hermes docs position it as a terminal-native autonomous task/coding agent with persistent memory, self-created skills, cron jobs, delegation, webhooks, MCP, ACP/editor support, and a messaging gateway across Telegram/Discord/Slack/SMS/Matrix/etc. That is basically the shape Konrad wants: a personal operator that can receive messages, run local commands, remember patterns, and report back.

**Practical use:** Build around three lanes:
- Telegram = capture and command surface.
- Cron = recurring research/monitoring/reporting.
- Skills = reusable operating procedures for Analog Hive, utllo, SEO, photo/content workflows, and coding.

Useful install/reference:
```bash
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
```
First workflow to encode as a skill: “research 5 practical AI/product opportunities, save markdown, build dashboard, push if changed.” This daily brief is already a working template.

### 2. OpenAI Codex CLI is now the local coding-agent companion Hermes can delegate to
Source: https://github.com/openai/codex

**Why it matters:** Codex CLI is described as a local coding agent from OpenAI. The README points to three useful modes: terminal CLI, IDE integrations, and `codex app` desktop flow. For Konrad, Hermes can be the orchestrator and Codex can be the implementation worker inside specific repos.

**Practical use:** Use Hermes cron/Telegram to create scoped coding tasks, then call Codex inside `/Users/koni/Desktop/dev/...` with tight instructions: inspect, edit, test, build, commit. Keep Hermes responsible for final verification and delivery.

Install options:
```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
# or
npm install -g @openai/codex
# or
brew install --cask codex
```
Prompt pattern:
```text
In this repo, implement only [small feature]. Run the relevant tests/build. Do not commit. Return changed files and verification output.
```
This keeps autonomy useful without letting the coding agent wander.

### 3. “Your App Should Ship an MCP Server” — make products agent-accessible from day one
Source: https://justin.poehnelt.com/posts/ship-mcp-server-native-app/

**Why it matters:** The post argues that embedding an MCP server into an app can become a major architectural advantage because agents can operate the product through a stable tool interface instead of brittle UI scraping. This is directly relevant to utllo.com and any small SaaS Konrad ships.

**Practical use:** Add a simple MCP layer to internal/admin surfaces before building a fancy dashboard. For utllo, MCP tools could be:
```text
create_lead_source(url, notes)
list_recent_signups(days)
generate_landing_page_brief(product_id)
run_seo_audit(url)
create_content_task(channel, topic, due_date)
```
The payoff: Hermes/Codex can use the product safely as a tool. The product becomes easier to automate, test, demo, and operate.

### 4. Orchid: record/replay for debugging AI-agent runs
Source: https://github.com/mario-guerra/orchid-trace

**Why it matters:** Orchid records an agent app’s network traffic — LLM calls, tool invocations, token/cost data, API calls — through a local proxy, then lets you inspect and replay runs. It also exposes MCP tools so an IDE/code agent can query the recorded traffic and debug failures.

**Practical use:** When Konrad starts building multi-step agents for research, SEO monitoring, lead scraping, or content production, failures will be messy: one bad tool call, one malformed prompt, one hidden API response. A recorder makes workflows testable instead of mystical.

Workflow idea:
```text
Run new agent pipeline through Orchid → save failed run → ask Codex/Claude/Hermes: “inspect this trace, identify the first wrong assumption, patch the pipeline, rerun.”
```
Note the privacy caveat: prompts/completions are recorded verbatim, so do not paste secrets or sensitive client/company data into traced runs.

### 5. DataBridge: MCP server for safer database access by agents
Source: https://github.com/gagarwal304/databridge

**Why it matters:** DataBridge is an MCP server meant to sit between agents and databases, enforcing a safer query layer across PostgreSQL, MongoDB, SQLite, and DuckDB. The README’s core critique is exactly right: agents can silently produce wrong joins, over-fetch rows, rediscover schema every session, or run destructive SQL if access is too raw.

**Practical use:** For Analog Hive/utllo dashboards, avoid giving Hermes raw database superpowers. Put a narrow MCP/query layer in front of the data. Start with read-only tools:
```text
get_kpi_snapshot(project, days)
list_new_leads(project, days)
find_content_pages_missing_meta(project)
summarize_revenue_events(days)
```
Then add write tools only with guardrails and confirmation. This is how Hermes becomes useful for business ops without becoming dangerous.

### 6. drawbar: human-in-the-loop agent workflow with Linear + compounding project memory
Source: https://github.com/mjn298/drawbar

**Why it matters:** drawbar is for Claude Code, but the operating model is transferable: design → plan → work → learn, with Linear issues as the source of truth and a per-project knowledge base that compounds across sessions. The author explicitly avoids full fire-and-forget autonomy. That is a good default for product work.

**Practical use:** Recreate this in Hermes for Konrad’s projects:
```text
/design: turn rough idea into scope + risks
/plan: break into tasks with acceptance criteria
/work: implement one task
/learn: save what went wrong/right into project memory
```
drawbar install examples if using Claude Code:
```bash
claude plugin marketplace add mjn298/drawbar
claude plugin install drawbar@drawbar
```
For Hermes, the stronger move is to make equivalent skills under project-specific workflows.

### 7. tabyAgent and Lilo show the Telegram assistant pattern is viable
Sources: https://github.com/gpdir16/tabyAgent and https://github.com/abi/lilo

**Why it matters:** tabyAgent is explicitly a lighter Telegram-based alternative to OpenClaw/Hermes, with Docker/local runtime, skills, MCP, scheduled tasks, and a Telegram setup wizard. Lilo is a broader Telegram personal assistant with reminders, receipts/files, voice notes, TODOs, article summaries, and scheduled updates. Even if Hermes remains Konrad’s main system, these projects are useful product references.

**Practical use:** Steal the UX patterns:
- first Telegram user becomes approved/admin;
- `/config`, `/status`, `/logs`, `/restart` style commands;
- voice note → task/memory;
- receipt/link/file → stored artifact with later retrieval;
- recurring “send me updates every X minutes/days” jobs.

tabyAgent quick start:
```bash
curl -fsSL https://raw.githubusercontent.com/gpdir16/tabyAgent/main/scripts/install.sh | bash
```

## Best idea of the day

**Build a “Konrad Operator Console” skill pack for Hermes.**

Why: the pattern across today’s sources is clear — the leverage comes from repeatable tools, memory, and narrow operating loops, not from one giant general assistant. Start with 5 commands in Telegram/Hermes: `daily_brief`, `product_scan`, `repo_check`, `content_pipeline`, and `kpi_snapshot`.

First step: create one Hermes skill for `repo_check`: pick a repo, run git status, dependency/build check, summarize blockers, and propose the next smallest shippable task.

## Things to try next

1. **Create a Hermes skill template for product workflows:** every run should save inputs, actions, links, outputs, and “what to remember next time.”
2. **Add Codex as the implementation worker:** Hermes scopes tasks; Codex edits; Hermes verifies build/git/report.
3. **Design MCP tools for utllo before more UI:** start with read-only product/business operations so agents can safely inspect and report.

## Notes on uncertainty

HN surfaced several June 24 items, but some are Show HN launches with thin outside validation. DataBridge benchmark claims and Orchid capabilities come from project READMEs, not independent reviews. tabyAgent and Lilo are useful references, but both should be treated as inspiration unless audited before running with sensitive files or tokens.