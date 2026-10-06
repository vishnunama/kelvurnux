'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Package, Zap, Layers } from 'lucide-react';
import KvaornuxLogo from './KelvurnuxLogo';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'solutions' | 'products' | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<{ comprehensive: boolean; special: boolean; products: boolean }>({ comprehensive: false, special: false, products: false });

  useEffect(() => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  }, [pathname]);
  const [isScrolled, setIsScrolled] = useState(false);
  const isScrolledRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollRef = useRef(0);

  const handleMouseEnter = (menu: 'solutions' | 'products') => {
    clearTimeout(timerRef.current ?? undefined);
    timerRef.current = setTimeout(() => {
      setActiveDropdown(menu);
    }, 180);
  };

  const handleMouseLeave = () => {
    clearTimeout(timerRef.current ?? undefined);
    timerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 220);
  };

  const scrollToContactForm = () => {
    const contactSection = document.getElementById('contact-form-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      const scrolled = scrollY > 20;
      if (scrolled !== isScrolledRef.current) {
        isScrolledRef.current = scrolled;
        setIsScrolled(scrolled);
      }

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const diff = scrollY - lastScrollRef.current;
          const header = headerRef.current;

          if (header && Math.abs(diff) > 10) {
            if (diff > 0 && scrollY > 100) {
              header.style.transform = 'translateY(-100%)';
            } else if (diff < 0) {
              header.style.transform = 'translateY(0)';
            }
            lastScrollRef.current = scrollY;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timerRef.current ?? undefined);
    };
  }, []);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 4.8rem;
          z-index: 100;
          display: flex;
          align-items: center;
          will-change: transform;
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        @media (min-width: 769px) {
          header {
            height: 5rem;
          }
        }

        /* Progressive blur */
        .blur-layer { 
          position: absolute; 
          top: 0; 
          left: 0; 
          right: 0; 
          bottom: 0; 
        }
        
        .blur-1 { 
          backdrop-filter: blur(1px); 
          -webkit-backdrop-filter: blur(1px);
          mask-image: linear-gradient(to bottom, #000 10%, rgba(0,0,0,0) 30%);
          -webkit-mask-image: linear-gradient(to bottom, #000 10%, rgba(0,0,0,0) 30%); 
        }
        
        .blur-2 { 
          backdrop-filter: blur(3px); 
          -webkit-backdrop-filter: blur(3px);
          mask-image: linear-gradient(to bottom, #000 25%, rgba(0,0,0,0) 50%);
          -webkit-mask-image: linear-gradient(to bottom, #000 25%, rgba(0,0,0,0) 50%); 
        }
        
        .blur-3 { 
          backdrop-filter: blur(6px); 
          -webkit-backdrop-filter: blur(6px);
          mask-image: linear-gradient(to bottom, #000 45%, rgba(0,0,0,0) 70%);
          -webkit-mask-image: linear-gradient(to bottom, #000 45%, rgba(0,0,0,0) 70%); 
        }
        
        .blur-4 { 
          backdrop-filter: blur(12px); 
          -webkit-backdrop-filter: blur(12px);
          mask-image: linear-gradient(to bottom, #000 65%, rgba(0,0,0,0) 90%);
          -webkit-mask-image: linear-gradient(to bottom, #000 65%, rgba(0,0,0,0) 90%); 
        }
        
        .blur-5 { 
          backdrop-filter: blur(20px); 
          -webkit-backdrop-filter: blur(20px);
          mask-image: linear-gradient(to bottom, #000 80%, rgba(0,0,0,0) 100%);
          -webkit-mask-image: linear-gradient(to bottom, #000 80%, rgba(0,0,0,0) 100%); 
        }

        /* Mobile transparent header */
        @media (max-width: 768px) {
          .blur-1, .blur-2, .blur-3, .blur-4 {
            display: none;
          }

          .blur-5 {
            backdrop-filter: blur(calc(25px * var(--scroll-blur, 0))) !important;
            -webkit-backdrop-filter: blur(calc(25px * var(--scroll-blur, 0))) !important;
          }

          .header-gradient {
            background: rgba(4, 8, 10, calc(0.3 * var(--scroll-blur, 0))) !important;
            border-color: rgba(255, 255, 255, calc(0.06 * var(--scroll-blur, 0))) !important;
          }
        }

        /* Desktop blur */
        @media (min-width: 769px) {
          .blur-5 {
            backdrop-filter: blur(calc(35px * var(--scroll-blur, 0))) !important;
            -webkit-backdrop-filter: blur(calc(35px * var(--scroll-blur, 0))) !important;
          }

          .header-gradient {
            background: rgba(4, 8, 10, calc(0.4 * var(--scroll-blur, 0))) !important;
          }
        }

        /* Dropdown - Hidden on mobile */
        .zg-dropdown {
          position: absolute; 
          top: calc(100% + 0.4rem); 
          left: 50%;
          transform: translateX(-50%) translateY(-10px) scale(0.97);
          z-index: 101; 
          opacity: 0; 
          visibility: hidden; 
          pointer-events: none;
          transition: opacity 0.5s cubic-bezier(0.25, 1, 0.5, 1),
                      transform 0.5s cubic-bezier(0.25, 1, 0.5, 1),
                      visibility 0.5s linear;
        }

        /* Hover bridge to bridge cursor gap between nav link and dropdown menu */
        .zg-dropdown::before {
          content: "";
          position: absolute;
          top: -0.6rem;
          left: 0;
          right: 0;
          height: 0.8rem;
          pointer-events: auto;
        }

        /* Only hide on mobile */
        @media (max-width: 768px) {
          .zg-dropdown {
            display: none;
          }
        }
                
        .zg-dropdown.open {
          opacity: 1; 
          visibility: visible; 
          pointer-events: auto;
          transform: translateX(-50%) translateY(0) scale(1);
          transition: opacity 0.5s cubic-bezier(0.25, 1, 0.5, 1),
                      transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }
        
        .zg-dd-link {
          display: flex;
          align-items: center;
          padding: 0.85rem 1.4rem;
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          font-size: clamp(0.95rem, 1.05rem, 1.15rem);
          font-weight: 500;
          border-radius: 0.8rem;
          line-height: 1.4;
          letter-spacing: 0.3px;
          position: relative;
          pointer-events: auto;
          width: 100%;
          white-space: nowrap;
          transition: all 0.45s ease-in-out;
          background: transparent;
        }
        
        .zg-dd-link::before {
          content: "";
          display: inline-block;
          width: 0px;
          height: 1.1rem;
          opacity: 0;
          background-color: #00ebaa;
          mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='4' y1='12' x2='19' y2='12'%3E%3C/line%3E%3Cpolyline points='12 5 19 12 12 19'%3E%3C/polyline%3E%3C/svg%3E") center/contain no-repeat;
          -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='4' y1='12' x2='19' y2='12'%3E%3C/line%3E%3Cpolyline points='12 5 19 12 12 19'%3E%3C/polyline%3E%3C/svg%3E") center/contain no-repeat;
          transition: all 0.45s ease-in-out;
          vertical-align: middle;
          transform: translateX(-4px);
          margin-right: 0;
          flex-shrink: 0;
        }
        
        .zg-dd-link:hover {
          background: rgba(0, 235, 170, 0.12);
          color: #ffffff;
          transform: translateX(2px);
        }
        
        .zg-dd-link:hover::before {
          width: 1.15rem;
          opacity: 1;
          margin-right: 0.45rem;
          transform: translateX(0);
        }
.zg-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.4rem;
  transition: transform 0.65s cubic-bezier(0.25, 1, 0.5, 1);
}

.zg-arrow.open {
  transform: rotate(180deg);
}
        .zg-contact-btn {
          position: relative; 
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
          background: rgba(0, 235, 170, 0.08);
          cursor: pointer;
          border: 2px solid #00ebaa;
          border-radius: 9999px;
          padding: 0.6rem 1.8rem;
          color: #fff;
          font-weight: 600;
          font-size: 1.1rem;
          white-space: nowrap;
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }
        
        .zg-contact-btn::before {
          content: ""; 
          position: absolute; 
          inset: 0;
          background: rgba(0, 235, 170, 0.15); 
          opacity: 0; 
          transition: opacity 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        
        .zg-contact-btn:hover { 
          border-color: #00ebaa;
          background: rgba(0, 235, 170, 0.15);
          transform: translateY(-2px);
        }
        
        .zg-contact-btn:hover::before { 
          opacity: 1; 
        }
        
        .zg-contact-btn span { 
          position: relative; 
          z-index: 1; 
        }

        @media (max-width: 768px) {
  .zg-contact-btn {
    padding: 0.25rem 0.8rem !important;
    font-size: 0.8rem !important;
  }
}

        .zg-ham span {
          display: block; 
          width: 20px; 
          height: 1.5px;
          background: #fff; 
          border-radius: 2px; 
          transition: all 0.36s cubic-bezier(0.16,1,0.3,1);
        }
        
        .zg-ham.open span:nth-child(1) { 
          transform: translateY(7px) rotate(45deg); 
        }
        
        .zg-ham.open span:nth-child(2) { 
          opacity: 0; 
          transform: scaleX(0); 
        }
        
        .zg-ham.open span:nth-child(3) { 
          transform: translateY(-7px) rotate(-45deg); 
        }

        .zg-mobile-menu {
          position: fixed; 
          top: 0rem; 
          left: 0; 
          right: 0; 
          bottom: 0; 
          z-index: 90;
          background: radial-gradient(106.93% 100.62% at 50.09% 100%, rgba(0,235,170,.12) 0, rgba(8,14,16,.95) 100%);
          backdrop-filter: blur(24px); 
          -webkit-backdrop-filter: blur(24px);
          transform: translateX(-100%);
          transition: transform 0.38s cubic-bezier(0.16,1,0.3,1);
          display: flex; 
          flex-direction: column;
          overflow: hidden;
        }
        
        .zg-mobile-menu.open { 
          transform: translateX(0); 
        }

        .zg-mobile-nav-scroll {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain;
        }

        .zg-acc-wrap {
          width: 100%;
          border-radius: 1.6rem;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.05);
          transition: background 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        
        .zg-acc-wrap.active {
          background: rgba(255, 255, 255, 0.07);
        }

        .zg-acc-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 1.1rem 1.6rem;
          background: transparent;
          color: #fff;
          font-size: 1.05rem;
          font-weight: 700;
          cursor: pointer;
          border: none;
          text-align: left;
          letter-spacing: 0.2px;
          gap: 0.8rem;
          line-height: 1;
          transition: background 0.25s ease;
        }
        
        .zg-acc-btn:active { 
          transform: scale(0.99); 
        }

        .zg-acc-btn-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
          min-width: 0;
        }

        .zg-acc-btn-left > span {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #fff;
          font-size: 1.05rem;
          font-weight: 700;
        }

        .zg-chevron {
          width: 2rem; 
          height: 2rem;
          display: flex; 
          align-items: center; 
          justify-content: center;
          flex-shrink: 0;
          color: #00ebaa;
          transition: transform 0.36s cubic-bezier(0.34,1.56,0.64,1);
        }
        
        .zg-chevron svg { 
          width: 1.1rem; 
          height: 1.1rem; 
          stroke: currentColor; 
        }
        
        .zg-chevron.open { 
          transform: rotate(180deg); 
        }

        .zg-acc-body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.42s cubic-bezier(0.16,1,0.3,1);
        }
        
        .zg-acc-body.open {
          grid-template-rows: 1fr;
        }
        
        .zg-acc-body > .zg-acc-inner {
          overflow: hidden;
        }

        .zg-mob-sub {
          display: block;
          padding: 0.75rem 1.2rem 0.75rem 1.6rem;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: 0.2px;
          line-height: 1.4;
          position: relative;
          transition: color 0.2s ease;
        }
        
        .zg-mob-sub:hover { 
          color: #fff; 
        }
        
        .zg-mob-sub:active { 
          opacity: 0.7; 
        }

        .zg-mob-link {
          display: flex; 
          align-items: center; 
          justify-content: space-between;
          width: 100%; 
          padding: 1.1rem 1.6rem;
          border-radius: 1.6rem;
          background: rgba(255, 255, 255, 0.05);
          color: #fff; 
          text-decoration: none;
          font-size: 1.05rem; 
          font-weight: 700;
          line-height: 1;
          transition: background 0.25s ease;
          letter-spacing: 0.2px;
        }
        
        .zg-mob-link:hover { 
          background: rgba(255, 255, 255, 0.08); 
        }
        
        .zg-mob-link:active { 
          opacity: 0.8; 
        }

        .zg-mob-link-arrow {
          font-size: 1.2rem;
          color: #00ebaa;
          transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1), color 0.28s ease;
        }
        
        .zg-mob-link:hover .zg-mob-link-arrow { 
          transform: translateX(5px); 
          color: #00ebaa; 
        }

        .zg-mob-contact {
          display: block; 
          text-align: center;
          padding: 1.1rem 2rem;
          border-radius: 10rem;
          background: rgba(0, 235, 170, 0.08);
          border: 2px solid #00ebaa;
          color: #fff; 
          text-decoration: none;
          font-size: 1.05rem; 
          font-weight: 700;
          position: relative; 
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
          letter-spacing: 0.3px;
          cursor: pointer;
        }
        
        .zg-mob-contact::before {
          content: ""; 
          position: absolute; 
          inset: 0;
          background: rgba(0, 235, 170, 0.15); 
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .zg-mob-contact:hover { 
          background: rgba(0, 235, 170, 0.15);
          border-color: #00ebaa;
          transform: translateY(-2px);
        }
        
        .zg-mob-contact:hover::before { 
          opacity: 1; 
        }
        
        .zg-mob-contact:active { 
          transform: scale(0.98); 
        }
      `}</style>

      {/* HEADER */}
      <header ref={headerRef}>
        {/* High performance smooth transparent-to-glass header background */}
        <div
          className={`absolute inset-0 pointer-events-none transition-all duration-300 ${isScrolled
            ? 'bg-[rgba(4,8,10,0.84)] border-b border-white/[0.06] backdrop-blur-md'
            : 'bg-transparent border-b border-transparent'
            }`}
        />

        {/* Header Content */}
        <div className="w-full max-w-[124rem] mx-auto lg:px-[4.5rem] px-[1rem] flex items-center justify-between relative z-[2] h-full">
          {/* Logo */}
          <Link href="/" className="block flex-shrink-0 bg-transparent">
            <img
              src="/assets/logo.webp"
              alt="Kvaornux"
              className="h-10 md:h-12 w-auto object-contain block bg-transparent"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center list-none m-0 p-0">
              <li className="nav-item-dropdown group relative mx-[1.8rem]" onMouseEnter={() => handleMouseEnter('solutions')} onMouseLeave={handleMouseLeave}>
                <span className="flex items-center text-white font-medium cursor-pointer py-5 text-[1.15rem] tracking-[0.3px] transition-all duration-200 select-none whitespace-nowrap ">
                  Solutions
                  <span className={`zg-arrow ${activeDropdown === 'solutions' ? 'open' : ''}`}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                    </svg>
                  </span>
                </span>

                <div
                  className={`zg-dropdown ${activeDropdown === 'solutions' ? 'open' : ''}`}
                  onMouseEnter={() => handleMouseEnter('solutions')}
                  onMouseLeave={handleMouseLeave}
                  style={{ width: 'min(63rem, calc(100vw - 6.4rem))' }}
                >
                  {/* SVG Image arrow */}
                  <img
                    src="/assets/polygon.svg"
                    alt=""
                    className="absolute -top-[12px] left-[46%] transform -translate-x-1/2 w-[3rem] h-4 z-10"
                  />

                  <div
                    className="rounded-[1.4rem] p-[1.3rem] grid grid-cols-[1fr_1.45fr] gap-[1.2rem]"
                    style={{
                      background: 'radial-gradient(106.93% 100.62% at 50.09% 100%, rgba(21,41,46,0.95) 0%, rgba(8,14,16,0.97) 100%)',
                      boxShadow: '0 24px 64px rgba(0,0,0,0.75)',
                      borderLeft: '1px solid rgba(0,235,170,0.15)',
                      borderRight: '1px solid rgba(0,235,170,0.15)',
                      borderBottom: '2px solid rgba(0,235,170,0.32)',
                      borderTop: 'none',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                    }}
                  >
                    <div
                      className="rounded-[1rem] p-[1.3rem] transition-all duration-500 hover:bg-[#00ebaa]/[0.08]"
                      style={{
                        background: 'rgba(255, 255, 255, 0.035)',
                        borderLeft: '1px solid rgba(255, 255, 255, 0.07)',
                        borderRight: '1px solid rgba(255, 255, 255, 0.07)',
                        borderBottom: '1px solid rgba(0, 235, 170, 0.22)',
                        borderTop: 'none',
                      }}
                    >
                      <div className="flex items-center gap-[0.6rem] text-white font-semibold text-[1.05rem] mb-[1.2rem] tracking-[0.3px]">
                        <Package size={20} className="text-[#00ebaa] flex-shrink-0" strokeWidth={2} />
                        <span>COMPREHENSIVE SOLUTIONS</span>
                      </div>
                      <ul className="list-none m-0 p-0 space-y-[0.5rem]">
                        <li><Link href="/turnkey-casino-software-solutions" className="zg-dd-link" onClick={() => setActiveDropdown(null)}>Turnkey Casino</Link></li>
                        <li><Link href="/custom-igaming-solution" className="zg-dd-link" onClick={() => setActiveDropdown(null)}>Bespoke iGaming</Link></li>
                      </ul>
                    </div>

                    <div
                      className="rounded-[1rem] p-[1.3rem] transition-all duration-500 hover:bg-[#00ebaa]/[0.08]"
                      style={{
                        background: 'rgba(255, 255, 255, 0.035)',
                        borderLeft: '1px solid rgba(255, 255, 255, 0.07)',
                        borderRight: '1px solid rgba(255, 255, 255, 0.07)',
                        borderBottom: '1px solid rgba(0, 235, 170, 0.22)',
                        borderTop: 'none',
                      }}
                    >
                      <div className="flex items-center gap-[0.6rem] text-white font-semibold text-[1.05rem] mb-[1.2rem] tracking-[0.3px]">
                        <Zap size={20} className="text-[#00ebaa] flex-shrink-0" strokeWidth={2} />
                        <span>SPECIAL SOLUTIONS</span>
                      </div>
                      <ul className="list-none m-0 p-0 grid grid-cols-2 gap-x-[0.9rem] gap-y-[0.5rem]">
                        <li><Link href="/turnkey-sportsbook-solutions" className="zg-dd-link" onClick={() => setActiveDropdown(null)}>Turnkey Sportsbook</Link></li>
                        <li><Link href="/white-label-casino-solutions" className="zg-dd-link" onClick={() => setActiveDropdown(null)}>White Label</Link></li>
                        <li><Link href="/crypto-igaming-solutions" className="zg-dd-link" onClick={() => setActiveDropdown(null)}>Crypto iGaming</Link></li>
                        <li><Link href="/sweepstakes-casino-software/" className="zg-dd-link" onClick={() => setActiveDropdown(null)}>Sweepstakes Casino</Link></li>
                        <li><Link href="/turnkey-sweepstakes-casino-software/" className="zg-dd-link" onClick={() => setActiveDropdown(null)}>Turnkey Sweepstakes</Link></li>
                        <li><Link href="/custom-sweepstakes-casino-development/" className="zg-dd-link" onClick={() => setActiveDropdown(null)}>Custom Sweepstakes</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item-dropdown group relative mx-[1.8rem]" onMouseEnter={() => handleMouseEnter('products')} onMouseLeave={handleMouseLeave}>
                <span className="flex items-center text-white font-medium cursor-pointer py-5 text-[1.15rem] tracking-[0.3px] transition-all duration-200 select-none whitespace-nowrap ">
                  Products
                  <span className={`zg-arrow ${activeDropdown === 'products' ? 'open' : ''}`}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                    </svg>
                  </span>
                </span>

                <div
                  className={`zg-dropdown ${activeDropdown === 'products' ? 'open' : ''}`}
                  onMouseEnter={() => handleMouseEnter('products')}
                  onMouseLeave={handleMouseLeave}
                  style={{ width: 'min(17.5rem, calc(100vw - 4rem))' }}
                >
                  {/* SVG Image arrow */}
                  <img
                    src="/assets/polygon.svg"
                    alt=""
                    className="absolute -top-[12px] left-[50%] transform -translate-x-1/2 w-[3rem] h-4 z-10"
                  />

                  <div
                    className="rounded-[1.4rem] p-[0.9rem]"
                    style={{
                      background: 'radial-gradient(106.93% 100.62% at 50.09% 100%, rgba(21,41,46,0.95) 0%, rgba(8,14,16,0.97) 100%)',
                      boxShadow: '0 24px 64px rgba(0,0,0,0.75)',
                      borderLeft: '1px solid rgba(0,235,170,0.15)',
                      borderRight: '1px solid rgba(0,235,170,0.15)',
                      borderBottom: '2px solid rgba(0,235,170,0.32)',
                      borderTop: 'none',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                    }}
                  >
                    <ul className="list-none m-0 p-0 space-y-[0.4rem]">
                      <li>
                        <Link href="/casino-aggregator-api-solution" className="zg-dd-link" onClick={() => setActiveDropdown(null)}>
                          Game Aggregation
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="mx-[1.8rem]">
                <Link href="/igaming-case-studies/" className="block text-white font-medium text-[1.15rem] py-5 transition-all duration-200 hover:text-[#00ebaa] whitespace-nowrap tracking-[0.3px] hover:scale-105 active:scale-95">
                  Portfolio
                </Link>
              </li>

              <li className="mx-[1.8rem]">
                <Link href="/about-us" className="block text-white font-medium text-[1.15rem] py-5 transition-all duration-200 hover:text-[#00ebaa] whitespace-nowrap tracking-[0.3px] hover:scale-105 active:scale-95">
                  About us
                </Link>
              </li>
              <li className="mx-[1.8rem]">
                <Link href="/blog" className="block text-white font-medium text-[1.15rem] py-5 transition-all duration-200 hover:text-[#00ebaa]">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Button - Desktop */}
          {/* <button
            onClick={scrollToContactForm}
            className="ml-auto"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              outline: '0',
              width: 'fit-content',
              borderRadius: '1.6rem',
              padding: '0.4rem 2rem',
              minHeight: '2.8rem',
              backgroundColor: '#00ebaa',
              cursor: 'pointer',
              color: '#000',
              fontWeight: '700',
              fontSize: '0.95rem',
            }}
          >
            <span className="relative z-10 text-black font-bold">Contact us</span>
          </button> */}
          {/* Hamburger Menu */}
          <button
            className={`zg-ham md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] bg-transparent border-none cursor-pointer p-0 z-[200] relative ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`zg-mobile-menu md:hidden ${isMenuOpen ? 'open' : ''}`}>
        <div className="flex items-center justify-between px-5 h-[4.8rem] flex-shrink-0 border-b border-white/[0.08]">

        </div>

        <div className="zg-mobile-nav-scroll">
          <div className="flex flex-col gap-[0.7rem] px-[1.2rem] pt-[1.4rem] pb-[4rem]">
            <div className={`zg-acc-wrap ${mobileAccordion.comprehensive ? 'active' : ''}`}>
              <button className="zg-acc-btn" onClick={() => setMobileAccordion(prev => ({ ...prev, comprehensive: !prev.comprehensive }))}>
                <span className="zg-acc-btn-left">
                  <Package size={24} className="text-[#00ebaa] flex-shrink-0" strokeWidth={2} />
                  <span>Comprehensive Solutions</span>
                </span>
                <span className={`zg-chevron ${mobileAccordion.comprehensive ? 'open' : ''}`}>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>

              <div className={`zg-acc-body ${mobileAccordion.comprehensive ? 'open' : ''}`}>
                <div className="zg-acc-inner py-1 flex flex-col">
                  <Link href="/turnkey-casino-software-solutions" className="zg-mob-sub" onClick={() => setIsMenuOpen(false)}>Turnkey Casino</Link>
                  <Link href="/custom-igaming-solution" className="zg-mob-sub" onClick={() => setIsMenuOpen(false)}>Bespoke iGaming</Link>
                </div>
              </div>
            </div>

            <div className={`zg-acc-wrap ${mobileAccordion.special ? 'active' : ''}`}>
              <button className="zg-acc-btn" onClick={() => setMobileAccordion(prev => ({ ...prev, special: !prev.special }))}>
                <span className="zg-acc-btn-left">
                  <Zap size={24} className="text-[#00ebaa] flex-shrink-0" strokeWidth={2} />
                  <span>Special solutions</span>
                </span>
                <span className={`zg-chevron ${mobileAccordion.special ? 'open' : ''}`}>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>

              <div className={`zg-acc-body ${mobileAccordion.special ? 'open' : ''}`}>
                <div className="zg-acc-inner py-1 flex flex-col">
                  <Link href="/turnkey-sportsbook-solutions" className="zg-mob-sub" onClick={() => setIsMenuOpen(false)}>Turnkey Sportsbook</Link>
                  <Link href="/white-label-casino-solutions" className="zg-mob-sub" onClick={() => setIsMenuOpen(false)}>White Label</Link>
                  <Link href="/crypto-igaming-solutions" className="zg-mob-sub" onClick={() => setIsMenuOpen(false)}>Crypto iGaming</Link>
                  <Link href="/sweepstakes-casino-software/" className="zg-mob-sub" onClick={() => setIsMenuOpen(false)}>Sweepstakes Casino</Link>
                  <Link href="/turnkey-sweepstakes-casino-software/" className="zg-mob-sub" onClick={() => setIsMenuOpen(false)}>Turnkey Sweepstakes</Link>
                  <Link href="/custom-sweepstakes-casino-development/" className="zg-mob-sub" onClick={() => setIsMenuOpen(false)}>Custom Sweepstakes</Link>
                </div>
              </div>
            </div>

            <div className={`zg-acc-wrap ${mobileAccordion.products ? 'active' : ''}`}>
              <button className="zg-acc-btn" onClick={() => setMobileAccordion(prev => ({ ...prev, products: !prev.products }))}>
                <span className="zg-acc-btn-left">
                  <Layers size={24} className="text-[#00ebaa] flex-shrink-0" strokeWidth={2} />
                  <span>Products</span>
                </span>
                <span className={`zg-chevron ${mobileAccordion.products ? 'open' : ''}`}>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>

              <div className={`zg-acc-body ${mobileAccordion.products ? 'open' : ''}`}>
                <div className="zg-acc-inner py-1 flex flex-col">
                  <Link href="/casino-aggregator-api-solution" className="zg-mob-sub" onClick={() => setIsMenuOpen(false)}>
                    Game Aggregation
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/igaming-case-studies/" className="zg-mob-link" onClick={() => setIsMenuOpen(false)}>
              Portfolio
              <span className="zg-mob-link-arrow">→</span>
            </Link>

            <Link href="/about-us" className="zg-mob-link" onClick={() => setIsMenuOpen(false)}>
              About us
              <span className="zg-mob-link-arrow">→</span>
            </Link>
            <Link href="/blog" className="zg-mob-link" onClick={() => setIsMenuOpen(false)}>
              Blog
              <span className="zg-mob-link-arrow">→</span>
            </Link>

            <button
              onClick={() => {
                setIsMenuOpen(false);
                scrollToContactForm();
              }}
              className="zg-mob-contact mt-2"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}