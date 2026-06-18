## Hermes workflow scout — 2026-06-18

Short verdict of the day: the strongest repeatable pattern today is not “one clever chatbot,” but scheduled agent systems that turn a lead/source list into structured research, drafts, and reviewable actions. X/Twitter, Reddit, Google, Bing, and Brave were either blocked or weak from this cron environment, so I weighted accessible GitHub repos, READMEs, official Hermes docs, and search/API snippets more heavily. The most useful business workflows for Konrad are: SDR research + cold outreach drafting, SEO/content pipeline generation, and a Telegram-controlled operator with cron + memory + scoped agents.

## Top workflows / use cases

1. **10-cron B2B SDR agent for export sales**
   - Source: [GitHub / iPythoning / B2B SDR Agent Template](https://github.com/iPythoning/b2b-sdr-agent-template) — strong source: open repo, detailed README, explicit channels and cron architecture; promotional claims should still be verified before relying on them.
   - What it does: Turns a B2B export business into a persistent sales assistant across WhatsApp, Email, and Telegram. The repo describes a 10-stage sales pipeline, 10 cron jobs, multi-channel outreach, and multiple memory engines.
   - How to recreate in Hermes: Create a dedicated `sales-scout` profile, add skills for ICP rules and offer positioning, run `hermes cron` jobs for daily prospect sourcing, enrichment, follow-up drafting, and weekly pipeline review, then deliver short review bundles to Telegram. Use Google Sheets or a CRM as the canonical lead table; Hermes should draft and score, not blindly send.
   - Business potential: Directly relevant to lead generation and agency/product sales. It can reduce manual prospect research and produce daily outreach batches for Konrad to approve.
   - Risk / note: Deliverability and legal compliance are the hard parts. Keep human approval before sending emails or WhatsApp messages, and log sources for every personalization claim.

2. **n8n deep company research + hyper-personalized outreach generator**
   - Source: [GitHub / byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent) — good source: README shows webhook payloads, Tavily/web scraping, Gemini, and data sync; low stars, so treat it as a blueprint rather than a proven product.
   - What it does: Receives a company name and domain via webhook, researches the company, analyzes product launches/value proposition/tech stack, and generates personalized cold outreach content.
   - How to recreate in Hermes: Use a Hermes webhook or API-server route as the intake, then have Hermes call web/search/browser tools, write a JSON prospect dossier, and draft an email. Add a cron job for “process unreviewed leads every morning” and a Telegram delivery that includes the draft, evidence links, and approval buttons if gateway tooling supports them.
   - Business potential: Strong fit for sales, partnerships, and high-signal cold email. The useful productizable angle is “evidence-backed personalization at low volume,” not spam at scale.
   - Risk / note: Requires Tavily/SerpApi or equivalent search APIs, robust scraping fallbacks, and strict source attribution to avoid hallucinated personalization.

3. **Google Jobs / SerpApi scheduled lead-list scraper**
   - Source: [GitHub / SmritiJadon / agentic_ai_automated_job_list](https://github.com/SmritiJadon/agentic_ai_automated_job_list) — good operational snippet: README names Schedule Trigger, SerpApi, Gemini, and Google Sheets.
   - What it does: Runs on a schedule, fetches Google Jobs listings through SerpApi, processes each result with Gemini, and appends structured rows to Google Sheets.
   - How to recreate in Hermes: Replace the n8n Schedule Trigger with `hermes cron create`, use a deterministic script or API call for SerpApi collection, then pass compact candidate JSON to Hermes for scoring. Save results to a CSV/Sheet and send Telegram only when the score crosses a threshold.
   - Business potential: Useful beyond jobs: agency leads, companies hiring for AI/design roles, competitor hiring signals, and market research for product positioning.
   - Risk / note: SerpApi quota and query quality matter. Avoid making the model browse randomly; collect deterministically first, rank second.

4. **CrewAI-style full content pipeline for market research, calendar, posts, reels, blogs, and SEO drafts**
   - Source: [GitHub / kushalsamani / social-media-ai-agent](https://github.com/kushalsamani/social-media-ai-agent) — solid source: README lists exact outputs, project files, Serper/search, scraping, Pydantic models, and Markdown rendering.
   - What it does: Runs a sequential marketing crew that creates market research, strategy, a 30-day content calendar, social post drafts, reel scripts, blog notes, blog drafts, and SEO-optimized JSON outputs that can be rendered to Markdown.
   - How to recreate in Hermes: Make a `content-ops` skill with Konrad’s voice, product context, and banned claims. Use Hermes cron for weekly research, then separate subagents or profiles for strategy, posts, long-form drafts, and editor review. Save generated drafts to `content/` as Markdown and deliver a Telegram “approve/edit/reject” summary.
   - Business potential: High for visibility in AI/design, SEO compounding, and repeatable agency deliverables. The Markdown render step is especially useful because it creates reviewable artifacts instead of ephemeral chat output.
   - Risk / note: Needs editorial review. The danger is publishing generic content; require specific source links, examples, and original opinion before a draft can ship.

5. **SEO blog automation with trend discovery, metadata, image prompts, and publishing**
   - Source: [GitHub / vrajsavliya / ai-blog-writer-agent](https://github.com/vrajsavliya/ai-blog-writer-agent) — medium source: repo description is clear, but README detail is thin; treat as inspiration, not implementation proof.
   - What it does: Describes a blog automation platform using Flutter, Firebase, Grok AI, and Tavily Search to discover trending topics, perform SEO research, generate AdSense-friendly articles, create metadata/image prompts, and automate publishing.
   - How to recreate in Hermes: Use Hermes as the backend operator: a daily/weekly cron gathers candidate topics, checks search intent and existing posts, drafts a brief, then writes Markdown to a blog repo. Add a required “evidence + angle + internal links” checklist before publishing.
   - Business potential: Relevant to SEO, content ops, and product-led visibility. The monetization angle is repeatable niche content systems for Konrad’s products or clients.
   - Risk / note: “AdSense-friendly” can become low-quality content. Keep the workflow focused on expert briefs, comparisons, tutorials, and original product/design insights.

6. **Telegram-controlled multi-agent operator with memory, workers, and overnight self-improvement**
   - Source: [GitHub / dream77r / My Claude Bot](https://github.com/dream77r/my-claude-bot) — strong architectural source: README describes Telegram groups/DMs/topics, worker isolation, shared message bus, git-versioned wiki memory, voice/file handling, marketplace skills, and unattended VPS operation.
   - What it does: Runs a Telegram-first agent fleet with a master orchestrator, sandboxed workers, memory, skills, and background “Dream” cycles that improve skills/schema overnight.
   - How to recreate in Hermes: Use Hermes Gateway Telegram, profiles for isolated personas/workers, skills for reusable procedures, cron for nightly reflection, and Kanban for durable multi-agent work queues. Keep workers scoped to project folders and tool allowlists.
   - Business potential: Excellent for personal operator workflows: inbox triage, research scouts, product build coordination, content planning, and daily executive briefs.
   - Risk / note: Permissions and privacy. The “master can create workers” pattern is powerful, but workers must not get unrestricted file/account access by default.

7. **Always-on Claude Code / OpenClaw-style cron dispatcher as a migration pattern for Hermes**
   - Source: [GitHub / bradbushSFAI / Nolty](https://github.com/bradbushSFAI/nolty) — good source for pattern language: README explicitly names Telegram listener, 15-minute cron dispatcher, Task subagents, browser-driven crons, and self-healing.
   - What it does: Packages an always-on interactive coding-agent stack: Telegram control, scheduled background jobs, memory, web crons, and task dispatching to subagents.
   - How to recreate in Hermes: Hermes already has native cron, gateway, profiles, toolsets, and sessions. The transferable pattern is the dispatcher loop: a small cron checks a queue every 15 minutes, claims ready tasks, spawns scoped workers, and reports status to Telegram.
   - Business potential: Strong operations layer for solopreneur work: daily report generation, repo maintenance, analytics checks, and follow-up reminders without manual prompting.
   - Risk / note: Avoid letting the dispatcher mutate repos or send external messages without explicit task type approvals.

8. **PocketBase-style multi-agent management plane with shared memory, heartbeat, and lessons ledger**
   - Source: [GitHub / UrsushoribilisMusic / agentic-fleet-hub](https://github.com/UrsushoribilisMusic/agentic-fleet-hub) — strong architecture source: README names task scratchpad, structured evolutionary memory, management hub, heartbeat scheduling, and vault-first secrets.
   - What it does: Provides a centralized management plane for multiple AI agents, with mission control, task state, memory trees, lessons learned, and agent health/standup monitoring.
   - How to recreate in Hermes: Use Hermes Kanban as the task board, profile-specific workers as the fleet, a Markdown/SQLite memory ledger for “lessons,” and cron heartbeat checks. For a dashboard, read Hermes report Markdown and board state rather than inventing a separate control plane.
   - Business potential: Useful when Konrad has multiple products or client workflows running at once. It makes agent work auditable and reduces “what is my agent doing?” anxiety.
   - Risk / note: Management planes can become overbuilt. Start with a simple board, task comments, artifacts, and daily standup; add dashboards only after repeated pain.

9. **Schema-aware backend CLI so agents stop hallucinating database writes**
   - Source: [GitHub / ambirex / skeem](https://github.com/ambirex/skeem) — strong source: README includes concrete `npx skeem` commands, JSON envelopes, backend adapters, `SKILL.md`, and tool-definition generation.
   - What it does: Gives agents a CLI for inspecting and writing to headless backends such as PocketBase, Directus, NocoDB, Strapi, and reference datasets with schema-aware operations and enrichment.
   - How to recreate in Hermes: Install `skeem` or build an equivalent Hermes skill/tool wrapper for PocketBase/NocoDB. Let Hermes inspect schema before writing leads, content briefs, CRM records, or product data. Use JSON envelopes and idempotency keys for every write.
   - Business potential: Very useful for CRM/content/product operations where agents need to update structured records. It lowers the risk of broken schemas and missing fields.
   - Risk / note: Still needs credentials and write scopes. Default to read/validate first, then human-approved writes for production systems.

10. **Multimodal e-commerce listing generator for product titles, attributes, descriptions, and SEO keywords**
   - Source: [GitHub / TN108 / Multimodal AI E-commerce Intelligence & Automation Agent](https://github.com/TN108/Multimodal-AI-E-commerce-Intelligence-Automation-Agent) — medium source: early MVP README, but the flow is concrete and easy to port.
   - What it does: Upload product image → model analyzes image → returns listing JSON with title, category, attributes, description, and SEO keywords.
   - How to recreate in Hermes: Use a Hermes workflow with vision/image analysis, a product-listing skill, and a file/CSV output. For marketplaces or client work, add browser/API publishing only after a review step.
   - Business potential: Strong for e-commerce ops, marketplace agencies, and product catalog cleanup. Saves repetitive listing work and can standardize SEO metadata.
   - Risk / note: Vision models can misread product details. Require seller-provided facts for materials, dimensions, compliance, and availability.

## 3 workflows for Konrad to test

- **Evidence-backed lead research + cold email drafting**
  - Source: [GitHub / byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent) and [GitHub / iPythoning / B2B SDR Agent Template](https://github.com/iPythoning/b2b-sdr-agent-template).
  - First step: Create a 20-company target list for AI/design/productized-service prospects and define 5 disqualifiers.
  - Minimal setup: Hermes cron once per morning, web/search toolset, a `sales-research` skill, Google Sheet/CSV output, Telegram delivery with “draft only” rule.
  - Success metric: 10 reviewed prospect dossiers per week with at least 3 emails that Konrad would actually send after editing.

- **Weekly AI/design visibility content pipeline**
  - Source: [GitHub / kushalsamani / social-media-ai-agent](https://github.com/kushalsamani/social-media-ai-agent).
  - First step: Pick one public theme, e.g. “AI interfaces that feel calm and operator-grade,” and collect 10 source links.
  - Minimal setup: Hermes weekly cron, `content-ops` skill with Konrad’s voice, Markdown output folder, and Telegram summary with 3 draft hooks + 1 long-form outline.
  - Success metric: One published post or essay per week, with every claim tied to sources and one original design/product opinion.

- **Telegram personal operator with scoped workers and daily standup**
  - Source: [GitHub / dream77r / My Claude Bot](https://github.com/dream77r/my-claude-bot), [GitHub / bradbushSFAI / Nolty](https://github.com/bradbushSFAI/nolty), and [Hermes Agent cron docs](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron).
  - First step: Create three recurring tasks only: morning priorities, evening shipped/blocked recap, and weekly content opportunity scout.
  - Minimal setup: Hermes Gateway Telegram, cron jobs, one default profile plus optional project profiles, Markdown report saving, and no autonomous external sending.
  - Success metric: Konrad receives useful daily briefs for 7 days without needing to manually remind the agent or clean up broken artifacts.

## Setup notes / tutorial nuggets

- Hermes-native recurring briefs should use `hermes cron create`, `hermes cron list`, and `hermes cron run` rather than ad-hoc shell loops. Official source: [Hermes Agent cron docs](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron).
- For messaging delivery, Hermes supports Gateway platforms including Telegram, Slack, Discord, WhatsApp, Email, Matrix, and webhooks. Official source: [Hermes messaging docs](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/).
- For reusable agent procedures, package prompts/checklists as Hermes skills and load them in cron prompts because cron sessions are self-contained. Official source: [Hermes skills catalog/reference](https://hermes-agent.nousresearch.com/docs/reference/skills-catalog).
- The n8n job-scraper blueprint uses a deterministic collector first: Schedule Trigger → SerpApi Google Jobs → Gemini processing → Google Sheets. Source: [GitHub / SmritiJadon / agentic_ai_automated_job_list](https://github.com/SmritiJadon/agentic_ai_automated_job_list).
- The deep lead-research blueprint uses webhook intake with a compact JSON payload such as company name and website, then Tavily/search plus scraper enrichment. Source: [GitHub / byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent).
- The content-ops repo separates generation from rendering: structured JSON drafts are written first, then converted to Markdown for review/publishing. Source: [GitHub / kushalsamani / social-media-ai-agent](https://github.com/kushalsamani/social-media-ai-agent).
- For backend writes, prefer schema-aware commands and JSON envelopes. The `skeem` README shows `npx skeem get items Q42 --adapter wikidata --url https://www.wikidata.org --json` and schema-aware create/enrich flows. Source: [GitHub / ambirex / skeem](https://github.com/ambirex/skeem).
- For always-on agents, copy the safety shape, not necessarily the stack: scoped workers, queue/dispatcher, heartbeat, memory, and explicit approval for public/account-affecting actions. Sources: [GitHub / dream77r / My Claude Bot](https://github.com/dream77r/my-claude-bot) and [GitHub / bradbushSFAI / Nolty](https://github.com/bradbushSFAI/nolty).
- X/Twitter and Reddit were not reliable from this cron run: Reddit returned HTTP 403, Google showed bot-detection, Bing showed a Cloudflare challenge, and Brave showed a CAPTCHA. I therefore did not include any unsourced X/Reddit claims.

## Link dump

- [B2B SDR Agent Template](https://github.com/iPythoning/b2b-sdr-agent-template) — best source today for a sales-agent architecture with cron, memory, and multi-channel outreach.
- [ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent) — useful n8n-style webhook → research → personalized outreach blueprint.
- [agentic_ai_automated_job_list](https://github.com/SmritiJadon/agentic_ai_automated_job_list) — clean deterministic collector pattern using schedule, SerpApi, Gemini, and Google Sheets.
- [social-media-ai-agent](https://github.com/kushalsamani/social-media-ai-agent) — practical multi-step marketing/content pipeline with structured outputs and Markdown rendering.
- [ai-blog-writer-agent](https://github.com/vrajsavliya/ai-blog-writer-agent) — lightweight inspiration for SEO blog automation with trend/search inputs.
- [My Claude Bot](https://github.com/dream77r/my-claude-bot) — strong Telegram-first multi-agent operator architecture.
- [Nolty](https://github.com/bradbushSFAI/nolty) — useful always-on cron dispatcher and Telegram listener pattern for coding agents.
- [agentic-fleet-hub / Flotilla](https://github.com/UrsushoribilisMusic/agentic-fleet-hub) — management-plane pattern for multi-agent state, heartbeat, memory, and lessons.
- [skeem](https://github.com/ambirex/skeem) — schema-aware backend CLI pattern for safer agent database writes.
- [Multimodal AI E-commerce Intelligence & Automation Agent](https://github.com/TN108/Multimodal-AI-E-commerce-Intelligence-Automation-Agent) — product-listing automation pattern using image analysis and listing JSON.
- [Hermes Agent cron docs](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron) — source of truth for recurring Hermes jobs.
- [Hermes Agent messaging docs](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/) — source of truth for Telegram/gateway delivery patterns.
