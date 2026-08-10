# One workflow worth trying this week

Try [agent-workspace-kit](https://github.com/outlier1804/agent-workspace-kit) this week because it is the clearest end-to-end, self-running agent workspace pattern from the last seven days: Telegram control, Obsidian-vault memory, scheduled headless workers, subagents, and a local dashboard in one extractable package.

- Best fit for Konrad/Hermes: it maps directly to Hermes gateway control, cron jobs, skills/memory, dashboard publishing, and independent agent-worker experiments.
- Best 30-60 minute spike: clone/read the repo, identify its Telegram command loop, scheduled worker entrypoint, memory layout, and dashboard contract, then write a one-page Hermes-equivalent runbook rather than adopting the whole stack.
- Evidence quality is stronger than most one-off links because the source report describes a complete workspace architecture, not just a named MCP server or dashboard: [2026-08-09 scout](https://github.com/outlier1804/agent-workspace-kit).
- It beats adjacent orchestration picks like [Bernstein](https://github.com/sipyourdrink-ltd/bernstein), [claude-telegram-hub](https://github.com/menus12/claude-telegram-hub), and [foreman-agent](https://github.com/coderdailyone/foreman-agent) because those are useful components, while agent-workspace-kit is closer to a whole operating workflow Konrad can selectively mine.
- Main caveat: avoid rebuilding a parallel Hermes; extract only the control-surface, scheduled-worker, memory, and dashboard conventions that improve the existing Hermes setup.

Try next: spend one hour turning agent-workspace-kit into a Hermes implementation checklist with four decisions: Telegram control pattern, scheduled worker shape, memory/source-of-truth format, and dashboard update contract.
