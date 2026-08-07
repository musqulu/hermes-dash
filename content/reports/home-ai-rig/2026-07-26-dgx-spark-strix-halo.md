# DGX Spark / Strix Halo deal scout — 2026-07-26 11:03 CEST

## Scope
Poland-first scouting for NVIDIA DGX Spark / Project DIGITS / GB10 and AMD Strix Halo / Ryzen AI Max systems. Focus: actionable local-LLM/home-AI BUY/WATCH leads; used/open-box/refurb preferred; new listings only as benchmarks or unusually notable availability.

## Queries used
- OLX: `ryzen ai max`, `ryzen ai max 395`, `ryzen ai max 390`, `radeon 8060s`, `strix halo`, `dgx spark`, `gmktec evo-x2`, `framework desktop`, `hp zbook ultra g1a`, `proart ryzen ai max`, `asus tuf ai max`
- Ceneo: `Ryzen AI Max`, `DGX Spark`, `GMKtec EVO-X2`, `HP ZBook Ultra G1a`, `Framework Desktop Ryzen AI Max`
- Pepper: `Ryzen AI Max`, `DGX Spark`, `GMKtec EVO-X2`, `HP ZBook Ultra G1a`, `Framework Desktop Ryzen AI Max`
- Allegro attempted via direct listing page but blocked by DataDome CAPTCHA in browser/403 via HTTP; no source-backed Allegro candidates included.

## Serious candidates / benchmarks

### OLX — ASUS ROG Flow Z13 2025 Ryzen AI MAX+ 395, 32GB RAM, 1TB SSD — 7,250 PLN
- URL: https://www.olx.pl/d/oferta/asus-rog-flow-z13-2025-gz302ea-ru004w-ryzen-ai-max-395-32-gb-ram-1-tb-ssd-dotyk-2w1-CID99-ID1bx01a.html
- Source/location: OLX, Warszawa Żoliborz.
- Condition/proof: listing says new laptop; exact model GZ302EA-RU004W; description lists Ryzen AI MAX+ 395, 32 GB RAM, 1 TB SSD, 13.4 IPS 2560 display.
- Evaluation: real Strix Halo, but only 32GB unified memory; useful for small/quantized local models and testing ROCm/iGPU workflow, not the 64/128GB sweet spot. Price is substantially below Ceneo new references for 64GB Z13 (11,199–16,249 PLN), but config differs.
- Verdict: CALL-FIRST / possible BUY if invoice/warranty/serial and no lock/financing issue.

### OLX — ASUS ROG Flow Z13 2025 Ryzen AI MAX+ 395, 32GB RAM, 1TB SSD — 8,999 PLN
- URL: https://www.olx.pl/d/oferta/asus-rog-flow-z13-2025-ryzen-ai-max-395-32gb-1tb-w11pro-CID99-ID1bAgx0.html
- Source/location: OLX, Poznań Stare Miasto.
- Condition/proof: first owner; bought 2025-03-23 at Komputronik; says very good condition, Windows 11 Pro AI.
- Evaluation: real Strix Halo; clear purchase history is useful, but 32GB RAM limits local-LLM value and 8,999 PLN is close to stronger new 64GB benchmarks.
- Verdict: WATCH / negotiate hard; ask for Komputronik invoice, warranty transfer, battery report, external monitor/ROCm test.

### Ceneo — ASUS TUF Gaming A14 Ryzen AI MAX+ / 64GB / 1TB / Win11 — 8,399 PLN low price
- URL: https://www.ceneo.pl/193876489?utm_medium=organic&utm_source=listing_carousel&utm_content=/Laptopy;szukaj-ryzen+ai+max
- Source/status: Ceneo benchmark, 6 offers.
- Evaluation: notable new-price reference because 64GB unified memory is much better than 32GB for local models; must verify exact CPU/GPU and stock at store.
- Verdict: WATCH benchmark / possible new BUY if real stock and warranty at ~8.4k PLN.

### Ceneo — HP ZBook Ultra G1a RyzenAI385 / 32GB / 1TB / Win11 — 8,399 PLN low price
- URL: https://www.ceneo.pl/183797248?utm_medium=organic&utm_source=listing_carousel&utm_content=/Laptopy;szukaj-hp+zbook+ultra+g1a
- Source/status: Ceneo benchmark, 6 offers.
- Evaluation: real ZBook Ultra G1a line but AI 385 + 32GB is not ideal for LLMs; business build/warranty may be good.
- Verdict: WATCH only unless cheap used/open-box appears.

### Ceneo — GMKTEC EVO-X2 64GB / 1TB — 9,799 PLN low price
- URL: https://www.ceneo.pl/196867016?utm_medium=organic&utm_source=listing_carousel&utm_content=/Komputery;szukaj-gmktec+evo-x2
- Source/status: Ceneo benchmark, 4 offers.
- Evaluation: Strix Halo mini PC class; 64GB version is practical for local LLMs but not a used deal; check seller, warranty, noise/thermals, BIOS/Linux support.
- Verdict: WATCH benchmark.

### Ceneo — DGX Spark GB10 128GB EU cable — 24,498.73 PLN low price
- URL: https://www.ceneo.pl/190032030?utm_medium=organic&utm_source=listing_carousel&utm_content=/;szukaj-dgx+spark
- Source/status: Ceneo benchmark, 5 offers.
- Evaluation: actual DGX Spark / GB10 / 128GB listing; new price reference, no used lead found.
- Verdict: WATCH benchmark only; price far above low-cost experimentation target.

### OLX — NVIDIA ADP-240LB B 240W PSU for DGX Spark — 200 PLN
- URL: https://www.olx.pl/d/oferta/zasilacz-nvidia-adp-240lb-b-240w-do-dgx-spark-CID99-ID1bu9Xt.html
- Source/location: OLX, Oświęcim.
- Evaluation: accessory only; confirms search noise and possible DGX Spark parts ecosystem, not a compute device.
- Verdict: SKIP.

## Rejected false positives / noise
- OLX `strix halo`: mostly Halo game collectibles and ASUS ROG Strix laptops; not Strix Halo silicon.
- OLX `dgx spark`: mostly DJI Spark, Spark accessories, and one DGX Spark PSU; no actual DGX Spark system.
- OLX `framework desktop`: Framework 13 Ryzen AI 7 350 and generic desktops; not Framework Desktop Strix Halo.
- OLX `gmktec evo-x2`: GMKtec K12/H255, G10, and Ryzen AI 9 HX 370 mini PCs; not Ryzen AI Max/Strix Halo.
- OLX `proart ryzen ai max`: ProArt P16 Ryzen AI 9 HX 370 + RTX5060; ordinary Ryzen AI 300/RTX laptop, not AI Max.
- Pepper DGX Spark Founders Edition at 18,539 PLN: expired deal thread; useful historical benchmark only.
- Pepper GMKTEC EVO-X2 128GB/2TB at 10,998 PLN: expired and cold (-158.84°) deal thread; useful historical benchmark only.

## Price benchmarks observed
- ASUS ROG Flow Z13 Ryzen AI MAX+ 64GB/1TB: 11,199.99–16,249 PLN on Ceneo depending SKU/OS/store.
- ASUS TUF Gaming A14 Ryzen AI MAX+ 64GB/1TB: 8,399 PLN low Ceneo reference.
- ASUS ProArt PX13 Ryzen AI MAX+ 128GB/1TB: 13,089–13,999 PLN Ceneo references.
- HP ZBook Ultra G1a RyzenAI395 128GB/2TB: 16,659 PLN low Ceneo reference.
- HP ZBook Ultra G1a RyzenAI390 64GB/1TB: 12,159 PLN low Ceneo reference.
- GMKTEC EVO-X2 64GB/1TB: 9,799 PLN low Ceneo reference; 128GB/2TB: 14,999 PLN current Ceneo, expired Pepper historical 10,998 PLN.
- PNY NVIDIA DGX Spark GB10 128GB EU cable: 24,498.73 PLN low Ceneo reference.

## Next scouting notes
- Best actionable lead today is the 7,250 PLN OLX Flow Z13 only if Konrad accepts 32GB unified memory. Ask for invoice/warranty/serial, proof of normal operation, battery health, and whether any financing/MDM/account lock exists.
- For LLM utility, watch for 64GB/128GB Strix Halo under the Ceneo floor: 64GB below ~8,000 PLN and 128GB below ~11,000–12,000 PLN would be much stronger.
- Allegro remained blocked in this run; use search snippets or alternative access next time if possible.
