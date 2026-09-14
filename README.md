# Michele Dilollo — Enterprise DFIR Portfolio

> Portfolio personale enterprise ad altissime prestazioni per **Michele Dilollo**, Cybersecurity Specialist & DFIR Expert.

[![Next.js](https://img.shields.io/badge/Next.js-15.x-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org)
[![Aceternity UI](https://img.shields.io/badge/Aceternity_UI-Components-6366F1?style=flat-square)](https://ui.aceternity.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-EA4C89?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![GitHub Actions](https://img.shields.io/badge/CI%2FCD-Automated_Deploy-2088FF?style=flat-square&logo=github-actions&logoColor=white)](https://github.com/isf3t/micheleDilollo.github.io/actions)

---

## Panoramica del Progetto

Il portfolio è stato ingegnerizzato con l'obiettivo di comunicare autorevolezza, seniority e precisione metodologica nell'ambito della sicurezza informatica difensiva:

- **Posizionamento**: Incident Responder & DFIR Specialist (Telsy S.p.A.), focalizzato sulla difesa di infrastrutture critiche/governative, memory forensics (Volatility), threat hunting (CrowdStrike, Defender) e reverse engineering.
- **Ricerca Sperimentale**: Spotlight sulla tesi magistrale (*Sapienza Università di Roma*) per la distinzione quantitativa tramite rete neurale tra frammenti compressi e crittografati per l'early detection di attacchi Ransomware.
- **UI & Micro-interazioni (Aceternity UI)**: Background Beams con gradienti cyber, Bento Grid per progetti e ricerca, Card Spotlight interattive con radial tracking e Floating Navbar con blur dinamico.
- **Interattività**: Console DFIR interattiva ed accessibile per simulare una workstation operativa con cronologia, help e chip di comando rapido.
- **Zero Server Node**: Esportazione statica Next.js (`output: 'export'`) compatibile al 100% con GitHub Pages.
- **Separazione Dati / Presentazione**: Tutti i contenuti sono manutenibili direttamente in `src/data/*.json`.

---

## Architettura & Directory Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml              # Pipeline CI/CD GitHub Pages automatica da ./out
├── public/
│   ├── .nojekyll                   # Disabilita elaborazione Jekyll su GitHub Pages
│   ├── cv.pdf                      # Curriculum Vitae ATS-Ready scaricabile
│   ├── favicon.svg                 # Favicon vettoriale cyber-radar
│   └── robots.txt                  # Indicizzazione e direttive crawler
├── src/
│   ├── app/
│   │   ├── globals.css             # Regole Tailwind e scrollbar minimal
│   │   ├── layout.tsx              # Shell HTML, SEO e Schema.org JSON-LD
│   │   └── page.tsx                # SPA principale che compone tutte le sezioni
│   ├── components/
│   │   ├── sections/
│   │   │   ├── About.tsx           # Filosofia operativa e scheda operatore CardSpotlight
│   │   │   ├── Contact.tsx         # Canali diretti, email copy e social
│   │   │   ├── Education.tsx       # Laurea Magistrale, Triennale e Google Workshop
│   │   │   ├── ExperienceTimeline.tsx # Cronologia Telsy, docenze e incarichi
│   │   │   ├── Footer.tsx          # Standard enterprise, copyright e back-to-top
│   │   │   ├── Hero.tsx            # Headline, status live, CTA e InfiniteMovingCards
│   │   │   ├── ProjectsBento.tsx   # Bento Grid con Tesi Ransomware e Case Studies
│   │   │   ├── QuickTerminal.tsx   # Terminale DFIR interattivo React
│   │   │   └── SkillsMatrix.tsx    # Matrice competenze con filtri interattivi
│   │   └── ui/
│   │       ├── background-beams.tsx # Effetto raggi cyber Aceternity
│   │       ├── bento-grid.tsx       # Griglia bento asimmetrica
│   │       ├── card-spotlight.tsx   # Card con raggio luminoso interattivo
│   │       ├── floating-navbar.tsx  # Navbar fluttuante con blur
│   │       ├── infinite-moving-cards.tsx # Ticker infinito tecnologie
│   │       └── text-generate-effect.tsx # Reveal tipografico
│   ├── data/
│   │   ├── education.json          # Dati accademici e tesi
│   │   ├── experiences.json        # Cronologia e metriche di ruolo
│   │   ├── profile.json            # Anagrafica, contatti, bio
│   │   ├── projects.json           # Progetti, case studies e repository GitHub
│   │   └── skills.json             # Toolchain DFIR, EDR/SIEM, linguaggi
│   └── lib/
│       └── utils.ts                # Utility helper cn() (clsx + tailwind-merge)
├── next.config.mjs                 # Configurazione Next.js SSG
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## Comandi per lo Sviluppo Locale

Nessuna dipendenza globale richiesta: tutte le dipendenze sono gestite localmente in `node_modules`.

### 1. Avvio Ambiente di Sviluppo (Live Reload)
```bash
npm run dev
```
L'applicazione sarà disponibile su `http://localhost:3000`.

### 2. Compilazione Statica di Produzione
```bash
npm run build
```
Genera la directory `./out` statica pronta per il deployment.

### 3. Anteprima Locale del Server Statico
```bash
npx serve out
```

---

## Pipeline CI/CD GitHub Pages

Il repository include la GitHub Action `.github/workflows/deploy.yml`. Ad ogni merge o push sul branch `main`:
1. Viene effettuato il checkout del codice.
2. Viene installato l'ambiente Node 22 con caching delle dipendenze npm (`npm ci`).
3. Viene eseguita la build statica (`npm run build`).
4. La cartella `./out` viene caricata come artefatto GitHub Pages e distribuita su `https://isf3t.github.io/micheleDilollo.github.io/`.

---

## Snapshot & Ripristino di Fallback

In qualsiasi momento è possibile verificare o ripristinare il sito allo stato precedente:
- **Branch Remoto di Fallback**: `origin/backup-pre-redesign`
- **Archivio Locale di Sicurezza**: `legacy_portfolio_backup.tar.gz` (incluso in `.gitignore`)

Per ripristinare la versione precedente:
```bash
git checkout backup-pre-redesign
```