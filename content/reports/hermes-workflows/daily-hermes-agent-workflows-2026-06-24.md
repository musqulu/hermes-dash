# Daily Hermes Agent Workflows — 2026-06-24

Coffee brief for Konrad: practical agent workflows worth stealing for Hermes + Codex + Telegram.

## Top findings

### 1. Hermes Agent is getting real “operator” forks and adjacent tools
Source: https://github.com/HaroPad-Hermes/hermes-agent and https://github.com/victorv2i/hermes-agent-deck

**Why it matters:** GitHub activity around Hermes is already shifting from “chatbot” to operating surface: cloud/VPS agents, Telegram access, local-first dashboards, tmux sessions, skills, memory, and model choice. Hermes Agentdeck is especially relevant because it frames the missing UX layer: a browser cockpit where running agents and dev terminals can be picked up from another device.

**Practical use for Konrad:** Treat Hermes as the backend operator and Telegram as the command channel, but add a cockpit/dashboard for visibility. For Analog Hive/utllo, the valuable pattern is: one persistent agent per project, project memory, terminal access, scheduled briefs, and Telegram approvals.

**Setup angle:** Keep project-specific folders and recurring jobs explicit:

```bash
~/konrad-brain/projects/analog-hive.md
~/konrad-brain/projects/utllo.md
~/.hermes/profiles/default/cron/
```

Start with “brief → propose actions → ask approval → execute” instead of fully autonomous execution.

### 2. Telegram Bridge MCP gives agents two-way Telegram with approvals and voice
Source: https://github.com/electrified-cortex/Telegram-Bridge-MCP

**Why it matters:** This is one of the most directly useful pieces for Konrad’s setup. It exposes Telegram as an MCP server: send messages, ask questions, receive replies/voice notes, use inline confirmations, and run multiple concurrent sessions through one bot. It works with MCP-compatible hosts instead of locking into one agent vendor.

**Practical use for Konrad:** Use it as the approval layer for Hermes/Codex tasks: “I found 12 landing-page issues; approve fixing copy?” or “Codex made a PR; approve build/deploy?” Voice replies are useful while walking, shooting, or commuting.

**Useful pattern:**

```text
Agent task finishes → send Telegram summary → inline buttons: Approve / Revise / Cancel → only then run deploy, email, publish, or purchase step.
```

For small-business automation, this is the right safety model: autonomous research and drafting, human approval for irreversible actions.

### 3. Cashflow Agent shows a concrete Hermes + Stripe small-business loop
Source: https://github.com/getaskclaw/cashflow-agent

**Why it matters:** This is a strong practical example from the Hermes ecosystem: overdue invoice → read conversation history → draft personal follow-up → human approval → parse customer reply → schedule next check → escalate tone → stop when Stripe confirms payment.

**Practical use for Konrad:** The same loop maps to Analog Hive sales, sponsorships, client photo work, and utllo customer development. Replace invoices with any business object:

```text
Lead inactive → read previous thread → draft useful nudge → wait for approval → parse reply → update CRM/status → schedule next step.
```

For utllo, this could become a “relationship operator”: monitor signups, failed onboarding, unanswered feedback, stale trials, and draft human-sounding follow-ups.

### 4. “Engineer you manage from a group chat” is the Codex/Telegram model to copy
Source: https://niptao.com/blog/an-engineer-you-manage-from-a-group-chat/

**Why it matters:** This post describes a practical workflow where an AI coding agent is managed from a chat interface, connected to Linear/MCP, and used like a junior engineer: pick tickets, make changes, report status, and request input. HN also surfaced it recently, which suggests the pattern is resonating.

**Practical use for Konrad:** Create a Telegram group called `utllo-build-room` with Hermes/Codex updates. The agent should post short status updates, not giant logs:

```text
Task: Improve utllo onboarding empty state
Status: changed 3 files, build passed
Needs: approval to commit + push
Diff summary: copy, CTA, analytics event
```

This keeps Codex productive without requiring Konrad to sit in the terminal.

### 5. aharness: enforce agent workflows instead of trusting prompts
Source: https://github.com/Alfredvc/aharness

**Why it matters:** The repo’s premise is exactly the failure mode of long-running agents: they skip gates, forget recovery rules, claim evidence they did not produce, or continue from stale context. aharness turns workflow into a state machine for Codex: states define what the agent may do next; typed submissions prove what happened; transitions validate exits.

**Practical use for Konrad:** Use this idea even if not adopting the tool yet. Define “agent lanes” for risky workflows:

```yaml
research:
  exits: [sources_checked, summary_written]
build:
  requires: [issue_defined]
  exits: [tests_passed, diff_summarized]
publish:
  requires: [human_approved]
```

This is useful for content publishing, SEO edits, product deploys, and automated outreach.

### 6. MCP Notify is a useful monitoring primitive for the agent stack
Source: https://github.com/nirholas/mcp-notify

**Why it matters:** MCP is moving fast and discovery is messy. MCP Notify watches the official MCP Registry and sends updates through Discord, Slack, email, webhooks, and Telegram-style notification channels. It supports filtering by namespace, keywords, or server patterns.

**Practical use for Konrad:** Run a lightweight “integration scout” job: watch for MCP servers around Telegram, GitHub, Stripe, Webflow/Framer, Google Analytics/Search Console, Reddit, X, Notion/Obsidian, and email. Hermes can turn new integrations into a weekly “should we add this?” shortlist.

**First config idea:** filter for `telegram`, `stripe`, `github`, `search`, `analytics`, `browser`, `gmail`, `notion`, `linear`.

### 7. Selector Forge is a practical browser-automation helper for agents
Source: https://github.com/Intuned/selector-forge

**Why it matters:** Browser automation breaks when selectors are brittle. Selector Forge lets you pick elements and get AI-generated selectors that are re-tested against the live DOM before use. The important idea is the trust boundary: AI proposes, browser verifies.

**Practical use for Konrad:** For monitoring competitor sites, scraping inspiration, QA-ing landing pages, or automating repetitive web workflows, use verified selectors rather than letting an agent guess. This could help Hermes build robust monitoring jobs for Analog Hive inspiration, pricing pages, product launches, or content opportunities.

## Best idea of the day

Build a **Telegram approval cockpit for utllo and Analog Hive**: Hermes researches and drafts, Codex edits/builds, Telegram approves, then Hermes commits/publishes only after explicit confirmation.

Why this is the strongest idea: it combines leverage with safety. Konrad gets autonomy without handing irreversible actions to an agent blindly.

First step: create one workflow: “daily utllo growth operator.” It should check analytics/search/repo notes, propose 3 actions, and ask Telegram approval for exactly one execution.

## Things to try next

1. **Create project-specific Hermes commands** for `utllo`, `analog-hive`, and `content`: each command reads the relevant `~/konrad-brain/projects/*.md`, summarizes current context, and proposes next actions.

2. **Add an approval gate template** to every automation:

```text
I can do X. Risk: low/medium/high. Files/accounts touched: Y. Reply APPROVE to continue.
```

3. **Run one Codex-from-Telegram experiment:** pick a tiny issue, let Codex implement it, require build/test output, then have Hermes send a Telegram-ready diff summary.

## Notes on uncertainty

Several GitHub projects are very new, low-star, or hackathon-grade; treat them as patterns to learn from, not production dependencies yet. Telegram Bridge MCP and MCP Notify look directly actionable, but still need local security review before exposing bots or tokens. The Niptao post is useful as a workflow example, but verify implementation details before copying the stack. Hermes docs remain the source of truth for Hermes setup; forks may contain experimental patches that should not be assumed stable.
