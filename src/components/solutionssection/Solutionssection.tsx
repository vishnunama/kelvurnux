'use client';

import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const solutionsData = [
  {
    id: 1,
    image: '/assets/sol-img-1.webp',
    title: 'Startups & Entrepreneurs',
    description: 'Launch and scale your iGaming business with ready-to-deploy casino software, sportsbook platforms, and fully integrated payment and gaming systems.',
    alt: 'Startups & Entrepreneurs',
  },
  {
    id: 2,
    image: '/assets/sol-img-2.webp',
    title: 'Affiliates & Partner Networks',
    description: 'Manage affiliates, multi-level referral systems, commissions, and performance tracking with a powerful back-office and automation tools.',
    alt: 'Affiliates & Partner Networks',
  },
  {
    id: 3,
    image: '/assets/sol-img-3.webp',
    title: 'Game Providers & Aggregators',
    description: 'Integrate and manage multiple game providers through a single API with scalable infrastructure, enabling seamless game aggregation and distribution.',
    alt: 'Game Providers & Aggregators',
  }
];

const styles = `
  .solutions-section {
    background: radial-gradient(106.74% 100.05% at 50% 100.05%, #1c1918 0, #0b0b0f 19.4%);
  }

  .solutions-title {
    background: linear-gradient(147deg, rgba(255, 255, 255, 0.33) 10%, rgba(61, 75, 71, 0.33) 90%), #fff;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .solutions-item {
    background: linear-gradient(121deg, rgba(0, 235, 170, 0.2) 10.25%, rgba(0, 235, 170, 0.03) 99.99%), #0a141a;
    border: 1px solid rgba(0, 235, 170, 0.3);
  }

  

  .solutions-button {
    background: #00ebaa;
    color: #000;
  }

  .nav-button {
    transition: all 0.3s cubic-bezier(0.32, 0.72, 0.3, 1);
  }
  .nav-button:hover {
    transform: scale(1.08);
    background: rgba(255, 255, 255, 0.12) !important;
  }
  .nav-button:active {
    transform: scale(0.95);
  }

  [data-anim] {
    opacity: 0;
  }

  [data-anim="from-bottom"].visible {
    animation: from-bottom 0.5s ease-out forwards;
  }

  [data-anim-delay="1"].visible { animation-delay: 0.05s; }
  [data-anim-delay="2"].visible { animation-delay: 0.1s; }
  [data-anim-delay="3"].visible { animation-delay: 0.15s; }

  @keyframes from-bottom {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default function SolutionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const swiperRef = useRef<any>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 840);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const elements = elementsRef.current.filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <style>{styles}</style>
      <section ref={sectionRef} className="solutions-section py-9 md:py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 pt-[1rem] pb-[4rem] md:px-6 lg:px-8 relative z-10">

          {/* Title */}
          <div
            ref={(el) => { if (el) elementsRef.current[0] = el; }}
            data-anim="from-bottom"
            className="solutions-title text-4xl sm:text-4xl md:text-6xl font-bold leading-tight text-center mb-4"
          >
            Solutions for Every Stage
          </div>

          {/* Subtitle */}
          <div
            ref={(el) => { if (el) elementsRef.current[1] = el; }}
            data-anim="from-bottom"
            className="text-[#00ebaa]/90 text-base sm:text-base md:text-lg font-normal leading-relaxed text-center max-w-[90%] mx-auto mb-12 md:mb-16"
          >
            Whether you're launching or scaling — we've got you covered.
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-3 gap-6 max-w-6xl mx-auto mb-12 md:mb-16">
            {solutionsData.map((solution, index) => (
              <div
                key={solution.id}
                ref={(el) => { if (el) elementsRef.current[2 + index] = el; }}
                data-anim="from-bottom"
                data-anim-delay={index + 1}
                className="solutions-item rounded-3xl pt-16 pb-8 px-8 relative flex flex-col gap-4 h-full transition-all duration-300 hover:-translate-y-1 overflow-visible"
              >
                {/* Image */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-2/5 w-36 z-10 pointer-events-none overflow-visible">
                  <img src={solution.image} alt={solution.alt} width={232} height={225} className="w-full h-auto block" />
                </div>

                {/* Title */}
                <div className="text-white text-xl font-bold leading-snug text-center mt-10">
                  {solution.title}
                </div>

                {/* Description */}
                <div className="text-[#00ebaa]/90 text-base font-normal leading-relaxed text-center flex-grow">
                  {solution.description}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          {isMobile && (
            <div className="mb-3 w-full overflow-visible relative px-6 ">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                spaceBetween={24}
                slidesPerView={1}
                centeredSlides={false}
                grabCursor={true}
                loop={false}
                style={{ overflow: 'visible' }}
              >
                {solutionsData.map((solution) => (
                  <SwiperSlide key={solution.id} style={{ width: 'calc(100vw - 2rem)', overflow: 'visible' }}>
                    <div className="solutions-item rounded-3xl pt-14 pb-6 px-6 relative flex flex-col gap-4 min-h-[310px] overflow-visible">
                      {/* Image */}
                      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-2/5 w-28 z-10 pointer-events-none overflow-visible">
                        <img src={solution.image} alt={solution.alt} width={232} height={225} className="w-full h-auto block" />
                      </div>

                      {/* Title */}
                      <div className="text-white text-2xl font-bold leading-snug text-center mt-8 px-4">
                        {solution.title}
                      </div>

                      {/* Description */}
                      <div className="text-[#00ebaa]/90 text-base font-normal leading-relaxed text-center flex-grow">
                        {solution.description}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Left Arrow - Positioned on left side */}
              <button
                onClick={() => {
                  if (swiperRef.current) swiperRef.current.slidePrev();
                }}
                className="nav-button absolute left-0 top-1/2 -translate-y-1/2 z-20"
                style={{
                  left: '-10px',
                  width: '2.8rem',
                  minWidth: '2.8rem',
                  height: '2.8rem',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  boxShadow: '0 -3px 4px 0 rgba(6,10,13,0.26) inset, 0 2px 2.8px 0 rgba(255,255,255,0.13) inset',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Right Arrow - Positioned on right side */}
              <button
                onClick={() => {
                  if (swiperRef.current) swiperRef.current.slideNext();
                }}
                className="nav-button absolute right-0 top-1/2 -translate-y-1/2 z-20"
                style={{
                  right: '-10px',
                  width: '2.8rem',
                  minWidth: '2.8rem',
                  height: '2.8rem',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  boxShadow: '0 -3px 4px 0 rgba(6,10,13,0.26) inset, 0 2px 2.8px 0 rgba(255,255,255,0.13) inset',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}

          {/* Button */}
          <div
            ref={(el) => { if (el) elementsRef.current[2 + solutionsData.length] = el; }}
            data-anim="from-bottom"
            className="flex justify-center "
          >
           <button
  onClick={() => {
    const section = document.getElementById('contact-form-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    outline: '0',
    width: 'fit-content',
    borderRadius: '1.6rem',
    padding: '0.4rem 3rem',
    minHeight: '4rem',
    backgroundColor: '#00ebaa',
    cursor: 'pointer',
    color: '#000',
    fontWeight: '700',
  }}
>
  <span className="relative z-10 text-black font-bold">Let's Partner Up</span>
</button>
          </div>

        </div>
      </section>
    </>
  );
}