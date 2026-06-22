## Hermes workflow scout — 2026-06-22

- Short verdict of the day: the strongest reusable pattern today is not a generic “agent list”; it is **persistent distribution ops**: cron-triggered research, SEO/content production, lead enrichment, and Telegram/email delivery with human review gates. X/Twitter and Reddit were not useful from this cron run because search/indexed access was weak or blocked; the best concrete sources came from GitHub repos and project READMEs with actual architecture, workflows, or setup notes.
- The most actionable ideas for Konrad are: a Hermes-native CEO/CTO automation stack, a weekly SEO/content ops system, and a lead-research-to-cold-email angle generator. Each can be rebuilt in Hermes with cron jobs, skills, file-backed memory, profile isolation, Telegram delivery, and manual approval before publishing or sending outreach.

## Top workflows / use cases

1. **Two-agent Hermes operating system for personal/business ops**
   - Source: [GitHub / geraledesma / hermes-agent-automations](https://github.com/geraledesma/hermes-agent-automations) — strong source; README describes a concrete Hermes architecture with CEO + CTO agents, Telegram bots, cron jobs, calendar management, GitHub scanning, and tool discovery.
   - What it does: Runs two separate Hermes agent identities on a VPS: a planning/operations agent and a technical/code-review agent. They communicate through Telegram, run scheduled routines, scan code, manage calendars, and report autonomously.
   - How to reproduce in Hermes: create two Hermes profiles (`ceo`, `cto`), each with its own Telegram gateway credentials, memory, skills, and cron jobs. Use `hermes profile create`, `hermes gateway setup`, `hermes cron create`, and profile-specific prompts. Use the CEO profile for planning, content calendar, daily review, and tool scouting; use the CTO profile for GitHub issue scanning, repo audits, changelog summaries, and build/test reports.
   - Business potential: high for solopreneur ops. It can turn Konrad’s product/content work into daily operating loops: “what should I ship?”, “what should I publish?”, “what broke?”, “what opportunity appeared?”.
   - Risk/note: multi-profile gateways can conflict if the same bot token is reused. Keep credentials isolated, add narrow toolsets per profile, and require manual approval for calendar edits, commits, or public posts.

2. **AI SEO operations system with specialist agents and reusable skills**
   - Source: [GitHub / tarekcxl / ai-seo-system](https://github.com/tarekcxl/ai-seo-system) — strong source; README lays out agents, skills, workflows, GSC/GA4/Ahrefs/SERP inputs, content briefs, optimization plans, and Airtable-ready tracking.
   - What it does: Uses specialist roles for SEO analysis, technical audits, competitor analysis, content strategy, quality validation, and project management. The repo’s structure is close to a reusable SEO agency playbook.
   - How to reproduce in Hermes: create a `seo-ops` skill with references for GSC metrics, SERP snapshots, brand voice, and content scoring. Add cron jobs for weekly “freshness audit”, “competitor page changes”, and “content brief generation”. Use file outputs under a reports folder, and optionally a Google Sheets/Airtable export script before the model run.
   - Business potential: very high for content and visibility. A weekly Hermes SEO operator could produce briefs, refresh tasks, internal-link suggestions, and “publish/update/ignore” decisions for Konrad’s sites.
   - Risk/note: needs real data connectors. Without Search Console, analytics, or SERP data, the agent becomes a generic blog bot. Keep the model as analyst/editor, not the source of SEO truth.

3. **Personal reputation engine across multiple owned domains**
   - Source: [GitHub / sinabarimd / reputation-engine](https://github.com/sinabarimd/reputation-engine) and [article / Dr. Sina Bari / How I Built a Personal Reputation Engine with AI Agents](https://sinabarimd.com/articles/how-i-built-a-personal-reputation-engine.html) — strong source; repo describes n8n-orchestrated multi-site publishing, structured data optimization, SERP monitoring, and pre-push secret scanning.
   - What it does: Coordinates AI-powered content generation and publishing across four owned domains to control professional online presence. It includes structured-data/AEO thinking, SERP measurement, and editorial voice rules per site.
   - How to reproduce in Hermes: run Hermes cron jobs for “entity coverage gaps”, “article draft”, “schema/FAQ block”, and “SERP check”. Store site-specific voice/reference skills. Use GitHub or CMS APIs for draft PRs only, then require manual review before publishing.
   - Business potential: high for Konrad’s visibility in AI/design. This is a direct blueprint for owning search surfaces around his name, products, and frameworks.
   - Risk/note: publishing across several domains can create thin or repetitive content. Add a quality gate: only publish if the report contains original examples, first-hand screenshots, product demos, or strong POV.

4. **GTM research agent that turns company names into outreach angles**
   - Source: [GitHub / Vinayakgavimath / ai-gtm-research-agent](https://github.com/Vinayakgavimath/ai-gtm-research-agent) — strong practical source; README claims a n8n + Groq + Google Sheets workflow that replaces manual company research and outputs trigger-based cold-email angles.
   - What it does: Takes a company name, researches what it does, identifies target customers and pains, finds trigger events such as funding/hiring/product launches, and writes an outreach angle into Google Sheets.
   - How to reproduce in Hermes: create a `lead-research` Hermes cron or webhook. Input: company list CSV/Sheet. Collection step: deterministic search/API script for company site, LinkedIn/news snippets, jobs pages, funding/news. Model step: summarize pains, trigger, and outreach angle. Delivery: write a Google Sheet row and send a Telegram digest for manual approval.
   - Business potential: high for sales and partnerships. Konrad could use it for agency leads, product collaborations, podcast/content guests, or design/AI consulting prospects.
   - Risk/note: cold outreach deliverability and compliance matter. Do not auto-send; use Hermes to prepare angles and require a human send/approve step.

5. **Google Places lead generation + personalized cold email workflow**
   - Source: [GitHub / chaudhrynihaal / lead-generation-agent](https://github.com/chaudhrynihaal/lead-generation-agent) — useful source; README gives a concrete n8n workflow: form input, Google Places scraping, email extraction, validation, Sheets, AI email generation, Gmail send, and status updates.
   - What it does: Collects a business type/location/quantity, scrapes Google Places via Apify, extracts emails from websites, validates them, stores leads in Google Sheets, generates personalized emails, sends via Gmail, and updates status.
   - How to reproduce in Hermes: use a Hermes webhook or Telegram command to submit “business type + city + offer”. Use an Apify/Places script for collection, Hermes for scoring and personalization, Sheets for queue state, and Gmail only after manual approval. Add cron follow-ups for “no response after N days”.
   - Business potential: strong for agency/service offers, especially if paired with website audits or content gap analysis.
   - Risk/note: source is implementation-oriented but compliance-heavy. Validate lawful basis, unsubscribe handling, domain warmup, and rate limits before sending anything.

6. **Reusable content workflow workspace with onboarding, style, SEO metadata, and WordPress draft publishing**
   - Source: [GitHub / drazewski / content-workflow-agent](https://github.com/drazewski/content-workflow-agent) — strong source; README describes onboarding, source analysis, web research, style guidance, SEO metadata, taxonomy, review pipelines, and optional WordPress draft publishing.
   - What it does: Creates a reusable workspace for articles, blog posts, summaries, reviews, and publication-ready Markdown. The first step is onboarding a site/brand into `project-context.md`, then generating drafts safely.
   - How to reproduce in Hermes: make a Hermes `content-workflow` skill with brand voice, audience, article structure, internal-link rules, and publishing checklist. Use `hermes cron create` for “weekly draft ideas” and “draft from source pack”; save Markdown locally; optionally use WordPress API to create drafts but never publish automatically.
   - Business potential: high for content ops. This is a clean way to turn research scouts into publishable articles, newsletters, and product essays.
   - Risk/note: content needs originality and editorial review. Add a “source pack required” rule and a final human review gate.

7. **Scheduled Instagram/social media content generator**
   - Source: [GitHub / Ashashmitha / agentic-ai-social-media-manager](https://github.com/Ashashmitha/agentic-ai-social-media-manager) — moderate source; simple README but concrete enough: n8n schedule, Gemini, Cloudinary, Puppeteer, Instagram Graph API.
   - What it does: On a schedule, generates marketing content, renders a branded image, uploads media to Cloudinary, generates a caption, and publishes to Instagram.
   - How to reproduce in Hermes: use Hermes cron for topic selection and caption generation, a local Node/Playwright or Puppeteer script for rendering branded image templates, Cloudinary or local asset hosting, and Instagram Graph API for draft/publish. Deliver Telegram previews before posting.
   - Business potential: useful for consistent visibility and repurposing research into social posts.
   - Risk/note: auto-posting can degrade brand quality. Safer first version: generate 5 post drafts and image previews every Monday, then let Konrad approve manually.

8. **Always-on Telegram agent fleet with memory and nightly self-improvement**
   - Source: [GitHub / dream77r / my-claude-bot](https://github.com/dream77r/my-claude-bot) — strong conceptual source; README describes a Telegram-centered orchestrator, sandboxed workers, scoped tool allowlists, message bus, git-versioned wiki memory, file/voice handling, and overnight “Dream cycles”.
   - What it does: Turns a chat interface into a multi-agent operating surface: one master agent delegates to sandboxed workers, workers have isolated folders/tools, memory is versioned, and nightly routines propose improvements.
   - How to reproduce in Hermes: use Hermes profiles or Kanban workers for isolation, Telegram gateway for the surface, file-backed memories/skills, and a nightly curator/retrospective cron: “review today’s sessions, propose one skill update, one automation, one cleanup”.
   - Business potential: high for long-running product and content systems because the agent improves operational playbooks instead of only answering chats.
   - Risk/note: self-improvement can mutate workflows in bad ways. Require diffs, backups, and manual approval for skill edits.

9. **SMB agent operations layer across channels, schedules, and cost/accounting**
   - Source: [GitHub / anis-marrouchi / AgentX](https://github.com/anis-marrouchi/agentx) — strong architecture source; README positions it as an ops/observability layer across Telegram, WhatsApp, Slack, Discord, GitLab/GitHub, schedules, intent ledger, replay, cost accounting, and dashboard.
   - What it does: Routes work to agents across business channels, keeps an append-only ledger, tracks schedules and costs, and makes agent activity observable/replayable.
   - How to reproduce in Hermes: use Hermes gateway adapters for Telegram/Slack/Discord/email, cron for schedules, session exports/logs for audit, and a small dashboard over Markdown/JSONL outputs. For Konrad, the useful subset is “single control plane for content, sales, support, and research agents”.
   - Business potential: strong if Konrad runs multiple workflows for products or client work. It turns scattered automations into a managed operating layer.
   - Risk/note: building an ops layer before workflows have value can be overkill. Start with one channel and two high-value jobs, then add observability.

10. **Cron-driven always-on Claude/OpenClaw-style agent stack**
   - Source: [GitHub / bradbushSFAI / nolty](https://github.com/bradbushSFAI/nolty) — useful source; README describes always-on Telegram agent, 15-minute cron dispatcher, Task sub-agent routing, memory, signed-in browser crons, and self-healing around upgrades.
   - What it does: Packages an always-on agent loop for people who want OpenClaw-style scheduled tasks and Telegram interaction on top of Claude Code.
   - How to reproduce in Hermes: Hermes already has native cron, gateway, profiles, skills, memory, and worktree mode. Rebuild the pattern with `hermes gateway run/install`, `hermes cron create`, `hermes --worktree` for isolated coding agents, and Kanban/profile-based workers for longer tasks.
   - Business potential: high as a reference architecture for “agent that keeps working while I’m away”: daily briefs, analytics checks, repo scans, content drafts, and lead queues.
   - Risk/note: signed-in browser automation is brittle and can violate site terms. Prefer APIs/RSS/export files where possible.

## 3 workflows to test for Konrad

- **Test 1: Weekly SEO/content opportunity operator**
  - Source: [GitHub / tarekcxl / ai-seo-system](https://github.com/tarekcxl/ai-seo-system) and [GitHub / drazewski / content-workflow-agent](https://github.com/drazewski/content-workflow-agent)
  - First step: choose one owned site or content hub and create a `content-context.md` file with audience, products, voice, target topics, and publishing constraints.
  - Minimal setup: one Hermes skill (`content-seo-operator`), one weekly cron, web/search tools, local Markdown output, and Telegram delivery. Optional deterministic pre-script: export GSC top queries/pages into CSV.
  - Success metric: every week it produces 3 update candidates, 2 new article briefs, and 1 “publish this first” recommendation that Konrad would actually act on.

- **Test 2: Lead research and outreach-angle generator, no auto-send**
  - Source: [GitHub / Vinayakgavimath / ai-gtm-research-agent](https://github.com/Vinayakgavimath/ai-gtm-research-agent) and [GitHub / chaudhrynihaal / lead-generation-agent](https://github.com/chaudhrynihaal/lead-generation-agent)
  - First step: create a CSV of 25 target companies/creators/agencies and define one offer, e.g. “AI/design workflow audit” or “content automation sprint”.
  - Minimal setup: Hermes script reads CSV, collects company snippets, writes a Markdown/CSV output with trigger, pain, suggested angle, and confidence. Send only a Telegram summary; do not send emails yet.
  - Success metric: at least 10/25 leads have a non-generic, timely trigger and 5 are good enough for manual outreach.

- **Test 3: Personal reputation/content engine for AI/design visibility**
  - Source: [GitHub / sinabarimd / reputation-engine](https://github.com/sinabarimd/reputation-engine) and [article / How I Built a Personal Reputation Engine with AI Agents](https://sinabarimd.com/articles/how-i-built-a-personal-reputation-engine.html)
  - First step: map 10 search/entity surfaces Konrad wants to own: name, product names, “AI design workflow”, “Hermes Agent use cases”, “AI content ops”, etc.
  - Minimal setup: one monthly entity-gap report, one weekly draft-outline cron, a strict source/evidence requirement, and GitHub/Markdown drafts rather than direct CMS publishing.
  - Success metric: within 30 days, publish or refresh 4 high-quality pages/posts and track whether branded/entity queries become better covered.

## Setup notes / tutorial nuggets

- **Hermes can implement the recurring-report pattern natively.** Use `hermes cron create "0 9 * * *"` or a duration phrase, attach a self-contained prompt, and deliver to the origin/gateway. Official reference: [Hermes Agent docs / Cron](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron).
- **Use profiles for real persona isolation, not just prompt labels.** The CEO/CTO pattern from [geraledesma/hermes-agent-automations](https://github.com/geraledesma/hermes-agent-automations) maps cleanly to Hermes profiles with separate configs, skills, memory, sessions, and gateway credentials. Official reference: [Hermes Agent docs / Profiles](https://hermes-agent.nousresearch.com/docs/user-guide/profiles).
- **For Telegram-first workflows, use gateway delivery but avoid auto-destructive actions.** The always-on patterns in [dream77r/my-claude-bot](https://github.com/dream77r/my-claude-bot), [bradbushSFAI/nolty](https://github.com/bradbushSFAI/nolty), and Hermes’s own [messaging docs](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/) all point to chat as the control surface. Keep “draft/approve/publish” explicit.
- **For SEO/content agents, create a folder contract.** The structure in [tarekcxl/ai-seo-system](https://github.com/tarekcxl/ai-seo-system) (`agents`, `skills`, `workflows`, references) and [drazewski/content-workflow-agent](https://github.com/drazewski/content-workflow-agent) (`project-context.md`, onboarding, prompts) suggests a Hermes-friendly file convention: `/context`, `/sources`, `/drafts`, `/reports`, `/published`.
- **Separate deterministic collection from model judgment.** The GTM and lead-gen repos ([ai-gtm-research-agent](https://github.com/Vinayakgavimath/ai-gtm-research-agent), [lead-generation-agent](https://github.com/chaudhrynihaal/lead-generation-agent)) are strongest when APIs/scripts collect facts and the model only ranks, summarizes, and writes angles. This reduces hallucinations and makes outputs auditable.
- **Add pre-push/secret scans when agents write code or content repos.** The [reputation-engine](https://github.com/sinabarimd/reputation-engine) README explicitly mentions hardened secret scanning. For Hermes workflows that commit drafts or dashboards, keep `git diff`, build/test, and secret-scan steps before push.
- **Use Kanban/workers only after the first workflow proves valuable.** The AgentX/Nolty style control plane is tempting, but for Konrad the first milestone should be one reliable recurring job with saved Markdown, Telegram summary, and a visible dashboard entry. Official reference for Hermes multi-worker coordination: [Hermes Agent docs / Kanban feature](https://hermes-agent.nousresearch.com/docs/user-guide/features/kanban).

## Link dump

- [Hermes Agent Automations — CEO/CTO multi-instance Hermes stack](https://github.com/geraledesma/hermes-agent-automations) — best Hermes-native architecture example found today.
- [AI SEO System — specialist SEO agents and workflows](https://github.com/tarekcxl/ai-seo-system) — useful blueprint for recurring SEO/content ops.
- [Reputation Engine — multi-site entity SEO and publishing system](https://github.com/sinabarimd/reputation-engine) — concrete owned-media/reputation automation source.
- [How I Built a Personal Reputation Engine with AI Agents](https://sinabarimd.com/articles/how-i-built-a-personal-reputation-engine.html) — companion article for the reputation workflow.
- [AI GTM Research Agent — company research to cold-email angle](https://github.com/Vinayakgavimath/ai-gtm-research-agent) — strong lead-research automation pattern with claimed time savings.
- [Lead Generation Agent — Google Places to cold email workflow](https://github.com/chaudhrynihaal/lead-generation-agent) — concrete n8n architecture for local/business lead generation.
- [Content Workflow Agent — onboarding and publication-ready Markdown](https://github.com/drazewski/content-workflow-agent) — practical content ops workspace pattern.
- [Agentic AI Social Media Manager — scheduled Instagram content automation](https://github.com/Ashashmitha/agentic-ai-social-media-manager) — simple social posting pipeline to adapt with manual review.
- [My Claude Bot — Telegram multi-agent fleet with memory](https://github.com/dream77r/my-claude-bot) — good reference for chat-native orchestration, sandboxed workers, and overnight improvement loops.
- [AgentX — SMB agent ops layer across channels and schedules](https://github.com/anis-marrouchi/agentx) — useful architecture for observability/routing once multiple agents exist.
- [Nolty — cron-driven always-on Telegram agent stack](https://github.com/bradbushSFAI/nolty) — OpenClaw/Claude-style pattern that maps well onto Hermes cron + gateway.
- [Hermes Agent Cron docs](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron) — official setup reference for scheduled Hermes workflows.

Saved local path: `/Users/koni/Desktop/hermes/usecases/hermes-workflow-scout-2026-06-22.md`
Dashboard path: `/Users/koni/Desktop/dev/hermes-dash/content/reports/hermes-workflows/hermes-workflow-scout-2026-06-22.md`
