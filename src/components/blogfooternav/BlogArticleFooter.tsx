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

  // Dynamically include all blogs except the current post so future blogs appear automatically
  const recommendedPosts = ALL_BLOG_POSTS.filter((post) => post.slug !== currentSlug);
  const displayPosts = recommendedPosts.length > 0 ? recommendedPosts : ALL_BLOG_POSTS;

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
          className="btn-main gap-3"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-black flex-shrink-0"
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
          <h2 className="text-2xl sm:text-3xl md:text-[2.4rem] font-bold text-white tracking-tight mb-8">
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
                  className="group flex flex-col bg-transparent w-full h-full"
                >
                  {/* Card Cover Image */}
                  <div className="relative w-full h-[210px] sm:h-[240px] rounded-xl overflow-hidden mb-4 bg-gray-900 border border-white/5">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Date */}
                  <div className="text-xs sm:text-sm font-medium text-gray-400 mb-2 tracking-wide">
                    {post.date}
                  </div>

                  {/* Article Card Title */}
                  <h3 className="text-white font-bold text-lg sm:text-xl md:text-[1.35rem] leading-[1.35] group-hover:text-[#00ebaa] transition-colors line-clamp-2 mb-3">
                    {post.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1 text-xs sm:text-sm font-medium rounded-full bg-[#1b1e28] text-gray-300 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer: Author & Read Time */}
                  <div className="mt-auto flex items-center justify-between pt-3 text-xs sm:text-sm text-gray-400">
                    {/* Author Info */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden bg-[#1f252e] border border-gray-700/60 flex items-center justify-center p-0.5 flex-shrink-0">
                        <img
                          src="/assets/favicon.webp"
                          alt={post.authorName}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-gray-300 font-medium">
                        {post.authorName}
                      </span>
                    </div>

                    {/* Read Time with Clock Icon */}
                    <div className="flex items-center gap-1.5 text-gray-400 font-medium">
                      <svg
                        className="w-4 h-4 text-gray-400 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <polyline points="12 7 12 12 15 14" />
                      </svg>
                      <span>{post.readTime}</span>
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
      `}} />
    </div>
  );
}
