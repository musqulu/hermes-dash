# Weekly Hermes Workflow Ratings — 2026-06-22

## Executive take

- The strongest thing to try is not another agent UI: it is a Telegram-controlled Hermes operator loop that turns capture/research into bounded Codex tasks, verified builds, saved Markdown, and short status reports.
- The second strongest layer is repo/task memory: a simple `TRACKER.md` / `DELIVERY_TRACK.md` plus repo-local rules will likely create more leverage than installing a large multi-agent platform.
- For growth and independence goals, a small approval-gated lead/research desk is worth a spike, but only as drafts + review queues at first; do not auto-send outreach.
- Skip most broad “AI workflow template libraries” and heavy multi-agent platforms for now. Steal patterns, not stacks.
- The recurring scout itself is already proving a valuable pattern: cron collection → hard filtering → dashboard copy → build/push → Telegram summary.

## Top 3 to try this week

### 1. Telegram Product Operator loop: capture → Hermes triage → Codex task brief → verified result

- Candidate: Telegram Product Operator loop for utllo / Analog Hive / Market Scout.
- Score + label: 92 — Try now.
- Why it matters: This directly fits Konrad’s desired operating system: Telegram as the cockpit, Hermes as planner/scheduler/memory, Codex as repo worker, Markdown as durable state, and dashboard/Telegram as output. It is repeated across the strongest daily reports and can be tested without adopting a new platform.
- Exact 30-60 minute test: Create one Markdown command spec for `/capture`, `/brief`, `/ship`, and `/watch`; implement or simulate only `/ship utllo` by having Hermes write a Codex-ready brief with goal, repo path, constraints, acceptance checks, build command, and reporting format. Do not let it edit code yet.
- Success signal: A messy Telegram-style request becomes a bounded implementation brief that a coding agent can run with minimal clarification.
- Source links: [Hermes docs](https://hermes-agent.nousresearch.com/docs/), [Hermes Team Telegram Assistant + MCP notes](https://hermes-agent.nousresearch.com/docs/guides/team-telegram-assistant), [Hermes MCP docs](https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp), [tg-agents-wrapper](https://github.com/buildoak/tg-agents-wrapper), [Lilo](https://github.com/abi/lilo), [Kai](https://github.com/dcellison/kai), [Hermes workflow scout 2026-06-16 source notes](hermes-workflow-scout-2026-06-16.md), [Daily 2026-06-19](daily-hermes-agent-workflows-2026-06-19.md), [Daily 2026-06-20](daily-hermes-agent-workflows-2026-06-20.md), [Daily 2026-06-22](daily-hermes-agent-workflows-2026-06-22.md).
- Risks / caveats: Telegram write/send tools are high-risk. Start with capture, draft, and status only. Anything involving public posting, client messages, repo history, money, or private data needs explicit approval.

### 2. Repo-local delivery tracker + rules for Codex/Hermes handoffs

- Candidate: `DELIVERY_TRACK.md` / `TRACKER.md` + repo-local operating rules for each active product.
- Score + label: 88 — Try now.
- Why it matters: This solves the “agent amnesia” and vague-task problem with the lowest setup burden. A visible tracker gives Hermes and Codex the same contract: current objective, backlog, blocked items, acceptance checks, build command, and next safe task.
- Exact 30-60 minute test: Add `/Users/koni/Desktop/dev/utllo/DELIVERY_TRACK.md` or a sandbox equivalent with sections: current objective, backlog, in progress, blocked, verification checklist, next agent-safe task. Then run one prompt: “Read the tracker, choose the smallest safe next task, write a Codex brief, and update only the proposed next action.”
- Success signal: Codex/Hermes can continue a project from the file without relying on chat history, and the next action is specific enough to test.
- Source links: [Agentic Workflow Kit](https://github.com/aryeko/agentic-workflow-kit), [Nudge](https://github.com/attunehq/nudge), [remem](https://github.com/majiayu000/remem), [Engram](https://github.com/the-long-ride/engram), [Agent Smith](https://github.com/gunesbizim/agent-smith), [Daily 2026-06-16](daily-hermes-agent-workflows-2026-06-16.md), [Daily 2026-06-17](daily-hermes-agent-workflows-2026-06-17.md), [Daily 2026-06-21](daily-hermes-agent-workflows-2026-06-21.md).
- Risks / caveats: Avoid over-instrumenting. One tracker and 5-10 rules are enough. If every repo gets a giant process manual, the system becomes maintenance drag.

### 3. Approval-gated growth / lead research desk

- Candidate: Hermes webhook/cron lead-dossier workflow for agency/productized-service outreach.
- Score + label: 82 — Worth a quick spike.
- Why it matters: This converts research into revenue-facing action while preserving human review. The useful workflow is: seed companies → collect evidence → score fit → draft personalized angle → approve/reject in Telegram → only then send manually or through a narrow integration.
- Exact 30-60 minute test: Define one concrete offer, e.g. “AI/product landing-page teardown for design-led SaaS.” Create 10 manual seed companies in CSV/Markdown. Ask Hermes to produce dossiers with ICP fit, public evidence, outreach angle, and do-not-contact risk. No scraping arms race and no auto-send.
- Success signal: At least 5 of 10 dossiers contain concrete, source-backed personalization that Konrad would be willing to send after editing.
- Source links: [Agentic AI Marketing Workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow), [ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent), [ai-sales-office](https://github.com/Richard-Grey-78/ai-sales-office), [10x-Team](https://github.com/OpenAnalystInc/10x-Team), [Hermes workflow scout 2026-06-21](hermes-workflow-scout-2026-06-21.md).
- Risks / caveats: Legal/compliance, deliverability, and reputation risks. Hunter/Serper/Tavily/API costs can creep. Keep it draft-only until quality and opt-out process are proven.

## Full ranked shortlist

### 1. Telegram Product Operator loop — 92 — Try now

- Why it is useful: Highest fit, lowest conceptual risk, and directly aligned with Hermes + Codex + Telegram. It turns daily phone input into shipped product work.
- What to do next: Write the command grammar and test only one non-writing `/ship` path.
- Source links: [Hermes docs](https://hermes-agent.nousresearch.com/docs/), [Team Telegram Assistant](https://hermes-agent.nousresearch.com/docs/guides/team-telegram-assistant), [tg-agents-wrapper](https://github.com/buildoak/tg-agents-wrapper), [Lilo](https://github.com/abi/lilo), [Kai](https://github.com/dcellison/kai).

### 2. Repo-local delivery tracker + rules — 88 — Try now

- Why it is useful: Makes agent work auditable and persistent across sessions; prevents vague Codex tasks.
- What to do next: Add one `DELIVERY_TRACK.md` to the most active repo and force every Codex brief to read/update it.
- Source links: [Agentic Workflow Kit](https://github.com/aryeko/agentic-workflow-kit), [Nudge](https://github.com/attunehq/nudge), [remem](https://github.com/majiayu000/remem), [Engram](https://github.com/the-long-ride/engram), [Agent Smith](https://github.com/gunesbizim/agent-smith).

### 3. Approval-gated growth / lead research desk — 82 — Worth a quick spike

- Why it is useful: Strong business leverage if kept as a review queue rather than spam automation.
- What to do next: Run a 10-company manual seed test and measure whether the drafts are worth editing.
- Source links: [Agentic AI Marketing Workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow), [ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent), [ai-sales-office](https://github.com/Richard-Grey-78/ai-sales-office), [10x-Team](https://github.com/OpenAnalystInc/10x-Team).

### 4. Codex + GitHub MCP handoff layer — 80 — Worth a quick spike

- Why it is useful: Gives Codex repo/issue/PR context instead of manual paste-work. Works well with Hermes as spec writer and reviewer.
- What to do next: Connect GitHub MCP to Codex with least-privilege credentials; test “list open issues / recent workflow runs” before write actions.
- Source links: [OpenAI Codex MCP docs](https://developers.openai.com/codex/mcp), [GitHub MCP Codex install guide](https://github.com/github/github-mcp-server/blob/main/docs/installation-guides/install-codex.md), [OpenAI Codex](https://github.com/openai/codex), [Daily 2026-06-22](daily-hermes-agent-workflows-2026-06-22.md).

### 5. Deterministic Market Scout / opportunity radar — 78 — Worth a quick spike

- Why it is useful: Fits Konrad’s recurring research overload problem: collect deterministically, score compact JSON, save only high-signal Markdown, notify only when thresholds are met.
- What to do next: Implement one watchlist with 5 sources and a strict “notify only above threshold” rule.
- Source links: [TrendRadar](https://github.com/upinggo/TrendRadar), [TrendWatch](https://github.com/trendsmcp/TrendWatch), [Hermes Cron docs](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron), [Daily 2026-06-19](daily-hermes-agent-workflows-2026-06-19.md), [Daily 2026-06-22](daily-hermes-agent-workflows-2026-06-22.md).

### 6. Read-only Telegram / Saved Messages summarizer — 76 — Worth a quick spike

- Why it is useful: Converts the real capture surface into structured notes, links, and tasks without granting dangerous write permissions.
- What to do next: Start with Saved Messages or one test chat; summarize links and action items into Markdown once daily.
- Source links: [telegram-plugin](https://github.com/speech115/telegram-plugin), [mcp-tg](https://github.com/lexfrei/mcp-tg), [telegram-mcp](https://github.com/Matancoo/telegram-mcp), [AgentChat Hermes plugin](https://github.com/agentchatme/agentchat-hermes), [Daily 2026-06-18](daily-hermes-agent-workflows-2026-06-18.md), [Daily 2026-06-20](daily-hermes-agent-workflows-2026-06-20.md), [Daily 2026-06-22](daily-hermes-agent-workflows-2026-06-22.md).

### 7. WordPress/SEO maintenance audit skill — 74 — Worth a quick spike

- Why it is useful: Clear service-business potential: recurring audits, content checks, schema/meta/internal-link issues, and verify-after-write discipline.
- What to do next: Pick one site and run a read-only audit checklist before connecting any write credentials.
- Source links: [wp-stack-skill](https://github.com/tranminhmanh/wp-stack-skill), [mcp-wordpress](https://github.com/iamsamuelfraga/mcp-wordpress), [Local Falcon MCP](https://github.com/local-falcon/mcp), [Hermes workflow scout 2026-06-21](hermes-workflow-scout-2026-06-21.md), [Daily 2026-06-16](daily-hermes-agent-workflows-2026-06-16.md), [Daily 2026-06-17](daily-hermes-agent-workflows-2026-06-17.md).

### 8. Operator policy note for risky tools — 72 — Worth a quick spike

- Why it is useful: Essential safety infrastructure before adding Telegram account access, SaaS MCPs, social posting, email, or repo write access.
- What to do next: Write one `operator-policy.md` with read/draft/write/publish/spend scopes and explicit approval requirements.
- Source links: [OmniMCP](https://github.com/arcadeai-labs/omnimcp), [AgentChat Hermes plugin](https://github.com/agentchatme/agentchat-hermes), [Lilo](https://github.com/abi/lilo), [Daily 2026-06-18](daily-hermes-agent-workflows-2026-06-18.md), [Daily 2026-06-20](daily-hermes-agent-workflows-2026-06-20.md).

### 9. Media/link transcription into content/product ideas — 67 — Watch / maybe later

- Why it is useful: Useful for Analog Hive and learning loops, but less urgent than the core operator and tracker layers.
- What to do next: Test with one podcast/video link: transcribe, extract claims, save sources, draft one content angle and one product idea.
- Source links: [ppikkuaho MCP servers](https://github.com/ppikkuaho/mcp-servers), [Research Hub](https://github.com/WenyuChiou/research-hub), [Daily 2026-06-18](daily-hermes-agent-workflows-2026-06-18.md), [Daily 2026-06-16](daily-hermes-agent-workflows-2026-06-16.md).

### 10. Hermes Atlas / capability registry for tool discovery — 64 — Watch / maybe later

- Why it is useful: Tool sprawl is real; a registry helps route workflows and avoid rediscovering integrations. But it should follow working workflows, not precede them.
- What to do next: Maintain a small Markdown “approved capabilities” index; do not build a full registry yet.
- Source links: [Hermes Atlas repo](https://github.com/ksimback/hermes-ecosystem), [Hermes Atlas](https://hermesatlas.com), [AI Capability Registry](https://github.com/Friz-zy/ai-capability-registry), [Daily 2026-06-18](daily-hermes-agent-workflows-2026-06-18.md), [Daily 2026-06-21](daily-hermes-agent-workflows-2026-06-21.md).

## Skips and watchlist

- Heavy multi-agent platforms such as Phleet, Circus Chief, and broad command centers are useful pattern libraries, but too heavy to adopt before the basic Telegram → Hermes → Codex loop is stable.
- Broad AI workflow template libraries are mostly taxonomy, not proof. Keep them as a backlog, not a build priority.
- Telegram account-level MCP servers are powerful but high-risk. Use read-only and narrow scopes first; bot-based workflows are safer.
- Codex usage economics and rate-limit reports are uncertain. Keep Codex as bounded implementer/reviewer, not always-on researcher.
- Public social posting and email outreach tools should remain draft-only until approval, opt-out, and verification processes are reliable.
- Cloud Hermes references with ephemeral storage are fine for demos, but not for durable memory unless persistence is solved.

## Method notes

- Reviewed report files from the last 7 days in `/Users/koni/Desktop/hermes/usecases/` and cross-checked that dashboard copies exist under `/Users/koni/Desktop/dev/hermes-dash/content/reports/hermes-workflows/`.
- Files reviewed: `daily-hermes-agent-workflows-2026-06-16.md`, `daily-hermes-agent-workflows-2026-06-17.md`, `daily-hermes-agent-workflows-2026-06-18.md`, `daily-hermes-agent-workflows-2026-06-19.md`, `daily-hermes-agent-workflows-2026-06-20.md`, `daily-hermes-agent-workflows-2026-06-21.md`, `daily-hermes-agent-workflows-2026-06-22.md`, `hermes-workflow-scout-2026-06-16.md`, `hermes-workflow-scout-2026-06-17.md`, `hermes-workflow-scout-2026-06-18.md`, `hermes-workflow-scout-2026-06-19.md`, `hermes-workflow-scout-2026-06-20.md`, `hermes-workflow-scout-2026-06-21.md`.
- Deduplication merged repeated themes: Hermes personal operator, Telegram cockpit, Codex handoff, repo-local memory/tracker, trend/opportunity radar, Telegram MCP access, and growth/lead workflows.
- Evidence quality varies. Official Hermes/OpenAI/GitHub docs are stronger sources. Many GitHub repos are early-stage and should be treated as workflow references until tested.
- Search access in one underlying scout was degraded by bot detection / 403s; this weekly ranking therefore favors items with preserved source links in the saved reports rather than unsourced claims.
