## Hermes workflow scout — 2026-06-19

- Short verdict of the day: the strongest practical signal today is not from X/Reddit, which were either blocked or weakly discoverable from this cron environment, but from fresh GitHub repos showing reproducible agent workflows. The most useful patterns for Konrad are: a repo-native marketing operator, sales/SDR pipelines with human approval gates, and recurring research/reporting agents that save structured outputs to Sheets, CRM, or dashboards.
- For Hermes specifically, the best opportunity is to recreate these as scheduled skills + gateway-delivered reports + file-backed dashboards, rather than copying n8n node-for-node. Hermes already has cron, profiles, skills, Telegram/gateway delivery, file persistence, web/browser tools, and Kanban/profile isolation, so most of these can become durable productized scouts.
- Source quality note: Reddit returned HTTP 403 from this environment, and Google/X-style search was blocked by bot detection. I therefore prioritized accessible GitHub READMEs, official Hermes docs, and repository metadata; no revenue/lead metrics are invented below.

## Top workflows / use cases

1. **Repo-native AI CMO for SEO, launches, ads, and content calendars**
   - Source: [GitHub / cgallic / Kai Marketing OS](https://github.com/cgallic/kai-cmo-harness) — strong source: fresh repo, detailed README, commands, demo script, quality gates.
   - What it does: Turns a product repo into a marketing workspace with command-style growth workflows: growth plans, landing pages, content calendars, SEO/AEO work, ads, CRO, SDR handoff, and repurposing.
   - How to recreate in Hermes: Create a `marketing-operator` skill with channel playbooks, banned-word checks, SEO lint, and output contracts; run `hermes cron` jobs for weekly content calendars and daily distribution tasks; save artifacts under a repo folder; deliver drafts through Telegram for approval before publishing.
   - Business potential: High for SEO/content ops and AI/design visibility. This is directly reusable for Konrad's product launches, blog strategy, AI-search visibility, and offer testing.
   - Risk / note: It is Claude Code-oriented, not Hermes-native. Port the playbook pattern, not the slash-command surface. Keep human approval before publishing or sending email.

2. **Webhook-based company research and personalized cold outreach generator**
   - Source: [GitHub / byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent) — useful architecture source; low-star repo, so treat claims as unverified.
   - What it does: Receives company name/domain via webhook, researches the company with Tavily and scraping, extracts value propositions and tech-stack signals, then generates personalized outreach.
   - How to recreate in Hermes: Use Hermes webhooks or an API-server gateway route to accept `{company_name, website}`; use `web`/`browser` tools for research; save structured JSON to `leads/`; use a sales-personalization skill; send the final email draft to Telegram or Slack for approval.
   - Business potential: Strong for lead generation, agency prospecting, partnership outreach, and design/AI consulting offers.
   - Risk / note: Cold email deliverability and compliance matter. Keep outputs as drafts until reviewed; log source links for every personalization claim.

3. **Human-in-the-loop B2B quotation pipeline with Telegram approvals**
   - Source: [GitHub / Najeem47 / AI Sales Pipeline Bot](https://github.com/Najeem47/ai-sales-pipeline-bot) — strong practical README with architecture and engineering decisions.
   - What it does: Watches an Outlook inbox, filters irrelevant messages, extracts inquiry details with an LLM, asks the sales team for approvals/pricing via Telegram, drafts a quotation, sends it, and tracks won/lost outcomes.
   - How to recreate in Hermes: Use email gateway or an IMAP/Gmail script as a cron pre-step; parse inquiries into JSON; route approvals through Telegram; use Hermes `/approve`-style gateway behavior or explicit reply buttons if implemented; store deals in Markdown/CSV/CRM.
   - Business potential: Saves sales ops time and reduces response latency while keeping pricing decisions human-controlled.
   - Risk / note: Needs strict loop prevention, thread IDs, and approval checkpoints. Never let the agent expose internal pricing logic.

4. **WhatsApp SDR / pre-sales agent with memory, tools-as-subworkflows, follow-ups, and funnel events**
   - Source: [GitHub / rafaelrabel0 / n8n AI Agent Patterns](https://github.com/rafaelrabel0/n8n-ai-agent-patterns) — strong pattern source; sanitized production patterns, not a plug-and-play business.
   - What it does: Buffers WhatsApp messages, transcribes audio, describes images, passes normalized text to an agent with Postgres chat memory, calls qualification/handoff/update tools, schedules follow-ups, and emits funnel events to a dashboard.
   - How to recreate in Hermes: Use a messaging gateway adapter where available, or a webhook bridge; create tools/skills for qualification and handoff summaries; use Hermes cron for follow-up decisions; write every funnel event to a local dashboard or CRM API.
   - Business potential: Very relevant for agencies, productized services, and inbound lead qualification from social channels.
   - Risk / note: WhatsApp integrations can be fragile and policy-sensitive. Start with Telegram or Slack before moving to WhatsApp.

5. **Multi-agent website chat sales assistant with lead scoring and Cal.com booking**
   - Source: [GitHub / Sceflow-AI / Sceflow AI Sales Assistant](https://github.com/Sceflow-AI/sceflow-ai-sales-system) — concise but concrete repo with exported workflow folder.
   - What it does: Captures website chat leads, runs receptionist, qualification, scoring, and booking agents, stores conversation state in PostgreSQL, and books meetings through Cal.com.
   - How to recreate in Hermes: Put Hermes behind an API server or webhook endpoint; use a lead-intake skill; persist lead state in SQLite/Postgres or Markdown; integrate Cal.com via API; send qualified-lead summaries to Telegram.
   - Business potential: Strong for converting landing-page traffic into booked calls, especially for consulting, design audits, AI automation offers, and agencies.
   - Risk / note: Needs clear handoff rules, consent language, and booking constraints. Do not let the model invent availability or qualification criteria.

6. **Scheduled jobs/opportunities scout that writes structured rows to Google Sheets**
   - Source: [GitHub / SmritiJadon / agentic_ai_automated_job_list](https://github.com/SmritiJadon/agentic_ai_automated_job_list) — straightforward repo with schedule, SerpApi, Gemini, and Sheets setup.
   - What it does: Runs on a schedule, queries Google Jobs via SerpApi, processes listings with Gemini, and appends structured results to Google Sheets.
   - How to recreate in Hermes: Use `hermes cron create 'every morning'` with a self-contained prompt; use web/search or a search API script; write Markdown and CSV/JSON outputs; optionally append to Google Sheets through an API script.
   - Business potential: Can become a recurring opportunity scout: jobs, grants, RFPs, podcast guest openings, design leads, AI-tool launch mentions, or competitor hiring signals.
   - Risk / note: Search APIs have quotas and noisy results. Use hard caps, deduping, and a quality rubric.

7. **Inbound lead qualification and CRM routing with local LLMs**
   - Source: [GitHub / ayeshaatif707-sketch / n8n AI Lead Qualification & CRM Automation](https://github.com/ayeshaatif707-sketch/n8n-ai-lead-qualification-crm-automation) — useful architecture; portfolio-style claims should be treated cautiously.
   - What it does: Accepts inbound leads via webhook, analyzes intent/urgency/budget/company size/buying stage, scores leads, routes hot/warm/cold leads, and generates sales briefings.
   - How to recreate in Hermes: Build a `lead-qualification` skill with a fixed scoring rubric; accept form/webhook payloads; save lead files; route hot leads to Telegram immediately; create daily CRM digest cron jobs.
   - Business potential: Useful for sales triage, agency intake, product demo requests, and customer support prioritization.
   - Risk / note: Scoring must be calibrated against actual outcomes. Start with recommendations, not automatic lead rejection.

8. **Zero-budget autonomous small-business ops system: support, inventory, follow-up, reports, supplier outreach**
   - Source: [GitHub / antarhousni-source / Antar's Bookshop Autonomous AI System](https://github.com/antarhousni-source/automated-ai-system) — detailed architecture for a real-style local business system; business claims not independently verified.
   - What it does: Handles customer emails, intent detection, inventory checks, CRM logging, follow-ups, weekly reporting, sentiment analysis, supplier outreach, and inactive-customer re-engagement using n8n, Groq, Gmail, and Google Sheets.
   - How to recreate in Hermes: Split into profile-scoped skills: support triage, inventory lookup, follow-up scheduler, weekly report, sentiment monitor, supplier outreach. Use cron for daily/weekly tasks and Telegram approval for outbound supplier/customer emails.
   - Business potential: Great blueprint for productized automation packages for small businesses.
   - Risk / note: Full autonomy over customer replies is risky. Add review thresholds for complaints, refunds, legal-sensitive requests, and supplier commitments.

9. **Shared memory and command center for a fleet of coding/research agents**
   - Source: [GitHub / UrsushoribilisMusic / Flotilla / agentic-fleet-hub](https://github.com/UrsushoribilisMusic/agentic-fleet-hub) — strong architecture inspiration; not Hermes-specific and appears engineering-focused.
   - What it does: Provides shared mission control, task scratchpads, structured lessons, dashboards, standups, and vault-first secrets for a multi-agent workforce.
   - How to recreate in Hermes: Use Hermes profiles for separate agents, Kanban for task routing, skills for operating procedures, cron for standups, and a Markdown dashboard for reports. Keep secrets in `.env`/auth storage, not shared prompts.
   - Business potential: Useful for running multiple product/content/research agents without losing state or context.
   - Risk / note: Coordination overhead can exceed benefits. Start with one orchestrator profile and one worker profile before building a full fleet.

10. **Production deployment pattern for Hermes as a managed Kubernetes workload**
   - Source: [GitHub / paperclipinc / Hermes Operator](https://github.com/paperclipinc/hermes-operator) — highly relevant Hermes ecosystem source; infra-oriented, not a marketing workflow.
   - What it does: Packages Hermes Agent as a Kubernetes operator with declarative specs, security defaults, S3 backups, OCI auto-update/rollback, GitOps coexistence, and OpenClaw migration paths.
   - How to recreate in Hermes: For Konrad's personal workflows, do not start with Kubernetes. Borrow the deployment ideas: declarative profile configs, backups for reports/state, safe update/rollback, and explicit migration notes.
   - Business potential: Relevant if turning Hermes workflows into managed client infrastructure or agency offerings.
   - Risk / note: Overkill for solo daily scouts. Use only when multiple clients or always-on gateway reliability justify it.

11. **Parallel coding-agent supervision across isolated worktrees**
   - Source: [GitHub / daintreehq / Daintree](https://github.com/daintreehq/daintree) — strong adjacent workflow source for supervising multiple agents.
   - What it does: Runs multiple coding agents in parallel, each in isolated worktrees, with integrated terminals, observability, and human review.
   - How to recreate in Hermes: Use `hermes --worktree` for isolated git tasks, profile-specific agents for roles, Kanban for assignment, and a daily review cron that summarizes branch diffs and blocker status.
   - Business potential: Useful for faster prototyping of product features, landing pages, content tooling, and dashboard experiments.
   - Risk / note: Review remains the bottleneck. Require tests/builds before merging agent branches.

## 3 workflows for Konrad to test

- **Test 1: Hermes-native weekly AI/design visibility CMO**
  - Source to adapt: [Kai Marketing OS](https://github.com/cgallic/kai-cmo-harness).
  - First step: Create a `konrad-visibility-cmo` skill with inputs: product/repo context, target audience, proof points, banned claims, channels, and weekly KPI.
  - Minimal setup: One Hermes cron job every Monday that produces: SEO topic map, 3 LinkedIn/X post drafts, one blog outline, and one outreach angle; save outputs to the dashboard repo and deliver to Telegram.
  - Measure of success: One publishable long-form piece or 5 short posts per week with source-backed claims and less than 30 minutes of editing.

- **Test 2: Human-approved lead research and cold-email draft pipeline**
  - Source to adapt: [ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent) and [AI Sales Pipeline Bot](https://github.com/Najeem47/ai-sales-pipeline-bot).
  - First step: Build a small CSV of 20 target companies and run a Hermes one-shot that researches only 5 of them, with links and uncertainty notes.
  - Minimal setup: `leads/input.csv`, `leads/researched/*.md`, a `sales-personalization` skill, and Telegram delivery of draft emails for manual approval.
  - Measure of success: At least 3 drafts that include non-generic personalization grounded in source links, without hallucinated facts.

- **Test 3: Daily opportunity scout for productized automation offers**
  - Source to adapt: [agentic_ai_automated_job_list](https://github.com/SmritiJadon/agentic_ai_automated_job_list) and [Antar's Bookshop Autonomous AI System](https://github.com/antarhousni-source/automated-ai-system).
  - First step: Pick one niche, e.g. design agencies, local e-commerce, SaaS support, or creator businesses, then monitor jobs/posts/repos for repeated pain points.
  - Minimal setup: Hermes cron with web/search, hard cap of 10 sources, Markdown report saved to `content/reports/opportunity-scout/`, and a link dump.
  - Measure of success: One concrete productized service idea per week with target buyer, workflow, data sources, and first outreach list.

## Setup notes / tutorial nuggets

- **Hermes cron is the right primitive for recurring scouts.** Official Hermes usage supports schedules like `30m`, `every 2h`, or cron expressions via `hermes cron create SCHED`; write self-contained prompts because cron sessions do not inherit chat context. Source: [Hermes Agent docs / cron feature](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron).
- **Use gateway delivery for approval loops, not blind autonomy.** Hermes supports Telegram/Discord/Slack/email-style gateway adapters; for sensitive workflows, deliver drafts and require human approval before external actions. Source: [Hermes Agent docs / messaging platforms](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/).
- **For marketing-agent skills, copy the contract pattern from Kai, not the exact Claude commands.** Kai's README emphasizes skill docs with triggers, inputs, outputs, gates, provenance, and failure modes; that maps well to Hermes skills. Source: [Kai Marketing OS](https://github.com/cgallic/kai-cmo-harness).
- **For sales pipelines, use deterministic stages around the LLM.** The AI Sales Pipeline Bot shows a safe architecture: email trigger, filter, JSON extraction, Telegram approval, pricing confirmation, quote drafting, sending, and outcome tracking. Source: [AI Sales Pipeline Bot](https://github.com/Najeem47/ai-sales-pipeline-bot).
- **For chat/SDR agents, split capabilities into small tools.** The n8n WhatsApp pattern uses separate qualification, handoff, name-update, follow-up scheduler, and event-emitter workflows. In Hermes, mirror this as small skills/tools or separate profile tasks. Source: [n8n AI Agent Patterns](https://github.com/rafaelrabel0/n8n-ai-agent-patterns).
- **For recurring source collection, use API-backed deterministic collection first.** The job-scraper repo uses SerpApi + Gemini + Sheets on a schedule; in Hermes, the same pattern should be search/API collection first, then model ranking and formatting. Source: [Automated Job Scraper](https://github.com/SmritiJadon/agentic_ai_automated_job_list).
- **For multi-agent setups, keep shared memory explicit.** Flotilla's `MISSION_CONTROL.md`, lessons ledger, and task scratchpad pattern is a good reminder that agents need a written shared state, not just chat history. Source: [Flotilla / agentic-fleet-hub](https://github.com/UrsushoribilisMusic/agentic-fleet-hub).
- **For Hermes deployment hardening, borrow backup/update/rollback thinking before Kubernetes.** The Hermes Operator repo is useful as an infra checklist: declarative config, security defaults, backups, auto-update, rollback, and migration notes. Source: [Hermes Operator](https://github.com/paperclipinc/hermes-operator).

## Link dump

- [Kai Marketing OS / AI CMO skills for Claude Code](https://github.com/cgallic/kai-cmo-harness) — best source today for repo-native marketing, SEO, content, and launch workflows to port into Hermes skills.
- [AI Lead Gen Agent with n8n, Tavily, Gemini](https://github.com/byg16/ai-lead-gen-agent) — practical webhook-to-research-to-outreach architecture.
- [AI Sales Pipeline Bot with Telegram approvals](https://github.com/Najeem47/ai-sales-pipeline-bot) — strong human-in-the-loop sales automation pattern.
- [n8n AI Agent Patterns for WhatsApp SDR/pre-sales](https://github.com/rafaelrabel0/n8n-ai-agent-patterns) — useful decomposition into memory, sub-workflow tools, follow-ups, and event tracking.
- [Sceflow AI Sales Assistant](https://github.com/Sceflow-AI/sceflow-ai-sales-system) — compact multi-agent lead qualification and Cal.com booking system.
- [Automated Google Jobs scraper with n8n, SerpApi, Gemini, Sheets](https://github.com/SmritiJadon/agentic_ai_automated_job_list) — good template for scheduled opportunity scouts.
- [AI Lead Qualification & CRM Automation](https://github.com/ayeshaatif707-sketch/n8n-ai-lead-qualification-crm-automation) — clear lead scoring/routing rubric for inbound sales triage.
- [Antar's Bookshop autonomous AI system](https://github.com/antarhousni-source/automated-ai-system) — broad small-business ops automation blueprint.
- [Flotilla / agentic-fleet-hub](https://github.com/UrsushoribilisMusic/agentic-fleet-hub) — shared memory and command-center pattern for multi-agent teams.
- [Hermes Operator](https://github.com/paperclipinc/hermes-operator) — production deployment and backup/update/rollback ideas for Hermes infrastructure.
- [Daintree parallel coding-agent supervisor](https://github.com/daintreehq/daintree) — adjacent worktree supervision pattern that maps to Hermes `--worktree` and Kanban/profile workflows.
- [Hermes Agent cron documentation](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron) — official reference for recurring Hermes reports and scouts.
