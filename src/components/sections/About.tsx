"use client";
import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import profile from "@/data/profile.json";
import { ShieldCheck, Cpu, Terminal, Network, Binary, Zap, ExternalLink, Mail, Phone } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-800/60 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Textual Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Profilo &amp; Approccio Operativo
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 font-sans tracking-tight">
              Risposta tempestiva alle minacce con rigore scientifico e automazione.
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {profile.about.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Operational Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-mono font-bold text-xs mb-3">
                  01
                </div>
                <h3 className="text-sm font-semibold text-slate-200 mb-1">Incident Triage &amp; Containment</h3>
                <p className="text-xs text-slate-400">Isolamento rapido e contenimento chirurgico per minimizzare il blast radius su asset critici.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs mb-3">
                  02
                </div>
                <h3 className="text-sm font-semibold text-slate-200 mb-1">Deep Forensic Discovery</h3>
                <p className="text-xs text-slate-400">Acquisizione RAM, timeline log Hayabusa/Thor e correlazione evidenze host/network.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-mono font-bold text-xs mb-3">
                  03
                </div>
                <h3 className="text-sm font-semibold text-slate-200 mb-1">Malware Deconstruction</h3>
                <p className="text-xs text-slate-400">Dissezionamento di payload malevoli, estrazione IoC e configurazioni C2 per la CTI.</p>
              </div>
            </div>
          </div>

          {/* High-Tech Operator Specs Card with CardSpotlight */}
          <div className="lg:col-span-5">
            <CardSpotlight color="#10b981" className="border-slate-800 shadow-2xl">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                </div>
                <span className="font-mono text-[11px] text-slate-400">operator_id: MD-DFIR-01</span>
              </div>

              <div className="space-y-4 font-mono text-xs text-slate-300">
                <div>
                  <span className="text-slate-500">OPERATORE:</span>
                  <span className="text-emerald-400 font-semibold ml-2">{profile.name}</span>
                </div>
                <div>
                  <span className="text-slate-500">RUOLO ATTUALE:</span>
                  <span className="text-slate-200 ml-2">Incident Responder &amp; DFIR Specialist (Telsy S.p.A.)</span>
                </div>
                <div>
                  <span className="text-slate-500">LOCATION:</span>
                  <span className="text-slate-200 ml-2">{profile.location}</span>
                </div>
                <div>
                  <span className="text-slate-500">SETTORI DI DIFESA:</span>
                  <span className="text-slate-200 ml-2">Infrastrutture Critiche, Enterprise, Governativo</span>
                </div>
                <div>
                  <span className="text-slate-500">SPECIALIZZAZIONI CORE:</span>
                  <div className="mt-2 flex flex-wrap gap-1.5 font-sans">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 text-[11px] font-mono border border-emerald-500/30">Memory Forensics</span>
                    <span className="px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 text-[11px] font-mono border border-cyan-500/30">Threat Hunting</span>
                    <span className="px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 text-[11px] font-mono border border-indigo-500/30">Malware Analysis</span>
                    <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 text-[11px] font-mono border border-amber-500/30">Ransomware Detection</span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-mono border border-slate-700">Python Automation</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-slate-500">CANALI ACCESSO:</span>
                  <div className="mt-2 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Email:</span>
                      <a href={`mailto:${profile.email}`} className="text-emerald-400 hover:underline">{profile.email}</a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Telefono:</span>
                      <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="text-slate-200 hover:text-emerald-400">{profile.phone}</a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">GitHub:</span>
                      <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline flex items-center gap-1">
                        <span>github.com/isf3t</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">LinkedIn:</span>
                      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline flex items-center gap-1">
                        <span>in/michele-dilollo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardSpotlight>
          </div>
        </div>
      </div>
    </section>
  );
};
