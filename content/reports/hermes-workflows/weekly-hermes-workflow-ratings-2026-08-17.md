# One workflow worth trying this week

Try [SquadCue](https://github.com/hsienchuc/squadcue) this week because it is the strongest operator-side pattern in the last seven days for turning local CLI agents into named, resumable workers with a web/Telegram approval inbox instead of adding another broad orchestration stack.

- It fits Hermes better than most candidates because Hermes already has gateway, cron, profiles, approvals, and dashboards; SquadCue’s useful part is the worker supervision and approval-inbox UX, not a replacement platform.
- It was reported twice this week, first as the best lead on 2026-08-15 and again on 2026-08-16, while older active leads like Nightmux and tmux dashboards remain useful but less differentiated.
- The highest-value 30-60 minute test is to inspect the repo’s session model, worker naming, resume flow, and approval queue, then sketch the smallest Hermes-native equivalent for risky command approvals and long-running background agents.
- Success signal: one Hermes runbook or prototype screen that answers “which worker needs me, why, what command/action is pending, and can I approve or resume it from Telegram?”
- Main caveat: do not clone the full system into Hermes; extract only the approval-inbox and worker-supervision conventions, otherwise this becomes duplicate gateway/product surface work.

Try next: spend one focused hour turning SquadCue into a Hermes approval-inbox design note with the minimum data model: worker name, session/profile, pending action, risk reason, last output, approve/deny/resume links.
