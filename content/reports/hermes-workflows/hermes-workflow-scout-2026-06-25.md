## Hermes workflow scout — 2026-06-25

Short verdict of the day: the best practical pattern today is not a single shiny “agent app”, but a repeatable always-on operating loop: collect signals from public channels, rank them, generate drafts or actions, then deliver them to Telegram/email with human review. The strongest source is the Hermes-native multi-agent automation repo; the most immediately monetizable external patterns are LinkedIn PR + lead CSV generation, Reddit-to-blog-ideas, and cross-platform promotion. X/Twitter and Reddit direct discovery were limited by search/browser blocking, so today’s brief leans on GitHub repos, official Hermes docs, and indexed public READMEs rather than unverified social snippets.

## Top workflows / use cases

1. **Two-profile Hermes “CEO + CTO” operating system**
   - Source: [GitHub / geraledesma / hermes-agent-automations](https://github.com/geraledesma/hermes-agent-automations) — strong source; Hermes-specific architecture with Telegram, cron, separate identities, and VPS deployment.
   - What it does: Runs two autonomous Hermes instances around the clock: one “CEO” agent for executive/calendar/tool-discovery work and one “CTO” agent for code scanning and technical oversight. The repo frames this as a production-grade multi-instance setup with separate Telegram gateways and low-token operational patterns.
   - How to reproduce in Hermes: Create two Hermes profiles, give each profile its own Telegram bot/gateway config, install profile-specific skills, and create cron jobs for calendar review, tool scouting, code review, and weekly summaries. Use Hermes profiles for identity isolation, `hermes gateway run/install` for Telegram, and `hermes cron create` for the recurring jobs.
   - Business potential: Useful as an agency/operator command center: one agent watches market/content/sales opportunities, the other watches product quality and implementation tasks. The value is saved coordination time and persistent execution, not one-off chat answers.
   - Risk/note: Two gateways can conflict if they reuse bot credentials. Separate bot tokens and profile-scoped configs are mandatory.

2. **LinkedIn PR agent plus daily lead-generation CSV**
   - Source: [GitHub / anu007lko / linkedin_pr_agent](https://github.com/anu007lko/linkedin_pr_agent) — useful architecture; README names files, APIs, and daemon behavior, but results/ROI are not independently verified.
   - What it does: Runs two background agents: one pulls trending tech/HR news from RSS, generates LinkedIn post copy, finds Unsplash images, and publishes via LinkedIn UGC API; the other searches HR/talent-acquisition prospects, scores them, deduplicates contacts, and emails a daily CSV.
   - How to reproduce in Hermes: Build a `linkedin-pr-leads` skill with RSS queries, brand voice, scoring rules, and compliance constraints. Use a daily Hermes cron for collection and drafting, a second cron for lead CSV generation, and delivery through email/Telegram. Add API calls for LinkedIn, Hunter/Snov/Prospeo-style enrichment, and a human approval checkpoint before publishing.
   - Business potential: Directly relevant to founder visibility, outbound lead generation, and agency prospecting. A minimal version can create 5 draft posts and 20 scored prospects per day.
   - Risk/note: LinkedIn automation and cold outreach can violate platform rules or hurt deliverability. Keep manual review, throttle actions, and log provenance for every contact.

3. **Reddit discussions to weekly blog ideas**
   - Source: [GitHub / kruthish18 / reddit-sre-content-agent](https://github.com/kruthish18/reddit-sre-content-agent) — strong workflow pattern; public README describes n8n, subreddits, filtering, OpenAI analysis, and email output.
   - What it does: Monitors r/devops, r/sre, and r/kubernetes, filters out jobs/deleted/low-engagement posts, identifies top discussions, and generates blog ideas tied to real community pain points.
   - How to reproduce in Hermes: Replace n8n with a Hermes cron that searches Reddit or a Reddit API wrapper, filters by subreddit/score/comments/freshness, summarizes pain points, and writes a Markdown report. Add a Telegram digest and save ideas to a local content backlog.
   - Business potential: Excellent for SEO and content ops because topics come from actual user problems rather than keyword-tool guesses. For Konrad, adapt it to r/ArtificialIntelligence, r/ClaudeAI, r/LocalLLaMA, r/SaaS, r/Entrepreneur, and design/product subreddits.
   - Risk/note: Reddit API access and subreddit noise are the main constraints. Avoid turning every trending complaint into a post; require business relevance and search intent.

4. **Always-on Claude/OpenClaw-style Telegram + cron dispatcher**
   - Source: [GitHub / bradbushSFAI / Nolty](https://github.com/bradbushSFAI/nolty) — useful adjacent-agent architecture; not Hermes, but very reproducible in Hermes.
   - What it does: Provides an always-on Telegram agent, 15-minute cron dispatcher, Task sub-agent inheritance, self-healing around CLI upgrades, and “morning brief / daily recap / weekly rollup” style jobs.
   - How to reproduce in Hermes: Hermes already has the primitives: gateway adapters, cron, background tasks, skills, memory, and profiles. Recreate the value by creating a profile with Telegram delivery, adding recurring brief/recap jobs, and using skills for repeatable routines.
   - Business potential: Strong for personal ops and client reporting: daily sales pipeline review, weekly content repurposing, inbound lead triage, competitor monitoring, and product changelog summaries.
   - Risk/note: Adjacent implementation details may not map 1:1 to Hermes. Use Hermes docs as the source of truth for commands and config.

5. **SMB agent operations layer across Telegram, WhatsApp, Slack, Discord, GitHub, GitLab, and schedules**
   - Source: [GitHub / anis-marrouchi / AgentX](https://github.com/anis-marrouchi/agentx) — strong architectural inspiration; README emphasizes routing, schedules, SQLite ledger, cost accounting, and replayability.
   - What it does: Coordinates agents across business channels, keeps an append-only intent ledger, tracks cost per agent, runs schedules, and offers a live dashboard. It is positioned as an ops/observability layer above existing agents, not a single-agent framework.
   - How to reproduce in Hermes: Use Hermes gateway adapters for channel ingestion, sessions/state database for history, cron for schedules, and a local dashboard that reads saved Markdown/JSON outputs. For heavier workflows, split roles into Hermes profiles and use Kanban-style routing.
   - Business potential: This is a blueprint for a small agency operations cockpit: inbound requests from Slack/Telegram, GitHub issue triage, scheduled market scans, and client-facing reports.
   - Risk/note: Multi-channel systems fail at permissions and accountability. Start with one channel plus one scheduled job before adding broad routing.

6. **Cross-platform content publishing and launch promotion agent**
   - Source: [GitHub / ava-agent / promotion-agent](https://github.com/ava-agent/promotion-agent) — concrete plugin/source list; Claude Code oriented, but platform list and fallback logic are useful.
   - What it does: Publishes or prepares posts across many channels, including X/Twitter, Medium, Hashnode, Dev.to, Reddit, LinkedIn, Product Hunt, Hacker News, and AI directories. The README explicitly calls out auth methods and stability differences by platform.
   - How to reproduce in Hermes: Make a `launch-promotion` skill that turns one source article/product update into channel-specific drafts. Use Hermes files for drafts, browser/API tools for submission where safe, and Telegram approval before publishing. Keep platform credentials outside prompts in `.env`.
   - Business potential: High for product launches, SEO distribution, and agency content ops. One polished changelog or blog post can become a controlled distribution pack.
   - Risk/note: Do not fully automate posting to reputation-sensitive communities. Use Hermes to draft, adapt, checklist, and queue; let a human approve.

7. **Multi-stage marketing content pipeline with explicit evaluator steps**
   - Source: [GitHub / seif410 / ai-marketing-agent-pipeline](https://github.com/seif410/ai-marketing-agent-pipeline) — good implementation pattern; README describes staged generation/evaluation/refinement with Pydantic and FastAPI.
   - What it does: Generates several marketing plans, evaluates/selects the best one, generates multiple content variants, then selects the best final output. The key pattern is evaluator-controlled generation rather than one-shot prompting.
   - How to reproduce in Hermes: Use a Hermes skill with a fixed rubric: audience, offer clarity, proof, novelty, CTA, and risk. Run a cron or manual workflow that asks Hermes to generate 3 angles, critique them, produce 3 drafts, and save the selected final draft with critique notes.
   - Business potential: Useful for newsletters, landing-page sections, social posts, cold email variants, and product positioning. It can improve consistency for recurring content production.
   - Risk/note: Evaluators can reward blandness. Add a “specificity and proof” score, and require source links or product facts before final copy.

8. **Guardrailed AI sales prospector / cold-email review loop**
   - Source: [GitHub / nilosaharankniphofiauvaria87 / guardrailed-ai-prospector](https://github.com/nilosaharankniphofiauvaria87/guardrailed-ai-prospector) — weak-to-medium source; README is generic and Windows-download oriented, but the guardrail concept is useful.
   - What it does: Uses multiple AI agents to draft, review, and improve B2B cold emails before sending. The practical idea is not “AI writes emails”, but a controlled draft-review-improve loop.
   - How to reproduce in Hermes: Use one Hermes workflow for prospect research, one for draft generation, and one reviewer skill that checks claims, personalization, spam triggers, legal constraints, and CTA clarity. Deliver drafts to Telegram or a CSV, not directly to an email sender.
   - Business potential: Can reduce time spent on first drafts and improve personalization quality for outbound tests.
   - Risk/note: Deliverability, privacy, and compliance risk are real. Never let the agent invent personal facts or send at scale without review.

9. **CRM automation agent for lead capture, enrichment, scoring, reminders, and email generation**
   - Source: [GitHub search result / akshaypanigrahi89 / CRM-Automation-Agent](https://github.com/akshaypanigrahi89/CRM-Automation-Agent) — access limitation: no README was available through raw GitHub during this run; use as a pattern, not verified implementation.
   - What it does: The repository description says it automates lead capture, CRM enrichment, lead scoring, follow-up reminders, email generation, and API/webhook integration with marketing platforms.
   - How to reproduce in Hermes: Connect a form/webhook source to a Hermes webhook or scheduled CSV pull, enrich leads through permitted APIs, score them using a skill rubric, and push a daily “hot leads + next action” digest to Telegram. Keep CRM writes explicit and auditable.
   - Business potential: High for small product businesses and agencies because missed follow-ups are expensive. Even a read-only daily digest can save time.
   - Risk/note: Because the source is thin, treat it as an idea validation signal rather than a copyable repo.

10. **AI-agent business lead form for WordPress niches**
   - Source: [GitHub / ncreighton / AI Agents & Automation Lead Generation Form Builder](https://github.com/ncreighton/f1c9e630-ai-agents--automation-lead-ge) — medium/weak source; plugin README is simple, but the niche-conversion angle is practical.
   - What it does: Provides a WordPress multi-step form and CRM integration aimed specifically at “AI Agents & Automation” businesses, with conditional logic and conversion-oriented positioning.
   - How to reproduce in Hermes: Use Hermes to generate and maintain a niche lead-magnet flow: landing-page copy, qualification questions, CRM field mapping, and daily lead review. Pair it with a website form, webhook, and a Hermes Telegram digest.
   - Business potential: Useful for converting “AI automation agency” traffic into qualified calls. Hermes can handle qualification summaries and follow-up copy.
   - Risk/note: The repo itself does not prove conversion lift. Test with real traffic and compare booked calls, not form submissions only.

## 3 workflows for Konrad to test

- **Reddit-to-content intelligence loop**
  - Source: [GitHub / reddit-sre-content-agent](https://github.com/kruthish18/reddit-sre-content-agent)
  - First step: Pick 5 communities around AI agents, design tools, and solopreneur SaaS; define filters for score/comments/freshness and excluded post types.
  - Minimal setup: One Hermes cron with web/search or API collection, one `content-intel` skill, Markdown output to `/Users/koni/Desktop/hermes/usecases/`, and Telegram delivery.
  - Success metric: At least 3 high-confidence post ideas per week that become published LinkedIn posts, blog drafts, or product experiments.

- **LinkedIn visibility + lead CSV assistant**
  - Source: [GitHub / linkedin_pr_agent](https://github.com/anu007lko/linkedin_pr_agent)
  - First step: Start in draft-only mode: collect 5 AI/design/product news items and generate 3 LinkedIn angles in Konrad’s voice.
  - Minimal setup: Hermes cron, RSS/source list, brand-voice skill, lead scoring rubric, Telegram approval. Add contact enrichment only after the content loop is useful.
  - Success metric: 5 usable LinkedIn drafts per week and 20 scored prospects with explicit reasons to contact them.

- **Launch-promotion pack generator**
  - Source: [GitHub / promotion-agent](https://github.com/ava-agent/promotion-agent)
  - First step: Take one existing product update or Hermes Dash report and transform it into platform-specific drafts for LinkedIn, X, Reddit, Dev.to, Hacker News, and Product Hunt.
  - Minimal setup: Hermes skill with platform constraints, file output per channel, Telegram review checklist, and manual publishing.
  - Success metric: One source asset becomes at least 6 tailored distribution drafts in under 30 minutes, with no hallucinated claims.

## Setup notes / tutorial nuggets

- Hermes already has the pieces needed for the strongest recurring workflows: use `hermes cron create SCHED` for scheduled jobs, `hermes gateway setup` / `hermes gateway run` for messaging delivery, and `hermes profile create NAME` when agents need separate identities. Verify commands against the [Hermes cron docs](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron), [Hermes messaging docs](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/), and [Hermes profiles docs](https://hermes-agent.nousresearch.com/docs/user-guide/profiles).
- For Telegram-based personal ops, prefer a profile-scoped gateway and separate bot credentials per persona. This follows the isolation lesson from [geraledesma/hermes-agent-automations](https://github.com/geraledesma/hermes-agent-automations) and avoids gateway credential conflicts.
- For Reddit/content scouts, copy the filtering pattern from [reddit-sre-content-agent](https://github.com/kruthish18/reddit-sre-content-agent): exclude job posts, deleted/low-engagement content, and generic posts before asking the model for ideas. In Hermes, put those filters into the cron prompt or a dedicated skill.
- For sales/lead workflows, copy the “draft + review + CSV/report” boundary from [linkedin_pr_agent](https://github.com/anu007lko/linkedin_pr_agent) instead of starting with direct sending. Hermes should produce scored leads and drafts first; sending should remain human-approved until deliverability is proven.
- For promotion workflows, use the platform-stability mindset from [promotion-agent](https://github.com/ava-agent/promotion-agent): some platforms support APIs, some need browser/cookie flows, and some should remain manual. In Hermes, encode this as per-platform instructions and do not let the agent assume every channel can be posted automatically.
- For evaluator-style marketing output, adapt the staged structure from [ai-marketing-agent-pipeline](https://github.com/seif410/ai-marketing-agent-pipeline): generate multiple plans, score them with a rubric, generate variants, then select one final. This is better than asking Hermes for one polished answer.
- If building a dashboard around these recurring reports, keep the Markdown links intact. The current Hermes Dash workflow depends on source links being clickable in saved `.md` files.

## Link dump

- [Hermes Agent Automations — multi-instance CEO/CTO architecture](https://github.com/geraledesma/hermes-agent-automations) — best Hermes-native inspiration for profile-scoped agents, Telegram, cron, and VPS operation.
- [Autonomous LinkedIn PR and Lead Agent Suite](https://github.com/anu007lko/linkedin_pr_agent) — concrete PR posting plus daily lead CSV pattern.
- [Reddit SRE Content Agent](https://github.com/kruthish18/reddit-sre-content-agent) — strong template for turning subreddit discussions into blog ideas.
- [Nolty — always-on Claude/OpenClaw-style agent stack](https://github.com/bradbushSFAI/nolty) — useful adjacent pattern for Telegram, cron dispatching, and sub-agent inheritance.
- [AgentX — SMB agent operations layer](https://github.com/anis-marrouchi/agentx) — good architecture for multi-channel routing, schedules, ledger, and observability.
- [Promotion Agent — multi-platform content publishing plugin](https://github.com/ava-agent/promotion-agent) — practical list of distribution channels and auth/fallback considerations.
- [AI Marketing Agent Pipeline](https://github.com/seif410/ai-marketing-agent-pipeline) — clean staged generation/evaluation/refinement pattern for marketing copy.
- [Guardrailed AI Prospector](https://github.com/nilosaharankniphofiauvaria87/guardrailed-ai-prospector) — useful cold-email guardrail concept, though source quality is weaker.
- [CRM Automation Agent](https://github.com/akshaypanigrahi89/CRM-Automation-Agent) — lead capture/enrichment/scoring/follow-up idea; README unavailable during this run.
- [AI Agents & Automation Lead Generation Form Builder](https://github.com/ncreighton/f1c9e630-ai-agents--automation-lead-ge) — niche lead-form angle for AI automation businesses.
- [Hermes cron documentation](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron) — source of truth for scheduled Hermes jobs.
- [Hermes messaging documentation](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/) — source of truth for Telegram/Slack/email-style delivery.
