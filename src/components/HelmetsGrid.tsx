"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Eye } from "lucide-react";

interface HelmetItem {
  id: string;
  name: string;
  year: string;
  race: string;
  theme: string;
  description: string;
  image: string;
  bgTrackImage: string;
  accentColor: string;
  specs: {
    weight: string;
    finish: string;
    designer: string;
    result: string;
  };
}

const HELMETS: HelmetItem[] = [
  {
    id: "react-v19",
    name: "React",
    year: "2025",
    race: "FRONTEND // UI LIBRARY",
    theme: "Component-Based Architecture",
    description:
      "Building dynamic, component-based user interfaces with React. Proficient in hooks, context, state management, and performance optimization.",
    image: "/images/tech/react.jpg",
    bgTrackImage: "/images/f1-car-track.jpg",
    accentColor: "#D2FF00",
    specs: {
      weight: "Intermediate+",
      finish: "SPA / Full Stack Apps",
      designer: "Meta / Open Source",
      result: "Daily Driver",
    },
  },
  {
    id: "nextjs-v15",
    name: "Next.js",
    year: "2025",
    race: "FULL STACK // FRAMEWORK",
    theme: "App Router & Server Components",
    description:
      "Primary framework for building full-stack web applications with server-side rendering, API routes, and optimized performance out of the box.",
    image: "/images/tech/nextjs.jpg",
    bgTrackImage: "/images/f1-car-track.jpg",
    accentColor: "#38bdf8",
    specs: {
      weight: "Intermediate",
      finish: "SSR / SSG / ISR",
      designer: "Vercel / Open Source",
      result: "Primary Framework",
    },
  },
  {
    id: "typescript-v5",
    name: "TypeScript",
    year: "2025",
    race: "LANGUAGE // TYPE SAFETY",
    theme: "Strongly Typed JavaScript",
    description:
      "Writing type-safe, maintainable code with TypeScript. Catches bugs at compile time and improves code quality across large-scale applications.",
    image: "/images/tech/typescript.jpg",
    bgTrackImage: "/images/gallery/miami-trophy.jpg",
    accentColor: "#D2FF00",
    specs: {
      weight: "Intermediate",
      finish: "Strict Mode Active",
      designer: "Microsoft / Open Source",
      result: "Type-Safe Codebase",
    },
  },
  {
    id: "nodejs-v22",
    name: "Node.js",
    year: "2025",
    race: "BACKEND // RUNTIME",
    theme: "Server-Side JavaScript Runtime",
    description:
      "Building scalable backend services, REST APIs, and server logic using Node.js with Express and other server frameworks.",
    image: "/images/tech/nodejs.jpg",
    bgTrackImage: "/images/f1-car-track.jpg",
    accentColor: "#D2FF00",
    specs: {
      weight: "Intermediate",
      finish: "REST APIs / Middleware",
      designer: "OpenJS Foundation",
      result: "Backend Ready",
    },
  },
  {
    id: "tailwind-css",
    name: "Tailwind CSS",
    year: "2024",
    race: "STYLING // UTILITY FRAMEWORK",
    theme: "Utility-First CSS Framework",
    description:
      "Rapid UI development with Tailwind CSS utility classes, enabling consistent design systems and responsive layouts without writing custom CSS.",
    image: "/images/tech/tailwind.jpg",
    bgTrackImage: "/images/f1-car-track.jpg",
    accentColor: "#f59e0b",
    specs: {
      weight: "Proficient",
      finish: "Responsive + Dark Mode",
      designer: "Tailwind Labs",
      result: "Pixel-Perfect UIs",
    },
  },
  {
    id: "supabase-v2",
    name: "Supabase",
    year: "2024",
    race: "BACKEND // BAAS PLATFORM",
    theme: "Open Source Firebase Alternative",
    description:
      "Leveraging Supabase for authentication, real-time databases, file storage, and edge functions in full-stack web applications.",
    image: "/images/tech/supabase.jpg",
    bgTrackImage: "/images/gallery/miami-trophy.jpg",
    accentColor: "#f97316",
    specs: {
      weight: "Intermediate",
      finish: "Auth + Database + Storage",
      designer: "Supabase Inc.",
      result: "Full Backend in Minutes",
    },
  },
  {
    id: "git-github",
    name: "Git & GitHub",
    year: "2024",
    race: "VERSION CONTROL // COLLABORATION",
    theme: "Source Control & Team Workflow",
    description:
      "Using Git for version control and GitHub for collaboration, pull requests, CI/CD workflows, and open-source project management.",
    image: "/images/tech/github.jpg",
    bgTrackImage: "/images/f1-car-track.jpg",
    accentColor: "#E3FF4D",
    specs: {
      weight: "Proficient",
      finish: "Branching & CI/CD",
      designer: "Linus Torvalds / GitHub",
      result: "Clean Commit History",
    },
  },
  {
    id: "figma-design",
    name: "Figma",
    year: "2024",
    race: "DESIGN // UI PROTOTYPING",
    theme: "Collaborative UI Design Tool",
    description:
      "Designing wireframes, prototypes, and high-fidelity UI mockups with Figma before translating them into pixel-perfect code.",
    image: "/images/tech/figma.jpg",
    bgTrackImage: "/images/f1-car-track.jpg",
    accentColor: "#ffffff",
    specs: {
      weight: "Intermediate",
      finish: "Wireframes + Prototypes",
      designer: "Figma Inc.",
      result: "Design-to-Code Flow",
    },
  },
];

const FILTER_TABS = ["ALL", "2025", "2024", "SPECIAL EDITIONS"];

export default function HelmetsGrid() {
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [activeModalHelmet, setActiveModalHelmet] = useState<HelmetItem | null>(null);

  const filteredHelmets = HELMETS.filter((h) => {
    if (selectedFilter === "ALL") return true;
    if (selectedFilter === "2025") return h.year === "2025";
    if (selectedFilter === "2024") return h.year === "2024";
    if (selectedFilter === "SPECIAL EDITIONS") {
      return (
        h.name.includes("Discoball") ||
        h.name.includes("Porcelain") ||
        h.name.includes("Basketball") ||
        h.name.includes("Las Vegas")
      );
    }
    return true;
  });

  return (
    <section id="helmets" className="relative w-full bg-[#080907] py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-telemetry-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6 border-b border-[#2A2F24] pb-6 sm:pb-8">
          <div>
            <div className="flex items-center gap-2 font-tech text-xs text-[#D2FF00] tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D2FF00]" />
              <span>[ TECH STACK // TOOLS OF TRADE ]</span>
            </div>
            <h2 className="font-heading font-black text-3xl min-[400px]:text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-[#F7F7F2]">
              TECH STACK — <span className="text-[#D2FF00]">TOOLS OF TRADE</span>
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-[#8E9285] max-w-xl font-sans leading-relaxed">
              The technologies, tools, and frameworks I use to build modern, scalable, and performant digital experiences.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 font-tech text-[11px] sm:text-xs">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border transition-all cursor-pointer ${
                  selectedFilter === tab
                    ? "bg-[#D2FF00] text-[#080907] border-[#D2FF00] font-bold shadow-md"
                    : "bg-[#121510] text-[#8E9285] border-[#2A2F24] hover:border-[#D2FF00] hover:text-[#F7F7F2]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Helmets Grid */}
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filteredHelmets.map((helmet) => (
            <div
              key={helmet.id}
              onClick={() => setActiveModalHelmet(helmet)}
              className="group relative cut-corner-br bg-[#121510] border border-[#2A2F24] hover:border-[#D2FF00] transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between shadow-xl"
            >
              {/* Background Contextual Track Photo expanding via Elliptical Mask on Hover */}
              <div
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none overflow-hidden"
                style={{
                  clipPath: "ellipse(100% 120% at 50% 0%)",
                }}
              >
                <Image
                  src={helmet.bgTrackImage}
                  alt="Track Backdrop"
                  fill
                  sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#080907]/80 backdrop-blur-xs" />
              </div>

              {/* Helmet Image Stage */}
              <div className="relative z-10 w-full aspect-square flex items-center justify-center p-4 sm:p-6 overflow-hidden">
                <div className="relative w-full h-full transition-transform duration-500 ease-out group-hover:scale-110">
                  <Image
                    src={helmet.image}
                    alt={helmet.name}
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover rounded-xl filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
                  />
                </div>

                {/* Floating Year Pill */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 font-tech text-[10px] font-bold px-2 py-0.5 rounded bg-[#080907]/90 border border-[#2A2F24] text-[#D2FF00]">
                  {helmet.year}
                </div>

                {/* Quick inspect hint */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-[#D2FF00] text-[#080907] p-1.5 rounded-full">
                  <Eye className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Content Description */}
              <div className="relative z-10 p-4 sm:p-5 bg-[#121510]/95 group-hover:bg-[#121510]/80 transition-colors border-t border-[#2A2F24]">
                <span className="font-tech text-[10px] text-[#8E9285] uppercase tracking-wider block">
                  {helmet.race}
                </span>
                <h3 className="font-heading font-black text-base sm:text-lg text-[#F7F7F2] group-hover:text-[#D2FF00] transition-colors mt-0.5">
                  {helmet.name}
                </h3>
                <p className="mt-1 sm:mt-1.5 text-xs text-[#8E9285] line-clamp-2 leading-relaxed">
                  {helmet.theme}
                </p>

                {/* Bottom spec pill */}
                <div className="mt-3 sm:mt-4 pt-3 border-t border-[#2A2F24]/60 flex items-center justify-between font-tech text-[10px] sm:text-[11px] text-[#8E9285]">
                  <span className="text-[#D2FF00] truncate max-w-[60%]">{helmet.specs.result}</span>
                  <div className="flex items-center gap-1 text-white group-hover:text-[#D2FF00] transition-colors flex-shrink-0">
                    <span>SPEC VIEW</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Helmet Detail Modal with Mobile Scroll Support */}
      <AnimatePresence>
        {activeModalHelmet && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#080907]/90 backdrop-blur-md"
            onClick={() => setActiveModalHelmet(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
              className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto no-scrollbar cut-corner-tl-br bg-[#121510] border-2 border-[#D2FF00] p-5 sm:p-8 shadow-[0_0_60px_rgba(210,255,0,0.3)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalHelmet(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-1.5 sm:p-2 bg-[#1C2018] border border-[#2A2F24] hover:border-[#D2FF00] text-white hover:text-[#D2FF00] rounded transition-colors z-20 cursor-pointer"
                aria-label="Close Helmet Details"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 items-center">
                {/* Helmet Presentation Viewport */}
                <div className="relative w-full aspect-[4/3] sm:aspect-square bg-[#080907] rounded border border-[#2A2F24] flex items-center justify-center p-3 sm:p-4 overflow-hidden">
                  <div className="absolute inset-0 bg-telemetry-dots opacity-30" />
                  <div className="relative w-full h-full">
                    <Image
                      src={activeModalHelmet.image}
                      alt={activeModalHelmet.name}
                      fill
                      sizes="(max-width: 640px) 280px, 320px"
                      className="object-cover rounded-xl filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
                    />
                  </div>
                </div>

                {/* Specs and Details */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="font-tech text-xs px-2.5 py-0.5 rounded bg-[#D2FF00] text-[#080907] font-bold">
                      {activeModalHelmet.year}
                    </span>
                    <span className="font-tech text-xs text-[#8E9285]">
                      {activeModalHelmet.race}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-xl sm:text-2xl md:text-3xl text-white">
                    {activeModalHelmet.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#8E9285] leading-relaxed">
                    {activeModalHelmet.description}
                  </p>

                  {/* Specification Table */}
                  <div className="space-y-1.5 sm:space-y-2 pt-2 border-t border-[#2A2F24] font-tech text-xs">
                    <div className="flex justify-between py-1 border-b border-[#2A2F24]/60">
                      <span className="text-[#8E9285]">CATEGORY & TYPE</span>
                      <span className="text-white text-right font-medium truncate ml-2">
                        {activeModalHelmet.theme}
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#2A2F24]/60">
                      <span className="text-[#8E9285]">EXPERIENCE LEVEL</span>
                      <span className="text-[#D2FF00] font-medium">
                        {activeModalHelmet.specs.weight}
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#2A2F24]/60">
                      <span className="text-[#8E9285]">ECOSYSTEM</span>
                      <span className="text-white font-medium">
                        {activeModalHelmet.specs.designer}
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#8E9285]">PROFICIENCY</span>
                      <span className="text-[#D2FF00] font-bold">
                        {activeModalHelmet.specs.result}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setActiveModalHelmet(null)}
                      className="w-full py-2.5 bg-[#D2FF00] text-[#080907] font-heading font-bold text-xs uppercase tracking-wider rounded-none hover:bg-white transition-colors cursor-pointer"
                    >
                      CLOSE TECH DETAILS
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
