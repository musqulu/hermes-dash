# Daily Hermes Agent Workflows — 2026-06-17

Coffee brief for Konrad: practical agent/operator workflows worth stealing for Hermes + Codex + Telegram.

## Top findings

### 1. Hermes Desktop + Hermes as a cloud/Telegram operator
Source: https://hermes-agent.nousresearch.com/desktop/ and https://github.com/NousResearch/hermes-agent

**Why it matters:** Hermes is positioning itself less like a local chatbot and more like a persistent operator: skills, memories, cron jobs, Telegram access, any-model support, and deployability on a VPS/serverless setup. The fresh HN trail also surfaced native Windows support and Desktop updates, which suggests the ecosystem is moving from “agent framework” toward everyday operator UX.

**Practical use for Konrad:** Treat Hermes as the always-on control plane for Analog Hive / utllo / content work, not just a coding helper. The useful pattern is: Telegram request → Hermes decomposes → Codex/CLI/tools execute → Hermes writes a short report back. Start with boring repeatable jobs: morning opportunity scan, SEO/page checks, issue triage, landing-page copy variants, product analytics summaries.

Useful setup direction:

```text
Create Hermes cron jobs for:
- daily market/reddit/HN scan for Analog Hive keywords
- weekly utllo SEO + competitor page audit
- daily GitHub issue/PR summary for active repos
- content idea queue from saved links + notes
```

### 2. `tg-agents-wrapper`: Telegram front-end for Claude Code + OpenAI Codex
Source: https://github.com/buildoak/tg-agents-wrapper

**Why it matters:** This is close to your target setup: a Telegram bot that can switch between Claude and Codex, supports voice input/output, batches rapid-fire messages into one prompt, tracks context, keeps session goals, persists sessions, and handles Codex resilience cases like retries and auth reloads.

**Practical use for Konrad:** Use it as a reference architecture even if Hermes remains the main agent. The best steal is the command vocabulary: `/engine`, `/goal`, `/context`, persistent session objectives, and batching. For a personal operator, `/goal` is especially good: “ship utllo landing page v2” can be injected into every future Telegram message until cleared.

Potential command pattern:

```text
/goal Grow utllo this week: improve SEO pages, publish 2 useful posts, collect 20 leads.
/context
/engine codex
Audit /Users/koni/Desktop/dev/utllo for the smallest conversion improvement we can ship today.
```

### 3. Circus Chief: phone-friendly control plane for coding agents
Source: https://github.com/ferrislucas/Circus-Chief

**Why it matters:** Circus Chief supports Claude Code, OpenAI Codex, and Gemini CLI from a touch-oriented UI. The interesting part is not “another agent UI”; it is the workflow primitives: Kanban cards that launch prompts, scheduled sessions, retry-on-limit, and chainable templates such as plan → review → implement → review.

**Practical use for Konrad:** Copy the pipeline concept into Hermes cron/skills. For product work, each task should have a lifecycle, not a single giant prompt. Example for Analog Hive:

```text
Template chain:
1. Research: find 10 examples / market signals
2. Synthesis: extract positioning + objections
3. Build: create/update page or asset
4. Review: critique against product/design goals
5. Publish/report: commit, deploy, and send Telegram summary
```

This makes agents easier to trust because each stage leaves an artifact.

### 4. Kai: Telegram agent that controls real local subprocesses
Source: https://github.com/dcellison/kai

**Why it matters:** Kai is an older-but-useful reference for the “Telegram is just the remote control” model. It manages persistent subprocesses on your machine, supports Claude Code by default, and can use Goose, OpenAI Codex CLI, or OpenCode. The README explicitly frames it as an agent with shell, filesystem, git, web search, scheduling, PR review, issue triage, and monitoring.

**Practical use for Konrad:** Use Kai’s boundary model for safety: the outer bot handles Telegram/auth/scheduling; the inner agent handles thinking/acting; users/workspaces can be isolated. This maps well to Hermes profiles or project-specific working directories.

Operational idea:

```text
One Telegram command per workspace:
- /analoghive → only Analog Hive files, docs, analytics, content queue
- /utllo → only utllo repo, SEO docs, issue tracker
- /personal → planning, calendar, reading, second brain
```

### 5. Agentic Workflow Kit: spec-first delivery for Claude Code + Codex
Source: https://github.com/aryeko/agentic-workflow-kit

**Why it matters:** Fresh repo, very relevant concept: one markdown tracker plus `.workflow/config.yaml` as a contract for both Claude Code and Codex. It is designed to keep delivery state out of chat transcripts and inside reviewable repo artifacts.

**Practical use for Konrad:** This is a strong pattern for small SaaS shipping. For utllo, create a simple tracker file that Hermes/Codex must update after every run: backlog, current story, dependencies, verification, next action. That prevents “context rot” and makes agent work auditable.

Commands shown by the project:

```text
/agentic-workflow-kit:workflow-init
/agentic-workflow-kit:define-product
/agentic-workflow-kit:plan-delivery-track
/agentic-workflow-kit:implement-next
```

Even without adopting the plugin, copy the artifact structure: `PRODUCT.md`, `DELIVERY_TRACK.md`, `.workflow/config.yaml`.

### 6. Earlywire MCP: marketing/growth signal source for assistants
Source: https://github.com/barisasaa/earlywire

**Why it matters:** Earlywire is a hosted MCP server for marketing, growth, analytics, paid media, and SEO signals. It exposes tools like `whats_new`, `search`, `topic_pulse`, `trending`, and `post_ideas`. No signup/key in the README.

**Practical use for Konrad:** Add it as a research input for daily content/product-growth jobs. Instead of generic web search, Hermes can ask for rising topics and sourced post angles, then turn them into Analog Hive/utllo content ideas.

Setup snippet from README:

```bash
claude mcp add --transport http earlywire https://earlywire.barisasa.com/mcp
```

Hermes equivalent depends on your MCP configuration, but the workflow is clear: daily MCP pull → rank for Analog Hive/utllo relevance → draft 3 post ideas → save to content backlog.

### 7. WordPress MCP + Hermes Tweet: distribution automation primitives
Sources: https://github.com/iamsamuelfraga/mcp-wordpress and https://github.com/Xquik-dev/hermes-tweet

**Why it matters:** These are practical “agent can publish/distribute” tools. WordPress MCP exposes posts/pages/media/SEO-style automation over REST. Hermes Tweet is a native Hermes plugin for X/Twitter automation through Xquik: search, account reads, tweet posting, replies, and list-style research.

**Practical use for Konrad:** This points to a complete content loop: Hermes researches a topic, drafts a post, creates/schedules it in WordPress or another CMS, then prepares X/Twitter distribution. For Analog Hive, that could become a weekly “AI-first product design signal” content machine.

Guardrail prompt:

```text
You may draft and schedule content, but do not publish or reply publicly without explicit approval. Always include: source links, proposed post, risk notes, and one recommended CTA.
```

## Best idea of the day

Build a Telegram-controlled “shipping board” for utllo using plain Markdown before adding more tools.

Why: the most repeated pattern across the strong sources is not a magical model; it is persistent state plus small repeatable workflows. A `DELIVERY_TRACK.md` file gives Hermes/Codex a shared memory that survives context resets, lets you inspect progress, and makes automation safe enough to run from Telegram.

First step:

```text
Create /Users/koni/Desktop/dev/utllo/DELIVERY_TRACK.md with:
- Current objective
- Backlog
- In progress
- Blocked
- Verification checklist
- Next agent-safe task
```

Then add a Hermes/Codex prompt: “Read DELIVERY_TRACK.md, choose the next agent-safe task, implement it, run checks, update the tracker, and report only the diff + next recommendation.”

## Things to try next

1. Add one Hermes Telegram command or reusable prompt for `/ship-utllo`: read the tracker, do one small task, run build/tests, update tracker, send summary.
2. Add Earlywire or a similar marketing MCP input to a daily cron: “find 3 growth/content angles relevant to AI-first product design, small SaaS, or personal automation.”
3. Prototype a content distribution approval flow: Hermes drafts post + X thread + CTA, saves it as Markdown, and waits for explicit approval before publishing.

## Notes on uncertainty

Some GitHub projects found today are very fresh, low-star, or experimental. Treat them as workflow references before trusting them in production. Earlywire is promotional but practical and easy to test. Hermes Tweet touches public social posting, so use approval gates. Circus Chief/Kai/tg-agents-wrapper overlap with Hermes rather than replace it; the value is in borrowing their command patterns, session design, and workflow primitives.
