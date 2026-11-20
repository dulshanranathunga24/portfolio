"use client";

import React, { useState } from "react";
import {
  CodeIcon,
  GlobeIcon,
  ServerIcon,
  DatabaseIcon,
  WrenchIcon,
  TerminalIcon,
  SparklesIcon,
} from "./Icons";
import { portfolioData } from "@/data/portfolio-data";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <CodeIcon className="w-5 h-5 text-cyan-400" />;
      case "Globe":
        return <GlobeIcon className="w-5 h-5 text-sky-400" />;
      case "Server":
        return <ServerIcon className="w-5 h-5 text-indigo-400" />;
      case "Database":
        return <DatabaseIcon className="w-5 h-5 text-teal-400" />;
      case "Wrench":
        return <WrenchIcon className="w-5 h-5 text-amber-400" />;
      default:
        return <TerminalIcon className="w-5 h-5 text-cyan-400" />;
    }
  };

  const categories = ["All", ...portfolioData.skillCategories.map((c) => c.name)];

  const filteredCategories =
    activeCategory === "All"
      ? portfolioData.skillCategories
      : portfolioData.skillCategories.filter((c) => c.name === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative scroll-mt-20 bg-slate-950/50">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            A comprehensive breakdown of programming languages, frameworks, databases, and engineering tools I work with daily.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/30 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/80">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{category.name}</h3>
                    <span className="text-xs text-slate-400">
                      {category.skills.length} core technologies
                    </span>
                  </div>
                </div>

                {/* Skills List in Category */}
                <div className="space-y-3.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        <span className="text-[11px] px-2 py-0.5 rounded font-mono font-medium bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-normal">
                        {skill.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-slate-900/60 to-indigo-950/30 border border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <TerminalIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Full-Stack Technology Ecosystem</div>
              <div className="text-xs text-slate-400">Java 17 • Spring Boot • React • Next.js • MongoDB Atlas • MySQL • GitHub Actions</div>
            </div>
          </div>
          <a
            href="#projects"
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 transition-colors"
          >
            <span>See technologies in action</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
