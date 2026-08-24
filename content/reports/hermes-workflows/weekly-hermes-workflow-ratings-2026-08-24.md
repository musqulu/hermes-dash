# One workflow worth trying this week

Try [Clockwork](https://github.com/vimoxshah/clockwork) this week because it is the clearest practical pattern for evolving Hermes cron from “scheduled prompts” into sandboxed, reviewable recurring agent runs with worktrees, calendars, and reports.

- It fits Konrad/Hermes strongly: Hermes already has cron, profiles, worktree mode, dashboard publishing, and Telegram delivery, so Clockwork is best used as a design reference rather than a replacement platform.
- Score: 88/100 — Try now; high fit, high leverage, quick to inspect, and lower distraction risk than broad “all-agent OS” projects.
- Best 30-60 minute test: inspect Clockwork’s job/run model, sandbox/worktree lifecycle, and report format, then write a Hermes-native spec for “cron run receipts” that links schedule → worktree/session → changed files → verification output.
- Success signal: one small Markdown schema or dashboard mock that makes a recurring Hermes run auditable without reading raw logs.
- Other strong but secondary leads: [Scout Delta Digester](/Users/koni/Desktop/hermes/usecases/implemented/2026-08-22-scout-delta-digester/) solves duplicate scout output locally, [Proof Capsule](/Users/koni/Desktop/hermes/usecases/implemented/2026-08-23-proof-capsule/) captures deliverable evidence, and [Agent Handoff Contract](/Users/koni/Desktop/hermes/usecases/implemented/2026-08-24-agent-handoff-contract/) makes spawned agents safer; these should be composed after the Clockwork review instead of treated as separate projects.
- Watch/skip: broad control planes like Tale, Bastet Agent OS, AgentHydra, Magec, Visionary, and Proliferate are interesting but likely duplicate Hermes’ existing gateway/cron/profile surfaces unless a single UX primitive is extracted.

Try next: spend one focused hour turning Clockwork into a Hermes cron-run receipt design note with fields for job id, schedule, profile, worktree path, source prompt, changed files, verification command, build result, and dashboard link.
