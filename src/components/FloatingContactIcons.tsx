'use client';

import React, { useState } from 'react';

const TelegramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.2208 3.09491L2.44583 8.79241C1.4375 9.19741 1.44333 9.75991 2.26083 10.0107L6.05416 11.1941L14.8308 5.65658C15.2458 5.40408 15.625 5.53991 15.3133 5.81658L8.2025 12.2341H8.20083L8.2025 12.2349L7.94083 16.1449C8.32416 16.1449 8.49333 15.9691 8.70833 15.7616L10.5508 13.9699L14.3833 16.8007C15.09 17.1899 15.5975 16.9899 15.7733 16.1466L18.2892 4.28991C18.5467 3.25741 17.895 2.78991 17.2208 3.09491Z" fill="white"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.475 2.5C15.6 0.675 13.175 -0.025 10.675 0.025C5.225 0.025 0.75 4.5 0.75 9.95C0.75 11.675 1.2 13.35 2.05 14.825L0.625 19.475L5.425 18.075C6.825 18.825 8.425 19.225 10.05 19.225H10.075C15.525 19.225 20 14.75 20 9.3C20 6.8 19.3 4.375 17.475 2.5ZM10.075 17.65C8.65 17.65 7.275 17.275 6.1 16.6L5.825 16.45L2.75 17.275L3.6 14.325L3.425 14.025C2.65 12.8 2.25 11.4 2.25 9.95C2.25 5.325 6.025 1.55 10.65 1.55C12.775 1.55 14.8 2.35 16.275 3.825C17.75 5.3 18.5 7.325 18.5 9.45C18.5 14.075 14.725 17.65 10.075 17.65ZM14.7 11.775C14.425 11.65 13.05 11.0 12.8 10.925C12.55 10.85 12.375 10.9 12.2 11.075C12.025 11.3 11.55 11.85 11.4 12.025C11.25 12.2 11.075 12.225 10.8 12.1C10.525 11.975 9.7 11.675 8.725 10.8C7.975 10.125 7.475 9.3 7.3 9.025C7.125 8.75 7.275 8.6 7.4 8.475C7.5 8.375 7.65 8.2 7.775 8.05C7.9 7.9 7.95 7.775 8.025 7.6C8.1 7.425 8.05 7.25 7.975 7.125C7.9 7.0 7.4 5.625 7.175 5.1C6.975 4.625 6.775 4.7 6.625 4.7C6.475 4.7 6.325 4.7 6.15 4.7C5.975 4.7 5.7 4.775 5.475 5.0C5.225 5.275 4.55 5.925 4.55 7.3C4.55 8.675 5.525 10.0 5.65 10.175C5.775 10.35 7.475 12.85 10.1 13.975C10.675 14.225 11.125 14.375 11.475 14.475C12.05 14.65 12.575 14.625 13.0 14.55C13.475 14.45 14.425 13.95 14.65 13.4C14.875 12.85 14.875 12.4 14.8 12.275C14.725 12.125 14.575 12.05 14.325 11.95C14.325 11.95 14.575 11.825 14.7 11.775Z" fill="white"/>
  </svg>
);

export default function FloatingContactIcons() {
  const [showLabels, setShowLabels] = useState(false);

  return (
    // ✅ FIXED WIDTH CONTAINER - PREVENTS CLS
    <div className="fixed bottom-6 right-3 md:bottom-8 md:right-8 z-50 flex flex-col gap-4 w-[64px] md:w-[80px]">
      {/* Floating Icons Container */}
      <div className="flex flex-col gap-3 md:gap-4">
        {/* Telegram Icon */}
        <div className="flex items-center gap-3 group flex-row-reverse">
          <a
            href="https://t.me/vikash9876g"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group/telegram flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 136, 204, 0.8) 0%, rgba(0, 150, 221, 0.8) 100%)',
              boxShadow: 'inset 0 -3px 4px 0 rgba(6, 10, 13, 0.26), inset 0 2px 2.8px 0 rgba(255, 255, 255, 0.13)',
            }}
            title="Telegram"
          >
            <TelegramIcon />
            <div className="absolute inset-0 rounded-full group-hover/telegram:opacity-100 opacity-50 transition-opacity duration-300 pointer-events-none" style={{
              background: 'radial-gradient(circle, rgba(0, 136, 204, 0.4) 0%, transparent 70%)',
            }}></div>
          </a>
          <span className="hidden md:block text-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900/80 px-3 py-1 rounded-lg backdrop-blur-sm">
            Telegram
          </span>
        </div>

        {/* WhatsApp Icon */}
        <div className="flex items-center gap-3 group flex-row-reverse">
          <a
            href="https://wa.me/918696548657"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group/whatsapp flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.8) 0%, rgba(22, 163, 74, 0.8) 100%)',
              boxShadow: 'inset 0 -3px 4px 0 rgba(6, 10, 13, 0.26), inset 0 2px 2.8px 0 rgba(255, 255, 255, 0.13)',
            }}
            title="WhatsApp"
          >
            <WhatsAppIcon />
            <div className="absolute inset-0 rounded-full group-hover/whatsapp:opacity-100 opacity-50 transition-opacity duration-300 pointer-events-none" style={{
              background: 'radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, transparent 70%)',
            }}></div>
          </a>
          <span className="hidden md:block text-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-900/80 px-3 py-1 rounded-lg backdrop-blur-sm">
            WhatsApp
          </span>
        </div>
      </div>

      {/* Floating Badge */}
      <div className="flex items-center justify-center">
        <div 
          className="text-xs font-semibold text-white px-2 py-1 rounded-full backdrop-blur-sm text-center"
          style={{
            background: 'rgba(0, 235, 170, 0.2)',
            border: '1px solid #00ebaa',
          }}
        >
          24/7 Support
        </div>
      </div>
    </div>
  );
}