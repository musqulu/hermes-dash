# Home AI Rig Scout Setup — 2026-06-30

Daily source: [OLX Poland](https://www.olx.pl/), [Allegro](https://allegro.pl/), [Allegro Lokalnie](https://allegrolokalnie.pl/), and eBay EU/UK/US when shipping/import risk is acceptable.

This page is the buy-board for slowly building a home AI rig. Reports should mark each listing as **BUY**, **WATCH**, **PARTS NEEDED**, or **SKIP**, and explain the exact missing hardware needed to make the setup work.

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

- **Best simple path:** RTX 3090 24GB in a workstation tower first; later add a second 3090 if cooling/PSU allows.
- **Best 48GB path:** RTX A6000 for quiet workstation use, A40 for server chassis only.
- **Best experimental value:** MI50/MI60/MI100/MI210 only when the discount clearly compensates for ROCm and server-part friction.
- **Avoid by default:** SXM cards without matching server/baseboard, passive cards sold as drop-in desktop GPUs, PowerEdge/Supermicro listings without risers/PSUs/caddies, vague “untested” accelerators.

## Desired Telegram output

Keep messages brief: up to 10 items, one line each, direct link, verdict, price, and the single most important missing part/risk. No operational build logs or saved paths.
