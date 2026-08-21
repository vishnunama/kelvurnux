'use client';

import React from 'react';
import Link from "next/link";

const blogs = [
  {
    title: "How to Start Crypto Casino Platform Step by Step (2026 Guide + Cost)",
    description:
      "Complete beginner guide to start your crypto casino platform with games, payments, admin panel and launch strategy.",
    href: "/how-to-start-crypto-casino-platform-step-by-step",
    tag: "Crypto Casino",
    readTime: "15 min read",
    image: "/assets/features/tab-casino-platform-3.webp",
  },
];

// ✅ GLOBAL FUNCTION - Reset animations anywhere
const resetAllAnimations = () => {
  const allAnimElements = document.querySelectorAll('[data-anim]');
  
  // Remove visible class
  allAnimElements.forEach((el) => {
    el.classList.remove('visible');
  });

  // Re-trigger with delay
  setTimeout(() => {
    allAnimElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // If element is in viewport, add visible class
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      }
    });

    // Setup observer for rest
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05 }
    );

    allAnimElements.forEach((el) => {
      observer.observe(el);
    });
  }, 50);
};

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = React.useState('');

  // ✅ ON MOUNT - Initialize animations
  React.useEffect(() => {
    // Immediate call
    resetAllAnimations();
    
    // Also call after short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      resetAllAnimations();
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  // ✅ BACK BUTTON DETECTION - popstate
  React.useEffect(() => {
    const handlePopState = () => {
      setTimeout(() => {
        resetAllAnimations();
      }, 100);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // ✅ TAB REFOCUS - visibilitychange
  React.useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setTimeout(() => {
          resetAllAnimations();
        }, 100);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // ✅ SCROLL LISTENER - Dynamic animations
  React.useEffect(() => {
    const handleScroll = () => {
      const allAnimElements = document.querySelectorAll('[data-anim]');
      allAnimElements.forEach((el) => {
        if (!el.classList.contains('visible')) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('visible');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes from-bottom {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes from-top {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ✅ FIX: Elements visible by default, then animate */
        [data-anim] { 
          opacity: 1 !important;
        }
        
        [data-anim="from-bottom"] { 
          animation: from-bottom 0.6s ease-out forwards !important;
          opacity: 1 !important;
        }
        
        [data-anim="from-top"] { 
          animation: from-top 0.6s ease-out forwards !important;
          opacity: 1 !important;
        }

        [data-anim-delay="1"] { animation-delay: 0.1s !important; }
        [data-anim-delay="2"] { animation-delay: 0.2s !important; }
        [data-anim-delay="3"] { animation-delay: 0.3s !important; }

        .gradient-text {
          background: linear-gradient(147deg, rgba(255, 255, 255, 0.33) 10%, rgba(61, 75, 71, 0.33) 90%), #fff;
          background-blend-mode: darken, normal;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .border-line {
          position: relative;
          width: 80%;
          height: 2px;
          margin: 0 auto 3rem;
          background: linear-gradient(to right, rgba(255, 255, 255, 0) 0, rgba(88, 153, 152, 0.9) 49.8%, rgba(88, 153, 152, 0.9) 50.2%, rgba(255, 255, 255, 0) 100%);
        }

        .hero-decor {
          position: absolute;
          pointer-events: none;
          opacity: 0.6;
        }

        .hero-decor-left {
          width: 17em;
          left: 13%;
          transform: translateX(-50%);
          bottom: -7em;
        }

        .hero-decor-right {
          width: 12em;
          right: 17%;
          transform: translateX(50%);
          bottom: -4em;
        }

        .search-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 10rem;
          padding: 0.8rem 3rem 0.8rem 3.5rem;
          color: #fff;
          font-size: 0.95rem;
          outline: 0;
          transition: border-color 0.3s;
        }

        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .search-input:focus {
          border-color: rgba(88, 153, 152, 0.9);
        }

        .search-field {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 1.2rem;
          color: rgba(255, 255, 255, 0.4);
          pointer-events: none;
          width: 1.6rem;
          height: 1.6rem;
          flex-shrink: 0;
        }

        .search-clear {
          position: absolute;
          right: 1.2rem;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1.6rem;
          height: 1.6rem;
          transition: all 0.3s ease-in-out;
          padding: 0;
          color: #fff;
        }

        .search-clear:hover {
          opacity: 0.7;
        }

        .search-clear svg {
          stroke: #fff;
          fill: #fff;
          width: 100%;
          height: 100%;
        }

        /* ===== RESPONSIVE STYLES ===== */
        
        /* Tablet & below - 840px */
        @media (max-width: 840px) {
          .hero-decor {
            display: none;
          }

          .border-line {
            margin: 0 auto 2rem;
          }
        }

        /* Mobile - 600px */
        @media (max-width: 600px) {
          .search-input {
            font-size: 0.9rem;
            padding: 0.7rem 2.5rem 0.7rem 3rem;
          }

          .search-icon {
            left: 1rem;
            width: 1.4rem;
            height: 1.4rem;
          }

          .search-clear {
            right: 1rem;
            width: 1.4rem;
            height: 1.4rem;
          }

          .border-line {
            width: 90%;
            margin: 0 auto 2rem;
          }
        }

        /* POSTS SECTION STYLES */
        .posts-container {
          max-width: 100%;
          margin: 0 auto;
          padding: 0 4rem;
          position: relative;
          z-index: 2;
        }

        .section-title-gradient {
          background: linear-gradient(147deg, rgba(255, 255, 255, 0.33) 10%, rgba(61, 75, 71, 0.33) 90%), #fff;
          background-blend-mode: darken, normal;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem 2rem;
        }

        .post-item {
          display: flex;
          flex-direction: column;
        }

        .post-img-wrapper {
          position: relative;
          border-radius: 0.8rem;
          overflow: hidden;
          margin-bottom: 1rem;
          aspect-ratio: 505 / 253;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
        }

        .post-img-wrapper:hover {
          transform: scale(1.02);
        }

        .post-img-wrapper img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          top: 0;
          left: 0;
          transition: all 0.3s ease-in-out;
        }

        .post-item:hover .post-img-wrapper img {
          transform: scale(1.05);
        }

        .post-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-grow: 1;
        }

        .post-date {
          color: #759296;
          font-size: 0.95rem;
          font-weight: 400;
          line-height: 1.5;
          margin-bottom: 0.6rem;
          user-select: none;
        }

        .post-title {
          margin-bottom: 0.6rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          color: #fff;
          transition: all 0.3s ease-in-out;
          text-decoration: none;
          font-size: 1.3rem;
          font-weight: 500;
          line-height: 1.3;
          cursor: pointer;
        }

        .post-item:hover .post-title {
          color: #8EE8FF;
        }

        .post-tags {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          margin: -0.2rem -0.2rem 0.4rem;
          margin-bottom: 0.8rem;
        }

        .post-tag {
          border-radius: 0.8rem;
          background: rgba(117, 146, 150, 0.3);
          color: #759296;
          font-size: 0.9rem;
          font-weight: 400;
          line-height: 1.5;
          padding: 0 0.4rem;
          min-height: 2.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0.2rem;
          width: max-content;
        }

        .post-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 0.8rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .post-author {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .post-author-img {
          width: 2.4rem;
          height: 2.4rem;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
        }

        .post-author-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .post-author-name {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          font-weight: 400;
          line-height: 1.5;
        }

        .post-read-time {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          font-weight: 400;
          line-height: 1.5;
        }

        .post-read-icon {
          width: 1.8rem;
          height: 1.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* RESPONSIVE */
        @media (max-width: 1200px) {
          .posts-container {
            max-width: 100%;
            padding: 0 3rem;
          }
          .posts-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem 2rem;
          }
        }

        @media (max-width: 768px) {
          .posts-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .posts-container {
            max-width: 100%;
            padding: 0 1.6rem;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden"
        style={{
          padding: 'clamp(6rem, 12.5rem, 12.5rem) 0 4rem',
          background: 'radial-gradient(167.61% 100% at 50% 100%, rgba(0, 235, 170, 0.22) 0, rgba(11, 11, 15, 0) 37.5%), radial-gradient(129.09% 100% at 50% 100%, rgba(0, 235, 170, 0.10) 0, rgba(11, 11, 15, 0) 71.15%), radial-gradient(64.91% 100% at 50% 100%, rgba(0, 235, 170, 0.04) 0, rgba(11, 11, 15, 0) 88.24%), #0b0b0f',
        }}
      >

        {/* Decorative Cubes */}
        <div className="hero-decor hero-decor-left">
          <img 
            src="https://kanggiten.com/wp-content/themes/themename/assets/img/cube-1.png" 
            alt="Decorative cube left"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }}
          />
        </div>
        <div className="hero-decor hero-decor-right">
          <img 
            src="https://kanggiten.com/wp-content/themes/themename/assets/img/cube-2.png" 
            alt="Decorative cube right"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }}
          />
        </div>

        {/* Content Container */}
        <div 
          className="relative z-20"
          style={{
            maxWidth: '100%',
            margin: '0 auto',
            padding: '0 clamp(1.6rem, 5vw, 2rem)',
            width: '100%',
          }}
        >
          <div style={{ marginBottom: '4rem' }}>
        
            {/* Title */}
            <h1 
              data-anim="from-bottom"
              data-anim-delay="1"
              className="gradient-text"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: 1.3,
                letterSpacing: '-0.052rem',
                margin: '0 auto 2rem',
                textAlign: 'center',
              }}
            >
              Casino Software, White Label & iGaming Guides
            </h1>

            {/* Subtitle */}
            <p 
              data-anim="from-bottom"
              data-anim-delay="2"
              style={{
                color: '#a5a5a5',
                maxWidth: 'clamp(90%, 54%, 100%)',
                margin: '0 auto 4rem',
                fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 1.44,
                textAlign: 'center',
                position: 'relative',
                zIndex: 2,
              }}
            >
              Learn how to build, launch and scale casino platforms including white label, turnkey, sportsbook, crypto and API solutions.
            </p>
          </div>

          {/* Search Bar */}
          <div 
            style={{
              maxWidth: '45rem',
              margin: '0 auto',
            }}
          >
            <div className="search-field">
              <svg 
                className="search-icon"
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none"
              >
                <path 
                  d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2938 14.5697 18.0025 12.8204 18 11C18 7.133 14.867 4 11 4C7.133 4 4 7.133 4 11C4 14.867 7.133 18 11 18C12.8204 18.0025 14.5697 17.2938 15.875 16.025L16.025 15.875Z" 
                  fill="#8EE8FF"
                />
              </svg>
              <input
                type="text"
                className="search-input"
                placeholder="Search in News..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  className="search-clear"
                  aria-label="Clear search"
                  onClick={() => setSearchQuery('')}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24"
                  >
                    <mask id="mask0_9509_6733" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                      <rect width="24" height="24"></rect>
                    </mask>
                    <g mask="url(#mask0_9509_6733)">
                      <path d="M12.0008 13.4L7.10078 18.3C6.91745 18.4833 6.68411 18.575 6.40078 18.575C6.11745 18.575 5.88411 18.4833 5.70078 18.3C5.51745 18.1167 5.42578 17.8833 5.42578 17.6C5.42578 17.3167 5.51745 17.0833 5.70078 16.9L10.6008 12L5.70078 7.09999C5.51745 6.91665 5.42578 6.68332 5.42578 6.39999C5.42578 6.11665 5.51745 5.88332 5.70078 5.69999C5.88411 5.51665 6.11745 5.42499 6.40078 5.42499C6.68411 5.42499 6.91745 5.51665 7.10078 5.69999L12.0008 10.6L16.9008 5.69999C17.0841 5.51665 17.3174 5.42499 17.6008 5.42499C17.8841 5.42499 18.1174 5.51665 18.3008 5.69999C18.4841 5.88332 18.5758 6.11665 18.5758 6.39999C18.5758 6.68332 18.4841 6.91665 18.3008 7.09999L13.4008 12L18.3008 16.9C18.4841 17.0833 18.5758 17.3167 18.5758 17.6C18.5758 17.8833 18.4841 18.1167 18.3008 18.3C18.1174 18.4833 17.8841 18.575 17.6008 18.575C17.3174 18.575 17.0841 18.4833 16.9008 18.3L12.0008 13.4Z"></path>
                    </g>
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Border Line */}
        <div className="border-line" style={{ margin: '4rem auto 0' }} />
      </section>

      {/* POSTS LIST SECTION */}
      <section
        className="post-list-section relative"
        style={{
          padding: '6rem 0',
          background: '#0b0b0f',
        }}
      >
        {/* 🔵 Gradient Background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(91.68% 48.4% at 29.55% 73.5%, rgba(43,255,191,0.13) 0%, rgba(13,11,16,0) 46.4%)',
            pointerEvents: 'none',
          }}
        />

        {/* 🟣 Grid Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage: 'url(/assets/grid-bg.svg)',
            backgroundRepeat: 'repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: '8rem 6.3rem',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
            maskImage:
              'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          }}
        />

        <div className="posts-container">
          {/* Section Title */}
          <h2
            className="section-title-gradient"
            style={{
              fontSize: 'clamp(1.8rem, 2.5rem, 2.8rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '3.2rem',
              textAlign: 'left',
              color: '#fff',
              position: 'relative',
              zIndex: 2,
            }}
          >
            All blogs
          </h2>

          {/* Posts Grid */}
          <div className="posts-grid">
            {blogs.map((blog, index) => (
              <article 
                key={blog.href} 
                className="post-item" 
                data-anim="from-bottom" 
                data-anim-delay={String(index + 1)}
              >
                {/* Image */}
                <Link href={blog.href} className="post-img-wrapper">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                  />
                </Link>

                {/* Content */}
                <div className="post-content">
                  {/* Date */}
                  <div className="post-date">04.05.2026</div>

                  {/* Title */}
                  <Link href={blog.href} className="post-title">
                    {blog.title}
                  </Link>

                  {/* Tags */}
                  <div className="post-tags">
                    <span className="post-tag">{blog.tag}</span>
                    <span className="post-tag">Events</span>
                  </div>

                  {/* Meta */}
                  <div className="post-meta">
                    {/* Author */}
                    <div className="post-author">
                      <div className="post-author-img">
                        <img
                          src="https://kanggiten.com/wp-content/uploads/2026/05/KarinaDubina.webp"
                          alt="Karyna Dubyna"
                        />
                      </div>
                      <span className="post-author-name">Karyna Dubyna</span>
                    </div>

                    {/* Read Time */}
                    <div className="post-read-time">
                      <svg
                        className="post-read-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}