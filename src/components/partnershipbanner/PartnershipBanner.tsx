'use client';

import React, { FC } from 'react';

interface PartnershipBannerProps {
  title?: string;
  buttonText?: string;
}

const PartnershipBanner: FC<PartnershipBannerProps> = ({
  title = "Launch a brand-new one from scratch",
  buttonText = "Learn more",
}) => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById('contact-form-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact-form-section';
    }
  };

  return (
    <section className="partnership-section">
      <style>{`
        .partnership-section {
          padding: 3.5rem 0;
          position: relative;
          background: #0b0b0f;
          overflow: visible;
        }

        .partnership-container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 0 2rem;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        .partnership-block {
          border-radius: 2.8rem;
          border: 1px solid rgba(0, 235, 170, 0.35);
          padding: 2.2rem 4rem 2.2rem 3rem;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          position: relative;
          overflow: visible;
          min-height: 19rem;
          background:
            radial-gradient(45.98% 116.69% at 18.63% 99.93%, rgba(243, 170, 74, 0.45) 0%, rgba(245, 94, 0, 0.15) 35%, rgba(10, 20, 26, 0) 100%),
            linear-gradient(121deg, rgba(0, 235, 170, 0.22) 10%, rgba(0, 235, 170, 0.03) 100%), #0a141a;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .partnership-img {
          width: 24rem;
          position: absolute;
          left: 4rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
        }

        .partnership-img img {
          width: 100%;
          height: auto;
          display: block;
          opacity: 1;
          transition: filter 400ms ease, transform 400ms ease;
          filter: hue-rotate(-25deg) saturate(1.45) brightness(1.08) contrast(1.05) drop-shadow(0 14px 40px rgba(0, 235, 170, 0.55));
        }

        .partnership-content {
          margin-left: 27rem;
          max-width: 38rem;
          height: max-content;
          position: relative;
          z-index: 3;
        }

        .partnership-title {
          margin-bottom: 1.8rem;
          line-height: 1.15;
          font-weight: 700;
          font-size: clamp(22px, 3.2rem, 3.4rem);
          font-style: normal;
          color: #fff;
          background: linear-gradient(147deg, rgba(255, 255, 255, 0.98) 10%, rgba(200, 230, 220, 0.85) 90%), #fff;
          background-blend-mode: darken, normal;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .btn {
          outline: 0;
          border: none;
          cursor: pointer;
          font-weight: 700;
          display: inline-flex;
          height: 3.8rem;
          padding: 0.7rem 2.2rem;
          align-items: center;
          justify-content: center;
          font-size: clamp(12px, 1.1rem, 1.1rem);
          font-style: normal;
          border-radius: 9999px;
          width: max-content;
          max-width: 100%;
          position: relative;
          overflow: hidden;
          background-color: #00ebaa;
          color: #000;
          text-align: center;
          line-height: 1.5;
          text-decoration: none;
        }

        @media (max-width: 960px) {
          .partnership-img {
            width: 20rem;
            left: 2rem;
          }

          .partnership-content {
            margin-left: 21rem;
            max-width: 30rem;
          }

          .partnership-title {
            font-size: clamp(20px, 2.6rem, 2.8rem);
          }
        }

        @media (max-width: 768px) {
          .partnership-section {
            padding: 2.5rem 0;
          }

          .partnership-container {
            padding: 1rem;
          }

          .partnership-block {
            padding: 12rem 1.5rem 2.5rem;
            border-radius: 2.8rem;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            text-align: center;
          }

          .partnership-img {
            width: 22rem;
            left: 50%;
            transform: translateX(-50%);
            top: -6rem;
          }

          .partnership-content {
            margin-left: 0;
            max-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .partnership-title {
            text-align: center;
            font-size: clamp(20px, 2.4rem, 2.4rem);
          }

          .btn {
            width: 100% !important;
          }
        }
      `}</style>

      <div className="partnership-container">
        <div className="partnership-block insert-block">
          <div className="partnership-img insert-img">
            <img
              alt="Launch a brand-new one from scratch"
              src="/assets/opportunities-img-2.webp"
            />
          </div>
          <div className="partnership-content">
            <h3 className="partnership-title insert-title title-xl gradient-txt">
              {title}
            </h3>
            <a
              href="#contact-form-section"
              onClick={handleScrollToContact}
              className="btn btn-full-mob"
            >
              <span>{buttonText}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipBanner;
