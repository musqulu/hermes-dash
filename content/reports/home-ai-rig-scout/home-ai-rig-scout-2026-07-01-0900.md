# Home AI Rig Scout — 2026-07-01 09:00

Best low-cost action today: pursue the 650–699 PLN Tesla P100 PCIe leads only if you can solve passive cooling, with the Gdańsk OLX card as the cheapest direct check: [Tesla P100 16GB - Karta graficzna do AI - Gdańsk](https://www.olx.pl/d/oferta/tesla-p100-16gb-karta-graficzna-do-ai-gdansk-CID99-ID1b8SJS.html).

## Ranked low-cost leads

1. **PARTS NEEDED — [AMD Radeon Instinct MI50 16GB serwerowa wersja Radeon Pro VII](https://allegrolokalnie.pl/oferta/amd-radeon-instinct-mi50-16gb-serwerowa-wersja-radeon-pro-vii-coe)**
   - Price/source/location: 899.99 PLN, Allegro Lokalnie, Łazy
   - Why it matters: Cheapest AMD accelerator lead today; useful ROCm experiment card if cooling is solved.
   - Missing parts/risk: passive/server MI50 needs high-airflow chassis/fan duct and ROCm compatibility checks; only 16GB VRAM, not 32GB
   - Confidence: medium; freshness: search result 2026-07-01; OLX mirror showed Łazy - 16 czerwca 2026

2. **PARTS NEEDED — [Tesla P100 16GB - Karta graficzna do AI ML Deep Learning - Gdańsk](https://allegrolokalnie.pl/oferta/tesla-p100-16gb-karta-graficzna-do-ai-gdansk)**
   - Price/source/location: 675 PLN, Allegro Lokalnie, Gdańsk
   - Why it matters: Best raw cheap CUDA test-card price today; weak VRAM per card but very low entry cost.
   - Missing parts/risk: passive PCIe Tesla: needs server airflow or active cooler mod plus 8-pin/EPS power cable verification
   - Confidence: medium; freshness: search result 2026-07-01; OLX counterpart showed 650 zł / 19 czerwca 2026

3. **PARTS NEEDED — [Tesla P100 16GB - Karta graficzna do AI - Gdańsk](https://www.olx.pl/d/oferta/tesla-p100-16gb-karta-graficzna-do-ai-gdansk-CID99-ID1b8SJS.html)**
   - Price/source/location: 650 PLN, OLX, Gdańsk, Letnica
   - Why it matters: Lowest observed P100 card in OLX results; good negotiation target below 650 if duplicated cross-platform.
   - Missing parts/risk: same likely card/channel as Allegro Lokalnie; confirm current price, airflow plan, and that it is PCIe not SXM
   - Confidence: medium; freshness: 19 czerwca 2026

4. **PARTS NEEDED — [AKCELERATOR TESLA P100 16GB do AI ML Deep Learning](https://www.olx.pl/d/oferta/akcelerator-tesla-p100-16gb-do-ai-ml-deep-learning-CID99-ID1bf4N4.html)**
   - Price/source/location: 699 PLN, OLX / Allegro Lokalnie, Kraków, Podgórze
   - Why it matters: Still a cheap CUDA path; local Kraków pickup can reduce scam/shipping risk.
   - Missing parts/risk: passive cooler; require proof under nvidia-smi load and confirm included power adapter/cable
   - Confidence: medium; freshness: 27 czerwca 2026

5. **WATCH — [NVIDIA Tesla P100 16GB HBM2 + adapter | AI / Deep Learning FV 23%](https://www.olx.pl/d/oferta/nvidia-tesla-p100-16gb-hbm2-adapter-ai-deep-learning-fv-23-CID99-ID1agb19.html)**
   - Price/source/location: 850 PLN, OLX / Allegro Lokalnie, Czerna / Krzeszowice
   - Why it matters: Worth watching only if the included adapter/invoice reduces build friction enough.
   - Missing parts/risk: more expensive than 650-699 PLN P100; verify what adapter is included and invoice/warranty reality
   - Confidence: medium; freshness: 18 czerwca 2026

6. **WATCH — [AMD EPYC 7551 Dual CPU 64C/128T | 32GB ECC | Supermicro H11DSi](https://www.olx.pl/d/oferta/amd-epyc-7551-dual-cpu-64c-128t-32gb-ecc-supermicro-h11dsi-CID99-ID1bc3Lh.html)**
   - Price/source/location: 2000 PLN, OLX, Twardowice
   - Why it matters: Could be a cheap high-core base if it includes both CPUs and board; RAM is low but upgradeable.
   - Missing parts/risk: not a working system: needs chassis, PSU, heatsinks/fans, DDR4 ECC RDIMM to 128/256GB, storage, GPU clearance
   - Confidence: medium; freshness: Odświeżono dnia 29 czerwca 2026

7. **WATCH — [Komputer Stacja robocza Serwer AI / ML - AMD EPYC 7203P, 128GB DDR4-3200 - 10GbE](https://www.olx.pl/d/oferta/komputer-stacja-robocza-serwer-ai-ml-amd-epyc-7203p-128gb-ddr4-3200-10gbe-CID99-ID1badTC.html)**
   - Price/source/location: 9000 PLN, OLX, Dębica
   - Why it matters: A complete EPYC base with 128GB/10GbE could be useful if negotiable far below 9k and GPU-ready.
   - Missing parts/risk: only 128GB and no strong GPU stated; ask motherboard slots, PSU/GPU power, remaining RAM slots, noise
   - Confidence: medium; freshness: 21 czerwca 2026

8. **WATCH — [Pamięć RAM ECC DDR4 64GB 2400 SK Hynix](https://www.olx.pl/d/oferta/pamiec-ram-ecc-ddr4-64gb-2400-sk-hynix-CID99-ID1axcM1.html)**
   - Price/source/location: 600 PLN, OLX, Warszawa, Śródmieście
   - Why it matters: If truly 64GB server DIMM, four sticks would imply ~2400 PLN path to 256GB RAM.
   - Missing parts/risk: confirm RDIMM vs LRDIMM and compatibility with chosen EPYC/Xeon board before buying
   - Confidence: medium-low; freshness: 06 czerwca 2026

9. **WATCH — [Pamięć RAM 32GB ECC HMA84GR7CJR4N-VK PC4 2Rx4 DDR4 2666MHz](https://www.olx.pl/d/oferta/pamiec-ram-32gb-ecc-hma84gr7cjr4n-vk-pc4-2rx4-ddr4-2666mhz-CID99-ID1aOQCJ.html)**
   - Price/source/location: 350 PLN, OLX, Radwanice
   - Why it matters: Common 32GB RDIMM candidate for slowly filling an EPYC/Xeon platform.
   - Missing parts/risk: 8 sticks for 256GB would be ~2800 PLN; check registered ECC and exact part support
   - Confidence: medium; freshness: 25 czerwca 2026

## Cheapest build paths

- **Ultra-cheap Tesla/old server path:** buy one 650–699 PLN Tesla P100 PCIe only with proof of detection/load; pair with a cheap Xeon/EPYC box that has full-height PCIe x16, 700–1000W PSU headroom, EPS/PCIe power adapter, and forced airflow/fan duct. Passive Tesla cards are PARTS NEEDED outside a server chassis.
- **AMD Instinct/ROCm path:** MI50 at ~900 PLN is interesting for ROCm experiments, but this listing appears to be 16GB, so it is not a 32/64GB VRAM breakthrough. Needs Linux ROCm validation and strong airflow.
- **Memory-rich EPYC/Xeon base path:** the 2,000 PLN dual EPYC board/CPU bundle is the cheapest base candidate but incomplete; budget separately for chassis, heatsinks, PSU, DDR4 ECC RDIMM, NVMe, and GPU mounting/airflow.
- **Only-if-cheap RTX path:** prior 3,450–3,600 PLN RTX 3090 cards remain better single-card usability than Tesla/P100, but today no new unusually cheap RTX lead beat the datacenter-card path.

## RAM target notes

- 256GB target remains easiest via 8×32GB DDR4 ECC RDIMM or 4×64GB if the chosen board supports the DIMM type.
- Observed RAM cards: 32GB ECC RDIMM at 350 PLN implies ~2,800 PLN for 256GB; 64GB SK Hynix at 600 PLN implies ~2,400 PLN for 256GB, but RDIMM/LRDIMM compatibility must be checked first.
- EPYC 7203P complete system has 128GB already; ask seller for motherboard model, slot count, populated DIMMs, and whether 256GB is supported without replacing all sticks.

## Price/market notes

- Tesla P100 PCIe observed band today: 650–900 PLN; the actionable band is ≤700 PLN unless adapter/invoice/cooling is included.
- AMD MI50 16GB observed at ~900 PLN; good tinkering price, but not enough VRAM to justify complex build friction unless ROCm testing is the goal.
- Low-cost EPYC base observed: 2,000 PLN for dual EPYC 7551 + H11DSi + 32GB, but incomplete. Complete EPYC 128GB workstation observed at 9,000 PLN, likely needs negotiation.
- Memory-rich turnkey workstation market intel: Dell T7920 512GB bundle at 42,900 PLN is not aligned with the cheap test-rig goal.

## Coverage notes

- OLX result cards were accessible and provided prices/locations/dates for the selected leads.
- Allegro Lokalnie result cards were accessible despite a cookie dialog and provided useful duplicate/cross-posting checks.
- Main Allegro and eBay coverage was limited/not used in this run; no details were fabricated from blocked or unvisited pages.