"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LNLogo } from "./SvgIcons";
import { ShoppingBag, ArrowUpRight, Radio } from "lucide-react";

const NAV_LINKS = [
  {
    label: "HOME",
    href: "#hero",
    number: "01",
    tagline: "Developer Portfolio Hub",
    image: "/images/Portfolio.png",
  },
  {
    label: "PROJECTS",
    href: "#projects",
    number: "02",
    tagline: "Built Projects & Case Studies",
    image: "/images/3.png",
  },
  {
    label: "SKILLS",
    href: "#split-gate",
    number: "03",
    tagline: "Tech Stack & Expertise",
    image: "/images/2.png",
  },
  {
    label: "GALLERY",
    href: "#gallery",
    number: "04",
    tagline: "Project Archive & Timeline",
    image: "/images/4.png",
  },
  {
    label: "TECH STACK",
    href: "#helmets",
    number: "05",
    tagline: "Tools & Technologies",
    image: "/images/5.png",
  },
  {
    label: "CONTACT",
    href: "#store",
    number: "06",
    tagline: "Let's Build Something Together",
    image: "/images/6.png",
  },
  {
    label: "TOOLS",
    href: "#partners",
    number: "07",
    tagline: "Tech Ecosystem & Frameworks",
    image: "/images/7.png",
  },
  {
    label: "SOCIALS",
    href: "#socials",
    number: "08",
    tagline: "Community & Social Channels",
    image: "/images/8.png",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when flyout is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-3 sm:px-6 md:px-8 ${scrolled
          ? "bg-[#080907]/90 backdrop-blur-md border-b border-[#2A2F24]/60 py-2.5 sm:py-3 shadow-lg"
          : "bg-transparent py-3.5 sm:py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Left: Brand Logo & Title */}
          <Link
            href="#hero"
            className="group flex items-center gap-2 sm:gap-3.5 focus:outline-none min-w-0"
            aria-label="Lando Norris Home"
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center p-1 sm:p-1.5 bg-[#121510] border border-[#2A2F24] group-hover:border-[#D2FF00] transition-colors rounded-sm">
              <LNLogo className="w-full h-full text-white" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-heading font-extrabold text-sm sm:text-base md:text-lg tracking-tight leading-none text-[#F7F7F2] group-hover:text-[#D2FF00] transition-colors truncate">
                RISHABH RAJ
              </span>
              <span className="font-tech text-[9px] sm:text-[10px] tracking-widest text-[#8E9285] uppercase">
                RR // PORTFOLIO
              </span>
            </div>
          </Link>

          {/* Center: Floating mini HUD element with telemetry indicator */}
          <div className="hidden xl:flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121510]/90 border border-[#2A2F24] text-xs font-tech text-[#8E9285] shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D2FF00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D2FF00]"></span>
            </span>
            <span className="text-[#F7F7F2] font-semibold">WEB DEVELOPER</span>
            <span className="text-[#2A2F24]">|</span>
            <span className="text-[#D2FF00]">OPEN TO WORK</span>
            <span className="text-[#2A2F24]">|</span>
            <span className="flex items-center gap-1 text-[11px] text-[#8E9285]">
              <Radio className="w-3 h-3 text-[#D2FF00]" /> FULL STACK DEV
            </span>
          </div>

          {/* Right: Neon Lime Store Pill Button & Hamburger Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Store Pill Button with 3D Flip Interactive Hover */}
            <Link
              href="#store"
              className="relative group overflow-hidden px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#D2FF00] text-[#080907] font-heading font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-md hover:neon-glow transition-all duration-300"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 transition-transform duration-300 group-hover:-translate-y-full">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>HIRE ME</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center gap-1.5 sm:gap-2 translate-y-full transition-transform duration-300 group-hover:translate-y-0 bg-[#080907] text-[#D2FF00]">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>LET&apos;S TALK</span>
              </div>
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-9 h-9 sm:w-11 sm:h-11 flex flex-col items-center justify-center gap-1 sm:gap-1.5 bg-[#121510] hover:bg-[#1C2018] border border-[#2A2F24] hover:border-[#D2FF00] rounded-sm transition-all focus:outline-none cursor-pointer"
              aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-4 sm:w-5 h-[2px] bg-[#F7F7F2] transition-colors"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-4 sm:w-5 h-[2px] bg-[#D2FF00] transition-colors"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-4 sm:w-5 h-[2px] bg-[#F7F7F2] transition-colors"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Flyout Menu with Mobile Scroll Support */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            data-lenis-prevent
            className="fixed inset-0 z-40 bg-[#080907]/98 backdrop-blur-xl flex flex-col overflow-y-auto no-scrollbar"
          >
            {/* Background Telemetry Grid */}
            <div className="fixed inset-0 bg-telemetry-grid opacity-30 pointer-events-none" />

            <div className="relative z-10 w-full min-h-screen max-w-7xl mx-auto px-4 sm:px-8 md:px-12 pt-20 sm:pt-24 lg:pt-28 pb-8 sm:pb-12 flex flex-col justify-between">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto items-center py-4">
                {/* Left Navigation Links List */}
                <div className="lg:col-span-7 flex flex-col justify-center space-y-1 sm:space-y-1.5">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="font-tech text-[10px] sm:text-xs tracking-widest text-[#D2FF00]">
                      [ NAVIGATION ARCHIVE // SYSTEM ]
                    </span>
                    <span className="font-tech text-[10px] text-[#8E9285] lg:hidden">
                      TAP LINK TO JUMP
                    </span>
                  </div>
                  {NAV_LINKS.map((link, idx) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.03 * idx, duration: 0.35 }}
                      onMouseEnter={() => setActiveImageIndex(idx)}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center gap-2.5 sm:gap-4 py-1 sm:py-1.5 focus:outline-none"
                      >
                        <span className="font-tech text-[10px] sm:text-xs text-[#8E9285] group-hover:text-[#D2FF00] transition-colors w-5">
                          {link.number}
                        </span>
                        <div className="relative overflow-hidden flex-shrink-0">
                          <span className="font-heading font-black text-xl min-[400px]:text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-[#F7F7F2] group-hover:text-[#D2FF00] transition-all duration-300 whitespace-nowrap block">
                            {link.label}
                          </span>
                          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D2FF00] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                        </div>
                        <span className="hidden xl:inline-block font-tech text-xs text-[#8E9285] opacity-0 group-hover:opacity-100 transition-opacity ml-2 truncate">
                          {"//"} {link.tagline}
                        </span>
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#D2FF00] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Right: Dynamic Hover Image Preview with Custom Angled Frame */}
                <div className="hidden lg:flex lg:col-span-5 h-[420px] xl:h-[480px] flex-col justify-center items-center">
                  <div className="relative w-full h-full max-w-md cut-corner-tl-br overflow-hidden border border-[#2A2F24] bg-[#0A0D08] shadow-2xl flex flex-col justify-between">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="relative w-full h-full flex flex-col justify-between"
                      >
                        {/* Top Protocol Header */}
                        <div className="relative z-10 px-4 py-3 flex items-center justify-between border-b border-[#2A2F24] bg-[#0E110C] flex-shrink-0">
                          <span className="font-tech text-[10px] sm:text-xs text-[#D2FF00] uppercase tracking-wider">
                            ACTIVE PROTOCOL // {NAV_LINKS[activeImageIndex].number}
                          </span>
                          <span className="w-2 h-2 rounded-full bg-[#D2FF00] animate-pulse" />
                        </div>

                        {/* Uncropped Image Display Stage */}
                        <div className="relative w-full flex-1 min-h-0 flex items-center justify-center p-3 sm:p-4 bg-[#080907]">
                          <Image
                            src={NAV_LINKS[activeImageIndex].image}
                            alt={NAV_LINKS[activeImageIndex].label}
                            fill
                            sizes="(max-width: 1280px) 400px, 480px"
                            className="object-contain object-center"
                            priority
                          />
                        </div>

                        {/* Bottom Info Banner */}
                        <div className="relative z-10 p-4 sm:p-5 border-t border-[#2A2F24] bg-[#121510] flex flex-col flex-shrink-0">
                          <span className="font-heading font-black text-xl sm:text-2xl text-white">
                            {NAV_LINKS[activeImageIndex].label}
                          </span>
                          <span className="font-tech text-xs text-[#8E9285] mt-0.5">
                            {NAV_LINKS[activeImageIndex].tagline}
                          </span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Bottom Footer info in Flyout */}
              <div className="pt-4 sm:pt-6 border-t border-[#2A2F24]/60 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs font-tech text-[#8E9285] gap-3 sm:gap-4 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 sm:gap-x-6 gap-y-1.5">
                  <span className="text-white font-bold">CHANNELS:</span>
                  <a
                    href="https://github.com/RishabhRaj240"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#D2FF00] transition-colors"
                  >
                    GITHUB
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rishab-raj-0028622b4/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#D2FF00] transition-colors"
                  >
                    LINKEDIN
                  </a>
                  <a
                    href="https://x.com/Rishabh042405"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#D2FF00] transition-colors"
                  >
                    TWITTER/X
                  </a>
                  <a
                    href="https://www.instagram.com/rishab_raj44/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#D2FF00] transition-colors"
                  >
                    INSTAGRAM
                  </a>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                  <span>CONTACT:</span>
                  <a
                    href="#store"
                    onClick={() => setIsOpen(false)}
                    className="text-[#D2FF00] hover:underline"
                  >
                    LET&apos;S CONNECT ↗
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
