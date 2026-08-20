'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import KelvurnuxLogo from '@/src/components/layout/KelvurnuxLogo';

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.3333 6.27637V14.1639C18.3333 14.8015 18.0897 15.4151 17.6522 15.8791C17.2148 16.343 16.6165 16.6223 15.98 16.6597L15.8333 16.6639H4.16663C3.52895 16.6639 2.91536 16.4203 2.45141 15.9828C1.98745 15.5453 1.7082 14.9471 1.67079 14.3105L1.66663 14.1639V6.27637L9.53746 11.5239L9.63413 11.5789C9.74805 11.6345 9.87317 11.6635 9.99996 11.6635C10.1268 11.6635 10.2519 11.6345 10.3658 11.5789L10.4625 11.5239L18.3333 6.27637Z" fill="white"/>
    <path d="M15.8333 3.33008C16.7333 3.33008 17.5225 3.80508 17.9625 4.51924L9.99998 9.82758L2.03748 4.51924C2.24647 4.17993 2.53355 3.8955 2.87479 3.68965C3.21602 3.48381 3.60152 3.36253 3.99914 3.33591L4.16664 3.33008H15.8333Z" fill="white"/>
  </svg>
);

const TelegramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.2208 3.09491L2.44583 8.79241C1.4375 9.19741 1.44333 9.75991 2.26083 10.0107L6.05416 11.1941L14.8308 5.65658C15.2458 5.40408 15.625 5.53991 15.3133 5.81658L8.2025 12.2341H8.20083L8.2025 12.2349L7.94083 16.1449C8.32416 16.1449 8.49333 15.9691 8.70833 15.7616L10.5508 13.9699L14.3833 16.8007C15.09 17.1899 15.5975 16.9899 15.7733 16.1466L18.2892 4.28991C18.5467 3.25741 17.895 2.78991 17.2208 3.09491Z" fill="white"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.475 2.5C15.6 0.675 13.175 -0.025 10.675 0.025C5.225 0.025 0.75 4.5 0.75 9.95C0.75 11.675 1.2 13.35 2.05 14.825L0.625 19.475L5.425 18.075C6.825 18.825 8.425 19.225 10.05 19.225H10.075C15.525 19.225 20 14.75 20 9.3C20 6.8 19.3 4.375 17.475 2.5ZM10.075 17.65C8.65 17.65 7.275 17.275 6.1 16.6L5.825 16.45L2.75 17.275L3.6 14.325L3.425 14.025C2.65 12.8 2.25 11.4 2.25 9.95C2.25 5.325 6.025 1.55 10.65 1.55C12.775 1.55 14.8 2.35 16.275 3.825C17.75 5.3 18.5 7.325 18.5 9.45C18.5 14.075 14.725 17.65 10.075 17.65ZM14.7 11.775C14.425 11.65 13.05 11.0 12.8 10.925C12.55 10.85 12.375 10.9 12.2 11.075C12.025 11.3 11.55 11.85 11.4 12.025C11.25 12.2 11.075 12.225 10.8 12.1C10.525 11.975 9.7 11.675 8.725 10.8C7.975 10.125 7.475 9.3 7.3 9.025C7.125 8.75 7.275 8.6 7.4 8.475C7.5 8.375 7.65 8.2 7.775 8.05C7.9 7.9 7.95 7.775 8.025 7.6C8.1 7.425 8.05 7.25 7.975 7.125C7.9 7.0 7.4 5.625 7.175 5.1C6.975 4.625 6.775 4.7 6.625 4.7C6.475 4.7 6.325 4.7 6.15 4.7C5.975 4.7 5.7 4.775 5.475 5.0C5.225 5.275 4.55 5.925 4.55 7.3C4.55 8.675 5.525 10.0 5.65 10.175C5.775 10.35 7.475 12.85 10.1 13.975C10.675 14.225 11.125 14.375 11.475 14.475C12.05 14.65 12.575 14.625 13.0 14.55C13.475 14.45 14.425 13.95 14.65 13.4C14.875 12.85 14.875 12.4 14.8 12.275C14.725 12.125 14.575 12.05 14.325 11.95C14.325 11.95 14.575 11.825 14.7 11.775Z" fill="white"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-gradient text-white py-12 md:py-20 relative overflow-hidden">
      {/* Top Border Line */}
      <div className="absolute top-0 left-1/2 w-full h-0.5 -translate-x-1/2" style={{ background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, #344348 45%, #344348 55%, rgba(255, 255, 255, 0) 100%)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-12 md:mb-20">
          {/* Footer Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-3 md:mb-4 bg-transparent">
              <img 
                src="/assets/logo4.png" 
                alt="Kelvurnux" 
                className="h-9 md:h-11 w-auto object-contain block bg-transparent" 
              />
            </Link>
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
  B2B iGaming development company providing custom software solutions, API integration, and scalable infrastructure for businesses.
</p>
          </div>

          {/* Company Menu */}
          <div>
            <h3 className="text-xs md:text-sm font-medium text-gray-400 mb-3 md:mb-4">
              Company
            </h3>
            <nav>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a href="/about-us/" className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors duration-300">
                    About Kelvurnux
                  </a>
                </li>
              </ul>
            </nav>
          </div>

        {/* Special Solutions Menu */}
<div>
  <h3 className="text-xs md:text-sm font-medium text-gray-400 mb-3 md:mb-4">
    Special Solutions
  </h3>
  <nav>
    <ul className="space-y-2 md:space-y-3">
      
      <li>
        <a
          href="/crypto-igaming-Solutions"
          className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors duration-300"
        >
          Crypto iGaming Solutions
        </a>
      </li>

      <li>
        <a
          href="/custom-igaming-solution"
          className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors duration-300"
        >
          Custom iGaming Solution
        </a>
      </li>

      <li>
        <a
          href="/igaming-api-integration"
          className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors duration-300"
        >
          iGaming API Integration
        </a>
      </li>

      <li>
        <a
          href="/turnkey-sportsbook-solutions"
          className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors duration-300"
        >
          turnkey sportsbook solutions
        </a>
      </li>

    </ul>
  </nav>
</div>

        {/* Comprehensive Solutions Menu */}
<div>
  <h3 className="text-xs md:text-sm font-medium text-gray-400 mb-3 md:mb-4">
    Comprehensive Solutions
  </h3>
  <nav>
    <ul className="space-y-2 md:space-y-3">
      <li>
        <a href="/white-label-casino-solutions/" className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors duration-300">
          White Label Casino Solutions
        </a>
      </li>
      <li>
        <a href="/turnkey-casino-software-solutions/" className="text-xs md:text-sm text-gray-300 hover:text-white transition-colors duration-300">
          Turnkey Casino Software Solutions
        </a>
      </li>
    </ul>
  </nav>
</div>

       {/* Social Links Section */}
          <div>
            <h3 className="text-xs md:text-sm font-medium text-gray-400 mb-3 md:mb-4">
              Contact us
            </h3>
            <div className="flex gap-2">
              {/* ✅ Email Link with aria-label */}
              <a 
                href="mailto:kelvurnux@gmail.com"
                aria-label="Email Kelvurnux"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 -3px 4px 0 rgba(6, 10, 13, 0.26) inset, 0 2px 2.8px 0 rgba(255, 255, 255, 0.13) inset',
                }}
              >
                <EmailIcon />
              </a>
              {/* ✅ Telegram Link with aria-label */}
              <a 
                href="https://t.me/vikash9876g" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Contact Kelvurnux on Telegram"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 -3px 4px 0 rgba(6, 10, 13, 0.26) inset, 0 2px 2.8px 0 rgba(255, 255, 255, 0.13) inset',
                }}
              >
                <TelegramIcon />
              </a>
              {/* ✅ WhatsApp Link with aria-label */}
              <a 
                href="https://wa.me/918696548657" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Contact Kelvurnux on WhatsApp"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 -3px 4px 0 rgba(6, 10, 13, 0.26) inset, 0 2px 2.8px 0 rgba(255, 255, 255, 0.13) inset',
                }}
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Support Section */}
        <div className="relative pt-6 md:pt-8 mb-6 md:mb-8">
          <div className="absolute top-0 left-1/2 w-full h-px -translate-x-1/2" style={{ background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, #2b2e33 45%, #2b2e33 55%, rgba(255, 255, 255, 0) 100%)' }}></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Disclaimer */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 md:gap-3 lg:col-span-1">
              <div className="text-lg md:text-2xl font-semibold text-gray-400 min-w-fit">18+</div>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
  Kelvurnux provides software development services only. We do not operate any gaming or betting platforms.
</p>
            </div>

            {/* Empty Space */}
            <div className="hidden lg:block"></div>

            {/* Support Logos - ✅ OPTIMIZED WITH SIZES */}
            <div className="flex flex-wrap justify-start lg:justify-end gap-3 md:gap-4 items-center lg:col-span-1">
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://cert.gcb.cw/certificate?id=ZXlKcGRpSTZJbVJPWVZkM2NqWTRia1ZKV0hwRWJXbFJUVGcyYlZFOVBTSXNJblpoYkhWbElqb2lZa1pSUVdaV1QwTk9SeTlsWVRaNE1XSmpSRm95ZHowOUlpd2liV0ZqSWpvaU5tUTVaalkzTURreE9EaG1ZelUzWVRSak1UVTVZemsxTmpjNE16QTFPV0ZtTWpsbVkyWTVORFJqWW1NeE4ySTNZMlExTURRNFptVmxZekZsWkROalpDSXNJblJoWnlJNklpSjk="
              >
                {/* ✅ NEXT/IMAGE WITH SIZES */}
                <Image 
                  src="/assets/support-logo-1.svg"
                  alt="GCB Certificate"
                  width={80}
                  height={40}
                  sizes="(max-width: 768px) 60px, 80px"
                  className="h-6 md:h-8 w-auto"
                  priority={false}
                />
              </a>
              <div>
                {/* ✅ NEXT/IMAGE WITH SIZES */}
                <Image 
                  src="/assets/support-logo-2.webp"
                  alt="Support Logo 2"
                  width={99}
                  height={50}
                  sizes="(max-width: 768px) 70px, 99px"
                  className="h-6 md:h-8 w-auto"
                  priority={false}
                />
              </div>
              <div>
                {/* ✅ NEXT/IMAGE WITH SIZES */}
                <Image 
                  src="/assets/support-logo-3.webp"
                  alt="Support Logo 3"
                  width={122}
                  height={49}
                  sizes="(max-width: 768px) 80px, 122px"
                  className="h-6 md:h-8 w-auto"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Terms */}
        <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 md:gap-6">
          <div className="text-xs md:text-sm text-gray-400">
            ©{currentYear} Kelvurnux
          </div>
          <nav>
            <ul className="flex gap-4 md:gap-6">
              <li>
                <a href="/privacy-policy/" className="text-xs md:text-sm text-gray-400 hover:text-gray-300 transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}