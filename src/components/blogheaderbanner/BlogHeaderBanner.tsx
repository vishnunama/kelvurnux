'use client';

import React, { FC } from 'react';
import Link from 'next/link';

interface BlogHeaderBannerProps {
  title: string;
  date?: string;
  readTime?: string;
  tags?: string[];
  bannerImage?: string;
  authorName?: string;
  authorRole?: string;
  authorAvatar?: string;
  factCheckerName?: string;
  factCheckerRole?: string;
  factCheckerAvatar?: string;
  breadcrumbCurrent?: string;
}

const BlogHeaderBanner: FC<BlogHeaderBannerProps> = ({
  title,
  date = '25.09.2026',
  readTime = '15 min read',
  tags = ['Casino', 'Sportsbook', 'Turnkey', 'White Label'],
  bannerImage = '/assets/features/casino-game-providers-api-aggregator.webp',
  authorName = 'Kvaornux Editorial Team',
  authorRole = 'iGaming Expert',
  authorAvatar,
  factCheckerName = 'Technical Review Team',
  factCheckerRole = 'B2B Solutions Manager',
  factCheckerAvatar,
  breadcrumbCurrent,
}) => {
  const shortBreadcrumb = breadcrumbCurrent || (title.length > 28 ? title.slice(0, 25) + '...' : title);

  return (
    <section className="post-single-banner-section">
      <style>{`
        .post-single-banner-section {
          padding: 8rem 0 4rem;
          position: relative;
          background: #0b0b0f;
        }

        .post-banner-container {
          max-width: 78rem;
          margin: 0 auto;
          padding: 0 1.5rem;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        .breadcrumbs {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          font-size: 0.95rem;
          color: #8a8f99;
        }

        .breadcrumbs-item {
          color: #a0a6b2;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .breadcrumbs-item:hover {
          color: #00ebaa;
        }

        .breadcrumbs-sep {
          color: #4a505e;
        }

        .breadcrumbs-current {
          color: #00ebaa;
          font-weight: 500;
        }

        .post-banner {
          padding: 4.5rem 4rem;
          border-radius: 2.8rem;
          overflow: hidden;
          position: relative;
          min-height: 28rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: none;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }

        .post-banner-overlay {
          position: absolute;
          pointer-events: none;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: radial-gradient(ellipse at center, rgba(0, 30, 25, 0.62) 0%, rgba(0, 50, 45, 0.5) 60%, rgba(6, 16, 15, 0.75) 100%);
          z-index: 2;
        }

        .post-banner-img {
          position: absolute;
          pointer-events: none;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 1;
        }

        .post-banner-img img {
          object-fit: cover;
          width: 100%;
          height: 100%;
          filter: brightness(0.85) saturate(1.15);
        }

        .post-banner-inner {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          text-align: center;
        }

        .post-banner-date {
          color: rgba(255, 255, 255, 0.75);
          text-align: center;
          font-size: 1.15rem;
          font-weight: 500;
          line-height: 1.3;
          margin-bottom: 2rem;
          letter-spacing: 0.05em;
        }

        .post-banner-title-wrapper {
          margin: 0 auto 2rem;
          max-width: 62rem;
        }

        .post-banner-title {
          color: #fff;
          text-align: center;
          text-shadow: 0 4px 12px rgba(0, 0, 0, 0.6);
          font-size: clamp(24px, 3.4rem, 3.8rem);
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
        }

        .post-banner-tags {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2.5rem;
        }

        .post-banner-tag {
          border-radius: 0.6rem;
          background: rgba(0, 235, 170, 0.15);
          border: 1px solid rgba(0, 235, 170, 0.3);
          color: #b4e8dc;
          font-size: 0.85rem;
          font-weight: 500;
          line-height: 1.4;
          padding: 0.2rem 0.7rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .post-banner-time {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .post-banner-info {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .post-banner-info-img {
          width: 1.8rem;
          height: 1.8rem;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #00ebaa;
        }

        .post-banner-read-text {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.05rem;
          font-weight: 500;
        }

        .post-banner-authors {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
          margin-top: 2.5rem;
          padding: 0 0.5rem;
        }

        .post-banner-author-content {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .post-banner-author-title {
          color: #00ebaa;
          font-weight: 700;
          font-size: 1.05rem;
        }

        .post-banner-author-icon {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          overflow: hidden;
          border: 1.5px solid #00ebaa;
          flex-shrink: 0;
          background: linear-gradient(135deg, #0e2725 0%, #051413 100%);
          box-shadow: 0 0 12px rgba(0, 235, 170, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.35rem;
        }

        .post-banner-author-icon img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .post-banner-author-name {
          color: #d1d5db;
          font-size: 1rem;
          font-weight: 500;
        }

        .post-banner-author-name span {
          color: #9ca3af;
        }

        .checkmark-icon {
          width: 1.1rem;
          height: 1.1rem;
          color: #00ebaa;
          display: inline-block;
          margin-left: 0.4rem;
          vertical-align: middle;
        }

        @media (max-width: 768px) {
          .post-single-banner-section {
            padding: 6rem 0 3rem;
          }

          .post-banner {
            padding: 3rem 1.5rem;
            min-height: auto;
            border-radius: 2rem;
          }

          .post-banner-date {
            font-size: 1rem;
            margin-bottom: 1.2rem;
          }

          .post-banner-title {
            font-size: clamp(20px, 2.2rem, 2.4rem);
          }

          .post-banner-authors {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }
      `}</style>

      <div className="post-banner-container">
        {/* Breadcrumbs */}
        <nav className="breadcrumbs">
          <Link href="/" className="breadcrumbs-item">Home</Link>
          <span className="breadcrumbs-sep">›</span>
          <Link href="/blog" className="breadcrumbs-item">Blog</Link>
          <span className="breadcrumbs-sep">›</span>
          <span className="breadcrumbs-item breadcrumbs-current">{shortBreadcrumb}</span>
        </nav>

        {/* Featured Post Banner */}
        <div className="post-banner">
          <div className="post-banner-overlay" />
          <div className="post-banner-img">
            <img src={bannerImage} alt={title} />
          </div>

          <div className="post-banner-inner">
            <div className="post-banner-date">{date}</div>
            
            <div className="post-banner-title-wrapper">
              <h1 className="post-banner-title">{title}</h1>
            </div>

            {tags && tags.length > 0 && (
              <div className="post-banner-tags">
                {tags.map((tag, idx) => (
                  <span key={idx} className="post-banner-tag">{tag}</span>
                ))}
              </div>
            )}

            <div className="post-banner-time">
              <div className="post-banner-info">
                <div className="post-banner-info-img">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="post-banner-read-text">{readTime}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Authors & Fact-Checkers Bar */}
        <div className="post-banner-authors">
          <div className="post-banner-author-content">
            <span className="post-banner-author-title">Author:</span>
            <div className="post-banner-author-icon">
              {authorAvatar ? (
                <img src={authorAvatar} alt={authorName} />
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="7" r="4.5" fill="#00ebaa" fillOpacity="0.25" stroke="#00ebaa" strokeWidth="1.8" />
                  <path d="M4.5 19.5C4.5 15.634 7.85786 12.5 12 12.5C16.1421 12.5 19.5 15.634 19.5 19.5" stroke="#00ebaa" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              )}
            </div>
            <div className="post-banner-author-name">
              {authorName} <span>/ {authorRole}</span>
            </div>
          </div>

          <div className="post-banner-author-content">
            <span className="post-banner-author-title">Fact-checked by:</span>
            <div className="post-banner-author-icon">
              {factCheckerAvatar ? (
                <img src={factCheckerAvatar} alt={factCheckerName} />
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L4 5V11C4 16.52 7.41 21.6 12 23C16.59 21.6 20 16.52 20 11V5L12 2Z" fill="#00ebaa" fillOpacity="0.15" stroke="#00ebaa" strokeWidth="1.6" />
                  <path d="M9 12L11 14L15 10" stroke="#00ebaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <div className="post-banner-author-name">
              {factCheckerName} <span>/ {factCheckerRole}</span>
              <svg className="checkmark-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeaderBanner;
