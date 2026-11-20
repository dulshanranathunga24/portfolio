"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { DownloadIcon, MenuIcon, XIcon } from "./Icons";
import { portfolioData } from "@/data/portfolio-data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "References", href: "#references" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="group flex items-center gap-3 text-slate-100 hover:text-cyan-400 transition-colors"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-cyan-500/40 group-hover:ring-cyan-400 transition-all shadow-md">
              <Image
                src={portfolioData.personal.avatarUrl}
                alt={portfolioData.personal.name}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-lg leading-tight group-hover:text-cyan-300 transition-colors">
                Dulshan Ranathunga
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Software Engineering Intern
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-full shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-full transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={portfolioData.personal.cvDownloadUrl}
              download="Dulshan_Ranathunga_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-lg shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <DownloadIcon className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 p-4 bg-slate-900/95 border border-slate-800/90 rounded-2xl backdrop-blur-xl shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800/80 mt-1 flex flex-col gap-2">
              <a
                href={portfolioData.personal.cvDownloadUrl}
                download="Dulshan_Ranathunga_CV.pdf"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-xl shadow-md"
              >
                <DownloadIcon className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
