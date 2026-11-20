"use client";

import React from "react";
import { GraduationCapIcon, SparklesIcon, CheckCircleIcon } from "./Icons";
import { portfolioData, EducationItem } from "@/data/portfolio-data";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative scroll-mt-20 bg-slate-950/60">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Qualifications
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            My academic journey in Information Technology and foundations in technology streams.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute top-4 bottom-4 left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 via-sky-500/40 to-slate-800 pointer-events-none" />

          <div className="space-y-12">
            {portfolioData.education.map((item: EducationItem, index: number) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  } gap-6 md:gap-12 pl-12 md:pl-0`}
                >
                  {/* Timeline Node Badge on Center Line */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1.5 w-9 h-9 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30 z-10">
                    <GraduationCapIcon className="w-4 h-4 text-cyan-400" />
                  </div>

                  {/* Empty Spacer on Opposite Side (Desktop) */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card */}
                  <div className="w-full md:w-1/2">
                    <div className="bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/30">
                      {/* Period Badge & Status */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/50">
                          {item.period}
                        </span>
                        <span className="text-xs font-medium text-slate-400">
                          {item.status}
                        </span>
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                        {item.degree}
                      </h3>

                      {/* Institution */}
                      <p className="text-sm font-medium text-cyan-400 mb-3">
                        {item.institution}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Achievements if any */}
                      {item.achievements && (
                        <div className="pt-3 border-t border-slate-800/70 space-y-1.5">
                          {item.achievements.map((ach, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircleIcon className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
