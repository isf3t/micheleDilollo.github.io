"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import profile from "@/data/profile.json";
import { Download, Terminal, ChevronRight } from "lucide-react";

export const Hero = () => {
  const tickerItems = [
    { title: "Volatility Framework", category: "Analisi Memoria RAM", level: "Expert" },
    { title: "CrowdStrike Falcon", category: "EDR / XDR", level: "Expert" },
    { title: "Microsoft Defender ATP", category: "Threat Hunting", level: "Expert" },
    { title: "Hayabusa & Thor", category: "Analisi Log & Eventi", level: "Expert" },
    { title: "Python per la Sicurezza", category: "Automazione & Scripting", level: "Expert" },
    { title: "Malware Analysis", category: "Analisi Campioni", level: "Advanced" },
    { title: "Regole YARA & Sigma", category: "Detection Engineering", level: "Expert" },
    { title: "Wireshark & PCAP", category: "Analisi di Rete", level: "Advanced" },
    { title: "Mobile App Assessment", category: "Sicurezza Applicativa", level: "Advanced" },
    { title: "Docker & Container", category: "Infrastruttura", level: "Advanced" },
  ];

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center pt-28 pb-16 overflow-hidden">
      <BackgroundBeams />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Availability / Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-8 backdrop-blur-md shadow-lg shadow-emerald-500/10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="tracking-wide">Incident Responder &amp; DFIR Specialist</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-300">Telsy S.p.A.</span>
        </motion.div>

        {/* Main Title & Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-sans text-slate-100">
            {profile.name}
          </h1>

          <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-sans bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-400">
            {profile.role} &bull; {profile.specialization}
          </div>
        </motion.div>

        {/* Tagline Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-3xl text-slate-300 text-sm sm:text-base leading-relaxed font-sans"
        >
          {profile.tagline}
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 font-mono text-xs"
        >
          <a
            href="cv.pdf"
            download="Michele_Dilollo_CV.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold tracking-wide transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            <span>Scarica CV (PDF)</span>
          </a>

          <a
            href="#terminal"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/50 transition-all hover:-translate-y-0.5"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Console DFIR</span>
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-0.5"
          >
            <span>Progetti e Ricerca</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm text-left hover:border-slate-700 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-semibold text-slate-200">
                {stat.label}
              </div>
              <div className="mt-1 text-[11px] text-slate-500 leading-snug">
                {stat.description}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Infinite Technology Moving Cards */}
      <div className="w-full mt-12 relative z-10">
        <InfiniteMovingCards items={tickerItems} speed="normal" />
      </div>
    </section>
  );
};
