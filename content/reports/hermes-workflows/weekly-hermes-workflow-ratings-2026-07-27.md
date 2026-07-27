# One workflow worth trying this week

Try [Lucarne](https://github.com/tuchg/Lucarne) as the reference pattern for a Hermes mobile approval/resume bridge, because it is the clearest practical answer to “stop babysitting local agents” without turning this week into another orchestration rabbit hole.

- It appeared twice in this week’s scouts as a top mobile-control lead, including the July 21 and July 25 workflow reports.
- The core workflow maps directly to Hermes: local Codex/Claude-style agent runs, Telegram/WeChat/Feishu notifications, approve/resume loops, and low-intrusion control from a phone.
- It is more immediately testable than larger fleet/orchestration systems like OtoDock, Orbital, Ductor, or Fleet because the spike can focus on one agent, one chat channel, and one approval event.
- The strategic value is high for Konrad’s Hermes usage: fewer unattended-run stalls, better cron/build handoffs, and a reusable pattern for future gateway approvals.
- Caveat: treat it as a reference implementation first, not something to install into production Hermes blindly; compare its security and log-exposure choices against Hermes gateway approvals before integrating.

Try next: spend 30–60 minutes sketching a Hermes “mobile approval bridge” spike that sends one local agent pause/approval request to Telegram, resumes from the reply, and records the action in a small Markdown receipt.
