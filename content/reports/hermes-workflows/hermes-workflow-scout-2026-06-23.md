## Hermes workflow scout — 2026-06-23

- Short verdict of the day: the strongest practical pattern today is not “one big autonomous agent”, but small persistent agent systems around source collection, review gates, saved Markdown/Sheets state, and scheduled delivery. GitHub was much more useful than X/Reddit today: Reddit JSON returned 403 and Google/Bing search pages were blocked by bot challenges, so I leaned on accessible GitHub repos, n8n templates, and official Hermes/n8n docs rather than inventing social metrics.
- Best immediate opportunity for Konrad: clone the lead-gen/outreach patterns from n8n repos into Hermes cron + Sheets/CRM + Telegram approval, then publish the daily learnings as a public workflow log.

## Top workflows / use cases

1. **Webhook-driven B2B company research and personalized outreach pack**
   - Source: [GitHub / byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent) — strong because the README exposes the architecture and includes an importable n8n workflow JSON.
   - What it does: receives a company name/domain payload, researches the target with Tavily and web scraping, then generates a structured cold-outreach script. The repo frames it as replacing a manual, hours-long prospecting task.
   - How to reproduce in Hermes: create a webhook route or scheduled CSV/Sheet poller; use `web`/browser for company research; save structured JSON per prospect; use a `sales-research` skill for scoring; deliver each draft to Telegram for manual approval before sending through Gmail/CRM.
   - Business potential: high for agency/client acquisition, partnership outreach, founder-led sales, and niche account research.
   - Risk/note: requires search/scraper APIs and strict human review; do not auto-send cold email without deliverability and compliance checks.

2. **End-to-end marketing outreach workflow with email verification and approval**
   - Source: [GitHub / Nadeer00 / agentic-ai-marketing-workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow) — strong practical source; README lists Serper, Hunter, Groq, Gmail, Google Sheets, Docker, and manual approval.
   - What it does: scrapes Google for companies in an industry/city, verifies email addresses, generates personalized emails, sends via Gmail, creates LinkedIn posts, and logs everything in Sheets.
   - How to reproduce in Hermes: use a daily cron prompt with Serper/Hunter API calls in a script step; let Hermes rank and personalize leads; use Telegram gateway for approve/deny; write accepted leads and outreach status to Google Sheets or a local Markdown/CSV pipeline.
   - Business potential: very high for lead generation, cold outreach, and content-assisted sales loops.
   - Risk/note: Hunter/Serper/Gmail OAuth setup is the operational bottleneck; human-in-the-loop is not optional if the brand voice matters.

3. **Entity-first personal reputation engine for SEO and AI search visibility**
   - Source: [GitHub / sinabarimd / reputation-engine](https://github.com/sinabarimd/reputation-engine) and [article / Dr. Sina Bari / How I Built a Personal Reputation Engine with AI Agents](https://sinabarimd.com/articles/how-i-built-a-personal-reputation-engine.html) — strong because it includes a repo, article, measurement scripts, schemas, workflows, and changelog.
   - What it does: coordinates multi-site publishing, structured data, SERP/GSC measurement, QA, and daily action reconciliation across owned domains.
   - How to reproduce in Hermes: create profile-specific content agents for each property, schedule daily/weekly cron reports, save Markdown briefs into a dashboard folder, use skills for editorial voice and EEAT checks, and add a measurement script that pulls GSC/GA4/keyword data before the model summarizes actions.
   - Business potential: high for Konrad’s AI/design visibility, especially if converted into public “building in the open” content and search-indexable artifacts.
   - Risk/note: avoid content spam; the durable value is measurement + editorial consistency, not bulk generation.

4. **Modular SEO operations system with specialist agents and reusable skills**
   - Source: [GitHub / tarekcxl / ai-seo-system](https://github.com/tarekcxl/ai-seo-system) — good architecture source; appears oriented around Claude-style agents/skills, but the structure maps cleanly to Hermes skills/profiles.
   - What it does: organizes SEO analysis, technical audits, competitor research, content strategy, writing, optimization, evaluation, and project tracking into specialized agents and workflows.
   - How to reproduce in Hermes: create Hermes skills for `seo-analyst`, `technical-seo`, `competitor-research`, `content-brief`, and `content-evaluator`; run a weekly cron that reads GSC/GA4 exports and outputs prioritized tasks; use Kanban for multi-step implementation cards.
   - Business potential: high for SEO/content ops and agency retainers because it turns messy analysis into repeatable deliverables.
   - Risk/note: sources do not prove traffic gains; treat as an operating-system pattern, not a guaranteed growth hack.

5. **Reusable content workflow agent with onboarding, source analysis, SEO metadata, review, and optional publishing**
   - Source: [GitHub / drazewski / content-workflow-agent](https://github.com/drazewski/content-workflow-agent) — strong for process design; README emphasizes onboarding, AGENTS.md, skills, review, and publication-ready Markdown.
   - What it does: creates a structured workspace for articles/blog posts/reports with project context, source analysis, editorial guidance, SEO metadata, taxonomy, review pipeline, and optional WordPress draft publishing.
   - How to reproduce in Hermes: make a per-publication `project-context.md`; save brand/editorial voice as a skill; run a cron that proposes topics from research sources; write drafts to Markdown; require Telegram approval before WordPress/API publishing.
   - Business potential: high for content velocity without losing editorial standards.
   - Risk/note: publishing integrations should stay disabled until review quality is proven.

6. **Claude-style skills library for content multiplication, client finding, and Gmail/Sheets workflows**
   - Source: [GitHub / jayco2610 / claude-skills](https://github.com/jayco2610/claude-skills) — useful source for reusable instruction design; not Hermes-specific, but directly portable into Hermes skills.
   - What it does: packages repeatable skills for content strategy, content repurposing, copy editing, client finding, personal branding, Gmail/Sheets, and subagent-driven development.
   - How to reproduce in Hermes: port the highest-value skills into `~/.hermes/skills/` or project-local skill docs; combine `content-zavod`-style repurposing with a daily source-ingestion cron and Telegram review.
   - Business potential: medium-high for turning one research artifact into LinkedIn posts, newsletter snippets, blog drafts, outreach angles, and design commentary.
   - Risk/note: skill collections can become vague; track outputs and prune anything that does not save time.

7. **n8n landing-page analyzer as a scheduled conversion-review scout**
   - Source: [n8n template / Analyze Landing Page with OpenAI and Get Optimization Tips](https://n8n.io/workflows/3100-analyze-landing-page-with-openai-and-get-optimization-tips/) — good lightweight template source.
   - What it does: fetches a landing page and asks an AI agent for optimization advice.
   - How to reproduce in Hermes: weekly cron over Konrad’s sites/product pages; browser/web extraction; output a Markdown issue list with copy, positioning, CTA, SEO, and design notes; push top tasks to Kanban.
   - Business potential: medium-high for conversion rate improvements and faster landing-page iteration.
   - Risk/note: generic LLM CRO advice is noisy; pair it with analytics, heatmaps, or real user questions.

8. **Google Sheets conversational analyst for pipeline/content ops data**
   - Source: [n8n template / Talk to your Google Sheets using ChatGPT-5](https://n8n.io/workflows/7639-talk-to-your-google-sheets-using-chatgpt-5/) — good source for a concrete Sheets + agent pattern.
   - What it does: connects an AI agent to Google Sheets so the user can query structured business data conversationally.
   - How to reproduce in Hermes: keep leads/content ideas/report metrics in Sheets or CSV; run Hermes with a Google Sheets API helper script; expose daily Telegram questions like “which leads need follow-up?” or “which content topic has the strongest evidence?”
   - Business potential: medium for ops visibility and follow-up discipline.
   - Risk/note: permissions and data freshness matter; avoid letting the agent mutate rows without audit logs.

9. **Google Drive RAG assistant for company docs and sales/support knowledge**
   - Source: [n8n template / RAG chatbot for company documents using Google Drive and Gemini](https://n8n.io/workflows/2753-rag-chatbot-for-company-documents-using-google-drive-and-gemini/) — good template source for document-triggered RAG.
   - What it does: watches Google Drive, indexes company documents, and answers questions using retrieved context.
   - How to reproduce in Hermes: schedule a Drive export/index script; store compact summaries in files; use Hermes skills for support/sales answer style; deliver unresolved questions to Telegram or Slack.
   - Business potential: medium-high for customer support, sales enablement, and founder knowledge reuse.
   - Risk/note: hallucination control requires citations and refusal rules when docs do not support an answer.

10. **Graph-like Hermes workflow layer over Cron, Kanban, and Profiles**
   - Source: [GitHub / itechmeat / hermes-workflows](https://github.com/itechmeat/hermes-workflows) — interesting Hermes-native pattern; early-stage repo, evaluate cautiously.
   - What it does: describes multi-step automations as graph specs that compile into native Hermes primitives: Kanban cards, Cron jobs, Profiles, review gates, and delivery routing.
   - How to reproduce in Hermes: even without the plugin, model the same pattern manually: one cron creates Kanban cards, profile-specific workers execute cards, review gates deliver to Telegram, and final artifacts are saved to Markdown/GitHub.
   - Business potential: high for repeatable launch/content/product pipelines where several agents handle research, writing, design QA, and publishing.
   - Risk/note: because the source appears new and not official, treat it as inspiration until the code is inspected locally.

11. **Telegram/personal assistant interface for daily workflow capture**
   - Source: [n8n template / Personal life manager with Telegram, Google services & voice-enabled AI](https://n8n.io/workflows/8237-personal-life-manager-with-telegram-google-services-and-voice-enabled-ai/) and [n8n template / Angie, personal AI assistant with Telegram voice and text](https://n8n.io/workflows/2462-angie-personal-ai-assistant-with-telegram-voice-and-text/) — useful for Telegram UX patterns.
   - What it does: uses Telegram, Google services, memory, and voice/text input to capture tasks and route assistant actions.
   - How to reproduce in Hermes: use Hermes Gateway with Telegram, `/sethome`, cron reports, voice transcription if configured, and lightweight memory/skills for “inbox triage → action suggestions → saved note”.
   - Business potential: medium for reducing coordination friction and capturing ideas while mobile.
   - Risk/note: personal assistant workflows get noisy quickly; keep command verbs and delivery formats narrow.

12. **Mobile operator cockpit for approving risky agent actions**
   - Source: [GitHub / tinyleed / hermes-agent-ios](https://github.com/tinyleed/hermes-agent-ios) — Hermes-specific but early-stage; valuable as a supervision concept.
   - What it does: turns iPhone into an operator surface for Hermes-backed workflows: approvals, status visibility, redacted secret/sudo prompts, and mobile supervision.
   - How to reproduce in Hermes today: use Telegram gateway approvals and clear report footers as the first version; later, build a small web/mobile dashboard that reads session/job state and exposes approve/deny controls.
   - Business potential: medium for safely running longer automations without sitting at the terminal.
   - Risk/note: approval UX must never leak secrets into transcripts or logs.

## 3 workflows for Konrad to test

- **Lead research + personalized outreach approval loop**
  - Source: [Nadeer00 / agentic-ai-marketing-workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow) and [byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent).
  - First step: define one narrow ICP, e.g. “AI/design founders needing conversion-focused product pages”.
  - Minimal setup: CSV/Google Sheet with 20 target companies, Hermes cron, web research, a `cold-outreach-review` skill, Telegram delivery with approve/deny.
  - Success metric: 20 researched leads, 10 approved emails, at least 2 replies or useful conversations; no fully automated sending until deliverability is validated.

- **Personal reputation engine for AI/design visibility**
  - Source: [sinabarimd / reputation-engine](https://github.com/sinabarimd/reputation-engine).
  - First step: choose two owned surfaces: personal site/blog and Hermes Dash-style public reports.
  - Minimal setup: weekly Hermes cron reading recent work notes, generating one entity-first article outline, one LinkedIn post, one internal SEO task list, and one measurement note.
  - Success metric: four published artifacts in a month, GSC impressions indexed, and a visible reduction in “what should I publish?” decision time.

- **Content workflow agent for source-to-draft publishing**
  - Source: [drazewski / content-workflow-agent](https://github.com/drazewski/content-workflow-agent) and [jayco2610 / claude-skills](https://github.com/jayco2610/claude-skills).
  - First step: create a `project-context.md` for Konrad’s AI/design writing voice and preferred formats.
  - Minimal setup: Hermes skill for editorial voice, cron scout for source collection, Markdown draft folder, Telegram review, optional WordPress/GitHub publishing only after manual approval.
  - Success metric: one source becomes one blog outline, three social posts, and one newsletter section in under 45 minutes.

## Setup notes / tutorial nuggets

- Hermes official setup remains: install with `curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash`, run `hermes setup`, then use `hermes cron create`, `hermes gateway setup`, and `hermes tools enable web` as needed. Source: [Hermes Agent docs](https://hermes-agent.nousresearch.com/docs/).
- For scheduled scouts, keep prompts self-contained and attach the right skills/toolsets; cron sessions do not inherit this chat’s context. Source: [Hermes cron docs](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron).
- For Telegram workflows, use gateway delivery/approval instead of trying to send directly from the report job; the final cron response is delivered by Hermes. Source: [Hermes messaging docs](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/).
- The n8n marketing workflow’s reproducible stack is Docker + Serper + Hunter + Groq + Gmail/Sheets OAuth; in Hermes this maps to a script collection step plus an LLM review/formatting step. Source: [Nadeer00 / agentic-ai-marketing-workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow).
- The lead-gen agent pattern uses webhook input shaped like company name + website, then Tavily/search/scraping and structured JSON output. Source: [byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent).
- The SEO operations repo’s useful pattern is filesystem structure: `/agents`, `/skills`, `/skills/*/references`, and `/workflows`. Hermes can mirror this with skills plus saved Markdown reports. Source: [tarekcxl / ai-seo-system](https://github.com/tarekcxl/ai-seo-system).
- The content workflow repo’s useful rule is onboarding first, then `project-context.md`, then drafts, review, and only then publishing. Source: [drazewski / content-workflow-agent](https://github.com/drazewski/content-workflow-agent).
- Reddit search was blocked today with HTTP 403, and Google/Bing browser search hit bot challenges. I did not include any Reddit/X claim without an accessible direct source.

## Link dump

- [byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent) — concrete webhook-to-research-to-outreach agent pattern.
- [Nadeer00 / agentic-ai-marketing-workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow) — practical n8n lead gen, email verification, Gmail, Sheets, and human approval setup.
- [sinabarimd / reputation-engine](https://github.com/sinabarimd/reputation-engine) — multi-site SEO/reputation automation with measurement and workflow files.
- [How I Built a Personal Reputation Engine with AI Agents](https://sinabarimd.com/articles/how-i-built-a-personal-reputation-engine.html) — narrative explanation of the reputation-engine system.
- [tarekcxl / ai-seo-system](https://github.com/tarekcxl/ai-seo-system) — modular SEO agents/skills/workflows structure worth porting into Hermes.
- [drazewski / content-workflow-agent](https://github.com/drazewski/content-workflow-agent) — reusable content production workspace with onboarding and review pipeline.
- [jayco2610 / claude-skills](https://github.com/jayco2610/claude-skills) — portable skill ideas for content, client-finding, and Gmail/Sheets workflows.
- [n8n / Analyze Landing Page with OpenAI](https://n8n.io/workflows/3100-analyze-landing-page-with-openai-and-get-optimization-tips/) — lightweight landing-page audit workflow.
- [n8n / Talk to your Google Sheets using ChatGPT-5](https://n8n.io/workflows/7639-talk-to-your-google-sheets-using-chatgpt-5/) — Sheets-as-ops-database pattern.
- [n8n / RAG chatbot for company documents using Google Drive and Gemini](https://n8n.io/workflows/2753-rag-chatbot-for-company-documents-using-google-drive-and-gemini/) — Google Drive knowledge assistant pattern.
- [itechmeat / hermes-workflows](https://github.com/itechmeat/hermes-workflows) — early Hermes-native graph-over-Cron/Kanban/Profiles concept.
- [Hermes Agent documentation](https://hermes-agent.nousresearch.com/docs/) — authoritative setup reference for Hermes commands and primitives.
