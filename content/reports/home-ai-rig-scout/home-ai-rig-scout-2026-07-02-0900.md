# Home AI Rig Scout — 2026-07-02 09:00

Best low-cost action today: chase the 650 zł Tesla P100 first if Konrad has/will buy a high-airflow server host; otherwise the 3600 zł Gigabyte RTX 3090 is the simplest cheap CUDA fallback. [Tesla P100 Gdańsk](https://www.olx.pl/d/oferta/tesla-p100-16gb-karta-graficzna-do-ai-gdansk-CID99-ID1b8SJS.html).

## Ranked low-cost leads
1. **PARTS NEEDED — [Tesla P100 16GB - Karta graficzna do AI - Gdańsk](https://www.olx.pl/d/oferta/tesla-p100-16gb-karta-graficzna-do-ai-gdansk-CID99-ID1b8SJS.html)**
   - Price/source: 650 PLN, OLX, Gdańsk, Letnica; condition/freshness: Używane, 19 czerwca 2026.
   - Why it matters: Cheapest currently observed useful CUDA datacenter card; 16GB HBM2 is small but good for experiments and old-server path.
   - Missing parts/risk: Passive PCIe card: needs high-airflow server or serious fan duct; verify PCIe form factor and seller stress test.
   - Compatibility path: PCIe x16 slot, server airflow/fan duct, 8-pin/EPS-style auxiliary power as required by exact OEM card, Linux NVIDIA driver/CUDA stack.
   - Confidence: medium.

2. **PARTS NEEDED — [AKCELERATOR TESLA P100 16GB do AI ML Deep Learning](https://www.olx.pl/d/oferta/akcelerator-tesla-p100-16gb-do-ai-ml-deep-learning-CID99-ID1bf4N4.html)**
   - Price/source: 699 PLN, OLX, Kraków, Podgórze; condition/freshness: Używane, 27 czerwca 2026.
   - Why it matters: Another low-cost P100 reference; still acceptable if the 650 zł Gdańsk card is gone.
   - Missing parts/risk: Same passive-cooling/server-power caveat; confirm model, connector, and whether any adapter is included.
   - Compatibility path: High-airflow chassis, correct GPU power lead/adapter, Linux CUDA setup; avoid cramped desktop case without blower mod.
   - Confidence: medium.

3. **PARTS NEEDED — [Tesla P100 16GB - Karta graficzna do AI ML Deep Learning - Gdańsk](https://allegrolokalnie.pl/oferta/tesla-p100-16gb-karta-graficzna-do-ai-gdansk)**
   - Price/source: 675 PLN, Allegro Lokalnie, Gdańsk; condition/freshness: unknown on card, search result.
   - Why it matters: Likely same Gdańsk P100 class deal, but Allegro Lokalnie card shows buyer flow and 675 zł price.
   - Missing parts/risk: Potential duplicate of OLX Gdańsk listing; verify actual seller, exact card, and return/protection terms.
   - Compatibility path: As above: airflow, power cable/adapter, server/workstation with sufficient clearance.
   - Confidence: medium-low.

4. **WATCH — [AMD Radeon Instinct MI50 16GB serverowa wersja Radeon Pro VII](https://www.olx.pl/d/oferta/karta-graficzna-amd-radeon-instinct-mi50-16gb-serverowa-wersja-radeon-pro-vii-CID99-ID1aFmcu.html)**
   - Price/source: 899.99 PLN, OLX, Łazy; condition/freshness: Używane, 16 czerwca 2026.
   - Why it matters: Cheap AMD Instinct route for ROCm experiments; useful price intel even though it is 16GB, not the preferred 32/64GB.
   - Missing parts/risk: ROCm compatibility and passive cooling are the main friction; 16GB VRAM limits local LLM usefulness.
   - Compatibility path: Linux ROCm-supported distro/kernel, PCIe slot, strong airflow/fan duct, PSU cable matching exact card.
   - Confidence: medium.

5. **WATCH — [NVIDIA Tesla P100 16GB HBM2 + adapter | AI / Deep Learning FV 23%](https://www.olx.pl/d/oferta/nvidia-tesla-p100-16gb-hbm2-adapter-ai-deep-learning-fv-23-CID99-ID1agb19.html)**
   - Price/source: 850 PLN, OLX, Czerna; condition/freshness: Używane, 18 czerwca 2026.
   - Why it matters: Higher than cheapest P100s but adapter/FV wording may reduce build friction.
   - Missing parts/risk: Need to confirm what “adapter” means; still passive and old CUDA generation.
   - Compatibility path: High-airflow chassis or blower mod, exact included adapter confirmation, CUDA-capable Linux host.
   - Confidence: medium.

6. **PARTS NEEDED — [AMD EPYC 7551 Dual CPU 64C/128T | 32GB ECC | Supermicro H11DSi](https://www.olx.pl/d/oferta/amd-epyc-7551-dual-cpu-64c-128t-32gb-ecc-supermicro-h11dsi-CID99-ID1bc3Lh.html)**
   - Price/source: 2000 PLN, OLX, Twardowice; condition/freshness: Używane, odświeżono 29 czerwca 2026.
   - Why it matters: Very cheap EPYC dual-socket base candidate for lots of RAM lanes and PCIe; better than gaming PC as a test-rig foundation if complete enough.
   - Missing parts/risk: Only 32GB RAM and likely not a full chassis; need case/PSU/coolers/storage and confirm PCIe slot layout.
   - Compatibility path: Compatible EEB/SSI chassis, coolers, 1000W+ PSU if adding GPUs, DDR4 RDIMM/LRDIMM to 128–256GB, storage, fans.
   - Confidence: medium.

7. **WATCH — [Dell R630 | 2x E5-2650v3 | 64GB ECC | H730 | iDRAC Ent | Szyny](https://www.olx.pl/d/oferta/dell-r630-2x-e5-2650v3-64gb-ecc-2x146gb-sas-h730-idrac-ent-szyny-CID99-ID1a6IcB.html)**
   - Price/source: 1450 PLN, OLX, Warszawa, Śródmieście; condition/freshness: Używane, 11 czerwca 2026.
   - Why it matters: Cheap complete server with rails for CPU/RAM experimentation and services; can be a base around non-GPU tasks.
   - Missing parts/risk: 1U R630 is poor for full-height GPU cards and very noisy; not a good passive accelerator host unless riser/power path is proven.
   - Compatibility path: More DDR4 RDIMM for 128–256GB, SSD/NVMe plan, possibly external/other chassis for GPU.
   - Confidence: medium.

8. **WATCH — [Nvidia Tesla V100 32GB VRAM HBM2 PCIe AI LLM ML Kraków](https://www.olx.pl/d/oferta/karta-graficzna-nvidia-tesla-v100-32gb-vram-hbm2-pcie-ai-llm-ml-krakow-CID99-ID1amvIU.html)**
   - Price/source: 4000 PLN, OLX, Kraków, Podgórze Duchackie; condition/freshness: Używane, 26 czerwca 2026.
   - Why it matters: 32GB CUDA VRAM in one card; interesting only if seller can prove PCIe card health and price negotiates.
   - Missing parts/risk: Still passive/server-oriented and 4k zł competes with cheap RTX 3090; verify not SXM and require load test.
   - Compatibility path: PCIe high-airflow server/workstation, adequate PSU/power lead, CUDA driver; avoid if SXM or no cooling plan.
   - Confidence: medium.

9. **BUY — [Gigabyte RTX 3090 24Gb](https://www.olx.pl/d/oferta/gigabyte-rtx-3090-24gb-CID99-ID1b9OCb.html)**
   - Price/source: 3600 PLN, OLX, Wrocław, Stare Miasto; condition/freshness: Używane, 20 czerwca 2026.
   - Why it matters: Best visible RTX 3090 price anchor today; simplest 24GB CUDA path if datacenter cooling hassle is not worth it.
   - Missing parts/risk: RTX is not the target unless unusually cheap; ask for mining/repair history, VRAM junction temps, and benchmark proof.
   - Compatibility path: Desktop/workstation with 850W+ quality PSU, correct 2–3x PCIe 8-pin cables, airflow; Linux CUDA is straightforward.
   - Confidence: medium.

10. **PARTS NEEDED — [Geforce RTX 3090 EKWB 24GB ASUS](https://www.olx.pl/d/oferta/geforce-rtx-3090-ekwb-24gb-asus-CID99-ID10sYm9.html)**
   - Price/source: 3500 PLN, OLX, Rzeszów; condition/freshness: Nowe on card, 25 czerwca 2026.
   - Why it matters: Cheapest 3090-class card seen, but waterblock can be a trap unless Konrad wants a loop.
   - Missing parts/risk: Requires custom water loop or stock cooler swap; “new” should be verified carefully.
   - Compatibility path: Pump/radiator/reservoir/tubing/fittings/coolant or compatible air cooler, 850W+ PSU, load-test proof.
   - Confidence: medium-low.

11. **WATCH — [Supermicro X12SPL-LN4F Xeon Silver 4310, 128GB RAM, 2x10Gb, 2x700W + szyny](https://www.olx.pl/d/oferta/serwer-supermicro-x12spl-ln4f-xeon-silver-4310-128gb-ram-2x10gb-2x-700w-szyny-CID99-ID1agyil.html)**
   - Price/source: 5500 PLN, OLX, Ciechanów; condition/freshness: Używane, 17 czerwca 2026.
   - Why it matters: Modern-ish 128GB RDIMM server base with redundant PSUs/rails; possible RAM-rich host if GPU risers/clearance work.
   - Missing parts/risk: Need exact chassis/riser and GPU power compatibility; 5500 zł base leaves less budget for accelerators.
   - Compatibility path: Confirm PCIe riser layout, full-height GPU clearance, power leads, add DDR4 RDIMM toward 256GB, NVMe/storage.
   - Confidence: medium.

## Cheapest build paths

- **Ultra-cheap Tesla/old-server path:** buy a 650–699 zł Tesla P100 and pair with a noisy but cheap server/workstation that can deliver PCIe x16, enough power, and forced airflow. Budget extra time for fan ducting and old CUDA support; useful for small/quantized tests, not a final 70B box.
- **AMD Instinct/ROCm path:** the 899,99 zł MI50 16GB is a cheap ROCm learning card, but 16GB VRAM is limiting; keep watching for MI50/MI60 32GB or MI210 64GB before committing serious build money.
- **Memory-rich EPYC/Xeon base path:** the 2000 zł dual EPYC board+CPUs is the cheapest expandable foundation seen, but it is not a complete system. The 1450 zł Dell R630 is complete/noisy and RAM-upgradeable, while the 5500 zł Supermicro X12 starts at 128GB and is cleaner but less “lowest cost”.
- **Only-if-cheap RTX path:** the 3600 zł Gigabyte RTX 3090 is the current air-cooled baseline; the 3500 zł EKWB 3090 only makes sense if a water loop/air-cooler conversion is already acceptable.

## RAM target notes

- 256GB target is still most realistic through DDR4 RDIMM/LRDIMM servers/workstations, not consumer RTX gaming PCs.
- The dual EPYC H11DSi platform can plausibly scale to 256GB+ but needs DIMM population planning and a complete chassis/PSU/cooling build.
- Dell R630 and Supermicro X12 listings are better for RAM density; verify DIMM slot count, RDIMM vs LRDIMM support, and whether 32GB DIMMs are affordable enough to reach 256GB.

## Price/market notes
- **Tesla P100 16GB:** 650–900 zł observed today across OLX/Allegro Lokalnie.
- **AMD Instinct MI50 16GB:** 899,99 zł observed; no MI100/MI210 bargains found in accessible cards.
- **RTX 3090 24GB:** 3500–4600 zł visible low band; 3600 zł air-cooled Gigabyte remains the clean cheap anchor.
- **RAM-rich bases:** 1450 zł for R630/64GB, 2000 zł for dual EPYC board+32GB, 5500 zł for Supermicro X12/128GB.

No strong price drops detected against stored history for the recurring anchors; several previously seen RTX 3090s remain around 3500–4500 zł, while P100-class cards cluster under 900 zł.

## Coverage notes

- OLX search result cards were accessible and are the main evidence source today.
- Allegro main marketplace was blocked by DataDome CAPTCHA, so no Allegro main listings were evaluated.
- Allegro Lokalnie search cards were accessible for Tesla P100 and provided 675/699/900 zł anchors.
- eBay.pl search returned an error page; no import/shipping-risk candidates were included.
