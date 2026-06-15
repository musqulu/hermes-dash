## Hermes workflow scout — 2026-06-14

- Short verdict of the day: today the strongest finds are repositories showing **persistent agent workflows as business operations**, not single prompts: SDR/lead-gen on crons and messaging channels, content review pipelines, and “digital employees” delivering daily reports to Telegram. X/Twitter and Reddit were practically unusable this session: Google blocked search, Reddit JSON returned 403, and Bing results for X/Reddit were weak or junk. So below I prioritize freshly updated GitHub repos, official Hermes docs, and repos with real files/architecture.

## Top workflows / use cases

1. **B2B SDR agent with a 10-stage pipeline, crons, and multi-channel follow-up**
   - Source: [GitHub / iPythoning / b2b-sdr-agent-template](https://github.com/iPythoning/b2b-sdr-agent-template) — strong source: repo updated today, describes OpenClaw, 10 cron jobs, memory, WhatsApp/Telegram/Email; treat some of the sales claims as promotional.
   - What it does: an AI SDR template for B2B export: prospecting, contact sequences, memory, WhatsApp/Telegram/Email channels, and deployment health checks. Mentally closest to Hermes: a persistent agent running daily, not a “chatbot.”
   - How to recreate in Hermes: a dedicated `sdr` profile, cron jobs for prospecting/follow-ups, Telegram gateway as the inbox, a skill with the buyer persona and ICP, CSV/Sheets files as the lead database, web/search for company research, Gmail/CRM via API or webhooks.
   - Business potential: lead generation and sales — you could produce a daily “lead brief” + cold email drafts + follow-up reminders. For Konrad, useful as a system for finding AI/design/product companies and partnerships.
   - Risk/note: deliverability, marketing consent, hallucinations in personalization; human review before sending is required.

2. **Hermes Daily Automation: a team of daily “digital employees” delivered to Telegram**
   - Source: [GitHub / schbxg / hermes-daily-automation](https://github.com/schbxg/hermes-daily-automation) — a very on-point Hermes source; the README describes 10+ scheduled tasks, Telegram delivery, and self-review.
   - What it does: a set of Hermes Agent templates that deliver a daily news digest, a course/learning item, TTS audio, interview prep, a finance plan, and a nightly self-review of memory.
   - How to recreate in Hermes: `hermes cron create`, `deliver: origin` or the Telegram gateway, separate skills for the briefs, memory enabled for retrospection, optionally a Markdown folder as a report log. Setup commands consistent with Hermes: `hermes setup`, `hermes gateway setup`, `hermes cron create "0 8 * * *"`.
   - Business potential: content ops and personal knowledge management — from such a system you can produce a daily feed of post ideas, SEO articles, lead magnets, and product experiments.
   - Risk/note: quality depends on the availability of web/search and the model; with a weak model you need a deterministic collection of sources first, and only then ranking.

3. **Multi-instance Hermes: CEO + CTO agents on a VPS with separate Telegram bots**
   - Source: [GitHub / geraledesma / hermes-agent-automations](https://github.com/geraledesma/hermes-agent-automations) — a good architectural source; the repo describes a multi-instance autonomous agent architecture, but verify deployment details before copying.
   - What it does: two independent Hermes agents on a VPS: a “CEO” for planning/calendar/routines and a “CTO” for GitHub/code review/tool discovery; communication via Telegram and crons.
   - How to recreate in Hermes: use Hermes profiles (`hermes profile create ceo`, `hermes profile create cto`), separate gateway credentials, profile-scoped cron jobs, a shared `reports/` folder or kanban board to exchange tasks. Don’t run two gateways on the same bot tokens.
   - Business potential: agency/product ops — the CEO agent does market research and a publishing plan, the CTO agent checks repos, issues, landing pages, performance, and SEO/AI-readiness.
   - Risk/note: gateway credential conflicts, token costs; you need a clear permission scope per profile.

4. **n8n lead-gen researcher: webhook → company research → tech stack → personalized outreach**
   - Source: [GitHub / byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent) — a fresh repo with concrete steps and a sample payload; few stars, so treat it as a reference implementation, not a “proven product.”
   - What it does: n8n takes `company_name` and `website`, uses Gemini, Tavily, and scrapers to research the company, value proposition, launches, and infrastructure, then writes the data into a pipeline.
   - How to recreate in Hermes: a webhook/subscription in Hermes or a simple CSV input file; a cron processes N companies per day; web/search and browser for research; output to Google Sheet/Markdown; a separate step generates the email draft and marks it “for approval.”
   - Business potential: cold outreach and partnerships — a very good workflow for building a list of potential agency clients or newsletter sponsors.
   - Risk/note: web scraping can be unstable; Tavily/Serper/Hunter require APIs; send emails only after manual review.

5. **Agentic AI Marketing Workflow: Serper + Hunter + Groq + Gmail + Sheets + LinkedIn posts**
   - Source: [GitHub / Nadeer00 / agentic-ai-marketing-workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow) — a strong practical blueprint: the README lists integrations, `.env`, Docker Compose, and human-in-the-loop.
   - What it does: finds companies by industry and city via Serper, verifies emails with Hunter, saves to Google Sheets, generates personalized emails via Groq, sends with Gmail, and creates LinkedIn posts.
   - How to recreate in Hermes: Hermes cron as the orchestrator, Google Sheets as lead state, web/search for Serper/Tavily, Gmail API or a draft-only workflow, a “lead qualification” skill, a Telegram review step: “approve/reject.”
   - Business potential: an end-to-end growth loop — a lead list, emails, and social content from a single research pass. For Konrad: target design/AI studios, founders, and SaaS companies that need content/design systems.
   - Risk/note: Hunter/Gmail OAuth and compliance; LinkedIn automation can violate ToS, so it’s better to leave publishing as a draft.

6. **Content review agent: grammar + SEO + readability + rewrite + report**
   - Source: [GitHub / KenBoller / ai-content-review-agent](https://github.com/KenBoller/ai-content-review-agent) — a good source for content ops; LangGraph, local Ollama, and a results dashboard.
   - What it does: a multi-stage content review: grammar, SEO, readability, style, scoring, meta title/description, and a publish-ready rewrite.
   - How to recreate in Hermes: a `drafts/` folder → a cron or manual prompt checks new Markdown files → a Hermes “content-review” skill with brand-voice/SEO criteria → output as `.review.md` + a Telegram summary. You can use a local model for the first pass and a stronger model for the final rewrite.
   - Business potential: blogs, SEO, newsletter, landing pages — saves editing time and enforces a quality checklist before publishing.
   - Risk/note: SEO scoring without data from GSC/Ahrefs is only a heuristic; a human editor is required before publishing.

7. **E-commerce listing agent: product photo → title/category/attributes/SEO keywords**
   - Source: [GitHub / TN108 / Multimodal-AI-E-commerce-Intelligence-Automation-Agent](https://github.com/TN108/Multimodal-AI-E-commerce-Intelligence-Automation-Agent) — an early MVP, but a very concrete product flow.
   - What it does: upload a product photo, a vision model analyzes the image, the backend generates JSON with a title, category, attributes, description, and SEO keywords.
   - How to recreate in Hermes: Hermes as a batch operator: a folder of photos + a product CSV, a vision/image-analysis tool, a skill with marketplace rules, output to JSON/Markdown, optionally pushed to the store via API.
   - Business potential: e-commerce content ops — fast product listing, improved descriptions, and SEO on marketplaces.
   - Risk/note: hallucinated product features are legally risky; technical attributes must come from manufacturer data or a manual check.

8. **Redbook/Xiaohongshu carousel director as a portable agent skill for social content**
   - Source: [GitHub / mythkiven / redbook-director-skill](https://github.com/mythkiven/redbook-director-skill) — valuable as a “skill-first content workflow” pattern; it’s Chinese-language, but the skill structure is easy to port.
   - What it does: an agent skill plans a RedNote/Xiaohongshu carousel: concept, visual style, slide structure, image prompts, caption, and a quality checklist.
   - How to recreate in Hermes: create a `linkedin-carousel-director` or `ai-design-post-director` skill that takes a topic and produces: a hook, 6–8 slides, an image prompt, a caption, a CTA, and a checklist. A cron can generate 3 drafts daily from research briefs.
   - Business potential: social media and visibility — a fast pipeline for LinkedIn/X/Instagram carousels from your own notes and reports.
   - Risk/note: without your own POV the content will come out generic; you need to add Konrad’s brand voice and manual selection.

9. **Telegram multi-agent fleet with memory, a message bus, and nightly dream cycles**
   - Source: [GitHub / dream77r / my-claude-bot](https://github.com/dream77r/my-claude-bot) — a good inspirational source for persistent-agent architecture; it’s not Hermes, but the patterns are portable.
   - What it does: a Telegram bot built on a Claude subscription, with an orchestrator agent, workers, sandbox directories, a shared MessageBus, git-versioned wiki memory, and nightly improvement cycles.
   - How to recreate in Hermes: profiles + Kanban instead of a custom MessageBus, separate work directories per agent, memory/skills, a “nightly self-review” cron, the Telegram gateway as the interface. For long tasks use `terminal(background=True, notify_on_complete=True)` or a cron — don’t block the main session.
   - Business potential: a personal operating system — researcher, writer, sales scout, dev assistant, and reviewer can run as roles with separate memory.
   - Risk/note: file security and permission scope; self-improvement without limits can produce chaos.

10. **Business operations skills: ROI, competitive intelligence, operations audit as an “agency discovery engine”**
    - Source: [GitHub / Adri3l-R3nan / cognify-skills](https://github.com/Adri3l-R3nan/cognify-skills) — a good library of skill patterns; not Hermes-specific, but it fits Hermes skills.
    - What it does: a set of 19 business operations skills: workflow analysis, ROI analyzer, competitive intelligence, strategic planning, operations audit, client discovery.
    - How to recreate in Hermes: build your own `client-discovery-and-roi` skill for leads: Hermes gathers the company, website, stack, and content gaps, proposes 3 automations, and estimates ROI/effort. Output to Markdown + CRM.
    - Business potential: selling services/consulting — automatically generated audits as a pre-sales asset and cold-email material.
    - Risk/note: ROI without client data is a hypothesis; flag assumptions and ask for a discovery call.

## 3 workflows for Konrad to test

- **AI/design partner scout + draft cold email**
  - Source: [Nadeer00 / agentic-ai-marketing-workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow) and [byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent).
  - First step: define the ICP: “SaaS/AI tools founders, design studios, content/SEO agencies that need AI workflow design.”
  - Minimal setup: a Hermes cron once a day, a Google Sheet/CSV of leads, web/search, a qualification skill, Telegram approval.
  - Success metric: 20 qualified leads/week, 5 emails approved manually, reply rate > 5%.

- **Daily content idea factory from reports and links**
  - Source: [schbxg / hermes-daily-automation](https://github.com/schbxg/hermes-daily-automation) and the official [Hermes cron docs](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron).
  - First step: a dedicated “AI/design visibility brief” cron that saves Markdown and generates 3 hooks for LinkedIn/X.
  - Minimal setup: a `/Desktop/hermes/content-ideas/` folder, a brand-voice skill, Telegram delivery, web/search, optionally memory for topic preferences.
  - Success metric: 5 good post drafts per week and at least 1 published post per working day.

- **Content review gate for the blog/landing pages**
  - Source: [KenBoller / ai-content-review-agent](https://github.com/KenBoller/ai-content-review-agent).
  - First step: create a Hermes skill with a checklist: clarity, SEO intent, examples, CTA, originality, “Konrad voice.”
  - Minimal setup: a `drafts/` folder, a command/cron that checks new files, output `.review.md`, final edits only after approval.
  - Success metric: every draft has a score + a list of fixes; editing time drops 30–50% subjectively after 2 weeks.

## Setup notes / tutorial nuggets

- **Hermes cron as the core of a persistent workflow:** the official pattern is `hermes cron create SCHED`, e.g. `hermes cron create "0 8 * * *"`, with a self-contained prompt and delivery to the current channel or Telegram. Source: [Hermes docs / Cron](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron).

- **Gateway as a delivery layer, not just chat:** for reports and approval loops, use the Telegram/Slack/Email gateway; sources like `hermes-daily-automation` show the value of “the result waits in Telegram in the morning.” Source: [Hermes docs / Messaging](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/) and [schbxg / hermes-daily-automation](https://github.com/schbxg/hermes-daily-automation).

- **Profiles instead of one personality:** a multi-agent CEO/CTO is best done with profiles that have separate config, memory, and tokens, not just a role prompt. Source: [Hermes docs / Profiles](https://hermes-agent.nousresearch.com/docs/user-guide/profiles) and [geraledesma / hermes-agent-automations](https://github.com/geraledesma/hermes-agent-automations).

- **Human-in-the-loop in lead-gen:** in lead-gen workflows the safest pattern is “research + draft + approval,” and only then sending. Source: [Nadeer00 / agentic-ai-marketing-workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow).

- **API prerequisites for marketing agents:** Serper.dev, Hunter.io, Groq, Google Sheets/Gmail OAuth, and Docker Compose appear as concrete dependencies in the n8n marketing workflow. In Hermes the equivalent is keeping secrets in `.env` and configuration in `config.yaml`. Source: [Nadeer00 / agentic-ai-marketing-workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow) and [Hermes docs / Configuration](https://hermes-agent.nousresearch.com/docs/user-guide/configuration).

- **Skill-first content workflows:** instead of writing a long prompt every time, wrap the process as a skill: research → structure → draft → self-check. Good patterns: [mythkiven / redbook-director-skill](https://github.com/mythkiven/redbook-director-skill) and [Adri3l-R3nan / cognify-skills](https://github.com/Adri3l-R3nan/cognify-skills).

- **Don’t fully trust web automation for cold email:** the repos use scrapers and Tavily/Serper, but in Hermes it’s better to keep bounded automation: a daily company limit, saving sources, flagging uncertainty, and no automatic sending without review. Source: [byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent).

## Link dump

- [iPythoning / b2b-sdr-agent-template](https://github.com/iPythoning/b2b-sdr-agent-template) — today’s most complete persistent SDR pattern: crons, memory, Telegram/WhatsApp/Email.
- [schbxg / hermes-daily-automation](https://github.com/schbxg/hermes-daily-automation) — practical Hermes templates for daily pushes and Telegram delivery.
- [geraledesma / hermes-agent-automations](https://github.com/geraledesma/hermes-agent-automations) — an example of multiple Hermes instances on a VPS with CEO/CTO roles.
- [Nadeer00 / agentic-ai-marketing-workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow) — a concrete n8n pipeline: Serper, Hunter, Groq, Gmail, Sheets, human review.
- [byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent) — webhook-driven company research and personalized outreach generation.
- [KenBoller / ai-content-review-agent](https://github.com/KenBoller/ai-content-review-agent) — a good blueprint for an SEO/content review gate.
- [TN108 / Multimodal-AI-E-commerce-Intelligence-Automation-Agent](https://github.com/TN108/Multimodal-AI-E-commerce-Intelligence-Automation-Agent) — an MVP for product listing + SEO keywords from a vision model.
- [mythkiven / redbook-director-skill](https://github.com/mythkiven/redbook-director-skill) — a skill-first social carousel workflow to adapt for LinkedIn/AI/design.
- [dream77r / my-claude-bot](https://github.com/dream77r/my-claude-bot) — inspiration for a Telegram multi-agent fleet with memory and nightly self-improvement.
- [Hermes docs / Cron](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron) — the source of truth for schedules and recurring reports in Hermes.
- [Hermes docs / Messaging Gateway](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/) — the source of truth for Telegram/Slack/Email delivery.
- [Hermes docs / Profiles](https://hermes-agent.nousresearch.com/docs/user-guide/profiles) — the source of truth for separate agents/profiles.

Also saved to: /Users/koni/Desktop/hermes/usecases/hermes-workflow-scout-2026-06-14.md
