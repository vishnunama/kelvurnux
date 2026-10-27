'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

export interface StepItem {
  id: number;
  title: string;
  text: React.ReactNode | string;
}

export interface StepsSectionProps {
  customSteps?: StepItem[];
  customTitle?: string;
  customSubtitle?: string;
  customCtaText?: string;
  ctaHref?: string;
  onCtaClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  sectionId?: string;
  scrollSticky?: boolean;
}

export const stepsData: StepItem[] = [
  {
    id: 1,
    title: 'Define the Project',
    text: 'We start with your business model, target markets, product requirements and technical priorities.',
  },
  {
    id: 2,
    title: 'Plan the Technology',
    text: 'We define the platform setup, required modules, game integrations, payments and third-party services.',
  },
  {
    id: 3,
    title: 'Build & Integrate',
    text: 'Our team configures the platform, develops the required features and connects the agreed integrations.',
  },
  {
    id: 4,
    title: 'Test & Launch',
    text: 'We test the platform, integrations and key user flows before preparing the production environment for launch.',
  },
  {
    id: 5,
    title: 'Support & Scale',
    text: 'After launch, we provide technical support and continue improving the platform as your operation grows.',
  },
];

const styles = `
  .steps-section {
    overflow: hidden;
    background: radial-gradient(106.74% 100.05% at 50% 100.05%, #1c1918 0, #0b0b0f 19.4%);
    position: relative;
    padding-top: 3rem;
    padding-bottom: 9rem;
  }

  @media (min-width: 768px) {
    .steps-section {
      padding: 4.5rem 0;
    }
  }

  /* Sticky Scroll Track & Section */
  .steps-scroll-track {
    position: relative;
    width: 100%;
  }

  .steps-section.is-sticky-mode {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3.5rem 0;
    box-sizing: border-box;
    z-index: 20;
  }

  @media (min-width: 768px) {
    .steps-section.is-sticky-mode {
      padding: 4.5rem 0;
    }
  }

  .steps-section.is-sticky-mode .steps-container {
    width: 100%;
    max-width: 1280px;
  }

  .steps-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1.5rem;
    position: relative;
    z-index: 2;
  }

  .steps-title {
    color: #fff;
    text-align: center;
    font-size: clamp(2rem, 3.5vw, 3.5rem);
    font-weight: 700;
    line-height: 1.2;
    background: linear-gradient(147deg, rgba(255, 255, 255, 0.33) 10%, rgba(61, 75, 71, 0.33) 90%), #fff;
    background-blend-mode: darken, normal;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 auto 0.75rem;
    max-width: 950px;
  }

  .steps-subtitle {
    color: #a5a5a5;
    text-align: center;
    max-width: 48rem;
    margin: 0 auto 3rem;
    font-size: clamp(1rem, 1.25vw, 1.125rem);
    font-weight: 400;
    line-height: 1.5;
  }

  .steps-slider-wrapper {
    position: relative;
  }

  .steps-slider-wrapper::before {
    content: "";
    position: absolute;
    left: -50vw;
    right: -50vw;
    height: 2px;
    background: rgba(255, 255, 255, 0.1);
    top: 1.6rem;
    transform: translateY(-50%);
    z-index: 0;
  }

  .steps-slider {
    margin-bottom: 2rem;
    position: relative;
    overflow: visible;
  }

  .step-item {
    position: relative;
    z-index: 1;
    cursor: pointer;
  }

  .step-indicator {
    border-radius: 50%;
    width: 3.2rem;
    min-width: 3.2rem;
    height: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #282a2c;
    transition: all 0.3s ease-in-out;
    margin-bottom: 2rem;
    position: relative;
    z-index: 2;
  }

  .step-indicator span {
    width: 1.6rem;
    height: 1.6rem;
    background: radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .2) 100%), radial-gradient(72.77% 73.74% at 44.19% 24.61%, rgba(255, 255, 255, .8) 0, rgba(75, 64, 88, .5) 62.98%, rgba(67, 61, 75, .8) 92.31%), rgba(255, 255, 255, .6);
    background-blend-mode: normal, darken, normal;
    transition: all 0.3s ease-in-out;
    border-radius: 50%;
  }

  /* Active step indicator styling */
  .step-item.is-active .step-indicator,
  .swiper-slide-active .step-indicator {
    background: #282a2c;
    border: none;
    box-shadow: none;
  }

  .step-item.is-active .step-indicator span,
  .swiper-slide-active .step-indicator span {
    background: radial-gradient(circle at 35% 35%, #ffffff 0%, #00ebaa 60%, #00a87a 100%);
    background-blend-mode: normal;
    box-shadow: inset -1px -1px 2px rgba(0, 0, 0, 0.3);
  }

  .step-title {
    margin-bottom: 0.6rem;
    color: #9e9fa0;
    transition: all 0.3s ease-in-out;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.35;
  }

  .step-item.is-active .step-title,
  .swiper-slide-active .step-title {
    color: #ffffff;
  }

  .step-text {
    color: #9e9fa0;
    transition: all 0.3s ease-in-out;
    font-size: 1.05rem;
    font-weight: 400;
    line-height: 1.55;
  }

  .step-item.is-active .step-text,
  .swiper-slide-active .step-text {
    color: #b0b0b0;
  }

  .swiper-navigation-center {
    margin: 2.5rem auto 0;
    justify-content: center;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: max-content;
  }

  .step-counter-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.45rem 1rem;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: #00ebaa;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.05em;
  }

  .counter-sep {
    color: rgba(255, 255, 255, 0.3);
  }

  .swiper-button-custom {
    width: 3.2rem;
    min-width: 3.2rem;
    height: 3.2rem;
    border-radius: 9.9rem;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: inset 0 -3px 4px 0 rgba(6, 10, 13, 0.26), inset 0 2px 2.8px 0 rgba(255, 255, 255, 0.13);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    color: #fff;
    border: none;
    outline: none;
  }

  .swiper-button-custom:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }

  .swiper-button-custom:active {
    transform: scale(0.95);
  }

  .btn-center {
    margin: 2.5rem auto 0;
    display: flex;
  }

  .btn-gradient {
    background: radial-gradient(67.03% 100% at 49.76% 99.23%, #ff8b2e 0%, #dbd646 36.72%, #00c3b3 100%);
    box-shadow: inset 0 -3px 2.5px 0 rgba(255, 228, 132, 0.58), inset 0 1px 1.8px 0 rgba(255, 244, 230, 0.93);
    color: #121314;
    font-weight: 600;
    height: 3.5rem;
    padding: 0.75rem 2.5rem;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    border-radius: 9999px;
    width: max-content;
    max-width: 100%;
    position: relative;
    overflow: hidden;
    text-align: center;
    line-height: 1.5;
    text-decoration: none;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .btn-gradient:hover {
    transform: translateY(-2px);
    box-shadow: inset 0 -5px 3.5px 0 rgba(132, 202, 255, 0.25), inset 0 1px 1.8px 0 rgba(255, 244, 230, 0.95);
  }
`;

export default function StepsSection({
  customSteps,
  customTitle,
  customSubtitle,
  customCtaText,
  ctaHref,
  onCtaClick,
  sectionId,
  scrollSticky = false,
}: StepsSectionProps = {}) {
  const swiperRef = useRef<SwiperType | null>(null);
  const scrollWrapperRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  const steps = customSteps || stepsData;
  const title = customTitle || 'From Strategy to Launch';
  const subtitle =
    customSubtitle ||
    'A clear process from initial requirements to deployment, integration and ongoing support.';

  // Scroll listener for sticky scroll-driven slide progression
  React.useEffect(() => {
    if (!scrollSticky) return;

    let isRunning = false;

    const handleScroll = () => {
      if (isRunning) return;
      isRunning = true;

      window.requestAnimationFrame(() => {
        if (!scrollWrapperRef.current) {
          isRunning = false;
          return;
        }

        const track = scrollWrapperRef.current;
        const rect = track.getBoundingClientRect();
        const windowH = window.innerHeight;
        const totalDist = track.offsetHeight - windowH;

        if (totalDist > 0) {
          // Progress from 0 (top enters sticky position) to 1 (track ends)
          const scrolled = -rect.top;
          const progress = Math.max(0, Math.min(1, scrolled / totalDist));

          // Map progress directly to slide index
          const targetIndex = Math.min(
            Math.floor(progress * steps.length),
            steps.length - 1
          );

          if (targetIndex !== activeIndexRef.current) {
            activeIndexRef.current = targetIndex;
            setActiveIndex(targetIndex);
            if (swiperRef.current && !swiperRef.current.destroyed) {
              swiperRef.current.slideTo(targetIndex, 450);
            }
          }
        }

        isRunning = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollSticky, steps.length]);

  // Smooth scroll sync helper when clicking steps or prev/next buttons
  const scrollToStep = (targetIdx: number) => {
    if (!scrollSticky || !scrollWrapperRef.current) {
      activeIndexRef.current = targetIdx;
      setActiveIndex(targetIdx);
      if (swiperRef.current && !swiperRef.current.destroyed) {
        if (typeof swiperRef.current.slideToLoop === 'function') {
          swiperRef.current.slideToLoop(targetIdx);
        } else {
          swiperRef.current.slideTo(targetIdx);
        }
      }
      return;
    }

    const track = scrollWrapperRef.current;
    const rect = track.getBoundingClientRect();
    const trackTopInDoc = window.scrollY + rect.top;
    const totalDist = track.offsetHeight - window.innerHeight;

    // Center window in the segment for this target step
    const stepFraction = 1 / steps.length;
    const targetProgress = (targetIdx + 0.5) * stepFraction;
    const targetScrollY = trackTopInDoc + targetProgress * totalDist;

    activeIndexRef.current = targetIdx;
    setActiveIndex(targetIdx);
    if (swiperRef.current && !swiperRef.current.destroyed) {
      swiperRef.current.slideTo(targetIdx, 450);
    }

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth',
    });
  };

  const handlePrev = () => {
    if (scrollSticky) {
      const prevIdx = Math.max(activeIndex - 1, 0);
      scrollToStep(prevIdx);
    } else {
      swiperRef.current?.slidePrev();
    }
  };

  const handleNext = () => {
    if (scrollSticky) {
      const nextIdx = Math.min(activeIndex + 1, steps.length - 1);
      scrollToStep(nextIdx);
    } else {
      swiperRef.current?.slideNext();
    }
  };

  const sectionContent = (
    <section
      className={`steps-section ${scrollSticky ? 'is-sticky-mode' : ''}`}
      id={scrollSticky ? undefined : sectionId}
    >
      {/* Background Image */}
      <div className="section-bg absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          width="1440"
          loading="lazy"
          alt=""
          src="/assets/steps-bg.webp"
          className="image-cover w-full h-full object-cover object-center opacity-75"
        />
        {/* Gradient Filter Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #0b0b0f 0%, rgba(11,11,15,0.45) 25%, rgba(11,11,15,0.65) 75%, #0b0b0f 100%)',
          }}
        />
      </div>

      <div className="steps-container">
        <h2 className="steps-title">
          {title}
        </h2>

        <p className="steps-subtitle">
          {subtitle}
        </p>

        <div className="steps-slider-wrapper">
          <Swiper
            modules={[Autoplay]}
            autoplay={
              scrollSticky
                ? false
                : {
                    delay: 3500,
                    disableOnInteraction: false,
                  }
            }
            loop={!scrollSticky}
            centeredSlides={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => {
              const newIdx = swiper.realIndex ?? swiper.activeIndex;
              activeIndexRef.current = newIdx;
              setActiveIndex(newIdx);
            }}
            className="steps-slider"
            spaceBetween={30}
            slidesPerView={1.2}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 40,
                centeredSlides: true,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
                centeredSlides: true,
              },
            }}
          >
            {steps.map((step, index) => {
              const isActive = index === activeIndex;
              return (
                <SwiperSlide key={step.id}>
                  <div
                    className={`step-item ${isActive ? 'is-active' : ''}`}
                    onClick={(e) => {
                      if ((e.target as HTMLElement).closest('a')) return;
                      scrollToStep(index);
                    }}
                  >
                    <div className="step-indicator">
                      <span></span>
                    </div>
                    <div className="step-content">
                      <h3 className="step-title">{step.title}</h3>
                      <div className="step-text">{step.text}</div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="swiper-navigation-center">
            <button
              type="button"
              className="swiper-button-custom"
              aria-label="Previous slide"
              onClick={handlePrev}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_prev" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect width="24" height="24" transform="matrix(-1 0 0 1 24 0)" fill="currentColor"></rect>
                </mask>
                <g mask="url(#mask0_prev)">
                  <path fill="currentColor" d="M7.825 13.0001H19C19.2833 13.0001 19.5208 12.9043 19.7125 12.7126C19.9042 12.5209 20 12.2834 20 12.0001C20 11.7168 19.9042 11.4793 19.7125 11.2876C19.5208 11.0959 19.2833 11.0001 19 11.0001H7.825L12.725 6.10011C12.925 5.90011 13.0208 5.66678 13.0125 5.40011C13.0042 5.13344 12.9 4.90011 12.7 4.70011C12.5 4.51678 12.2667 4.42094 12 4.41261C11.7333 4.40428 11.5 4.50011 11.31 4.70011L4.7 11.31001C4.6 11.4001 4.52917 11.5084 4.4875 11.6251C4.44583 11.7418 4.425 11.8668 4.425 12.0001C4.425 12.1334 4.44583 12.2584 4.4875 12.3751C4.52917 12.4918 4.6 12.6001 4.7 12.7001L11.31 19.3001C11.4833 19.4834 11.7125 19.5751 11.9875 19.5751C12.2625 19.5751 12.5 19.4834 12.7 19.3001C12.9 19.1001 13 18.8626 13 18.5876C13 18.3126 12.9 18.0751 12.7 17.8751L7.825 13.0001Z"></path>
                </g>
              </svg>
            </button>

            {scrollSticky && (
              <div className="step-counter-pill">
                <span>Step 0{activeIndex + 1}</span>
                <span className="counter-sep">/</span>
                <span>0{steps.length}</span>
              </div>
            )}

            <button
              type="button"
              className="swiper-button-custom"
              aria-label="Next slide"
              onClick={handleNext}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_next" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect width="24" height="24" transform="matrix(-1 0 0 1 24 0)" fill="currentColor"></rect>
                </mask>
                <g mask="url(#mask0_next)">
                  <path fill="currentColor" d="M16.175 12.9998L11.275 17.8998C11.075 18.0998 10.9791 18.3331 10.9875 18.5998C10.9958 18.8665 11.1 19.0998 11.31 19.2998C11.5 19.4831 11.7333 19.579 12 19.5873C12.2666 19.5956 12.5 19.4998 12.7 19.2998L19.3 12.6998C19.4 12.5998 19.4708 12.4915 19.5125 12.3748C19.5541 12.2581 19.575 12.1331 19.575 11.9998C19.575 11.8665 19.5541 11.7415 19.5125 11.6248C19.4708 11.5081 19.4 11.31998 19.3 11.2998L12.7 4.6998C12.5166 4.51647 12.2875 4.4248 12.0125 4.4248C11.7375 4.4248 11.5 4.51647 11.31 4.6998C11.1 4.8998 11 5.1373 11 5.4123C11 5.6873 11.1 5.9248 11.31 6.1248L16.175 10.9998H4.99995C4.71662 10.9998 4.47912 11.0956 4.28745 11.2873C4.09578 11.479 3.99995 11.7165 3.99995 11.9998C3.99995 12.2831 4.09578 12.5206 4.28745 12.7123C4.47912 12.904 4.71662 12.9998 4.99995 12.9998H16.175Z"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>

        <div className="steps-cta-wrapper" style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
          <a
            href={ctaHref || '#contact-form-section'}
            onClick={onCtaClick}
            className="font-bold text-black border-none cursor-pointer"
            style={{
              backgroundColor: '#00ebaa',
              padding: '0.7rem 2.5rem',
              borderRadius: '2.6rem',
              height: '3.6rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              textDecoration: 'none',
              color: '#000',
              fontFamily: "'Gabarito', sans-serif",
            }}
          >
            <span>{customCtaText || 'Discuss Your Project'}</span>
          </a>
        </div>
      </div>
    </section>
  );

  if (scrollSticky) {
    const trackHeight = `${(steps.length + 1) * 60}vh`;
    return (
      <>
        <style>{styles}</style>
        <div
          ref={scrollWrapperRef}
          className="steps-scroll-track"
          id={sectionId}
          style={{ height: trackHeight }}
        >
          {sectionContent}
        </div>
      </>
    );
  }

  return (
    <>
      <style>{styles}</style>
      {sectionContent}
    </>
  );
}
