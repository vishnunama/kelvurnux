'use client';

import React from 'react';
import Link from 'next/link';
import { getPreviousBlogPost, getRecommendedBlogPosts } from '@/src/data/blogData';

interface BlogArticleFooterProps {
  currentSlug: string;
}

export default function BlogArticleFooter({ currentSlug }: BlogArticleFooterProps) {
  const previousPost = getPreviousBlogPost(currentSlug);
  const recommendedPosts = getRecommendedBlogPosts(currentSlug, 3);

  return (
    <div className="w-full text-white relative z-10">
      {/* 1. PREVIOUS ARTICLE BUTTON SECTION */}
      <div className="flex justify-center items-center py-12 md:py-16 border-t border-b border-gray-800/30 px-4 bg-[#0b0b0f]">
        <Link
          href={previousPost.href}
          className="inline-flex items-center justify-center gap-3 bg-[#00ebaa] hover:bg-[#3dffc0] text-[#0b0b0f] font-bold text-base md:text-lg px-9 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,235,170,0.35)] group"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-[#0b0b0f] transition-transform duration-300 group-hover:-translate-x-1"
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

      {/* 2. EXPERTS' RECOMMENDATIONS SECTION WITH RADIAL GRADIENT */}
      <section
        className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          background: 'radial-gradient(90.07% 98.52% at 31.01% 0%, rgba(0, 235, 170, 0.16) 0%, rgba(0, 235, 170, 0) 47.08%), #0b0b0f',
        }}
      >
        <div className="max-w-[78rem] mx-auto relative z-10">
          {/* Decreased Experts' Recommendations Heading Font Size */}
          <h2 className="text-2xl sm:text-3xl md:text-[2.4rem] font-bold text-white tracking-tight mb-8">
            Experts' Recommendations
          </h2>

          {/* 3 Recommended Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-9">
            {recommendedPosts.map((post) => (
              <Link
                key={post.slug}
                href={post.href}
                className="group flex flex-col bg-transparent"
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

                {/* Article Card Title - Slightly Increased */}
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
                        src="/assets/favicon.png"
                        alt={post.authorName}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-gray-300 font-medium">
                      {post.authorName}
                    </span>
                  </div>

                  {/* Read Time with Hourglass/Clock Icon */}
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
