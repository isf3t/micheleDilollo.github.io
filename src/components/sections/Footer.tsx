"use client";
import React from "react";
import profile from "@/data/profile.json";
import { Shield, ArrowUp, Github } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-slate-800/80 bg-slate-950 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="text-slate-200 font-bold font-sans">
                Michele Dilollo
              </div>
              <div className="text-[11px] text-slate-500">
                Incident Responder &bull; DFIR Specialist &bull; Telsy S.p.A.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/isf3t/micheleDilollo.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1"
              aria-label="Torna su"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-600">
          <div>
            &copy; {new Date().getFullYear()} Michele Dilollo. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Static Export &bull; Hosted on GitHub Pages</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
