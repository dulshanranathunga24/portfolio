"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  DownloadIcon,
  ChevronRightIcon,
  SparklesIcon,
  CheckIcon,
  CopyIcon,
  GlobeIcon,
} from "./Icons";
import { portfolioData } from "@/data/portfolio-data";

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/20 via-sky-500/15 to-indigo-600/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 blur-[90px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium shadow-sm shadow-cyan-950 mb-6 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Software Engineering Internships</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                {portfolioData.personal.name}
              </span>
            </h1>

            {/* Role Title Subtitle */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 mb-5 flex items-center gap-2">
              <span>Software Engineering Intern</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400 font-mono text-lg sm:text-xl">Full-Stack Developer</span>
            </h2>

            {/* Profile Bio */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-8">
              3rd-year IT undergraduate at{" "}
              <span className="text-slate-200 font-medium">SLIIT</span> specializing in full-stack
              web development using{" "}
              <span className="text-cyan-300 font-medium">React, Next.js, Java</span>, and{" "}
              <span className="text-sky-300 font-medium">Spring Boot</span>. Experienced in designing
              responsive user interfaces, developing RESTful APIs, and managing MySQL and MongoDB databases.
              Passionate about building and shipping scalable end-to-end applications.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Projects</span>
                <ChevronRightIcon className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-xl transition-all hover:-translate-y-0.5"
              >
                <MailIcon className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <a
                href={portfolioData.personal.cvDownloadUrl}
                download="Dulshan_Ranathunga_CV.jpg"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-300 hover:text-cyan-300 bg-slate-900/50 hover:bg-slate-800/80 border border-slate-800 rounded-xl transition-all"
                title="Download Dulshan's CV"
              >
                <DownloadIcon className="w-4 h-4 text-sky-400" />
                <span>Resume / CV</span>
              </a>
            </div>

            {/* Direct Connect Quick Links */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-sm text-slate-400 w-full">
              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-slate-200" />
                <span>GitHub</span>
              </a>

              <a
                href={portfolioData.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-300 hover:border-slate-700 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={portfolioData.personal.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-slate-700 transition-colors"
              >
                <GlobeIcon className="w-4 h-4 text-cyan-400" />
                <span>Portfolio</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-300 hover:border-slate-700 transition-colors"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <CheckIcon className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <CopyIcon className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 ml-auto">
                <MapPinIcon className="w-3.5 h-3.5 text-slate-400" />
                <span>Divulapitiya, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Card with Avatar & Tech Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>

              {/* Main Card */}
              <div className="relative bg-slate-900/90 border border-slate-800/90 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center">
                {/* Avatar with circular ring */}
                <div className="relative mb-6">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden ring-4 ring-cyan-500/40 p-1 bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600 shadow-xl shadow-cyan-500/20">
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-950 relative">
                      <Image
                        src={portfolioData.personal.avatarUrl}
                        alt="Dulshan Ranathunga"
                        width={360}
                        height={360}
                        priority
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Corner Experience Chip */}
                  <div className="absolute -bottom-2 right-1 sm:right-2 bg-slate-900/95 border border-cyan-500/40 rounded-full px-3 py-1 text-xs font-semibold text-cyan-300 shadow-md flex items-center gap-1.5">
                    <SparklesIcon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>SLIIT 3rd Year</span>
                  </div>
                </div>

                {/* Profile Identity Details */}
                <h3 className="text-xl font-bold text-white mb-1">Dulshan Ranathunga</h3>
                <p className="text-sm text-cyan-400 font-mono mb-4">Software Engineering Intern</p>

                {/* Micro tech pills */}
                <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                  {["Java 17", "Spring Boot", "React", "Next.js", "MongoDB", "MySQL", "REST APIs"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800/90 border border-slate-700/60 text-slate-300"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                {/* Quick Info Grid */}
                <div className="w-full bg-slate-950/60 border border-slate-800/80 rounded-xl p-3 text-left text-xs space-y-2">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Education:</span>
                    <span className="font-semibold text-slate-200">SLIIT BSc (Hons) IT</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Focus:</span>
                    <span className="font-semibold text-cyan-300">Full-Stack Web & Backend</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Location:</span>
                    <span className="font-semibold text-slate-200">Divulapitiya, Sri Lanka</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Languages:</span>
                    <span className="font-semibold text-slate-200">English, Sinhala (Fluent)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-10 border-t border-slate-800/70">
          {portfolioData.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800/80 rounded-xl p-5 transition-all hover:border-slate-700"
            >
              <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200">{stat.label}</div>
              <div className="text-xs text-slate-500 mt-0.5">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
