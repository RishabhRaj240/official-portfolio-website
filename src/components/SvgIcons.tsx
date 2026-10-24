"use client";

import React from "react";

// Official-style geometric LN monogram logo
export function LNLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lando Norris Logo"
    >
      {/* Dynamic angled geometric L and 4/N */}
      <polygon
        points="10,15 34,15 34,70 58,70 58,85 10,85"
        fill="currentColor"
      />
      <polygon
        points="42,15 62,15 88,60 88,15 98,15 98,85 78,85 52,40 52,85 42,85"
        fill="var(--neon-lime, #D2FF00)"
      />
      <circle cx="20" cy="25" r="4" fill="var(--neon-lime, #D2FF00)" />
      {/* Angled racing notch */}
      <polygon points="62,15 68,15 64,25 58,25" fill="#FFFFFF" />
    </svg>
  );
}

// Circuit of The Americas (Austin GP) Circuit Outline SVG with sector beacons
export function AustinGPSVG({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="cota-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D2FF00" />
          <stop offset="50%" stopColor="#8E9285" />
          <stop offset="100%" stopColor="#D2FF00" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Grid lines background */}
      <path
        d="M20 60 H380 M20 120 H380 M20 180 H380 M100 20 V220 M200 20 V220 M300 20 V220"
        stroke="#2A2F24"
        strokeWidth="0.8"
        strokeDasharray="3 3"
        opacity="0.4"
      />

      {/* Track base */}
      <path
        id="cota-track"
        d="M 60 160 
           L 110 50 
           Q 125 35 145 45 
           L 180 80 
           Q 195 95 210 85 
           L 240 65 
           Q 255 55 268 70 
           L 285 105 
           L 340 115 
           Q 360 120 355 140 
           L 330 190 
           Q 320 205 300 195 
           L 260 175 
           Q 245 165 235 180 
           L 220 205 
           Q 205 215 190 200 
           L 160 160 
           L 120 180 
           Q 95 195 80 180 
           Z"
        stroke="#2A2F24"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Illuminated active line */}
      <path
        d="M 60 160 
           L 110 50 
           Q 125 35 145 45 
           L 180 80 
           Q 195 95 210 85 
           L 240 65 
           Q 255 55 268 70 
           L 285 105 
           L 340 115 
           Q 360 120 355 140 
           L 330 190 
           Q 320 205 300 195 
           L 260 175 
           Q 245 165 235 180 
           L 220 205 
           Q 205 215 190 200 
           L 160 160 
           L 120 180 
           Q 95 195 80 180 
           Z"
        stroke="url(#cota-gradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
      />

      {/* Start / Finish line */}
      <line x1="52" y1="152" x2="68" y2="168" stroke="#FFFFFF" strokeWidth="3" />

      {/* Sector Markers */}
      {/* S1: Turn 1 */}
      <circle cx="110" cy="50" r="3.5" fill="#D2FF00" />
      <text x="96" y="40" fill="#D2FF00" fontSize="9" fontFamily="monospace" fontWeight="bold">T1 (Elevation +41m)</text>

      {/* S2: Back straight */}
      <circle cx="340" cy="115" r="3.5" fill="#F7F7F2" />
      <text x="270" y="135" fill="#8E9285" fontSize="8" fontFamily="monospace">BACK STRAIGHT 330+ KPH</text>

      {/* S3: Stadium Section */}
      <circle cx="220" cy="205" r="3.5" fill="#D2FF00" />
      <text x="230" y="222" fill="#D2FF00" fontSize="8" fontFamily="monospace">TURN 16-18</text>

      {/* Animated Telemetry dot traversing circuit */}
      <circle r="4" fill="#D2FF00">
        <animateMotion
          dur="9s"
          repeatCount="indefinite"
          path="M 60 160 L 110 50 Q 125 35 145 45 L 180 80 Q 195 95 210 85 L 240 65 Q 255 55 268 70 L 285 105 L 340 115 Q 360 120 355 140 L 330 190 Q 320 205 300 195 L 260 175 Q 245 165 235 180 L 220 205 Q 205 215 190 200 L 160 160 L 120 180 Q 95 195 80 180 Z"
        />
      </circle>
    </svg>
  );
}

// Lando Norris handwritten neon signature SVG path
export function LandoSignature({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 450 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M 30 110 
           C 40 40, 70 20, 85 45 
           C 95 65, 80 125, 65 120 
           C 55 115, 60 95, 95 90 
           C 125 85, 140 100, 160 95 
           C 180 90, 190 70, 205 75 
           C 220 80, 215 110, 235 95 
           C 255 80, 275 85, 290 80 
           C 310 75, 330 65, 345 85 
           L 380 40 
           M 360 65 L 420 60
           M 400 45 L 415 110"
        stroke="#D2FF00"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-all duration-700"
      />
      {/* Norris #4 racing symbol */}
      <path
        d="M 390 95 L 425 95 M 415 80 L 415 120 L 400 120"
        stroke="#F7F7F2"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Telemetry graph waveform SVG
export function TelemetryWave({ className = "w-full h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0 30 L 40 30 L 50 10 L 60 50 L 70 25 L 85 30 L 130 30 L 140 5 L 155 55 L 165 30 L 210 30 L 220 15 L 235 45 L 250 30 L 300 30"
        stroke="#D2FF00"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  );
}
