"use client";

import React, { useEffect, useRef } from "react";

interface HeroNeonGlowProps {
  containerRef: React.RefObject<HTMLElement | null>;
}

export default function HeroNeonGlow({ containerRef }: HeroNeonGlowProps) {
  const coreRef = useRef<HTMLDivElement>(null);
  const ambientRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Disable on touch devices and respect reduced motion preferences
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    let isInside = false;
    let targetX = 0;
    let targetY = 0;
    let coreX = 0;
    let coreY = 0;
    let ambientX = 0;
    let ambientY = 0;
    let currentOpacity = 0;
    let targetOpacity = 0;
    let isRunning = false;

    const render = () => {
      // Smoothly interpolate opacity
      currentOpacity += (targetOpacity - currentOpacity) * 0.08;

      // When fully faded out and pointer is outside, stop RAF to save CPU/GPU cycles
      if (currentOpacity < 0.002 && !isInside) {
        currentOpacity = 0;
        if (coreRef.current) coreRef.current.style.opacity = "0";
        if (ambientRef.current) ambientRef.current.style.opacity = "0";
        isRunning = false;
        rafId.current = null;
        return;
      }

      // Smooth interpolation for primary core glow (crisp, illuminated focus)
      coreX += (targetX - coreX) * 0.14;
      coreY += (targetY - coreY) * 0.14;

      // Trailing interpolation for ambient glow (soft, organic fluid momentum)
      ambientX += (targetX - ambientX) * 0.06;
      ambientY += (targetY - ambientY) * 0.06;

      if (coreRef.current) {
        coreRef.current.style.opacity = currentOpacity.toFixed(3);
        coreRef.current.style.transform = `translate3d(${coreX.toFixed(1)}px, ${coreY.toFixed(1)}px, 0) translate(-50%, -50%)`;
      }

      if (ambientRef.current) {
        ambientRef.current.style.opacity = currentOpacity.toFixed(3);
        ambientRef.current.style.transform = `translate3d(${ambientX.toFixed(1)}px, ${ambientY.toFixed(1)}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    const startLoop = () => {
      if (!isRunning) {
        isRunning = true;
        rafId.current = requestAnimationFrame(render);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;

      if (!isInside) {
        isInside = true;
        targetOpacity = 1;
        // Snap initial coordinates if waking from rest to prevent distant fly-in
        if (currentOpacity < 0.05) {
          coreX = targetX;
          coreY = targetY;
          ambientX = targetX;
          ambientY = targetY;
        }
      }

      startLoop();
    };

    const handlePointerEnter = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      isInside = true;
      targetOpacity = 1;

      if (currentOpacity < 0.05) {
        coreX = targetX;
        coreY = targetY;
        ambientX = targetX;
        ambientY = targetY;
      }

      startLoop();
    };

    const handlePointerLeave = () => {
      isInside = false;
      targetOpacity = 0;
      startLoop();
    };

    container.addEventListener("pointermove", handlePointerMove, { passive: true });
    container.addEventListener("pointerenter", handlePointerEnter, { passive: true });
    container.addEventListener("pointerleave", handlePointerLeave, { passive: true });

    return () => {
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerenter", handlePointerEnter);
      container.removeEventListener("pointerleave", handlePointerLeave);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [containerRef]);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-[1]"
      aria-hidden="true"
    >
      {/* Layer 1: Ambient trailing bloom - large aura with vibrant neon-lime (#D1FF00) and secondary green falloff */}
      <div
        ref={ambientRef}
        className="absolute top-0 left-0 w-[550px] sm:w-[650px] h-[550px] sm:h-[650px] rounded-full will-change-transform pointer-events-none"
        style={{
          opacity: 0,
          background:
            "radial-gradient(circle, rgba(209, 255, 0, 0.15) 0%, rgba(132, 204, 22, 0.09) 35%, rgba(34, 197, 94, 0.03) 65%, transparent 80%)",
          filter: "blur(50px)",
        }}
      />

      {/* Layer 2: Core luminous glow - intense illuminated center with subtle bloom */}
      <div
        ref={coreRef}
        className="absolute top-0 left-0 w-[240px] sm:w-[320px] h-[240px] sm:h-[320px] rounded-full will-change-transform pointer-events-none"
        style={{
          opacity: 0,
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.40) 0%, rgba(209, 255, 0, 0.35) 30%, rgba(209, 255, 0, 0.12) 60%, transparent 75%)",
          filter: "blur(20px)",
        }}
      />
    </div>
  );
}
