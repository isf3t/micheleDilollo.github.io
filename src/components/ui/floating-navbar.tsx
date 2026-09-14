"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Download, Terminal, Menu, X, Shield } from "lucide-react";

export interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
          setMobileMenuOpen(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.25,
        }}
        aria-label="Navigazione Principale"
        className={cn(
          "fixed top-4 inset-x-0 mx-auto max-w-5xl z-50 px-4",
          className
        )}
      >
        <div className="flex items-center justify-between border border-slate-800/80 rounded-full bg-slate-950/80 backdrop-blur-xl px-4 py-2.5 shadow-2xl shadow-emerald-500/5">
          {/* Brand badge */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-slate-100 font-mono font-bold text-xs tracking-wider group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-full px-2 py-1"
          >
            <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
              <Shield className="w-3.5 h-3.5" />
            </div>
            <span className="hidden sm:inline-block">Michele Dilollo</span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 text-xs font-mono">
            {navItems.map((navItem, idx) => (
              <a
                key={`link-${idx}`}
                href={navItem.link}
                className="px-3 py-1.5 text-slate-400 hover:text-emerald-400 hover:bg-slate-900/80 rounded-full transition-colors relative focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                {navItem.name}
              </a>
            ))}
          </div>

          {/* Right Action: CV Download */}
          <div className="flex items-center gap-2">
            <a
              href="cv.pdf"
              download="Michele_Dilollo_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:text-emerald-200 hover:border-emerald-400 font-mono text-xs font-semibold transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Scarica CV</span>
            </a>

            {/* Mobile hamburger button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-400 hover:text-slate-200 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 p-4 rounded-2xl bg-slate-950/95 border border-slate-800 backdrop-blur-2xl shadow-2xl flex flex-col gap-2 font-mono text-xs"
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-${idx}`}
                  href={item.link}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-slate-300 hover:text-emerald-400 hover:bg-slate-900/80 transition-colors flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <span className="text-slate-600">→</span>
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </AnimatePresence>
  );
};
