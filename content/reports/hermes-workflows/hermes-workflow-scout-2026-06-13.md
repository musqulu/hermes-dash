# Hermes workflow scout — 2026-06-13

Note: X and Reddit often expose only public/snippeted content without full threads, so I flag the stronger sources where it was possible to read the full description.

## 15 most interesting workflows / use cases to recreate in Hermes

1. **YouTube Shorts autoposter with confirmations**
   - Source: Reddit / r/organicsocial — [How we’re using Hermes Agent for YouTube Shorts automation](https://www.reddit.com/r/organicsocial/comments/1t60nyh/how_were_using_hermes_agent_for_youtube_shorts/)
   - What it does: Hermes gets a folder of finished videos and title/description rules, tracks a log of already-uploaded material, and sends a confirmation after each upload.
   - How to recreate: `cron` + folder queue + CSV/SQLite log + YouTube API / a Genviral-style layer + Telegram confirmation.
   - Potential: very good for content repurposing: Analog Hive, AI/design clips, shorts from tutorials or backstage footage.
   - Note: the most important pattern is the **confirmation loop** — without it, automations can silently fail for days.

2. **SEO Super Agent: content calendar → briefs → drafts → internal linking**
   - Source: Julian Goldie — [Hermes AI SEO Super Agent](https://juliangoldie.com/hermes-ai-seo-super-agent)
   - What it does: Hermes as a system for keyword research, content calendars, briefs, blog drafts, internal linking, and quality checks.
   - How to recreate: profiles/roles: Researcher, Brief Writer, Editor, Internal Linking, QA; plus `cron`, web search, markdown files, and optionally Ahrefs/DataForSEO/Firecrawl APIs.
   - Potential: strong for building visibility in AI/design and for long-tail SEO around products.
   - Note: the source is promotional, but the workflow is sound. Requires manual review before publishing.

3. **24/7 recurring workflow: daily briefs, weekly reports, competitor checks**
   - Source: X / Julian Goldie — [Hermes Agent Claude Code Builds A 24/7 AI Workflow](https://x.com/JulianGoldieSEO/status/2054640784159408361)
   - What it does: Claude/LLM as the planning “brain,” Hermes as the runtime executing repeatable work: research briefs, competitor checks, content briefs.
   - How to recreate: `cronjob` + `web` + markdown files + Telegram delivery + skills for report formats.
   - Potential: ideal as a “daily operator” for market research, competitors, content, and inspiration.
   - Note: it’s worth starting with a single workflow, not “automate everything.”

4. **13-agent marketing team with a task database and peer review**
   - Source: Reddit / r/nocode — [How I automated my entire marketing workflow with AI agents](https://www.reddit.com/r/nocode/comments/1rg4e9v/)
   - What it does: the author built a team of 13 agents for marketing the AI video platform Fruityo: research, strategy, copywriting, design, execution, devil’s advocate, review.
   - How to recreate in Hermes: Hermes profiles or Kanban + SQLite/PocketBase/Airtable + states `backlog → todo → in_progress → peer_review → review → approved → done`.
   - Potential: a very strong pattern for content ops and campaigns, because it forces review instead of auto-publishing junk.
   - Note: this was on OpenClaw, but the architecture maps perfectly onto Hermes Kanban/profiles.

5. **Hermes as a 5-person team via Kanban**
   - Source: Reddit / r/hermesagent — [I turned Hermes Agent into a 5-person team](https://www.reddit.com/r/hermesagent/comments/1ty73ia/i_turned_hermes_agent_into_a_5person_team_3/)
   - What it does: several role-based agents claim tasks, comment, block, hand off work, and run in parallel.
   - How to recreate: `hermes kanban init`, worker profiles, separate skills for strategy/copy/research/review.
   - Potential: a good backbone for a “mini-agency” doing content/SEO/sales.
   - Note: the full content was poorly accessible, but the pattern itself aligns with the official Hermes Kanban.

6. **Lead generation / prospecting agent**
   - Sources: GitHub — [hermes-agent-prospecting-system](https://github.com/CarlTheYoda/hermes-agent-prospecting-system), DEV — [How I Built a Hermes Agent for Lead Generation](https://dev.to/nimay_04/how-i-built-a-hermes-agent-for-lead-generation-that-finds-and-qualifies-better-prospects-1hm6)
   - What it does: finds companies matching the ICP, qualifies leads, scores them, and exports CSV/CRM-ready output.
   - How to recreate: ICP markdown + web search/browser + scoring rubric + CSV/SQLite + enrichment API + CRM/Sheets.
   - Potential: directly sales-oriented — a prospect list for Analog Hive, AI/design services, consulting.
   - Note: if it goes toward cold email, you must protect deliverability and legal compliance; don’t send en masse without controls.

7. **Cold email follow-up guardrail: don’t follow up if someone replied**
   - Source: GitHub snippet — [hermes-agent-prospecting-system](https://github.com/CarlTheYoda/hermes-agent-prospecting-system)
   - What it does: before sending follow-ups, the system scans Gmail/Inbox and updates each lead’s status so it doesn’t spam people who already replied.
   - How to recreate: Gmail/IMAP skill + CSV/SQLite leads table + `cron` + statuses `new/contacted/replied/do_not_contact`.
   - Potential: very practical, because it protects domain reputation and relationships.
   - Note: this should be semi-automated with human approval before sending.

8. **AI SEO competitor analysis + full blog drafts**
   - Source: Reddit / r/n8n — [n8n AI Agent for SEO competitor analysis](https://www.reddit.com/r/n8n/comments/1olur30/i_built_an_n8n_ai_agent_that_does_seo_competitor/)
   - What it does: the agent takes a keyword, pulls SERP/competitors via DataForSEO, scrapes with Firecrawl, and produces an analysis and a blog post draft.
   - How to recreate in Hermes: DataForSEO API + Firecrawl/browser + markdown brief template + editorial review skill.
   - Potential: very good for scaling blogs and topical authority.
   - Note: publishing “full blog posts” without editing is a quality risk. Better to use it for briefs and first drafts.

9. **Content team AI hackathon: building small tools for real pain points**
   - Source: Ahrefs — [We Ran an AI Hackathon for Our Content Team](https://ahrefs.com/blog/agent-a-hackathon/)
   - What it does: the content team blocks off a week, everyone writes down their repetitive frustrations and builds small automations.
   - How to recreate in Hermes: a one-day “workflow sprint”: list of frustrations → 3 prototypes → a skill for each repeatable process.
   - Potential: great for you: you could run your own “AI design/content ops hackathon.”
   - Note: the key insight: **start from the memory layer and concrete frustrations**, not from the tool.

10. **Daily personal/business brief via Telegram**
    - Source: official docs — [Hermes User Stories](https://hermes-agent.nousresearch.com/docs/user-stories)
    - What it does: daily briefs: inbox summary, HN/AI news, competitor checks, project standups.
    - How to recreate: `cronjob` + web/email/calendar + Telegram delivery + a short decision-oriented format.
    - Potential: a good “CEO morning brief” for a solopreneur.
    - Note: the brief needs a quality filter; otherwise it turns into newsletter noise.

11. **Obsidian / Markdown vault as operational project memory**
    - Source: [Hermes User Stories](https://hermes-agent.nousresearch.com/docs/user-stories) + Reddit snippets
    - What it does: Hermes saves research, decisions, automations, learning files, and projects to a local vault.
    - How to recreate: a `~/konrad-brain/...` folder + agreed templates + a `markdown-working-memory`/Obsidian skill + asking before storing sensitive info.
    - Potential: a cumulative advantage — the agent asks for context less and less over time.
    - Note: you have to watch what goes into persistent memory so you don’t clutter the brain.

12. **Self-improving skills: the agent writes its own procedures after hard tasks**
    - Source: [Hermes User Stories](https://hermes-agent.nousresearch.com/docs/user-stories), official Hermes docs
    - What it does: after a complex workflow, Hermes creates a `SKILL.md`, so similar future tasks are faster and cheaper.
    - How to recreate: after every repeatable workflow: “save this as a skill”; then cron can load the skill automatically.
    - Potential: Hermes’s best “moat” — your content/SEO/sales processes become increasingly your own.
    - Note: skills need maintenance; stale instructions can do harm.

13. **Cheap models + good skills instead of expensive models for everything**
    - Sources: Reddit snippets — [One month with Hermes Agent](https://old.reddit.com/r/hermesagent/comments/1t29ogw/one_month_with_hermes_agent_what_i_wish_i_knew/), LocalLLaMA — [Anybody who tried Hermes-Agent?](https://www.reddit.com/r/LocalLLaMA/comments/1ro9lph/anybody_who_tried_hermes-agent/)
    - What it does: users report that planning, clear configs, and skills let them use cheaper models for research/general tasks.
    - How to recreate: a stronger model as the main planner, cheaper models for simple crons/reformatting/subtasks.
    - Potential: lowers the cost of always-on automation.
    - Note: don’t overdo it saving on the main model — a weak planner ruins the whole workflow.

14. **Always-on Hermes on a VPS / mini PC / Raspberry Pi**
    - Sources: Reddit / r/VPS — [I want to run Hermes Agent on a VPS](https://www.reddit.com/r/VPS/comments/1tuh4r9/i_want_to_run_hermes_agent_on_a_vps_which_vps_is/), Zeabur — [Hermes Agent Deploy Guide](https://zeabur.com/templates/RTWI4O)
    - What it does: Hermes runs 24/7 as a process on a server and you message it via Telegram.
    - How to recreate: VPS 2C/4GB minimum, 4C/8GB comfortable; `hermes gateway setup/start`; cron jobs; backups.
    - Potential: the agent really “lives” instead of waiting in a browser tab.
    - Note: a public dashboard requires caution; messaging is outbound, usually without a public port.

15. **Second-hand / marketplace monitor**
    - Source: LocalLLaMA snippet / user stories — example: an agent searches second-hand markets and emails interesting finds.
    - What it does: periodically monitors listings against criteria, filters them, and sends a shortlist.
    - How to recreate: `cron` + web/browser + scoring rubric + email/Telegram + a log of known listings.
    - Potential: can be ported to real estate, photo gear, vintage cameras, domains, SaaS acquisition targets.
    - Note: you must maintain deduplication and clear criteria for “what’s actually worth attention.”

## 3 workflows especially worth testing for you

1. **AI/design visibility scout → LinkedIn/content brief**
   - Minimal setup: a daily cron gathers 5 trends from AI design/product, picks 1 angle, drafts a post.
   - Success metric: 3 finished posts per week that you actually publish.

2. **Analog Hive SEO/content machine**
   - Minimal setup: a list of 30 topics around film developing, lab workflows, analog photography; Hermes writes briefs and an internal link plan.
   - Success metric: 4 strong articles/month + growing impressions/search clicks.

3. **Prospecting agent for partnerships / clients**
   - Minimal setup: ICP markdown + a list of sources + scoring CSV + manual approval.
   - Success metric: 20 well-matched leads per week, not mass spam.

## Setup nuggets

- Official Hermes install:

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
hermes setup
hermes model
hermes gateway setup
```

- Pattern for workflows:
  - `cron` triggers research/automation
  - `skills` hold procedures and the quality format
  - `memory`/Markdown holds project context
  - Telegram provides confirmations and the approval loop
  - a CSV/SQLite log prevents duplicates
- The most recurring advice from the sources: Hermes is best when the **workflow is already clearly described**. Not “do marketing,” but “every day find 10 topics, score them by X, save 3 briefs, send to review.”

## Cron

Starting tomorrow at 13:00, a fresh version of the scouting report is sent automatically to Telegram and should be saved as a Markdown file in the folder:

`/Users/koni/Desktop/hermes/Usecases/`
