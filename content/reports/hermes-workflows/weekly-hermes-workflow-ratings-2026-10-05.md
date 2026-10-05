# One workflow worth trying this week

Try [Agent Deck](https://github.com/matacoder/agent-deck) this week because it packages the most useful recurring pattern from this week’s scouts — persistent coding-agent sessions, mobile-friendly control, subscription-limit awareness, GitHub/worktree startup and Telegram answers — into one practical reference for improving Hermes’ operator console rather than just adding another agent wrapper.

- **Score:** 88/100 — Try now; fit 25/25, tryability 17/20, leverage 19/20, novelty 13/15, evidence 8/10, distraction risk -4 for overlap with existing Hermes gateway/tmux/cron features.
- **Why it wins:** the week was crowded with agent dashboards and Telegram controllers, but Agent Deck combines the pieces Konrad actually uses: phone control, tmux persistence, usage-limit tracking, repo/worktree launch and Telegram responses.
- **Evidence:** surfaced as the best item in [2026-10-04 workflow scout](./hermes-workflow-scout-2026-10-04.md), with adjacent validation from [pocket-agents](https://github.com/Pepebits/pocket-agents), [swe-mux](https://github.com/jatoran/swe-mux), [herdr-telegram-agents](https://github.com/permgps/herdr-telegram-agents), [AgentX](https://github.com/anis-marrouchi/agentx), and [Pero](https://github.com/perokit/pero).
- **30–60 minute test:** clone Agent Deck in a disposable sandbox, run only the documented local startup path, and map which features can be copied into Hermes Dash as a small “active agents + limits + Telegram reply” panel.
- **Success signal:** within one session, Konrad can see one running agent, its repo/worktree, waiting/limit status and a direct reply/approval path without opening a terminal.
- **Skips for now:** broad orchestration frameworks such as [My Agent Team](https://github.com/Chengchcc/my-agent-team), [Agentrove](https://github.com/Mng-dev-ai/agentrove), [Agent Mesh](https://github.com/Vlad9572324/agent-mesh), [agent-hub](https://github.com/STAIxBWLB/agent-hub) and [Squads CLI](https://github.com/agents-squads/squads-cli) look interesting but are more likely to become architecture rabbit holes than a same-week Hermes improvement.

**Try next:** Build a tiny Hermes Dash spike that reads current/known agent sessions and displays status, repo/worktree, last output, waiting reason and one Telegram-safe action link inspired by Agent Deck, without adopting its whole stack.
