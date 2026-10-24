"use client";

import React from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HorizontalGallery from "@/components/HorizontalGallery";
import SplitGate from "@/components/SplitGate";
import HelmetsGrid from "@/components/HelmetsGrid";
import StoreBanner from "@/components/StoreBanner";
import MarqueePartners from "@/components/MarqueePartners";
import SocialDeck from "@/components/SocialDeck";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen bg-[#080907] text-[#F7F7F2] overflow-x-clip">
        {/* Global Fixed HUD Navigation */}
        <Navbar />

        {/* 1. Hero Section with Austin GP SVG Telemetry & High-Impact Portrait */}
        <Hero />

        {/* 2. Impact Statement & Horizontal Media Rail */}
        <HorizontalGallery />

        {/* 3. Split Gate: On Track vs Off Track */}
        <SplitGate />

        {/* 4. Helmets Hall of Fame Grid */}
        <HelmetsGrid />

        {/* 5. Merch & World Drivers' Champion Collection */}
        <StoreBanner />

        {/* 6. Brand Collaborations & Infinite Partner Marquees */}
        <MarqueePartners />

        {/* 7. Social Stream & Card Deck */}
        <SocialDeck />

        {/* 8. Futuristic Telemetry Footer */}
        <Footer />
      </main>
    </SmoothScroll>
  );
}
