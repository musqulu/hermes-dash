## Hermes workflow scout — 2026-06-21

Short verdict of the day: today’s best reusable pattern is an operator-grade “agent office”: cron/webhook collection first, structured storage second, and AI only for ranking, personalization, drafting, or review. X/Twitter, Reddit, and Google search were not reliable from this cron environment today: Google returned a bot-detection page, Reddit JSON returned HTTP 403, and open search results were degraded. I therefore filtered hard around accessible public GitHub repos, official Hermes docs, and reproducible setup notes rather than social hype.

## Top workflows / use cases

1. **Approval-gated B2B lead generation and outreach loop**
   - Source: [GitHub / Nadeer00 / Agentic AI Marketing Workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow) — strong practical source: README names the exact stack, credentials, Docker flow, Google Sheets/Gmail nodes, and human approval step.
   - What it does: Scrapes Google through Serper.dev for companies in a chosen industry/city, verifies emails with Hunter.io, pauses for manual lead approval, generates personalized outreach with Groq/Llama, sends via Gmail, stores rows in Google Sheets, and drafts LinkedIn posts around the campaign.
   - How to reproduce in Hermes: Use a Hermes webhook or cron to collect target companies, a `lead-dossier` skill for scoring and personalization, Google Sheets or a local Markdown/CSV lead board for state, Telegram for approve/reject, and Gmail/CRM only after approval. Hermes components: `cron`, `web`, `file`, `skills`, Telegram gateway, and optionally a Google Workspace integration script.
   - Business potential: Directly useful for productized services such as AI/design audit, conversion teardown, landing-page critique, or workflow automation assessment. It turns prospecting from blank-page work into a review queue.
   - Risk/note: Requires Serper, Hunter, Groq, Google OAuth, and Gmail deliverability care. Do not auto-send until consent/legal basis, opt-out, dedupe, and sender reputation are validated.

2. **Webhook-driven company research and personalized cold-email draft generator**
   - Source: [GitHub / byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent) — useful architecture source: describes an n8n webhook, Gemini orchestration, Tavily search, website scraping, and structured data sync.
   - What it does: Accepts a company name/domain payload, researches value proposition, product launches, and tech stack, then produces personalized outreach content for a target account.
   - How to reproduce in Hermes: Create a Hermes webhook route such as `/webhooks/new-lead`, save the payload to `leads/inbox/*.json`, run web extraction against the company site plus 2–3 search queries, produce a dossier and first-email draft, then send the review packet to Telegram. Use a skill with a strict rubric: ICP fit, trigger, evidence, offer angle, personalization proof, and do-not-contact risks.
   - Business potential: High for agency sales and high-ticket consulting because it compresses account research while preserving evidence for manual review.
   - Risk/note: Tavily/search API costs and scraping blocks need caps. Personalization should quote concrete public evidence; otherwise the agent will invent relevance.

3. **Multi-agent marketing command center with content, SEO, campaigns, outreach, and analytics roles**
   - Source: [GitHub / OpenAnalystInc / 10x-Team](https://github.com/OpenAnalystInc/10x-Team) — broad but concrete source: describes 27 agents, 73+ commands, 28+ skills, 8 MCP integrations, campaign/content/sales/SEO workflows, and usage examples.
   - What it does: Packages a marketing organization into command-driven subagents: campaign planning, landing-page copy, CRO review, keyword research, outreach, analytics, social, email, and browser automation.
   - How to reproduce in Hermes: Instead of copying every command, create a Hermes profile or skill pack with a smaller “Konrad growth desk”: `researcher`, `content_editor`, `seo_operator`, `outreach_reviewer`, and `analytics_summarizer`. Use Hermes Kanban for tasks, profiles for isolated roles if needed, and cron for weekly planning plus daily execution summaries.
   - Business potential: Useful as a blueprint for a solo agency operating system: one queue, multiple specialist prompts, and repeatable deliverables for clients or personal brand growth.
   - Risk/note: The repo is ambitious and may be heavier than needed. Start with 3–5 commands/workflows, not the full suite, or the system becomes prompt sprawl.

4. **WordPress/Elementor production SEO automation skill**
   - Source: [GitHub / tranminhmanh / wp-stack-skill](https://github.com/tranminhmanh/wp-stack-skill) — strong workflow source: says patterns came from production debugging, includes SEO audit, Rank Math/schema, OG images, bulk content, deployment, and verification practices.
   - What it does: Turns repeated WordPress/Elementor operations into a skill: clone-transform page creation, Rank Math/schema automation, three-tier SEO audits, OG image coverage, SMTP relay fixes, and verify-after-write discipline.
   - How to reproduce in Hermes: Build a Hermes skill for the target WordPress stack, include exact site conventions, and run scheduled audits as cron jobs. For content sites, Hermes can generate issues like “missing schema,” “duplicate meta,” “broken internal link,” or “page rendered differently from MCP success.” Store findings as Markdown and send only critical items to Telegram.
   - Business potential: Very strong for SEO/content ops and client retainers: recurring audits, fast page rollout, and standardized fixes become sellable maintenance workflows.
   - Risk/note: Requires WordPress credentials and careful staging. Any write operation should have a paired verification command or screenshot; MCP/API success is not the same as a rendered page working.

5. **Two-profile Hermes “CEO + CTO” personal operations stack**
   - Source: [GitHub / geraledesma / Hermes Agent Automations](https://github.com/geraledesma/hermes-agent-automations) — relevant Hermes-specific source, but treat as a project README rather than independent proof of production metrics.
   - What it does: Describes two Hermes agents on a VPS with separate identities, Telegram bots, OpenRouter credentials, native Hermes cron, Google Calendar access, scripts for zero-token preprocessing, weekly planning, tool discovery, and code/operations scans.
   - How to reproduce in Hermes: Use two Hermes profiles instead of one overloaded persona: `growth` for planning/research/content, `tech` for code/repo checks. Give each profile its own Telegram bot only if credential conflicts are handled; otherwise keep one gateway and route by command. Use scripts to collect calendar/repo/source data first, then pass compact summaries to the model.
   - Business potential: Good for Konrad’s personal operating system: one agent watches strategy, calendar, content, and opportunities; another watches technical work and product maintenance.
   - Risk/note: Multi-agent setups are easy to overbuild. Start with one profile plus labeled cron jobs; split into profiles only when prompts, credentials, or memory truly need isolation.

6. **AI sales office with CRM files, lead scoring, daily Telegram report, Docker, and cron**
   - Source: [GitHub / Richard-Grey-78 / ai-sales-office](https://github.com/Richard-Grey-78/ai-sales-office) — useful operational source: includes CRM templates, scorecards, prompts, Docker/VPS artifacts, cron examples, and Telegram notification commands; README is mostly Russian.
   - What it does: Provides a sales-ops skeleton for a 3D-scanning service: lead CRM CSV, KPI tracker, offer templates, contact prompts, scoring, CLI commands, Docker deployment, cron, and Telegram reports.
   - How to reproduce in Hermes: Convert the domain-specific artifacts into a Hermes sales workspace: `leads.csv`, `scorecard.md`, `offers.md`, `touch_templates.md`, and a daily cron that runs scoring and sends Telegram summaries. Add a Hermes skill for the offer and qualification rubric.
   - Business potential: Strong pattern for productized consulting or agency services: it creates a minimal CRM plus daily operating rhythm without buying a full CRM immediately.
   - Risk/note: CSV/Markdown CRM works only if state transitions are strict. Define statuses such as `new`, `researched`, `qualified`, `contacted`, `replied`, `won`, `lost` before adding automation.

7. **Local-first long-running goal loop with cron, messenger channels, skills, and workflows**
   - Source: [GitHub / xopcai / xopc](https://github.com/xopcai/xopc) — strong comparable-agent source: active public repo with CLI, gateway, channels, workflows, skills, and provider notes.
   - What it does: Implements a local-first persistent AI system with a TUI, gateway, Telegram/WeChat/Feishu channels, cron, workflows, multi-agent routing, skills, extensions, and 20+ model providers.
   - How to reproduce in Hermes: Map the pattern to Hermes primitives: `hermes cron` for proactive loops, Telegram gateway for mobile delivery, `skills` for reusable procedures, profiles for isolated agents, and Kanban for multi-step work. The business workflow is the same: turn a recurring goal into a loop with state, scheduled checks, and a human-facing report.
   - Business potential: Useful as a design reference for persistent product-building workflows: content pipeline, customer support monitor, competitor scout, or weekly product roadmap review.
   - Risk/note: This is a comparable framework, not a Hermes tutorial. Use Hermes docs as the source of truth for commands and avoid mixing config syntax.

8. **Reusable AI workflow template library for agencies and creators**
   - Source: [GitHub / mypsbots / AI Workflow Templates](https://github.com/mypsbots/ai-workflow-templates) — medium source quality: broad template catalog, useful taxonomy, but less implementation depth than the focused repos above.
   - What it does: Organizes templates for content creation, SEO content generation, YouTube content, lead collection, lead qualification, email automation, customer support, analytics, and workflow orchestration across n8n, Make, OpenAI, Claude, Gemini, OpenRouter, Airtable, and Google Sheets.
   - How to reproduce in Hermes: Use the taxonomy as a backlog for Hermes skills and cron jobs: `seo-brief`, `youtube-repurposer`, `lead-qualifier`, `support-triage`, `weekly-analytics`, and `campaign-review`. Each should have inputs, outputs, source links, risk checks, and a Telegram-friendly report format.
   - Business potential: Good for building a public “workflow menu” for agency offers or internal product ops.
   - Risk/note: Template libraries often overstate “production-ready.” Only promote a template after a dry run with real inputs, logs, and a human review checkpoint.

9. **Hermes-native cron research brief and dashboard publishing loop**
   - Source: [Hermes docs / Cron jobs](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron) and [Hermes docs / Gateway messaging](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/) — official source of truth for Hermes setup.
   - What it does: Runs scheduled prompts with optional skills, toolsets, script pre-runs, context chaining, workdir, and delivery to messaging platforms. This is the pattern already being used for this report: collect sources, generate Markdown, save to a local dashboard, build, commit, push, and deliver a Telegram-friendly summary.
   - How to reproduce in Hermes: Use `hermes cron create` for the schedule, include a self-contained prompt, attach the research-scouting skill, keep output Markdown in a content folder, and run deterministic post-processing scripts where possible. For dashboards, make Markdown the database and build an index from files.
   - Business potential: Excellent for recurring content/research products: daily AI workflow scout, weekly competitor digest, monthly SEO opportunity report, customer-support insight digest, or lead-monitoring alerts.
   - Risk/note: A good prompt cannot fix missing tool access. If a cron job returns source-free output, verify profile toolsets and real tool turns before rewriting the prompt.

## 3 workflows for Konrad to test

- **Test 1: AI/design audit outbound loop**
  - Source: [Nadeer00 / Agentic AI Marketing Workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow) and [byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent)
  - First step: Define one concrete offer, for example “AI product landing-page teardown for design-led SaaS.” Create a 20-company seed list manually or from Serper/Tavily.
  - Minimal setup: Hermes cron or webhook intake, one `lead-dossier` skill, a Markdown/CSV lead board, Telegram approve/reject, and Gmail disabled until the copy quality is proven.
  - Measure success: At least 10 reviewed dossiers, 5 approved outreach drafts, and 2 positive replies or booked calls before scaling.

- **Test 2: Weekly WordPress/SEO maintenance scout for owned or client sites**
  - Source: [tranminhmanh / wp-stack-skill](https://github.com/tranminhmanh/wp-stack-skill)
  - First step: Pick one site and define a read-only audit checklist: titles/meta, schema, internal links, broken links, page render verification, and content freshness.
  - Minimal setup: Hermes skill with site conventions, cron once per week, `web`/browser or API checks where available, Markdown issue log, Telegram digest of only high-priority issues.
  - Measure success: 5–10 actionable issues found, fixes verified after deployment, and one repeatable checklist that can become a client retainer deliverable.

- **Test 3: Personal “growth desk” with daily research and weekly planning**
  - Source: [geraledesma / Hermes Agent Automations](https://github.com/geraledesma/hermes-agent-automations) and [Hermes Cron docs](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron)
  - First step: Keep one Hermes profile, not two, and create two crons: daily opportunity scout and weekly visibility plan.
  - Minimal setup: Telegram delivery, one persistent `growth-desk.md` context file, a `content-ideas/` folder, and a weekly prompt that selects 3 publishable actions from the week’s research.
  - Measure success: 3 publishable posts or project updates per week and a visible reduction in “what should I post/research next?” friction.

## Setup notes / tutorial nuggets

- **Hermes cron is the right primitive for recurring scout reports.** Official docs describe schedules, skills, toolsets, scripts, delivery, workdir, and context chaining: [Hermes Cron jobs](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron). For this use case, keep prompts self-contained and attach the relevant skill every time.

- **Use Telegram/gateway for approval, not just delivery.** Hermes supports gateway delivery across messaging platforms, including Telegram: [Hermes messaging docs](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/). For outbound or publishing workflows, the approval step should be explicit: approve lead, approve copy, request rewrite, or discard.

- **For n8n-style lead workflows, copy the architecture, not necessarily n8n.** The [Nadeer00 workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow) shows a useful sequence: Google/Serper search → email verification → human approval → AI draft → Gmail → Google Sheets. In Hermes, the same sequence can be implemented with cron/webhook, local files or Sheets, and Telegram review.

- **Scripts before LLMs reduce cost and hallucination.** The [Hermes Agent Automations README](https://github.com/geraledesma/hermes-agent-automations) explicitly describes zero-token preprocessing scripts before the model sees scan data. Reuse this pattern for GitHub, analytics, calendar, CRM, and SEO checks: collect deterministic JSON first, ask Hermes to rank and explain second.

- **Every write operation needs verification.** The [wp-stack-skill](https://github.com/tranminhmanh/wp-stack-skill) repeatedly emphasizes paired verify commands because API/MCP success does not prove a page renders. For Hermes workflows that modify websites, docs, repos, or campaigns, add a verify section to the skill.

- **Profile split should follow real isolation needs.** Hermes profiles provide isolated config, sessions, skills, and memory, but the [Hermes profile docs](https://hermes-agent.nousresearch.com/docs/user-guide/profiles) pattern should be used deliberately. Split into profiles only when model, memory, credentials, or agent identity need separation; otherwise use one profile with clear skills and cron names.

- **For comparable frameworks, translate concepts back to Hermes commands.** [xopc](https://github.com/xopcai/xopc) has cron, channels, skills, and workflows; useful as inspiration, but Hermes setup should follow official Hermes commands such as `hermes cron`, `hermes gateway`, `hermes skills`, and `hermes profile`.

## Link dump

- [Nadeer00 / Agentic AI Marketing Workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow) — best concrete lead-gen/outreach workflow today; includes APIs, Docker, approval, Gmail, and Sheets.
- [byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent) — webhook-driven account research and personalized outreach architecture.
- [OpenAnalystInc / 10x-Team](https://github.com/OpenAnalystInc/10x-Team) — broad marketing-agent command-center reference for content, SEO, outreach, and analytics roles.
- [tranminhmanh / wp-stack-skill](https://github.com/tranminhmanh/wp-stack-skill) — production-oriented WordPress/Elementor/SEO skill with verification-heavy workflows.
- [geraledesma / Hermes Agent Automations](https://github.com/geraledesma/hermes-agent-automations) — Hermes-specific multi-profile, Telegram, cron, scripts, and personal-ops architecture.
- [Richard-Grey-78 / ai-sales-office](https://github.com/Richard-Grey-78/ai-sales-office) — lightweight sales-office skeleton with CRM files, scoring, cron, Docker, and Telegram reporting.
- [xopcai / xopc](https://github.com/xopcai/xopc) — comparable persistent agent framework with local-first goal loops, channels, cron, skills, and workflows.
- [mypsbots / AI Workflow Templates](https://github.com/mypsbots/ai-workflow-templates) — broad workflow taxonomy for content, lead gen, email automation, support, and analytics.
- [Hermes Cron jobs docs](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron) — official source for scheduled Hermes reports and recurring agent tasks.
- [Hermes Gateway messaging docs](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/) — official source for Telegram/Slack/email-style delivery and approval surfaces.
- [Hermes Profiles docs](https://hermes-agent.nousresearch.com/docs/user-guide/profiles) — official source for profile isolation when building persona or department-style agents.
