# Home AI Rig Scout — 2026-07-10 09:00

Best low-cost action today: the same cheap build path remains strongest — [3000 zł Supermicro SC826/256GB base](https://www.olx.pl/d/oferta/serwer-supermicro-r2-dual-e5-sc826-256gb-ram-ecc-ddr4-lrdimm-2400mhz-CID99-ID18To4p.html) plus a [650 zł OLX Tesla P100](https://www.olx.pl/d/oferta/tesla-p100-16gb-karta-graficzna-do-ai-gdansk-CID99-ID1b8SJS.html) only if riser, power and airflow are verified.

## Ranked low-cost leads

1. **BUY — [Serwer Supermicro R2 dual E5 SC826, 256GB RAM ECC DDR4 LRDIMM 2400MHz](https://www.olx.pl/d/oferta/serwer-supermicro-r2-dual-e5-sc826-256gb-ram-ecc-ddr4-lrdimm-2400mhz-CID99-ID18To4p.html)**
   - Price/source/location: 3000 zł; OLX; Łódź, Bałuty
   - Why it matters: Best cheap full base still visible: 256GB DDR4 LRDIMM included, cheaper than many single GPUs.
   - Missing parts/risk: Need exact PCIe riser/GPU clearance, PSU/GPU power proof, caddies and fan path; 2U noise is the practical blocker.
   - Compatibility path: Confirm x16 lane/riser, redundant PSU wattage, fan shroud, IPMI/BIOS access; pair with passive P100/V100 only if airflow is real.
   - Confidence: medium; freshness: 07 lipca 2026

2. **PARTS NEEDED — [Tesla P100 16GB - Karta graficzna do AI - Gdańsk](https://www.olx.pl/d/oferta/tesla-p100-16gb-karta-graficzna-do-ai-gdansk-CID99-ID1b8SJS.html)**
   - Price/source/location: 650 zł; OLX; Gdańsk, Letnica
   - Why it matters: Cheapest currently visible CUDA accelerator path; good proof-of-life card before buying expensive VRAM.
   - Missing parts/risk: Passive PCIe datacenter card; must have high-airflow server/tunnel, correct power adapter/cable and seller nvidia-smi + load proof.
   - Compatibility path: PCIe x16 host, forced airflow/fan duct, CUDA-capable Linux; accept 16GB VRAM limit.
   - Confidence: medium; seller visible as Adam in prior detail capture; freshness: 19 czerwca 2026

3. **WATCH — [Serwer Supermicro CSE-813M](https://www.olx.pl/d/oferta/serwer-supermicro-cse-813m-CID99-ID1bnJ0h.html)**
   - Price/source/location: 3000 zł do negocjacji; OLX; Warszawa, Ursus
   - Why it matters: Newly visible C422/X11SRM-VF base with Xeon W-2140B, 64GB DDR4 ECC RDIMM now and max 512GB; possibly quieter because seller replaced fans.
   - Missing parts/risk: Weak GPU path: only 1×PCIe 3.0 x16, PWS-350-1H 350W PSU, 1U-style airflow/space and local pickup only.
   - Compatibility path: Better as RAM/CPU server than GPU box; for GPU, ask for riser orientation, slot clearance, PSU upgrade path and whether passive cards can get direct airflow.
   - Confidence: medium; seller Mikolaj, 4.0/5; freshness: added 08 lipca 2026

4. **PARTS NEEDED — [Tesla P100 16GB - Karta graficzna do AI ML Deep Learning - Gdańsk](https://allegrolokalnie.pl/oferta/tesla-p100-16gb-karta-graficzna-do-ai-gdansk)**
   - Price/source/location: 675 zł; Allegro Lokalnie; Gdańsk
   - Why it matters: Same low P100 band with buyer-protection-style purchase path; card shows 850 → 675 zł.
   - Missing parts/risk: Passive cooling and sparse proof; OLX 650 zł mirror appears cheaper if it is the same seller/card.
   - Compatibility path: High-airflow host, PCIe power adapter, seller stress screenshot, CUDA Linux.
   - Confidence: medium; freshness: current result card

5. **PARTS NEEDED — [AKCELERATOR TESLA P100 16GB do AI ML Deep Learning](https://allegrolokalnie.pl/oferta/akcelerator-tesla-p100-16gb-do-ai-ml-deep-learning)**
   - Price/source/location: 699 zł; Allegro Lokalnie; Kraków, Podgórze
   - Why it matters: Cheap local-pickup P100 alternative; nearly identical economics to the Gdańsk card.
   - Missing parts/risk: Passive cooling and unknown included power adapter; require live load test and exact PCIe card photos.
   - Compatibility path: High-airflow 2U/4U or blower duct, PCIe power lead/adapter, CUDA-capable Linux host.
   - Confidence: medium; freshness: current result card

6. **WATCH — [NVIDIA Tesla P100 16GB 732GB/s HBM2 PCIe](https://allegrolokalnie.pl/oferta/nvidia-tesla-p100-16gb-pcie)**
   - Price/source/location: 849 zł; Allegro Lokalnie; Warszawa, Wawer
   - Why it matters: Not cheapest, but local Warsaw pickup/test could justify it if proof is much stronger.
   - Missing parts/risk: Still passive 16GB; price only makes sense with easier testing/protection or included adapter.
   - Compatibility path: Same P100 airflow/power/CUDA path; ask for Dell RGKP9 label, nvidia-smi and temperature under load.
   - Confidence: medium-low; freshness: current card, 1000 → 849 zł

7. **WATCH — [NVIDIA Tesla P100 16GB HBM2 + adapter | AI / Deep Learning FV 23%](https://allegrolokalnie.pl/oferta/nvidia-tesla-p100-16gb-hbm2-adapter-or-ai-deep-learning)**
   - Price/source/location: 900 zł; Allegro Lokalnie; Krzeszowice/Czerna
   - Why it matters: Adapter/FV wording may reduce friction versus bare P100 cards.
   - Missing parts/risk: More expensive than 650–699 zł alternatives; confirm what “adapter” means and whether invoice applies.
   - Compatibility path: High-airflow server/workstation, confirmed adapter, CUDA Linux, seller stress proof.
   - Confidence: medium; freshness: current card, 1000 → 900 zł

8. **WATCH — [Karta Graficzna AMD Radeon Instinct MI50 16GB serverowa wersja Radeon Pro VII](https://www.olx.pl/d/oferta/karta-graficzna-amd-radeon-instinct-mi50-16gb-serverowa-wersja-radeon-pro-vii-CID99-ID1aFmcu.html)**
   - Price/source/location: 899.99 zł; OLX; Łazy
   - Why it matters: Cheapest AMD Instinct/ROCm learning card visible today.
   - Missing parts/risk: Only 16GB and Vega/ROCm support friction; no accessible MI60/MI100/MI210 32–64GB bargain found.
   - Compatibility path: ROCm-compatible Linux stack check, PCIe host, passive-card airflow/fan duct, exact power connector confirmation.
   - Confidence: medium; freshness: 16 czerwca 2026

9. **WATCH — [Karta graficzna Nvidia Tesla V100 32GB VRAM HBM2 PCIe AI LLM ML Kraków](https://www.olx.pl/d/oferta/karta-graficzna-nvidia-tesla-v100-32gb-vram-hbm2-pcie-ai-llm-ml-krakow-CID99-ID1amvIU.html)**
   - Price/source/location: 4000 zł; OLX; Kraków, Podgórze Duchackie
   - Why it matters: 32GB CUDA VRAM is materially more useful than P100 16GB while still below many pro cards.
   - Missing parts/risk: At 4k it competes with cheap RTX 3090; must verify PCIe not SXM, cooling and load proof.
   - Compatibility path: High-airflow server/workstation, PCIe power path, CUDA driver; skip if SXM or no thermal evidence.
   - Confidence: medium; freshness: 26 czerwca 2026

10. **WATCH — [Karta graficzna Rtx3090 24GB / Zotac Trinity](https://allegrolokalnie.pl/oferta/karta-graficznanvidiageforcertx3090-24gbtrinity)**
    - Price/source/location: 3499.99 zł; Allegro Lokalnie; Bartoszyce
    - Why it matters: Lowest RTX 3090 anchor seen today; useful as comparison/simple CUDA fallback only.
    - Missing parts/risk: Sparse card; demand mining/repair history, memory-junction temps, warranty/FV and live load demo.
    - Compatibility path: 850W+ quality PSU, 2–3 PCIe 8-pin cables, normal tower airflow, CUDA Linux.
    - Confidence: medium-low; freshness: current result card

## Cheapest build paths

- **Ultra-cheap Tesla/old server path:** 650 zł OLX P100 + 3000 zł Supermicro SC826/256GB is still the cheapest plausible “real rig” path. The blocker is not purchase price; it is passive-card airflow, riser orientation, GPU power and noise.
- **Quiet-ish RAM server path:** 3000 zł CSE-813M is interesting for a lower-noise lab node and RAM upgrades up to 512GB, but the 350W PSU and single PCIe slot make it a weak accelerator chassis unless seller proves a GPU path.
- **AMD Instinct/ROCm path:** 899.99 zł MI50 remains a tinkering card, not a better LLM value card than P100; no accessible 32/64GB MI60/MI100/MI210 bargain surfaced today.
- **Memory-rich workstation path:** Dell Precision 7910/256GB around 4999 zł remains the easier non-rack route if PSU cables and slot clearance are confirmed; included old Radeon is irrelevant.
- **Only-if-cheap RTX path:** 3499.99 zł Zotac RTX 3090 is the only RTX watch anchor under 3.6k; normal 4.3–4.8k cards remain off-strategy for the lowest-cost test rig.

## RAM target notes

- 256GB target is directly covered by the 3000 zł Supermicro SC826 and the 4999 zł Dell Precision 7910 anchors.
- The new Supermicro CSE-813M has 64GB installed but claims 512GB max; it would need RDIMM upgrades and still lacks an obvious cheap GPU power/airflow route.
- For the SC826, ask for DIMM count/capacity, memtest screenshot, free slots, caddies and whether adding a GPU sacrifices necessary airflow.
- 128GB systems should be considered only when much cheaper than the SC826 or demonstrably easier for GPU installation.

## Price/market notes

- **Tesla P100:** observed history range 650–11000 zł across 16 tracked listing(s); actionable band is 650–900 zł, with 650/675/699 zł cards leading.
- **RTX 3090:** observed history range 3450–12000 zł across 20 tracked listing(s); only sub-3600 zł listings deserve attention for this scout.
- **Base systems:** observed history range 329–42900 zł across 47 tracked listing(s); the useful 256GB base band remains roughly 3000–5000 zł.
- **AMD Instinct:** observed history range 899.99–899.99 zł across 2 tracked listing(s); today’s accessible Polish result is MI50 16GB only.
- **V100:** observed history range 4000–4000 zł across 1 tracked listing(s); watch only if PCIe proof and cooling are excellent.
- Fresh change notes: new Supermicro CSE-813M appeared at 3000 zł, but it is not a direct replacement for the 256GB SC826 because RAM and GPU expandability are weaker.

## Coverage notes

- OLX: queried with browser result/detail pages; listing cards and selected details were visible, but Tesla searches remain noisy with car parts/cars.
- Allegro Lokalnie: queried with browser result pages; listing cards/prices/locations readable despite cookie modal.
- Allegro.pl: main listing search hit DataDome CAPTCHA today, so direct Allegro marketplace coverage is limited.
- eBay: eBay Poland search returned an error page today; no import/shipping lead beat Polish anchors in this bounded run.
