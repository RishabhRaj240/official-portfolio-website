"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { LandoSignature } from "./SvgIcons";
import { Trophy, ArrowUpRight, Flame } from "lucide-react";

interface GalleryCard {
  id: string;
  year: string;
  location: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  badge?: string;
  isQuote?: boolean;
  quote?: string;
}

const GALLERY_CARDS: GalleryCard[] = [
  {
    id: "card-1",
    year: "2024",
    location: "FARM-SMART // AI PLATFORM",
    title: "AI-Powered Agricultural Platform",
    category: "PROJECT // FULL STACK",
    description:
      "An AI-powered agricultural platform featuring weather information, crop guidance, crop image analysis, and an AI chatbot.",
    image: "/images/Farm-Smart.png",
    badge: "NEXT.JS + AI // LIVE PROJECT",
  },
  {
    id: "card-2",
    year: "2024",
    location: "RESUMIND // AI TOOL",
    title: "AI Resume Analyzer",
    category: "PROJECT // AI + WEB",
    description:
      "An AI resume analyzer designed to help users evaluate their resumes and improve their job applications.",
    image: "/images/Resumind.webp",
    badge: "REACT + OPENAI",
  },
  {
    id: "card-3",
    year: "PHILOSOPHY",
    location: "MINDSET ARCHIVE",
    title: "The Developer Manifesto",
    category: "CORE DEVELOPER VALUES",
    description: "Written in the code editor before the breakthrough project.",
    isQuote: true,
    quote: "Clean code is not written by following a set of rules. It is written by someone who cares.",
  },
  {
    id: "card-4",
    year: "2024",
    location: "CAREPULSE // HEALTHCARE",
    title: "Healthcare Management App",
    category: "PROJECT // FULL STACK",
    description:
      "A healthcare management application featuring patient registration, appointment booking, file uploads, and an admin dashboard.",
    image: "/images/CarePulse.png",
    badge: "NEXT.JS + SUPABASE",
  },
  {
    id: "card-5",
    year: "2024",
    location: "PRITHVINET // ENVIRONMENT",
    title: "Pollution Monitoring Web App",
    category: "PROJECT // WEB",
    description:
      "A pollution-monitoring web project featuring an interactive map of Chhattisgarh and a chatbot.",
    image: "/images/Prithvi-Net.png",
    badge: "REACT + MAPS API",
  },
  {
    id: "card-6",
    year: "2025",
    location: "SUITS AI // LEGAL TECH",
    title: "AI Legal Workflow Agent",
    category: "CONCEPT // AI AGENT",
    description:
      "An AI-agent project concept focused on supporting legal professionals with AI-powered workflows.",
    image: "/images/Suites AI.png",
    badge: "AI AGENT // CONCEPT",
  },
  {
    id: "card-7",
    year: "2026",
    location: "PORTFOLIO // SHOWCASE",
    title: "Continuous Learning & Growth",
    category: "DEVELOPMENT // JOURNEY",
    description:
      "Constantly building, learning, and improving. From CSE student to full-stack developer, driven by curiosity and the love of creating.",
    image: "/images/Portfolio.png",
    badge: "CSE STUDENT // DEV JOURNEY",
  },
];

export default function HorizontalGallery() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Smooth translation across all 7 cards with responsive coverage
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-78%"]);

  return (
    <section id="gallery" className="relative bg-[#080907] text-[#F7F7F2]">
      {/* Manifesto Impact Statement */}
      <div id="manifesto" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 font-tech text-xs tracking-widest text-[#D2FF00] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#D2FF00]" />
            <span>[ DEVELOPER MANIFESTO ]</span>
          </div>

          <h2 className="font-heading font-black text-2xl min-[400px]:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter uppercase leading-[0.95] text-[#F7F7F2]">
            THINK BUILD. REFINE.{" "}
            <span className="font-editorial italic font-normal text-[#D2FF00] lowercase px-1 sm:px-2">
              repeat
            </span>
            . TURNING IDEAS INTO POWERFUL DIGITAL{" "}
            <span className="text-[#D2FF00] underline decoration-[#D2FF00]/50 underline-offset-4 sm:underline-offset-8">
              experiences
            </span>
            {" "}FOR THE MODERN{" "}
            <span className="font-editorial italic font-normal text-[#D2FF00] lowercase px-1 sm:px-2">
              web
            </span>
            .
          </h2>
        </div>

        {/* Decorative Telemetry separator */}
        <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-between border-t border-[#2A2F24] pt-4 sm:pt-6 font-tech text-xs text-[#8E9285] gap-3">
          <span className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-[#D2FF00]" /> PROJECT ARCHIVE // 2023-2026
          </span>
          <span className="hidden sm:inline">SCROLL DOWN TO EXPLORE PROJECTS</span>
          <span className="text-[#D2FF00]">07 KEY PROJECTS</span>
        </div>
      </div>

      {/* Sticky Pin Track Scroll Container */}
      <div id="projects" ref={targetRef} className="relative h-[300vh] sm:h-[320vh] bg-[#080907] scroll-mt-20">
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          {/* Subtle Ambient Background */}
          <div className="absolute inset-0 bg-telemetry-grid opacity-20 pointer-events-none" />

          {/* Rail Header Indicator */}
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 mb-3 sm:mb-4 flex items-center justify-between font-tech text-[11px] sm:text-xs text-[#8E9285]">
            <span className="text-[#D2FF00] tracking-wider uppercase flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[#D2FF00] rounded-full animate-ping" />
              PROJECT TIMELINE // CARRIER PIN
            </span>
            <span className="font-mono text-[10px] sm:text-xs">
              SCROLL DOWN TO DISCOVER →
            </span>
          </div>

          {/* Horizontal Track Container */}
          <motion.div style={{ x }} className="flex gap-4 sm:gap-6 md:gap-8 px-4 sm:px-8 md:px-12 w-max">
            {GALLERY_CARDS.map((card, idx) => (
              <div
                key={card.id}
                className="relative w-[84vw] max-w-[320px] sm:max-w-none sm:w-[400px] md:w-[460px] h-[460px] sm:h-[520px] md:h-[560px] flex-shrink-0 cut-corner-br bg-[#121510] border border-[#2A2F24] hover:border-[#D2FF00] transition-all duration-300 group overflow-hidden flex flex-col justify-between shadow-2xl"
              >
                {card.isQuote ? (
                  // Quote Card Aesthetic with Neon Handwritten Signature
                  <div className="relative w-full h-full p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-gradient-to-br from-[#1C2018] to-[#121510] border border-[#D2FF00]/40">
                    <div className="flex items-center justify-between font-tech text-xs text-[#8E9285]">
                      <span className="text-[#D2FF00] uppercase tracking-wider">{card.category}</span>
                      <span>{card.year}</span>
                    </div>

                    <div className="my-auto">
                      <span className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#D2FF00] leading-none block mb-2 sm:mb-4">
                        “
                      </span>
                      <blockquote className="font-heading font-extrabold text-xl min-[400px]:text-2xl sm:text-3xl lg:text-4xl leading-tight text-[#F7F7F2]">
                        {card.quote}
                      </blockquote>
                      <div className="mt-6 sm:mt-8 w-40 sm:w-48 md:w-60">
                        <LandoSignature className="w-full text-[#D2FF00] filter drop-shadow-[0_0_15px_#D2FF00]" />
                      </div>
                    </div>

                    <div className="border-t border-[#2A2F24] pt-3 sm:pt-4 flex items-center justify-between font-tech text-[11px] sm:text-xs text-[#8E9285]">
                      <span>RISHABH RAJ</span>
                      <span className="text-[#D2FF00]">FULL STACK DEVELOPER</span>
                    </div>
                  </div>
                ) : (
                  // Media Photo Card
                  <>
                    {/* Top Badges Header */}
                    <div className="px-4 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between border-b border-[#2A2F24] bg-[#0E110C] z-10 flex-shrink-0">
                      <span className="font-tech text-[10px] sm:text-xs text-[#D2FF00] tracking-wider px-2 py-0.5 rounded bg-[#1C2018] border border-[#2A2F24] truncate max-w-[70%]">
                        {card.location}
                      </span>
                      <span className="font-tech font-bold text-[#080907] bg-[#D2FF00] px-2 py-0.5 rounded text-[10px] sm:text-[11px]">
                        {card.year}
                      </span>
                    </div>

                    {/* Image Viewport: Clean Uncropped Full Image */}
                    <div className="relative w-full aspect-[16/10] bg-[#080907] overflow-hidden flex items-center justify-center p-3 border-b border-[#2A2F24] flex-shrink-0">
                      {card.image && (
                        <div className="relative w-full h-full rounded overflow-hidden">
                          <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 460px"
                            className="object-contain object-center"
                          />
                        </div>
                      )}
                      {card.badge && (
                        <div className="absolute bottom-2 left-3 font-tech text-[9px] sm:text-[10px] text-[#D2FF00] bg-[#080907]/90 backdrop-blur px-2 py-0.5 rounded border border-[#D2FF00]/30 flex items-center gap-1.5 z-10 pointer-events-none">
                          <Trophy className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">{card.badge}</span>
                        </div>
                      )}
                    </div>

                    {/* Bottom Details Content */}
                    <div className="p-4 sm:p-6 flex flex-col justify-between flex-1 bg-[#121510]">
                      <div>
                        <span className="font-tech text-[10px] sm:text-[11px] text-[#8E9285] tracking-wider uppercase block">
                          {card.category}
                        </span>
                        <h3 className="font-heading font-black text-lg sm:text-xl md:text-2xl text-[#F7F7F2] group-hover:text-[#D2FF00] transition-colors mt-0.5 sm:mt-1">
                          {card.title}
                        </h3>
                        <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#8E9285] line-clamp-2 sm:line-clamp-3 leading-relaxed">
                          {card.description}
                        </p>
                      </div>

                      <div className="pt-3 sm:pt-4 border-t border-[#2A2F24] flex items-center justify-between font-tech text-[11px] sm:text-xs text-[#8E9285]">
                        <span className="text-[#D2FF00]">TIMELINE NO. {idx + 1}</span>
                        <div className="flex items-center gap-1 text-[#F7F7F2] group-hover:text-[#D2FF00] transition-colors">
                          <span>EXPLORE</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
