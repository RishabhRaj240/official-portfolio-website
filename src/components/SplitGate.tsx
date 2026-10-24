"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Gauge, Gamepad2, Sparkles, Zap } from "lucide-react";

export default function SplitGate() {
  const [hoveredSide, setHoveredSide] = useState<"on" | "off" | null>(null);

  return (
    <section id="split-gate" className="relative w-full bg-[#080907] py-16 sm:py-24 lg:py-28 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-telemetry-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6 border-b border-[#2A2F24] pb-6 sm:pb-8">
          <div>
            <div className="flex items-center gap-2 font-tech text-xs text-[#D2FF00] tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D2FF00]" />
              <span>[ DUAL EXPERTISE // SYSTEM PROTOCOL ]</span>
            </div>
            <h2 className="font-heading font-black text-3xl min-[400px]:text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-[#F7F7F2]">
              TWO WORLDS. <span className="text-[#D2FF00]">ONE MINDSET.</span>
            </h2>
          </div>
          <p className="font-tech text-xs sm:text-sm text-[#8E9285] max-w-md">
            Whether crafting pixel-perfect interfaces or architecting robust backends, the drive for quality never wavers.
          </p>
        </div>

        {/* Split Gate Dual Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: ON TRACK */}
          <div
            onMouseEnter={() => setHoveredSide("on")}
            onMouseLeave={() => setHoveredSide(null)}
            className={`relative rounded-none cut-corner-tl-br overflow-hidden border transition-all duration-500 flex flex-col justify-between p-5 sm:p-8 lg:p-10 min-h-[500px] sm:min-h-[580px] bg-[#121510] ${
              hoveredSide === "on"
                ? "border-[#D2FF00] shadow-[0_0_40px_rgba(210,255,0,0.25)]"
                : "border-[#2A2F24]"
            }`}
          >
            {/* Background Image with Dark Vignette */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/frontend-design.jpg"
                alt="Frontend Design, Code & Experience"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={`object-cover transition-transform duration-700 ${
                  hoveredSide === "on" ? "scale-108" : "scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080907] via-[#080907]/75 to-[#080907]/40" />
            </div>

            {/* Top Bar Details */}
            <div className="relative z-10 flex items-center justify-between font-tech text-[11px] sm:text-xs">
              <span className="px-2.5 sm:px-3 py-1 rounded bg-[#D2FF00] text-[#080907] font-bold tracking-wider">
                01 // FRONTEND
              </span>
              <span className="text-[#8E9285] bg-[#080907]/80 px-2 sm:px-2.5 py-1 rounded border border-[#2A2F24]">
                UI / UX & DESIGN
              </span>
            </div>

            {/* Middle Stats & Telemetry Block */}
            <div className="relative z-10 my-auto py-6 sm:py-8 space-y-3 sm:space-y-4">
              <span className="font-tech text-[11px] sm:text-xs text-[#D2FF00] uppercase tracking-widest flex items-center gap-1.5">
                <Gauge className="w-3.5 h-3.5 flex-shrink-0" /> PIXEL PRECISION // CLEAN CODE
              </span>
              <h3 className="font-heading font-black text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#F7F7F2]">
                DESIGN, CODE & EXPERIENCE
              </h3>
              <p className="text-xs sm:text-sm text-[#8E9285] max-w-md leading-relaxed">
                Building responsive, accessible interfaces using React, Next.js, and Tailwind CSS. From landing pages to full web apps.
              </p>

              {/* Stat Pills */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 sm:pt-4 font-tech">
                <div className="p-2 sm:p-3 bg-[#080907]/90 border border-[#2A2F24] rounded text-center sm:text-left">
                  <span className="text-[#8E9285] block text-[9px] sm:text-[10px] truncate">PROJECTS</span>
                  <span className="text-sm min-[380px]:text-base sm:text-xl font-bold text-[#D2FF00] block truncate">5+</span>
                </div>
                <div className="p-2 sm:p-3 bg-[#080907]/90 border border-[#2A2F24] rounded text-center sm:text-left">
                  <span className="text-[#8E9285] block text-[9px] sm:text-[10px] truncate">FRAMEWORKS</span>
                  <span className="text-sm min-[380px]:text-base sm:text-xl font-bold text-white block truncate">REACT+</span>
                </div>
                <div className="p-2 sm:p-3 bg-[#080907]/90 border border-[#2A2F24] rounded text-center sm:text-left">
                  <span className="text-[#8E9285] block text-[9px] sm:text-[10px] truncate">UPTIME</span>
                  <span className="text-sm min-[380px]:text-base sm:text-xl font-bold text-[#D2FF00] block truncate">99%</span>
                </div>
              </div>
            </div>

            {/* Bottom CTA Action Button */}
            <div className="relative z-10 pt-4 border-t border-[#2A2F24]/80 flex flex-col min-[480px]:flex-row min-[480px]:items-center justify-between gap-3">
              <div className="flex items-center gap-2 font-tech text-xs text-[#8E9285]">
                <Zap className="w-4 h-4 text-[#D2FF00] flex-shrink-0" />
                <span className="truncate">CLEAN CODE // GITHUB ACTIVE</span>
              </div>
              <a
                href="#projects"
                className="group/btn inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#D2FF00] text-[#080907] font-heading font-bold text-[11px] sm:text-xs uppercase tracking-wider hover:bg-white transition-all shadow-md flex-shrink-0"
              >
                <span>VIEW PROJECTS</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: OFF TRACK */}
          <div
            onMouseEnter={() => setHoveredSide("off")}
            onMouseLeave={() => setHoveredSide(null)}
            className={`relative rounded-none cut-corner-br overflow-hidden border transition-all duration-500 flex flex-col justify-between p-5 sm:p-8 lg:p-10 min-h-[500px] sm:min-h-[580px] bg-[#121510] ${
              hoveredSide === "off"
                ? "border-[#D2FF00] shadow-[0_0_40px_rgba(210,255,0,0.25)]"
                : "border-[#2A2F24]"
            }`}
          >
            {/* Background Image with Warm Vignette */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/images/backend-power.jpg"
                alt="Backend Power & Cloud Architecture"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={`object-cover transition-transform duration-700 ${
                  hoveredSide === "off" ? "scale-108" : "scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080907] via-[#080907]/75 to-[#080907]/40" />
            </div>

            {/* Top Bar Details */}
            <div className="relative z-10 flex items-center justify-between font-tech text-[11px] sm:text-xs">
              <span className="px-2.5 sm:px-3 py-1 rounded bg-[#1C2018] border border-[#2A2F24] text-[#F7F7F2] font-bold tracking-wider">
                02 // BACKEND
              </span>
              <span className="text-[#D2FF00] bg-[#080907]/80 px-2 sm:px-2.5 py-1 rounded border border-[#2A2F24]">
                APIs & DATABASES
              </span>
            </div>

            {/* Middle Stats & Culture Block */}
            <div className="relative z-10 my-auto py-6 sm:py-8 space-y-3 sm:space-y-4">
              <span className="font-tech text-[11px] sm:text-xs text-[#D2FF00] uppercase tracking-widest flex items-center gap-1.5">
                <Gamepad2 className="w-3.5 h-3.5 flex-shrink-0" /> NODE.JS // APIs & DATABASES
              </span>
              <h3 className="font-heading font-black text-2xl min-[400px]:text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#F7F7F2]">
                BACKEND POWER
              </h3>
              <p className="text-xs sm:text-sm text-[#8E9285] max-w-md leading-relaxed">
                Building scalable APIs, integrating databases, and implementing AI-powered services using Node.js, Supabase, and cloud platforms.
              </p>

              {/* Stat Pills */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 sm:pt-4 font-tech">
                <div className="p-2 sm:p-3 bg-[#080907]/90 border border-[#2A2F24] rounded text-center sm:text-left">
                  <span className="text-[#8E9285] block text-[9px] sm:text-[10px] truncate">DATABASES</span>
                  <span className="text-sm min-[380px]:text-base sm:text-xl font-bold text-[#D2FF00] block truncate">SQL+</span>
                </div>
                <div className="p-2 sm:p-3 bg-[#080907]/90 border border-[#2A2F24] rounded text-center sm:text-left">
                  <span className="text-[#8E9285] block text-[9px] sm:text-[10px] truncate">DEPLOY</span>
                  <span className="text-sm min-[380px]:text-base sm:text-xl font-bold text-white block truncate">VERCEL</span>
                </div>
                <div className="p-2 sm:p-3 bg-[#080907]/90 border border-[#2A2F24] rounded text-center sm:text-left">
                  <span className="text-[#8E9285] block text-[9px] sm:text-[10px] truncate">AI TOOLS</span>
                  <span className="text-sm min-[380px]:text-base sm:text-xl font-bold text-[#D2FF00] block truncate">3+</span>
                </div>
              </div>
            </div>

            {/* Bottom CTA Action Button */}
            <div className="relative z-10 pt-4 border-t border-[#2A2F24]/80 flex flex-col min-[480px]:flex-row min-[480px]:items-center justify-between gap-3">
              <div className="flex items-center gap-2 font-tech text-xs text-[#8E9285]">
                <Sparkles className="w-4 h-4 text-[#D2FF00] flex-shrink-0" />
                <span className="truncate">SUPABASE // AI INTEGRATION</span>
              </div>
              <a
                href="#store"
                className="group/btn inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#1C2018] hover:bg-[#D2FF00] text-[#F7F7F2] hover:text-[#080907] border border-[#2A2F24] hover:border-[#D2FF00] font-heading font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all shadow-md flex-shrink-0"
              >
                <span>EXPLORE SKILLS</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
