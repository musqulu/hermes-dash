# One workflow worth trying this week

Try [Fleet](https://github.com/sand0vvv/fleet) this week because it is the clearest reusable pattern for Hermes topic-scoped mobile agent orchestration: one Telegram supergroup topic per Claude Code/Codex worker, local self-hosted execution, and a workflow shape Konrad can test without redesigning Hermes itself.

- It was the repeated strongest scout pick on 2026-08-01 and 2026-08-02, which is a better signal than another one-off agent framework link.
- Fit for Hermes is high: Telegram topics, local workers, and visible per-agent conversations map directly to Hermes gateway/profile/cron usage.
- Tryability is high: a 30-60 minute spike can inspect Fleet’s topic routing model, run or sketch a minimal equivalent, and compare it with Hermes Telegram topic sessions.
- Leverage is high if it yields a cleaner mobile control room for multiple coding agents than generic dashboards like [OtoDock](https://github.com/OtoDock/oto-dock) or [ADHDev](https://github.com/vilmire/adhdev).
- Main caveat: do not adopt the whole stack blindly; extract the topic-to-worker interaction pattern and ignore extra orchestration until Hermes has a proven need.

Try next: prototype a tiny Hermes “topic = worker/session” runbook with one Telegram topic, one sandboxed worker, one approval path, and one visible done/fail receipt.
