import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://isf3t.github.io/micheleDilollo.github.io"),
  title: "Michele Dilollo | Cybersecurity Specialist, Incident Responder & DFIR Expert",
  description:
    "Portfolio enterprise di Michele Dilollo: Incident Responder e Digital Forensics & Incident Response (DFIR) Specialist a Roma (Telsy S.p.A.). Difesa di infrastrutture critiche, memory forensics con Volatility, reverse engineering malware, threat hunting e automazione.",
  authors: [{ name: "Michele Dilollo", url: "https://github.com/isf3t" }],
  keywords: [
    "Michele Dilollo",
    "Cybersecurity Specialist",
    "Incident Responder",
    "DFIR Expert",
    "Digital Forensics",
    "Memory Forensics",
    "Volatility",
    "Threat Hunting",
    "CrowdStrike Falcon",
    "Microsoft Defender",
    "Reverse Engineering",
    "Telsy",
    "Sapienza Università di Roma",
    "Ransomware Detection",
  ],
  creator: "Michele Dilollo",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://isf3t.github.io/micheleDilollo.github.io/",
    title: "Michele Dilollo | Cybersecurity Specialist & DFIR Expert",
    description:
      "Incident Responder & DFIR Specialist (Telsy S.p.A.). Difesa di infrastrutture critiche ed enterprise, eradicazione di minacce complesse (APT, Ransomware) e reverse engineering di malware.",
    siteName: "Michele Dilollo Enterprise Portfolio",
    images: [
      {
        url: "/favicon.svg",
        width: 1200,
        height: 630,
        alt: "Michele Dilollo - DFIR & Cybersecurity Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michele Dilollo | Cybersecurity Specialist & DFIR Expert",
    description:
      "Incident Responder & DFIR Specialist (Telsy S.p.A.). Difesa di infrastrutture critiche ed enterprise.",
    images: ["/favicon.svg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Michele Dilollo",
  jobTitle: "Incident Responder & DFIR Specialist",
  url: "https://isf3t.github.io/micheleDilollo.github.io",
  sameAs: [
    "https://github.com/isf3t",
    "https://www.linkedin.com/in/michele-dilollo-831595176",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Telsy S.p.A.",
  },
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Sapienza Università di Roma",
    },
  ],
  knowsAbout: [
    "Digital Forensics & Incident Response (DFIR)",
    "Memory Forensics (Volatility)",
    "Threat Hunting",
    "Malware Analysis & Reverse Engineering",
    "EDR/XDR Platforms (CrowdStrike, Defender)",
    "Ransomware Early Detection",
    "Application Security",
  ],
  description:
    "Incident Responder e Cybersecurity Specialist con oltre 3 anni di esperienza operativa avanzata in DFIR e threat hunting su infrastrutture enterprise e governative.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className="dark scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}
