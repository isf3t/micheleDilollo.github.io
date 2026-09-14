"use client";
import React from "react";
import education from "@/data/education.json";
import { GraduationCap, Award, BookOpen, CheckCircle, Calendar, MapPin } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export const Education = () => {
  return (
    <section id="education" className="py-20 border-t border-slate-800/60 relative bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            Formazione Accademica &amp; Workshop
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 font-sans tracking-tight mb-4">
            Percorso Universitario &amp; Certificazioni
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Solide basi teorico-scientifiche in Ingegneria Informatica e specializzazione magistrale in Cybersecurity presso la Sapienza Università di Roma, con tirocinio formativo Google Workshop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <CardSpotlight
              key={idx}
              color="#06b6d4"
              className="border-slate-800/80 bg-slate-900/40 p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-100 font-sans">
                        {edu.degree}
                      </h3>
                      <div className="text-xs font-mono text-cyan-400 font-semibold">
                        {edu.institution}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-500 mb-5">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Thesis details if present */}
                {edu.thesis && (
                  <div className="mb-5 p-4 rounded-xl bg-slate-950/70 border border-cyan-500/20 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                        {edu.thesis.type}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-slate-200 leading-snug">
                      &ldquo;{edu.thesis.title}&rdquo;
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {edu.thesis.impact}
                    </p>
                  </div>
                )}

                {/* Honors/Workshop if present */}
                {edu.honors && (
                  <div className="mb-5 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div className="text-xs text-amber-200 leading-snug">
                      <strong>Esperienza Formativa:</strong> {edu.honors}
                    </div>
                  </div>
                )}

                {/* Focus list */}
                <div className="space-y-2">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Discipline Chiave:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.focus.map((item, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-950/60 text-slate-300 text-xs font-mono border border-slate-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
};
