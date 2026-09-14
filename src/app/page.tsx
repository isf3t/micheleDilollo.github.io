"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ProjectsBento } from "@/components/sections/ProjectsBento";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { SkillsMatrix } from "@/components/sections/SkillsMatrix";
import { QuickTerminal } from "@/components/sections/QuickTerminal";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const navItems = [
    { name: "Profilo", link: "#about" },
    { name: "Esperienze", link: "#experience" },
    { name: "Progetti", link: "#projects" },
    { name: "Competenze", link: "#skills" },
    { name: "Console DFIR", link: "#terminal" },
    { name: "Formazione", link: "#education" },
    { name: "Contatti", link: "#contact" },
  ];

  return (
    <main className="relative bg-slate-950 flex flex-col justify-center items-center overflow-clip mx-auto">
      <FloatingNav navItems={navItems} />
      <div className="w-full">
        <Hero />
        <About />
        <ProjectsBento />
        <ExperienceTimeline />
        <SkillsMatrix />
        <QuickTerminal />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
