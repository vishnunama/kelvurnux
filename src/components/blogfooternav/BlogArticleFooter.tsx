'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { ALL_BLOG_POSTS, getPreviousBlogPost } from '@/src/data/blogData';

interface BlogArticleFooterProps {
  currentSlug: string;
}

export default function BlogArticleFooter({ currentSlug }: BlogArticleFooterProps) {
  const previousPost = getPreviousBlogPost(currentSlug);
  const swiperRef = useRef<SwiperType | null>(null);

  // Dynamically include recommended blogs (limited to 6 so dots stay clean on mobile & desktop)
  const recommendedPosts = ALL_BLOG_POSTS.filter((post) => post.slug !== currentSlug).slice(0, 6);
  const displayPosts = recommendedPosts.length > 0 ? recommendedPosts : ALL_BLOG_POSTS.slice(0, 6);

  const [activeSnapIndex, setActiveSnapIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(
    Math.max(1, Math.ceil(displayPosts.length / 3))
  );

  const updateSnapState = (swiper: SwiperType) => {
    if (swiper && swiper.snapGrid) {
      setSnapCount(swiper.snapGrid.length);
      setActiveSnapIndex(swiper.snapIndex ?? swiper.activeIndex ?? 0);
    }
  };

  return (
    <div className="w-full text-white relative z-10">
      {/* 1. PREVIOUS ARTICLE BUTTON SECTION */}
      <div className="flex justify-center items-center py-12 md:py-16 border-t border-b border-gray-800/30 px-4 bg-[#0b0b0f]">
        <Link
          href={previousPost.href}
          className="btn-main gap-3 overflow-hidden"
          style={{
            background: 'radial-gradient(65% 140% at 50% -10%, #46ffc8 0%, #00eb9f 40%, #00c984 75%, #02a86e 100%)',
            boxShadow: '0 1px 1.5px 0 rgba(255, 255, 255, 0.65) inset, 0 -2px 3.5px 0 rgba(0, 130, 85, 0.3) inset',
            color: '#04160f',
          }}
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-[#04160f] flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Previous article</span>
        </Link>
      </div>

      {/* 2. EXPERTS' RECOMMENDATIONS SECTION WITH SWIPER SLIDER */}
      <section
        className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          background: 'radial-gradient(90.07% 98.52% at 31.01% 0%, rgba(0, 235, 170, 0.16) 0%, rgba(0, 235, 170, 0) 47.08%), #0b0b0f',
        }}
      >
        <div className="max-w-[78rem] mx-auto relative z-10">
          {/* Experts' Recommendations Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8 leading-tight">
            Experts' Recommendations
          </h2>

          {/* Dynamic Swiper Slider */}
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              updateSnapState(swiper);
            }}
            onSlideChange={(swiper) => {
              updateSnapState(swiper);
            }}
            onBreakpoint={(swiper) => {
              updateSnapState(swiper);
            }}
            slidesPerView={1}
            spaceBetween={18}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="w-full"
          >
            {displayPosts.map((post) => (
              <SwiperSlide key={post.slug} className="!h-auto flex">
                <Link
                  href={post.href}
                  className="group flex flex-col w-full h-full rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden transition-all duration-300 relative border border-[rgba(0,235,170,0.18)] hover:border-[rgba(0,235,170,0.45)] hover:shadow-[0_8px_30px_rgba(0,235,170,0.12)]"
                  style={{
                    background: 'linear-gradient(121deg, rgba(0, 235, 170, 0.25) 10.25%, rgba(0, 235, 170, 0.05) 99.99%), #0a141a',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.35)',
                    WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                  }}
                >
                  {/* Card Cover Image */}
                  <div className="relative w-full h-[190px] sm:h-[220px] overflow-hidden bg-gray-900 border-b border-white/5 flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Content Area */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    {/* Top row: Title + Arrow Icon */}
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <h3 className="text-white font-bold text-lg sm:text-xl leading-[1.35] group-hover:text-[#00ebaa] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <svg
                        className="w-5 h-5 text-white/40 flex-shrink-0 group-hover:text-[#00ebaa] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 mt-0.5"
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
                    </div>

                    {/* Description */}
                    {post.description && (
                      <p className="text-[#a5a5a5] text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4">
                        {post.description}
                      </p>
                    )}

                    {/* Bottom: Tags, Read Time & Date */}
                    <div className="mt-auto flex items-center justify-between pt-3 border-t border-white/5 text-xs sm:text-sm">
                      <div className="flex items-center gap-2 flex-wrap">
                        {post.tags && post.tags.length > 0 && (
                          <span className="px-2.5 py-0.5 text-xs font-medium rounded-lg bg-[rgba(0,235,170,0.12)] text-[#00ebaa] border border-[rgba(0,235,170,0.25)]">
                            {post.tags[0]}
                          </span>
                        )}
                        <span className="text-white/50 text-xs">
                          • {post.readTime}
                        </span>
                      </div>

                      <span className="text-[#759296] text-xs font-medium tracking-wide">
                        {post.date}
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controls Navigation (Circular Arrows & Pagination Dots) */}
          <div className="swiper-navigation-center">
            <button
              type="button"
              className="swiper-button-custom"
              aria-label="Previous slide"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>

            <div className="swiper-pagination-dots">
              {Array.from({ length: snapCount }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`swiper-pagination-dot ${idx === activeSnapIndex ? 'active-dot' : ''}`}
                  onClick={() => {
                    if (swiperRef.current) {
                      swiperRef.current.slideTo(idx);
                      setActiveSnapIndex(idx);
                    }
                  }}
                />
              ))}
            </div>

            <button
              type="button"
              className="swiper-button-custom"
              aria-label="Next slide"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-navigation-center {
          margin: 2.75rem auto 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: max-content;
          max-width: 100%;
        }

        .swiper-button-custom {
          width: 3.2rem;
          min-width: 3.2rem;
          height: 3.2rem;
          border-radius: 9.9rem;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: inset 0 -3px 4px 0 rgba(6, 10, 13, 0.4), inset 0 2px 2.8px 0 rgba(255, 255, 255, 0.13);
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          margin: 0 0.5rem;
          transition: all 0.3s ease-in-out;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.08);
          outline: none;
        }

        .swiper-button-custom:hover {
          background: rgba(0, 235, 170, 0.2);
          color: #00ebaa;
          border-color: rgba(0, 235, 170, 0.3);
          transform: scale(1.05);
        }

        .swiper-button-custom:active {
          transform: scale(0.95);
        }

        .swiper-pagination-dots {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin: 0 1.25rem;
        }

        .swiper-pagination-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.25);
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          padding: 0;
        }

        .swiper-pagination-dot.active-dot {
          background: #00ebaa;
          box-shadow: 0 0 12px rgba(0, 235, 170, 0.7);
          transform: scale(1.3);
        }

        @media (max-width: 640px) {
          .swiper-navigation-center {
            margin: 2rem auto 0;
          }

          .swiper-button-custom {
            width: 2.6rem;
            min-width: 2.6rem;
            height: 2.6rem;
            margin: 0 0.35rem;
          }

          .swiper-pagination-dots {
            gap: 0.45rem;
            margin: 0 0.6rem;
          }

          .swiper-pagination-dot {
            width: 7px;
            height: 7px;
          }
        }
      `}} />
    </div>
  );
}
