# One thing worth opening today

Open [LuKresXD/claw-skeleton](https://github.com/LuKresXD/claw-skeleton): it is a concrete Telegram-based persistent agent skeleton with per-topic isolated Claude Code sessions, layered memory, cron heartbeats, personas, and systemd patterns that can be re-created in Hermes with profiles or topic-scoped sessions, `hermes cron`, Telegram gateway, skills, and saved memory files.

- Evidence: the [README](https://github.com/LuKresXD/claw-skeleton/blob/master/README.md) describes a real architecture rather than a tool list: Telegram router, one isolated session per topic, nightly memory rollups, and proactive cron jobs.
- Useful implementation detail: [ARCHITECTURE.md](https://github.com/LuKresXD/claw-skeleton/blob/master/ARCHITECTURE.md) is the likely next file to inspect for lifecycle and memory-pipeline diagrams before porting the pattern into Hermes.
- Hermes mapping: use the official [Hermes cron docs](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron) plus Telegram gateway/profile separation to build a smaller version first: one “content ops” topic, one daily rollup job, and one proactive lead/content research job.

Why it matters: this is the clearest recent reusable blueprint for turning an agent from reactive chat into a persistent personal/business operating layer, especially for Konrad-style content, research, sales, and automation workflows.
