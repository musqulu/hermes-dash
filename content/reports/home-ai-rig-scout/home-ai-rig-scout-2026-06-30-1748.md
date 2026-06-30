# Home AI Rig Scout — 2026-06-30 17:48

Early manual pass: OLX already has several RTX 3090 24GB leads; the cleanest first BUY/WATCH target is [ZOTAC RTX 3090 Trinity 24GB for 3 450 zł](https://www.olx.pl/d/oferta/karta-graficzna-zotac-geforce-rtx-3090-trinity-24-gb-CID99-ID18rTmI.html?search_reason=search%7Corganic), pending seller proof and cooling/PSU fit.

## Ranked leads

1. **BUY/WATCH — ZOTAC GeForce RTX 3090 Trinity 24GB — 3 450 zł — OLX / Kalisz**  
   URL: [listing](https://www.olx.pl/d/oferta/karta-graficzna-zotac-geforce-rtx-3090-trinity-24-gb-CID99-ID18rTmI.html?search_reason=search%7Corganic)  
   Why it matters: lowest visible RTX 3090 24GB result in this first OLX pass.  
   Missing parts/risk: needs actual-card photos, stress test, hotspot/VRAM temperature check, and a case/PSU with 750–850W+ quality power and enough airflow.  
   Confidence: medium; listing page not yet inspected in depth.

2. **WATCH — Gigabyte RTX 3090 24GB — 3 600 zł — OLX / Wrocław**  
   URL: [listing](https://www.olx.pl/d/oferta/gigabyte-rtx-3090-24gb-CID99-ID1b9OCb.html?search_reason=search%7Corganic)  
   Why it matters: good 24GB CUDA baseline and local-LLM starter card if condition checks out.  
   Missing parts/risk: confirm exact model, mining history, warranty/invoice, thermals, and PSU/case fit.
   Confidence: medium.

3. **WATCH — Asus RTX 3090 TUF Gaming OC 24GB — 4 450 zł — OLX / Gdańsk**  
   URL: [listing](https://www.olx.pl/d/oferta/asus-rtx-3090-tuf-gaming-oc-24gb-vram-idealny-stan-CID99-ID1bg4ND.html?search_reason=search%7Corganic)  
   Why it matters: TUF cooler is generally a better workstation-friendly 3090 option, but price is meaningfully higher than the cheapest cards.  
   Missing parts/risk: only interesting if seller can prove excellent condition and quiet thermals.
   Confidence: medium.

4. **PARTS NEEDED — Xeon E5-2673 v3 / 128GB DDR4 / RTX 3090 workstation/server — 12 000 zł — OLX / Mińsk Mazowiecki**  
   URL: [listing](https://www.olx.pl/d/oferta/serwer-stacja-robocza-proxmox-ai-render-xeon-e5-2673-v3-24-core-24gb-gpu-128gb-ddr4-rtx-3090-CID99-ID1b8NT9.html?search_reason=search%7Corganic)  
   Why it matters: complete-ish AI/Proxmox box with 128GB RAM and RTX 3090.  
   Missing parts/risk: old Xeon platform; verify exact chassis, PSU, motherboard slots, noise, NVMe, airflow, and whether price beats buying a 3090 plus separate workstation.
   Confidence: low/medium until full specs checked.

5. **WATCH — i9-14900 / RTX 3090 / 96GB RAM workstation — 7 000 zł — OLX / Luzino**  
   URL: [listing](https://www.olx.pl/d/oferta/komputer-stacja-robocza-intel-14900-rtx-3090-96gb-ram-CID99-ID1bdTwB.html?search_reason=search%7Corganic)  
   Why it matters: may be a practical desktop-first route if real and complete.  
   Missing parts/risk: 96GB RAM is okay but not ideal; confirm PSU, cooler, motherboard, storage, OS, and whether the 3090 is healthy.
   Confidence: low/medium.

## Parts-to-buy map

- **Easiest 3090 workstation path:** RTX 3090 24GB + quiet tower + 750–1000W quality PSU + 128GB system RAM target + NVMe model drive + Linux/CUDA setup.
- **48GB NVIDIA path:** RTX A6000 for quiet workstation use; A40 only with high-airflow server chassis or dedicated blower/fan duct.
- **AMD/ROCm experimental path:** MI50/MI60/MI100/MI210 only if the listing is clearly cheap and PCIe, not SXM/OAM; plan for Linux, ROCm version checks, and server-grade airflow.
- **Rack/server path:** Supermicro/Dell GPU server only if risers, GPU power cables, caddies, PSUs, rails/noise plan, and BIOS support are included.

## Price/market notes

Initial OLX RTX 3090 visible band: ~3 450–4 450 zł for standalone 24GB cards; complete systems visible from ~7 000 zł to 12 000 zł. No history yet, so this is a baseline rather than a trend.

## Coverage notes

This is an initial manual seed from OLX RTX 3090 search only. The scheduled daily cron is configured to cover OLX, Allegro, Allegro Lokalnie, and eBay with the full GPU/server query set.
