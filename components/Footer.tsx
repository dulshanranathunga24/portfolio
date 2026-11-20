"use client";

import React from "react";
import Image from "next/image";
import {
  GithubIcon,
  LinkedinIcon,
  GlobeIcon,
  MailIcon,
  ArrowUpIcon,
  MapPinIcon,
} from "./Icons";
import { portfolioData } from "@/data/portfolio-data";

export default function Footer() {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Left Brand */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-cyan-500/30">
              <Image
                src={portfolioData.personal.avatarUrl}
                alt={portfolioData.personal.name}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-bold text-white text-base">
                {portfolioData.personal.name}
              </div>
              <div className="text-xs text-slate-400">
                Software Engineering Intern • SLIIT Undergraduate
              </div>
            </div>
          </div>

          {/* Center Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">
              Education
            </a>
            <a href="#references" className="hover:text-cyan-400 transition-colors">
              References
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Right Socials & Scroll to Top */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-sky-400 border border-slate-800 hover:border-slate-700 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-slate-700 transition-colors"
              aria-label="Portfolio"
            >
              <GlobeIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-emerald-400 border border-slate-800 hover:border-slate-700 transition-colors"
              aria-label="Email"
            >
              <MailIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-cyan-950/70 border border-cyan-800/60 text-cyan-400 hover:text-white hover:bg-cyan-900/60 transition-colors ml-2"
              title="Scroll back to top"
              aria-label="Scroll back to top"
            >
              <ArrowUpIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom line with copyright and location */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} {portfolioData.personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <MapPinIcon className="w-3.5 h-3.5 text-slate-400" />
            <span>Based in Divulapitiya, Sri Lanka</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
