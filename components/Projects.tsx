"use client";

import React, { useState } from "react";
import {
  GithubIcon,
  ExternalLinkIcon,
  SparklesIcon,
  CheckCircleIcon,
} from "./Icons";
import { portfolioData, Project } from "@/data/portfolio-data";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filterOptions = ["All", "Microservices", "Full-Stack", "Backend / System"];

  const filteredProjects =
    activeFilter === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28 relative scroll-mt-20">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Projects
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Real-world backend architectures, microservices, and full-stack applications engineered with Java, Spring Boot, React, and databases.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800/80"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="group relative bg-slate-900/80 hover:bg-slate-900/95 border border-slate-800/90 hover:border-cyan-500/40 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/40 flex flex-col justify-between"
            >
              <div>
                {/* Top Category & Metrics Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/50">
                    {project.category}
                  </span>
                  {project.metrics && (
                    <span className="text-xs font-mono text-slate-400 bg-slate-950/80 border border-slate-800/80 px-2.5 py-0.5 rounded-md">
                      {project.metrics}
                    </span>
                  )}
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-sky-400 mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Architectural Highlights */}
                <div className="mb-6 space-y-2 bg-slate-950/60 border border-slate-800/70 rounded-2xl p-4">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    Key Features &amp; Implementation:
                  </span>
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircleIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions: Code & Live Preview */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                <a
                  href={project.githubUrl || portfolioData.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Source</span>
                </a>

                <a
                  href={project.liveUrl || portfolioData.personal.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-500/20 to-sky-500/20 hover:from-cyan-500/30 hover:to-sky-500/30 border border-cyan-500/40 text-cyan-300 transition-all hover:scale-[1.02]"
                >
                  <span>Project Details</span>
                  <ExternalLinkIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
