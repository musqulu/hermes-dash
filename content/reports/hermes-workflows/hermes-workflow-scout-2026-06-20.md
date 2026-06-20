## Hermes workflow scout — 2026-06-20

Short verdict of the day: the strongest practical pattern today is not a single “chatbot,” but a persistent publishing or prospecting pipeline with scheduled collection, structured scoring, human approval, and a delivery channel. The most directly reusable ideas for Konrad are: a multi-site reputation/SEO engine, an approval-gated content marketing agent, and a daily opportunity scout delivered through Telegram or Slack. X/Twitter and Reddit were not reliably accessible from this cron environment today; Google/DuckDuckGo/Bing interactive search was blocked or degraded, and Reddit JSON returned HTTP 403, so this brief leans on accessible GitHub READMEs, official docs, and indexed/public project pages rather than unverifiable social snippets.

## Top workflows / use cases

1. **Personal reputation + entity-first SEO engine**
   - Source: [GitHub / sinabarimd / Reputation Engine](https://github.com/sinabarimd/reputation-engine) — strong source: public repo, linked article, changelog, architecture notes, and measurement scripts.
   - What it does: Runs a multi-site content system for controlling professional search results. The repo describes AI-powered content generation, multi-site publishing, structured data optimization, SERP monitoring, and daily todo reconciliation across four owned domains.
   - How to reproduce in Hermes: Create one Hermes skill for the editorial style guide, one cron job for topic research, one cron job for draft generation, and one review job that writes pending actions to Markdown or Google Sheets. Use `web` for research, `file` for local content queues, optional Google Search Console/DataForSEO APIs for measurement, and Telegram delivery for daily “publish / revise / discard” decisions.
   - Business potential: Very relevant for personal visibility, AI/design authority, founder brand, and SEO moat building. It turns content ops from sporadic writing into a compounding reputation asset.
   - Risk/note: Needs editorial review and factual checking. Multi-domain SEO can become thin-content spam if the agent optimizes for volume instead of differentiated POV.

2. **SEO/AEO blog factory with SERP brief, section writer, editor, schema, and Webflow publish**
   - Source: [GitHub / Juliankie-creator / SEO Blog Automation](https://github.com/Juliankie-creator/seo-blog-automation) — strong implementation source: explicit pipeline, cost estimates, prerequisites, and workflow stages.
   - What it does: Uses two n8n workflows: optional sitemap/GSC topic discovery, then keyword discovery, SERP brief, title refinement, research, section-by-section writing, editing/humanizing audits, takeaways, schema/meta, translation, hero image, and optional Webflow publishing.
   - How to reproduce in Hermes: Use Hermes cron for weekly topic discovery, another cron for article draft generation, and a human approval checkpoint in Telegram. Store each candidate as Markdown with frontmatter: keyword, intent, sources, draft status, and publish target. Use Hermes skills for “anti-generic AI writing,” Webflow API notes, and brand voice.
   - Business potential: High for Konrad’s AI/design visibility because it maps directly to a repeatable SEO and answer-engine content pipeline.
   - Risk/note: The source’s pricing and model names are project-specific; verify current provider costs before running at scale. Use manual review before publishing.

3. **Webhook-driven company research + personalized cold outreach generator**
   - Source: [GitHub / byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent) — useful architecture source; README describes Tavily, website scraping, Gemini, and structured data sync.
   - What it does: Accepts a company name and website through a webhook, researches value proposition, product launches, and software infrastructure, then generates personalized outreach copy.
   - How to reproduce in Hermes: Add a Hermes webhook route for `new_lead`, call web/search and website extraction, save a JSON dossier per company, then generate a cold email draft. Deliver the draft to Telegram or Slack for approval before it reaches Gmail/CRM.
   - Business potential: Strong for agency sales, design/product consulting, and outbound experiments. It can compress manual account research into a reviewable lead dossier.
   - Risk/note: Cold email has deliverability and compliance risk. Keep a human approval gate, dedupe contacts, and avoid sending automatically until the targeting and opt-out process are validated.

4. **End-to-end B2B lead generation + outreach + LinkedIn content loop**
   - Source: [GitHub / Nadeer00 / Agentic AI Marketing Workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow) — good practical source: lists Serper.dev, Hunter.io, Groq, Google Sheets, Gmail, and human-in-the-loop review.
   - What it does: Scrapes Google for companies in a target industry/city, verifies emails, asks for human approval, generates personalized emails, sends through Gmail, writes to Google Sheets, and creates LinkedIn posts around the campaign.
   - How to reproduce in Hermes: Use one Hermes cron for lead sourcing, one Telegram approval flow for leads, one Gmail/CRM integration step for approved sends, and a content repurposing skill that turns campaign themes into LinkedIn drafts.
   - Business potential: Useful for packaged service offers: “AI/design audit,” “conversion teardown,” “workflow automation assessment,” or “website clarity sprint.”
   - Risk/note: Hunter/Serper/Gmail API credentials are required. Email verification is not permission; review legal basis and deliverability settings.

5. **Telegram-based content request → multi-agent content generation → approval → scheduled publishing**
   - Source: [GitHub / AdityaWanddhekr / ai-marketing-automation-agent](https://github.com/AdityaWanddhekr/ai-marketing-automation-agent) — concise but relevant source: clear architecture and stated challenges.
   - What it does: A Telegram bot receives content requests, routes them through AI strategist/content agents, stores brand memory in Airtable, runs approval, schedules posts, and publishes to a Telegram channel.
   - How to reproduce in Hermes: Use Hermes gateway Telegram as the input channel, a brand-memory skill, a content calendar Markdown folder or Airtable, and cron jobs for scheduled publishing reminders. Keep generated posts in `draft`, `approved`, and `published` states.
   - Business potential: Strong for solo content ops: one message can create a draft thread, carousel outline, newsletter seed, or launch post without opening a separate tool.
   - Risk/note: Scheduling reliability matters more than prompts. The source explicitly notes merge-node, scheduling, and Telegram integration challenges; in Hermes, keep state explicit in files or a database.

6. **RSS/news → ICP pain point extraction → LinkedIn carousel package**
   - Source: [GitHub / kkrishna08 / Ai-Marketting-Agent](https://github.com/kkrishna08/Ai-Marketting-Agent) — practical source: describes RSS ingestion, Gemini analysis, slide copy, captions, and image prompts.
   - What it does: Pulls industry news from RSS, extracts the main pain point, ICP, and hook, then generates five-slide LinkedIn carousel copy, a caption, and image prompts for Canva/Figma/DALL·E.
   - How to reproduce in Hermes: Create a daily Hermes cron that watches chosen RSS feeds and web sources, generates 3 carousel candidates, and sends only the best one to Telegram with slide text and design prompts. Save outputs as Markdown for later repurposing.
   - Business potential: Good for consistent thought leadership without starting from a blank page. Especially useful for AI/design commentary on product launches and workflow shifts.
   - Risk/note: News-to-carousel workflows can become generic. Add a Konrad-specific POV rubric and require a real example or teardown angle before approving.

7. **SEO content agent for WordPress with SerpAPI, internal links, FAQs, metadata, and HTML output**
   - Source: [GitHub / yarendmr / n8n AI Content Agent Workflow](https://github.com/yarendmr/n8n-ai-content-agent-workflow) — useful source: clear input schema and step-by-step workflow overview.
   - What it does: Receives topic, keyword, language, word count, and website URL; collects related questions/searches/organic links via SerpAPI; generates subheadings, article sections, internal/external links, meta title/description, FAQs, tables, and WordPress-ready HTML.
   - How to reproduce in Hermes: Use a Markdown intake file or webhook payload with `topic`, `keyword`, `wordcount`, and `target_url`. Hermes can research SERP context, draft the outline, produce Markdown/HTML, and write a review checklist before WordPress publishing.
   - Business potential: Good for affiliate/content sites and product-led SEO if paired with real examples, screenshots, and expert commentary.
   - Risk/note: Avoid auto-publishing. Require source links in every brief and run a duplicate/thin-content check.

8. **Google Sheets-driven autonomous SEO research and blog drafting board**
   - Source: [GitHub / Supreme-jay / Autonomous SEO Research Blog Agent](https://github.com/Supreme-jay/Autonomous-seo-research-blog-agent) — medium source quality: concise README, exported workflows/screenshots noted.
   - What it does: Reads ideas from Google Sheets, generates search queries and keyword research, researches competitors, creates SEO title/meta, drafts content, and tracks review/publish status.
   - How to reproduce in Hermes: Replace Google Sheets with a lightweight Markdown Kanban board or Hermes Kanban. Each task becomes a content idea with states: `research`, `draft`, `review`, `publish`, `measure`. Cron can move tasks forward and Telegram can ask for approvals.
   - Business potential: Useful for turning scattered content ideas into an operating system with measurable throughput.
   - Risk/note: Sheet-driven workflows are easy to start but can become messy. Define exact columns/statuses or use Hermes Kanban for stricter state.

9. **Daily opportunity/job scout with LLM scoring, Notion archive, and Telegram digest**
   - Source: [GitHub / sebpost2 / Job Alert Agent](https://github.com/sebpost2/job-alert-agent) — strong source: public repo, GitHub Actions cron badges, Telegram screenshot, scoring schema, and Notion archive.
   - What it does: Every 12 hours scrapes job boards, scores postings against a CV with an LLM, dedupes in Postgres, syncs relevant ones to Notion, and sends a daily Telegram digest of top fits.
   - How to reproduce in Hermes: Reframe it as a “client/opportunity scout”: cron collects leads, grants, RFPs, podcast openings, design calls, or partnership signals; Hermes scores them against Konrad’s criteria; Telegram receives only the top 3 with reasons and links.
   - Business potential: Very high as a reusable scouting pattern for sales, partnerships, content opportunities, and market monitoring.
   - Risk/note: Scraping sources need rate limits and dedupe. Keep the score rubric transparent so the agent does not silently optimize for the wrong opportunities.

10. **Sanitized personal operations agent with Telegram, Gmail, Calendar, Notion, GitHub memory, schedules, and leak validation**
   - Source: [GitHub / bpnace / AI Agent Workflow](https://github.com/bpnace/AI-Agent-Workflow) — strong engineering source: focuses on public-safe workflow export, placeholder credentials, validation, and secret-leak prevention.
   - What it does: Shows the architecture of a personal n8n operations agent with Telegram/chat/schedules/tools, GitHub-backed memory framing, import instructions, and a validation script that checks for leaked secret-like values.
   - How to reproduce in Hermes: Use Hermes profiles for different personas, `.env` for secrets, skills for persistent operating procedures, cron for scheduled checks, and a pre-commit or CI script that scans report/workflow exports before publishing.
   - Business potential: Useful for building a public portfolio of automations without leaking private account details. This matters if Konrad wants to publish workflow case studies.
   - Risk/note: Sanitization can remove too much implementation detail; keep diagrams and placeholder schemas so the workflow remains learnable.

11. **Reusable skill catalog for content operations and agent workflows**
   - Source: [GitHub / thedavidweng / Skills](https://github.com/thedavidweng/skills) — relevant ecosystem source: explicitly compatible with Hermes Agent and OpenClaw.
   - What it does: Packages reusable agent skills for personal knowledge wiki maintenance, inline linking, audits, slug renames, and other content/developer workflows.
   - How to reproduce in Hermes: Install or mirror the useful patterns as Hermes skills. For Konrad, the interesting angle is not the exact wiki tooling but the “workflow as skill” packaging: every repeated content/research operation should become a skill with inputs, rules, and examples.
   - Business potential: High leverage for compounding operations. Skills turn one-off agent prompting into a repeatable internal playbook.
   - Risk/note: Treat third-party skills as code/instructions; inspect before installing and avoid giving them unnecessary access.

12. **Desktop/runtime wrapper for persistent agent channels, crons, skills, and ecommerce/customer-service modules**
   - Source: [GitHub / gaoyangz77 / RivonClaw](https://github.com/gaoyangz77/rivonclaw) — interesting adjacent-source quality: OpenClaw-based, not Hermes, but the runtime-management pattern maps well.
   - What it does: Wraps a persistent agent runtime in a desktop app with provider management, channel integrations, skills, crons, settings, billing/account surfaces, ecommerce modules, customer-service bridge, and affiliate workflow support.
   - How to reproduce in Hermes: Use Hermes gateway for channels, profiles for separated agents, cron for scheduled missions, skills for procedures, and a dashboard like Hermes Dash for report browsing. The “business cockpit” idea is the key transferable pattern.
   - Business potential: Useful inspiration for productizing agent workflows for clients: a visible control panel makes automations feel safer and sellable.
   - Risk/note: This is an adjacent OpenClaw project, not a Hermes tutorial. Port the architecture concept, not its exact implementation.

## 3 workflows for Konrad to test

- **Test 1: Daily AI/design visibility scout → LinkedIn carousel/newsletter seed**
  - Source to reuse: [kkrishna08 / Ai-Marketting-Agent](https://github.com/kkrishna08/Ai-Marketting-Agent) and [AdityaWanddhekr / ai-marketing-automation-agent](https://github.com/AdityaWanddhekr/ai-marketing-automation-agent).
  - First step: Create a Hermes cron that scans 5–10 AI/design/product sources and returns one strong angle, one 5-slide outline, and one short LinkedIn caption.
  - Minimal setup: Hermes cron, `web` toolset, Telegram delivery, one `konrad-voice` skill, and a Markdown folder for approved posts.
  - Success metric: 5 approved post drafts in 7 days, with at least 2 that Konrad would publish after light editing.

- **Test 2: Founder reputation engine for Konrad’s AI/design topics**
  - Source to reuse: [sinabarimd / Reputation Engine](https://github.com/sinabarimd/reputation-engine) and [Juliankie-creator / SEO Blog Automation](https://github.com/Juliankie-creator/seo-blog-automation).
  - First step: Pick 3 topic pillars: AI workflows for creators, design automation, and agentic content ops. Generate a weekly content map with article titles, search intent, source links, and a personal POV requirement.
  - Minimal setup: Hermes cron for topic discovery, local Markdown content queue, optional GSC/DataForSEO later, Telegram approval before drafting.
  - Success metric: 4 publishable article outlines and 1 finished article draft with citations and internal-link suggestions.

- **Test 3: Warm lead dossier + cold email draft, approval-gated**
  - Source to reuse: [byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent) and [Nadeer00 / Agentic AI Marketing Workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow).
  - First step: Define one offer, e.g. “AI workflow audit for content/design teams,” and feed 10 target companies manually through a Hermes webhook or CSV.
  - Minimal setup: Hermes webhook or file intake, `web` research, Markdown/JSON lead dossiers, Telegram approval, Gmail draft creation only after approval.
  - Success metric: 10 dossiers with specific personalization hooks and 3 emails Konrad judges worth sending.

## Setup notes / tutorial nuggets

- Hermes cron jobs should be self-contained because scheduled sessions do not inherit chat context. Official command pattern: use `hermes cron create SCHED`, then include skills/toolsets/model/delivery in the job config as needed. Source: [Hermes Agent docs / Cron](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron).
- For Telegram-friendly reports, avoid tables and use headings/bullets. This is also safer for saved Markdown dashboards because links remain directly clickable.
- For a Hermes version of the n8n lead-gen patterns, split the system into deterministic stages: `collect candidates → enrich → score → draft → human approve → send/publish`. The Nadeer workflow is a good reference because it explicitly includes human review before email sending: [Nadeer00 / agentic-ai-marketing-workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow).
- For SEO/content workflows, store every generated asset as Markdown with source links and status fields before publishing. The Juliankie pipeline shows why separation matters: topic discovery, SERP brief, writing, editing, schema, translation, and publishing are distinct stages: [SEO Blog Automation](https://github.com/Juliankie-creator/seo-blog-automation).
- For opportunity scouting, copy the Job Alert Agent’s structured scoring idea: force JSON with score, verdict, and reason, then send only top matches. Source: [sebpost2 / job-alert-agent](https://github.com/sebpost2/job-alert-agent).
- For public workflow case studies, sanitize before publishing. Keep placeholder credentials and diagrams, but scan for private IDs, tokens, webhook URLs, and local paths. Source: [bpnace / AI-Agent-Workflow](https://github.com/bpnace/AI-Agent-Workflow).
- For Hermes setup commands, prefer official docs over third-party snippets: install with `curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash`, run `hermes setup`, check `hermes doctor`, and create one-shot tasks with `hermes chat -q "..."`. Source: [Hermes Agent docs](https://hermes-agent.nousresearch.com/docs/).
- If using third-party skills, inspect before installing. The David Weng skills repo is useful as a packaging model for content operations, but any skill can alter agent behavior: [thedavidweng / skills](https://github.com/thedavidweng/skills).

## Link dump

- [sinabarimd / Reputation Engine](https://github.com/sinabarimd/reputation-engine) — best inspiration for a personal authority/SEO operating system.
- [Juliankie-creator / SEO Blog Automation](https://github.com/Juliankie-creator/seo-blog-automation) — concrete multi-stage SEO/AEO article pipeline with cost and setup notes.
- [byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent) — webhook-based company research and cold outreach drafting pattern.
- [Nadeer00 / Agentic AI Marketing Workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow) — lead scraping, email verification, human approval, Gmail, Sheets, and LinkedIn repurposing.
- [AdityaWanddhekr / ai-marketing-automation-agent](https://github.com/AdityaWanddhekr/ai-marketing-automation-agent) — Telegram content request to multi-agent approval and scheduled publishing.
- [kkrishna08 / Ai-Marketting-Agent](https://github.com/kkrishna08/Ai-Marketting-Agent) — RSS/news to LinkedIn carousel package with slide copy and prompts.
- [yarendmr / n8n AI Content Agent Workflow](https://github.com/yarendmr/n8n-ai-content-agent-workflow) — SerpAPI + WordPress-ready SEO content generation pipeline.
- [Supreme-jay / Autonomous SEO Research Blog Agent](https://github.com/Supreme-jay/Autonomous-seo-research-blog-agent) — Google Sheets-based content idea, research, draft, review, and publish tracker.
- [sebpost2 / Job Alert Agent](https://github.com/sebpost2/job-alert-agent) — strong pattern for any scheduled opportunity scout with scoring, dedupe, archive, and Telegram digest.
- [bpnace / AI-Agent-Workflow](https://github.com/bpnace/AI-Agent-Workflow) — public-safe personal operations agent architecture and leak-validation idea.
- [thedavidweng / Skills](https://github.com/thedavidweng/skills) — useful reference for packaging repeatable content operations as agent skills.
- [Hermes Agent official docs](https://hermes-agent.nousresearch.com/docs/) — source of truth for Hermes setup, cron, gateway, skills, profiles, and commands.
