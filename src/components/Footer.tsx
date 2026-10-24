"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LNLogo, LandoSignature } from "./SvgIcons";
import { ArrowUp, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#080907] text-[#F7F7F2] overflow-hidden border-t-2 border-[#2A2F24] pt-16 pb-12">
      {/* Background Grid Pattern & Ambient Lime Glow */}
      <div className="absolute inset-0 bg-telemetry-grid opacity-25 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#D2FF00]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Continuous Ticker Tape Marquee */}
      <div className="w-full overflow-hidden border-y border-[#2A2F24] py-3 bg-[#121510] mb-16">
        <div className="animate-marquee-left flex gap-12 font-tech text-xs tracking-widest text-[#8E9285]">
          {Array(8)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="flex items-center gap-10 whitespace-nowrap">
                <span className="text-[#D2FF00] font-bold">RISHAB RAJ</span>
                <span>{"//"}</span>
                <span>WEB DEVELOPER</span>
                <span>{"//"}</span>
                <span className="text-white">CSE STUDENT</span>
                <span>{"//"}</span>
                <span className="text-[#D2FF00]">ALWAYS BUILDING SOMETHING NEW</span>
                <span>{"//"}</span>
                <span>CODE {"//"} DESIGN & INNOVATION</span>
                <span>{"//"}</span>
              </div>
            ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Central Illuminated Helmet / Slogan Stage */}
        <div className="flex flex-col items-center text-center my-10 space-y-6">
          {/* Illuminated Graphic with Glowing Telemetry Rings */}
          <div className="relative w-36 h-36 flex items-center justify-center">
            {/* Glowing Telemetry Rings */}
            <div className="absolute inset-0 rounded-full border border-[#D2FF00]/20 animate-ping opacity-30" />
            <div className="absolute inset-2 rounded-full border border-[#D2FF00]/40 animate-pulse" />
            <div className="relative w-28 h-28 rounded-full bg-[#121510] border-2 border-[#D2FF00] flex items-center justify-center p-3 shadow-[0_0_40px_rgba(210,255,0,0.3)]">
              <LNLogo className="w-14 h-14 text-white filter drop-shadow-[0_0_15px_#D2FF00]" />
            </div>
          </div>

          {/* Slogan */}
          <div className="space-y-2">
            <span className="font-tech text-xs text-[#D2FF00] tracking-widest uppercase">
              [ DEVELOPER MOTTO ]
            </span>
            <h2 className="font-heading font-black text-3xl min-[400px]:text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter uppercase text-[#F7F7F2]">
              MAKE IT WORK. MAKE IT{" "}
              <span className="font-editorial italic font-normal text-[#D2FF00] lowercase px-1 sm:px-2">
                matter
              </span>
              .
            </h2>
          </div>

          {/* Lando Signature Display */}
          <div className="w-48 sm:w-56 md:w-72 pt-2">
            <LandoSignature className="w-full text-[#D2FF00] filter drop-shadow-[0_0_15px_#D2FF00]" />
          </div>
        </div>

        {/* Quick Navigation Columns */}
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-8 py-10 sm:py-16 border-t border-[#2A2F24] mt-8 sm:mt-12 text-xs font-tech">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <LNLogo className="w-8 h-8 text-white flex-shrink-0" />
              <span className="font-heading font-extrabold text-base tracking-tight text-white">
                RISHAB RAJ
              </span>
            </div>
            <p className="font-sans text-xs text-[#8E9285] leading-relaxed">
              Computer Science Engineering student and web developer passionate about building modern websites and full-stack applications.
            </p>
            <div className="pt-2 text-[11px] text-[#D2FF00]">
              INDIA // AVAILABLE WORLDWIDE
            </div>
          </div>

          {/* Col 2: Pages Navigation */}
          <div className="space-y-3">
            <span className="font-bold text-white uppercase tracking-wider block">
              PAGES & ARCHIVES
            </span>
            <ul className="space-y-2 text-[#8E9285]">
              <li>
                <Link href="#hero" className="hover:text-[#D2FF00] transition-colors">
                  HOME // HUB
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-[#D2FF00] transition-colors">
                  PROJECTS ARCHIVE
                </Link>
              </li>
              <li>
                <Link href="#split-gate" className="hover:text-[#D2FF00] transition-colors">
                  DUAL EXPERTISE (UI & API)
                </Link>
              </li>
              <li>
                <Link href="#helmets" className="hover:text-[#D2FF00] transition-colors">
                  TECH STACK & TOOLS
                </Link>
              </li>
              <li>
                <Link href="#store" className="hover:text-[#D2FF00] transition-colors">
                  CONTACT // LET&apos;S CONNECT
                </Link>
              </li>
              <li>
                <Link href="#socials" className="hover:text-[#D2FF00] transition-colors">
                  FIND ME ON SOCIALS
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Follow On */}
          <div className="space-y-3">
            <span className="font-bold text-white uppercase tracking-wider block">
              CHANNELS
            </span>
            <ul className="space-y-2 text-[#8E9285]">
              <li>
                <a
                  href="https://github.com/RishabhRaj240"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D2FF00] transition-colors"
                >
                  GITHUB (@RishabhRaj240)
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rishab-raj-0028622b4/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D2FF00] transition-colors"
                >
                  LINKEDIN (Rishab Raj)
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/Rishabh042405"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D2FF00] transition-colors"
                >
                  TWITTER/X (@rishabh042405)
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/rishab_raj44/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D2FF00] transition-colors"
                >
                  INSTAGRAM (@rishab_raj44)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Business Enquiries */}
          <div className="space-y-3">
            <span className="font-bold text-white uppercase tracking-wider block">
              BUSINESS ENQUIRIES
            </span>
            <p className="font-sans text-xs text-[#8E9285] leading-relaxed">
              For project collaborations, internships, and work opportunities:
            </p>
            <a
              href="mailto:rishabhraj240405@gmail.com"
              className="inline-flex items-center gap-2 text-[#D2FF00] hover:underline font-bold"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>rishabhraj240405@gmail.com</span>
            </a>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 px-4 py-2 bg-[#121510] hover:bg-[#D2FF00] text-[#8E9285] hover:text-[#080907] border border-[#2A2F24] hover:border-[#D2FF00] rounded transition-all cursor-pointer font-bold"
              >
                <span>BACK TO TOP</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 sm:pt-8 border-t border-[#2A2F24]/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-tech text-[11px] sm:text-xs text-[#8E9285] text-center sm:text-left">
          <span>© 2026 RISHAB RAJ. ALL RIGHTS RESERVED.</span>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <span className="hover:text-[#D2FF00] cursor-pointer">PRIVACY POLICY</span>
            <span className="hover:text-[#D2FF00] cursor-pointer">TERMS OF SERVICE</span>
            <span className="hover:text-[#D2FF00] cursor-pointer">COOKIE PREFERENCES</span>
          </div>
          <span className="text-[#D2FF00]">CODE // BUILD // IMPACT</span>
        </div>
      </div>
    </footer>
  );
}
