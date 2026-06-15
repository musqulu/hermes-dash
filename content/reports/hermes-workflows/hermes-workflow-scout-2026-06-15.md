## Hermes workflow scout — 2026-06-15

- Short verdict of the day: today’s best direction is not “another agent,” but an **operational system around agents**: task queues, artifacts, a dashboard, manual approvals, and a Telegram/Slack channel for questions. The most useful sources today are from GitHub and HN; X/Reddit were blocked or unavailable this session due to anti-bot/403, so I don’t treat the lack of results from those channels as a market signal. The strongest things to recreate in Hermes: lead-gen + outreach, agentic SEO, a multi-agent fleet, social/X automation, and your own status dashboard.

## Top workflows / use cases

1. **B2B lead-gen agent: company → research → personalized cold email**
   - Source: [GitHub / byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent) — a good technical source; the README shows a webhook, Gemini, Tavily, a scraper, and a JSON pipeline, but it doesn’t give verified business metrics.
   - What it does: takes `company_name` and `website` via a webhook, researches the company, analyzes its value proposition / product / technology, and generates personalized outreach.
   - How to recreate in Hermes: `hermes webhook subscribe lead-research`, a “lead-research” skill, the `web` toolset, saving to Google Sheet/CSV via terminal/API, optionally a cron for a daily lead queue; the Telegram gateway for manual approval of emails before sending.
   - Business potential: sales/lead generation; it shortens manual research before a cold email and lets you build a pipeline for niche agency services.
   - Risk/note: requires quality control and cold-email compliance; Tavily/Serper/Hunter/Gmail APIs can incur costs and limits.

2. **Agentic marketing workflow with human-in-the-loop**
   - Source: [GitHub / Nadeer00 / agentic-ai-marketing-workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow) — strong as an n8n blueprint; includes Serper, Hunter, Groq, Google Sheets, and Gmail, plus Docker/n8n instructions.
   - What it does: searches for companies by industry and city, verifies emails, includes a manual approval step, generates emails and LinkedIn posts, and saves data in Google Sheets.
   - How to recreate in Hermes: a “lead batch” cron once a day, a prompt with the ICP buy-box, the `web` toolset, a `leads/YYYY-MM-DD.md` file + Sheets API, final sending only after `/approve` or a separate Kanban status.
   - Business potential: outbound for your own products, a small agency, or design/AI consulting; it’s easy to measure the number of qualified leads and approved emails.
   - Risk/note: deliverability and domain reputation; automatic sending without review is a bad idea.

3. **Agentic SEO operating system: briefs, clusters, technical checks, and a project “brain”**
   - Source: [GitHub / agencia-conversion / agentic-seo-skills](https://github.com/agencia-conversion/agentic-seo-skills) — a very good source; the repo has a skill/plugin structure, documentation, and a clear separation of strategy, brain, content, and data analysis.
   - What it does: the agent performs repeatable SEO work: research, content briefs, technical audits, clustering, and logging decisions and constraints into the project “brain.”
   - How to recreate in Hermes: a dedicated `seo-ops` profile, skills for `content-brief`, `technical-seo-check`, `cluster-research`, a `project/brain/` folder, a weekly “SEO opportunities” cron, the Telegram gateway for approving topics.
   - Business potential: SEO/content ops; good for Konrad’s blog, product landing pages, and a repository of topics for social content.
   - Risk/note: SEO needs data from GSC/DataForSEO/Ahrefs/Semrush; without data the agent will produce overly generic recommendations.

4. **Multi-agent fleet: task queue, worktree, artifacts, and Telegram ask-human**
   - Source: [Hacker News / sermakarevich / “I am running 3 coding agents…”](https://news.ycombinator.com/item?id=48520757) and [GitHub / sermakarevich / fleet](https://github.com/sermakarevich/fleet) — very practical; the post describes headless mode, a queue, artifacts, worker isolation, a local model, and Telegram.
   - What it does: a supervisor claims tasks from a queue, runs multiple coders in isolated worktrees, saves plan/status/knowledge/events/stderr, and lets the operator respond to agents via UI/Telegram.
   - How to recreate in Hermes: Hermes `kanban` or `cron` + `--worktree`, separate profiles for the workers, per-task artifact files, the Telegram gateway for questions, a strong model for planning and a cheaper/local one for execution.
   - Business potential: product/dev ops; it lets you develop products, fix bugs, do research, and run tests in parallel without manually babysitting each process.
   - Risk/note: the biggest problem is not coding but orchestration, costs, subscription limits, and the moments that require a human decision.

5. **Hermes Cockpit: mission control for many projects and agents**
   - Source: [GitHub / goktugozdem2 / hermes-cockpit](https://github.com/goktugozdem2/hermes-cockpit) — a good dashboard MVP; the repo describes health cards, worker status, alerts, a timeline, and future GitHub/Vercel connectors.
   - What it does: collects scattered statuses from agents, crons, deploys, reports, and TODOs into a single operator console.
   - How to recreate in Hermes: each cron/worker writes a `status.jsonl` or Markdown file in the project directory; a Next.js dashboard reads the files and shows “running/blocked/ready to ship”; optionally a webhook ingestion API.
   - Business potential: ops/product management; especially with many micro-products and marketing experiments.
   - Risk/note: the UI alone isn’t enough — you need to standardize the format of agents’ reports and statuses.

6. **Social/X automation via a Hermes plugin**
   - Source: [GitHub / Xquik-dev / hermes-tweet](https://github.com/Xquik-dev/hermes-tweet) — fresh and directly for Hermes; the README mentions X search, account reads, tweet posting, replies, and likes via Xquik, but you have to watch platform policies.
   - What it does: gives Hermes native actions around X/Twitter: search, reading accounts, publishing, and interactions.
   - How to recreate in Hermes: the `hermes-tweet` plugin as a social toolset, a “daily visibility scout” cron, a skill for generating short posts from reports, manual approval before publishing.
   - Business potential: social media/content distribution; you can turn reports and build logs into daily posts, replies, and a follow-up list.
   - Risk/note: risk of automatic spam, account bans, and an off-brand tone; publish only after review.

7. **Habr-style deterministic digest: sitemap/API → ranking → Telegram Markdown**
   - Source: [GitHub / Pro100x3mal / hermes-skill-habr-digest](https://github.com/Pro100x3mal/hermes-skill-habr-digest) — good as a pattern, even if the domain is Habr; the source describes a sitemap seed, a per-article API, ranking by views, and delivery via a Hermes cron/gateway.
   - What it does: instead of asking the model “what’s interesting,” it deterministically gathers candidates from an API/sitemap, sorts by a hard metric, and only then renders the report.
   - How to recreate in Hermes: for Konrad: sitemaps/RSS of AI/design/SEO blogs, the GitHub API or YouTube RSS → a pre-run script → Hermes formats Telegram-friendly Markdown.
   - Business potential: research/content ops; fewer hallucinations, more repeatability, and the ability to build a report dashboard.
   - Risk/note: you have to choose a sensible source of truth; ranking by views doesn’t always equal business value.

8. **Custodian / auto-repair for agents, crons, and the gateway**
   - Source: [GitHub / indigokarasu / hermes-custodian-plugin](https://github.com/indigokarasu/hermes-custodian-plugin) — an interesting operational pattern; the plugin declares lifecycle hooks, a scan, issue fingerprints, auto-fix tiers, and crons.
   - What it does: monitors gateway logs, crons, skill journals, and data directories; attempts safe fixes and escalates the rest.
   - How to recreate in Hermes: a dedicated “health check” cron reading `~/.hermes/logs/`, `hermes cron status`, recent reports, and build logs; it generates a list of issues and Kanban tasks to fix them.
   - Business potential: reliability ops; reduces the risk that marketing/lead automations silently stop working.
   - Risk/note: auto-fix must be conservative; destructive fixes only after approval.

9. **Mobile Hermes operator + ntfy bridge for approvals**
   - Source: [GitHub / stakeswky / hermes-mobile](https://github.com/stakeswky/hermes-mobile) — practical as a mobile operator-layer idea; the README describes a self-hosted dashboard, Tailscale, and an ntfy bridge for notifications.
   - What it does: gives phone access to chat streaming, approvals, sessions, and crons; ntfy notifies about questions/completions even when the app is killed.
   - How to recreate in Hermes: you don’t necessarily need to build an app — the Telegram gateway + Tailscale/VPN + a dedicated status cron is enough; for dev you can add an ntfy bridge for critical approvals.
   - Business potential: operator time savings; the agent can work while Konrad approves only high-risk decisions from the phone.
   - Risk/note: dashboard access security; don’t expose 0.0.0.0 without controls.

10. **A skills library for content ops and a knowledge wiki**
    - Source: [GitHub / thedavidweng / skills](https://github.com/thedavidweng/skills) — a good source of skill inspiration; compatible with Hermes Agent and OpenClaw, covering a wiki, linking, source integrity, and content operations.
    - What it does: turns repeatable knowledge/content tasks into installable skills: building a wiki, linking, source auditing, document integration.
    - How to recreate in Hermes: `hermes skills install` for Konrad’s own skills: `blog-research`, `source-integrity`, `case-study-draft`, `linkedin-repurpose`; each skill has a procedure and an output format.
    - Business potential: content ops and personal knowledge management; it maintains project memory and speeds up article/post production.
    - Risk/note: skills easily bloat; keep them short, test them, and archive unused ones.

11. **n8n/Make template library as a source of agency products**
    - Source: [GitHub / mypsbots / ai-workflow-templates](https://github.com/mypsbots/ai-workflow-templates) — a broad library, but more of a catalog than verified case studies; treat it as inspiration for your own implementations.
    - What it does: groups templates for AI agents, content creation, lead generation, ecommerce, data processing, and productivity.
    - How to recreate in Hermes: pick 2–3 categories and turn them into Hermes crons/webhooks: “SEO content generator,” “lead qualification,” “review analysis,” “newsletter creator.”
    - Business potential: service packaging; you can quickly design offers like a “weekly SEO opportunity brief” or a “lead enrichment sprint.”
    - Risk/note: template catalogs tend to be shallow; it’s worth doing your own PoC and measuring the result.

## 3 workflows for Konrad to test

- **Lead research + cold email draft with manual approval**
  - Source: [Nadeer00 / agentic-ai-marketing-workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow) and [byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent).
  - First step: define one ICP, e.g. “founders of AI/design tools without good onboarding content.”
  - Minimal setup: a Hermes cron once a day, the `web` toolset, a `leads/YYYY-MM-DD.md` file, Telegram approval, manual export to Gmail/CRM to start.
  - Success metric: 10 qualified leads per week, 5 approved emails, reply rate > 5% without hurting deliverability.

- **An agentic SEO/content brief operating system for your own products**
  - Source: [agencia-conversion / agentic-seo-skills](https://github.com/agencia-conversion/agentic-seo-skills).
  - First step: pick one product/topic and create a `project/brain/` folder with positioning, the ICP, a competitor list, and sources.
  - Minimal setup: a `seo-brief` skill, a weekly “topic opportunities” cron, saving Markdown to the dashboard, manual review before publishing.
  - Success metric: 4 briefs per month, 2 published texts/posts, a growing list of keywords and examples with source links.

- **Mission control for crons, reports, and workers**
  - Source: [goktugozdem2 / hermes-cockpit](https://github.com/goktugozdem2/hermes-cockpit), [sermakarevich / fleet](https://github.com/sermakarevich/fleet), and the [HN thread](https://news.ycombinator.com/item?id=48520757).
  - First step: standardize one status format for every report/worker run: `status`, `last_run`, `blocked_on`, `next_action`, `links`.
  - Minimal setup: a Next.js dashboard reading Markdown/JSONL from local folders; Hermes crons append status after each run.
  - Success metric: in 30 seconds you can see which automations are working, which are blocked, and what needs approval.

## Setup notes / tutorial nuggets

- **Hermes cron as the core mechanism for recurring scouts.** Official pattern: `hermes cron create "0 9 * * *"`, managed via `hermes cron list/edit/run/status`, with self-contained context, sources, and an output format in the prompts. Source: [Hermes docs / Cron](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron).
- **For code-editing agents, use worktree isolation.** Hermes has a `--worktree` flag, and HN/fleet show the same pattern: a worker makes a change in isolation, another worker validates/tests/merges it. Sources: [Hermes CLI reference](https://hermes-agent.nousresearch.com/docs/reference/cli-commands) and [HN / running 3 coding agents](https://news.ycombinator.com/item?id=48520757).
- **An external ask-human channel is critical for headless automation.** Fleet uses a separate ask-human/Telegram, and Hermes has a gateway and approvals; in practice crons/workers should be able to stop on a question instead of guessing. Source: [sermakarevich / claude / mcp ask_human](https://github.com/sermakarevich/claude/tree/main/mcp/ask_human).
- **Deterministic collection before model ranking.** The Habr digest shows a good pattern: a sitemap/API as the candidate source, hard metrics, and only then Markdown delivery. Source: [Pro100x3mal / hermes-skill-habr-digest](https://github.com/Pro100x3mal/hermes-skill-habr-digest).
- **A lead-gen workflow should have human-in-the-loop.** Nadeer00 has manual approval between lead verification and sending; in Hermes the equivalent is Telegram approval, a Kanban `needs_review` status, or a separate `approved.md` file. Source: [Nadeer00 / agentic-ai-marketing-workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow).
- **The project brain should separate sources, working analysis, and deliverables.** The agentic SEO repo strongly emphasizes `project/brain/` folders, raw sources, deliverables, and public content; the same is worth adopting for Konrad’s blog/products. Source: [agencia-conversion / agentic-seo-skills](https://github.com/agencia-conversion/agentic-seo-skills).
- **Social publishing only with approval.** Hermes Tweet can provide X tools, but the final post/reply should require review, especially with a personal/brand account. Source: [Xquik-dev / hermes-tweet](https://github.com/Xquik-dev/hermes-tweet).

## Link dump

- [byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent) — a concrete webhook → research → cold outreach pipeline.
- [Nadeer00 / agentic-ai-marketing-workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow) — an n8n blueprint for lead gen, Hunter, Gmail, Sheets, and human approval.
- [agencia-conversion / agentic-seo-skills](https://github.com/agencia-conversion/agentic-seo-skills) — the most mature agentic SEO/content ops pattern.
- [HN / I am running 3 coding agents non-stop](https://news.ycombinator.com/item?id=48520757) — a practical description of orchestration, worktrees, artifacts, Telegram, and costs.
- [sermakarevich / fleet](https://github.com/sermakarevich/fleet) — a supervisor for parallel agents and a central task queue.
- [goktugozdem2 / hermes-cockpit](https://github.com/goktugozdem2/hermes-cockpit) — a mission-control dashboard for Hermes projects and agents.
- [Xquik-dev / hermes-tweet](https://github.com/Xquik-dev/hermes-tweet) — a Hermes plugin for X/Twitter automation.
- [Pro100x3mal / hermes-skill-habr-digest](https://github.com/Pro100x3mal/hermes-skill-habr-digest) — a good deterministic-digest + Telegram delivery pattern.
- [indigokarasu / hermes-custodian-plugin](https://github.com/indigokarasu/hermes-custodian-plugin) — auto-monitoring and cautious auto-repair for Hermes ops.
- [stakeswky / hermes-mobile](https://github.com/stakeswky/hermes-mobile) — a mobile operator, approvals, and an ntfy bridge for Hermes.
- [thedavidweng / skills](https://github.com/thedavidweng/skills) — skills for content ops, a wiki, and source integrity, compatible with Hermes/OpenClaw.
- [Hermes docs / Cron](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron) — the official reference point for scheduled workflows.

Also saved to: /Users/koni/Desktop/hermes/usecases/hermes-workflow-scout-2026-06-15.md
