# Home AI Rig Scout — 2026-07-12 09:00
Best low-cost action today: check the [3 000 zł Supermicro 256GB RAM base](https://www.olx.pl/d/oferta/serwer-supermicro-r2-dual-e5-sc826-256gb-ram-ecc-ddr4-lrdimm-2400mhz-CID99-ID18To4p.html) first if rack noise is acceptable; otherwise the [7 500 zł Xeon + 2×P100 server](https://allegrolokalnie.pl/oferta/serwer-ai-xeon-2gen-6210u-lga3647-256gb-ram-2x-nvidia-tesla-p100-16gb) remains the cleanest complete path.

## Ranked low-cost leads
### BUY — [Serwer Supermicro R2 dual E5 SC826, 256GB RAM ECC DDR4 LRDIMM 2400MHz](https://www.olx.pl/d/oferta/serwer-supermicro-r2-dual-e5-sc826-256gb-ram-ecc-ddr4-lrdimm-2400mhz-CID99-ID18To4p.html)
- **Price/source/location:** 3 000 zł — OLX — Łódź, Bałuty
- **Why it matters:** Best low-cost base-system lead: 256GB DDR4 LRDIMM in a Supermicro 2U chassis for 3k, leaving budget for cheap P100/V100/MI50 experiments.
- **Missing parts / risk:** Needs exact PCIe riser/GPU clearance, GPU power leads, caddies/IPMI, and noise/placement proof; 2U rack noise may be the deal-killer.
- **Parts/work path:** Verify riser layout, redundant PSU model/wattage, x16 slot availability, caddies, IPMI/BIOS access, fan shroud; pair only with passive datacenter GPUs if airflow path is real.
- **Confidence:** medium; unchanged; freshness: 07 lipca 2026; visible in 256GB ECC search today.

### BUY — [Serwer AI Xeon 2Gen 6210U LGA3647 256GB RAM 2x Nvidia Tesla P100 16GB](https://allegrolokalnie.pl/oferta/serwer-ai-xeon-2gen-6210u-lga3647-256gb-ram-2x-nvidia-tesla-p100-16gb)
- **Price/source/location:** 7 500 zł — Allegro Lokalnie — Graniczna Wieś
- **Why it matters:** Cleanest complete cheap-rig path still visible: 256GB RAM plus 2× P100 16GB already installed for far below Mac Studio money.
- **Missing parts / risk:** Must verify P100 are PCIe not SXM, server airflow, PSU/riser layout, noise, disk/caddies, and live Linux/nvidia-smi/load proof.
- **Parts/work path:** Ask for chassis/motherboard model, riser photos, PSU labels, disk/caddy state, nvidia-smi for both GPUs, temperature/load test, and noise video.
- **Confidence:** medium; unchanged; freshness: current promoted card.

### BUY — [Tesla P100 16GB - Karta graficzna do AI - Gdańsk](https://www.olx.pl/d/oferta/tesla-p100-16gb-karta-graficzna-do-ai-gdansk-CID99-ID1b8SJS.html)
- **Price/source/location:** 650 zł — OLX — Gdańsk, Letnica
- **Why it matters:** Lowest visible single CUDA accelerator price today; good first test card if a suitable airflow host is available.
- **Missing parts / risk:** Likely same/cross-post as 675 zł Lokalnie card; passive PCIe card needs high-airflow server or duct/blower plus load-test proof.
- **Parts/work path:** PCIe x16 host, forced airflow/fan duct, proper PCIe power/adapter, Linux NVIDIA driver/CUDA; accept 16GB VRAM limit.
- **Confidence:** medium; unchanged; freshness: 19 czerwca 2026; visible today.

### PARTS NEEDED — [Tesla P100 16GB - Karta graficzna do AI ML Deep Learning - Gdańsk](https://allegrolokalnie.pl/oferta/tesla-p100-16gb-karta-graficzna-do-ai-gdansk)
- **Price/source/location:** 675 zł — Allegro Lokalnie — Gdańsk
- **Why it matters:** Same low P100 price band with explicit PCI Express listing fields; useful if OLX path is unavailable or buyer protection is better.
- **Missing parts / risk:** Passive datacenter cooling and possible duplicate with OLX 650 zł; require nvidia-smi/load proof and exact power connector photo.
- **Parts/work path:** High-airflow server/workstation, fan duct/blower if tower, PCIe power adapter, CUDA Linux stack.
- **Confidence:** medium; unchanged; freshness: current card; 850→675 zł shown.

### WATCH — [AKCELERATOR TESLA P100 16GB do AI ML Deep Learning](https://www.olx.pl/d/oferta/akcelerator-tesla-p100-16gb-do-ai-ml-deep-learning-CID99-ID1bf4N4.html)
- **Price/source/location:** 699 zł — OLX — Kraków, Podgórze
- **Why it matters:** Another cheap P100 anchor; local Kraków pickup/test could beat shipping risk if the Gdańsk card is gone.
- **Missing parts / risk:** Passive cooling and old Pascal 16GB limit; verify PCIe variant, thermals, power adapter, and seller return/protection path.
- **Parts/work path:** High-airflow 2U/4U or active duct, PCIe power lead/adapter, CUDA-capable Linux host.
- **Confidence:** medium; unchanged; freshness: 27 czerwca 2026; visible today; negotiable/free delivery card.

### PARTS NEEDED — [6 kart p102-100 10gb - LLM, AI gpu ollama vLLM](https://www.olx.pl/d/oferta/6-kart-p102-100-10gb-llm-ai-gpu-ollama-vllm-CID99-ID1bo8QS.html)
- **Price/source/location:** 1 600 zł — OLX — Katowice, Śródmieście
- **Why it matters:** Interesting new low-cost aggregate-VRAM experiment: 6×10GB for 1.6k is cheap if seller proves multi-GPU inference actually works.
- **Missing parts / risk:** Mining-card hassle: 10GB per card, no normal display outputs, many PCIe slots/risers/power leads needed, high power/heat, and software sharding complexity.
- **Parts/work path:** 6-slot board/server or mining frame, risers, strong PSU/cabling, airflow, Linux CUDA test with ollama/vLLM/llama.cpp multi-GPU proof.
- **Confidence:** medium-low; new/unchanged; freshness: 09 lipca 2026; visible in P100 search today.

### WATCH — [Nvidia TESLA V100 16 GB HBM2 PCIe 3.0x16 Akcelerator graficzny AI/ML modele LLM](https://www.olx.pl/d/oferta/nvidia-tesla-v100-16-gb-hbm2-pcie-3-0x16-akcelerator-graficzny-ai-ml-modele-llm-CID99-ID1bll1f.html)
- **Price/source/location:** 2 000 zł — OLX — Wieluń
- **Why it matters:** 2k V100 PCIe is stronger than P100 and worth watching if genuine/tested; still not as cheap per GB as P100.
- **Missing parts / risk:** Only 16GB; must verify PCIe not SXM, no memory errors, thermals under load, and that the low price is not a scam.
- **Parts/work path:** High-airflow server/workstation, PCIe power path, CUDA driver; require nvidia-smi, serial/photo, and load temps.
- **Confidence:** medium-low; unchanged; freshness: 05 lipca 2026; visible today.

### WATCH — [Karta graficzna Nvidia Tesla V100 32GB VRAM HBM2 PCIe AI LLM ML Kraków](https://www.olx.pl/d/oferta/karta-graficzna-nvidia-tesla-v100-32gb-vram-hbm2-pcie-ai-llm-ml-krakow-CID99-ID1amvIU.html)
- **Price/source/location:** 4 000 zł — OLX — Kraków, Podgórze Duchackie
- **Why it matters:** 32GB CUDA VRAM is materially more useful than 16GB cards and still cheaper than many workstation GPUs.
- **Missing parts / risk:** At 4k it competes with RTX 3090 simplicity; verify PCIe not SXM, cooling, load test, and warranty/return route.
- **Parts/work path:** High-airflow host, PCIe power, CUDA Linux; skip if SXM or no thermal/memory-test evidence.
- **Confidence:** medium; unchanged; freshness: 26 czerwca 2026; visible today.

### PARTS NEEDED — [Karta Graficzna AMD Radeon Instinct MI50 16GB serverowa wersja Radeon Pro VII](https://www.olx.pl/d/oferta/karta-graficzna-amd-radeon-instinct-mi50-16gb-serverowa-wersja-radeon-pro-vii-CID99-ID1aFmcu.html)
- **Price/source/location:** 899,99 zł — OLX — Łazy, Śląskie
- **Why it matters:** Cheapest AMD/ROCm learning card still visible; seller states it needs an added fan and BIOS changed to Radeon Pro VII.
- **Missing parts / risk:** Only 16GB, modified BIOS, ROCm/kernel friction; active cooling is explicitly required, so this is experiment-only not a safe main path.
- **Parts/work path:** Add 70mm/server fan or duct, confirm PCIe power, test on Linux ROCm and Windows, verify BIOS/VRAM/temps before paying.
- **Confidence:** medium; unchanged; freshness: 16 czerwca 2026; detail page visible today; seller last online 08 lipca 2026.

### WATCH — [Dell Precision 7910 T7910 2×E5-2630V3, SSD, 256GB RAM, Radeon HD 7870](https://www.olx.pl/d/oferta/dell-precision-7910-t7910-2x-e5-2630v3-ssd-256gb-ram-256gb-radeon-saphire-hd-7870-CID99-ID1aTwHf.html)
- **Price/source/location:** 4 999 zł — OLX — Maruszyna
- **Why it matters:** Quieter/easier 256GB workstation base than rack gear if GPU power/slots check out; pair with cheap P100/V100/MI50.
- **Missing parts / risk:** Old dual Xeon platform and unknown PSU cables/slot spacing; included Radeon is irrelevant for LLMs, negotiate hard.
- **Parts/work path:** Confirm PSU wattage, 2×8-pin/PCIe cables, x16 clearance, DIMM layout, BIOS, and whether passive GPU cooling can be ducted.
- **Confidence:** medium; unchanged; freshness: 01 lipca 2026 / tracked anchor.

## Cheapest build paths

### Ultra-cheap Tesla/old server path
- Cheapest complete path remains the 7 500 zł Xeon LGA3647 server with 256GB RAM and 2× Tesla P100 16GB; verify exact chassis/riser/PSU/airflow and live `nvidia-smi` before treating it as real.
- Cheapest piecemeal path is a 650–699 zł P100 plus the 3 000 zł Supermicro 256GB base, but only if the server has the right risers/GPU power/airflow. Otherwise the cheap card becomes a cooling project.

### AMD Instinct / ROCm path
- Domestic Instinct coverage still only shows the 899,99 zł MI50 16GB; it is useful for ROCm learning but not the preferred 32/64GB MI50/MI60/MI100/MI210 target.
- The MI50 listing explicitly says added cooling is required and BIOS is changed to Radeon Pro VII, so require Linux ROCm proof and temperature evidence.

### Memory-rich EPYC/Xeon base path
- 3 000 zł Supermicro SC826 with 256GB DDR4 LRDIMM is the best RAM/base value today if 2U noise and GPU riser compatibility are acceptable.
- 4 999 zł Dell Precision 7910 with 256GB RAM is the easier tower/workstation route, but needs GPU power/slot confirmation and a separate accelerator.

### Only-if-cheap RTX / odd multi-GPU path
- 6× P102-100 10GB for 1 600 zł is cheap aggregate VRAM but requires many slots/risers/power and proven multi-GPU LLM support; treat as a tinkering path, not a clean buy.
- RTX 3090-class cards remain comparison-only unless clearly below market or included in a cheap 256GB system bundle.

## RAM target notes
- 256GB target is directly met by the Supermicro base, Xeon+2×P100 server, EPYC+3×3060 server from Lokalnie, and Dell Precision 7910 lead.
- For the Supermicro and Dell tower, ask for memory module layout (`dmidecode -t memory` photos/output) so future 512GB expansion is not assumed blindly.
- DDR4 RDIMM/LRDIMM upgrade math only helps if the all-in host+GPU path stays below the 7 500 zł complete P100 server.

## Price/market notes
- Visible cheap P100 band today: 650 zł–699 zł; unchanged from the useful low-cost floor and still the best PLN/usable CUDA card if airflow is solved.
- Visible V100 band today: 2 000 zł–4 000 zł; the 2 000 zł 16GB listing is watchable, the 4 000 zł 32GB card competes with RTX 3090 simplicity.
- 256GB RAM base/system anchors today: 3 000 zł Supermicro base, 4 999 zł Dell Precision tower, 7 500–7 850 zł complete AI server bundles.
- New/noisy lead worth tracking: 6× P102-100 10GB at 1 600 zł in Katowice; price is attractive, operational friction is high.

## Coverage notes
- OLX and Allegro Lokalnie were readable for result cards; OLX MI50 detail was readable. Contact/phone details behind login or masked buttons were not bypassed.
- Main Allegro and eBay were not used for final leads today; coverage is domestic-first and may miss CAPTCHA/login-walled offers.
