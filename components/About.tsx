"use client";

import React from "react";
import {
  CheckCircleIcon,
  SparklesIcon,
  UserCheckIcon,
  GraduationCapIcon,
  GlobeIcon,
  CodeIcon,
} from "./Icons";
import { portfolioData } from "@/data/portfolio-data";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative scroll-mt-20">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Dulshan Ranathunga
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Dedicated software engineering undergraduate committed to crafting reliable, scalable, and human-centric software.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Personal Narrative & Focus */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                Full-Stack Software Engineering Intern
              </h3>
              <p className="text-slate-300 leading-relaxed text-base mb-4">
                I am a 3rd-year Information Technology undergraduate at the{" "}
                <strong className="text-white">Sri Lanka Institute of Information Technology (SLIIT)</strong>.
                My passion lies at the intersection of high-performance backend systems and fluid, responsive user interfaces.
              </p>
              <p className="text-slate-300 leading-relaxed text-base mb-4">
                Throughout my academic and independent project journey, I have specialized in building
                distributed microservices backends using <strong className="text-cyan-300">Java 17 and Spring Boot</strong>,
                securing endpoints with <strong className="text-cyan-300">JWT Authentication</strong>, and persisting data
                across <strong className="text-cyan-300">MySQL</strong> and <strong className="text-cyan-300">MongoDB Atlas</strong>.
                On the client side, I engineer clean, accessible interfaces with <strong className="text-sky-300">React, Next.js</strong>, and <strong className="text-sky-300">Tailwind CSS</strong>.
              </p>
              <p className="text-slate-300 leading-relaxed text-base">
                I am actively seeking a <strong className="text-white">Full-Stack Software Engineering Internship</strong> where I can collaborate with talented engineering teams, contribute clean production-grade code, and ship meaningful solutions.
              </p>
            </div>

            {/* Core Competencies / Soft Skills */}
            <div className="bg-slate-900/40 border border-slate-800/70 rounded-2xl p-6 sm:p-8">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <UserCheckIcon className="w-5 h-5 text-cyan-400" />
                <span>Professional Soft Skills</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {portfolioData.softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-1">
                      <CheckCircleIcon className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{skill.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-normal pl-6">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Highlights, Languages & Location */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Education Callout */}
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 shrink-0">
                  <GraduationCapIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    Academic Enrollment
                  </span>
                  <h4 className="text-lg font-bold text-white mt-1">
                    BSc (Hons) in Information Technology
                  </h4>
                  <p className="text-sm text-slate-300 mt-1">
                    Sri Lanka Institute of Information Technology (SLIIT)
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">2024 - 2028 • 3rd Year Undergraduate</p>
                </div>
              </div>
            </div>

            {/* Language Proficiency */}
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6">
              <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <GlobeIcon className="w-4 h-4 text-cyan-400" />
                <span>Languages</span>
              </h4>
              <div className="space-y-3">
                {portfolioData.languages.map((lang, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-950/70 border border-slate-800/80"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-200">{lang.name}</div>
                      <div className="text-xs text-slate-400">{lang.note}</div>
                    </div>
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-800/40">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Internship Readiness Checklist */}
            <div className="bg-slate-900/40 border border-slate-800/70 rounded-2xl p-6">
              <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <CodeIcon className="w-4 h-4 text-cyan-400" />
                <span>Internship Readiness</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    Full-Stack capable: Ready to build React/Next.js client portals and Spring Boot microservices.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    Familiar with CI/CD automation via GitHub Actions and API documentation with Swagger.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    Experienced with both relational (MySQL) and NoSQL (MongoDB Atlas) data architectures.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    Able to work on-site, hybrid, or remote in Sri Lanka or globally.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
