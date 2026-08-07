# Home AI Rig Scout — 2026-07-09 09:02

Best low-cost action today: call/message the 3000 zł Supermicro 2U/256GB RAM base first, then only pair it with a 675–699 zł Tesla P100 if the riser, power and airflow path is confirmed. Primary lead: [Supermicro 256GB base](https://www.olx.pl/d/oferta/serwer-supermicro-r2-dual-e5-sc826-256gb-ram-ecc-ddr4-lrdimm-2400mhz-CID99-ID18To4p.html).

## Ranked low-cost leads
1. **BUY — [Serwer Supermicro R2 dual E5 SC826, 256GB RAM ECC DDR4 LRDIMM 2400MHz](https://www.olx.pl/d/oferta/serwer-supermicro-r2-dual-e5-sc826-256gb-ram-ecc-ddr4-lrdimm-2400mhz-CID99-ID18To4p.html)**
   - Price/source/location: 3000 zł; OLX; Łódź, Bałuty
   - Why it matters: Best low-cost full base still visible: 256GB DDR4 LRDIMM included in a 2U Supermicro chassis for less than many single GPUs.
   - Missing parts/risk: Need exact PCIe riser/GPU clearance and PSU/GPU power proof; 2U noise is the practical blocker.
   - Compatibility path: Verify riser layout, caddies, redundant PSUs, x16 lane availability, fan shroud/airflow, BIOS/IPMI access; pair with passive P100/V100 only if airflow path is real.
   - Confidence: medium; freshness: visible today; card previously refreshed 2026-07-07

2. **PARTS NEEDED — [Tesla P100 16GB - Karta graficzna do AI ML Deep Learning - Gdańsk](https://allegrolokalnie.pl/oferta/tesla-p100-16gb-karta-graficzna-do-ai-gdansk)**
   - Price/source/location: 675 zł; Allegro Lokalnie; Gdańsk
   - Why it matters: Cheapest currently visible CUDA accelerator path; useful for proof-of-life local LLM tests before buying expensive VRAM.
   - Missing parts/risk: Passive PCIe datacenter card; must have high-airflow server/tunnel and seller nvidia-smi + load proof.
   - Compatibility path: PCIe x16 host, forced airflow/fan duct, correct GPU power/adapter, Linux NVIDIA driver/CUDA; accept 16GB VRAM limit.
   - Confidence: medium; freshness: current result card; 850 → 675 zł

3. **PARTS NEEDED — [AKCELERATOR TESLA P100 16GB do AI ML Deep Learning](https://allegrolokalnie.pl/oferta/akcelerator-tesla-p100-16gb-do-ai-ml-deep-learning)**
   - Price/source/location: 699 zł; Allegro Lokalnie; Kraków, Podgórze
   - Why it matters: Same cheap P100 band with possible local pickup/test in Kraków; nearly identical economics to the Gdańsk card.
   - Missing parts/risk: Passive cooling and unknown included power adapter; require load test and exact PCIe card photo.
   - Compatibility path: High-airflow 2U/4U or blower duct, PCIe power lead/adapter, CUDA-capable Linux host; avoid normal desktop airflow.
   - Confidence: medium; freshness: current result card

4. **WATCH — [NVIDIA Tesla P100 16GB 732GB/s HBM2 PCIe](https://allegrolokalnie.pl/oferta/nvidia-tesla-p100-16gb-pcie)**
   - Price/source/location: 849 zł; Allegro Lokalnie; Warszawa, Wawer
   - Why it matters: Not as cheap as the 675/699 zł P100s, but local Warsaw pickup could be worth it if proof is strong.
   - Missing parts/risk: Still passive 16GB; price only makes sense with easier testing/protection or included adapter.
   - Compatibility path: Same P100 airflow/power/CUDA path; ask for Dell RGKP9 label, nvidia-smi, temps under load.
   - Confidence: medium-low; freshness: current result card; 1000 → 849 zł

5. **WATCH — [Karta Graficzna AMD Radeon Instinct MI50 16GB serverowa wersja Radeon Pro VII](https://www.olx.pl/d/oferta/karta-graficzna-amd-radeon-instinct-mi50-16gb-serverowa-wersja-radeon-pro-vii-CID99-ID1aFmcu.html)**
   - Price/source/location: 899.99 zł; OLX; Łazy
   - Why it matters: Cheapest AMD Instinct/ROCm learning card visible; useful only if AMD stack experimentation matters.
   - Missing parts/risk: Only 16GB and Vega/ROCm support friction; no 32/64GB MI50/MI60/MI100/MI210 bargain found in accessible results.
   - Compatibility path: ROCm-compatible Linux stack check, PCIe host, passive-card airflow/fan duct, PSU cable for exact card.
   - Confidence: medium; freshness: 16 czerwca 2026; still visible today

6. **WATCH — [NVIDIA Tesla P100 16GB HBM2 + adapter | AI / Deep Learning FV 23%](https://www.olx.pl/d/oferta/nvidia-tesla-p100-16gb-hbm2-adapter-ai-deep-learning-fv-23-CID99-ID1agb19.html)**
   - Price/source/location: 850 zł; OLX / Allegro Lokalnie mirror; Czerna / Krzeszowice
   - Why it matters: Invoice/adapter wording may reduce friction versus bare P100 cards; still inside sub-900 zł P100 band.
   - Missing parts/risk: Confirm what “adapter” means and whether price is 850 OLX or 900 Lokalnie; otherwise cheaper P100s win.
   - Compatibility path: High-airflow host, adapter confirmation, seller stress proof, older CUDA stack acceptance.
   - Confidence: medium; freshness: current Lokalnie card shows 1000 → 900; OLX anchor 850

7. **WATCH — [Karta graficzna Nvidia Tesla V100 32GB VRAM HBM2 PCIe AI LLM ML Kraków](https://www.olx.pl/d/oferta/karta-graficzna-nvidia-tesla-v100-32gb-vram-hbm2-pcie-ai-llm-ml-krakow-CID99-ID1amvIU.html)**
   - Price/source/location: 4000 zł; OLX; Kraków, Podgórze Duchackie
   - Why it matters: 32GB CUDA VRAM is materially more useful than P100 16GB while still below many workstation GPUs.
   - Missing parts/risk: At 4k it competes with cheap RTX 3090; must verify PCIe not SXM, cooling, and load proof.
   - Compatibility path: High-airflow server/workstation, PCIe power path, CUDA driver; skip if SXM or no thermal evidence.
   - Confidence: medium; freshness: 26 czerwca 2026; visible in P100 search today

8. **WATCH — [Dell Precision 7910 T7910 2×E5-2630V3, 256GB RAM, Radeon HD 7870](https://www.olx.pl/d/oferta/dell-precision-7910-t7910-2x-e5-2630v3-ssd-256gb-ram-256gb-radeon-saphire-hd-7870-CID99-ID1aTwHf.html)**
   - Price/source/location: 4999 zł; OLX; Maruszyna
   - Why it matters: Lowest complete workstation path already at the 256GB RAM target; quieter/easier than rack servers if GPU power fits.
   - Missing parts/risk: Old Xeon and unknown PSU cables/slot spacing; Radeon included is irrelevant for LLMs.
   - Compatibility path: Confirm PSU wattage, 2×8-pin/PCIe cables, x16 clearance, DIMM layout, BIOS, and whether P100/V100 passive cooling can be ducted.
   - Confidence: medium; freshness: 01 lipca 2026 / tracked anchor

9. **SKIP — [Serwer Dell C6100 - 4 NODE - 8CPU - 272GB RAM](https://www.olx.pl/d/oferta/serwer-dell-c6100-4-node-8cpu-272gb-ram-CID99-ID17onRr.html)**
   - Price/source/location: 2000 zł; OLX; not shown in captured card
   - Why it matters: Very cheap RAM quantity, but likely old multi-node DDR3 homelab hardware rather than a clean GPU/LLM base.
   - Missing parts/risk: Probably loud, power-hungry, awkward GPU path; only useful as price intel for RAM-heavy servers.
   - Compatibility path: Would require exact node specs, PCIe/riser/GPU feasibility, PSU/caddies/noise check before considering.
   - Confidence: medium-low; freshness: visible today

10. **WATCH — [Karta graficzna Rtx3090 24GB / Zotac Trinity](https://allegrolokalnie.pl/oferta/karta-graficznanvidiageforcertx3090-24gbtrinity)**
   - Price/source/location: 3499.99 zł; Allegro Lokalnie; Bartoszyce
   - Why it matters: Cheapest RTX 3090 anchor seen today; relevant only as a simple 24GB CUDA fallback if datacenter-card hassle is not worth it.
   - Missing parts/risk: Sparse card; demand mining/repair history, memory-junction temps, warranty/FV, and live load demo.
   - Compatibility path: 850W+ quality PSU, 2–3 PCIe 8-pin cables, normal tower airflow, CUDA Linux; do not overpay vs P100 path.
   - Confidence: medium-low; freshness: current result card

## Cheapest build paths
- **Ultra-cheap Tesla/old server path:** 675–699 zł P100 + the 3000 zł Supermicro 2U/256GB base is the current cheapest plausible “real rig” path, if PCIe risers/power and fan shroud support the passive GPU. Expect noise and 16GB VRAM limits.
- **AMD Instinct/ROCm path:** MI50 16GB at 899.99 zł is still a tinkering card, not a better value LLM card than P100; no accessible MI60/MI100/MI210 32–64GB bargain found today.
- **Memory-rich EPYC/Xeon base path:** prioritize complete 256GB DDR4 systems around 3000–5000 zł over expensive modern 128GB servers; confirm RDIMM/LRDIMM type, free slots and caddies.
- **Only-if-cheap RTX path:** 3499.99 zł Zotac/Trinity is the only RTX 3090 watch anchor; normal 4.3–4.8k cards remain worse for this lowest-cost test-rig goal.

## RAM target notes
- 256GB target is directly covered by the 3000 zł Supermicro R2/SC826 and 4999 zł Dell Precision 7910 anchors.
- The Supermicro listing says 256GB DDR4 LRDIMM 2400MHz; ask for DIMM count/capacity, free slots, memory test screenshot, and whether the board accepts adding GPUs without sacrificing airflow.
- 128GB systems remain acceptable only if much cheaper and upgradeable; today the strongest cheap full-base lead already has 256GB, so lower-RAM servers need a very low price or clear GPU compatibility advantage.

## Price/market notes
- **Tesla P100:** observed history range 650–11000 zł across 10 tracked listing(s).
- **RTX 3090:** observed history range 3450–12000 zł across 19 tracked listing(s).
- **Base systems:** observed history range 329–42900 zł across 39 tracked listing(s).
- **AMD Instinct:** observed history range 900–900 zł across 2 tracked listing(s).
- **V100:** observed history range 4000–4000 zł across 1 tracked listing(s).
- Fresh change notes: the P100 Lokalnie cards still show discount anchors around 675/699/849–900 zł; no better P40/MI210-style 24–64GB bargain surfaced in accessible pages.

## Coverage notes
- OLX: queried with browser result pages; OLX cards visible but noisy, and not every detail page was opened.
- Allegro Lokalnie: queried with browser result pages; cookie modal present but listing cards/prices/locations readable.
- Allegro.pl: main Allegro not relied on; Lokalnie can include Allegro cross-posts, direct main marketplace coverage remains limited.
- eBay: not included today; no import/shipping lead beat Polish OLX/Lokalnie anchors during this bounded run.
