## Hermes workflow scout — 2026-06-15

- Krótki werdykt dnia: Dzisiejszy najlepszy kierunek to nie „kolejny agent”, tylko **operacyjny system wokół agentów**: kolejki zadań, artefakty, dashboard, ręczne akceptacje i kanał Telegram/Slack do pytań. Najbardziej użyteczne źródła są dziś z GitHuba i HN; X/Reddit były w tej sesji zablokowane albo niedostępne przez anty-bot/403, więc nie traktuję braku wyników z tych kanałów jako sygnału rynkowego. Najmocniejsze do odtworzenia w Hermesie: lead-gen + outreach, agentic SEO, multi-agent fleet, social/X automation i własny dashboard statusów.

## Top workflowy / use case'y

1. **B2B lead-gen agent: firma → research → personalizowany cold email**
   - Źródło: [GitHub / byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent) — dobre źródło techniczne; README pokazuje webhook, Gemini, Tavily, scraper i JSON pipeline, ale nie podaje zweryfikowanych metryk biznesowych.
   - Co robi: Przyjmuje `company_name` i `website` przez webhook, robi research firmy, analizuje value proposition / produkt / technologię i generuje spersonalizowany outreach.
   - Jak odtworzyć w Hermesie: `hermes webhook subscribe lead-research`, skill „lead-research”, toolset `web`, zapis do Google Sheet/CSV przez terminal/API, opcjonalnie cron do dziennej kolejki leadów; Telegram gateway do ręcznej akceptacji maili przed wysyłką.
   - Potencjał biznesowy: sales/lead generation; skraca ręczny research przed cold emailem i pozwala budować pipeline do niszowych usług agencyjnych.
   - Ryzyko/uwaga: wymaga kontroli jakości i zgodności cold email; Tavily/Serper/Hunter/Gmail API mogą generować koszty i limity.

2. **Agentic marketing workflow z human-in-the-loop**
   - Źródło: [GitHub / Nadeer00 / agentic-ai-marketing-workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow) — mocne jako blueprint n8n; zawiera Serper, Hunter, Groq, Google Sheets i Gmail oraz instrukcję Docker/n8n.
   - Co robi: Szuka firm w branży i mieście, weryfikuje emaile, daje krok ręcznej akceptacji, generuje maile i posty LinkedIn, zapisuje dane w Google Sheets.
   - Jak odtworzyć w Hermesie: cron „lead batch” raz dziennie, prompt z buy-boxem ICP, toolset `web`, plik `leads/YYYY-MM-DD.md` + Sheets API, finalna wysyłka tylko po `/approve` lub osobnym statusie w Kanbanie.
   - Potencjał biznesowy: outbound dla własnych produktów, małej agencji albo design/AI consulting; łatwo mierzyć liczbę kwalifikowanych leadów i zaakceptowanych maili.
   - Ryzyko/uwaga: deliverability i reputacja domeny; automatyczne wysyłanie bez review to zły pomysł.

3. **Agentic SEO operating system: briefy, klastry, techniczne checki i „brain” projektu**
   - Źródło: [GitHub / agencia-conversion / agentic-seo-skills](https://github.com/agencia-conversion/agentic-seo-skills) — bardzo dobre źródło; repo ma strukturę skill/plugin, dokumentację i jasne rozdzielenie strategii, brainu, contentu i data analysis.
   - Co robi: Agent wykonuje powtarzalne prace SEO: research, briefy contentowe, techniczne audyty, clustering, logowanie decyzji i ograniczeń do projektowego „brainu”.
   - Jak odtworzyć w Hermesie: osobny profil `seo-ops`, skills dla `content-brief`, `technical-seo-check`, `cluster-research`, folder `project/brain/`, cron tygodniowy „SEO opportunities”, gateway Telegram do zatwierdzania tematów.
   - Potencjał biznesowy: SEO/content ops; dobre pod blog Konrada, landing pages produktów i repozytorium tematów do social contentu.
   - Ryzyko/uwaga: SEO wymaga danych z GSC/DataForSEO/Ahrefs/Semrush; bez danych agent będzie produkował zbyt ogólne rekomendacje.

4. **Multi-agent fleet: kolejka zadań, worktree, artefakty i Telegram ask-human**
   - Źródło: [Hacker News / sermakarevich / „I am running 3 coding agents…”](https://news.ycombinator.com/item?id=48520757) oraz [GitHub / sermakarevich / fleet](https://github.com/sermakarevich/fleet) — bardzo praktyczne; post opisuje headless mode, kolejkę, artefakty, worker isolation, lokalny model i Telegram.
   - Co robi: Supervisor claimuje zadania z kolejki, uruchamia wielu coderów w izolowanych worktree, zapisuje plan/status/knowledge/events/stderr i pozwala operatorowi odpowiadać agentom przez UI/Telegram.
   - Jak odtworzyć w Hermesie: Hermes `kanban` lub `cron` + `--worktree`, osobne profile dla workerów, pliki artefaktów per task, Telegram gateway dla pytań, mocny model do planowania i tańszy/lokalny do wykonania.
   - Potencjał biznesowy: product/dev ops; pozwala równolegle rozwijać produkty, naprawiać bugi, robić research i testy bez ręcznego pilnowania każdego procesu.
   - Ryzyko/uwaga: największy problem to nie kodowanie, tylko orkiestracja, koszty, limity subskrypcji i momenty wymagające decyzji człowieka.

5. **Hermes Cockpit: mission control dla wielu projektów i agentów**
   - Źródło: [GitHub / goktugozdem2 / hermes-cockpit](https://github.com/goktugozdem2/hermes-cockpit) — dobry MVP dashboardu; repo opisuje health cards, status workerów, alerty, timeline i przyszłe konektory GitHub/Vercel.
   - Co robi: Zbiera rozproszone statusy z agentów, cronów, deployów, raportów i TODO w jedną konsolę operatora.
   - Jak odtworzyć w Hermesie: każdy cron/worker zapisuje `status.jsonl` lub Markdown w katalogu projektu; Next.js dashboard czyta pliki i pokazuje „running/blocked/ready to ship”; opcjonalnie webhook ingestion API.
   - Potencjał biznesowy: ops/product management; szczególnie przy wielu mikroproduktach i eksperymentach marketingowych.
   - Ryzyko/uwaga: samo UI nie wystarczy — trzeba ustandaryzować format raportów i statusów agentów.

6. **Social/X automation przez Hermes plugin**
   - Źródło: [GitHub / Xquik-dev / hermes-tweet](https://github.com/Xquik-dev/hermes-tweet) — świeże i bezpośrednio pod Hermes; README mówi o X search, account reads, tweet posting, replies i likes przez Xquik, ale trzeba uważać na polityki platformy.
   - Co robi: Daje Hermesowi natywne akcje wokół X/Twittera: wyszukiwanie, czytanie kont, publikowanie i interakcje.
   - Jak odtworzyć w Hermesie: plugin `hermes-tweet` jako toolset social, cron „daily visibility scout”, skill do generowania krótkich postów z raportów, manual approval przed publikacją.
   - Potencjał biznesowy: social media/content distribution; można z raportów i build logów robić codzienne posty, odpowiedzi i listę osób do follow-upu.
   - Ryzyko/uwaga: ryzyko automatycznego spamu, blokad konta i tonu niezgodnego z marką; publikować tylko po review.

7. **Habr-style deterministic digest: sitemap/API → ranking → Telegram Markdown**
   - Źródło: [GitHub / Pro100x3mal / hermes-skill-habr-digest](https://github.com/Pro100x3mal/hermes-skill-habr-digest) — dobre jako pattern, nawet jeśli domena to Habr; źródło opisuje sitemap seed, per-article API, ranking po views i delivery przez Hermes cron/gateway.
   - Co robi: Zamiast pytać model „co jest ciekawe”, deterministycznie zbiera kandydatów z API/sitemap, sortuje po twardej metryce i dopiero renderuje raport.
   - Jak odtworzyć w Hermesie: dla Konrada: sitemap/RSS blogów AI/design/SEO, GitHub API albo YouTube RSS → skrypt pre-run → Hermes formatuje Telegram-friendly Markdown.
   - Potencjał biznesowy: research/content ops; mniej halucynacji, więcej powtarzalności i możliwość budowy dashboardu raportów.
   - Ryzyko/uwaga: trzeba wybrać sensowne źródło prawdy; ranking po views nie zawsze równa się wartość biznesowa.

8. **Custodian / auto-repair dla agentów, cronów i gatewaya**
   - Źródło: [GitHub / indigokarasu / hermes-custodian-plugin](https://github.com/indigokarasu/hermes-custodian-plugin) — interesujący pattern operacyjny; plugin deklaruje lifecycle hooks, scan, issue fingerprints, auto-fix tiers i crony.
   - Co robi: Monitoruje logi gatewaya, crony, journale skillów i katalogi danych; próbuje bezpiecznych napraw i eskaluje resztę.
   - Jak odtworzyć w Hermesie: osobny cron „health check” czytający `~/.hermes/logs/`, `hermes cron status`, ostatnie raporty i build logs; generuje listę problemów oraz taski Kanban do naprawy.
   - Potencjał biznesowy: reliability ops; zmniejsza ryzyko, że automatyzacje marketingowe/leadowe po cichu przestaną działać.
   - Ryzyko/uwaga: auto-fix musi być konserwatywny; naprawy destrukcyjne tylko po zatwierdzeniu.

9. **Mobilny operator Hermes + ntfy bridge dla approvals**
   - Źródło: [GitHub / stakeswky / hermes-mobile](https://github.com/stakeswky/hermes-mobile) — praktyczne jako idea mobilnej warstwy operatora; README opisuje self-hosted dashboard, Tailscale i ntfy bridge dla powiadomień.
   - Co robi: Daje telefoniczny dostęp do streamingu chatu, approvals, sesji i cronów; ntfy powiadamia o pytaniach/ukończeniach nawet gdy aplikacja jest ubita.
   - Jak odtworzyć w Hermesie: niekoniecznie budować appkę — wystarczy Telegram gateway + Tailscale/VPN + osobny cron statusowy; dla dev można dodać ntfy bridge do krytycznych approvali.
   - Potencjał biznesowy: oszczędność czasu operatora; agent może pracować, a Konrad akceptuje tylko decyzje wysokiego ryzyka z telefonu.
   - Ryzyko/uwaga: bezpieczeństwo dostępu do dashboardu; nie wystawiać 0.0.0.0 bez kontroli.

10. **Biblioteka skills dla content ops i knowledge wiki**
   - Źródło: [GitHub / thedavidweng / skills](https://github.com/thedavidweng/skills) — dobre źródło inspiracji skillowej; kompatybilne z Hermes Agent i OpenClaw, obejmuje wiki, linking, source integrity i content operations.
   - Co robi: Zamienia powtarzalne zadania wiedzy/contentu w instalowalne skills: budowanie wiki, linkowanie, audyt źródeł, integracja dokumentów.
   - Jak odtworzyć w Hermesie: `hermes skills install` dla własnych skillów Konrada: `blog-research`, `source-integrity`, `case-study-draft`, `linkedin-repurpose`; każdy skill ma procedurę i output format.
   - Potencjał biznesowy: content ops i personal knowledge management; utrzymuje pamięć projektową i przyspiesza produkcję artykułów/postów.
   - Ryzyko/uwaga: skills łatwo puchną; trzeba trzymać je krótkie, testować i archiwizować nieużywane.

11. **n8n/Make template library jako źródło produktów agencyjnych**
   - Źródło: [GitHub / mypsbots / ai-workflow-templates](https://github.com/mypsbots/ai-workflow-templates) — szeroka biblioteka, ale bardziej katalog niż zweryfikowane case study; traktować jako inspirację do własnych implementacji.
   - Co robi: Grupuje template’y dla AI agents, content creation, lead generation, ecommerce, data processing i productivity.
   - Jak odtworzyć w Hermesie: wybrać 2–3 kategorie i zamienić w Hermes crony/webhooki: „SEO content generator”, „lead qualification”, „review analysis”, „newsletter creator”.
   - Potencjał biznesowy: packaging usług; można szybko projektować oferty typu „weekly SEO opportunity brief” albo „lead enrichment sprint”.
   - Ryzyko/uwaga: katalogi template’ów bywają płytkie; warto robić własny PoC i mierzyć wynik.

## 3 workflowy do przetestowania przez Konrada

- **Lead research + cold email draft z ręczną akceptacją**
  - Źródło: [Nadeer00 / agentic-ai-marketing-workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow) i [byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent).
  - Pierwszy krok: zdefiniuj jeden ICP, np. „founderzy narzędzi AI/design bez dobrego onboarding contentu”.
  - Minimalny setup: Hermes cron raz dziennie, toolset `web`, plik `leads/YYYY-MM-DD.md`, Telegram approval, ręczny eksport do Gmail/CRM na start.
  - Miara sukcesu: 10 kwalifikowanych leadów tygodniowo, 5 zaakceptowanych maili, odpowiedzi > 5% bez pogorszenia deliverability.

- **Agentic SEO/content brief operating system dla własnych produktów**
  - Źródło: [agencia-conversion / agentic-seo-skills](https://github.com/agencia-conversion/agentic-seo-skills).
  - Pierwszy krok: wybierz jeden produkt/temat i stwórz folder `project/brain/` z pozycjonowaniem, ICP, listą konkurentów i źródłami.
  - Minimalny setup: skill `seo-brief`, cron tygodniowy „topic opportunities”, zapis Markdown do dashboardu, manual review przed publikacją.
  - Miara sukcesu: 4 briefy miesięcznie, 2 opublikowane teksty/posty, rosnąca lista fraz i przykładów z linkami źródłowymi.

- **Mission control dla cronów, raportów i workerów**
  - Źródło: [goktugozdem2 / hermes-cockpit](https://github.com/goktugozdem2/hermes-cockpit), [sermakarevich / fleet](https://github.com/sermakarevich/fleet) i [HN thread](https://news.ycombinator.com/item?id=48520757).
  - Pierwszy krok: ustandaryzuj jeden format statusu dla każdego raportu/worker run: `status`, `last_run`, `blocked_on`, `next_action`, `links`.
  - Minimalny setup: Next.js dashboard czytający Markdown/JSONL z lokalnych folderów; Hermes crony dopisują status po runie.
  - Miara sukcesu: w 30 sekund widać, które automatyzacje działają, które są zablokowane i co trzeba zatwierdzić.

## Setup notes / tutorial nuggets

- **Hermes cron jako podstawowy mechanizm dla recurring scoutów.** Oficjalny pattern: `hermes cron create "0 9 * * *"`, zarządzanie przez `hermes cron list/edit/run/status`, a w promptach self-contained kontekst, źródła i output format. Źródło: [Hermes docs / Cron](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron).
- **Dla agentów edytujących kod używaj izolacji worktree.** W Hermesie jest flaga `--worktree`, a HN/fleet pokazują ten sam pattern: worker robi zmianę w izolacji, kolejny worker waliduje/testuje/scala. Źródła: [Hermes CLI reference](https://hermes-agent.nousresearch.com/docs/reference/cli-commands) i [HN / running 3 coding agents](https://news.ycombinator.com/item?id=48520757).
- **Zewnętrzny kanał ask-human jest krytyczny dla headless automation.** Fleet używa osobnego ask-human/Telegram, a Hermes ma gateway i approvals; w praktyce crony/workerzy powinni umieć zatrzymać się na pytaniu zamiast zgadywać. Źródło: [sermakarevich / claude / mcp ask_human](https://github.com/sermakarevich/claude/tree/main/mcp/ask_human).
- **Deterministyczna kolekcja przed modelowym rankingiem.** Habr digest pokazuje dobry wzorzec: sitemap/API jako źródło kandydatów, twarde metryki, dopiero potem Markdown delivery. Źródło: [Pro100x3mal / hermes-skill-habr-digest](https://github.com/Pro100x3mal/hermes-skill-habr-digest).
- **Lead-gen workflow powinien mieć human-in-the-loop.** Nadeer00 ma manual approval między weryfikacją leadów a wysyłką; w Hermesie odpowiednikiem jest Telegram approval, Kanban status `needs_review` albo osobny plik `approved.md`. Źródło: [Nadeer00 / agentic-ai-marketing-workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow).
- **Projektowy brain powinien rozdzielać źródła, working analysis i deliverables.** Agentic SEO repo mocno podkreśla foldery `project/brain/`, raw sources, deliverables i public content; to samo warto przyjąć dla bloga/produktów Konrada. Źródło: [agencia-conversion / agentic-seo-skills](https://github.com/agencia-conversion/agentic-seo-skills).
- **Social publishing tylko z approval.** Hermes Tweet może dać narzędzia X, ale finalny post/reply powinien wymagać review, szczególnie przy koncie osobistym/brandowym. Źródło: [Xquik-dev / hermes-tweet](https://github.com/Xquik-dev/hermes-tweet).

## Link dump

- [byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent) — konkretny pipeline webhook → research → cold outreach.
- [Nadeer00 / agentic-ai-marketing-workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow) — n8n blueprint dla lead gen, Hunter, Gmail, Sheets i human approval.
- [agencia-conversion / agentic-seo-skills](https://github.com/agencia-conversion/agentic-seo-skills) — najbardziej dojrzały wzorzec agentic SEO/content ops.
- [HN / I am running 3 coding agents non-stop](https://news.ycombinator.com/item?id=48520757) — praktyczny opis orkiestracji, worktree, artefaktów, Telegram i kosztów.
- [sermakarevich / fleet](https://github.com/sermakarevich/fleet) — supervisor dla równoległych agentów i centralnej kolejki zadań.
- [goktugozdem2 / hermes-cockpit](https://github.com/goktugozdem2/hermes-cockpit) — dashboard mission-control dla projektów i agentów Hermes.
- [Xquik-dev / hermes-tweet](https://github.com/Xquik-dev/hermes-tweet) — plugin Hermes do X/Twitter automation.
- [Pro100x3mal / hermes-skill-habr-digest](https://github.com/Pro100x3mal/hermes-skill-habr-digest) — dobry pattern deterministic digest + Telegram delivery.
- [indigokarasu / hermes-custodian-plugin](https://github.com/indigokarasu/hermes-custodian-plugin) — auto-monitoring i ostrożny auto-repair dla Hermes ops.
- [stakeswky / hermes-mobile](https://github.com/stakeswky/hermes-mobile) — mobilny operator, approvals i ntfy bridge dla Hermes.
- [thedavidweng / skills](https://github.com/thedavidweng/skills) — skills dla content ops, wiki i source integrity kompatybilne z Hermes/OpenClaw.
- [Hermes docs / Cron](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron) — oficjalny punkt odniesienia dla scheduled workflows.
