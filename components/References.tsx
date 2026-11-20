"use client";

import React, { useState } from "react";
import {
  QuoteIcon,
  PhoneIcon,
  MailIcon,
  SparklesIcon,
  CheckIcon,
  CopyIcon,
} from "./Icons";
import { portfolioData, ReferenceItem } from "@/data/portfolio-data";

export default function References() {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="references" className="py-20 md:py-28 relative scroll-mt-20">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Professional Endorsement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional References
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Executive and technical leadership endorsements validating software development and work ethic.
          </p>
        </div>

        {/* References Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {portfolioData.references.map((ref: ReferenceItem, idx: number) => (
            <div
              key={idx}
              className="relative bg-slate-900/80 hover:bg-slate-900/95 border border-slate-800/90 hover:border-cyan-500/40 rounded-3xl p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/30 flex flex-col justify-between"
            >
              <div>
                {/* Decorative Quote Icon */}
                <div className="text-cyan-500/20 mb-4">
                  <QuoteIcon className="w-8 h-8" />
                </div>

                {/* Name & Title */}
                <h3 className="text-xl font-bold text-white mb-1">{ref.name}</h3>
                <div className="text-sm font-semibold text-cyan-400 mb-1">
                  {ref.role}
                </div>
                <div className="text-xs text-slate-400 mb-6 font-medium">
                  {ref.company}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 italic">
                  &ldquo;Dulshan exhibits high dedication to full-stack engineering, clean object-oriented architecture, and proactive team collaboration.&rdquo;
                </p>
              </div>

              {/* Contact Information */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-300 bg-slate-950/60 border border-slate-800/70 rounded-xl px-3.5 py-2.5">
                  <div className="flex items-center gap-2">
                    <MailIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="font-mono">{ref.email}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(ref.email, `email-${idx}`)}
                    className="text-slate-400 hover:text-cyan-300 transition-colors ml-2"
                    title="Copy Email"
                  >
                    {copiedIndex === `email-${idx}` ? (
                      <CheckIcon className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <CopyIcon className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-300 bg-slate-950/60 border border-slate-800/70 rounded-xl px-3.5 py-2.5">
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="font-mono">{ref.phone}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(ref.phone, `phone-${idx}`)}
                    className="text-slate-400 hover:text-cyan-300 transition-colors ml-2"
                    title="Copy Phone"
                  >
                    {copiedIndex === `phone-${idx}` ? (
                      <CheckIcon className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <CopyIcon className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
