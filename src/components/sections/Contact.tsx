"use client";
import React, { useState } from "react";
import profile from "@/data/profile.json";
import { Mail, Phone, Github, Linkedin, Copy, Check, ExternalLink, ShieldCheck, ArrowUpRight } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/60 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Canali di Contatto
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 font-sans tracking-tight mb-4">
            Mettiamoci in Contatto
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {profile.availability}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Email Card with Copy Button */}
          <CardSpotlight
            color="#10b981"
            className="border-slate-800/80 bg-slate-900/40 p-6 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                Posta Elettronica
              </div>
              <div className="text-sm font-semibold text-slate-100 break-all mb-4">
                {profile.email}
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-slate-800/80">
              <button
                type="button"
                onClick={copyEmail}
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono text-xs font-semibold transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Indirizzo Copiato!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copia Indirizzo</span>
                  </>
                )}
              </button>
              <a
                href={`mailto:${profile.email}`}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 font-mono text-xs transition-colors"
              >
                <span>Apri Client Mail</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </CardSpotlight>

          {/* LinkedIn Card */}
          <CardSpotlight
            color="#6366f1"
            className="border-slate-800/80 bg-slate-900/40 p-6 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                Rete Professionale
              </div>
              <div className="text-sm font-semibold text-slate-100 mb-4">
                Michele Dilollo
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-mono text-xs font-semibold transition-colors"
              >
                <span>Connettiti su LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </CardSpotlight>

          {/* GitHub Card */}
          <CardSpotlight
            color="#06b6d4"
            className="border-slate-800/80 bg-slate-900/40 p-6 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                <Github className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                Codice &amp; Repositories
              </div>
              <div className="text-sm font-semibold text-slate-100 mb-4">
                @isf3t
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono text-xs font-semibold transition-colors"
              >
                <span>Profilo GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </CardSpotlight>

          {/* Direct Phone / Signal */}
          <CardSpotlight
            color="#f59e0b"
            className="border-slate-800/80 bg-slate-900/40 p-6 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                Recapito Telefonico
              </div>
              <div className="text-sm font-semibold text-slate-100 mb-4">
                {profile.phone}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80">
              <a
                href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono text-xs font-semibold transition-colors"
              >
                <span>Chiama Ora</span>
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>
          </CardSpotlight>
        </div>
      </div>
    </section>
  );
};
