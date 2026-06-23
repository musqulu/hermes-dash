# Mac Studio scout setup — 2026-06-22

A new recurring scout has been set up to track high-RAM Mac Studio Ultra listings in Poland for local LLM rigs, with deal notes and config-level price tracking.

## Watch target

- Primary target: **Mac Studio Ultra** configurations suitable for local LLM use.
- Priority configs: **128 GB RAM or higher**.
- Secondary configs: 96 GB RAM only if unusually cheap; 64 GB RAM should be included only as a market baseline, not as a recommended buy.
- Preferred chips: M1 Ultra, M2 Ultra, and future Ultra variants if listed.
- Key marketplaces: OLX Poland, Allegro / Allegro Lokalnie, and Facebook Marketplace where accessible.

## Report format expected from each run

- Best current deals ranked by value and confidence.
- Listing source, title, asking price in PLN, approximate city/region, URL, seller notes, and whether it looks negotiable.
- Config extraction: chip, RAM, storage, condition, warranty/invoice, accessories.
- Deal rating: buy / watch / ignore, with reasoning.
- Pricing graph by config: a compact markdown table plus an ASCII or sparkline-style trend where enough historical data exists.
- Historical observations saved so future runs can identify price drops, repeats, stale listings, and configuration-specific price bands.

## Dashboard note

This page is just the seed report so the dashboard has a dedicated **Mac Studio scout** tab immediately. The cron job will write dated reports into this same folder.
