## Hermes workflow scout — 2026-06-24

- Short verdict of the day: today’s strongest signals are not from polished X/Reddit threads; X/Google search was blocked and Reddit’s JSON endpoint returned HTTP 403, so the best usable material came from fresh GitHub repos, public READMEs, official Hermes docs, and a few directly linked walkthroughs. The most actionable pattern for Konrad is still clear: turn “agent writes content” into a bounded operating system with scheduled research, source-grounded drafts, human review, publishing, and measurement.
- The highest-priority ideas to copy into Hermes are: a reputation/SEO engine with daily SERP measurement, a GTM research-to-cold-email angle generator, and an issue/PR-style content cockpit where agents prepare assets but humans approve publication.
- Treat several small GitHub repos as inspiration rather than proof: many have low stars and promotional wording, but they expose useful pipeline shapes that map cleanly to Hermes cron, skills, profiles, files, web/browser tools, and Telegram delivery.

## Top workflows / use cases

1. **Entity-first reputation engine for owned SEO surfaces**
   - Source: [GitHub / Dr. Sina Bari / Reputation Engine](https://github.com/sinabarimd/reputation-engine) and [article / How I Built a Personal Reputation Engine with AI Agents](https://sinabarimd.com/articles/how-i-built-a-personal-reputation-engine.html) — strong source quality: public repo, long README, architecture notes, changelog, YouTube walkthrough link, and a concrete n8n-based system.
   - What it does: Coordinates AI-powered content generation, multi-site publishing, structured-data optimization, QA, and SERP measurement across four owned domains. The repo explicitly frames this as a professional reputation system rather than a generic content bot.
   - How to recreate in Hermes: Create one Hermes profile for “reputation editor” and one for “SEO measurement analyst”; use cron jobs for daily topic discovery, weekly SERP/GSC measurement, and monthly content refresh; store Markdown reports under a content repo; use skills for editorial style and entity schema rules; deliver summaries to Telegram; optionally add a Kanban board for article states.
   - Business potential: Very relevant for Konrad’s AI/design visibility: build multiple owned pages around recurring themes, track which entities/queries move, and convert the output into articles, landing pages, and newsletter/social material.
   - Risk/note: Needs careful human review, source checking, and Google Search Console/API setup. Automated publishing without editorial gates can create low-trust SEO sludge.

2. **GTM research agent that turns company names into trigger-based cold-email angles**
   - Source: [GitHub / Vinayak Gavimath / AI GTM Research & Outreach System](https://github.com/Vinayakgavimath/ai-gtm-research-agent) — medium source quality: low-star repo, but README includes concrete stack, claimed time savings, Google Sheets output, and n8n/Groq/Sheets architecture.
   - What it does: Takes a company name, researches business signals such as funding, hiring, or product launches, then generates a personalized cold-email angle. The repo claims a manual process of 15 minutes per company can become a seconds-long pipeline.
   - How to recreate in Hermes: Use a Google Sheet or CSV as the input queue; run a Hermes cron or manual command that reads new companies, searches web/news/company pages, writes structured JSON per lead, drafts one email angle, and posts candidates to Telegram for approval. Add a skill that defines ICP, forbidden claims, tone, and compliance rules.
   - Business potential: Direct sales and partnership workflow for design/AI services, productized consulting, or agency offers; useful even if emails are sent manually after review.
   - Risk/note: Deliverability and legal compliance matter. Hermes should draft and score; humans should approve before sending. Avoid inventing trigger events when sources are weak.

3. **Google Places → email extraction → personalized outreach workflow**
   - Source: [GitHub / chaudhrynihaal / Lead Generation Agent - n8n Workflow](https://github.com/chaudhrynihaal/lead-generation-agent) — medium source quality: clear workflow architecture and credential list, but not strong external validation.
   - What it does: Collects business type/location/quantity/style, scrapes Google Places via Apify, filters businesses with websites, extracts emails, stores leads in Google Sheets, drafts personalized emails, and sends through Gmail.
   - How to recreate in Hermes: Use Hermes as the orchestrator instead of n8n: a cron or one-shot command takes a niche/location, calls Apify or a Maps/Places API, runs a website/email extraction script, saves leads to CSV/Sheets, uses a sales-persona skill to draft emails, and sends only reviewed leads to Gmail/CRM. Telegram can be the approval surface.
   - Business potential: Local lead-gen for agencies, audits, SEO/design offers, and “AI workflow setup” outreach. Good fit for repeatable productized services.
   - Risk/note: Requires Apify/Google/Gmail/OpenAI credentials, rate limits, consent/legal review, and strong suppression lists. Never fully automate sending until deliverability is proven.

4. **Parallel agent evaluator for role-fit or opportunity-fit scoring**
   - Source: [GitHub / Rushhaabhhh / n8n Agentic Job Outreach & Swarm Evaluator](https://github.com/Rushhaabhhh/n8n-agentic-job-outreach) — good architecture source: README includes an explicit swarm diagram, deterministic weighted scoring, async webhook approval, and manual review path.
   - What it does: Ingests a job description, fans it out to specialized agents, computes deterministic weighted scores, drafts outreach only when the score passes a threshold, then routes it through a human-in-the-loop approval step.
   - How to recreate in Hermes: Replace the job description with any candidate opportunity: lead, podcast, collaboration, grant, product idea, client brief, or content topic. Use delegate tasks or separate profiles for “market fit,” “technical fit,” and “brand fit,” merge scores in a deterministic script, and send only high-scoring opportunities to Telegram.
   - Business potential: Saves decision time and prevents spraying low-quality outreach. Useful for partner prospecting, RFP triage, creator collaboration scoring, and client-fit filtering.
   - Risk/note: The scoring rubric must be explicit and calibrated. Parallel LLM agents can sound authoritative while sharing the same blind spots.

5. **Weekly auto-blog scheduler inside an AI-powered CMS**
   - Source: [GitHub / alfredang / AI-Powered CMS](https://github.com/alfredang/ai-cms) — medium-to-strong source quality: active repo, detailed README, concrete stack, live demo link, and mentions weekly auto-blog scheduler and SEO/lead capture.
   - What it does: A self-hosted Next.js/Postgres CMS with AI content generation, full SEO metadata/JSON-LD on routes, a weekly auto-blog scheduler, and a lead-generation chatbot.
   - How to recreate in Hermes: Keep the CMS independent, but let Hermes own the editorial loop: weekly cron suggests topics from search/source monitoring, writes Markdown drafts into the repo, opens a PR, and sends a Telegram preview. A Hermes skill should hold brand voice, schema requirements, internal-link rules, and lead-magnet CTA rules.
   - Business potential: Direct fit for Konrad’s product/content ops: one repeatable engine for blog posts, service pages, case studies, and lead capture.
   - Risk/note: Auto-blogging can damage brand quality if it is not source-grounded. Require manual publish approval and keep measurement separate from generation.

6. **Release-content cockpit: agent-generated launch pack with PR review**
   - Source: [GitHub / Nano Collective / ContentForest](https://github.com/Nano-Collective/contentforest) — strong workflow source: public repo, clear process, GitHub Actions, PR review, Cloudflare Pages viewer, and explicit “no automated posting by design.”
   - What it does: A daily GitHub Action detects releases, runs an agent against a templated prompt, generates a content pack per release, validates output, opens a PR, and deploys a browsable content viewer after merge.
   - How to recreate in Hermes: Use Hermes cron to watch product repos or changelogs, generate launch notes, X/LinkedIn posts, newsletter blurbs, and deep-dive article drafts into a content repo. Use GitHub PRs as the human approval gate and Telegram for “new pack ready” notifications.
   - Business potential: Excellent for solopreneur/product visibility. Every release becomes reusable marketing assets without forcing immediate posting.
   - Risk/note: Keep human review. Automated launch copy can overclaim features or miss positioning nuance.

7. **Reusable content workspace with onboarding, source analysis, review, and optional WordPress draft publishing**
   - Source: [GitHub / drazewski / Content Workflow Agent](https://github.com/drazewski/content-workflow-agent) — good pattern source: README emphasizes onboarding, project context, source analysis, SEO metadata, review pipelines, and safe publishing boundaries.
   - What it does: Provides a repo-shaped workspace where AI agents create structured article drafts in Markdown, with brand/project onboarding and optional WordPress draft publishing.
   - How to recreate in Hermes: Create a `/content-workspace` with `project-context.md`, source folders, draft folders, and review checklists. Run Hermes with a content skill that first updates context, then researches, drafts, reviews, and only creates WordPress drafts when explicitly requested.
   - Business potential: Practical for client content ops, AI/design thought leadership, and internal knowledge-to-blog pipelines.
   - Risk/note: Source analysis must be preserved. Do not let a writing agent publish directly; use draft-only by default.

8. **Hermes-native community skills for SEO, WordPress, marketing, scraping, and external services**
   - Source: [GitHub / Robin Beraud / hermes-skills](https://github.com/RobinBeraud/hermes-skills) — medium source quality: young community repo, but directly Hermes-relevant and includes skill patterns such as Firecrawl, WordPress, Gmail, Notion, and marketing/SEO-oriented integrations.
   - What it does: Packages reusable Hermes skills as Markdown files so the agent can load service-specific procedures and API usage patterns.
   - How to recreate in Hermes: Install or adapt individual skills into `~/.hermes/skills/`; keep secrets in `.env`; create dedicated skills for Konrad’s recurring systems: “SEO brief,” “lead research,” “launch pack,” “design teardown,” and “cold email compliance.”
   - Business potential: Turns ad-hoc prompts into repeatable operating procedures; useful for scaling an agency workflow without retraining every session.
   - Risk/note: Review third-party skills before installation. Skills can bias agent behavior and may include stale or unsafe instructions.

9. **Affiliate funnel skill stack: research → content → blog → landing page → deploy**
   - Source: [GitHub / Gingg7260 / affiliate-skills](https://github.com/Gingg7260/affiliate-skills) — weak-to-medium source quality: promotional README and low stars, but the funnel decomposition is useful.
   - What it does: Frames affiliate growth as a sequence of AI skills for product research, content, blog, landing pages, tracking, and optimization.
   - How to recreate in Hermes: Build a Hermes skill bundle around one niche: product research, competitor pages, offer positioning, landing-page draft, comparison article, tracking checklist, and weekly optimization report. Use cron to monitor SERP changes and affiliate program updates.
   - Business potential: Good for small niche experiments and productized SEO plays, especially if tied to actual conversion tracking.
   - Risk/note: Affiliate content is high-risk for thin/low-trust pages. Require real product evidence, disclosures, and manual quality review.

10. **Agentic marketing skill modules for planning, channels, measurement, and automation**
   - Source: [GitHub / minamagdyyyy / agentic-marketing](https://github.com/minamagdyyyy/agentic-marketing) — weak source quality: promotional, low stars, and download-focused wording; use as inspiration only.
   - What it does: Describes modular marketing skills for strategy planning, channel execution, measurement, and routine automation.
   - How to recreate in Hermes: Make the modules explicit and bounded: one skill for campaign planning, one for channel-specific copy, one for analytics review, one for experiment logging. Use Hermes files as the campaign database and Telegram as the daily operator cockpit.
   - Business potential: Useful for solo/agency execution where the agent prepares options and the human chooses the final campaign.
   - Risk/note: Avoid a generic “marketing agent” that does everything. Strong prompts and saved rubrics matter more than the repo itself.

11. **GSC-driven SEO/AEO blog generator with direct publishing**
   - Source: [GitHub / Yash Vaghela / flyweel-agentic-seo-aeo-engine](https://github.com/Yashvaghela2003/flyweel-agentic-seo-aeo-engine) — weak-to-medium source quality: fresh repo and direct SEO/GSC claims, but promotional wording and very low stars.
   - What it does: Generates SEO-optimized blog posts, uses multiple models, integrates Google Search Console, supports programmatic SEO, and claims direct publishing support.
   - How to recreate in Hermes: Use Google Search Console exports as input; Hermes cron identifies decaying/near-win queries, drafts updates as Markdown, proposes schema/FAQ blocks, and opens a PR or WordPress draft instead of directly publishing.
   - Business potential: High for content maintenance and long-tail visibility if tied to real GSC data.
   - Risk/note: Do not publish automatically. Programmatic SEO can become spam if pages are not differentiated and useful.

12. **Issue-driven agent process: design in an issue, ship via gated PR, wait for green CI**
   - Source: [GitHub / next-friday / Next Friday Skills](https://github.com/next-friday/next-friday-skills) — good process source: active repo, clear issue → branch → gates → PR → green CI philosophy.
   - What it does: Gives coding agents a disciplined delivery process so they discover repo conventions, write design notes, implement changes, open PRs, and wait for checks instead of committing directly.
   - How to recreate in Hermes: Apply the same pattern to marketing/content ops: every content request becomes a GitHub issue, Hermes drafts a brief, writes assets on a branch, runs validators/builds, opens a PR, and waits for approval before merge/publish.
   - Business potential: Reduces chaos when using multiple agents for product, dashboard, and content work; creates a traceable operating history.
   - Risk/note: Adds process overhead. Best for recurring assets, public pages, and client-facing deliverables, not tiny one-off edits.

## 3 workflows for Konrad to test

- **Test 1: Personal reputation engine for AI/design visibility**
  - Source to reuse: [Reputation Engine](https://github.com/sinabarimd/reputation-engine) and [Hermes cron docs](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron).
  - First step: Pick 10 target entities/queries around Konrad’s positioning, for example “AI product design,” “agentic content ops,” “Hermes workflows,” and “design engineering automation.”
  - Minimal setup: One Hermes cron job for weekly SERP/source scouting, one Markdown folder for findings, one skill that defines Konrad’s voice and proof standards, and Telegram delivery.
  - Success metric: Within two weeks, produce at least four source-grounded article/social assets and one dashboard showing which queries/topics deserve follow-up.

- **Test 2: Lead research and cold-angle generator for productized AI/design offers**
  - Source to reuse: [AI GTM Research & Outreach System](https://github.com/Vinayakgavimath/ai-gtm-research-agent) and [Lead Generation Agent](https://github.com/chaudhrynihaal/lead-generation-agent).
  - First step: Create a 25-company CSV in one narrow niche, such as design agencies, SaaS teams, or local businesses with weak AI/content workflows.
  - Minimal setup: Hermes reads the CSV, searches each company, extracts 2–3 trigger signals with links, drafts one email angle, and sends a Telegram review bundle. No automatic sending.
  - Success metric: At least 15/25 leads have a real sourced trigger and a usable first-line angle after human review.

- **Test 3: Release/content cockpit for every product update**
  - Source to reuse: [ContentForest](https://github.com/Nano-Collective/contentforest) and [Content Workflow Agent](https://github.com/drazewski/content-workflow-agent).
  - First step: Point Hermes at one product repo or changelog and ask it to generate a launch pack for the latest change.
  - Minimal setup: A content repo with folders for release packs, a Hermes skill for launch voice, a validation script that checks required sections/links, and a PR-based approval flow.
  - Success metric: Every shipped feature produces one LinkedIn/X post, one short newsletter paragraph, one changelog note, and one deeper blog outline without blocking development.

## Setup notes / tutorial nuggets

- Hermes cron jobs can schedule recurring tasks, attach skills, deliver to origin chat/local files/platform targets, and run in fresh sessions with the normal static tool list. Use the official command surface and docs rather than guessing cron syntax: [Hermes Agent docs / Scheduled Tasks](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron).
- For unattended research scouts, make the cron prompt fully self-contained and include output caps, source requirements, and stopping rules. This mirrors today’s job: source links are mandatory, weak/blocked sources are labeled, and the report is saved to Markdown before delivery.
- For GitHub/content workflows, copy the PR-gate pattern from [ContentForest](https://github.com/Nano-Collective/contentforest): agent generates assets, validator runs, PR opens, human reviews, then deploys. This is safer than auto-posting.
- For SEO/reputation systems, copy the measurement-first idea from [Reputation Engine](https://github.com/sinabarimd/reputation-engine): generation, structured data, QA, and SERP measurement should be separate steps, not one giant “write and publish” prompt.
- For sales workflows, keep the “trigger event” as a required field. The [AI GTM Research & Outreach System](https://github.com/Vinayakgavimath/ai-gtm-research-agent) is useful because it distinguishes timely outreach angles from generic personalization.
- For lead scraping, the [Lead Generation Agent](https://github.com/chaudhrynihaal/lead-generation-agent) lists the real credential burden: Apify/Places scraping, Google Sheets, Gmail, and OpenAI. In Hermes, put keys in `.env`, never in prompts or Markdown reports.
- For multi-agent scoring, the [n8n Agentic Job Outreach & Swarm Evaluator](https://github.com/Rushhaabhhh/n8n-agentic-job-outreach) shows the right split: LLM agents evaluate dimensions, but a deterministic score calculator decides routing. Recreate this in Hermes with delegate tasks plus a small scoring script.
- For CMS/blog automation, the [AI-Powered CMS](https://github.com/alfredang/ai-cms) suggests a useful architecture: CMS owns routes/SEO/lead capture; Hermes owns research, drafting, review, and scheduling.
- X/Twitter and Reddit note: direct X search and Google search were blocked by bot challenges in this environment; Reddit JSON search returned HTTP 403. I did not include unsupported X/Reddit claims. Future runs could improve coverage with a configured search API or RSS/source list.

## Link dump

- [Reputation Engine GitHub repo](https://github.com/sinabarimd/reputation-engine) — best concrete SEO/reputation automation architecture found today.
- [How I Built a Personal Reputation Engine with AI Agents](https://sinabarimd.com/articles/how-i-built-a-personal-reputation-engine.html) — linked long-form explanation behind the Reputation Engine repo.
- [AI GTM Research & Outreach System](https://github.com/Vinayakgavimath/ai-gtm-research-agent) — practical sales research/cold-angle pipeline using n8n, Groq, and Google Sheets.
- [Lead Generation Agent - n8n Workflow](https://github.com/chaudhrynihaal/lead-generation-agent) — Google Places/email extraction/personalized outreach pipeline with clear credential list.
- [n8n Agentic Job Outreach & Swarm Evaluator](https://github.com/Rushhaabhhh/n8n-agentic-job-outreach) — useful pattern for parallel agents plus deterministic scoring and human approval.
- [ContentForest](https://github.com/Nano-Collective/contentforest) — strong release-content cockpit pattern with GitHub Actions, validation, PR review, and Cloudflare Pages viewer.
- [Content Workflow Agent](https://github.com/drazewski/content-workflow-agent) — reusable content workspace pattern with onboarding, source analysis, review, and optional WordPress drafting.
- [AI-Powered CMS](https://github.com/alfredang/ai-cms) — self-hosted CMS with weekly auto-blog scheduler, SEO metadata, JSON-LD, and lead-gen chatbot ideas.
- [Hermes community skills by Robin Beraud](https://github.com/RobinBeraud/hermes-skills) — Hermes-native skill examples for web, WordPress, Gmail, Notion, and marketing-adjacent integrations.
- [Next Friday Skills](https://github.com/next-friday/next-friday-skills) — issue-to-PR gated agent workflow that can be adapted to content and marketing operations.
- [Hermes Agent cron docs](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron) — authoritative reference for scheduled Hermes jobs and delivery behavior.
