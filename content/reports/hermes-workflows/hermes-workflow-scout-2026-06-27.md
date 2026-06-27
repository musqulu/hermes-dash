## Hermes workflow scout — 2026-06-27

- Short verdict of the day: the strongest reusable pattern today is still **agentic GTM as files + scheduled runs + human review**, not “one magic marketing agent.” The best examples combine a clear business rubric, source collection, scoring, drafts, and a reviewable output artifact.
- Hermes can reproduce most of these workflows cleanly with cron, skills, profile-scoped context, file outputs, Telegram delivery, and optional CRM/Sheets/API integrations.
- X/Twitter and Reddit search were not reliably accessible from this cron environment; this brief therefore leans on GitHub repos, official docs, and indexed/public project pages. I did not invent engagement metrics or revenue claims.

## Top workflows / use cases

1. **ICP-aware inbound lead triage with drafted first touch**
   - Source: [GitHub / fabioadourado-marketing / icp-lead-triage-agent](https://github.com/fabioadourado-marketing/icp-lead-triage-agent) — strong source; repo includes architecture, Python reference pipeline, n8n workflow JSON, rubric, dashboard, and email drafts.
   - What it does: reads inbound leads, scores them against an ICP rubric with Claude or an offline fallback, routes high-fit leads, and drafts first-touch emails.
   - How to reproduce in Hermes: create a `lead-triage` skill containing the ICP rubric and JSON contract; run a Hermes cron job every morning against a CSV/Google Sheet export; use `web` or CRM/API calls for enrichment; save `qualified-leads-YYYY-MM-DD.md`; deliver a short Telegram summary for manual approval before sending anything.
   - Business potential: direct sales ops leverage — fewer junk leads, faster response time, and reusable segmentation logic for future campaigns.
   - Risk/note: source data is synthetic; real deployment needs CRM permissions, PII handling, opt-in/compliance checks, and human review before outreach.

2. **Folder-native GTM engine for LinkedIn, email, competitor research, content ideas, comments, and blog drafts**
   - Source: [GitHub / akshathakurr / gtm-engine](https://github.com/akshathakurr/gtm-engine) — strong source; README describes six concrete workflows, required API keys, and the “business context as files” UX.
   - What it does: turns a folder of scripts plus a Markdown description of the business into GTM workflows: lead finding, personalized DMs, cold email drafts, competitor analysis, daily content ideas, LinkedIn comment suggestions, and blog building.
   - How to reproduce in Hermes: create `/Users/koni/Desktop/hermes/gtm-context/` with `business.md`, ICP, offers, tone, competitor list, and campaign constraints; add Hermes skills for `linkedin-outreach`, `content-ideas`, and `blog-builder`; schedule cron jobs for daily idea scouting and weekly competitor updates; deliver to Telegram and save Markdown artifacts.
   - Business potential: high for Konrad — it maps directly to visibility, content production, AI/design positioning, and outbound experiments without adding another SaaS layer.
   - Risk/note: LinkedIn/Twitter scraping often needs Apify or another paid collector and can violate platform rules; keep outputs as draft/review queues, not auto-posting.

3. **Provider-agnostic n8n lead generation to Google Sheets**
   - Source: [GitHub / greatman-786 / lead-generation-agent](https://github.com/greatman-786/lead-generation-agent) — medium source; simple repo with workflow JSON and README, but limited proof of production outcomes.
   - What it does: collects leads, qualifies/scores them with an LLM, extracts structured fields, and writes the result into Google Sheets.
   - How to reproduce in Hermes: use Hermes cron as the orchestrator, `web` or a source API for candidate collection, an ICP skill for scoring, and Google Sheets API or CSV files for storage; optionally route “high fit” candidates to Telegram for approval.
   - Business potential: useful for agency/product prospecting, especially if paired with a narrow niche query and a manually reviewed outbound sequence.
   - Risk/note: deliverability and legal compliance are the real bottlenecks; avoid bulk cold email automation until data source, consent basis, and unsubscribe handling are clear.

4. **AI visibility / GEO / AEO audit command for agent workflows**
   - Source: [GitHub / maxaeo / maxaeo-ai-visibility-agent-kit](https://github.com/maxaeo/maxaeo-ai-visibility-agent-kit) — strong source; has install command, MCP setup, audit examples, and distribution checklist.
   - What it does: audits whether a public site is crawlable, understandable, and citable by AI search engines, including `llms.txt`, robots, sitemap, metadata, JSON-LD, and AI crawler readiness.
   - How to reproduce in Hermes: add an `ai-visibility-audit` skill; schedule a weekly Hermes cron job for Konrad’s sites and landing pages; collect public page checks with terminal/web tools; write a prioritized Markdown action list; optionally add MCP integration if the external server is useful.
   - Business potential: strong fit for AI/design visibility — helps turn content and product pages into assets that can be cited by AI search and answer engines.
   - Risk/note: audits can become checklist theater; success metric should be fixed issues, improved crawlability, and citation readiness, not just a long report.

5. **Hermes Cortex: personal agent brain with offline knowledge, web cache, Langfuse, and skills**
   - Source: [GitHub / lukemcqueen / hermes-cortex](https://github.com/lukemcqueen/hermes-cortex) — strong but broad source; repo positions itself as a Hermes add-on with local LLM, GBrain, Langfuse, web cache, sync daemon, and shared skills.
   - What it does: installs a privacy-first personal agent layer around Hermes: persistent knowledge, offline reference lookup, observability, semantic web cache, and a dashboard.
   - How to reproduce in Hermes: start smaller — create one durable “Konrad brain” folder with saved briefs, project notes, ICPs, source lists, and reusable skills; add Langfuse or a lightweight log dashboard only after the daily workflows are stable.
   - Business potential: medium to high as an operating system for recurring research and content ops; especially useful for reusing prior briefs instead of rediscovering the same sources.
   - Risk/note: broad system installs can become maintenance-heavy; adopt only the pieces that directly support revenue/content workflows.

6. **Multi-agent fleet hub with shared memory, task scratchpad, standups, and secrets discipline**
   - Source: [GitHub / UrsushoribilisMusic / agentic-fleet-hub](https://github.com/UrsushoribilisMusic/agentic-fleet-hub) — medium source; detailed architecture, but more engineering-ops than marketing-specific.
   - What it does: centralizes a multi-agent workforce with task scratchpads, structured lessons, dashboards, inboxes, session standups, and vault-first secret handling.
   - How to reproduce in Hermes: use Hermes profiles for distinct roles (`research`, `content`, `sales`, `ops`), Kanban for task routing, and per-profile skills/memory; require every worker to write a short standup or completion note into a shared reports folder.
   - Business potential: useful when Konrad has multiple recurring automations running and needs coordination rather than more one-off prompts.
   - Risk/note: overkill for a solo workflow until at least 3–5 recurring jobs exist; start with one board and one shared Markdown convention.

7. **Schema-aware agent writes to PocketBase/Directus/NocoDB with provenance and enrichment**
   - Source: [GitHub / ambirex / skeem](https://github.com/ambirex/skeem) — strong source; README includes concrete CLI commands, adapters, enrichment, schema discovery, and agent-oriented skill files.
   - What it does: gives agents a stable CLI for reading reference datasets and writing relational data into headless backends without hallucinating schema details.
   - How to reproduce in Hermes: use it as the data layer for a lead/content CRM: Hermes collects opportunities, `skeem` validates schema and writes records, and a cron brief summarizes new/changed records; pair with PocketBase for a lightweight local dashboard.
   - Business potential: strong for building owned datasets: leads, content ideas, competitors, source libraries, and outreach history.
   - Risk/note: adds another dependency and requires schema discipline; use JSON/Markdown first unless the dataset is becoming hard to query.

8. **LinkedIn SSI/content booster with persona graph, truth gate, Buffer integration, and continual learning**
   - Source: [GitHub / samjd-zz / linkedin_ssi_booster](https://github.com/samjd-zz/linkedin_ssi_booster) — medium source; ambitious and detailed, but very broad and partially in active development.
   - What it does: combines persona-grounded content generation, retrieval, confidence scoring, Buffer publishing integration, and learning loops for LinkedIn growth.
   - How to reproduce in Hermes: build a lighter version: weekly source ingestion, daily LinkedIn post drafts, a truth-check section, “do not post automatically” review status, and a Buffer/manual publishing step after approval.
   - Business potential: high if Konrad wants systematic AI/design visibility; can turn research briefs into posts, carousels, and comments.
   - Risk/note: auto-generated social content can drift into blandness or factual errors; require source links and manual edits before publishing.

9. **Multimodal e-commerce listing and SEO generator**
   - Source: [GitHub / TN108 / Multimodal-AI-E-commerce-Intelligence-Automation-Agent](https://github.com/TN108/Multimodal-AI-E-commerce-Intelligence-Automation-Agent) — medium source; early MVP but clear flow and stack.
   - What it does: analyzes a product image, generates title/category/attributes/description/SEO keywords, and returns listing JSON for editing.
   - How to reproduce in Hermes: use image analysis plus a product-listing skill; save listing drafts as Markdown/JSON; add a human approval step; optionally integrate with Shopify/WooCommerce/Etsy APIs later.
   - Business potential: useful for productized service offers to e-commerce sellers or for building a listing-optimization microtool.
   - Risk/note: visual model output needs validation against actual product specs; wrong attributes create customer support and compliance issues.

10. **Agentic marketing skill bundle as a cautionary example**
   - Source: [GitHub / minamagdyyyy / agentic-marketing](https://github.com/minamagdyyyy/agentic-marketing) — weak/promotional source; README is broad, Windows-download oriented, and light on verifiable workflow internals.
   - What it does: presents modular marketing automation tools for planning, channel execution, measurement, and routine tasks.
   - How to reproduce in Hermes: do not copy the package blindly; extract the idea of modular skills for `strategy`, `channel-plan`, `campaign-review`, and `measurement`, then implement each as a transparent Hermes skill with source-linked outputs.
   - Business potential: useful as a reminder to package recurring marketing procedures into skills, not as a ready-to-run system.
   - Risk/note: source quality is weak; avoid downloading opaque binaries or zip payloads into production workflows.

## 3 workflows to test for Konrad

- **Test 1: Daily AI/design visibility idea engine**
  - Source: [GitHub / akshathakurr / gtm-engine](https://github.com/akshathakurr/gtm-engine)
  - First step: create a `business.md` with Konrad’s positioning, target audiences, offers, and content pillars.
  - Minimal setup: Hermes cron + `web` toolset + a `content-ideas` skill + Markdown output folder + Telegram delivery.
  - Success metric: 5 source-backed post ideas per day, with at least 2 good enough to draft or publish weekly.

- **Test 2: Weekly AI visibility audit for Konrad’s public pages**
  - Source: [GitHub / maxaeo / maxaeo-ai-visibility-agent-kit](https://github.com/maxaeo/maxaeo-ai-visibility-agent-kit)
  - First step: pick 3–5 URLs: homepage, product page, key blog post, and profile/portfolio page.
  - Minimal setup: Hermes cron every Monday, terminal/web checks for robots/sitemap/metadata/structured data/`llms.txt`, Markdown action list.
  - Success metric: every weekly report produces 3 concrete fixes, and at least 1 fix is shipped before the next report.

- **Test 3: ICP lead triage for inbound or manually collected prospects**
  - Source: [GitHub / fabioadourado-marketing / icp-lead-triage-agent](https://github.com/fabioadourado-marketing/icp-lead-triage-agent)
  - First step: define a narrow ICP for one offer, for example “AI workflow audits for design/product teams” or “content systems for founder-led AI products.”
  - Minimal setup: CSV/Google Sheet input, Hermes scoring skill, daily cron, Telegram summary with high/medium/low fit, draft first-touch messages saved but not sent.
  - Success metric: response time drops, junk leads are filtered, and at least 5 high-fit prospects receive manually reviewed outreach per week.

## Setup notes / tutorial nuggets

- Hermes recurring scouts should use cron with self-contained prompts, because cron sessions do not inherit this chat context. Official reference: [Hermes Agent docs / Cron Jobs](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron).
- For Hermes setup commands, the authoritative baseline is still `hermes`, `hermes chat -q`, `hermes setup`, `hermes model`, and `hermes doctor`. Official reference: [Hermes Agent docs](https://hermes-agent.nousresearch.com/docs/).
- If a workflow needs Telegram/Slack/email delivery, use the Hermes gateway instead of custom bot glue where possible. Official reference: [Hermes Agent docs / Messaging](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/).
- The lead-triage repo’s useful pattern is to keep the core business logic in a rubric and JSON contract, then let either Python or n8n execute it. Source: [GitHub / fabioadourado-marketing / icp-lead-triage-agent](https://github.com/fabioadourado-marketing/icp-lead-triage-agent).
- The GTM engine’s useful pattern is “business context as files” plus separate workflows for outreach, competitor analysis, content, comments, and blog drafts. Source: [GitHub / akshathakurr / gtm-engine](https://github.com/akshathakurr/gtm-engine).
- The AI visibility kit’s quick-start pattern is to install a workflow layer, add an MCP server, then run a command-mode audit against a URL. Source: [GitHub / maxaeo / maxaeo-ai-visibility-agent-kit](https://github.com/maxaeo/maxaeo-ai-visibility-agent-kit).
- The schema-aware data pattern is to have agents inspect schemas and write with provenance rather than guessing fields. Source: [GitHub / ambirex / skeem](https://github.com/ambirex/skeem).
- For multi-agent systems, start every worker from the same mission/control document and require a completion note. Source: [GitHub / UrsushoribilisMusic / agentic-fleet-hub](https://github.com/UrsushoribilisMusic/agentic-fleet-hub).

## Link dump

- [fabioadourado-marketing / icp-lead-triage-agent](https://github.com/fabioadourado-marketing/icp-lead-triage-agent) — best concrete demand-gen workflow today: rubric, scoring, routing, dashboard, drafts, n8n mirror.
- [akshathakurr / gtm-engine](https://github.com/akshathakurr/gtm-engine) — strongest reusable “GTM team as scripts + business.md” pattern.
- [greatman-786 / lead-generation-agent](https://github.com/greatman-786/lead-generation-agent) — simple n8n-to-Google-Sheets lead qualification pattern.
- [maxaeo / maxaeo-ai-visibility-agent-kit](https://github.com/maxaeo/maxaeo-ai-visibility-agent-kit) — actionable AI visibility/GEO audit workflow that maps well to weekly Hermes cron.
- [lukemcqueen / hermes-cortex](https://github.com/lukemcqueen/hermes-cortex) — ambitious Hermes add-on for personal brain, offline knowledge, cache, and observability.
- [UrsushoribilisMusic / agentic-fleet-hub](https://github.com/UrsushoribilisMusic/agentic-fleet-hub) — useful architecture ideas for multi-profile agent coordination and standups.
- [ambirex / skeem](https://github.com/ambirex/skeem) — promising data-layer CLI for schema-aware agent writes to PocketBase/Directus/NocoDB.
- [samjd-zz / linkedin_ssi_booster](https://github.com/samjd-zz/linkedin_ssi_booster) — content/persona/Buffer inspiration for a safer Hermes-assisted LinkedIn workflow.
- [TN108 / Multimodal-AI-E-commerce-Intelligence-Automation-Agent](https://github.com/TN108/Multimodal-AI-E-commerce-Intelligence-Automation-Agent) — early but clear product-image-to-SEO-listing flow.
- [Hermes Agent docs / Cron Jobs](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron) — required reference for turning these into durable scheduled scouts.
- [Hermes Agent docs / Messaging](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/) — reference for delivering review queues through Telegram/Slack/email.
