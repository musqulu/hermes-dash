# Daily Hermes Agent Workflows — 2026-06-18

Coffee brief for Konrad: fresh practical agent/operator workflows worth stealing for Hermes + Codex + Telegram.

## Top findings

### 1. Hermes Agent is explicitly an always-on operator now
Source: https://github.com/NousResearch/hermes-agent and https://hermes-agent.nousresearch.com/docs/

**Why it matters:** The current Hermes README frames the project around the exact primitives you want: Telegram/Discord/Slack/WhatsApp/Signal gateways, voice memo transcription, built-in cron, memories, skills, subagents, RPC tool calls, and terminal backends including local, Docker, SSH, Modal, Daytona, and Singularity. This is not just “chat with a model”; it is a persistent execution layer.

**Practical use for Konrad’s setup:** Make Hermes the control plane for recurring Analog Hive / utllo / content jobs. The useful shape is: cron wakes Hermes → Hermes researches/builds/checks → Codex handles repo work → Telegram receives a short artifact + links. Start with low-risk jobs where “draft/report” is enough.

Useful workflow prompt:

```text
Every weekday at 08:00, scan saved links, HN, Reddit, GitHub, and competitor pages for utllo/Analog Hive opportunities. Return: 3 signals, 1 build idea, 1 content idea, 1 marketing action. Save the Markdown report and send Telegram summary.
```

### 2. Hermes Atlas: a community map of Hermes tools and integrations
Source: https://github.com/ksimback/hermes-ecosystem and https://hermesatlas.com

**Why it matters:** Hermes Atlas is a fresh community directory claiming 80+ quality-filtered Hermes-related repos across 12 categories, with live star counts, search/filter, trending badges, and a RAG chatbot grounded in research files. For a fast-moving ecosystem, a curated map is more useful than random GitHub search.

**Practical use for Konrad’s setup:** Use it as the weekly discovery source for new Hermes skills/plugins before wiring anything yourself. A good operator workflow: Hermes checks Atlas weekly, filters for Telegram, MCP, coding, marketing, browser, publishing, and monitoring integrations, then proposes only items that can improve your current stack.

First command/prompt to run inside Hermes:

```text
Research Hermes Atlas for integrations useful to a Telegram-controlled personal operator. Prioritize MCP, Codex, publishing, browser automation, monitoring, and marketing. Return only projects with install instructions and a clear use case for Analog Hive or utllo.
```

### 3. Safe Telegram access for coding agents via a local MCP/Codex plugin
Source: https://github.com/speech115/telegram-plugin

**Why it matters:** This repo is directly aligned with your Hermes + Codex + Telegram direction. It packages a Telethon-backed MCP server, a Codex plugin bundle, and an optional audit/repair control plane. The key design choice: default mode is read/search/draft, not unrestricted send. That is the right safety posture for letting a code agent inspect Telegram context.

**Practical use for Konrad’s setup:** Use the pattern even if you do not install this exact plugin: keep Telegram “write” actions explicit, keep read/search narrow, and use drafts for anything public/client-facing. For Hermes, this would let Codex inspect relevant Telegram threads or saved-message notes while building, without giving it uncontrolled account access.

Good operating rule:

```text
Telegram tools may read/search context and draft replies. They may not send messages, delete chats, archive chats, or download media unless the user explicitly approves the exact action.
```

### 4. AgentChat plugin gives Hermes a persistent agent handle
Source: https://github.com/agentchatme/agentchat-hermes

**Why it matters:** AgentChat’s Hermes plugin gives an agent a persistent `@handle`, real-time inbound WebSocket events, 38 API tools, contacts/groups/presence, and an etiquette skill. The best part is conceptual: silence is a first-class outcome. The agent can receive a message, inspect context, and choose not to reply.

**Practical use for Konrad’s setup:** This is a strong reference for Telegram/assistant etiquette. Your personal operator should not auto-respond to everything. It should triage: ignore noise, draft when uncertain, act only in approved scopes, and schedule follow-ups when a task is not urgent.

Install paths shown by the project:

```bash
pip install agentchatme-hermes
# or
hermes plugins install --enable agentchatme/agentchat-hermes
```

Steal this policy for Telegram:

```text
When a new message arrives: classify as ignore / remember / draft / ask approval / act. If acting could affect money, public posts, client comms, repo history, or private data, draft only.
```

### 5. OpenAI Codex is shipping fast; treat it as the repo worker, not the brain
Source: https://github.com/openai/codex and https://github.com/openai/codex/releases/tag/rust-v0.141.0-alpha.6

**Why it matters:** The Codex repo was updated yesterday and the latest alpha release was published on 2026-06-17. The project describes itself as a lightweight coding agent that runs in your terminal. Release notes are thin, but the velocity is high.

**Practical use for Konrad’s setup:** Let Hermes own goals, memory, scheduling, Telegram delivery, and cross-project context. Let Codex operate inside one repo at a time: inspect, edit, test, build, commit. This avoids giant “do everything” prompts and keeps coding work auditable.

Practical handoff prompt:

```text
Hermes: summarize the product goal, repo path, constraints, and acceptance checks. Then ask Codex to implement exactly one small change. After Codex finishes, run tests/build, inspect git diff, and send me a Telegram summary with changed files and next recommendation.
```

### 6. MCP server bundle: Outlook, media transcription, Telegram, Codex wrapper
Source: https://github.com/ppikkuaho/mcp-servers

**Why it matters:** This repo is small but very practical: independent MCP servers for Microsoft Graph/Outlook, media transcription, Telegram messaging, and a Codex JSON-RPC wrapper. It specifically calls out hard production details: delegated OAuth with no stored client secret, SSRF guards for media downloads, a Telegram single-poll broker to avoid `getUpdates` conflicts, and a Codex wrapper that fails correctly when auth breaks.

**Practical use for Konrad’s setup:** This is a blueprint for useful “operator reach”: email search, voice/video transcription, Telegram notifications, and Codex bridge. For content creation, the media MCP is especially useful: drop a YouTube/podcast URL → transcribe → extract product/design insights → add to a knowledge base or content queue.

Workflow to copy:

```text
When I send Hermes a video/podcast link in Telegram: transcribe it, extract 10 useful claims, save source notes, then draft one Analog Hive post angle and one utllo-related product idea.
```

### 7. Personal second-brain bots are converging on the same architecture
Sources: https://github.com/Will-Barnard-WB/Personal-Knowledge-Bot, https://github.com/dbbaskette/herald, and https://github.com/azfarh95/sentinel-stack-public

**Why it matters:** Three fresh personal-assistant projects point to the same pattern: phone chat as capture surface, async queue/worker backend, embeddings/vector search, scheduled briefs, memory files, and tool-gated actions. Sentinel adds a useful two-bot model: one assistant bot for user requests, one watchdog/admin bot for ops.

**Practical use for Konrad’s setup:** Build your Hermes second brain around capture first, automation second. Voice notes, links, screenshots, and half-formed product ideas should land in a structured inbox. Hermes can process later into Markdown notes, project tasks, content ideas, or Codex tickets.

Minimal version:

```text
Telegram → Hermes inbox note → classify as idea/research/task/content/contact → save Markdown in ~/konrad-brain/inbox → daily cron distills into Analog Hive, utllo, content, and personal planning queues.
```

## Best idea of the day

**Build a “Telegram-to-shipping loop” instead of a generic assistant.** The strongest pattern across today’s sources is narrow control surfaces with explicit handoffs: Telegram captures intent, Hermes plans and remembers, Codex changes code, MCP tools fetch context, and cron delivers summaries. This is immediately useful for utllo and Analog Hive because it turns random phone thoughts into tested repo/content artifacts.

**First step:** Create one Hermes cron/job prompt called `daily-shipping-loop`: pull from `~/konrad-brain/inbox`, choose one tiny utllo or Analog Hive action, ask Codex to implement/draft it, run verification, and send a Telegram summary. Keep it draft-only unless you explicitly approve publish/push.

## Things to try next

1. **Create a Hermes “operator policy” note** with scopes: what it may read, draft, edit, commit, publish, spend, or message. Use read/search/draft defaults for Telegram.
2. **Add an inbox pipeline in `~/konrad-brain`**: `inbox/`, `projects/analog-hive/`, `projects/utllo/`, `content/`, `daily-reports/`. Let Hermes classify new Telegram captures nightly.
3. **Run a Codex handoff test** on one tiny repo task: Hermes writes a precise acceptance checklist, Codex edits, Hermes runs build/tests, then reports the diff and result.

## Notes on uncertainty

GitHub freshness is reliable for updated repos, but some projects may be hackathon prototypes or early-stage demos. Codex alpha release notes are minimal, so treat the update as a velocity signal, not a feature recommendation. Hermes Atlas and several Hermes ecosystem repos are community-maintained; verify security and permissions before installing anything with messaging, repo, browser, or publishing access.
