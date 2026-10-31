'use client';

import React from 'react';
import { Gamepad2, Wallet, Coins, Layers, Server, Code2, type LucideIcon } from 'lucide-react';

interface CapabilityItem {
  title: string;
  icon: LucideIcon;
}

const capabilities: CapabilityItem[] = [
  {
    title: '150+ Game Provider APIs Integrated',
    icon: Gamepad2,
  },
  {
    title: 'Seamless Wallet API',
    icon: Wallet,
  },
  {
    title: 'Crypto & Fiat Payments',
    icon: Coins,
  },
  {
    title: 'White-Label & Turnkey Platforms',
    icon: Layers,
  },
  {
    title: 'Platform Infrastructure',
    icon: Server,
  },
  {
    title: 'Custom iGaming Development',
    icon: Code2,
  },
];

export default function CapabilitiesMarquee() {
  // Duplicate 3 times to ensure a smooth, seamless infinite track with zero visual gaps or reset jumps
  const marqueeItems = [...capabilities, ...capabilities, ...capabilities];

  return (
    <section
      aria-label="Technology Capabilities"
      className="w-full bg-[#0b0b0f] border-y border-white/[0.06] relative overflow-hidden select-none py-3 sm:py-4"
    >
      <div className="w-full max-w-[124rem] mx-auto px-4 sm:px-8 lg:px-[4.5rem] flex flex-col lg:flex-row items-center gap-3 lg:gap-6">
        {/* Stationary Title on Desktop, Above on Mobile */}
        <div className="flex-shrink-0 flex items-center gap-2.5 lg:pr-6 lg:border-r lg:border-white/[0.08]">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#00ebaa] shadow-[0_0_8px_rgba(0,235,170,0.6)]"
            aria-hidden="true"
          />
          <h2 className="text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-white/80 whitespace-nowrap">
            OUR TECHNOLOGY CAPABILITIES
          </h2>
        </div>

        {/* Scrolling Marquee Container */}
        <div className="w-full overflow-hidden relative flex-1 min-w-0">
          {/* Edge gradient masks for seamless fade */}
          <div
            className="absolute left-0 top-0 w-8 sm:w-16 h-full bg-gradient-to-r from-[#0b0b0f] to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 w-10 sm:w-20 h-full bg-gradient-to-l from-[#0b0b0f] to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />

          {/* Scrolling Track */}
          <div className="flex w-max items-center gap-3 sm:gap-4 animate-capabilities-marquee hover:[animation-play-state:paused] py-1">
            {marqueeItems.map((item, idx) => (
              <div
                key={`capability-${idx}`}
                className="group inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-[#00ebaa]/40 hover:bg-[#00ebaa]/[0.05] transition-all duration-300 cursor-default whitespace-nowrap"
              >
                <span className="w-6 h-6 rounded-full bg-white/[0.04] group-hover:bg-[#00ebaa]/15 flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                  <item.icon
                    className="w-3.5 h-3.5 text-[#00ebaa] flex-shrink-0"
                    aria-hidden="true"
                  />
                </span>
                <span className="text-xs sm:text-sm font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes capabilities-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333333%);
          }
        }
        .animate-capabilities-marquee {
          animation: capabilities-marquee 36s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-capabilities-marquee {
            animation: none;
            overflow-x: auto;
          }
        }
      `}</style>
    </section>
  );
}
