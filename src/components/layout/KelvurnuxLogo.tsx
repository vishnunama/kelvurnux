import React from 'react';

export default function KvaornuxLogo({ className = "h-9 md:h-11" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Emblem Icon (Sleek Cyan Sphere with Abstract 'K' Ribbons) */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto flex-shrink-0 drop-shadow-[0_0_16px_rgba(0,235,170,0.5)]"
      >
        <defs>
          <linearGradient id="kelv-sphere" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ebaa" />
            <stop offset="50%" stopColor="#00ebaa" />
            <stop offset="100%" stopColor="#00b380" />
          </linearGradient>
        </defs>

        {/* Outer Glowing Cyan Sphere */}
        <circle cx="50" cy="50" r="48" fill="url(#kelv-sphere)" />

        {/* 3 Stylized Ribbon Cutouts Inside Sphere (Dark Curves forming Abstract K) */}
        <path
          d="M 28 8 C 16 32 16 68 28 92"
          stroke="#090d12"
          strokeWidth="8.5"
          strokeLinecap="round"
        />
        <path
          d="M 44 12 C 32 36 32 64 44 88"
          stroke="#090d12"
          strokeWidth="8.5"
          strokeLinecap="round"
        />
        <path
          d="M 60 18 C 48 38 48 62 60 82"
          stroke="#090d12"
          strokeWidth="8.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Brand Wordmark Typography */}
      <span
        className="text-2xl md:text-3xl font-extrabold tracking-tight font-sans"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #E2E8F0 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: "'Gabarito', 'Inter', system-ui, -apple-system, sans-serif",
          letterSpacing: '-0.02em',
        }}
      >
        Kvaornux
      </span>
    </div>
  );
}
