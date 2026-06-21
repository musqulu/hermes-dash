# Weekly Hermes Workflow Ratings — 2026-06-21

## Executive take

- The strongest signal this week is not “install more tools”; it is a **phone-first Hermes operator loop**: Telegram captures intent, Hermes plans/remembers/schedules, Codex or another repo agent executes bounded work, and Telegram gets a verified summary.
- The most practical next experiment is a **Codex task-brief template + `/ship` workflow** for one repo. This directly reduces agent chaos and Codex usage waste.
- The best business/visibility workflow is a **weekly AI/design visibility CMO**: source-backed topic research, LinkedIn/X drafts, blog outline, and approval queue.
- Lead-gen/outreach ideas appeared repeatedly and have business value, but they should stay **draft-only** until deliverability, consent, opt-out, and offer quality are validated.
- Skip most “multi-agent platform” repos for now. Steal operating patterns from them, but avoid adding heavy infrastructure before the basic Hermes workflows are stable.

## Top 3 to try this week

### 1. Telegram → Hermes → Codex shipping loop

- Candidate: Phone-first product operator loop for one repo, starting with `/ship <small task>`.
- Score + label: **92 — Try now**
- Why it matters: This converts quick Telegram thoughts into bounded, testable product work without letting agents roam. It matches the strongest repeated pattern across the reports: Telegram capture, Hermes planning/state, Codex repo execution, verification, concise Telegram result.
- Exact 30-60 minute test: Create a `codex-task-brief.md` template in `~/konrad-brain` or one repo with fields: goal, repo, constraints, files to inspect, acceptance checks, build/test command, final report format. Ask Hermes to produce one Codex-ready brief for a tiny `hermes-dash`, utllo, or Analog Hive task. Do not auto-run Codex yet; review the brief quality first.
- Success signal: The brief is specific enough that a coding agent can execute without asking follow-up questions, and it includes a real verification command.
- Source links:
  - [Hermes docs / MCP](https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp)
  - [Hermes docs / Messaging](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/)
  - [OpenAI Codex](https://github.com/openai/codex)
  - [Circus Chief](https://github.com/ferrislucas/Circus-Chief)
  - [Kai](https://github.com/dcellison/kai)
  - [Agentic Workflow Kit](https://github.com/aryeko/agentic-workflow-kit)
- Risks / caveats: Codex usage economics may be volatile; keep Hermes as planner/context compressor and use Codex only for bounded implementation.

### 2. Weekly AI/design visibility CMO

- Candidate: Hermes-native weekly content/reputation workflow for Konrad’s AI design/product-building visibility.
- Score + label: **88 — Try now**
- Why it matters: This directly supports Konrad’s goal of becoming visible in AI design and product-building. It turns research noise into a weekly output pack: topic map, post drafts, blog/newsletter outline, and outreach angle.
- Exact 30-60 minute test: Create one Monday cron that produces: 3 source-backed LinkedIn/X post drafts, one long-form outline, one “do not publish this” note, and one suggested proof/example from real work. Save drafts as Markdown; Telegram only asks for approve/revise/discard.
- Success signal: At least two drafts feel publishable after light editing, and each claim has a source or personal proof point.
- Source links:
  - [Kai Marketing OS](https://github.com/cgallic/kai-cmo-harness)
  - [Reputation Engine](https://github.com/sinabarimd/reputation-engine)
  - [How I Built a Personal Reputation Engine with AI Agents](https://sinabarimd.com/articles/how-i-built-a-personal-reputation-engine.html)
  - [Ai-Marketting-Agent](https://github.com/kkrishna08/Ai-Marketting-Agent)
  - [ai-marketing-automation-agent](https://github.com/AdityaWanddhekr/ai-marketing-automation-agent)
- Risks / caveats: Easy to become thin AI-content spam. Require editorial review, factual checking, and a differentiated Konrad POV.

### 3. Draft-only lead research + outreach review queue

- Candidate: Evidence-backed lead dossiers and cold-email drafts with Telegram approval.
- Score + label: **80 — Worth a quick spike**
- Why it matters: This could support productized AI/design services, Analog Hive partnerships, or consulting-style offers. Multiple reports surfaced similar pipelines, and the useful pattern is a review queue — not automated sending.
- Exact 30-60 minute test: Define one offer, e.g. “AI product landing-page teardown for design-led SaaS.” Manually seed 20 companies. Have Hermes create 10 lead dossiers with evidence, disqualifiers, and draft outreach. Gmail sending remains disabled.
- Success signal: At least 5 drafts are good enough that Konrad would consider editing/sending manually, and each personalization claim has a source.
- Source links:
  - [Nadeer00 / Agentic AI Marketing Workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow)
  - [byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent)
  - [B2B SDR Agent Template](https://github.com/iPythoning/b2b-sdr-agent-template)
  - [AI Sales Pipeline Bot](https://github.com/Najeem47/ai-sales-pipeline-bot)
- Risks / caveats: Compliance, deliverability, sender reputation, and quality control are the real blockers. Do not auto-send.

## Full ranked shortlist

### 1. Telegram → Hermes → Codex shipping loop — 92 — Try now

- Why it is useful: Turns messy phone input into bounded product tasks and verified code/content artifacts.
- What to do next: Create the Codex task-brief template and test it on one tiny repo task.
- Source links: [Hermes MCP](https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp), [Hermes Messaging](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/), [OpenAI Codex](https://github.com/openai/codex), [Circus Chief](https://github.com/ferrislucas/Circus-Chief), [Kai](https://github.com/dcellison/kai), [Agentic Workflow Kit](https://github.com/aryeko/agentic-workflow-kit)

### 2. Weekly AI/design visibility CMO — 88 — Try now

- Why it is useful: Supports Konrad’s public positioning with recurring, source-backed content ideas and drafts.
- What to do next: Create one weekly cron that outputs 3 posts, 1 long-form outline, 1 outreach angle, and an approval queue.
- Source links: [Kai Marketing OS](https://github.com/cgallic/kai-cmo-harness), [Reputation Engine](https://github.com/sinabarimd/reputation-engine), [Reputation Engine article](https://sinabarimd.com/articles/how-i-built-a-personal-reputation-engine.html)

### 3. Draft-only lead research + outreach review queue — 80 — Worth a quick spike

- Why it is useful: Could create business development leverage, but only if the offer and quality bar are sharp.
- What to do next: Build 10 evidence-backed lead dossiers from a manually seeded list; disable sending.
- Source links: [Agentic AI Marketing Workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow), [ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent), [B2B SDR Agent Template](https://github.com/iPythoning/b2b-sdr-agent-template)

### 4. Telegram operator inbox: `/capture`, `/brief`, `/research`, `/ship`, `/watch` — 78 — Worth a quick spike

- Why it is useful: Provides a clear command vocabulary for turning Telegram into an operator UI instead of a chat dump.
- What to do next: Implement only `/capture` and `/brief` first; write to Markdown, classify nightly, and avoid action-taking until the inbox is reliable.
- Source links: [Lilo](https://github.com/abi/lilo), [Super-agent](https://github.com/FedericoCasarella/super-agent), [Hermes Messaging](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/)

### 5. Repo-local agent manuals / onboarding files — 75 — Worth a quick spike

- Why it is useful: Reduces coding-agent amnesia and makes Hermes/Codex work auditable per project.
- What to do next: Generate one `AGENTS.md` or `CLAUDE.md`-style repo manual for `hermes-dash` or Market Scout with commands, boundaries, risks, and acceptance checks.
- Source links: [Agent Smith](https://github.com/gunesbizim/agent-smith), [Engram](https://github.com/the-long-ride/engram), [Agentic Workflow Kit](https://github.com/aryeko/agentic-workflow-kit)

### 6. Hermes Atlas / weekly integration scout — 70 — Worth a quick spike

- Why it is useful: Tool sprawl is real; a weekly curated source beats random GitHub searching.
- What to do next: Add Atlas as a source to this weekly rating workflow once its data quality is confirmed.
- Source links: [Hermes Atlas repo](https://github.com/ksimback/hermes-ecosystem), [Hermes Atlas](https://hermesatlas.com)

### 7. Safe Telegram MCP patterns — 68 — Watch / maybe later

- Why it is useful: Reading/searching Telegram context could help agents use saved links and project chats, but account automation risk is higher than bot-based workflows.
- What to do next: Adopt the safety posture first: read/search/draft by default; explicit approval for send/delete/edit.
- Source links: [telegram-plugin](https://github.com/speech115/telegram-plugin), [mcp-tg](https://github.com/lexfrei/mcp-tg)

### 8. Status/preflight MCP before debugging — 64 — Watch / maybe later

- Why it is useful: Agents should check vendor status before blaming local code, especially for GitHub, Vercel, Stripe, OpenAI, Cloudflare, Sentry.
- What to do next: Add a manual debugging checklist first; only add an MCP if this becomes frequent.
- Source links: [StatusCraft](https://github.com/jabbawocky/statuscraft)

### 9. Cloud Hermes deployment reference — 62 — Watch / maybe later

- Why it is useful: Cloud reachability from phone is useful, but the current local Telegram gateway already works.
- What to do next: Test only in a non-critical environment; decide persistence, memory, secrets, and allowed users first.
- Source links: [hermes-on-railway](https://github.com/indrad3v4/hermes-on-railway), [Lilo](https://github.com/abi/lilo)

### 10. OmniMCP / broad SaaS action layer — 58 — Watch / maybe later

- Why it is useful: Could reduce integration yak-shaving for Gmail, Calendar, GitHub, Notion, Linear, etc.
- What to do next: Use read-only first and only for one specific workflow; do not give broad write access to a personal operator.
- Source links: [OmniMCP](https://github.com/arcadeai-labs/omnimcp)

## Skips and watchlist

- Heavy multi-agent production platforms such as Phleet are interesting architecture references, but too much infrastructure for Konrad’s immediate needs.
- Generic AI blog/content generators are mostly redundant unless they are tied to Konrad’s real work sessions and POV.
- Automated cold email senders should stay disabled until legal, consent, opt-out, sender reputation, and offer quality are handled.
- Broad Telegram user-account automation should be treated as higher-risk than bot workflows.
- “Digital employee” daily digest repos are useful as prompt inspiration, but the current problem is already too much output; ranking and action selection matter more.
- WordPress/Twitter publishing automation should wait until the approval queue and editorial style are reliable.

## Method notes

Reviewed current daily and workflow scout reports visible in:

- `/Users/koni/Desktop/hermes/usecases/`
- `/Users/koni/Desktop/dev/hermes-dash/content/reports/hermes-workflows/`

Files reviewed:

- `daily-hermes-agent-workflows-2026-06-16.md`
- `daily-hermes-agent-workflows-2026-06-17.md`
- `daily-hermes-agent-workflows-2026-06-18.md`
- `daily-hermes-agent-workflows-2026-06-19.md`
- `daily-hermes-agent-workflows-2026-06-20.md`
- `daily-hermes-agent-workflows-2026-06-21.md`
- `hermes-workflow-scout-2026-06-15.md`
- `hermes-workflow-scout-2026-06-16.md`
- `hermes-workflow-scout-2026-06-17.md`
- `hermes-workflow-scout-2026-06-18.md`
- `hermes-workflow-scout-2026-06-19.md`
- `hermes-workflow-scout-2026-06-20.md`
- `hermes-workflow-scout-2026-06-21.md`

Uncertainty:

- Some daily reports did not expose every source link in the heading extraction pass, so this report favors candidates with repeated appearances and explicit source links in the available Markdown.
- Scores are judgment calls based on fit, tryability, leverage, novelty, evidence, and distraction risk; they should be recalibrated after one or two real experiments.
