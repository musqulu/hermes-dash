## Hermes workflow scout — 2026-06-14

- Krótki werdykt dnia: dziś najmocniejsze są repozytoria pokazujące **persistent agent workflows jako operacje biznesowe**, a nie pojedyncze prompty: SDR/lead-gen na cronach i kanałach wiadomości, content review pipeline’y, oraz “digital employees” dostarczający codzienne raporty do Telegrama. X/Twitter i Reddit były praktycznie nieużyteczne z tej sesji: Google zablokował wyszukiwanie, Reddit JSON zwrócił 403, a wyniki Binga dla X/Reddit były słabe lub śmieciowe. Dlatego poniżej priorytetowo biorę świeżo aktualizowane GitHuby, oficjalne docs Hermes i repo z realnymi plikami/architekturą.

## Top workflowy / use case'y

1. **B2B SDR agent z 10-stage pipeline, cronami i multi-channel follow-up**
   - Źródło: [GitHub / iPythoning / b2b-sdr-agent-template](https://github.com/iPythoning/b2b-sdr-agent-template) — mocne źródło: repo aktualizowane dziś, opisuje OpenClaw, 10 cron jobs, memory, WhatsApp/Telegram/Email; część claimów sprzedażowych traktować jako promocyjne.
   - Co robi: szablon AI SDR dla B2B export: prospecting, sekwencje kontaktu, pamięć, kanały WhatsApp/Telegram/Email i health-checki wdrożeniowe. Najbliższe Hermesowi mentalnie: persistent agent działający codziennie, a nie “chatbot”.
   - Jak odtworzyć w Hermesie: osobny profil `sdr`, cron joby dla prospectingu/follow-upów, Telegram gateway jako inbox, skill z buyer-personą i ICP, pliki CSV/Sheets jako baza leadów, web/search do researchu firm, Gmail/CRM przez API lub webhooki.
   - Potencjał biznesowy: lead generation i sprzedaż — można zrobić codzienny “lead brief” + drafty cold emaili + reminder follow-upów. Dla Konrada sensowne jako system do wyszukiwania AI/design/product firm i partnerstw.
   - Ryzyko/uwaga: deliverability, zgody marketingowe, halucynacje w personalizacji, konieczny human review przed wysyłką.

2. **Hermes Daily Automation: zespół codziennych “digital employees” z dostawą do Telegrama**
   - Źródło: [GitHub / schbxg / hermes-daily-automation](https://github.com/schbxg/hermes-daily-automation) — bardzo trafne źródło Hermesowe; README opisuje 10+ zaplanowanych zadań, Telegram delivery i self-review.
   - Co robi: zestaw szablonów na Hermes Agent, które codziennie dostarczają news digest, kurs/learning, TTS audio, interview prep, finance plan i nightly self-review pamięci.
   - Jak odtworzyć w Hermesie: `hermes cron create`, `deliver: origin` lub Telegram gateway, osobne skills dla briefów, memory włączone dla retrospekcji, ewentualnie folder Markdown jako log raportów. Setup komend zgodny z Hermes: `hermes setup`, `hermes gateway setup`, `hermes cron create "0 8 * * *"`.
   - Potencjał biznesowy: content ops i personal knowledge management — z takiego systemu można robić codzienny feed pomysłów na posty, artykuły SEO, lead magnets i eksperymenty produktowe.
   - Ryzyko/uwaga: jakość zależy od dostępności web/search i modelu; przy słabym modelu trzeba robić deterministyczną kolekcję źródeł i dopiero potem ranking.

3. **Multi-instance Hermes: CEO + CTO agenci na VPS z osobnymi Telegram botami**
   - Źródło: [GitHub / geraledesma / hermes-agent-automations](https://github.com/geraledesma/hermes-agent-automations) — dobre źródło architektoniczne; repo opisuje multi-instance autonomous agent architecture, ale trzeba weryfikować szczegóły deploymentu przed kopiowaniem.
   - Co robi: dwa niezależne agenty Hermes na VPS: “CEO” do planowania/kalendarza/rutyn i “CTO” do GitHub/code review/tool discovery; komunikacja przez Telegram i crony.
   - Jak odtworzyć w Hermesie: użyć Hermes profiles (`hermes profile create ceo`, `hermes profile create cto`), osobne gateway credentials, profile-scoped cron jobs, wspólny folder `reports/` lub kanban board do wymiany zadań. Nie uruchamiać dwóch gatewayów na tych samych tokenach botów.
   - Potencjał biznesowy: agency/product ops — CEO-agent robi research rynku i plan publikacji, CTO-agent sprawdza repo, issues, landing pages, performance i SEO/AI-readiness.
   - Ryzyko/uwaga: credential conflicts w gatewayu, koszty tokenów, konieczny jasny zakres uprawnień per profil.

4. **n8n lead-gen researcher: webhook → research firmy → tech-stack → personalizowany outreach**
   - Źródło: [GitHub / byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent) — świeże repo, konkretne kroki i przykładowy payload; ma mało gwiazdek, więc traktować jako implementację referencyjną, nie “sprawdzony produkt”.
   - Co robi: n8n przyjmuje `company_name` i `website`, używa Gemini, Tavily i scraperów do researchu firmy, value proposition, launchy i infrastruktury, a potem zapisuje dane do pipeline’u.
   - Jak odtworzyć w Hermesie: webhook/subskrypcja w Hermes lub prosty plik wejściowy CSV; cron przetwarza N firm dziennie; web/search i browser do researchu; wynik do Google Sheet/Markdown; osobny krok generuje draft emaila i oznacza “do akceptacji”.
   - Potencjał biznesowy: cold outreach i partnerstwa — bardzo dobry workflow do budowania listy potencjalnych klientów agencyjnych lub sponsorów newslettera.
   - Ryzyko/uwaga: web scraping może być niestabilny; Tavily/Serper/Hunter wymagają API; wysyłka maili tylko po manual review.

5. **Agentic AI Marketing Workflow: Serper + Hunter + Groq + Gmail + Sheets + LinkedIn posts**
   - Źródło: [GitHub / Nadeer00 / agentic-ai-marketing-workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow) — mocny practical blueprint: README podaje integracje, `.env`, Docker Compose i human-in-the-loop.
   - Co robi: szuka firm w branży i mieście przez Serper, weryfikuje maile Hunterem, zapisuje do Google Sheets, generuje spersonalizowane emaile przez Groq, wysyła Gmail i tworzy posty LinkedIn.
   - Jak odtworzyć w Hermesie: Hermes cron jako orchestrator, Google Sheets jako stan leadów, web/search dla Serper/Tavily, Gmail API albo draft-only workflow, skill “lead qualification”, Telegram review step: “approve/reject”.
   - Potencjał biznesowy: end-to-end growth loop — lista leadów, maile i content społecznościowy z jednego researchu. Dla Konrada: targetować studia design/AI, founderów i SaaS-y potrzebujące content/design systems.
   - Ryzyko/uwaga: Hunter/Gmail OAuth i compliance; LinkedIn automatyzacja może łamać ToS, więc publikację lepiej zostawić jako draft.

6. **Content review agent: grammar + SEO + readability + rewrite + report**
   - Źródło: [GitHub / KenBoller / ai-content-review-agent](https://github.com/KenBoller/ai-content-review-agent) — dobre źródło dla content ops; LangGraph, lokalny Ollama i dashboard wyników.
   - Co robi: wieloetapowy review treści: gramatyka, SEO, readability, styl, scoring, meta title/description i rewrite gotowy do publikacji.
   - Jak odtworzyć w Hermesie: folder `drafts/` → cron lub ręczny prompt sprawdza nowe Markdowni → Hermes skill “content-review” z kryteriami brand voice/SEO → wynik jako `.review.md` + Telegram summary. Można użyć lokalnego modelu do pierwszej oceny i mocniejszego modelu do finalnego rewrite.
   - Potencjał biznesowy: blogi, SEO, newsletter, landing pages — oszczędza czas redakcji i wymusza checklistę jakości przed publikacją.
   - Ryzyko/uwaga: SEO scoring bez danych z GSC/Ahrefs jest tylko heurystyką; konieczny ludzki edytor przed publikacją.

7. **E-commerce listing agent: zdjęcie produktu → title/category/attributes/SEO keywords**
   - Źródło: [GitHub / TN108 / Multimodal-AI-E-commerce-Intelligence-Automation-Agent](https://github.com/TN108/Multimodal-AI-E-commerce-Intelligence-Automation-Agent) — wczesny MVP, ale bardzo konkretny flow produktowy.
   - Co robi: upload zdjęcia produktu, model vision analizuje obraz, backend generuje JSON z tytułem, kategorią, atrybutami, opisem i słowami kluczowymi SEO.
   - Jak odtworzyć w Hermesie: Hermes jako batch operator: folder ze zdjęciami + CSV produktów, tool vision/image analysis, skill z zasadami marketplace, zapis JSON/Markdown, opcjonalnie wysyłka do sklepu przez API.
   - Potencjał biznesowy: e-commerce content ops — szybkie wystawianie produktów, poprawa opisów i SEO na marketplace’ach.
   - Ryzyko/uwaga: hallucynacje cech produktu są groźne prawnie; atrybuty techniczne muszą pochodzić z danych producenta albo manual check.

8. **Redbook/Xiaohongshu carousel director jako przenośny agent skill do social contentu**
   - Źródło: [GitHub / mythkiven / redbook-director-skill](https://github.com/mythkiven/redbook-director-skill) — wartościowe jako pattern “skill-first content workflow”; chińskojęzyczne, ale struktura skillu jest łatwa do przeniesienia.
   - Co robi: agent skill planuje karuzelę RedNote/Xiaohongshu: koncepcja, styl wizualny, struktura slajdów, image prompts, caption i checklista jakości.
   - Jak odtworzyć w Hermesie: stworzyć skill `linkedin-carousel-director` lub `ai-design-post-director`, który bierze temat i robi: hook, 6–8 slajdów, prompt grafiki, caption, CTA, checklistę. Cron może codziennie generować 3 drafty z research briefów.
   - Potencjał biznesowy: social media i visibility — szybki pipeline na LinkedIn/X/Instagram karuzele z własnych notatek i raportów.
   - Ryzyko/uwaga: bez własnego POV wyjdzie generyczny content; trzeba dodać brand voice Konrada i ręczną selekcję.

9. **Telegram multi-agent fleet z memory, message bus i nightly dream cycles**
   - Źródło: [GitHub / dream77r / my-claude-bot](https://github.com/dream77r/my-claude-bot) — dobre źródło inspiracyjne dla architektury persistent agents; to nie Hermes, ale wzorce są przenaszalne.
   - Co robi: bot Telegram oparty o Claude subscription, z orchestrator-agentem, workerami, katalogami sandbox, shared MessageBus, git-versioned wiki memory i nocnymi cyklami poprawy.
   - Jak odtworzyć w Hermesie: profile + Kanban zamiast własnego MessageBus, osobne workdiry per agent, memory/skille, cron “nightly self-review”, Telegram gateway jako interfejs. Dla długich zadań używać `terminal(background=True, notify_on_complete=True)` albo cron, nie blokować głównej sesji.
   - Potencjał biznesowy: osobisty operating system — researcher, writer, sales scout, dev assistant i reviewer mogą działać jako role z oddzielną pamięcią.
   - Ryzyko/uwaga: bezpieczeństwo plików i zakres uprawnień; self-improvement bez limitów może produkować chaos.

10. **Business operations skills: ROI, competitive intelligence, operations audit jako “agency discovery engine”**
   - Źródło: [GitHub / Adri3l-R3nan / cognify-skills](https://github.com/Adri3l-R3nan/cognify-skills) — dobra biblioteka skill-patternów; nie jest Hermes-specific, ale pasuje do Hermes skills.
   - Co robi: zestaw 19 business operation skills: workflow analysis, ROI analyzer, competitive intelligence, strategic planning, operations audit, client discovery.
   - Jak odtworzyć w Hermesie: zbudować własny skill `client-discovery-and-roi` dla leadów: Hermes zbiera firmę, stronę, stack, content gaps, proponuje 3 automatyzacje i szacuje ROI/effort. Wynik do Markdown + CRM.
   - Potencjał biznesowy: sprzedaż usług/consultingu — automatycznie generowane audyty jako pre-sales asset i materiał do cold emaila.
   - Ryzyko/uwaga: ROI bez danych klienta to hipoteza; oznaczać assumptions i prosić o discovery call.

## 3 workflowy do przetestowania przez Konrada

- **AI/design partner scout + draft cold email**
  - Źródło: [Nadeer00 / agentic-ai-marketing-workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow) i [byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent).
  - Pierwszy krok: zdefiniować ICP: “founderzy SaaS/AI tools, studia design, agencje content/SEO, które potrzebują AI workflow design”.
  - Minimalny setup: Hermes cron raz dziennie, Google Sheet/CSV z leadami, web/search, skill do kwalifikacji, Telegram approval.
  - Miara sukcesu: 20 zakwalifikowanych leadów/tydzień, 5 maili zatwierdzonych ręcznie, odpowiedzi > 5%.

- **Daily content idea factory z raportów i linków**
  - Źródło: [schbxg / hermes-daily-automation](https://github.com/schbxg/hermes-daily-automation) oraz oficjalne [Hermes cron docs](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron).
  - Pierwszy krok: osobny cron “AI/design visibility brief” zapisujący Markdown i generujący 3 hooks na LinkedIn/X.
  - Minimalny setup: folder `/Desktop/hermes/content-ideas/`, skill brand voice, Telegram delivery, web/search, opcjonalnie memory dla preferencji tematów.
  - Miara sukcesu: 5 dobrych draftów postów tygodniowo i minimum 1 opublikowany post/dzień roboczy.

- **Content review gate dla bloga/landing pages**
  - Źródło: [KenBoller / ai-content-review-agent](https://github.com/KenBoller/ai-content-review-agent).
  - Pierwszy krok: stworzyć Hermes skill z checklistą: clarity, SEO intent, examples, CTA, originality, “Konrad voice”.
  - Minimalny setup: folder `drafts/`, komenda/cron sprawdzający nowe pliki, output `.review.md`, finalne poprawki tylko po akceptacji.
  - Miara sukcesu: każdy draft ma score + listę poprawek; czas redakcji spada o 30–50% subiektywnie po 2 tygodniach.

## Setup notes / tutorial nuggets

- **Hermes cron jako rdzeń persistent workflow:** oficjalny pattern to `hermes cron create SCHED`, np. `hermes cron create "0 8 * * *"`, z promptem self-contained i dostawą do obecnego kanału lub Telegrama. Źródło: [Hermes docs / Cron](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron).

- **Gateway jako delivery layer, nie tylko chat:** do raportów i approval loopów używać Telegram/Slack/Email gateway; źródła typu `hermes-daily-automation` pokazują wartość “wynik czeka rano w Telegramie”. Źródło: [Hermes docs / Messaging](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/) i [schbxg / hermes-daily-automation](https://github.com/schbxg/hermes-daily-automation).

- **Profile zamiast jednej osobowości:** multi-agent CEO/CTO najlepiej robić przez profile z osobnym configiem, pamięcią i tokenami, nie tylko promptem roli. Źródło: [Hermes docs / Profiles](https://hermes-agent.nousresearch.com/docs/user-guide/profiles) i [geraledesma / hermes-agent-automations](https://github.com/geraledesma/hermes-agent-automations).

- **Human-in-the-loop w lead-gen:** w workflowach lead-gen najbezpieczniejszy pattern to “research + draft + approval”, dopiero potem wysyłka. Źródło: [Nadeer00 / agentic-ai-marketing-workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow).

- **API prerequisites dla marketing agentów:** Serper.dev, Hunter.io, Groq, Google Sheets/Gmail OAuth i Docker Compose pojawiają się jako konkretne zależności w n8n marketing workflow. W Hermesie odpowiednikiem jest trzymanie sekretów w `.env`, a konfiguracji w `config.yaml`. Źródło: [Nadeer00 / agentic-ai-marketing-workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow) oraz [Hermes docs / Configuration](https://hermes-agent.nousresearch.com/docs/user-guide/configuration).

- **Skill-first content workflows:** zamiast pisać za każdym razem długi prompt, opakować proces jako skill: research → struktura → draft → self-check. Dobre wzorce: [mythkiven / redbook-director-skill](https://github.com/mythkiven/redbook-director-skill) i [Adri3l-R3nan / cognify-skills](https://github.com/Adri3l-R3nan/cognify-skills).

- **Nie ufać w pełni web automation przy cold emailu:** repozytoria używają scraperów i Tavily/Serper, ale w Hermesie lepiej mieć bounded automation: limit firm dziennie, zapisywanie źródeł, oznaczanie niepewności, żadnej automatycznej wysyłki bez review. Źródło: [byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent).

## Link dump

- [iPythoning / b2b-sdr-agent-template](https://github.com/iPythoning/b2b-sdr-agent-template) — najpełniejszy dziś wzorzec persistent SDR: crony, memory, Telegram/WhatsApp/Email.
- [schbxg / hermes-daily-automation](https://github.com/schbxg/hermes-daily-automation) — praktyczne szablony Hermes do codziennych pushy i Telegram delivery.
- [geraledesma / hermes-agent-automations](https://github.com/geraledesma/hermes-agent-automations) — przykład wielu instancji Hermes na VPS z rolami CEO/CTO.
- [Nadeer00 / agentic-ai-marketing-workflow](https://github.com/Nadeer00/agentic-ai-marketing-workflow) — konkretny n8n pipeline: Serper, Hunter, Groq, Gmail, Sheets, human review.
- [byg16 / ai-lead-gen-agent](https://github.com/byg16/ai-lead-gen-agent) — webhook-driven company research i personalized outreach generation.
- [KenBoller / ai-content-review-agent](https://github.com/KenBoller/ai-content-review-agent) — dobry blueprint na SEO/content review gate.
- [TN108 / Multimodal-AI-E-commerce-Intelligence-Automation-Agent](https://github.com/TN108/Multimodal-AI-E-commerce-Intelligence-Automation-Agent) — MVP product listing + SEO keywords z vision modelu.
- [mythkiven / redbook-director-skill](https://github.com/mythkiven/redbook-director-skill) — skill-first social carousel workflow do adaptacji na LinkedIn/AI/design.
- [dream77r / my-claude-bot](https://github.com/dream77r/my-claude-bot) — inspiracja dla Telegram multi-agent fleet z memory i nightly self-improvement.
- [Hermes docs / Cron](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron) — źródło prawdy dla harmonogramów i recurring reports w Hermesie.
- [Hermes docs / Messaging Gateway](https://hermes-agent.nousresearch.com/docs/user-guide/messaging/) — źródło prawdy dla Telegram/Slack/Email delivery.
- [Hermes docs / Profiles](https://hermes-agent.nousresearch.com/docs/user-guide/profiles) — źródło prawdy dla oddzielnych agentów/profili.

Zapisano też do: /Users/koni/Desktop/hermes/usecases/hermes-workflow-scout-2026-06-14.md
