# Home AI Rig Scout Setup — 2026-06-30

Daily source: [OLX Poland](https://www.olx.pl/), [Allegro](https://allegro.pl/), [Allegro Lokalnie](https://allegrolokalnie.pl/), and eBay EU/UK/US when shipping/import risk is acceptable.

This page is the buy-board for slowly building a **lowest-possible-cost test rig** that can be a much cheaper alternative to a Mac Studio. Aim for roughly **256GB system RAM** if deals allow, accept less when the base platform is cheap and upgradeable, and prioritize cheap server/workstation/accelerator paths over expensive RTX-first builds. Reports should mark each listing as **BUY**, **WATCH**, **PARTS NEEDED**, or **SKIP**, and explain the exact missing hardware needed to make the setup work.

## What to scout

### GPUs / accelerators

- AMD Instinct MI50 32GB — WATCH/BUY only if priced low enough to justify ROCm quirks, blower/server cooling, power cables, and Linux-only setup.
- AMD Instinct MI60 32GB — WATCH/BUY for cheap FP16/ROCm compute; confirm model is 32GB HBM2, cooling shroud, and power connector layout.
- Tesla P40 24GB — WATCH budget inference card; needs forced airflow, usually no display out, Pascal-era CUDA limits, and often EPS-to-PCIe power planning.
- Tesla P100 16GB — WATCH only if very cheap; 16GB VRAM limits modern LLM use and many units are SXM2 rather than PCIe.
- RTX 3090 24GB — BUY candidate if price/condition are good; easiest local-LLM path, consumer cooling, broad CUDA support.
- RTX A6000 48GB — BUY/WATCH for 48GB VRAM if price is sane; workstation-friendly, lower power than 3090 pairs, usually easiest 48GB option.
- NVIDIA A40 48GB — WATCH/BUY for server builds; passive cooling, no display, needs strong chassis airflow.
- AMD MI100 32GB — WATCH; check ROCm compatibility and cooling/power parts.
- AMD MI210 64GB — BUY/WATCH for 64GB VRAM if not overpriced; likely datacenter cooling/power requirements.

### Base systems / chassis

- Dell Precision 7920
- HP Z8 G4
- Lenovo ThinkStation P920
- Supermicro GPU server
- 4 GPU server
- EPYC server
- EPYC workstation
- Dell PowerEdge GPU

## Compatibility checklist every report should answer

1. **Form factor:** PCIe vs SXM/OAM; reject SXM unless a matching baseboard/server is included.
2. **Cooling:** active blower vs passive datacenter card; passive GPUs need a GPU server chassis or custom fan duct.
3. **Power:** GPU wattage, required 6/8-pin/CPU EPS adapters, PSU capacity, redundant PSU compatibility.
4. **Motherboard slots:** physical x16 clearance, slot spacing, bifurcation/riser support, Above 4G decoding / Resizable BAR where relevant.
5. **CPU/RAM/storage baseline:** enough PCIe lanes, at least 128GB system RAM target over time, NVMe boot plus model storage.
6. **Software:** CUDA/driver support for NVIDIA; ROCm support for AMD; Linux preferred; Windows only for workstation GPUs if practical.
7. **Noise/heat:** server chassis can be loud; workstation tower preferred for home unless rack/garage placement is available.
8. **Seller risk:** photos of actual card, service tag/part number, invoice/warranty, stress-test proof, return option, public phone/contact method when visible.

## Default buy guidance

- **Best cheap base path:** used EPYC/Xeon workstation/server with 128–256GB+ DDR4 RDIMM/LRDIMM first, then add accelerators after confirming slots, risers, PSUs, airflow, and noise.
- **Best experimental value:** Tesla P40/P100 or MI50/MI60/MI100/MI210 only when the complete support stack is still much cheaper than a Mac Studio and the card is PCIe, not SXM/OAM.
- **RTX rule:** RTX 3090 is easy CUDA but usually expensive; include as BUY only when clearly under market or bundled into a strong-value full system.
- **Best 48GB path:** RTX A6000/A40 only if unusually cheap; A40 needs server airflow.
- **Avoid by default:** SXM cards without matching server/baseboard, passive cards sold as drop-in desktop GPUs, PowerEdge/Supermicro listings without risers/PSUs/caddies, vague “untested” accelerators.

## Desired Telegram output

Keep messages brief: up to 10 items, one line each, direct link, verdict, price, and the single most important missing part/risk. No operational build logs or saved paths.
