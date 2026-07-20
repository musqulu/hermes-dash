# One workflow worth trying this week

Try [Trustcard](https://github.com/davidnichols-ops/trustcard) as a 30-minute preflight check for any MCP server before adding it to Hermes, because it directly reduces tool-supply-chain risk without turning into another agent dashboard project.

- Best fit: Hermes workflows increasingly depend on MCP servers, and this adds a quick buyer-side safety gate before connecting third-party tools.
- Tryability: the source report notes a concrete command pattern, `npx mcp-trustcard @modelcontextprotocol/server-github`, so the first spike can be one known MCP plus one niche scout-found MCP.
- Leverage: if useful, it can become a reusable cron/profile checklist step for evaluating MCP candidates before installation.
- Evidence: found in `daily-hermes-agent-workflows-2026-07-16.md`, which cites the repo README and an HN surfacing this week: [Trustcard](https://github.com/davidnichols-ops/trustcard).
- Caveat: evidence is still repo-level, not proven in Konrad's stack, so treat the result as a screening signal rather than a definitive security audit.

Try next: run Trustcard against two MCP servers already considered for Hermes, save the output, and only keep it if the report exposes at least one actionable permission, maintenance, or trust concern.
