## Hermes workflow scout — 2026-06-17

Short verdict of the day: today’s strongest signal is a wave of GitHub-published agent workflows turning marketing and sales ops into durable pipelines: n8n lead research, SEO publishing engines, cold-email review queues, and product-listing agents. X/Twitter and Reddit discovery were weak/blocked from this cron environment, so I prioritized accessible GitHub repos, linked blog/tutorial material, and official Hermes docs for reproducible setup guidance. The most practical Hermes angle for Konrad is to copy the architecture, not the tool: scheduled collection, source-backed analysis, Markdown/Sheets output, Telegram approval, and no unsupervised publishing or sending.

## Top workflows / use cases

1. **Multi-agent marketing campaign factory with human approval**
   - Source: [GitHub / NoveeraAnas / MarketMind Agentic AI Marketing Automation](https://github.com/NoveeraAnas/MarketMind-Agentic-AI-Marketing-Automation) — fresh repo updated today; good architecture sketch, but early-stage and not battle-tested.
   - What it does: Coordinates a supervisor, research, strategy, content, critic, Instagram, scheduler, and n8n automation agent to turn a campaign request into reviewed Instagram content, scheduled delivery, and email notification.
   - How to reproduce in Hermes: Create a `marketing-campaign` skill with stages for research, positioning, content draft, critic review, and approval. Use `hermes cron` for weekly campaign prompts, Telegram gateway for approve/reject, file output for campaign packs, and n8n/webhooks only for final scheduling after human approval.
   - Business potential: Strong for content ops and agency retainers: one repeatable pipeline can produce campaign concepts, captions, image briefs, and publishing checklists without starting from scratch each time.
   - Risk/note: Source is promising but unproven. Do not auto-post; require manual review for brand voice, claims, and platform policy.

2. **n8n company research and personalized lead-generation agent**
   - Source: [GitHub / byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent) — useful implementation source; describes webhook input, Gemini orchestration, Tavily search, website scraping, and sheet sync.
   - What it does: Receives a company name/domain, researches the organization and tech stack, structures the findings, and generates personalized outreach material.
   - How to reproduce in Hermes: Add a Hermes webhook/API route or a folder of prospect JSON files, then run a Hermes job with `web` plus a small scraper script. Save one Markdown brief per company, append a CSV/Google Sheet row, and send a Telegram approval card with the proposed email and source links.
   - Business potential: High for B2B sales, partnership research, and agency prospecting because it compresses account research from manual browsing into a repeatable lead dossier.
   - Risk/note: Website scraping and enrichment APIs can hallucinate or miss facts. Keep source URLs beside every personalization claim and add a confidence field.

3. **Entity-first SEO reputation engine across multiple owned sites**
   - Source: [GitHub / sinabarimd / reputation-engine](https://github.com/sinabarimd/reputation-engine) and linked article [How I Built a Personal Reputation Engine with AI Agents](https://sinabarimd.com/articles/how-i-built-a-personal-reputation-engine.html) — strong source; repo includes a real personal SEO system, n8n orchestration, structured data, QA, and SERP measurement notes.
   - What it does: Runs autonomous workflows for content research, article generation, multi-site publishing, structured-data optimization, QA, and search-result monitoring across four owned domains.
   - How to reproduce in Hermes: Build a Hermes `reputation-engine` profile that runs weekly entity/keyword scouts, drafts source-backed articles into Markdown, validates schema/FAQ blocks, and records SERP observations. Use cron for monitoring and Telegram for editorial approval; keep publishing manual or PR-based.
   - Business potential: Very high for Konrad’s AI/design visibility: it turns personal positioning into an operating system instead of sporadic posting.
   - Risk/note: SEO automation can create thin content fast. Keep a hard quality gate: real experience, citations, clear angle, and manual publish approval.

4. **Operator-gated cold-email optimization product**
   - Source: [GitHub / timyjsong / copywriting-bot](https://github.com/timyjsong/copywriting-bot) — strong product architecture source; README explicitly says it is a feature-complete MVP scaffold with mocked external services, not a live deployed business.
   - What it does: Lets a B2B SaaS founder paste a cold-email sequence, receives an AI critique and preview rewrite, then routes paid rewrites through a multi-agent pipeline with operator approval, warmup-managed send scheduling, and reply-rate monitoring.
   - How to reproduce in Hermes: Use a Hermes workflow that ingests a sequence, scores it against a cold-email rubric, generates alternative hooks and rewrites, then saves an approval packet. Connect CRM/email provider only after manual approval; use cron for 7/14/30-day performance review prompts.
   - Business potential: Strong as a productized service or agency offer: “cold email audit + rewrite + monitored experiment” is concrete and sellable.
   - Risk/note: Deliverability and consent are the main risks. Hermes should draft and analyze first, not send automatically.

5. **Scheduled Google Jobs scraper as a lead/intelligence feed**
   - Source: [GitHub / SmritiJadon / agentic_ai_automated_job_list](https://github.com/SmritiJadon/agentic_ai_automated_job_list) — practical n8n source; updated this week and includes SerpApi, Gemini, Google Sheets, schedule, and import/configuration notes.
   - What it does: Runs on a schedule, pulls Google Jobs results via SerpApi, processes job data with Gemini, and appends structured rows to Google Sheets.
   - How to reproduce in Hermes: Use `hermes cron create 'every morning'` with a script that queries SerpApi or another search API, then ask Hermes to classify roles by market signal: hiring trend, tool stack, pain points, and potential product/service angle. Save to Markdown and Sheets.
   - Business potential: Useful for lead generation and product research: job ads reveal budgets, pains, stacks, and companies likely to buy automation or design help.
   - Risk/note: Search API costs and duplicate rows need controls. Keep a unique key per company/job URL and cap daily results.

6. **Parallel AI swarm for job-fit scoring and personalized outreach**
   - Source: [GitHub / Rushhaabhhh / n8n-agentic-job-outreach](https://github.com/Rushhaabhhh/n8n-agentic-job-outreach) — good architecture source with a Loom link, async webhook approval, weighted scoring, and parallel agent dimensions.
   - What it does: Ingests a job description, normalizes it, sends it through specialized AI evaluators, computes a deterministic weighted score, and drafts a personalized outreach email for manual approval.
   - How to reproduce in Hermes: Replace the n8n swarm with Hermes sub-prompts or profiles: one evaluator for technical fit, one for portfolio/story fit, one for strategic value. Store the weighted rubric in a skill, output a scorecard, and send the outreach draft to Telegram before any send.
   - Business potential: Good for selective consulting, job-market intelligence, and founder networking. The same pattern can score partnership targets or podcast/editorial opportunities.
   - Risk/note: Deterministic scoring is only as good as the rubric. Keep “why this score” evidence and avoid over-automating human relationship outreach.

7. **Local content review and SEO improvement agent**
   - Source: [GitHub / KenBoller / ai-content-review-agent](https://github.com/KenBoller/ai-content-review-agent) — useful practical source; LangGraph workflow with grammar, SEO, readability, rewrite, and local Ollama support.
   - What it does: Reviews draft content for grammar, SEO opportunities, readability, and user experience, then produces structured feedback and an improved version.
   - How to reproduce in Hermes: Create a `content-review` skill that reads Markdown drafts from a folder, runs a checklist for clarity/SEO/readability/claims, writes a review file next to the draft, and optionally creates a revised copy. Use local models for cheap review and stronger hosted models only for final polish.
   - Business potential: High for content ops because it turns every draft into a repeatable QA process before publication.
   - Risk/note: Rewrites can flatten voice. Keep a “preserve voice / do not add claims” rule and require a diff-style review.

8. **Autonomous blog publishing pipeline with GitHub Actions**
   - Source: [GitHub / avhixd / Multi-Agentic-Blog-Generation](https://github.com/avhixd/Multi-Agentic-Blog-Generation) — adjacent but useful; describes LangGraph, Groq, scheduled article generation, formatting, and publishing through GitHub Actions.
   - What it does: Schedules, writes, formats, and publishes technical articles to a static frontend, using a stateful agent workflow and automated deployment.
   - How to reproduce in Hermes: Use Hermes cron for idea collection and outline generation, save Markdown drafts into a repo, run build checks, and open a PR rather than publishing directly. Add a second Hermes review job for citations, originality, and “is this worth publishing?”
   - Business potential: Good for building a long-term content moat if the source material is grounded in real work, experiments, and product notes.
   - Risk/note: Fully automated blogging is risky for quality and reputation. Use it as a draft factory, not an autopublisher.

9. **Multimodal e-commerce listing and SEO generator**
   - Source: [GitHub / TN108 / Multimodal AI E-commerce Intelligence Automation Agent](https://github.com/TN108/Multimodal-AI-E-commerce-Intelligence-Automation-Agent) — very early repo updated today; useful MVP pattern for product images, listing JSON, SEO keywords, and support/RAG direction.
   - What it does: Takes a product image, detects category and attributes, writes title/description/SEO keywords, and returns editable listing JSON.
   - How to reproduce in Hermes: Use Hermes with vision/image analysis where available, or a separate image-captioning script, then have Hermes generate marketplace-specific listing drafts, SEO keywords, and QA questions. Save outputs as product Markdown/JSON and route to a human editor.
   - Business potential: Strong for e-commerce operators and small agencies: product listing generation is a repetitive, monetizable workflow.
   - Risk/note: Image-derived attributes can be wrong. Require user confirmation for materials, dimensions, compliance claims, and compatibility.

10. **Autonomous landing-page skill: research → copy → design → deploy**
   - Source: [GitHub / propiter / landing-craft](https://github.com/propiter/landing-craft) — strong adjacent-agent source; presents a multi-agent landing-page workflow with market research, competitor scraping, copy, design, SEO, review, GitHub, and Vercel deployment.
   - What it does: Turns a rough landing-page request into a researched, designed, built, and deployed multi-page website, including market study and conversion-focused copy.
   - How to reproduce in Hermes: Make a Hermes `landing-craft-lite` workflow: collect competitor examples, extract positioning, draft section architecture, generate copy, create a Next.js/Tailwind page, run `npm run build`, and send a preview link or screenshot for review before deploy.
   - Business potential: Very high for rapid product validation, waitlists, and agency landing-page packages.
   - Risk/note: Competitor scraping can be shallow and design taste needs human direction. Use a small reference board and require visual QA before launch.

## 3 workflows for Konrad to test

- **Personal reputation engine for AI/design visibility**
  - Source: [sinabarimd / reputation-engine](https://github.com/sinabarimd/reputation-engine) and [the linked article](https://sinabarimd.com/articles/how-i-built-a-personal-reputation-engine.html).
  - First step: define 3 owned topics Konrad wants to rank/be known for, e.g. AI product design workflows, persistent agents for content ops, and design automation.
  - Minimal setup: one Hermes cron that weekly collects sources and drafts a Markdown brief; one `content-review` skill; Telegram approval before publishing.
  - Success metric: 4 source-backed articles or essays drafted in 30 days, with at least 2 published after human edit.

- **Lead dossier + outreach approval cards**
  - Source: [byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent).
  - First step: prepare a CSV of 20 target studios, SaaS teams, or agencies that could buy AI/design automation help.
  - Minimal setup: Hermes script reads one company/day, web-researches it, writes a dossier, drafts one email, and sends a Telegram approval card.
  - Success metric: 10 approved high-quality dossiers and 3 manually sent outreach messages with clear personalization evidence.

- **Landing-page sprint agent for new product ideas**
  - Source: [propiter / landing-craft](https://github.com/propiter/landing-craft).
  - First step: pick one product idea and collect 5 competitor/reference links.
  - Minimal setup: Hermes creates positioning notes, section outline, copy draft, and a Next.js/Tailwind page in a branch; build must pass before review.
  - Success metric: one reviewable landing page branch produced in under a day, with messaging good enough for a waitlist test.

## Setup notes / tutorial nuggets

- Hermes cron is the native way to make these workflows durable: use `hermes cron create SCHED`, then keep prompts self-contained and attach the relevant skills. Official reference: [Hermes Agent cron docs](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron).
- For Telegram delivery and approvals, configure the Hermes gateway rather than bolting messaging into every script. Official reference: [Hermes messaging platform docs](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/).
- For profile-separated scouts, use Hermes profiles so a “Growth/Content” agent and a “Builder/Technical” agent do not share personality, memory, or gateway state. Official reference: [Hermes profiles docs](https://hermes-agent.nousresearch.com/docs/user-guide/profiles).
- For lead research, the [byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent) pattern is: webhook input → AI orchestrator → Tavily/search + website scraper → structured data sync → outreach draft. In Hermes, reproduce that as: webhook/file input → `web`/script collection → Markdown/CSV output → Telegram approval.
- For scheduled market intelligence, the [SmritiJadon / agentic_ai_automated_job_list](https://github.com/SmritiJadon/agentic_ai_automated_job_list) pattern is: schedule → SerpApi Google Jobs → Gemini extraction → Google Sheets append. In Hermes, add deduplication and a short “why this matters” field so the sheet becomes a lead/product insight database, not just a scrape dump.
- For cold email, the [timyjsong / copywriting-bot](https://github.com/timyjsong/copywriting-bot) pattern worth copying is operator gating: every AI-generated output passes through an approval queue before reaching a customer. This maps directly to Hermes Telegram/Slack delivery.
- For content QA, the [KenBoller / ai-content-review-agent](https://github.com/KenBoller/ai-content-review-agent) pattern is cheap local review with Ollama plus structured scores. Hermes can run local review as a cron/file workflow and reserve expensive models for final polish.
- For SEO systems, the [sinabarimd / reputation-engine](https://github.com/sinabarimd/reputation-engine) lesson is to track entities, structured data, SERP measurement, and editorial voice drift — not just generate articles.

## Link dump

- [MarketMind Agentic AI Marketing Automation](https://github.com/NoveeraAnas/MarketMind-Agentic-AI-Marketing-Automation) — multi-agent campaign factory with critic, approval, scheduling, and n8n automation.
- [ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent) — n8n lead research and personalized outreach pattern with Tavily/search and scraper components.
- [Reputation Engine repo](https://github.com/sinabarimd/reputation-engine) — concrete multi-site SEO and reputation automation system.
- [How I Built a Personal Reputation Engine with AI Agents](https://sinabarimd.com/articles/how-i-built-a-personal-reputation-engine.html) — deeper narrative/tutorial companion to the repo.
- [copywriting-bot](https://github.com/timyjsong/copywriting-bot) — operator-gated cold-email optimization MVP architecture.
- [agentic_ai_automated_job_list](https://github.com/SmritiJadon/agentic_ai_automated_job_list) — scheduled SerpApi/Gemini/Google Sheets job-intelligence workflow.
- [n8n-agentic-job-outreach](https://github.com/Rushhaabhhh/n8n-agentic-job-outreach) — parallel agent scoring and human-approved outreach drafting.
- [ai-content-review-agent](https://github.com/KenBoller/ai-content-review-agent) — local content review workflow for grammar, SEO, readability, and rewrites.
- [Multi-Agentic Blog Generation](https://github.com/avhixd/Multi-Agentic-Blog-Generation) — scheduled LangGraph/GitHub Actions blog-generation pattern.
- [Multimodal AI E-commerce Intelligence Automation Agent](https://github.com/TN108/Multimodal-AI-E-commerce-Intelligence-Automation-Agent) — product image to listing JSON/SEO workflow idea.
- [landing-craft](https://github.com/propiter/landing-craft) — multi-agent landing-page research, copy, design, build, and deploy workflow.
- [Hermes Agent cron documentation](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron) — authoritative reference for turning these ideas into recurring Hermes jobs.
