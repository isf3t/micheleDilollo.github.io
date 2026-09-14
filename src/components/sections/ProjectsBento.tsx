"use client";
import React from "react";
import projects from "@/data/projects.json";
import { ExternalLink, GitBranch, ArrowUpRight } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export const ProjectsBento = () => {
  const featured = projects.find((p) => p.featured) || projects[0];
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 border-t border-slate-800/60 relative bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            Progetti &amp; Ricerca
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 font-sans tracking-tight mb-4">
            Progetti Selezionati e Ricerca Accademica
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Panoramica della ricerca svolta per la tesi magistrale, degli strumenti sviluppati per l&apos;analisi forense e delle attività di threat hunting e detection engineering.
          </p>
        </div>

        {/* Featured Case Study: Master's Thesis Spotlight */}
        <div className="mb-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-cyan-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold">
                  Tesi di Laurea Magistrale
                </span>
                <span className="px-3 py-1 rounded-md bg-slate-800/80 text-slate-300 font-mono text-xs">
                  Sapienza Università di Roma
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 font-sans leading-snug">
                {featured.title}
              </h3>

              <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
                <p>{featured.description}</p>
                <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-cyan-200 text-xs">
                  <strong>Obiettivo:</strong> {featured.impact}
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Aspetti Tecnici:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {featured.highlights?.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags & Repo Link */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {featured.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 text-xs font-mono border border-slate-700/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={featured.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold transition-colors"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Pipeline Architecture Diagram */}
            <div className="lg:col-span-5 bg-slate-950/80 rounded-xl border border-slate-800 p-5 font-mono text-xs text-slate-300 space-y-4">
              <div className="text-cyan-400 font-semibold text-xs border-b border-slate-800 pb-2 flex items-center justify-between">
                <span>FASE DI ANALISI E CLASSIFICAZIONE</span>
                <span className="text-[10px] text-slate-500">PROTOTIPO</span>
              </div>

              <div className="space-y-3">
                {featured.pipeline?.map((step, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-3">
                      <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-mono text-[10px] font-bold">
                        {step.step}
                      </span>
                      <div>
                        <div className="text-slate-200 font-semibold">{step.name}</div>
                        <div className="text-slate-400 text-[11px] mt-0.5">{step.detail}</div>
                      </div>
                    </div>
                    {idx < (featured.pipeline?.length || 0) - 1 && (
                      <div className="flex justify-center text-slate-600">↓</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid for Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {others.map((proj) => (
            <CardSpotlight
              key={proj.id}
              color="#06b6d4"
              className="border-slate-800 hover:border-cyan-500/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                    {proj.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {proj.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-100 font-sans mb-1">
                  {proj.title}
                </h3>
                <div className="text-xs text-slate-400 font-mono mb-3">
                  {proj.subtitle}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {proj.description}
                </p>

                <div className="mb-4 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] text-slate-300">
                  <strong className="text-emerald-400">Beneficio:</strong> {proj.impact}
                </div>

                <ul className="space-y-1 mb-4 text-[11px] text-slate-400">
                  {proj.highlights?.map((h, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-cyan-400">▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2 flex-wrap">
                <div className="flex flex-wrap gap-1">
                  {proj.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[10px] font-mono border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-xs font-mono font-semibold transition-colors"
                >
                  <span>Repository GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
};
