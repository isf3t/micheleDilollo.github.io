# Michele Dilollo — Enterprise DFIR Portfolio

> Portfolio personale enterprise ad altissime prestazioni per **Michele Dilollo**, Cybersecurity Specialist & DFIR Expert.

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![WCAG](https://img.shields.io/badge/WCAG-2.1_AA-10B981?style=flat-square)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-100%2F100-00CC66?style=flat-square)](https://pagespeed.web.dev/)
[![GitHub Actions](https://img.shields.io/badge/CI%2FCD-Automated_Deploy-2088FF?style=flat-square&logo=github-actions&logoColor=white)](https://github.com/isf3t/micheleDilollo.github.io/actions)

---

## Panoramica del Progetto

Il portfolio è stato ingegnerizzato con l'obiettivo di comunicare autorevolezza, seniority e precisione metodologica nell'ambito della sicurezza informatica difensiva:

- **Posizionamento**: Incident Responder & DFIR Specialist (Telsy S.p.A.), focalizzato sulla difesa di infrastrutture critiche/governative, memory forensics (Volatility), threat hunting (CrowdStrike, Defender) e reverse engineering.
- **Ricerca Sperimentale**: Spotlight sulla tesi magistrale (*Sapienza Università di Roma*) per la distinzione quantitativa tramite rete neurale tra frammenti compressi e crittografati per l'early detection di attacchi Ransomware.
- **Interattività**: Console DFIR interattiva ed accessibile per simulare una workstation operativa.
- **Zero FOUT Dark Mode**: Tema dark cyber nativo con supporto a contrasto elevato conforme WCAG 2.1 AA.
- **Separazione Dati / Presentazione**: Tutti i contenuti sono manutenibili direttamente in `src/data/*.json`.

---

## Architettura & Directory Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml          # Pipeline CI/CD GitHub Pages automatica
├── public/
│   ├── cv.pdf                  # Curriculum Vitae ATS-Ready scaricabile
│   ├── favicon.svg             # Favicon vettoriale cyber-radar
│   └── robots.txt              # Indicizzazione e sitemap standard
├── src/
│   ├── components/
│   │   ├── About.astro         # Filosofia operativa e scheda operatore
│   │   ├── Contact.astro       # Canali diretti, email copy e social
│   │   ├── Education.astro     # Laurea Magistrale, Triennale e Google Workshop
│   │   ├── ExperienceTimeline.astro # Cronologia Telsy, docenze e incarichi
│   │   ├── Footer.astro        # Standard enterprise e link repo
│   │   ├── Hero.astro          # Headline, status live e metriche d'impatto
│   │   ├── Navbar.astro        # Header sticky con backdrop blur e theme toggle
│   │   ├── QuickTerminal.astro # Terminale DFIR interattivo
│   │   ├── ResearchSpotlight.astro # Focus sulla tesi Ransomware
│   │   ├── SEO.astro           # OpenGraph, Twitter card e JSON-LD schema.org
│   │   ├── SkillsMatrix.astro  # Matrice competenze con filtri interattivi
│   │   └── ThemeScript.astro   # Script inline zero-flash per color-scheme
│   ├── data/
│   │   ├── education.json      # Dati accademici
│   │   ├── experiences.json    # Cronologia e metriche di ruolo
│   │   ├── profile.json        # Anagrafica, contatti, bio
│   │   └── skills.json         # Toolchain DFIR, EDR/SIEM, linguaggi
│   ├── layouts/
│   │   └── BaseLayout.astro    # Shell HTML accessibile con skip links
│   ├── pages/
│   │   └── index.astro         # Single Page Application ad alte prestazioni
│   └── styles/
│       └── global.css          # Design system e variabili Tailwind v4
├── astro.config.mjs            # Configurazione Astro 5 SSG
├── package.json
└── tsconfig.json
```

---

## Comandi per lo Sviluppo Locale

### 1. Avvio Ambiente di Sviluppo (Live Reload)
```bash
npm run dev
```
L'applicazione sarà disponibile su `http://localhost:4321`.

### 2. Controllo Sintattico e Tipi
```bash
npm run check
```

### 3. Compilazione Statica di Produzione
```bash
npm run build
```

### 4. Anteprima Locale della Build Statica
```bash
npm run preview
```
L'anteprima statica ad altissime prestazioni sarà servita su `http://localhost:4321`.

---

## Pipeline CI/CD GitHub Pages

Il repository include la GitHub Action `.github/workflows/deploy.yml`. Ad ogni merge o push sul branch `main`:
1. Viene effettuato il checkout del codice.
2. Viene installato l'ambiente Node con caching delle dipendenze npm.
3. Viene eseguita la build statica (`npm run build`).
4. La cartella `dist/` viene caricata come artefatto GitHub Pages e distribuita istantaneamente su `https://isf3t.github.io/`.