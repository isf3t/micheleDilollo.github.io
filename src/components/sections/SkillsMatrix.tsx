"use client";
import React, { useState } from "react";
import skillsData from "@/data/skills.json";
import { Shield, Wrench, Search, Code, Lock, Star, Sparkles } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export const SkillsMatrix = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categoryIcons: Record<string, React.ReactNode> = {
    dfir: <Shield className="w-4 h-4" />,
    tools: <Wrench className="w-4 h-4" />,
    edr: <Search className="w-4 h-4" />,
    coding: <Code className="w-4 h-4" />,
    appsec: <Lock className="w-4 h-4" />,
  };

  const categories = skillsData.categories;
  const displayedCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-20 border-t border-slate-800/60 relative bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Toolchain &amp; Competenze Core
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 font-sans tracking-tight mb-4">
            Matrice delle Competenze &amp; Tecnologie Operative
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Strumenti forensi specialistici, piattaforme EDR/SIEM enterprise e linguaggi di sviluppo per la threat detection e l&apos;automazione su larga scala.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              activeCategory === "all"
                ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800"
            }`}
          >
            Tutte le Aree
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                  : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800"
              }`}
            >
              {categoryIcons[cat.id]}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((cat) => (
            <CardSpotlight
              key={cat.id}
              color="#10b981"
              className="border-slate-800/80 bg-slate-900/40 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2 text-emerald-400 font-mono text-sm font-bold">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    {categoryIcons[cat.id] || <Sparkles className="w-4 h-4" />}
                  </div>
                  <span>{cat.name}</span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  {cat.description}
                </p>

                <div className="space-y-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-2.5 rounded-lg border flex items-center justify-between transition-colors ${
                        skill.highlight
                          ? "bg-slate-900/90 border-emerald-500/30 text-slate-100"
                          : "bg-slate-950/50 border-slate-800/80 text-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {skill.highlight && (
                          <Star className="w-3 h-3 text-amber-400 fill-amber-400 shrink-0" />
                        )}
                        <span className="text-xs font-mono font-medium">{skill.name}</span>
                      </div>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          skill.level === "Expert"
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                            : skill.level === "Advanced"
                            ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                            : "bg-slate-800 text-slate-400"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
};
