'use client';

import FAQSection from '@/src/components/FAQSection/FAQSection';
import OpportunitiesSection from '@/src/components/opportunitiessection/Opportunitiessection';
import OurMissionSection from '@/src/components/Ourmissionsection/Ourmissionsection';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function AboutUsHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 840);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: `
          radial-gradient(167.61% 100% at 50% 100%, rgba(29, 174, 179, 0.6) 0%, rgba(11, 11, 15, 0) 14.98%),
          radial-gradient(129.09% 100% at 50% 100%, rgba(0, 116, 112, 0.6) 0%, rgba(11, 11, 15, 0) 38.39%),
          radial-gradient(64.91% 100% at 50% 100%, #0a322e 0%, rgba(11, 11, 15, 0) 88.24%),
          #0b0b0f
        `,
      }}
    >
      {/* Border Line Top */}
      <div
        className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 md:w-4/5"
        style={{
          background: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(88, 153, 152, 0.9) 49.8%, rgba(88, 153, 152, 0.9) 50.2%, rgba(255, 255, 255, 0) 100%)',
          opacity: isVisible ? 0.9 : 0,
          transition: 'opacity 600ms ease-out',
        }}
      />

      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8 z-10">
        <div
          className="relative"
          style={{
            paddingBottom: isMobile ? '2rem' : '6rem',
          }}
        >
          {/* Decorative Element 1 - Top Left (Hidden on Mobile) */}
          {!isMobile && (
            <div
              className="absolute pointer-events-none"
              style={{
                width: '14em',
                left: '8%',
                top: '25%',
                transform: 'translateX(-50%)',
                opacity: isVisible ? 0.8 : 0,
                transition: 'opacity 800ms ease-out 200ms',
              }}
            >
              <Image
                width={188}
                height={195}
                src="/assets/about-us-el-1.webp"
                alt="Decorative element"
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Decorative Element 2 - Top Right (Hidden on Mobile) */}
          {!isMobile && (
            <div
              className="absolute pointer-events-none"
              style={{
                width: '12em',
                right: '8%',
                top: '30%',
                transform: 'translateX(50%)',
                opacity: isVisible ? 0.75 : 0,
                transition: 'opacity 800ms ease-out 300ms',
              }}
            >
              <Image
                width={165}
                height={156}
                src="/assets/about-us-el-2.webp"
                alt="Decorative element"
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Decorative Element 3 - Bottom Left (Hidden on Mobile) */}
          {!isMobile && (
            <div
              className="absolute pointer-events-none"
              style={{
                width: '26em',
                left: '2%',
                bottom: '-2rem',
                transform: 'translateX(-50%)',
                opacity: isVisible ? 0.7 : 0,
                transition: 'opacity 800ms ease-out 400ms',
              }}
            >
              <Image
                width={347}
                height={193}
                src="/assets/about-us-el-3.webp"
                alt="Decorative element"
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Decorative Element 4 - Bottom Right (Hidden on Mobile) */}
          {!isMobile && (
            <div
              className="absolute pointer-events-none"
              style={{
                width: '20em',
                right: '5%',
                bottom: '-1.5rem',
                transform: 'translateX(50%)',
                opacity: isVisible ? 0.65 : 0,
                transition: 'opacity 800ms ease-out 500ms',
              }}
            >
              <Image
                width={262}
                height={168}
                src="/assets/about-us-el-4.webp"
                alt="Decorative element"
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Main Hero Image */}
          <div
            className="mx-auto mb-8 sm:mb-10 md:mb-0"
            style={{
              width: isMobile ? '33em' : '40em',
              maxWidth: isMobile ? 'none' : '90%',
              position: isMobile ? 'relative' : 'relative',
              left: isMobile ? '50%' : 'auto',
              transform: isMobile ? 'translateX(-50%)' : 'none',
              margin: isMobile ? '0' : '0 auto',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 800ms ease-out 100ms',
            }}
          >
            <Image
              width={993}
              height={734}
              src="/assets/about-img.webp"
              alt="Kanggiten iGaming platform provider"
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Title */}
          <h1
            className="text-center mb-3 sm:mb-4 md:mb-6 px-2"
            style={{
              fontSize: isMobile ? 'clamp(22px, 7vw, 32px)' : 'clamp(32px, 7vw, 48px)',
              fontWeight: 700,
              lineHeight: 1.15,
              background: 'linear-gradient(147deg, rgba(255, 255, 255, .33) 10%, rgba(61, 75, 71, .33) 90%), #fff',
              backgroundBlendMode: 'darken',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              position: 'relative',
              zIndex: 2,
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 800ms ease-out 300ms',
            }}
          >
            Our brand essence
          </h1>

          {/* Description Text */}
          <div
            className="mx-auto text-center px-3 sm:px-4"
            style={{
              maxWidth: isMobile ? '100%' : '56rem',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 800ms ease-out 400ms',
            }}
          >
            <p
              style={{
                fontSize: isMobile ? 'clamp(13px, 3.5vw, 15px)' : 'clamp(15px, 2vw, 17px)',
                fontWeight: 400,
                lineHeight: 1.5,
                color: '#a5a5a5',
                marginBottom: '0.8rem',
              }}
            >
               Our company focuses on building modern, scalable, and secure digital solutions for global businesses.
              We combine technology, creativity, and strategy to deliver high-quality software products.
            </p>

            <p
              style={{
                fontSize: isMobile ? 'clamp(13px, 3.5vw, 15px)' : 'clamp(15px, 2vw, 17px)',
                fontWeight: 400,
                lineHeight: 1.5,
                color: '#a5a5a5',
                marginBottom: '0.8rem',
              }}
            >
              We help businesses transform their ideas into powerful web platforms, applications, and digital systems.
            </p>

            <p
              style={{
                fontSize: isMobile ? 'clamp(13px, 3.5vw, 15px)' : 'clamp(15px, 2vw, 17px)',
                fontWeight: 400,
                lineHeight: 1.5,
                color: '#a5a5a5',
                marginBottom: '0',
              }}
            >
                           Our goal is to deliver reliable technology solutions that support long-term growth and innovation.

            </p>
          </div>
        </div>
      </div>
      <OurMissionSection/>
      <FAQSection/>
      <OpportunitiesSection />
    </section>
  );
}