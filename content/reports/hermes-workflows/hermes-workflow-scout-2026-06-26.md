## Hermes workflow scout — 2026-06-26

Daily verdict: Today’s strongest reusable pattern is not a single shiny agent demo, but a practical split between deterministic collectors and LLM analysts. The best source is a real Hermes deployment that runs profile-isolated Telegram agents, cron jobs, no-token scripts, and low-cost LLM passes; the most directly monetizable adjacent ideas come from n8n community templates for lead generation, SEO publishing, social content, and support automation. X/Twitter and Reddit were blocked or weak in live browsing today, so I used accessible GitHub repositories, n8n template pages, official Hermes docs, and indexed snippets rather than inventing social proof.

## Top workflows / use cases

1. **Dual-profile Hermes CEO/CTO operating system**
   - Source: [GitHub / geraledesma / Hermes Agent Automations](https://github.com/geraledesma/hermes-agent-automations) — high-quality because it documents an actual multi-instance architecture, schedules, cost notes, profile isolation, and Telegram delivery.
   - What it does: Runs two independent Hermes agents on one VPS: a CEO-style personal/ops agent and a CTO-style technical/research agent. Each has its own Telegram bot, profile, memory setting, cron schedule, and model/API key routing.
   - How to recreate in Hermes: Create a second Hermes profile with `hermes profile create cto`, give it a separate config/env and Telegram gateway, keep one profile memory-enabled for personal operations and one stateless for scans/research, then schedule profile-scoped cron jobs. Use Hermes profiles, gateway, cron, skills, and the `--profile` flag.
   - Business potential: This is the foundation for separating personal ops, product research, code review, marketing research, and client-facing automations without cross-contaminating memory or Telegram notifications.
   - Risk/note: Requires careful credential separation and bot routing; do not start cloned gateways with the same bot token.

2. **Zero-token GitHub scan followed by an LLM code/research brief**
   - Source: [GitHub / geraledesma / cron schedule](https://github.com/geraledesma/hermes-agent-automations/blob/main/docs/cron-schedule.md) and [GitHub / geraledesma / scripts reference](https://github.com/geraledesma/hermes-agent-automations/blob/main/docs/scripts.md) — high-quality implementation notes.
   - What it does: A Python script walks GitHub API trees, counts files, flags large files, writes compact JSON, then passes only that JSON into an LLM cron for review and Telegram delivery.
   - How to recreate in Hermes: Make a `no_agent` script that gathers repo metadata into JSON, then chain it into a Hermes cron job using `context_from` or a script pre-run. Deliver the final review via Telegram or save it to Markdown.
   - Business potential: Useful for solo builders and agencies monitoring multiple client repos, detecting project drift, oversized assets, dead files, or release-risk areas without paying tokens for raw collection.
   - Risk/note: The script needs a scoped GitHub token and a strict cap on repos/files; LLM review should be framed as triage, not authoritative security audit.

3. **Weekly planning agent that turns goals into calendar blocks**
   - Source: [GitHub / geraledesma / cron schedule — Weekly Planning](https://github.com/geraledesma/hermes-agent-automations/blob/main/docs/cron-schedule.md) — concrete cron timing and workflow shape.
   - What it does: A data-collection script gathers weekly performance/goals; an LLM agent reviews the week, skips paused goals, proposes next-week blocks, and creates Google Calendar events.
   - How to recreate in Hermes: Use a weekly Hermes cron with a Google Workspace skill or API script. Store goals in a local YAML/Markdown file, collect calendar constraints first, ask Hermes to propose blocks, then require approval before event creation until trusted.
   - Business potential: Strong for founder productivity and agency ops: turns weekly review into scheduled execution, not just a summary.
   - Risk/note: Calendar writes should be gated with human approval at first; bad assumptions about priorities can create noisy calendars.

4. **Reddit lead-monitoring agent with AI qualification and Gmail delivery**
   - Source: [n8n / Ari Nakos / AI Marketing Agent for Lead Generation: Reddit + OpenRouter + Gmail](https://n8n.io/workflows/3935-ai-marketing-agent-for-lead-generation-reddit-openrouter-gmail/) — useful template, but commercial and older; still concrete enough to port.
   - What it does: Monitors Reddit for posts relevant to a business or niche, identifies potential leads, and emails qualified opportunities.
   - How to recreate in Hermes: Schedule a Hermes cron scout with `web` or Reddit API collection, save candidates to a local JSON/SQLite file, use a lead-qualification skill, and deliver a daily Telegram/Gmail brief with links, intent score, pain point, and suggested reply.
   - Business potential: Directly relevant for lead generation, founder-led sales, and agency prospecting; can surface posts where people explicitly ask for tools, vendors, or advice.
   - Risk/note: Reddit access can be blocked or API-limited; outreach must respect subreddit rules and avoid spam.

5. **LinkedIn/Apollo/Apify prospecting plus AI-personalized outreach**
   - Source: [n8n / PrideVel / Automated LinkedIn Lead Generation & AI Personalized Outreach with Apollo & Instantly](https://n8n.io/workflows/11647-automated-linkedin-lead-generation-and-ai-personalized-outreach-with-apollo-and-instantly/) — concrete pipeline, but paid template and deliverability-sensitive.
   - What it does: Turns a search form into scraped/enriched B2B leads, uses AI to personalize outreach, stores rows in Google Sheets, and pushes campaigns into Instantly.
   - How to recreate in Hermes: Use Hermes as the analyst/reviewer layer around Apollo/Apify exports: cron imports CSV/API results, enriches with web research, drafts first-line personalization, checks for red flags, and writes approved messages to a CRM or sheet.
   - Business potential: High for agency sales and productized services if tightly targeted; can reduce manual research time for cold outreach.
   - Risk/note: Deliverability, consent, platform ToS, and hallucinated personalization are the main hazards. Keep manual review and source links for every claim.

6. **Hourly Apollo lead generation with randomized sending and timed follow-ups**
   - Source: [n8n / Deniz / Automate Lead Generation with Apollo, AI Parsing, and Timed Email Follow-ups](https://n8n.io/workflows/9034-automate-lead-generation-with-apollo-ai-parsing-and-timed-email-follow-ups/) — strong operational nugget because it mentions hourly runs, randomized 5–20 minute delay, sent timestamp tracking, and two-day follow-ups.
   - What it does: Retrieves lead data, parses it with AI, emails prospects, records the sent time, and schedules follow-ups.
   - How to recreate in Hermes: Let Hermes cron run hourly or daily, but keep sending in a deterministic mailer/CRM. Hermes should generate personalized variants, enforce suppression rules, and output a review queue; the sending tool handles rate limits and follow-up timing.
   - Business potential: Useful for repeatable sales motions and agency outbound systems.
   - Risk/note: Never let an LLM autonomously blast cold emails without caps, unsubscribe handling, suppression lists, and human review.

7. **Google Places / Maps B2B lead engine with AI enrichment**
   - Source: [n8n / Onur / Automated B2B Lead Generation: Google Places, Scrape.do & AI Enrichment](https://n8n.io/workflows/8448-automated-b2b-lead-generation-google-places-scrapedo-and-ai-enrichment/) — concrete source and free template.
   - What it does: Finds businesses by category/location, scores quality, scrapes/enriches public website data, and stores leads in a sheet.
   - How to recreate in Hermes: Build a Hermes cron that takes a niche and city list, calls Google Places or SerpAPI, visits company sites with `web`/browser only when needed, extracts contact and positioning facts, then ranks opportunities by fit and missing-growth signals.
   - Business potential: Good for local-service lead gen, audits, directory products, and niche agency prospecting.
   - Risk/note: Scraping and email extraction need legal/compliance review; use APIs where possible.

8. **SEO blog publisher from Sheets to research to WordPress**
   - Source: [n8n / LukaszB / Automate SEO blog content creation with GPT-4, Perplexity AI and WordPress](https://n8n.io/workflows/3874-automate-seo-blog-content-creation-with-gpt-4-perplexity-ai-and-wordpress/) — useful template, but paid and older.
   - What it does: Generates long-form SEO-optimized blog posts from a sheet/topic queue and publishes them to WordPress.
   - How to recreate in Hermes: Use a Hermes content-ops profile with a topic backlog Markdown/CSV, a research scout cron, a drafting cron, and a human-approval checkpoint before publishing through WordPress API. Store drafts and source links as Markdown.
   - Business potential: Strong for Konrad’s AI/design visibility if used for high-quality briefs, teardown posts, or workflow tutorials rather than generic SEO sludge.
   - Risk/note: Fully automated publishing can damage trust; keep source preservation, originality checks, and manual editorial approval.

9. **Multi-agent SEO blog/newsletter production with OpenRouter, image generation, and Airtable/Sheets**
   - Source: [n8n / Hemanth Arety / Multi-Agent AI Content Creator for SEO Blogs & Newsletters](https://n8n.io/workflows/10293-multi-agent-ai-content-creator-for-seo-blogs-and-newsletters-with-openrouter-dall-e-gemini/) — free template with relevant multi-agent content architecture.
   - What it does: Targets content creators, marketers, bloggers, and businesses that need SEO blog posts and newsletters at scale using multiple AI roles and content storage.
   - How to recreate in Hermes: Split into Hermes skills or profiles: researcher, outline editor, writer, image-prompt generator, QA/editor. Use Kanban for article states: idea → researched → drafted → reviewed → published.
   - Business potential: Can become a reusable content factory for personal brand, client newsletters, and product education.
   - Risk/note: Multi-agent content pipelines amplify weak briefs; require a strict style guide and evidence checklist.

10. **Human-in-the-loop SEO drafting in Google Docs**
   - Source: [n8n / Priyanka Rana / SEO Blog Content Automation with GPT-4o-mini and Human Approval in Google Docs](https://n8n.io/workflows/11285-seo-blog-content-automation-with-gpt-4o-mini-and-human-approval-in-google-docs/) — strong pattern because it explicitly keeps approval in the loop.
   - What it does: Takes topic submissions, drafts SEO content, routes it for human approval/revision, and stores final output in Google Docs.
   - How to recreate in Hermes: Use Hermes to generate drafts into local Markdown or Google Docs, send Telegram approval summaries, and only publish after a manual `/approve` or dashboard status change. A cron can check approved files and publish them.
   - Business potential: Good balance for content ops: reduces blank-page time while protecting quality.
   - Risk/note: Needs a clear reviewer checklist: claim verification, links, tone, CTA, and duplicate-content risk.

11. **Telegram-driven social content generator from voice/text prompts**
   - Source: [n8n / Onur / Create Social Media Content from Telegram with AI](https://n8n.io/workflows/3057-create-social-media-content-from-telegram-with-ai/) — directly portable to Hermes gateway.
   - What it does: A user sends a topic through Telegram as voice or text; the workflow researches, creates social copy, and generates image prompts.
   - How to recreate in Hermes: Use Hermes Telegram gateway, STT if using voice, `web` for research, a social-writing skill, and a file-backed content queue. Return platform-specific variants for X, LinkedIn, Instagram, and newsletter hooks.
   - Business potential: Useful for capturing ideas immediately and turning them into daily visibility assets.
   - Risk/note: Social posts should not be auto-posted until voice, claims, and links are checked.

12. **Reddit trend monitor that outputs business ideas and social strategy to Telegram**
   - Source: [n8n / Femi Ad / Generate Business Ideas & Social Media Content from Reddit with AI Analysis to Telegram](https://n8n.io/workflows/7744-generate-business-ideas-and-social-media-content-from-reddit-with-ai-analysis-to-telegram/) — good conceptual fit for daily scouting.
   - What it does: Monitors Reddit communities, analyzes business opportunities, and generates targeted social content ideas for entrepreneurs or automation agencies.
   - How to recreate in Hermes: Create a Hermes cron with a fixed subreddit/query list, collect URLs/snippets, score pain intensity and monetization angle, then deliver only the top 3 opportunities with suggested content angles.
   - Business potential: Strong for product ideation, content-market fit, and finding pain points for micro-SaaS or service offers.
   - Risk/note: Reddit browsing was blocked in today’s live check; use API/RSS/search snippets and always label access limitations.

13. **Customer support inbox triage with vector knowledge base and Telegram escalation**
   - Source: [n8n / Khair Ahammed / Automated Customer Support System with Gmail, GPT-4 & Vector Knowledge Base](https://n8n.io/workflows/12577-automated-customer-support-system-with-gmail-gpt-4-and-vector-knowledge-base/) — commercial template, but clear architecture.
   - What it does: Processes incoming Gmail support messages, retrieves relevant knowledge-base context, drafts replies, and escalates complex cases through Telegram.
   - How to recreate in Hermes: Use a support profile with access to docs/FAQ files, Gmail API or exported inbox snippets, a retrieval step, and Telegram approval. Hermes can draft replies and classify urgency while humans send final responses.
   - Business potential: Saves time for small products and agencies; creates a searchable corpus of repeated objections and feature requests.
   - Risk/note: Customer data privacy and hallucinated support promises are serious risks; enforce citations to internal docs and manual send approval.

## 3 workflows for Konrad to test

- **Test 1: Hermes visibility/content operating system**
  - Source: [n8n / Hemanth Arety / Multi-Agent AI Content Creator](https://n8n.io/workflows/10293-multi-agent-ai-content-creator-for-seo-blogs-and-newsletters-with-openrouter-dall-e-gemini/) plus [Hermes docs / cron](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron).
  - First step: Create a local Markdown backlog with 10 article ideas about AI design workflows, Hermes use cases, and automation teardown posts.
  - Minimal setup: One Hermes cron for research briefs, one drafting prompt that saves Markdown, and one Telegram approval summary. No auto-publish yet.
  - Measure of success: 3 publishable outlines or drafts per week, each with source links and a concrete distribution plan.

- **Test 2: Reddit/X pain-point scout for AI design/product services**
  - Source: [n8n / Femi Ad / Reddit business ideas to Telegram](https://n8n.io/workflows/7744-generate-business-ideas-and-social-media-content-from-reddit-with-ai-analysis-to-telegram/) and [n8n / Ari Nakos / Reddit lead generation](https://n8n.io/workflows/3935-ai-marketing-agent-for-lead-generation-reddit-openrouter-gmail/).
  - First step: Define 8–12 queries/subreddits around design systems, AI prototyping, productized services, founder content, and automation bottlenecks.
  - Minimal setup: A Hermes daily cron with web/search collection, local JSON dedupe, a scoring rubric, and Telegram delivery of top 3 pain points plus suggested reply/content angle.
  - Measure of success: At least 5 high-quality lead/content opportunities per week and at least 1 conversation or post generated from them.

- **Test 3: Zero-token repo/product monitor with LLM weekly review**
  - Source: [GitHub / geraledesma / scripts reference — repo-scanner](https://github.com/geraledesma/hermes-agent-automations/blob/main/docs/scripts.md).
  - First step: Pick Konrad’s active repos/products and write a small collector that records commits, open issues, docs changes, and file-size anomalies.
  - Minimal setup: `no_agent` script saves compact JSON; weekly Hermes cron summarizes product/engineering risks and suggests next actions.
  - Measure of success: One weekly brief that catches at least one stale area, docs gap, landing-page opportunity, or release risk.

## Setup notes / tutorial nuggets

- Hermes cron jobs can run self-contained research prompts, scripts, profile-scoped tasks, and delivery routing; for recurring scouts, prompts must include all context because cron sessions do not inherit chat context. Source: [Hermes docs / Cron](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron).
- Hermes profiles are the clean way to run separate agents with isolated config, memory, sessions, skills, cron jobs, and gateway credentials. Source: [Hermes docs / Profiles](https://hermes-agent.nousresearch.com/docs/user-guide/profiles) and [GitHub / geraledesma / architecture reference](https://github.com/geraledesma/hermes-agent-automations/blob/main/docs/architecture.md).
- For low-cost automation, collect deterministically first and ask the LLM to analyze compact JSON second. The geraledesma repo’s repo-scanner pattern uses GitHub API collection before an LLM review pass. Source: [GitHub / geraledesma / scripts reference](https://github.com/geraledesma/hermes-agent-automations/blob/main/docs/scripts.md).
- Use Telegram as a review/approval surface, not only as a notification sink. This appears in the Hermes multi-profile deployment and several n8n templates that deliver leads, support escalations, or social drafts to Telegram. Sources: [GitHub / geraledesma / Hermes Agent Automations](https://github.com/geraledesma/hermes-agent-automations) and [n8n / Create Social Media Content from Telegram with AI](https://n8n.io/workflows/3057-create-social-media-content-from-telegram-with-ai/).
- For outbound workflows, separate AI drafting from sending. The n8n Apollo timed-follow-up template mentions randomized delays and follow-up tracking; in Hermes, keep the same concept but add manual review, suppression lists, and source-backed personalization. Source: [n8n / Apollo AI parsing and timed follow-ups](https://n8n.io/workflows/9034-automate-lead-generation-with-apollo-ai-parsing-and-timed-email-follow-ups/).
- For SEO/content automation, keep a human approval gate in Google Docs, Markdown, or a dashboard before publishing. Source: [n8n / SEO Blog Content Automation with Human Approval in Google Docs](https://n8n.io/workflows/11285-seo-blog-content-automation-with-gpt-4o-mini-and-human-approval-in-google-docs/).
- If a recurring scout says it cannot search or returns generic output, first diagnose tool availability and profile-scoped setup rather than rewriting the prompt. Source: [Hermes docs / Tools reference](https://hermes-agent.nousresearch.com/docs/reference/tools-reference) and the Hermes skill guidance for cron/web troubleshooting.

## Link dump

- [GitHub: geraledesma/hermes-agent-automations](https://github.com/geraledesma/hermes-agent-automations) — best concrete Hermes multi-agent deployment source found today.
- [GitHub: Hermes cron schedule in geraledesma repo](https://github.com/geraledesma/hermes-agent-automations/blob/main/docs/cron-schedule.md) — useful examples of CEO/CTO schedules, no-agent scripts, Telegram delivery, and cost estimates.
- [GitHub: Hermes scripts reference in geraledesma repo](https://github.com/geraledesma/hermes-agent-automations/blob/main/docs/scripts.md) — reusable deterministic-collector → LLM-analysis pattern.
- [Hermes official docs: Cron](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron) — source of truth for Hermes recurring jobs.
- [Hermes official docs: Profiles](https://hermes-agent.nousresearch.com/docs/user-guide/profiles) — source of truth for isolated profile-based agents.
- [n8n: Reddit + OpenRouter + Gmail lead-generation agent](https://n8n.io/workflows/3935-ai-marketing-agent-for-lead-generation-reddit-openrouter-gmail/) — useful lead-monitoring pattern to port into Hermes cron.
- [n8n: LinkedIn/Apollo/Apify/Instantly outreach workflow](https://n8n.io/workflows/11647-automated-linkedin-lead-generation-and-ai-personalized-outreach-with-apollo-and-instantly/) — concrete outbound architecture; use with compliance and review.
- [n8n: Google Places/Scrape.do/AI enrichment B2B leads](https://n8n.io/workflows/8448-automated-b2b-lead-generation-google-places-scrapedo-and-ai-enrichment/) — good local business prospecting pattern.
- [n8n: Multi-agent SEO blogs and newsletters](https://n8n.io/workflows/10293-multi-agent-ai-content-creator-for-seo-blogs-and-newsletters-with-openrouter-dall-e-gemini/) — strong content-factory inspiration for Hermes skills/profiles/Kanban.
- [n8n: SEO drafts with human approval in Google Docs](https://n8n.io/workflows/11285-seo-blog-content-automation-with-gpt-4o-mini-and-human-approval-in-google-docs/) — practical human-in-the-loop publishing pattern.
- [n8n: Telegram social media content generator](https://n8n.io/workflows/3057-create-social-media-content-from-telegram-with-ai/) — directly portable to Hermes Telegram gateway.
- [n8n: Reddit business ideas and social content to Telegram](https://n8n.io/workflows/7744-generate-business-ideas-and-social-media-content-from-reddit-with-ai-analysis-to-telegram/) — good template for daily pain-point scouting.

Saved local path: /Users/koni/Desktop/hermes/usecases/hermes-workflow-scout-2026-06-26.md
Dashboard path: /Users/koni/Desktop/dev/hermes-dash/content/reports/hermes-workflows/hermes-workflow-scout-2026-06-26.md
