# DGX Spark / Strix Halo Poland deal scout — 2026-07-28 11:04 CEST

## Scope
Poland-first scan for compact local-AI hardware: NVIDIA DGX Spark / Project DIGITS / GB10 and AMD Strix Halo / Ryzen AI Max systems. Prioritize used/open-box/refurb and unusually strong new-price references.

## Queries and sources checked
- OLX: `ryzen ai max`, `dgx spark`
- x-kom: `Ryzen AI Max`, `DGX Spark`
- Ceneo: `ryzen ai max` (blocked by Cloudflare/Captcha)
- Allegro: `Ryzen AI Max`, `DGX Spark`, `Strix Halo` (blocked by DataDome/Captcha in browser; search snippets were low quality)
- Pepper: `Ryzen AI Max` (blocked by Cloudflare)
- Bing/Google search snippets: variants around `Ryzen AI Max Allegro OLX Ceneo x-kom`, `GMKtec EVO-X2`, `ProArt PX13 128GB`, `DGX Spark Polska`
- eBay EU attempted via ebay.pl/de search, returned error page in browser

## Serious candidates

### 1. OLX — ASUS ROG Flow Z13 2025 GZ302EA-RU004W, Ryzen AI MAX+ 395, 32GB RAM, 1TB SSD
- URL: https://www.olx.pl/d/oferta/asus-rog-flow-z13-2025-gz302ea-ru004w-ryzen-ai-max-395-32-gb-ram-1-tb-ssd-dotyk-2w1-CID99-ID1bx01a.html
- Price: 7,250 PLN
- Location: Warszawa, Żoliborz
- Condition: listed as used; description says “new laptop”
- Seller: private; Aleksander M; 5.0/5 from 2 ratings; OLX since Jan 2025; recently online
- Proof/warranty: explicit red flag — “Brak dowodu zakupu, fv bądź paragonu”
- Config evidence: Ryzen AI MAX+ 395, Radeon 8060S, 32GB RAM, 1TB NVMe SSD
- Usefulness: true Strix Halo/8060S but only 32GB unified/system RAM; good cheap experimentation lead, not ideal for larger local LLMs vs 64/128GB systems
- Verdict: BUY/CALL-FIRST only with in-person test, serial/warranty check, and proof it is not locked/stolen/financed

### 2. OLX — ASUS ROG Flow Z13 2025, Ryzen AI MAX+ 395, 32GB RAM, 1TB SSD, Win11Pro
- URL: https://www.olx.pl/d/oferta/asus-rog-flow-z13-2025-ryzen-ai-max-395-32gb-1tb-w11pro-CID99-ID1bAgx0.html
- Price: 8,999 PLN
- Location: Poznań, Stare Miasto
- Condition: used
- Seller: private; Michał; no rating shown; OLX since July 2015; recently online July 25
- Proof/warranty: description not exposed in snapshot; unknown
- Config evidence: title and OLX fields show Ryzen AI MAX+ 395, 32GB RAM, 1TB disk
- Usefulness: true Strix Halo class; less attractive than the 7,250 PLN unit unless it has invoice/warranty and better proof
- Verdict: WATCH/CALL-FIRST

## New-price / benchmark references

### x-kom — ASUS ProArt PX13 Ryzen AI MAX+ 395, 128GB RAM, 1TB, OLED Touch
- URL: https://www.x-kom.pl/p/1481020-laptop-13-i-mniejsze-asus-proart-px13-ryzen-ai-max-395-128gb-1tb-win11p-oled-touch.html
- Price: 13,999 PLN
- New, available in x-kom snapshot
- Important: 128GB RAM explicitly confirmed by x-kom; this is the strongest local-LLM memory-size benchmark found today.

### x-kom — ASUS ROG Flow Z13 Ryzen AI MAX+ 395, 64GB RAM, 1TB, Radeon 8060S
- URL: https://www.x-kom.pl/p/1340431-laptop-13-i-mniejsze-asus-rog-flow-z13-ryzen-ai-max-395-64gb-1tb-180hz.html
- Price: 15,599 PLN
- New; 64GB RAM and 8060S confirmed; expensive vs used 32GB OLX units but stronger RAM.

### x-kom — GMKtec EVO-X2 Ryzen AI MAX Pro+ 395, 128GB RAM, 2TB, Win11P
- URL: https://www.x-kom.pl/p/1505716-nettop-mini-pc-gmktec-evo-x2-ryzen-ai-max-pro-395-128gb-2tb-win11p.html
- Price: 16,499 PLN
- New; 128GB RAM explicitly confirmed; mini-PC form factor, likely better stationary thermals than tablet/laptop but still new-price not a deal.

### x-kom — HP ZBook Ultra G1A 14 Ryzen AI MAX Pro 390, 32GB RAM, 1TB, Radeon 8050S
- URL: https://www.x-kom.pl/p/1357803-laptop-14-hp-zbook-ultra-g1a-14-ryzen-ai-max-pro-390-32gb-1tb-win11p.html
- Price: 11,999 PLN
- New; 32GB and weaker 8050S; benchmark only, not compelling for local LLM relative to 128GB ProArt.

## Rejected / false positives
- OLX `dgx spark`: 72 results, but visible results were RTX/ROG Strix laptops, bikes, Chevrolet Spark, etc.; no actual DGX Spark / Project DIGITS / GB10 lead.
- OLX `ryzen ai max`: many ordinary Ryzen/RTX/gaming SEO matches; only the two ROG Flow Z13 listings clearly matched Ryzen AI MAX+ 395.
- x-kom `DGX Spark`: no results.
- Allegro/Ceneo/Pepper: blocked by anti-bot pages in this run; no source-backed candidate included from those sites.

## Buyer-side assessment
- No confirmed DGX Spark availability in Polish sources checked today.
- Best actionable lead is the 7,250 PLN OLX ROG Flow Z13 because it is far below new Strix Halo pricing, but it has the serious missing proof/invoice risk and only 32GB RAM.
- Best memory benchmark is x-kom ProArt PX13 128GB at 13,999 PLN; surprisingly lower than many 64GB/128GB Strix Halo listings and useful as a ceiling for used offers.
