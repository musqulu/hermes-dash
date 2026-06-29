# One workflow worth trying this week

Try [Hermes Agent Automations](https://github.com/geraledesma/hermes-agent-automations) as the source for a minimal “growth/tech desk” Hermes workflow this week, because it combines profiles, cron, deterministic scripts, and Telegram delivery into a pattern Konrad can copy without adding another orchestration stack.

- Fit: Direct Hermes-native profile/cron/gateway architecture, repeated as a top source in the 2026-06-25 and 2026-06-26 scouting reports.
- Tryability: A 30–60 minute spike can be just one extra profile plus one `no_agent` repo/product collector feeding a weekly summary; do not deploy the full CEO/CTO VPS setup yet.
- Leverage: Its “deterministic collector → compact JSON → LLM review” pattern can reduce noisy daily scouting and turn GitHub/product/report changes into decisions.
- Evidence: The week’s reports linked the repo plus concrete docs for [cron schedules](https://github.com/geraledesma/hermes-agent-automations/blob/main/docs/cron-schedule.md), [scripts](https://github.com/geraledesma/hermes-agent-automations/blob/main/docs/scripts.md), and [architecture](https://github.com/geraledesma/hermes-agent-automations/blob/main/docs/architecture.md).
- Caveat: Treat the two-bot CEO/CTO setup as inspiration, not the first implementation; profile-scoped gateways and Telegram credentials can create avoidable operational friction.

Try next: Build one “product pulse” cron for Hermes Dash or Analog Hive that collects repo/report status deterministically, then asks Hermes for three risks or actions worth taking this week.
