# Hermes workflow scout — 2026-06-13

Uwaga: X i Reddit często pokazują tylko publiczne/snippetowane treści bez pełnych wątków, więc oznaczam mocniejsze źródła tam, gdzie dało się wejść w pełny opis.

## 15 najciekawszych workflowów / use case’ów do odtworzenia w Hermesie

1. **YouTube Shorts autoposter z potwierdzeniami**
   - Źródło: Reddit / r/organicsocial — [How we’re using Hermes Agent for YouTube Shorts automation](https://www.reddit.com/r/organicsocial/comments/1t60nyh/how_were_using_hermes_agent_for_youtube_shorts/)
   - Co robi: Hermes dostaje folder gotowych filmów, reguły tytułów/opisów, pilnuje logu już wrzuconych materiałów i wysyła potwierdzenie po uploadzie.
   - Jak odtworzyć: `cron` + folder queue + log CSV/SQLite + YouTube API/warstwa typu Genviral + Telegram confirmation.
   - Potencjał: bardzo dobry dla content repurposingu: Analog Hive, AI/design clips, shorts z tutoriali lub backstage’u.
   - Uwaga: najważniejszy pattern to **confirmation loop** — bez niego automatyzacje potrafią cicho nie działać przez dni.

2. **SEO Super Agent: content calendar → briefy → drafty → internal linking**
   - Źródło: Julian Goldie — [Hermes AI SEO Super Agent](https://juliangoldie.com/hermes-ai-seo-super-agent)
   - Co robi: Hermes jako system do keyword researchu, kalendarzy treści, briefów, blog draftów, linkowania wewnętrznego i quality checks.
   - Jak odtworzyć: profile/role: Researcher, Brief Writer, Editor, Internal Linking, QA; plus `cron`, web search, markdown files, ewentualnie Ahrefs/DataForSEO/Firecrawl API.
   - Potencjał: mocne dla budowania visibility w AI/design i długiego ogona SEO pod produkty.
   - Uwaga: źródło jest marketingowe, ale workflow jest sensowny. Wymaga manual review przed publikacją.

3. **24/7 recurring workflow: daily briefs, weekly reports, competitor checks**
   - Źródło: X / Julian Goldie — [Hermes Agent Claude Code Builds A 24/7 AI Workflow](https://x.com/JulianGoldieSEO/status/2054640784159408361)
   - Co robi: Claude/LLM jako “mózg” planujący, Hermes jako runtime wykonujący powtarzalne prace: research briefy, competitor checks, content briefs.
   - Jak odtworzyć: `cronjob` + `web` + pliki markdown + Telegram delivery + skilli dla formatów raportów.
   - Potencjał: idealne jako “codzienny operator” dla market researchu, konkurencji, contentu i inspiracji.
   - Uwaga: warto zacząć od jednego workflowu, nie od “zautomatyzuj wszystko”.

4. **13-agent marketing team z task database i peer review**
   - Źródło: Reddit / r/nocode — [How I automated my entire marketing workflow with AI agents](https://www.reddit.com/r/nocode/comments/1rg4e9v/)
   - Co robi: autor zbudował zespół 13 agentów dla marketingu AI video platformy Fruityo: research, strategia, copywriting, design, execution, devil’s advocate, review.
   - Jak odtworzyć w Hermesie: Hermes profiles lub Kanban + SQLite/PocketBase/Airtable + stany `backlog → todo → in_progress → peer_review → review → approved → done`.
   - Potencjał: bardzo mocny pattern dla content ops i kampanii, bo wymusza review zamiast automatycznego publikowania śmieci.
   - Uwaga: to było na OpenClaw, ale architektura idealnie mapuje się na Hermes Kanban/profiles.

5. **Hermes jako 5-osobowy zespół przez Kanban**
   - Źródło: Reddit / r/hermesagent — [I turned Hermes Agent into a 5-person team](https://www.reddit.com/r/hermesagent/comments/1ty73ia/i_turned_hermes_agent_into_a_5person_team_3/)
   - Co robi: kilka agentów z rolami claimuje taski, komentuje, blokuje, oddaje zadania, pracuje równolegle.
   - Jak odtworzyć: `hermes kanban init`, profile workers, osobne skills dla strategii/copy/researchu/review.
   - Potencjał: dobry backbone pod “mini-agencję” content/SEO/sales.
   - Uwaga: pełna treść była słabo dostępna, ale sam pattern jest zgodny z oficjalnym Hermes Kanban.

6. **Lead generation / prospecting agent**
   - Źródła: GitHub — [hermes-agent-prospecting-system](https://github.com/CarlTheYoda/hermes-agent-prospecting-system), DEV — [How I Built a Hermes Agent for Lead Generation](https://dev.to/nimay_04/how-i-built-a-hermes-agent-for-lead-generation-that-finds-and-qualifies-better-prospects-1hm6)
   - Co robi: szuka firm zgodnych z ICP, kwalifikuje leady, scoringuje, eksportuje CSV/CRM-ready output.
   - Jak odtworzyć: ICP markdown + web search/browser + scoring rubric + CSV/SQLite + enrichment API + CRM/Sheets.
   - Potencjał: bezpośrednio sprzedażowy — lista prospektów dla Analog Hive, usług AI/design, konsultingu.
   - Uwaga: jeśli idzie w cold email, trzeba trzymać deliverability i zgodność prawną; nie wysyłać masowo bez kontroli.

7. **Cold email follow-up guardrail: nie follow-upuj, jeśli ktoś odpisał**
   - Źródło: GitHub snippet — [hermes-agent-prospecting-system](https://github.com/CarlTheYoda/hermes-agent-prospecting-system)
   - Co robi: przed wysłaniem follow-upów system skanuje Gmail/Inbox i aktualizuje status leada, żeby nie spamować osób, które odpowiedziały.
   - Jak odtworzyć: Gmail/IMAP skill + CSV/SQLite leads table + `cron` + statusy `new/contacted/replied/do_not_contact`.
   - Potencjał: bardzo praktyczne, bo chroni reputację domeny i relacje.
   - Uwaga: to powinno być semi-automated z human approval przed wysyłką.

8. **AI SEO competitor analysis + full blog drafts**
   - Źródło: Reddit / r/n8n — [n8n AI Agent for SEO competitor analysis](https://www.reddit.com/r/n8n/comments/1olur30/i_built_an_n8n_ai_agent_that_does_seo_competitor/)
   - Co robi: agent bierze keyword, pobiera SERP/konkurencję przez DataForSEO, scrape’uje Firecrawl, tworzy analizę i draft blog posta.
   - Jak odtworzyć w Hermesie: DataForSEO API + Firecrawl/browser + markdown brief template + editorial review skill.
   - Potencjał: bardzo dobry do skalowania blogów i topical authority.
   - Uwaga: publikowanie “full blog posts” bez edycji to ryzyko jakościowe. Lepiej używać tego do briefów i pierwszych draftów.

9. **Content team AI hackathon: budowanie małych narzędzi na bolączki**
   - Źródło: Ahrefs — [We Ran an AI Hackathon for Our Content Team](https://ahrefs.com/blog/agent-a-hackathon/)
   - Co robi: zespół contentowy blokuje tydzień, każdy spisuje powtarzalne frustracje i buduje małe automatyzacje.
   - Jak odtworzyć w Hermesie: jednodniowy “workflow sprint”: lista frustracji → 3 prototypy → skill dla każdego powtarzalnego procesu.
   - Potencjał: świetne dla Ciebie: można zrobić własny “AI design/content ops hackathon”.
   - Uwaga: najważniejszy insight: **zacząć od memory layer i konkretnych frustracji**, nie od narzędzia.

10. **Daily personal/business brief przez Telegram**
   - Źródło: oficjalne docs — [Hermes User Stories](https://hermes-agent.nousresearch.com/docs/user-stories)
   - Co robi: codzienne briefy: inbox summary, HN/AI news, competitor checks, project standups.
   - Jak odtworzyć: `cronjob` + web/email/calendar + Telegram delivery + krótki format decyzyjny.
   - Potencjał: dobry “CEO morning brief” dla solopreneura.
   - Uwaga: brief musi mieć filtr jakości; inaczej robi się newsletterowy szum.

11. **Obsidian / Markdown vault jako operacyjna pamięć projektów**
   - Źródło: [Hermes User Stories](https://hermes-agent.nousresearch.com/docs/user-stories) + Reddit snippets
   - Co robi: Hermes zapisuje research, decyzje, automatyzacje, learning files i projekty do lokalnego vaulta.
   - Jak odtworzyć: folder `~/konrad-brain/...` + ustalone templates + `markdown-working-memory`/Obsidian skill + pytanie przed sensitive info.
   - Potencjał: kumulatywna przewaga — agent coraz mniej pyta o kontekst.
   - Uwaga: trzeba pilnować, co trafia do trwałej pamięci, żeby nie zaśmiecić braina.

12. **Self-improving skills: agent pisze własne procedury po trudnych zadaniach**
   - Źródło: [Hermes User Stories](https://hermes-agent.nousresearch.com/docs/user-stories), oficjalne Hermes docs
   - Co robi: po złożonym workflow Hermes tworzy `SKILL.md`, dzięki czemu kolejne podobne zadania są szybsze i tańsze.
   - Jak odtworzyć: po każdym powtarzalnym workflowie: “zapisz to jako skill”; potem cron może ładować skill automatycznie.
   - Potencjał: najlepszy “moat” Hermesa — procesy content/SEO/sales robią się coraz bardziej Twoje.
   - Uwaga: skills trzeba utrzymywać; stare instrukcje mogą szkodzić.

13. **Tanie modele + dobre skills zamiast drogich modeli do wszystkiego**
   - Źródła: Reddit snippets — [One month with Hermes Agent](https://old.reddit.com/r/hermesagent/comments/1t29ogw/one_month_with_hermes_agent_what_i_wish_i_knew/), LocalLLaMA — [Anybody who tried Hermes-Agent?](https://www.reddit.com/r/LocalLLaMA/comments/1ro9lph/anybody_who_tried_hermes-agent/)
   - Co robi: użytkownicy raportują, że planowanie, jasne configi i skills pozwalają używać tańszych modeli do researchu/general tasks.
   - Jak odtworzyć: mocniejszy model jako główny do planowania, tańsze modele dla prostych cronów/reformatowania/subtasks.
   - Potencjał: obniża koszt always-on automatyzacji.
   - Uwaga: nie przesadzać z oszczędzaniem na modelu głównym — słaby planner psuje cały workflow.

14. **Always-on Hermes na VPS / mini PC / Raspberry Pi**
   - Źródła: Reddit / r/VPS — [I want to run Hermes Agent on a VPS](https://www.reddit.com/r/VPS/comments/1tuh4r9/i_want_to_run_hermes_agent_on_a_vps_which_vps_is/), Zeabur — [Hermes Agent Deploy Guide](https://zeabur.com/templates/RTWI4O)
   - Co robi: Hermes działa 24/7 jako proces na serwerze i piszesz do niego przez Telegram.
   - Jak odtworzyć: VPS 2C/4GB minimum, 4C/8GB komfortowo; `hermes gateway setup/start`; cron jobs; backups.
   - Potencjał: agent naprawdę “żyje”, a nie czeka w zakładce przeglądarki.
   - Uwaga: dashboard publiczny wymaga ostrożności; messaging działa outbound, zwykle bez publicznego portu.

15. **Second-hand / marketplace monitor**
   - Źródło: LocalLLaMA snippet / user stories — przykład: agent szuka rzeczy na second-hand markets i mailuje ciekawe znaleziska.
   - Co robi: cyklicznie monitoruje oferty według kryteriów, filtruje, wysyła shortlistę.
   - Jak odtworzyć: `cron` + web/browser + scoring rubric + email/Telegram + log znanych ofert.
   - Potencjał: można przenieść na nieruchomości, sprzęt foto, vintage cameras, domeny, SaaS acquisition targets.
   - Uwaga: trzeba trzymać deduplikację i kryteria “co jest naprawdę warte uwagi”.

## 3 workflowy, które szczególnie warto przetestować u Ciebie

1. **AI/design visibility scout → LinkedIn/content brief**
   - Minimalny setup: codzienny cron zbiera 5 trendów z AI design/product, wybiera 1 angle, robi szkic posta.
   - Miara sukcesu: 3 gotowe posty tygodniowo, które faktycznie publikujesz.

2. **Analog Hive SEO/content machine**
   - Minimalny setup: lista 30 tematów wokół film developing, lab workflows, analog photography; Hermes robi briefy i internal link plan.
   - Miara sukcesu: 4 mocne artykuły/miesiąc + rosnące impressions/search clicks.

3. **Prospecting agent dla partnerstw / klientów**
   - Minimalny setup: ICP markdown + lista źródeł + scoring CSV + manual approval.
   - Miara sukcesu: 20 dobrze dopasowanych leadów tygodniowo, nie masowy spam.

## Setup nuggets

- Oficjalny install Hermesa:

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
hermes setup
hermes model
hermes gateway setup
```

- Pattern dla workflowów:
  - `cron` uruchamia research/automation
  - `skills` trzymają procedury i format jakości
  - `memory`/Markdown trzyma kontekst projektu
  - Telegram daje potwierdzenia i approval loop
  - log CSV/SQLite zapobiega duplikatom
- Najbardziej powtarzająca się rada ze źródeł: Hermes jest najlepszy, gdy **workflow jest już jasno opisany**. Nie “rób marketing”, tylko “codziennie znajdź 10 tematów, oceń według X, zapisz 3 briefy, wyślij do review”.

## Cron

Od jutra o 13:00 świeża wersja scoutingu jest wysyłana automatycznie do Telegrama i ma być zapisywana jako plik Markdown w folderze:

`/Users/koni/Desktop/hermes/Usecases/`
