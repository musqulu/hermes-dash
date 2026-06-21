# Daily Hermes Agent workflows brief — 2026-06-22

Practical signal only: Hermes/Codex/MCP/Telegram workflows that can turn into a real personal operator, product-building loop, or small-business automation.

## Top findings

### 1. Hermes Agent docs are the base layer: cron + skills + Telegram is already enough for a personal operator
Source: https://hermes-agent.nousresearch.com/docs/

**Why it matters:** Hermes is strongest when treated less like a chatbot and more like a scheduled, tool-using operator: cron jobs for recurring work, skills for repeatable procedures, memory/context for continuity, and Telegram for lightweight command/control.

**Practical use for Konrad:** Keep building “daily operators” around Analog Hive, utllo.com, content research, and Market Scout. The workflow shape should be: scheduled trigger → gather sources → score/filter → save artifact → send concise brief → optionally open Codex task.

Useful pattern:

```md
Task: every morning, search 5 sources for [topic], filter for practical workflows, save Markdown, build dashboard, push if changed, report only useful deltas.
```

This current coffee brief is a good template: it saves locally, updates Hermes Dash, builds, commits, and pushes without manual babysitting.

### 2. OpenAI Codex MCP docs: add real tools to Codex instead of pasting context manually
Source: https://developers.openai.com/codex/mcp

**Why it matters:** Codex becomes much more useful when it can call MCP servers for GitHub, docs, local files, databases, browser/search, and internal tools. That turns “please code this” into “inspect repo, check issues, patch, test, open PR.”

**Practical use for Konrad:** Wire Codex to the repos and services Hermes watches. Hermes can prepare briefs/specs; Codex can execute implementation in `/Users/koni/Desktop/dev/...` with repo-aware tools.

Useful setup shape in `~/.codex/config.toml`:

```toml
[mcp_servers.my_tool]
command = "uvx"
args = ["some-mcp-server"]
```

Then verify inside Codex with:

```bash
/mcp
```

Use this for product work: “Read `content/reports`, find today’s workflow idea, create a small Linear/GitHub issue, implement the first step, run tests.”

### 3. GitHub MCP server now has a direct Codex install guide
Source: https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/install-codex.md

**Why it matters:** This is one of the most immediately useful MCP integrations for an independent builder. It gives Codex direct access to repositories, issues, PRs, workflow runs, and gists.

**Practical use for Konrad:** Connect Codex to GitHub so Hermes can hand off implementation tasks for Hermes Dash, utllo.com, and Analog Hive. Keep token scope least-privilege.

Remote config example from the guide:

```toml
[mcp_servers.github]
url = "https://api.githubcopilot.com/mcp/"
bearer_token_env_var = "GITHUB_PAT_TOKEN"
```

Or CLI:

```bash
codex mcp add github \
  --url https://api.githubcopilot.com/mcp/ \
  --bearer-token-env-var GITHUB_PAT_TOKEN
```

Good first prompt:

```md
List open issues in konrad/hermes-dash. Pick one small content/reporting improvement, create a branch, implement it, run the build, and prepare a PR summary.
```

### 4. Codex community is asking for event-driven sessions and Telegram-style wakeups
Sources: https://github.com/openai/codex/issues/15299 and https://github.com/openai/codex/issues/21166

**Why it matters:** Recent Codex issues show a real gap: people want external messages, Telegram events, and MCP notifications to wake or steer a running Codex session. Codex is still mostly turn-driven, so reliable autonomous workflows need a wrapper/orchestrator.

**Practical use for Konrad:** Let Hermes be that wrapper. Telegram → Hermes command → Codex task is more realistic than waiting for native Codex Telegram support.

Simple architecture:

```text
Telegram message
  → Hermes Telegram plugin/cron handler
  → classify intent: research / code / dashboard / reminder
  → create task brief in Markdown
  → run Codex in target repo
  → build/test
  → send result summary back
```

This is the practical path to “text my agent and get a shipped change,” without depending on unfinished native Codex features.

### 5. Telegram MCP servers are getting powerful, but treat them as high-risk tools
Source: https://github.com/Matancoo/telegram-mcp

**Why it matters:** `telegram-mcp` exposes a large Telegram tool surface via Telethon/FastMCP: chat history export, contacts, messages, media, groups, drafts, folders, reactions, and more. That is exactly the kind of bridge needed for a serious personal assistant.

**Practical use for Konrad:** Use Telegram as the inbox/control plane, but start read-only. Valuable workflows: summarize unread project chats, extract links into a second brain, turn voice notes into tasks, monitor client/channel messages, and push daily operator briefs.

Suggested safety rule:

```md
Telegram tools may read and summarize by default. Any send/delete/invite/contact-changing action requires explicit confirmation unless the chat is a private test bot/channel.
```

First useful workflow: “Every morning, summarize only saved messages and selected work chats; extract URLs; append action items to a daily Markdown note.”

### 6. Agent2Agent + MCP tutorial is a good mental model for multi-step pipelines
Source: https://matteovillosio.com/writing/agent2agent-mcp-tutorial/

**Why it matters:** The useful idea is not “one giant agent.” It is separate roles with clear handoffs: planner, researcher, evaluator, coder, reviewer, notifier. MCP supplies tools; A2A-style handoffs keep scope clean.

**Practical use for Konrad:** Apply this to Market Scout and product/content loops. Example for Market Scout:

```text
Collector: fetch candidates from search/listing sources
Extractor: normalize title, price, location, URL, description
Evaluator: score against watchlist YAML
Reviewer: produce top 5 with reasoning
Notifier: Telegram/dashboard brief
```

This matches the existing `~/konrad-brain/projects/market-scout/implementation-plan.md`: deterministic collection first, model judgment second.

### 7. Trend monitoring repos point toward a reusable “opportunity radar”
Source: https://github.com/upinggo/TrendRadar

**Why it matters:** TrendRadar-style projects combine multi-platform aggregation, RSS, keyword filters, AI translation/analysis, and mobile alerts. Even if the repo itself needs verification before adoption, the workflow pattern is strong.

**Practical use for Konrad:** Build a small Hermes-powered radar for Analog Hive and utllo.com: monitor HN, Reddit, GitHub, design/product blogs, competitor changelogs, and SEO keywords; score items for “content idea,” “product feature,” “lead,” or “market shift”; publish a short daily digest.

Minimal v1:

```yaml
watchlists:
  - analog-hive: ["film photography", "camera scanning", "analog workflow"]
  - utllo: ["small SaaS launch", "AI landing page", "productized service"]
outputs: [markdown, telegram, hermes-dash]
```

## Best idea of the day

**Build a Telegram-controlled “Ship Small Change” operator.**

Why: it connects the pieces Konrad already cares about — Hermes as orchestrator, Telegram as interface, Codex as code executor, GitHub as source of truth, and Hermes Dash as visible output. This is more valuable than another generic assistant because it produces shipped artifacts.

First step: create one safe command, e.g. `/ship-dashboard-report-fix`, that tells Hermes to create a short task brief, run Codex in `hermes-dash`, build, commit one file or one small change, and report status back.

## Things to try next

1. **Connect GitHub MCP to Codex** using the official Codex install guide, then test with “list my repos” and “show recent workflow runs.”
2. **Create a read-only Telegram summarizer** for Saved Messages + one test chat before allowing any send/write tools.
3. **Turn Market Scout into a Hermes cron pipeline**: collect deterministic listings, score compact JSON with a model, save Markdown, and push top candidates to Telegram/Hermes Dash.

## Notes on uncertainty

- Hermes and OpenAI docs were reachable and should be treated as primary sources.
- GitHub issues reflect community demand, not guaranteed roadmap commitments.
- Telegram MCP tools are powerful but privacy-sensitive; use narrow scopes and confirmation gates.
- TrendRadar-style repos are useful as workflow inspiration, but should be reviewed before depending on them in production.
