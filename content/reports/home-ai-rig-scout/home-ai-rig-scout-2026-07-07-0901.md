# Home AI Rig Scout — 2026-07-07 09:01
Best low-cost action today: keep the Tesla P100 16GB path as the cheapest usable CUDA experiment, led by [OLX Gdańsk 650 PLN](https://www.olx.pl/d/oferta/tesla-p100-16gb-karta-graficzna-do-ai-gdansk-CID99-ID1b8SJS.html), but only with proper passive-card airflow.

## Ranked low-cost leads
1. **PARTS NEEDED — [Tesla P100 16GB - Karta graficzna do AI - Gdańsk](https://www.olx.pl/d/oferta/tesla-p100-16gb-karta-graficzna-do-ai-gdansk-CID99-ID1b8SJS.html)** — 650 PLN, OLX / Pomorskie, Gdańsk, Letnica. Why: best cheap CUDA/16GB VRAM path; PCIe passive datacenter card needs server airflow or fan duct. Missing/risk: passive cooling, PCIe power/adapter, CUDA 12-era support limits; ask for nvidia-smi/load proof. Confidence: medium.
2. **PARTS NEEDED — [Tesla P100 16GB - Karta graficzna do AI ML Deep Learning - Gdańsk](https://allegrolokalnie.pl/oferta/tesla-p100-16gb-karta-graficzna-do-ai-gdansk)** — 675 PLN, Allegro Lokalnie. Why: best cheap CUDA/16GB VRAM path; PCIe passive datacenter card needs server airflow or fan duct. Missing/risk: passive cooling, PCIe power/adapter, CUDA 12-era support limits; ask for nvidia-smi/load proof. Confidence: medium.
3. **PARTS NEEDED — [AKCELERATOR TESLA P100 16GB do AI ML Deep Learning](https://allegrolokalnie.pl/oferta/akcelerator-tesla-p100-16gb-do-ai-ml-deep-learning)** — 699 PLN, Allegro Lokalnie. Why: best cheap CUDA/16GB VRAM path; PCIe passive datacenter card needs server airflow or fan duct. Missing/risk: passive cooling, PCIe power/adapter, CUDA 12-era support limits; ask for nvidia-smi/load proof. Confidence: medium.
4. **PARTS NEEDED — [NVIDIA Tesla P100 16GB 732GB/s HBM2 PCIe](https://allegrolokalnie.pl/oferta/nvidia-tesla-p100-16gb-pcie)** — 849 PLN, Allegro Lokalnie. Why: best cheap CUDA/16GB VRAM path; PCIe passive datacenter card needs server airflow or fan duct. Missing/risk: passive cooling, PCIe power/adapter, CUDA 12-era support limits; ask for nvidia-smi/load proof. Confidence: medium.
5. **PARTS NEEDED — [NVIDIA Tesla P100 16GB HBM2 + adapter | AI / Deep Learning FV 23%](https://www.olx.pl/d/oferta/nvidia-tesla-p100-16gb-hbm2-adapter-ai-deep-learning-fv-23-CID99-ID1agb19.html)** — 850 PLN, OLX / Małopolskie, Czerna. Why: best cheap CUDA/16GB VRAM path; PCIe passive datacenter card needs server airflow or fan duct. Missing/risk: passive cooling, PCIe power/adapter, CUDA 12-era support limits; ask for nvidia-smi/load proof. Confidence: medium.
6. **PARTS NEEDED — [NVIDIA Tesla P100 16GB HBM2 + adapter | AI / Deep Learning FV 23%](https://allegrolokalnie.pl/oferta/nvidia-tesla-p100-16gb-hbm2-adapter-or-ai-deep-learning)** — 900 PLN, Allegro Lokalnie. Why: best cheap CUDA/16GB VRAM path; PCIe passive datacenter card needs server airflow or fan duct. Missing/risk: passive cooling, PCIe power/adapter, CUDA 12-era support limits; ask for nvidia-smi/load proof. Confidence: medium.
7. **PARTS NEEDED — [NVIDIA Tesla P100 16GB HBM2 + adapter | AI  FV 23% / Learnin](https://www.olx.pl/d/oferta/nvidia-tesla-p100-16gb-hbm2-adapter-ai-fv-23-learnin-CID99-ID1a4iNL.html)** — 1000 PLN, OLX / Małopolskie, Czerna. Why: best cheap CUDA/16GB VRAM path; PCIe passive datacenter card needs server airflow or fan duct. Missing/risk: passive cooling, PCIe power/adapter, CUDA 12-era support limits; ask for nvidia-smi/load proof. Confidence: medium.
8. **PARTS NEEDED — [Karta graficzna TESLA P100, 16GB](https://allegrolokalnie.pl/oferta/karta-graficzna-tesla-p100-16gb-qhq)** — 1200 PLN, Allegro Lokalnie. Why: best cheap CUDA/16GB VRAM path; PCIe passive datacenter card needs server airflow or fan duct. Missing/risk: passive cooling, PCIe power/adapter, CUDA 12-era support limits; ask for nvidia-smi/load proof. Confidence: medium.
9. **WATCH — [Rezerwacja Flagowa Stacja HP Z820 | Do Projektowania / 3D | 2x Xeon 12 rdzeni | Zasilacz 1125W | Win | Serwer / Homelab](https://www.olx.pl/d/oferta/rezerwacja-flagowa-stacja-hp-z820-do-projektowania-3d-2x-xeon-12-rdzeni-zasilacz-1125w-win-serwer-homelab-CID99-ID1bidCY.html)** — 400 PLN, OLX / Mazowieckie, Chylice-Kolonia. Why: very cheap workstation shell with strong PSU for old Xeon/RDIMM experiments. Missing/risk: old DDR3 platform; confirm RAM amount, PSU cables, PCIe slots, and whether reservation still available. Confidence: medium.
10. **WATCH — [Stacja robocza workstation HP Z820 Xeon e5 2620 V2 Quadro K4000](https://www.olx.pl/d/oferta/stacja-robocza-workstation-hp-z820-xeon-e5-2620-v2-quadro-k4000-CID99-ID1bmltr.html)** — 820 PLN, OLX / Wielkopolskie, Poznań, Naramowice. Why: very cheap workstation shell with strong PSU for old Xeon/RDIMM experiments. Missing/risk: old DDR3 platform; confirm RAM amount, PSU cables, PCIe slots, and whether reservation still available. Confidence: medium.

## Cheapest build paths
- **Ultra-cheap Tesla/old-server path:** Tesla P100 at 650–900 PLN plus a cheap high-airflow 2U/tower server. Needs PCIe slot spacing, 8-pin/EPS-to-PCIe power plan, forced airflow/fan duct, Linux + CUDA validation. Best for cheapest “does local inference work?” experiments, not quiet daily use.
- **AMD Instinct/ROCm path:** no strong MI50/MI60/MI100/MI210 listing surfaced on accessible OLX/Allegro Lokalnie pages today. Keep watching because 32–64GB VRAM can beat RTX economics, but ROCm compatibility and passive cooling must be verified per card generation.
- **Memory-rich Xeon base path:** Dell Precision 7910 with 256GB RAM at 4,999 PLN is the cleanest visible 256GB base; HP Z820 shells at 400–820 PLN are cheap but DDR3/older and need RAM/spec verification.
- **Only-if-cheap RTX path:** RTX 3090 floor remains roughly 3,450–3,600 PLN locally. Simpler cooling/CUDA than datacenter cards but worse PLN/VRAM than Tesla P100; buy only with load-test proof and no mining/thermal red flags.

## RAM target notes
- 256GB target is most realistic through used DDR4 RDIMM workstations/servers (Precision 7910/7920, HP Z8 G4, R730-class, EPYC boards).
- Cheap HP Z820-class deals can be useful for learning/homelab, but DDR3 and older CPUs make them weaker long-term bases unless the price includes lots of RAM and PSU/GPU cabling.
- The visible standalone 128GB DDR4 LRDIMM kit at 1,599 PLN is useful price intel, but must match platform support; do not mix RDIMM/LRDIMM blindly.

## Price/market notes
- **Tesla P100:** observed history range 650–11000 PLN across 10 tracked listings.
- **RTX 3090:** observed history range 3450–12000 PLN across 18 tracked listings.
- **256GB workstations:** observed history range 4999–5500 PLN across 2 tracked listings.
- No meaningful price drops detected among re-seen top leads today; main value is newly visible cheap base-system candidates and continued P100 availability.

## Coverage notes
- OLX direct result pages were accessible, but result quality is noisy; irrelevant cars, laptops, mini PCs, fans, and office desktops were filtered out.
- Allegro Lokalnie exposed Tesla P100 cards via JSON-LD, then later queries hit HTTP 429; coverage is partial.
- Main Allegro was not materially covered in this run; eBay search returned HTTP 403, so no import-risk leads were included.
