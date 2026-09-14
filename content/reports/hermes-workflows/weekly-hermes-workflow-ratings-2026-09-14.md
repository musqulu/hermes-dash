# One workflow worth trying this week

Try [Novgraph](https://github.com/Novaya-AI/novgraph) this week because a persistent codebase knowledge graph that agents update while working is the highest-leverage next spike for Hermes: it could reduce repeated repo re-reading, make scout-to-build context reusable, and turn daily workflow noise into searchable project memory.

- **Score:** 90/100 — Try now; fit 24/25, tryability 17/20, leverage 19/20, novelty 14/15, evidence 8/10, distraction risk -2.
- **Why it beats the week:** most other finds were Telegram/tmux control planes or generic multi-agent dashboards, while Novgraph targets the harder recurring problem: durable, stale-aware codebase context for Claude Code/Codex/OpenCode-style agents.
- **Evidence:** surfaced as the best item in [2026-09-13 workflow scout](./hermes-workflow-scout-2026-09-13.md) with direct repo evidence at [Novaya-AI/novgraph](https://github.com/Novaya-AI/novgraph).
- **Useful near misses:** [Claude Code Agent Spawner](https://github.com/ZsoltSziklai/claude-code-agent-spawner), [Lookspan](https://github.com/JoniMartin27/lookspan), and [Vouch](https://github.com/WaelAbouceo/vouch) are worth later spikes, but they duplicate Hermes control/observability/safety surfaces more than they unlock a new memory layer.
- **Caveat:** this is still repo-level evidence from the daily scout, not a hands-on install; treat the spike as validation, not adoption.

**Try next:** Spend 30–60 minutes running Novgraph on one small Hermes-adjacent repo, then call it successful only if it produces a useful map, flags stale context clearly, and gives an agent enough context to answer or edit without rereading the whole tree.
