"use client";
import React from "react";
import experiences from "@/data/experiences.json";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-20 border-t border-slate-800/60 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Esperienze Professionali
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 font-sans tracking-tight mb-4">
            Percorso Lavorativo &amp; Incarichi
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Attività nell&apos;ambito dell&apos;Incident Response e della Digital Forensics in Telsy S.p.A., affiancata da esperienze pregresse nello sviluppo software full-stack e nella docenza tecnica.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800/80 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Pin/Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  exp.featured
                    ? "bg-emerald-500 border-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.6)]"
                    : "bg-slate-900 border-slate-600 group-hover:border-cyan-400 group-hover:bg-cyan-500"
                }`}
              />

              {/* Experience Card */}
              <div
                className={`rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
                  exp.featured
                    ? "bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950/80 border-emerald-500/30 shadow-xl shadow-emerald-500/5"
                    : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700"
                }`}
              >
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/80 mb-5">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold text-slate-100 font-sans">
                        {exp.company}
                      </h3>
                      {exp.featured && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase">
                          Posizione Attuale
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-400">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-emerald-400 font-mono mt-1">
                      {exp.role}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {exp.highlights.map((h, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/60 space-y-1.5"
                    >
                      <div className="text-xs font-mono font-semibold text-slate-200 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{h.area}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed pl-5">
                        {h.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md bg-slate-800/60 text-slate-300 text-[11px] font-mono border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
