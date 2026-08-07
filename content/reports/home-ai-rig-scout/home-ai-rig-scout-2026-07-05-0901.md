# Home AI Rig Scout — 2026-07-05 09:01
Best low-cost action today: if you want to actually start the cheap rig path, ask for proof/demo on the 650 zł OLX Tesla P100 and only buy with a solved airflow host plan: [Tesla P100 Gdańsk](https://www.olx.pl/d/oferta/tesla-p100-16gb-karta-graficzna-do-ai-gdansk-CID99-ID1b8SJS.html).

## Ranked low-cost leads

1. **BUY — Tesla P100 16GB - Karta graficzna do AI - Gdańsk** — 650 zł, OLX, Gdańsk/Letnica — [link](https://www.olx.pl/d/oferta/tesla-p100-16gb-karta-graficzna-do-ai-gdansk-CID99-ID1b8SJS.html). Cheapest confirmed CUDA accelerator path; missing/risk: passive PCIe cooling, 8-pin power, high-airflow server/chassis or blower duct, and seller `nvidia-smi` + load proof. Confidence: medium.
2. **PARTS NEEDED — Tesla P100 16GB - Karta graficzna do AI ML Deep Learning - Gdańsk** — 675 zł, Allegro Lokalnie, Gdańsk — [link](https://allegrolokalnie.pl/oferta/tesla-p100-16gb-karta-graficzna-do-ai-gdansk). Current card shows 850 → 675 zł; likely same low P100 band; missing/risk: passive cooling and seller proof. Confidence: medium.
3. **BUY — AKCELERATOR TESLA P100 16GB do AI ML Deep Learning** — 699 zł, OLX, Kraków/Podgórze — [link](https://www.olx.pl/d/oferta/akcelerator-tesla-p100-16gb-do-ai-ml-deep-learning-CID99-ID1bf4N4.html). Good local-pickup alternative to Gdańsk P100; missing/risk: passive cooling + PCIe power path and proof under `nvidia-smi` load. Confidence: medium.
4. **PARTS NEEDED — AMD Radeon Instinct MI50 16GB serwerowa wersja Radeon Pro VII** — 899,99 zł, Allegro Lokalnie/OLX mirror, Łazy — [link](https://allegrolokalnie.pl/oferta/amd-radeon-instinct-mi50-16gb-serwerowa-wersja-radeon-pro-vii-coe). Cheapest AMD Instinct lead seen; missing/risk: passive cooling plus ROCm/Vega support friction; buy only if AMD path tinkering is the goal. Confidence: medium.
5. **WATCH — AMD EPYC 7551 Dual CPU 64C/128T | 32GB ECC | Supermicro H11DSi** — 1 600 zł, OLX, Twardowice — [link](https://www.olx.pl/d/oferta/amd-epyc-7551-dual-cpu-64c-128t-32gb-ecc-supermicro-h11dsi-CID99-ID1bc3Lh.html). Cheap EPYC board/CPU base; missing/risk: not a system; needs SSI-EEB/EEB chassis, PSU, coolers, storage, and lots of DDR4 ECC. Confidence: medium.
6. **WATCH — Dell Precision 7910 T7910 2× E5-2630V3 / 256GB RAM** — 4 999 zł, OLX, Maruszyna — [link](https://www.olx.pl/d/oferta/dell-precision-7910-t7910-2x-e5-2630v3-ssd-256gb-ram-256gb-radeon-saphire-hd-7870-CID99-ID1aTwHf.html). Cheapest complete 256GB RAM workstation lead; missing/risk: old Xeon platform and unknown GPU power/slot/cooling suitability for P100/P40. Confidence: medium.
7. **SKIP / price intel — Dell Precision Tower T7920 512GB RAM ECC / RTX A2000 / 4TB NVMe / UPS** — 22 500 zł, OLX, Kraków — [link](https://www.olx.pl/d/oferta/dell-precision-tower-t7920-2-xeon-gold-6150-512-gb-ram-ecc-ddr4-rtx-a2000-ssd-nvme-4-tb-ups-2-7-kw-i-mocna-stacja-robocza-dell-workstation-CID99-ID1bgDcc.html). High-RAM workstation price intel; missing/risk: not low-cost, RTX A2000 is weak VRAM value, storage/UPS inflate price. Confidence: medium.
8. **WATCH — Karta graficzna RTX3090 24GB / Zotac Trinity** — 3 499,99 zł, Allegro Lokalnie, Bartoszyce — [link](https://allegrolokalnie.pl/oferta/karta-graficznanvidiageforcertx3090-24gbtrinity). Cheapest RTX 3090 card found today; missing/risk: sparse card, verify exact model, mining/thermal history, warranty/FV and load demo. Confidence: medium-low.
9. **WATCH / price intel — AI RTX 3090 24GB karta z pudełkiem** — 4 400 zł, Allegro Lokalnie, Warszawa Praga-Południe — [link](https://allegrolokalnie.pl/oferta/ai-rtx-3090-24gb-karta-z-oryginalnym-z-pudelkiem). RTX 3090 price band intel only; missing/risk: not cheap enough unless local proof/warranty is unusually strong. Confidence: medium-low.

## Cheapest build paths

- **Ultra-cheap Tesla P100 path:** start with 650–699 zł Tesla P100 16GB PCIe, then find a noisy/high-airflow 2U/4U server or tower with reliable PCIe power. Required parts: 8-pin power compatibility, high static-pressure fan/duct if tower-mounted, Linux + NVIDIA driver/CUDA stack, seller `nvidia-smi` proof and short load test. Best today: [OLX P100 650 zł](https://www.olx.pl/d/oferta/tesla-p100-16gb-karta-graficzna-do-ai-gdansk-CID99-ID1b8SJS.html).
- **AMD Instinct/ROCm path:** MI50 at ~900 zł is cheap, but ROCm support on Vega-era Instincts is more fragile. Required parts: high airflow, Linux distro/ROCm version check, acceptance that 16GB VRAM limits model size. Best today: [MI50 Łazy](https://allegrolokalnie.pl/oferta/amd-radeon-instinct-mi50-16gb-serwerowa-wersja-radeon-pro-vii-coe).
- **Memory-rich base path:** the [Dell Precision 7910 256GB](https://www.olx.pl/d/oferta/dell-precision-7910-t7910-2x-e5-2630v3-ssd-256gb-ram-256gb-radeon-saphire-hd-7870-CID99-ID1aTwHf.html) is the simplest full-system lead at 4 999 zł, but GPU power/slot/airflow must be proven. The [EPYC/Supermicro bundle](https://www.olx.pl/d/oferta/amd-epyc-7551-dual-cpu-64c-128t-32gb-ecc-supermicro-h11dsi-CID99-ID1bc3Lh.html) is cheaper at 1 600 zł but becomes a parts project.
- **Only-if-cheap RTX path:** RTX 3090 should only be considered if it is near/under 3.5k with proof. Current normal Allegro Lokalnie band is ~4.4–4.8k, which is not the cheapest test-rig route.

## RAM target notes

- The cleanest 256GB included-RAM lead remains the Dell Precision 7910 at 4 999 zł; ask for exact DIMM layout, remaining slots, PSU wattage, PCIe x16 slot clearance, and whether two 8-pin GPU leads are present.
- EPYC/Supermicro H11DSi bundle includes only 32GB; likely target is 8×32GB DDR4 ECC RDIMM or 4×64GB if board/CPU supports the specific modules. Current observed RAM add-ons in history: 32GB ECC around 350 zł/stick and 64GB DDR4 ECC around 600 zł/stick, but compatibility must be checked before buying.
- High-RAM T7920 at 22.5k/512GB is useful market data, but not aligned with the low-cost Mac Studio alternative goal.

## Price/market notes

- Tesla P100 16GB: repeatedly observed 650–699 zł low band; 849–900 zł cards are worse unless they include invoice/adapter/local test value.
- MI50 16GB: stable around 899,99 zł; not enough VRAM advantage over P100 to compensate for ROCm friction unless AMD experiments matter.
- EPYC/Supermicro H11DSi bundle: history shows a prior 2 000 → 1 600 zł drop; still parts-heavy.
- RTX 3090: Allegro Lokalnie current visible cards cluster mostly 4 400–4 850 zł, with one sparse Zotac/Trinity at 3 499,99 zł; use 3.5k as the watch threshold.
- Precision high-RAM systems: 7910/256GB at 4 999 zł is still the practical low-cost workstation reference; T7920/512GB listings are price intel, not BUY candidates.

## Coverage notes

- OLX was readable via browser result pages, though searches are noisy and not every detail page was opened.
- Allegro Lokalnie result cards were readable despite the cookie modal; seller type/location/price captured from cards.
- Main Allegro was blocked by DataDome CAPTCHA today, so coverage there is limited.
- eBay Poland returned an error page for the test search, so no eBay leads were included.
