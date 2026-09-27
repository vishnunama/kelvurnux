'use client';

import React from 'react';
import Link from "next/link";
import PartnershipBanner from '@/src/components/partnershipbanner/PartnershipBanner';

const blogs = [
  {
    title: "What Is a Casino Game Aggregator API?",
    description:
      "Learn how casino game aggregation connects an iGaming platform with multiple game providers through a single technical integration.",
    href: "/blog/what-is-casino-game-aggregator-api",
    tag: "Game Aggregation",
    readTime: "12 min read",
    date: "25.09.2026",
    image: "/assets/features/casino-game-providers-api-aggregator.webp",
  },
  {
    title: "Game Aggregator vs Direct Game Provider Integration",
    description:
      "Compare game aggregation and direct provider integrations across architecture, maintenance, commercial control and platform operations.",
    href: "/blog/game-aggregator-vs-direct-provider-integration",
    tag: "Game Aggregation",
    readTime: "14 min read",
    date: "25.09.2026",
    image: "/assets/features/online-casino-game-aggregation-10000-plus-slots.webp",
  },
  {
    title: "How Casino Game API Integration Works",
    description:
      "Understand the technical flow behind casino game APIs, including authentication, game launch, wallet communication, bets, wins, refunds and testing.",
    href: "/blog/how-casino-game-api-integration-works",
    tag: "API Integration",
    readTime: "15 min read",
    date: "25.09.2026",
    image: "/assets/features/turnkey-igaming-platform-infrastructure-services.webp",
  },
  {
    title: "How to Start Crypto Casino Platform Step by Step (2026 Guide + Cost)",
    description:
      "Complete beginner guide to start your crypto casino platform with games, payments, admin panel and launch strategy.",
    href: "/blog/how-to-start-crypto-casino-platform-step-by-step",
    tag: "Crypto Casino",
    readTime: "15 min read",
    date: "04.05.2026",
    image: "/assets/features/comprehensive-casino-platform-features-roulette-dice.webp",
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
    <div className="min-h-screen bg-[#0b0b0f] text-white">
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
          max-width: 1050px;
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

        .posts-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .post-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 2.5rem;
          padding: 2.2rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          transition: all 0.3s ease-in-out;
          position: relative;
        }

        .post-item:last-child {
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .post-img-wrapper {
          position: relative;
          width: 340px;
          height: 195px;
          border-radius: 0.8rem;
          overflow: hidden;
          flex-shrink: 0;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
        }

        .post-img-wrapper:hover {
          transform: scale(1.02);
        }

        .post-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.4s ease-in-out;
        }

        .post-item:hover .post-img-wrapper img {
          transform: scale(1.06);
        }

        .post-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
          min-height: 180px;
        }

        .post-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1.5rem;
        }

        .post-title-link {
          text-decoration: none;
          flex: 1;
        }

        .post-title {
          color: #fff;
          font-size: 1.4rem;
          font-weight: 600;
          line-height: 1.35;
          margin-bottom: 0.75rem;
          transition: color 0.3s ease-in-out;
        }

        .post-item:hover .post-title {
          color: #00ebaa;
        }

        .post-description {
          color: #a5a5a5;
          font-size: 0.98rem;
          line-height: 1.55;
          margin-bottom: 0.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .post-arrow-icon {
          width: 1.5rem;
          height: 1.5rem;
          color: rgba(255, 255, 255, 0.4);
          flex-shrink: 0;
          transition: all 0.3s ease;
          margin-top: 0.2rem;
        }

        .post-item:hover .post-arrow-icon {
          color: #00ebaa;
          transform: translate(3px, -3px);
        }

        .post-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding-top: 0.75rem;
        }

        .post-tags {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .post-tag {
          border-radius: 0.8rem;
          background: rgba(0, 235, 170, 0.12);
          border: 1px solid rgba(0, 235, 170, 0.25);
          color: #00ebaa;
          font-size: 0.85rem;
          font-weight: 500;
          padding: 0.25rem 0.75rem;
        }

        .post-read-time-badge {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.85rem;
        }

        .post-date-meta {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          color: #759296;
          font-size: 0.88rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .hero-decor {
          position: absolute;
          pointer-events: none;
          z-index: 1;
        }

        .hero-decor-left {
          left: 4%;
          bottom: 1rem;
          width: 14rem;
          max-width: 22vw;
        }

        .hero-decor-right {
          right: 4%;
          bottom: 1.5rem;
          width: 12rem;
          max-width: 18vw;
        }

        @media (max-width: 1024px) {
          .hero-decor {
            display: none;
          }
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .posts-container {
            padding: 0 2.5rem;
          }
          .post-item {
            gap: 1.8rem;
          }
          .post-img-wrapper {
            width: 270px;
            height: 165px;
          }
          .post-title {
            font-size: 1.25rem;
          }
        }

        @media (max-width: 680px) {
          .posts-container {
            padding: 0 1.2rem;
          }
          .post-item {
            flex-direction: column;
            align-items: stretch;
            gap: 1.2rem;
            padding: 1.8rem 0;
          }
          .post-img-wrapper {
            width: 100%;
            height: 210px;
          }
          .post-content {
            min-height: auto;
          }
          .post-bottom {
            flex-wrap: wrap;
            gap: 0.8rem;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden"
        style={{
          padding: 'clamp(5.5rem, 7.5rem, 7.5rem) 0 2rem',
          background: 'radial-gradient(120% 100% at 50% 40%, rgba(0, 235, 170, 0.20) 0%, rgba(0, 235, 170, 0.06) 60%, rgba(11, 11, 15, 0) 100%), #0b0b0f',
        }}
      >
        {/* Decor Images (Left & Right Cubes) */}
        <div className="hero-decor hero-decor-left">
          <img
            src="/assets/about-us-el-1.webp"
            alt=""
            width={188}
            height={195}
            className="w-full h-auto"
          />
        </div>
        <div className="hero-decor hero-decor-right">
          <img
            src="/assets/about-us-el-2.webp"
            alt=""
            width={165}
            height={156}
            className="w-full h-auto"
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
          <div style={{ marginBottom: '2rem' }}>
            {/* Title */}
            <h1 
              data-anim="from-bottom"
              data-anim-delay="1"
              className="gradient-text"
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: '-0.03rem',
                margin: '0 auto 1.2rem',
                textAlign: 'center',
              }}
            >
              Kvaornux iGaming Blog
            </h1>

            {/* Subtitle */}
            <p 
              data-anim="from-bottom"
              data-anim-delay="2"
              style={{
                color: '#a5a5a5',
                maxWidth: '750px',
                margin: '0 auto 2rem',
                fontSize: 'clamp(0.95rem, 1.8vw, 1.125rem)',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 1.55,
                textAlign: 'center',
                position: 'relative',
                zIndex: 2,
              }}
            >
              Explore practical perspectives on the technology and market shifts shaping the industry. Our iGaming blog provides a behind-the-scenes look at the operations and trends currently moving the sector.
            </p>
          </div>
        </div>
      </section>

      {/* POSTS LIST SECTION */}
      <section
        className="post-list-section relative"
        style={{
          padding: '1.5rem 0 6rem',
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
              marginBottom: '2.5rem',
              textAlign: 'left',
              color: '#fff',
              position: 'relative',
              zIndex: 2,
            }}
          >
            All blogs
          </h2>

          {/* Posts List (Row by Row) */}
          <div className="posts-list">
            {blogs.map((blog, index) => (
              <article 
                key={blog.href} 
                className="post-item" 
                data-anim="from-bottom" 
                data-anim-delay={String((index % 3) + 1)}
              >
                {/* Left Side - Image */}
                <Link href={blog.href} className="post-img-wrapper">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                  />
                </Link>

                {/* Right Side - Content */}
                <div className="post-content">
                  <div className="post-top">
                    <Link href={blog.href} className="post-title-link">
                      <h3 className="post-title">{blog.title}</h3>
                      <p className="post-description">{blog.description}</p>
                    </Link>
                    <Link href={blog.href} aria-label={`Read ${blog.title}`}>
                      <svg
                        className="post-arrow-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </Link>
                  </div>

                  <div className="post-bottom">
                    <div className="post-tags">
                      <span className="post-tag">{blog.tag}</span>
                      <span className="post-read-time-badge">• {blog.readTime}</span>
                    </div>

                    <div className="post-date-meta">
                      <span>{blog.date || "04.05.2026"}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP BANNER */}
      <PartnershipBanner />
    </div>
  );
}