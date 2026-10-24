"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { AustinGPSVG, LandoSignature } from "./SvgIcons";
import { Flag, Trophy, Lock, Unlock, ChevronDown } from "lucide-react";
import HeroNeonGlow from "./HeroNeonGlow";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [countdown, setCountdown] = useState({ days: 3, hours: 14, mins: 28, secs: 45 });
  const [telemetrySpeed, setTelemetrySpeed] = useState(334);

  const { scrollY } = useScroll();
  const signatureOpacity = useTransform(scrollY, [0, 400], [0.95, 0.15]);
  const heroImageScale = useTransform(scrollY, [0, 600], [1, 1.1]);
  const heroImageY = useTransform(scrollY, [0, 600], [0, 100]);

  // Live countdown timer simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        return { ...prev, secs: 59, mins: prev.mins > 0 ? prev.mins - 1 : 59 };
      });
      // Micro variation in telemetry speed
      setTelemetrySpeed(330 + Math.floor(Math.random() * 8));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full min-h-screen bg-[#080907] flex flex-col justify-between overflow-hidden pt-24 pb-12 select-none"
    >
      {/* Background Telemetry Grid & Ambient Lighting */}
      <div className="absolute inset-0 bg-telemetry-grid opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D2FF00]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#282C20]/40 rounded-full blur-[120px] pointer-events-none" />

      {/* Interactive Cursor Neon Glow Effect (Hero Boundaries Only) */}
      <HeroNeonGlow containerRef={heroRef} />

      {/* Background Animated SVG Neon Signature */}
      <motion.div
        style={{ opacity: signatureOpacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-4 pointer-events-none z-0"
      >
        <LandoSignature className="w-full opacity-25 filter drop-shadow-[0_0_20px_#D2FF00]" />
      </motion.div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
        {/* Top Info Bar: Category and Season status */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-b border-[#2A2F24]/60 pb-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-tech font-bold bg-[#D2FF00] text-[#080907]">
              FULL STACK DEVELOPER
            </span>
            <span className="font-tech text-xs text-[#8E9285] tracking-wider">
              CSE // PORTFOLIO SHOWCASE
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-tech text-[#8E9285]">
            <span className="flex items-center gap-1.5 text-[#F7F7F2]">
              <Trophy className="w-3.5 h-3.5 text-[#D2FF00]" /> REACT, NEXT.JS, TAILWIND CSS
            </span>
            <span className="hidden md:inline text-[#2A2F24]">•</span>
            <span className="hidden md:inline text-[#D2FF00]">
              ACTIVELY BUILDING & LEARNING
            </span>
          </div>
        </div>

        {/* Center Stage: Centered High-Resolution Driver Portrait + Floating Telemetry Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-6 lg:my-0 flex-1">
          {/* Left Column: Huge Headline Typography */}
          <div className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-1">
              <span className="font-tech text-xs tracking-widest text-[#D2FF00] uppercase block">
                [ OFFICIAL DEVELOPER PORTFOLIO ]
              </span>
              <h1 className="font-heading font-black text-4xl min-[380px]:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter uppercase leading-[0.88] text-[#F7F7F2]">
                RISHAB
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2FF00] to-[#E3FF4D] neon-text-glow">
                  RAJ
                </span>
              </h1>
            </div>

            <p className="mt-4 sm:mt-6 text-xs sm:text-sm md:text-base text-[#8E9285] max-w-sm mx-auto lg:mx-0 leading-relaxed font-sans font-medium">
              I build modern digital experiences that combine thoughtful design, clean code, and powerful functionality.
            </p>

            {/* Quick Live Telemetry Strip - Responsive 2x2 grid on mobile, 4-col on desktop */}
            <div className="mt-6 sm:mt-8 p-3 rounded bg-[#121510] border border-[#2A2F24] grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-2 text-xs font-tech text-left">
              <div className="p-1">
                <span className="text-[#8E9285] block text-[9px] min-[360px]:text-[10px]">TECH STACK</span>
                <span className="text-[#D2FF00] font-bold text-sm sm:text-base">REACT</span>
              </div>
              <div className="border-l border-[#2A2F24] pl-2 sm:pl-3 p-1">
                <span className="text-[#8E9285] block text-[9px] min-[360px]:text-[10px]">FOCUS</span>
                <span className="text-white font-bold text-sm sm:text-base">FULL STACK</span>
              </div>
              <div className="border-t sm:border-t-0 sm:border-l border-[#2A2F24] pt-2 sm:pt-1 sm:pl-3 p-1">
                <span className="text-[#8E9285] block text-[9px] min-[360px]:text-[10px]">AI INTEGRATION</span>
                <span className="text-[#D2FF00] font-bold text-sm sm:text-base">ACTIVE</span>
              </div>
              <div className="border-t sm:border-t-0 border-l border-[#2A2F24] pt-2 sm:pt-1 pl-2 sm:pl-3 p-1">
                <span className="text-[#8E9285] block text-[9px] min-[360px]:text-[10px]">BUILD MODE</span>
                <span className="text-white font-bold text-sm sm:text-base">100%</span>
              </div>
            </div>
          </div>

          {/* Center Column: Full-Height Focused Portrait wearing Visor / Gear */}
          <motion.div
            style={{ scale: heroImageScale, y: heroImageY }}
            className="lg:col-span-4 flex items-center justify-center order-1 lg:order-2 relative"
          >
            <div className="relative w-full max-w-[280px] min-[400px]:max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] aspect-[3/4] cut-corner-tl-br overflow-hidden border-2 border-[#2A2F24] shadow-2xl group">
              <Image
                src="/images/Rishab Raj.jpeg"
                alt="Rishab Raj Developer Portrait"
                fill
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 400px"
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080907] via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 border border-[#D2FF00]/20 pointer-events-none" />

              {/* Holographic Telemetry Crosshairs Overlay */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 font-tech text-[9px] sm:text-[10px] text-[#D2FF00] tracking-widest bg-[#080907]/80 px-2 py-0.5 rounded">
                +4.004 RR_DEV
              </div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between text-[10px] sm:text-[11px] font-tech text-[#F7F7F2] bg-[#080907]/85 backdrop-blur px-2.5 sm:px-3 py-1.5 border border-[#2A2F24]">
                <span>REACT // NEXT.JS</span>
                <span className="text-[#D2FF00]">BUILD READY</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Floating F1 Telemetry Card with Austin GP SVG Layout */}
          <div className="lg:col-span-4 flex flex-col justify-center order-3 w-full max-w-md mx-auto lg:max-w-none">
            <div className="relative cut-corner-br bg-[#121510] border border-[#2A2F24] hover:border-[#D2FF00]/70 p-4 sm:p-5 transition-all duration-300 shadow-xl group">
              {/* Badge & Latest Project Header */}
              <div className="flex items-center justify-between border-b border-[#2A2F24] pb-3 mb-3 sm:mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D2FF00] animate-pulse" />
                  <span className="font-tech text-xs font-bold text-[#D2FF00] uppercase tracking-wider">
                    LATEST PROJECT
                  </span>
                </div>
                <span className="font-tech text-[10px] text-[#8E9285] bg-[#1C2018] px-2 py-0.5 rounded">
                  FEATURED
                </span>
              </div>

              {/* Circuit SVG outline */}
              <div className="w-full h-32 sm:h-36 relative flex items-center justify-center my-1 bg-[#080907]/50 rounded p-2 border border-[#2A2F24]/50">
                <AustinGPSVG className="w-full h-full max-h-28 sm:max-h-32" />
              </div>

              {/* Project Details */}
              <div className="mt-3 flex items-center justify-between gap-2 text-xs font-tech">
                <div className="min-w-0">
                  <span className="text-[#8E9285] text-[9px] sm:text-[10px] block">PROJECT</span>
                  <span className="text-[#F7F7F2] font-bold text-[11px] sm:text-xs truncate block">FARM-SMART</span>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-[#8E9285] text-[9px] sm:text-[10px] block">AI + NEXT.JS</span>
                  <span className="text-[#D2FF00] font-bold text-[11px] sm:text-xs">FULL STACK</span>
                </div>
              </div>

              {/* Countdown Ticker */}
              <div className="mt-4 pt-3 border-t border-[#2A2F24] flex items-center justify-between text-center font-tech">
                <div className="bg-[#1C2018] px-2 sm:px-2.5 py-1 rounded">
                  <span className="text-[#D2FF00] font-bold text-xs sm:text-sm block">{countdown.days}</span>
                  <span className="text-[#8E9285] text-[8px] sm:text-[9px]">DAYS</span>
                </div>
                <span className="text-[#8E9285]">:</span>
                <div className="bg-[#1C2018] px-2 sm:px-2.5 py-1 rounded">
                  <span className="text-[#D2FF00] font-bold text-xs sm:text-sm block">{countdown.hours}</span>
                  <span className="text-[#8E9285] text-[8px] sm:text-[9px]">HRS</span>
                </div>
                <span className="text-[#8E9285]">:</span>
                <div className="bg-[#1C2018] px-2 sm:px-2.5 py-1 rounded">
                  <span className="text-[#D2FF00] font-bold text-xs sm:text-sm block">{countdown.mins}</span>
                  <span className="text-[#8E9285] text-[8px] sm:text-[9px]">MIN</span>
                </div>
                <span className="text-[#8E9285]">:</span>
                <div className="bg-[#1C2018] px-2 sm:px-2.5 py-1 rounded">
                  <span className="text-[#D2FF00] font-bold text-xs sm:text-sm block">{countdown.secs}</span>
                  <span className="text-[#8E9285] text-[8px] sm:text-[9px]">SEC</span>
                </div>
              </div>

              {/* Developer Micro-badge */}
              <div className="mt-4 flex items-center justify-between text-[10px] sm:text-[11px] font-tech text-[#8E9285]">
                <span className="flex items-center gap-1.5">
                  <Flag className="w-3 h-3 text-[#D2FF00]" /> Developer Since 2022
                </span>
                <span className="text-[#D2FF00]">5+ PROJECTS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Interactive Lock / Scroll Switch & Navigation Cue */}
        <div className="pt-4 border-t border-[#2A2F24]/60 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D2FF00]" />
            <span className="font-tech text-[10px] sm:text-xs text-[#8E9285]">
              BASED IN INDIA // AVAILABLE WORLDWIDE
            </span>
          </div>

          {/* Bottom Floating Switch: "tap to lock / Back to scroll" */}
          <button
            onClick={() => setIsLocked(!isLocked)}
            className="flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#121510] hover:bg-[#1C2018] border border-[#2A2F24] hover:border-[#D2FF00] text-[11px] sm:text-xs font-tech text-[#F7F7F2] transition-colors shadow-lg cursor-pointer"
          >
            {isLocked ? (
              <>
                <Lock className="w-3.5 h-3.5 text-[#D2FF00]" />
                <span>VIEWPORT LOCKED // BACK TO SCROLL</span>
              </>
            ) : (
              <>
                <Unlock className="w-3.5 h-3.5 text-[#8E9285]" />
                <span>TAP TO LOCK VIEWPORT</span>
              </>
            )}
            <span className="w-1.5 h-1.5 rounded-full bg-[#D2FF00]" />
          </button>

          <a
            href="#manifesto"
            className="flex items-center gap-2 text-xs font-tech text-[#8E9285] hover:text-[#D2FF00] transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#D2FF00]" />
          </a>
        </div>
      </div>
    </section>
  );
}
