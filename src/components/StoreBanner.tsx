"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShoppingBag, ArrowUpRight, Sparkles, Check } from "lucide-react";
import confetti from "canvas-confetti";

export default function StoreBanner() {
  const [isAdded, setIsAdded] = useState(false);

  const triggerCelebration = () => {
    setIsAdded(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#D2FF00", "#080907", "#E3FF4D", "#FFFFFF"],
    });
    setTimeout(() => setIsAdded(false), 2500);
  };

  return (
    <section id="store" className="relative w-full bg-[#F7F7F2] text-[#080907] py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Subtle Warm Paper Texture Grid */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Editorial Product Description */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-full bg-[#080907] text-[#D2FF00]">
                <ShoppingBag className="w-4 h-4" />
              </span>
              <span className="font-tech text-xs tracking-widest uppercase font-bold text-[#282C20]">
                RISHAB RAJ // LET&apos;S CONNECT
              </span>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <span className="font-tech text-xs font-bold text-[#282C20] bg-[#E3FF4D]/60 px-2.5 py-0.5 rounded uppercase inline-block">
                OPEN TO WORK
              </span>
              <h2 className="font-heading font-black text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tighter text-[#080907] leading-[0.95]">
                GOT SOMETHING
                <br />
                <span className="font-editorial italic font-normal text-2xl min-[400px]:text-3xl sm:text-4xl lg:text-5xl lowercase text-[#282C20] block">
                  in mind?
                </span>
                LET&apos;S CONNECT.
              </h2>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-[#282C20]/80 font-sans leading-relaxed">
              Have a project, collaboration, internship, or opportunity in mind? Let&apos;s connect and build something meaningful. I&apos;m currently open to exciting opportunities and collaborations.
            </p>

            {/* Store Action CTA */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a
                href="https://www.linkedin.com/in/rishab-raj-0028622b4/"
                target="_blank"
                rel="noreferrer"
                onClick={triggerCelebration}
                className="group relative px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#080907] text-[#D2FF00] font-heading font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-[#282C20] transition-all shadow-xl flex items-center gap-2.5 sm:gap-3 cursor-pointer inline-flex"
              >
                <span>{isAdded ? "CONNECTED! ✓" : "LET'S CONNECT"}</span>
                {isAdded ? (
                  <Check className="w-4 h-4 text-[#D2FF00]" />
                ) : (
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                )}
              </a>

              <div className="flex items-center gap-2 font-tech text-[11px] sm:text-xs text-[#282C20]">
                <Sparkles className="w-4 h-4 text-[#D2FF00] fill-[#D2FF00]" />
                <span>OPEN TO OPPORTUNITIES // WORLDWIDE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Staggered Dynamic Multi-Image Collage */}
          <div className="lg:col-span-7 relative mt-6 lg:mt-0">
            <div className="relative w-full h-[360px] min-[480px]:h-[440px] sm:h-[520px] lg:h-[600px] flex items-center justify-center">
              {/* Main Merch Showcase Image */}
              <div className="relative w-[85%] sm:w-[80%] h-[82%] sm:h-[80%] shadow-2xl rounded-sm overflow-hidden border-4 border-white transform -rotate-1 hover:rotate-0 transition-transform duration-500 z-10">
                <Image
                  src="/images/Rishabh-2.jpeg"
                  alt="World Drivers' Champion Apparel Collection"
                  fill
                  sizes="(max-width: 1024px) 90vw, 55vw"
                  className="object-cover"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 font-tech text-[10px] sm:text-xs font-bold bg-[#080907] text-[#D2FF00] px-2.5 sm:px-3 py-1">
                  RISHAB RAJ // 2026
                </div>
              </div>

              {/* Staggered Floating Badge Card */}
              <div className="absolute -bottom-2 sm:-bottom-4 right-1 sm:right-6 bg-white p-3 sm:p-5 shadow-2xl border border-black/10 z-20 max-w-[170px] sm:max-w-[220px] transform rotate-3 hover:rotate-0 transition-transform">
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <span className="font-tech text-[9px] sm:text-[10px] text-gray-500 uppercase">OPEN TO WORK</span>
                  <span className="w-2 h-2 rounded-full bg-[#D2FF00]" />
                </div>
                <span className="font-heading font-extrabold text-xs sm:text-base block text-black">
                  FULL STACK DEVELOPER
                </span>
                <span className="font-tech text-[10px] sm:text-xs text-[#282C20] font-bold block mt-0.5 sm:mt-1">
                  AVAILABLE NOW
                </span>
                <div className="mt-1.5 sm:mt-2 text-[9px] sm:text-[10px] font-tech text-emerald-600 flex items-center gap-1">
                  <Check className="w-3 h-3 flex-shrink-0" /> READY TO START
                </div>
              </div>

              {/* Floating Lifestyle Sticker Badge */}
              <div className="absolute -top-2 sm:-top-4 left-1 sm:left-6 bg-[#080907] text-white p-2.5 sm:p-4 shadow-xl z-20 border border-[#D2FF00]/50 max-w-[150px] sm:max-w-[190px] transform -rotate-6 hover:rotate-0 transition-transform">
                <span className="font-tech text-[9px] sm:text-[10px] text-[#D2FF00] tracking-widest block uppercase">
                  PORTFOLIO 2026
                </span>
                <span className="font-heading font-black text-sm sm:text-lg text-white block">
                  RISHAB // DEV
                </span>
                <span className="font-tech text-[9px] sm:text-[10px] text-gray-400 block truncate">CODE + DESIGN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
