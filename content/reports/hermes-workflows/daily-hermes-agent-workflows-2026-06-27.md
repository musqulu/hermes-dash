# Daily Hermes Agent Workflows — 2026-06-27

Coffee brief for Konrad: practical agent workflows worth stealing for Hermes + Codex + Telegram.

## Top findings

### 1. Hermes docs now make the “Telegram personal operator” path very concrete
Source: https://hermes-agent.nousresearch.com/docs/guides/team-telegram-assistant and https://hermes-agent.nousresearch.com/docs/guides/automate-with-cron

**Why it matters:** Hermes’ own docs now read less like a generic agent manual and more like an operator playbook: Telegram assistant, daily briefing bot, cron automations, MCP, skills, PR review agent, and delegation/parallel work are all first-class guide paths.

**Practical use for Konrad:** Treat Hermes as the control plane for Analog Hive / utllo ops: Telegram for commands, cron for scheduled research, skills for repeatable product/marketing actions, and Codex for code tasks. A strong pattern is: Telegram request → Hermes triages → Codex or MCP tool does focused work → Hermes sends short result back.

Useful starter prompt for a Telegram-triggered operator:

```text
You are my product operator. For every request: clarify the goal in one sentence, choose the smallest safe action, execute with tools, verify output, then reply with result + next action. Do not ask follow-up unless blocked.
```

### 2. Hermes + Codex skill docs call out the real gateway sandbox caveat
Source: https://hermes-agent.nousresearch.com/docs/user-guide/skills/bundled/autonomous-ai-agents/autonomous-ai-agents-codex

**Why it matters:** The Hermes Codex skill includes a practical warning: Codex `workspace-write` sandboxing may fail from a gateway/service context such as Telegram-driven sessions because of user namespace / bubblewrap limitations. The docs recommend using `danger-full-access` only when necessary, and replacing sandbox trust with process boundaries.

**Practical use for Konrad:** If Telegram → Hermes → Codex fails locally even though Codex works in an interactive shell, don’t waste hours debugging the wrong layer. Use a locked-down workflow: clean git status, explicit `cwd`, narrow task, diff review, targeted tests, and commit only after verification.

Useful pattern:

```bash
git status --short
codex exec --sandbox danger-full-access "In this repo only: fix X, run tests, report diff summary. Do not commit."
git diff --stat
npm test || npm run build
```

### 3. `telegram-plugin`: local-first Telegram MCP for coding agents
Source: https://github.com/speech115/telegram-plugin

**Why it matters:** This repo is exactly in Konrad’s lane: a Telethon-backed MCP server plus Codex plugin bundle for safe, owner-local Telegram access. It emphasizes read/search/draft defaults, local credentials, explicit MCP contract, smoke tests, and a control-plane doctor.

**Practical use for Konrad:** Use it as a reference architecture even if not adopted directly. The key idea is not “let the agent freely message people”; it is: read/search/draft by default, require explicit send boundaries, audit the local daemon, and keep Telegram session secrets on the machine.

Setup snippet from the README:

```bash
cd mcp
uv venv
uv pip install -e .
export TELEGRAM_MCP_AUTH_TOKEN="replace-with-secret"
.venv/bin/telegram-mcp
```

Then verify:

```bash
./bin/contract-smoke --profile all --check-cache-stats --json
```

### 4. `telegram-commandcode`: Telegram control surface for a coding CLI
Source: https://github.com/qrak/telegram-commandcode

**Why it matters:** This is a practical Telegram → coding-agent gateway with streaming progress, persistent sessions, Markdown-safe formatting, chunking, file fallback, and slash commands. It is built for Command Code, but the architecture maps cleanly to Hermes/Codex.

**Practical use for Konrad:** Copy the interaction model: one Telegram status message that updates through stages instead of flooding the chat, per-chat locks to prevent overlapping tasks, persistent JSON sessions, and a read-only / YOLO switch.

Setup example:

```bash
git clone https://github.com/qrak/telegram-commandcode.git
cd telegram-commandcode
pip install -e "."
export TELEGRAM_BOT_TOKEN="***"
export TELEGRAM_ALLOWED_USERS="your-user-id"
telegram-commandcode
```

For Hermes, the stealable design is: `/status`, `/run`, `/reply`, `/cancel`, `/logs`, `/mode readonly|write`, plus voice-note transcription later.

### 5. Codex-as-MCP is becoming a useful agent delegation primitive
Source: https://github.com/talon-agent/talon.plugins.codex

**Why it matters:** This plugin runs `codex mcp-server`, exposing Codex itself as an MCP tool with two actions: start a Codex session and continue it via `threadId`. Defaults are optimized for non-interactive agent-to-agent delegation: `approval_policy="never"` and `sandbox_mode="workspace-write"`.

**Practical use for Konrad:** Hermes can become the product manager / orchestrator while Codex becomes the coding worker. Instead of asking Hermes to directly edit a codebase every time, Hermes can delegate isolated tickets to Codex and then review diffs/build output.

Important config concept:

```bash
codex mcp-server -c approval_policy="never" -c sandbox_mode="workspace-write"
```

Operational rule: always pass `cwd`, always ask for tests/build, and always request a final diff summary.

### 6. OpenKnowledge looks like a strong second-brain substrate for agents
Source: https://github.com/inkeep/open-knowledge

**Why it matters:** OpenKnowledge is a local-first WYSIWYG Markdown editor with Claude, Codex, Cursor, MCP/CLI, skills, agentic search, and git/GitHub sync. This is closer to “agent-readable operating memory” than a normal notes app.

**Practical use for Konrad:** Keep `~/konrad-brain` as plain Markdown, but consider an OpenKnowledge-style workflow: specs, daily briefs, launch notes, marketing angles, research, and product decisions all live in git-backed Markdown. Hermes can read/write reports; Codex can edit specs; dashboards can publish selected files.

First useful structure:

```text
konrad-brain/
  products/analog-hive.md
  products/utllo.md
  workflows/telegram-operator.md
  briefs/daily/
  swipe/marketing-hooks.md
```

### 7. Marketing automation repos are getting more concrete: skills, evals, pipelines
Source: https://github.com/saurabhshuklagrowisto/saurabh-ai-systems and https://github.com/jagas32/auto-marketing-pipeline

**Why it matters:** These are not just “AI marketing” decks. They show concrete patterns: CRM enrichment agents, WhatsApp opportunity scanners, ABM scoring, reply triage, Claude skills with eval harnesses, and content pipelines that turn raw topics into LinkedIn posts, emails, and X threads.

**Practical use for Konrad:** Build a tiny Analog Hive growth operator: monitor niche topics, extract pain points, draft content, score leads, and create a weekly “ship/grow” report. Start in dry-run mode: no sending, no posting, no CRM writes until the report quality is reliable.

Minimal pipeline:

```bash
python3 scripts/run_pipeline.py --input inputs/topic.md --simulate
```

## Best idea of the day

Build a **Telegram “product operator” for one repo and one product only** before trying to automate everything.

Why: broad personal assistants become vague fast. A constrained operator for utllo.com or Analog Hive can be useful immediately: read product context, run daily research, open GitHub issues, delegate small fixes to Codex, draft launch posts, and send a concise Telegram summary.

First step: create one Hermes skill called `utllo-operator` with the product context, allowed repos, allowed commands, and response format. Then add one cron job: “every morning, find 3 growth/product opportunities and propose one shippable action.”

## Things to try next

1. **Add a Codex delegation checklist to Hermes memory/skill docs:** clean git status, explicit repo path, narrow task, build/test command, diff summary, no commit unless asked.
2. **Prototype Telegram commands:** `/brief`, `/ship`, `/research topic`, `/codex repo task`, `/draft post`, `/status`.
3. **Create a Markdown second-brain map:** one file each for Analog Hive, utllo, active experiments, marketing hooks, and reusable agent prompts.

## Notes on uncertainty

- Several GitHub repos are new or community-maintained; treat them as reference implementations, not trusted infrastructure.
- The Medium MCP security article appeared in HN search, but the source returned HTTP 403 during verification, so I did not rely on it.
- Twitter/X links are thin for verification unless mirrored elsewhere; Hermes docs and GitHub READMEs were the strongest checked sources today.
