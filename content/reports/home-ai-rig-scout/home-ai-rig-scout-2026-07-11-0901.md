# Home AI Rig Scout — 2026-07-11 09:01
Best low-cost action today: call/check the [Xeon 256GB + 2× Tesla P100 server](https://allegrolokalnie.pl/oferta/serwer-ai-xeon-2gen-6210u-lga3647-256gb-ram-2x-nvidia-tesla-p100-16gb) first; if it proves real, it is the cleanest complete cheap rig path at 7 500 zł.

## Ranked low-cost leads
### BUY — [Serwer AI Xeon 2Gen 6210U LGA3647 256GB RAM 2x Nvidia Tesla P100 16GB](https://allegrolokalnie.pl/oferta/serwer-ai-xeon-2gen-6210u-lga3647-256gb-ram-2x-nvidia-tesla-p100-16gb)
- **Price/source/location:** 7 500 zł — Allegro Lokalnie — Graniczna Wieś
- **Why it matters:** Best complete low-cost path found today: 256GB RAM base plus 2× P100 16GB already in one server; avoids buying chassis/risers/PSU separately.
- **Missing parts / risk:** Must verify exact chassis airflow, P100 PCIe not SXM, PSU/riser layout, noise, disk/caddies, Linux CUDA test and whether GPUs are actually included/working.
- **Confidence:** medium; new/unchanged; freshness: current result card, promoted.

### WATCH — [Serwer AI Epyc 7551P 32c/64t 256GB RAM 3x GeForce 3060 12GB Ollama](https://allegrolokalnie.pl/oferta/serwer-ai-epyc-7551p-32c64t-256gb-ram-3x-geforce-3060-12gb-ollama)
- **Price/source/location:** 7 850 zł — Allegro Lokalnie — Graniczna Wieś
- **Why it matters:** 256GB EPYC base with 36GB aggregate CUDA VRAM; useful if the full system is proven stable and cheaper than assembling a 256GB base + GPUs.
- **Missing parts / risk:** RTX 3060 12GB cards are less attractive for large local LLMs; verify board slots/risers, PSU cabling, cooling/noise, disk, and exact multi-GPU inference workflow.
- **Confidence:** medium; new/unchanged; freshness: current result card, promoted.

### BUY — [Tesla P100 16GB - Karta graficzna do AI ML Deep Learning - Gdańsk](https://allegrolokalnie.pl/oferta/tesla-p100-16gb-karta-graficzna-do-ai-gdansk)
- **Price/source/location:** 675 zł — Allegro Lokalnie — Gdańsk
- **Why it matters:** Very cheap CUDA/HBM2 test accelerator; good for a low-risk single-card experiment or adding to a proper server chassis.
- **Missing parts / risk:** Passive datacenter card: needs high-airflow server or active blower/duct, PCIe power compatibility, and proof with nvidia-smi/load test.
- **Confidence:** medium; unchanged; freshness: current result card, promoted, -20% shown.

### BUY — [Tesla P100 16GB - Karta graficzna do AI - Gdańsk](https://www.olx.pl/d/oferta/tesla-p100-16gb-karta-graficzna-do-ai-gdansk-CID99-ID1b8SJS.html)
- **Price/source/location:** 650 zł — OLX — Gdańsk, Letnica
- **Why it matters:** Lowest visible P100 price today; overlaps with Allegro Lokalnie lead and should be checked as the same seller/listing before acting.
- **Missing parts / risk:** Likely passive PCIe P100; needs airflow/duct and seller proof; duplicate/cross-post risk with the 675 zł Allegro Lokalnie listing.
- **Confidence:** medium; unchanged; freshness: 19 czerwca 2026.

### WATCH — [AKCELERATOR TESLA P100 16GB do AI ML Deep Learning](https://www.olx.pl/d/oferta/akcelerator-tesla-p100-16gb-do-ai-ml-deep-learning-CID99-ID1bf4N4.html)
- **Price/source/location:** 699 zł — OLX — Kraków, Podgórze
- **Why it matters:** Another cheap P100, negotiable; useful if Gdańsk card is gone or seller can provide better proof.
- **Missing parts / risk:** Passive cooling and old Pascal CUDA limits; verify PCIe variant, thermals, and return/protection path.
- **Confidence:** medium; unchanged; freshness: 27 czerwca 2026.

### WATCH — [Nvidia TESLA V100 16 GB HBM2 PCIe 3.0x16 Akcelerator graficzny AI/ML modele LLM](https://www.olx.pl/d/oferta/nvidia-tesla-v100-16-gb-hbm2-pcie-3-0x16-akcelerator-graficzny-ai-ml-modele-llm-CID99-ID1bll1f.html)
- **Price/source/location:** 2 000 zł — OLX — Wieluń
- **Why it matters:** V100 is materially stronger than P100 for CUDA experiments; 2k PLN is worth watching if genuine PCIe and tested.
- **Missing parts / risk:** Still only 16GB VRAM; must verify not SXM, proper cooling, no memory errors, and whether price is real vs too-good-to-be-true.
- **Confidence:** medium-low; new/unchanged; freshness: 05 lipca 2026.

### PARTS NEEDED — [AMD Radeon Instinct MI50 16GB serverowa wersja Radeon Pro VII](https://www.olx.pl/d/oferta/karta-graficzna-amd-radeon-instinct-mi50-16gb-serverowa-wersja-radeon-pro-vii-CID99-ID1aFmcu.html)
- **Price/source/location:** 899,99 zł — OLX — Łazy
- **Why it matters:** Cheap ROCm experiment card, but it is 16GB not the preferred MI50/MI60 32GB target.
- **Missing parts / risk:** ROCm support/kernel friction and passive cooling; require Linux/ROCm proof, exact memory size, PCIe card, and fan/duct/server airflow.
- **Confidence:** medium-low; unchanged; freshness: 16 czerwca 2026.

### WATCH — [Dell Precision 7910 T7910 2× E5-2630v3, SSD, 256GB RAM, Radeon HD 7870](https://www.olx.pl/d/oferta/dell-precision-7910-t7910-2x-e5-2630v3-ssd-256gb-ram-256gb-radeon-saphire-hd-7870-CID99-ID1aTwHf.html)
- **Price/source/location:** 4 999 zł — OLX — Maruszyna
- **Why it matters:** 256GB RAM workstation base under 5k; could host a cheap P100/V100/MI50 if PSU/cooling/slots check out.
- **Missing parts / risk:** Old dual Xeon platform, weak included GPU, unknown PSU GPU cables/slots and noise; negotiate hard because GPU still must be added.
- **Confidence:** medium; unchanged; freshness: 01 lipca 2026.

### WATCH — [Dell Precision Tower 7910 128GB Quadro P4000](https://www.olx.pl/d/oferta/dell-precision-tower-7910-128gb-quadro-p4000-CID99-ID1aXtla.html)
- **Price/source/location:** 3 400 zł — OLX — Warszawa, Bielany
- **Why it matters:** Cheaper 128GB workstation base; may be an upgradeable route to 256GB if DDR4 RDIMM slots are populated sparsely.
- **Missing parts / risk:** Needs RAM slot/population details, PSU/cable check, and GPU upgrade; P4000 is not enough VRAM for the goal.
- **Confidence:** medium; new/unchanged; freshness: 07 lipca 2026.

### SKIP — [Dell Precision Tower T7920 2× Xeon Gold 6150, 512GB RAM, RTX A2000, 4TB NVMe, UPS](https://www.olx.pl/d/oferta/dell-precision-tower-t7920-2-xeon-gold-6150-512-gb-ram-ecc-ddr4-rtx-a2000-ssd-nvme-4-tb-ups-2-7-kw-i-mocna-stacja-robocza-dell-workstation-CID99-ID1bgDcc.html)
- **Price/source/location:** 22 500 zł — OLX — Kraków, Prądnik Biały
- **Why it matters:** Useful price intel for high-memory workstations, but not a lowest-cost Mac Studio alternative.
- **Missing parts / risk:** Too much capital locked in RAM/NVMe/UPS and weak A2000 VRAM; only revisit after a massive price cut.
- **Confidence:** high; unchanged; freshness: odświeżono 08 lipca 2026.

## Cheapest build paths

### Ultra-cheap Tesla/old server path
- Best complete candidate: 7 500 zł Xeon 2nd gen LGA3647 server with 256GB RAM and 2× Tesla P100 16GB. Ask for `nvidia-smi`, stress/load test, exact chassis, risers, PSU model, fan noise video, disk/caddy state, and whether both P100 are PCIe cards.
- Cheapest piecemeal card: OLX/Allegro Lokalnie Tesla P100 around 650–699 zł. Needs a high-airflow rack/workstation path, 6/8-pin power compatibility, and fan duct/blower if not inside a server.

### AMD Instinct / ROCm path
- Only visible domestic Instinct lead today was MI50 16GB at 899,99 zł, not the desired 32GB MI50/MI60/MI100/MI210 class. Treat as experiment-only until seller proves ROCm/Linux and exact memory size.
- Parts to watch: MI50/MI60 32GB PCIe, MI100 32GB PCIe, MI210 64GB PCIe; avoid SXM/OAM unless matching server/baseboard is included.

### Memory-rich EPYC/Xeon base path
- 4 999 zł Dell Precision 7910 with 256GB RAM is the reasonable base-machine lead, but still needs a proper accelerator and PSU/cooling checks.
- 3 400 zł Dell Precision 7910 with 128GB RAM is the cheaper expandable watch if RAM slots and RDIMM upgrade cost are favorable.

### Only-if-cheap RTX path
- EPYC 7551P 256GB + 3× RTX 3060 12GB at 7 850 zł is watchable as a complete CUDA box, but 12GB cards are not ideal for the large-memory goal.
- Skip expensive workstation/RTX-style builds unless they deliver much better total PLN per usable VRAM than the P100/server paths.

## RAM target notes
- Target 256GB is met by the two Allegro Lokalnie AI servers and the Dell Precision 7910 256GB lead.
- 128GB path is acceptable only if upgrade slots are open and DDR4 RDIMM/LRDIMM pricing keeps the all-in build below the complete 7 500 zł server.
- For each base system, ask for memory module layout photos/output (`dmidecode -t memory`) before assuming easy expansion.

## Price/market notes
- Visible P100 single-card band today: 650 zł–7 500 zł for domestic OLX/Allegro Lokalnie cards; this is the cheapest actionable VRAM path but requires airflow.
- Visible complete 256GB AI server band today: 7 500–7 850 zł for 256GB RAM plus included GPUs on Allegro Lokalnie.
- V100 16GB at 2 000 zł is interesting only if genuine PCIe and tested; otherwise P100 remains lower-risk cost floor.
- High-memory premium workstation intel: T7920 512GB at 22 500 zł is not aligned with the low-cost goal.

## Coverage notes
- OLX and Allegro Lokalnie listing cards were readable today. Main Allegro was not used for final leads because prior/main-marketplace access can hit bot protection; no details were fabricated.
- Search coverage emphasized Poland/domestic listings; eBay import leads were not included because domestic candidates were stronger and import risk would need explicit shipping/VAT checks.
