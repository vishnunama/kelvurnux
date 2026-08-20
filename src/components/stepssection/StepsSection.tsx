'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

const stepsData = [
  {
    id: 1,
    title: 'Let’s Talk',
    text: 'Share with us your business goals and preferences regarding target markets, audience licenses, etc.',
  },
  {
    id: 2,
    title: 'Choose Your Stack',
    text: 'Select a comprehensive solution, a specific module, or a tailored mix to meet your needs.',
  },
  {
    id: 3,
    title: 'Customize Your Brand',
    text: 'Use flexible branding tools to align the look and feel of your project with your brand identity and business goals.',
  },
  {
    id: 4,
    title: 'Preparation for launch',
    text: 'From setting up all necessary processes to creating a full-fledged product',
  },
  {
    id: 5,
    title: 'Grow & Optimize',
    text: 'Get continuous support, updates, and performance monitoring from our experts.',
  },
];

const styles = `
  .steps-section {
    overflow: hidden;
    background: radial-gradient(106.74% 100.05% at 50% 100.05%, #1c1918 0, #0b0b0f 19.4%);
    position: relative;
    padding: 3rem 0;
  }

  @media (min-width: 768px) {
    .steps-section {
      padding: 4.5rem 0;
    }
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
    font-size: clamp(2.25rem, 4vw, 3.75rem);
    font-weight: 700;
    line-height: 1.15;
    background: linear-gradient(147deg, rgba(255, 255, 255, 0.33) 10%, rgba(61, 75, 71, 0.33) 90%), #fff;
    background-blend-mode: darken, normal;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 auto 0.75rem;
    width: max-content;
    max-width: 100%;
  }

  .steps-subtitle {
    color: #00ebaa;
    text-align: center;
    max-width: 550px;
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
    background: #00ebaa;
    box-shadow: none;
  }

  .step-item.is-active .step-indicator span,
  .swiper-slide-active .step-indicator span {
    background: #00ebaa;
    background-blend-mode: normal;
    box-shadow: none;
  }

  .step-title {
    margin-bottom: 0.6rem;
    color: #9e9fa0;
    transition: all 0.3s ease-in-out;
    font-size: 1.25rem;
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
    font-size: 0.95rem;
    font-weight: 400;
    line-height: 1.5;
  }

  .step-item.is-active .step-text,
  .swiper-slide-active .step-text {
    color: #c4d7dc;
  }

  .swiper-navigation-center {
    margin: 2.5rem auto 0;
    justify-content: center;
    display: flex;
    align-items: center;
    width: max-content;
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
    margin: 0 0.5rem;
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

export default function StepsSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <style>{styles}</style>
      <section className="steps-section">
        <div className="steps-container">
          <h2 className="steps-title">
            From idea to launch
          </h2>

          <div className="steps-subtitle">
            A few simple steps to turn all your plans into reality
          </div>

          <div className="steps-slider-wrapper">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex ?? swiper.activeIndex)}
              className="steps-slider"
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3.5,
                  spaceBetween: 50,
                },
              }}
            >
              {stepsData.map((step, index) => {
                const isActive = index === activeIndex;
                return (
                  <SwiperSlide key={step.id}>
                    <div
                      className={`step-item ${isActive ? 'is-active' : ''}`}
                      onClick={() => swiperRef.current?.slideTo(index)}
                    >
                      <div className="step-indicator">
                        <span></span>
                      </div>
                      <div className="step-content">
                        <div className="step-title">{step.title}</div>
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
                onClick={() => swiperRef.current?.slidePrev()}
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

              <button
                type="button"
                className="swiper-button-custom"
                aria-label="Next slide"
                onClick={() => swiperRef.current?.slideNext()}
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

          <a
            href="#contact-form-section"
            className="site-btn font-bold text-black border-none cursor-pointer"
            style={{
              backgroundColor: '#00ebaa',
              padding: '0.7rem 2.5rem',
              borderRadius: '2.6rem',
              height: '3.6rem',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '2rem auto 0',
              fontWeight: 700,
              textDecoration: 'none',
              color: '#000',
            }}
          >
            <span>Let’s Partner Up</span>
          </a>
        </div>
      </section>
    </>
  );
}
