"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Heart, ArrowUpRight, Radio } from "lucide-react";

interface SocialCard {
  id: string;
  platform: "GITHUB" | "LINKEDIN" | "TWITTER/X" | "INSTAGRAM" | "YOUTUBE";
  handle: string;
  image: string;
  caption: string;
  views: string;
  likes: string;
  rotation: number;
  actionText: string;
  link: string;
}

const SOCIAL_ITEMS: SocialCard[] = [
  {
    id: "social-1",
    platform: "GITHUB",
    handle: "@RishabhRaj240",
    image: "/images/social/github.jpg",
    caption: "Check out my latest open-source projects and code contributions on GitHub 🚀",
    views: "5+ REPOS",
    likes: "OPEN SOURCE",
    rotation: -6,
    actionText: "WATCH PROJECTS",
    link: "https://github.com/RishabhRaj240",
  },
  {
    id: "social-2",
    platform: "LINKEDIN",
    handle: "Rishab Raj",
    image: "/images/social/linkedin.jpg",
    caption: "Connecting with developers, sharing learnings, and exploring opportunities 💼",
    views: "NETWORK",
    likes: "CONNECT",
    rotation: -2,
    actionText: "WATCH PORTFOLIO",
    link: "https://www.linkedin.com/in/rishab-raj-0028622b4/",
  },
  {
    id: "social-3",
    platform: "TWITTER/X",
    handle: "@Rishabh042405",
    image: "/images/social/twitter.jpg",
    caption: "Sharing dev thoughts, project updates, and web development insights daily 🔥",
    views: "THREADS",
    likes: "DEV TIPS",
    rotation: 2,
    actionText: "WATCH POSTS",
    link: "https://x.com/Rishabh042405",
  },
  {
    id: "social-4",
    platform: "INSTAGRAM",
    handle: "@rishab_raj44",
    image: "/images/social/instagram.jpg",
    caption: "Behind the scenes of building projects, learning, and growing as a developer 📱",
    views: "POSTS",
    likes: "FOLLOWING",
    rotation: 6,
    actionText: "WATCH REEL",
    link: "https://www.instagram.com/rishab_raj44/",
  },
];

const PLATFORMS = [
  {
    name: "GITHUB",
    handle: "@RishabhRaj240",
    followers: "VIEW CODE",
    link: "https://github.com/RishabhRaj240",
    color: "#D2FF00",
  },
  {
    name: "LINKEDIN",
    handle: "Rishab Raj",
    followers: "CONNECT",
    link: "https://www.linkedin.com/in/rishab-raj-0028622b4/",
    color: "#f43f5e",
  },
  {
    name: "TWITTER/X",
    handle: "@Rishabh042405",
    followers: "FOLLOW",
    link: "https://x.com/Rishabh042405",
    color: "#ef4444",
  },
  {
    name: "INSTAGRAM",
    handle: "@rishab_raj44",
    followers: "FOLLOW",
    link: "https://www.instagram.com/rishab_raj44/",
    color: "#a855f7",
  },
];

export default function SocialDeck() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="socials" className="relative w-full bg-[#080907] py-16 sm:py-24 lg:py-32 overflow-hidden border-t border-[#2A2F24]">
      {/* Background Telemetry Grid */}
      <div className="absolute inset-0 bg-telemetry-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 font-tech text-xs text-[#D2FF00] tracking-widest uppercase bg-[#121510] px-3 py-1 rounded-full border border-[#2A2F24]">
            <Radio className="w-3.5 h-3.5 animate-pulse text-[#D2FF00]" />
            <span>[ SOCIAL // DEVELOPER COMMUNITY ]</span>
          </div>

          <h2 className="font-heading font-black text-3xl min-[400px]:text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-[#F7F7F2]">
            FIND ME ON{" "}
            <span className="font-editorial italic font-normal text-[#D2FF00] lowercase px-1 sm:px-2">
              socials
            </span>
          </h2>

          <p className="font-sans text-xs sm:text-sm md:text-base text-[#8E9285] max-w-xl mx-auto">
            Connect with me on social platforms where I share projects, learnings, dev tips, and updates from my development journey.
          </p>
        </div>

        {/* Responsive Card Deck: Native Touch Snap Carousel on mobile/tablet, Fanned Deck on desktop */}
        <div className="relative py-4 lg:py-12 flex items-center justify-center min-h-[420px] lg:min-h-[520px]">
          <div
            data-lenis-prevent
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 pt-2 px-4 sm:px-6 lg:overflow-visible lg:flex-nowrap lg:justify-center lg:p-0 gap-4 sm:gap-6 w-full max-w-6xl"
          >
            {SOCIAL_ITEMS.map((item, idx) => {
              const isHovered = hoveredCard === item.id;
              return (
                <motion.div
                  key={item.id}
                  onMouseEnter={() => setHoveredCard(item.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  animate={{
                    rotate: isHovered ? 0 : item.rotation,
                    y: isHovered ? -20 : 0,
                    scale: isHovered ? 1.05 : 1,
                    zIndex: isHovered ? 30 : idx + 1,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="relative w-[230px] min-[400px]:w-[250px] sm:w-[260px] h-[360px] sm:h-[400px] rounded-2xl bg-[#121510] border-2 border-[#2A2F24] hover:border-[#D2FF00] overflow-hidden shadow-2xl flex-shrink-0 cursor-pointer group snap-center"
                >
                  {/* Media Snapshot */}
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    sizes="(max-width: 640px) 250px, 260px"
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080907] via-[#080907]/40 to-black/30" />

                  {/* Top Bar on Card */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 text-[10px] font-tech">
                    <span className="px-2 py-0.5 rounded bg-[#080907]/80 backdrop-blur text-[#D2FF00] font-bold">
                      {item.platform}
                    </span>
                    <span className="text-white/80 bg-black/60 px-2 py-0.5 rounded">
                      {item.views} VIEWS
                    </span>
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-[#080907]/80 backdrop-blur border border-[#D2FF00] flex items-center justify-center text-[#D2FF00] group-hover:scale-110 group-hover:bg-[#D2FF00] group-hover:text-[#080907] transition-all shadow-lg">
                      <Play className="w-4 sm:w-5 h-4 sm:h-5 ml-0.5 fill-current" />
                    </div>
                  </div>

                  {/* Bottom Caption and Stats */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 space-y-1.5 sm:space-y-2">
                    <span className="font-tech text-xs text-[#D2FF00] font-bold block">
                      {item.handle}
                    </span>
                    <p className="text-[11px] sm:text-xs text-[#F7F7F2] font-sans line-clamp-2 leading-snug">
                      {item.caption}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] sm:text-[11px] font-tech text-[#8E9285]">
                      <span className="flex items-center gap-1 text-white">
                        <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> {item.likes}
                      </span>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#D2FF00] hover:underline flex items-center gap-0.5"
                      >
                        {item.actionText} <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="text-center font-tech text-[10px] text-[#8E9285] lg:hidden mb-4">
          ← SWIPE HORIZONTALLY TO BROWSE CARDS →
        </div>

        {/* Social Handle Pills with Magnetic Feel */}
        <div className="mt-4 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {PLATFORMS.map((platform) => (
            <a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[#121510] border border-[#2A2F24] hover:border-[#D2FF00] hover:bg-[#1C2018] transition-all shadow-lg flex-shrink-0"
            >
              <div className="flex flex-col text-left">
                <span className="font-tech text-[9px] sm:text-[10px] text-[#8E9285] group-hover:text-[#D2FF00] uppercase tracking-wider">
                  {platform.name}
                </span>
                <span className="font-heading font-extrabold text-xs sm:text-sm text-[#F7F7F2] group-hover:text-[#D2FF00]">
                  {platform.handle}
                </span>
              </div>
              <span className="font-tech text-[10px] sm:text-xs font-bold text-[#080907] bg-[#D2FF00] px-2 sm:px-2.5 py-0.5 rounded-full ml-1 sm:ml-2">
                {platform.followers}
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#8E9285] group-hover:text-[#D2FF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
