"use client";

import React, { useState } from "react";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  GithubIcon,
  LinkedinIcon,
  GlobeIcon,
  DownloadIcon,
  CheckIcon,
  CopyIcon,
  SparklesIcon,
} from "./Icons";
import { portfolioData } from "@/data/portfolio-data";

export default function Contact() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative scroll-mt-20 bg-slate-950/70">
      {/* Glow effect */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            I am actively looking for a Software Engineering Internship to contribute, build scalable systems, and grow with an engineering team. Reach out directly through any of the channels below.
          </p>
        </div>

        {/* Centered Direct Contact Details Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-900/80 border border-slate-800/90 rounded-3xl p-6 sm:p-10 backdrop-blur-sm shadow-2xl shadow-black/40">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Direct Contact Channels</h3>
              <p className="text-sm text-slate-400">
                Feel free to email me, call directly, or connect on GitHub and LinkedIn.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Item */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-cyan-950/70 text-cyan-400">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Email Address</div>
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      className="text-sm sm:text-base font-semibold text-slate-200 hover:text-cyan-300 transition-colors break-all"
                    >
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(portfolioData.personal.email, "email")}
                  className="p-2.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-cyan-300 transition-colors"
                  title="Copy Email"
                >
                  {copiedItem === "email" ? (
                    <CheckIcon className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <CopyIcon className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Phone Item */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-sky-950/70 text-sky-400">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Phone / WhatsApp</div>
                    <a
                      href={`tel:${portfolioData.personal.phone.replace(/\s+/g, "")}`}
                      className="text-sm sm:text-base font-semibold text-slate-200 hover:text-sky-300 transition-colors"
                    >
                      {portfolioData.personal.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(portfolioData.personal.phone, "phone")}
                  className="p-2.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-cyan-300 transition-colors"
                  title="Copy Phone"
                >
                  {copiedItem === "phone" ? (
                    <CheckIcon className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <CopyIcon className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Location Item */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                <div className="p-3 rounded-xl bg-teal-950/70 text-teal-400">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Location</div>
                  <div className="text-sm sm:text-base font-semibold text-slate-200">
                    {portfolioData.personal.location}
                  </div>
                </div>
              </div>

              {/* Profiles & Links */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={portfolioData.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all text-sm font-medium"
                >
                  <GithubIcon className="w-5 h-5 text-slate-200" />
                  <span>GitHub</span>
                </a>

                <a
                  href={portfolioData.personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-sky-500/40 text-slate-300 hover:text-sky-400 transition-all text-sm font-medium"
                >
                  <LinkedinIcon className="w-5 h-5 text-sky-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={portfolioData.personal.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-all text-sm font-medium"
                >
                  <GlobeIcon className="w-5 h-5 text-cyan-400" />
                  <span>Portfolio</span>
                </a>
              </div>

              {/* CV Download banner */}
              <div className="pt-4">
                <a
                  href={portfolioData.personal.cvDownloadUrl}
                  download="Dulshan_Ranathunga_CV.jpg"
                  className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl text-sm sm:text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.01]"
                >
                  <DownloadIcon className="w-5 h-5" />
                  <span>Download Full CV / Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
