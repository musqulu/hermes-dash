# Mac mini agent farm scout setup — 2026-07-24

Daily watch for super-cheap Apple Silicon Mac minis that could become low-cost agent-farm nodes: mostly API-LLM workers, with light local-LLM experimentation when RAM allows.

## Buy box

- **Primary target:** M1 or newer Mac mini, preferably 16GB+ unified memory, at unusually low PLN price.
- **Good enough node:** 8GB M1/M2 only when extremely cheap and useful for browser automation, coding agents, queues, dashboards, or always-on services using API LLMs.
- **Better local-LLM node:** 16GB+ M1/M2/M4; prioritize RAM over SSD because unified memory gates local models more than storage.
- **Exceptional lead:** 24GB/32GB+ Mac mini, Mac mini Pro, or multiple cheap minis as a bundle.

## Sources and search scope

Poland first: OLX, Allegro, Allegro Lokalnie, Ceneo/resellers, local refurb sellers. EU only when the landed price looks clearly better after shipping/import risk: eBay EU, Kleinanzeigen, Back Market/refurb pages, other public listings.

## Verdict vocabulary

- **BUY:** below current market band, clear spec, seller looks normal, and contact/buy path is direct.
- **ASK FIRST:** interesting price but RAM/spec, MDM/iCloud, invoice, battery-equivalent condition, or seller proof is unclear.
- **WATCH:** useful comparator or slightly too expensive today.
- **SKIP:** Intel, MDM/iCloud locked, “for parts,” unclear boot status, obvious storage/RAM confusion, or poor value.

## Price graph baseline

The dashboard renders fenced `price-history-json` blocks as a price chart. The daily cron will update the observations and include min/median/max buckets from real listings.

```price-history-json
[
  {"bucket":"m1-8gb","label":"M1 8GB","min":1500,"median":1800,"max":2200,"count":0},
  {"bucket":"m1-16gb","label":"M1 16GB","min":2300,"median":2800,"max":3400,"count":0},
  {"bucket":"m2-8gb","label":"M2 8GB","min":2200,"median":2600,"max":3200,"count":0},
  {"bucket":"m2-16gb","label":"M2 16GB","min":3200,"median":3800,"max":4600,"count":0},
  {"bucket":"m4-16gb","label":"M4 16GB","min":2600,"median":3200,"max":4200,"count":0}
]
```

## Cron deliverable

Each daily run should:

1. Search current listings and collect only source-backed candidates.
2. Update `/Users/koni/Desktop/hermes/mac-mini-agent-farm/listings-history.json` and `latest.json` outside this public repo.
3. Write a Markdown report into this folder with ranked leads, seller questions, and a current price chart.
4. Send Telegram only when concise and actionable: top BUY/ASK FIRST/WATCH leads, one link each, no bookkeeping paths unless something breaks.
