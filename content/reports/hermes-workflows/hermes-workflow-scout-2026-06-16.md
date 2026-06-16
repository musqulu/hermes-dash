## Hermes workflow scout — 2026-06-16

Short verdict of the day: the strongest signal today is not a single viral Hermes post, but a cluster of public repos turning persistent agents into scheduled operating systems: Telegram delivery, cron, memory, skills, and profile separation. X/Twitter and general search were blocked by bot/CAPTCHA checks during this run, so I leaned on accessible GitHub repos, indexed repository metadata, and official Hermes docs. The best opportunities for Konrad are content-engine workflows that extract posts from real work, agentic SEO pipelines with hard quality gates, and sales/research agents with human approval before outreach.

## Top workflows / use cases

1. **Hermes daily “digital employees” pushed to Telegram**
   - Source: [GitHub / schbxg / Hermes Daily Automation](https://github.com/schbxg/hermes-daily-automation) — strong source: Hermes-specific repo with templates, screenshots, cron examples, and Telegram framing.
   - What it does: Runs a set of unattended daily jobs such as AI news, learning plans, interview prep, personal finance prompts, TTS listening practice, and a nightly self-review. The README says the system is intended to deliver results to Telegram every morning.
   - How to reproduce in Hermes: Use `hermes cron create` for each recurring brief, attach a self-contained prompt, enable Telegram via the Hermes gateway, and add reusable skills for each domain. For Konrad, replace generic “AI news” with “AI/design visibility scout”, “content repurposing ideas”, and “lead/source watchlist”.
   - Business potential: High for content ops and personal leverage: it turns scattered recurring research into a daily inbox of publishable ideas and decision prompts.
   - Risk/note: Requires good prompt caps and source discipline; otherwise it becomes a generic digest bot. Telegram setup and provider credentials must be reliable.

2. **Two-profile Hermes CEO/CTO automation stack**
   - Source: [GitHub / geraledesma / Hermes Agent Automations](https://github.com/geraledesma/hermes-agent-automations) — good architecture source: shows a multi-instance VPS setup with separate agents, Telegram bots, cron tables, and discovery scripts.
   - What it does: Runs two independent Hermes agents with different identities: a CEO-style planning/ops agent and a CTO-style technical/code-review agent. Each has its own Telegram gateway, schedules, scripts, and work domain.
   - How to reproduce in Hermes: Create separate Hermes profiles with `hermes profile create`, keep distinct configs and gateway credentials, and use profile-scoped cron jobs. Add one “Growth/Content” profile for market scanning and one “Builder/Technical” profile for repo audits, docs, and release-note extraction.
   - Business potential: Useful for agency/product builders because it separates strategic visibility work from technical execution. It can make recurring ops feel like a small team rather than one overloaded assistant.
   - Risk/note: Multiple gateway bots can conflict if credentials overlap. Keep profile isolation explicit and avoid cloning live bot tokens accidentally.

3. **B2B SDR agent with WhatsApp, Telegram, Email, memory, and cron**
   - Source: [GitHub / iPythoning / B2B SDR Agent Template](https://github.com/iPythoning/b2b-sdr-agent-template) — strong but OpenClaw-oriented source; includes a 10-stage sales pipeline, cron jobs, multi-channel messaging, and memory architecture.
   - What it does: Packages an open-source SDR template for B2B export businesses, with multi-channel sales workflows, conversation history, sales playbooks, and scheduled follow-ups.
   - How to reproduce in Hermes: Use Hermes profiles for “SDR”, “Researcher”, and “Closer” roles; use cron for lead list refresh and follow-up reminders; use Telegram/email gateway delivery for approvals; store company/playbook facts in skills or memory; connect CRM/Sheets through scripts or APIs.
   - Business potential: Very high for lead generation and sales ops. The most Hermes-native version would not auto-send at first; it would draft, score, and request human approval.
   - Risk/note: Cold outreach has deliverability, consent, and legal risks. Keep human-in-the-loop approval and log every source used for personalization.

4. **n8n lead-generation researcher with Tavily, scraper, Gemini, and Sheets**
   - Source: [GitHub / byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent) — decent implementation source: describes webhook input, Gemini orchestration, Tavily search, website scraping, and external sheet sync.
   - What it does: Accepts a company name/domain through a webhook, researches the company and tech stack, then writes structured prospecting notes and personalized outreach material.
   - How to reproduce in Hermes: Create a Hermes webhook or API-triggered workflow that accepts `company_name` and `website`, uses web/search plus a small scraping script, writes JSON results to Markdown/CSV/Sheets, and sends a Telegram approval card with suggested outreach.
   - Business potential: Strong for sales research and agency prospecting; saves manual account-research time and improves personalization quality.
   - Risk/note: Web scraping and enrichment can be brittle. Keep a confidence field and never claim facts not present in sources.

5. **Cold-lead reviver for stalled CRM deals**
   - Source: [GitHub / BuildWithPranav / day12_cold_lead_reviver](https://github.com/BuildWithPranav/day12_cold_lead_reviver) — strong architecture source: FastAPI trigger, HubSpot MCP, LangGraph checkpointing, PydanticAI draft schema, and human approval.
   - What it does: Finds stalled deals, pulls context from HubSpot, researches recent company signals, drafts a personalized check-in email, then pauses for human approval before sending.
   - How to reproduce in Hermes: Use a scheduled Hermes cron to query HubSpot or CRM exports, identify deals with no activity for N days, use web/search for recent signals, draft an email, and deliver it to Telegram/Slack for approve/deny. Store deal context in files or memory and keep an audit trail.
   - Business potential: High for sales recovery: it turns forgotten pipeline into warm reactivation tasks without risking blind automated sending.
   - Risk/note: Needs CRM credentials and strict approval gates. Personalization should cite internal CRM facts separately from public web facts.

6. **Agentic SEO/content operating system with constitutional quality gates**
   - Source: [GitHub / efraijo / operator-seo-skill](https://github.com/efraijo/operator-seo-skill) — strong conceptual source: 51 sub-skills, 11 categories, 26-article constitution, quality gates, drift monitoring, and repurposing/audio stages.
   - What it does: Defines a full SEO pipeline from competitive research and strategy to writing, audit, publishing, monitoring, repurposing, and audio narration. The standout idea is governance: critic and generator are separated, claims need citations, and low-quality content hard-fails.
   - How to reproduce in Hermes: Split the pipeline into Hermes skills: keyword scout, SERP/source collector, outline planner, writer, fact-checker, human-tone reviewer, publisher, and drift monitor. Use cron for weekly keyword/drift checks and Telegram for editorial approvals.
   - Business potential: Very high for Konrad’s AI/design visibility: it can create a repeatable content engine without sacrificing quality.
   - Risk/note: The pipeline is complex. Start with one narrow article type and a “do not publish automatically” rule.

7. **Blog Factory skill: keyword research → long-form post → human-tone cleanup → database insert**
   - Source: [GitHub / 8carroll / blog-factory-skill](https://github.com/8carroll/blog-factory-skill) — strong practical source: explicit pipeline, requirements, approval step, statistics policy, brand setup, and feature-branch review.
   - What it does: Takes a topic and runs SEO keyword research, generates a long-form article with real statistics, removes AI-writing patterns, creates a cover image, inserts into a blog database, and opens a branch for review.
   - How to reproduce in Hermes: Create a Hermes `blog-factory` skill backed by SerpAPI/Google Trends or another keyword source, web search for citations, file tools for Markdown drafts, image generation if enabled, and a git branch/PR review step. Use Hermes cron only for idea discovery; keep publishing manual.
   - Business potential: High for content marketing and SEO. It turns idea capture into a repeatable production line.
   - Risk/note: Requires APIs and strong fact-checking. The “real stats only” constraint is essential.

8. **Session-as-content engine for founders**
   - Source: [GitHub / ShayanSpiel / SpielEngine](https://github.com/ShayanSpiel/SpielEngine) — strong workflow source: explicit state machines for wiki ingestion and content publishing, with setup prompts and quality gates.
   - What it does: Converts real build/debug/design sessions into X, LinkedIn, and blog drafts. It has a “Wiki Loop” for knowledge capture and a “Content Loop” for strategy classification, drafting, gating, queueing, and publishing.
   - How to reproduce in Hermes: After each Hermes coding/design session, save session notes to a local folder, run a scheduled or manual Hermes job that extracts entities and decisions into a knowledge base, then drafts platform-specific posts. Use Telegram to select which draft to polish.
   - Business potential: Very high for Konrad because it creates content from actual work instead of requiring a separate content ritual.
   - Risk/note: Needs a clear positioning/ICP setup first. Without voice constraints, it can produce generic founder posts.

9. **Release-content cockpit from GitHub releases to PR-reviewed content packs**
   - Source: [GitHub / Nano-Collective / ContentForest](https://github.com/Nano-Collective/contentforest) — good source: public repo with GitHub Actions, release detection, templated prompts, validation, PR review, and Cloudflare Pages viewer.
   - What it does: A daily GitHub Action detects new releases across product repos, generates announcement posts and deep-dive articles, validates output, and opens a PR rather than posting automatically.
   - How to reproduce in Hermes: Use cron to watch GitHub releases/commits/issues for Konrad’s products, generate a Markdown “content pack” per release, save it to a dashboard folder, run validation, and create a PR or Telegram approval message.
   - Business potential: Strong for product marketing: every shipped feature becomes a structured launch asset.
   - Risk/note: The repo intentionally avoids auto-posting. Keep that pattern; human review is the value-preserving step.

10. **Always-on Telegram multi-agent platform with shared memory and nightly self-improvement**
   - Source: [GitHub / dream77r / My Claude Bot](https://github.com/dream77r/my-claude-bot) — useful adjacent-agent source: Telegram entrypoint, sandboxed workers, message bus, git-versioned wiki memory, skills, and “dream cycles”.
   - What it does: Runs a master Telegram agent that delegates to sandboxed workers, remembers through a wiki-like store, and performs overnight self-improvement analysis.
   - How to reproduce in Hermes: Use Hermes gateway for Telegram, profiles for worker identities, Kanban or task files for handoff, and nightly cron for “review today’s sessions, propose skill updates, and write a changelog”.
   - Business potential: Useful for long-running personal ops: content assistant, research assistant, and builder assistant can coordinate without mixing contexts.
   - Risk/note: Self-improvement should not auto-edit critical skills without review. Keep backups and require explicit approval for behavior changes.

11. **Interactive Claude/OpenClaw-style cron dispatcher pattern, portable to Hermes concepts**
   - Source: [GitHub / bradbushSFAI / Nolty](https://github.com/bradbushSFAI/nolty) — useful adjacent source: focuses on always-on sessions, Telegram, scheduled crons, tmux routing, and task sub-agents.
   - What it does: Keeps an interactive agent session alive, routes Telegram messages, and uses a cron runner to type commands into the live session instead of using non-interactive SDK calls.
   - How to reproduce in Hermes: Hermes already has durable cron and gateway features, so the direct adaptation is lighter: use native `hermes cron`, Telegram gateway, `/background` for longer work, and profiles/Kanban for agent separation. Borrow the operational idea of a health-checking always-on agent.
   - Business potential: Good for always-on monitoring where response continuity matters.
   - Risk/note: For Hermes, prefer native cron/gateway unless there is a specific need to drive an interactive tmux process.

12. **Affiliate/content skill pack for campaign research and optimization**
   - Source: [GitHub / Gingg7260 / affiliate-skills](https://github.com/Gingg7260/affiliate-skills) — source quality is moderate: repository metadata describes 45 AI skills for affiliate marketing; requires deeper inspection before adoption.
   - What it does: Packages affiliate-marketing tasks such as research, content, landing pages, tracking, and optimization into reusable skills.
   - How to reproduce in Hermes: Convert only the useful pieces into Hermes skills: offer research, competitor/ad angle scrape, landing-page brief, email sequence draft, and performance-review cron. Keep source links and compliance notes in every output.
   - Business potential: Medium to high if Konrad wants monetizable content funnels or productized marketing workflows.
   - Risk/note: Affiliate automation can drift into spam or thin content. Require review and avoid unsupported earnings claims.

## 3 workflows for Konrad to test

- **Session-as-content from real AI/design work**
  - Source: [GitHub / ShayanSpiel / SpielEngine](https://github.com/ShayanSpiel/SpielEngine)
  - First step: Create a local `work-sessions/` folder and save one build/design session summary after each meaningful work block.
  - Minimal setup: One Hermes skill that turns a session note into: X thread, LinkedIn post, short blog outline, and “what not to publish”. Add Telegram delivery for selection.
  - Success metric: 5 publishable drafts per week sourced from real work, with at least 2 posted manually.

- **Hermes release-to-content pack**
  - Source: [GitHub / Nano-Collective / ContentForest](https://github.com/Nano-Collective/contentforest)
  - First step: Pick one active repo/product and define a content-pack template: release summary, user benefit, technical note, X post, LinkedIn post, newsletter paragraph.
  - Minimal setup: Hermes cron checks GitHub activity twice a week, writes Markdown packs to a dashboard folder, and asks for Telegram approval.
  - Success metric: Every meaningful release produces one reviewed content pack within 24 hours.

- **CRM/cold-lead reviver with approval**
  - Source: [GitHub / BuildWithPranav / day12_cold_lead_reviver](https://github.com/BuildWithPranav/day12_cold_lead_reviver)
  - First step: Export a small list of stalled conversations or prospects to CSV with last contact date, context, and next desired outcome.
  - Minimal setup: Hermes cron reads the CSV weekly, researches fresh signals, drafts 3 follow-ups, and sends them to Telegram for approval only.
  - Success metric: 3 high-quality reactivation drafts per week and at least one restarted conversation per month.

## Setup notes / tutorial nuggets

- Hermes-native scheduling should use `hermes cron create`, not a custom scheduler unless there is a special reason. Official reference: [Hermes docs / Cron jobs](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron).
- Telegram, Slack, Email, Discord, and other delivery channels are first-class Hermes gateway targets. For workflows above, Telegram is the most practical approval surface. Official reference: [Hermes docs / Messaging platforms](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/).
- For separate “CEO/Growth” and “CTO/Builder” agents, use Hermes profiles rather than only changing personality text. Official reference: [Hermes docs / Profiles](https://hermes-agent.nousresearch.com/docs/user-guide/profiles).
- For repeatable content/research behavior, package the workflow as a Hermes skill instead of burying it inside one cron prompt. Official reference: [Hermes docs / Skills](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills).
- The Hermes Daily Automation repo shows the basic pattern: install Hermes, configure an LLM provider and Telegram, then create scheduled jobs from prompt files. Source: [GitHub / schbxg / Hermes Daily Automation](https://github.com/schbxg/hermes-daily-automation).
- The Blog Factory pattern is especially reusable: keyword research, source-backed writing, human-tone cleanup, asset generation, database insert, and branch review. Source: [GitHub / 8carroll / blog-factory-skill](https://github.com/8carroll/blog-factory-skill).
- The ContentForest pattern keeps automation safe by generating a PR/content pack rather than auto-posting. This is the right default for marketing workflows. Source: [GitHub / Nano-Collective / ContentForest](https://github.com/Nano-Collective/contentforest).
- For sales automation, copy the human-approval checkpoint from Cold Lead Reviver before sending anything externally. Source: [GitHub / BuildWithPranav / day12_cold_lead_reviver](https://github.com/BuildWithPranav/day12_cold_lead_reviver).
- For multi-agent setups, keep each worker’s writable area small and auditable. The My Claude Bot repo’s sandboxed worker pattern is a useful adjacent reference. Source: [GitHub / dream77r / My Claude Bot](https://github.com/dream77r/my-claude-bot).
- Search limitation today: Google and Bing returned bot/CAPTCHA checks, and DuckDuckGo Lite returned an anomaly challenge. I did not include any X/Reddit workflow without a direct accessible source link.

## Link dump

- [Hermes Daily Automation](https://github.com/schbxg/hermes-daily-automation) — Hermes-specific cron + Telegram templates for daily unattended briefings.
- [Hermes Agent Automations](https://github.com/geraledesma/hermes-agent-automations) — multi-profile CEO/CTO Hermes architecture on a VPS.
- [B2B SDR Agent Template](https://github.com/iPythoning/b2b-sdr-agent-template) — OpenClaw-style sales pipeline with cron, memory, Telegram/Email/WhatsApp concepts.
- [AI Lead Gen Agent](https://github.com/byg16/ai-lead-gen-agent) — n8n prospect research workflow using webhook input, Gemini, Tavily, scraper, and Sheets.
- [Cold Lead Reviver](https://github.com/BuildWithPranav/day12_cold_lead_reviver) — stalled CRM deal recovery with HubSpot MCP and human approval.
- [Operator SEO Skill](https://github.com/efraijo/operator-seo-skill) — deep agentic SEO/content pipeline with governance and quality gates.
- [Blog Factory Skill](https://github.com/8carroll/blog-factory-skill) — end-to-end SEO blog pipeline with fact checks, cleanup, images, and database insert.
- [SpielEngine](https://github.com/ShayanSpiel/SpielEngine) — session-as-content engine for turning build work into posts and articles.
- [ContentForest](https://github.com/Nano-Collective/contentforest) — release-to-content-pack workflow with validation and PR review.
- [My Claude Bot](https://github.com/dream77r/my-claude-bot) — Telegram multi-agent platform with sandboxed workers and wiki memory.
- [Nolty](https://github.com/bradbushSFAI/nolty) — always-on interactive agent, Telegram, cron dispatcher, and tmux routing pattern.
- [Hermes Cron docs](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron) — official source for reproducing scheduled Hermes workflows.
