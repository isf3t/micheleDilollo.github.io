"use client";
import React, { useState, useRef, useEffect } from "react";
import { Terminal, Send, Trash2, Shield, Download, Sparkles } from "lucide-react";

interface CommandLog {
  command: string;
  output: string;
}

export const QuickTerminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandLog[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commandsMap: Record<string, string> = {
    help: `Comandi DFIR operativi disponibili:
  - whoami    : Profilo sintetico e ruolo
  - dfir      : Metodologie di analisi forense e toolchain (Volatility, Hayabusa)
  - edr       : Piattaforme EDR/SIEM (CrowdStrike Falcon, Defender, QRadar)
  - telsy     : Attività operative svolte in Telsy S.p.A.
  - thesis    : Sintesi tesi Magistrale Sapienza su Early Ransomware Detection
  - contact   : Dettagli di contatto (email, telefono, GitHub, LinkedIn)
  - download  : Download immediato del CV in formato PDF ATS-Ready
  - clear     : Pulisce la schermata della console`,

    whoami: `MICHELE DILOLLO
Ruolo: Cybersecurity Specialist | Incident Responder & DFIR Expert
Seniority: 3+ anni IR/DFIR operativo (Enterprise/Gov), 5+ anni Software Engineering
Location: Roma, Italia | Formazione: Laurea Magistrale in Cybersecurity (Sapienza)`,

    dfir: `TOOLCHAIN FORENSE ATTIVA:
  • Memory Forensics: Volatility Framework (RAM dumps, process injection, rootkits)
  • Host/Log Forensics: Hayabusa, Thor, Loki, Plaso, Timesketch
  • Network: Wireshark, Snort, Suricata, PCAP carving
  • Reverse Engineering: Analisi statica/dinamica malware, C2 & IoC extraction`,

    edr: `PIATTAFORME EDR / XDR / SIEM:
  • CrowdStrike Falcon (Hunting queries, containment, real-time response)
  • Microsoft Defender for Endpoint (KQL hunting, threat analytics)
  • Trend Micro EDR / IBM QRadar / Cynet`,

    telsy: `TELSY S.P.A. (Luglio 2023 – Presente):
  • Gestione end-to-end incidenti di sicurezza in contesti enterprise e governativi
  • Triage, isolation, containment, eradication e post-incident recovery
  • Analisi forense RAM con Volatility e timeline log con Hayabusa/Thor/Loki
  • Sviluppo di query custom di Threat Hunting e detection rules`,

    thesis: `TESI MAGISTRALE IN CYBERSECURITY (Sapienza Università di Roma):
  Titolo: Sviluppo di una rete neurale avanzata per la distinzione di frammenti compressi vs crittografati
  Obiettivo: Early detection di attacchi Ransomware prima della distruzione irreversibile dei dati.`,

    contact: `CANALI DI CONTATTO:
  • Email: michele.dlsr@gmail.com
  • Telefono: +39 346 49 31 516
  • GitHub: https://github.com/isf3t
  • LinkedIn: https://www.linkedin.com/in/michele-dilollo-831595176
  • Portfolio: https://isf3t.github.io`,

    download: `Avvio del download di Michele_Dilollo_CV.pdf...`,
  };

  const handleCommand = (cmd: string) => {
    const raw = cmd.trim().toLowerCase();
    if (!raw) return;

    if (raw === "clear") {
      setHistory([]);
      return;
    }

    if (raw === "download") {
      const link = document.createElement("a");
      link.href = "cv.pdf";
      link.download = "Michele_Dilollo_CV.pdf";
      link.click();
    }

    const output =
      commandsMap[raw] ||
      `Comando non riconosciuto: '${raw}'. Digita 'help' per la lista dei comandi disponibili.`;

    setHistory((prev) => [...prev, { command: raw, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <section id="terminal" className="py-20 border-t border-slate-800/60 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Console DFIR Interattiva
            </div>
            <span className="text-xs font-mono text-slate-500">
              Digita <code className="text-emerald-400 font-bold">help</code> per i comandi
            </span>
          </div>

          {/* Terminal Window */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden font-mono text-xs">
            {/* Terminal Header */}
            <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                <span className="text-slate-400 text-xs ml-2">md-soc-analyst@telsy-dfir:~</span>
              </div>
              <button
                type="button"
                onClick={() => setHistory([])}
                className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1"
                aria-label="Pulisci terminale"
              >
                <Trash2 className="w-3 h-3" />
                <span>[clear screen]</span>
              </button>
            </div>

            {/* Terminal Body */}
            <div
              ref={scrollRef}
              className="p-4 sm:p-6 space-y-4 min-h-[240px] max-h-[400px] overflow-y-auto text-slate-300 leading-relaxed"
            >
              <div className="text-slate-400">
                Benvenuto nella console DFIR di Michele Dilollo (v2.4). Digita un comando o clicca sui suggerimenti:
              </div>

              {/* Quick suggestion chips */}
              <div className="flex flex-wrap gap-2 py-1">
                {["whoami", "dfir", "edr", "telsy", "thesis", "contact", "download"].map(
                  (cmd) => (
                    <button
                      key={cmd}
                      type="button"
                      onClick={() => handleCommand(cmd)}
                      className="px-2.5 py-1 rounded-md bg-slate-900 text-emerald-400 border border-slate-800 hover:border-emerald-500/50 transition-colors text-[11px]"
                    >
                      {cmd}
                    </button>
                  )
                )}
              </div>

              {/* Command History */}
              {history.map((item, idx) => (
                <div key={idx} className="pt-3 border-t border-slate-900/80 space-y-1">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-emerald-400 font-bold">➜</span>
                    <span className="text-cyan-400">~</span>
                    <span className="text-slate-100 font-semibold">{item.command}</span>
                  </div>
                  <pre className="text-slate-300 font-mono text-[11px] whitespace-pre-wrap leading-relaxed pl-4">
                    {item.output}
                  </pre>
                </div>
              ))}
            </div>

            {/* Input Line */}
            <form
              onSubmit={handleSubmit}
              className="bg-slate-900/40 px-4 sm:px-6 py-3 border-t border-slate-800 flex items-center gap-2"
            >
              <span className="text-emerald-400 font-bold">➜</span>
              <span className="text-cyan-400 font-semibold">~</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoComplete="off"
                spellCheck="false"
                placeholder="digita 'help' o un comando..."
                aria-label="DFIR Terminal Input"
                className="flex-1 bg-transparent border-none text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-0 font-mono text-xs"
              />
              <button
                type="submit"
                className="text-slate-500 hover:text-emerald-400 p-1"
                aria-label="Invia comando"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
