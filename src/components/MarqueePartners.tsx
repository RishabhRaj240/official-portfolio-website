"use client";

import React from "react";

interface Partner {
  name: string;
  category: string;
  since: string;
}

const ROW_ONE: Partner[] = [
  { name: "REACT", category: "FRONTEND LIBRARY", since: "2023" },
  { name: "NEXT.JS", category: "FULL STACK FRAMEWORK", since: "2023" },
  { name: "TAILWIND CSS", category: "STYLING FRAMEWORK", since: "2023" },
  { name: "TYPESCRIPT", category: "TYPE-SAFE LANGUAGE", since: "2024" },
  { name: "NODE.JS", category: "BACKEND RUNTIME", since: "2024" },
  { name: "SUPABASE", category: "BACKEND AS A SERVICE", since: "2024" },
  { name: "FIGMA", category: "UI DESIGN TOOL", since: "2023" },
];

const ROW_TWO: Partner[] = [
  { name: "HTML & CSS", category: "WEB FOUNDATIONS", since: "2022" },
  { name: "JAVASCRIPT", category: "CORE WEB LANGUAGE", since: "2022" },
  { name: "PYTHON", category: "SCRIPTING & AI", since: "2024" },
  { name: "GIT & GITHUB", category: "VERSION CONTROL", since: "2022" },
  { name: "VS CODE", category: "CODE EDITOR", since: "2022" },
  { name: "VERCEL", category: "DEPLOYMENT PLATFORM", since: "2023" },
  { name: "LINUX", category: "OPERATING SYSTEM", since: "2023" },
];

export default function MarqueePartners() {
  return (
    <section id="partners" className="relative w-full bg-[#080907] py-16 sm:py-24 lg:py-32 overflow-hidden border-t border-[#2A2F24]">
      {/* Background Telemetry Grid */}
      <div className="absolute inset-0 bg-telemetry-grid opacity-20 pointer-events-none" />

      {/* Decorative Drifting "Collabs" Text in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 select-none">
        <span className="font-editorial italic font-normal text-7xl sm:text-9xl md:text-[160px] lg:text-[220px] text-[#D2FF00]/5 lowercase block whitespace-nowrap">
          skills
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-[#2A2F24] pb-6">
          <div>
            <div className="flex items-center gap-2 font-tech text-xs text-[#D2FF00] tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D2FF00]" />
              <span>[ TECH ECOSYSTEM // TOOLS & LANGUAGES ]</span>
            </div>
            <h2 className="font-heading font-black text-3xl min-[400px]:text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-[#F7F7F2]">
              SKILLS & <span className="text-[#D2FF00]">TECH STACK</span>
            </h2>
          </div>
          <p className="font-tech text-xs sm:text-sm text-[#8E9285] max-w-md">
            The tools, languages, and frameworks I work with to build modern, scalable, and performant web applications.
          </p>
        </div>
      </div>

      {/* Marquee Row 1 (Left to Right scroll) */}
      <div className="relative w-full overflow-hidden py-2 sm:py-3">
        {/* Left and right gradient fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-r from-[#080907] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-l from-[#080907] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-left flex gap-4 sm:gap-6">
          {[...ROW_ONE, ...ROW_ONE].map((partner, idx) => (
            <div
              key={`row1-${idx}`}
              className="group cut-corner-br px-5 sm:px-8 py-3.5 sm:py-5 bg-[#121510] border border-[#2A2F24] hover:border-[#D2FF00] transition-all duration-300 flex items-center gap-4 sm:gap-6 min-w-[220px] sm:min-w-[280px]"
            >
              <div>
                <span className="font-tech text-[9px] sm:text-[10px] text-[#D2FF00] tracking-widest block uppercase">
                  {partner.category}
                </span>
                <span className="font-heading font-black text-lg sm:text-xl md:text-2xl text-[#F7F7F2] group-hover:text-[#D2FF00] transition-colors whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
              <div className="ml-auto font-tech text-[10px] sm:text-xs text-[#8E9285] border-l border-[#2A2F24] pl-3 sm:pl-4">
                {partner.since}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Right to Left scroll) */}
      <div className="relative w-full overflow-hidden py-2 sm:py-3 mt-3 sm:mt-4">
        <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-r from-[#080907] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-l from-[#080907] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-right flex gap-4 sm:gap-6">
          {[...ROW_TWO, ...ROW_TWO].map((partner, idx) => (
            <div
              key={`row2-${idx}`}
              className="group cut-corner-br px-5 sm:px-8 py-3.5 sm:py-5 bg-[#121510] border border-[#2A2F24] hover:border-[#D2FF00] transition-all duration-300 flex items-center gap-4 sm:gap-6 min-w-[220px] sm:min-w-[280px]"
            >
              <div>
                <span className="font-tech text-[9px] sm:text-[10px] text-[#D2FF00] tracking-widest block uppercase">
                  {partner.category}
                </span>
                <span className="font-heading font-black text-lg sm:text-xl md:text-2xl text-[#F7F7F2] group-hover:text-[#D2FF00] transition-colors whitespace-nowrap">
                  {partner.name}
                </span>
              </div>
              <div className="ml-auto font-tech text-[10px] sm:text-xs text-[#8E9285] border-l border-[#2A2F24] pl-3 sm:pl-4">
                {partner.since}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Campaign Highlights Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#2A2F24]/60">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-4 sm:p-6 bg-[#121510] border border-[#2A2F24] cut-corner-br">
            <span className="font-tech text-xs text-[#D2FF00]">REACT + NEXT.JS</span>
            <h4 className="font-heading font-bold text-base sm:text-lg text-white mt-1">Modern Full Stack Development</h4>
            <p className="font-sans text-xs text-[#8E9285] mt-2">Building lightning-fast web apps with server components, dynamic routing, and modern React patterns.</p>
          </div>
          <div className="p-4 sm:p-6 bg-[#121510] border border-[#2A2F24] cut-corner-br">
            <span className="font-tech text-xs text-[#D2FF00]">TAILWIND + FIGMA</span>
            <h4 className="font-heading font-bold text-base sm:text-lg text-white mt-1">Design to Code Workflow</h4>
            <p className="font-sans text-xs text-[#8E9285] mt-2">Bridging the gap between design and development with pixel-perfect utility-first implementations.</p>
          </div>
          <div className="p-4 sm:p-6 bg-[#121510] border border-[#2A2F24] cut-corner-br">
            <span className="font-tech text-xs text-[#D2FF00]">AI + WEB INTEGRATION</span>
            <h4 className="font-heading font-bold text-base sm:text-lg text-white mt-1">AI-Powered Applications</h4>
            <p className="font-sans text-xs text-[#8E9285] mt-2">Integrating AI capabilities into web applications for smarter, more dynamic user experiences.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
