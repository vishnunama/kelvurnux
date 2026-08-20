'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, FC } from 'react';

const OpportunitiesSection: FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section className="opportunities-section">
      <style>{`
        /* CSS Variables for Colors & Theming */
        :root {
          --primary-gradient: linear-gradient(147deg, rgba(255, 255, 255, 0.33) 10%, rgba(61, 75, 71, 0.33) 90%), #fff;
          --gradient-cyan: #00ebaa;
          --gradient-teal: #00ebaa;
          --text-primary: #fff;
          --text-secondary: #00ebaa;
          --bg-primary: #0b0b0f;
          --bg-dark: #0a141a;
          --border-light: rgba(0, 235, 170, 0.3);
        }

        /* Section & Container */
        .opportunities-section {
          padding: 3rem 0;
          position: relative;
          background: var(--bg-primary);
          overflow: visible;
        }

        .container {
          max-width: 80rem;
          margin: 0 auto;
          padding: 2rem;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        /* Main Block with Gradient Background */
        .opportunities-block {
          min-height: 30rem;
          padding: 2rem 3rem 2rem 1rem;
          border-radius: 3.2rem;
          border: 1px solid var(--border-light);
          display: flex;
          justify-content: flex-end;
          align-items: center;
          position: relative;
          overflow: visible;
          background:
            radial-gradient(
              45.98% 116.69% at 18.63% 99.93%,
              rgba(0, 235, 170, 0.2) 0,
              rgba(0, 235, 170, 0.1) 32.64%,
              rgba(9, 34, 41, 0) 100%
            ),
            radial-gradient(
              187.98% 100% at 50% 100%,
              #0a141a 42.07%,
              #07232a 83.8%,
              #0b3742 100%
            );
        }

        /* Image Container */
        .opportunities-img {
          width: 40rem;
          position: absolute;
          left: -2%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
        }

        .opportunities-img img {
          width: 100%;
          height: auto;
          display: block;
          opacity: 1;
          transition: opacity 400ms ease;
        }

        /* Content Container */
        .opportunities-content {
          max-width: 30rem;
          height: max-content;
          position: relative;
          z-index: 3;
        }

        /* Section Title with Gradient Text */
        .section-title {
          color: var(--text-primary);
          font-size: clamp(20px, 2.8rem, 2.8rem);
          font-weight: 600;
          font-style: normal;
          line-height: 1.1;
          position: relative;
          z-index: 2;
          margin: 0;
          background: var(--primary-gradient);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-blend-mode: darken, normal;
        }

        .opportunities-title {
          font-weight: 600;
          text-align: left;
          margin-left: 0;
        }

        .title-center {
          text-align: left;
        }

        .has-subtitle {
          max-width: 66%;
          margin-bottom: 1.2rem;
        }

        /* Subtitle Text */
        .subtitle-text {
          color: var(--text-secondary);
          text-align: left;
          position: relative;
          z-index: 2;
        }

        .text-l {
          font-size: clamp(13px, 1.2rem, 1.2rem);
          font-weight: 400;
          font-style: normal;
          line-height: 1.44;
        }

        .opportunities-subtitle {
          text-align: left;
          margin: 0 0 3.2rem 0;
          max-width: 100% !important;
        }

        /* Button Styling */
        .btn {
          background: #00ebaa;
          outline: 0;
          border: none;
          cursor: pointer;
          font-weight: 600;
          display: flex;
          height: 4rem;
          padding: 0.7rem 2rem;
          align-items: center;
          justify-content: center;
          font-size: clamp(11px, 1.2rem, 1.2rem);
          font-style: normal;
          border-radius: 2.6rem;
          width: max-content;
          max-width: 100%;
          position: relative;
          overflow: hidden;
          color: #121314;
          text-align: center;
          line-height: 1.5;
          text-decoration: none;
        }

        .btn-gradient {
          background: #00ebaa;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow:
            0 -5px 3.5px 0 rgba(132, 202, 255, 0.25) inset,
            0 1px 1.8px 0 rgba(255, 244, 230, 1) inset,
            0 8px 24px rgba(70, 255, 196, 0.2);
        }

        .btn:active {
          transform: translateY(0);
        }

        /* Animation */
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-in .section-title,
        .animate-in .subtitle-text,
        .animate-in .btn {
          animation: slideInFromLeft 0.6s ease forwards;
        }

        .animate-in .subtitle-text {
          animation-delay: 0.1s;
        }

        .animate-in .btn {
          animation-delay: 0.2s;
        }

        /* Responsive - Tablet 840px */
        @media (max-width: 840px) {
          .opportunities-section {
            padding: 4rem 0;
          }

          .container {
            padding: 1.6rem 1rem;
            max-width: 100%;
          }

          .opportunities-block {
            padding: 2rem 1.5rem;
            min-height: auto;
            overflow: visible;
          }

          .opportunities-img {
            width: 30rem;
            left: -5%;
          }

          .opportunities-content {
            max-width: 26rem;
          }

          .subtitle-text {
            max-width: 85%;
          }
        }

        /* Responsive - Mobile 600px */
        @media (max-width: 600px) {
          .opportunities-section {
            padding: 1rem 0;
          }

          .container {
            padding: 1.6rem 1rem;
          }

          .opportunities-block {
            padding: 12rem 0 2rem;
            border-radius: 2.4rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            background:
              radial-gradient(
                144.97% 105.85% at 89.07% 0,
                rgba(243, 170, 74, 0.67) 0,
                rgba(245, 94, 0, 0.24) 26.93%,
                rgba(9, 34, 41, 0) 100%
              ),
              radial-gradient(
                187.98% 100% at 50% 100%,
                #0a141a 42.07%,
                #07232a 83.8%,
                #0b3742 100%
              );
          }

          .opportunities-img {
            width: 20rem;
            left: 50%;
            transform: translateX(-50%);
            top: -6rem;
            position: absolute;
          }

          .opportunities-content {
            max-width: 100%;
            padding: 1.6rem 1rem;
            overflow: hidden;
            text-align: center;
          }

          .section-title {
            text-align: center;
            font-size: clamp(18px, 2.2rem, 2.2rem);
          }

          .opportunities-title {
            text-align: center;
          }

          .subtitle-text {
            text-align: center;
            max-width: 100%;
            font-size: clamp(13px, 1.1rem, 1.1rem);
          }

          .text-l {
            font-size: 1.1rem;
          }

          .btn-full-mob {
            width: 100%;
          }

          .has-subtitle {
            max-width: 100%;
          }
        }

        /* Responsive - Extra small 480px */
        @media (max-width: 480px) {
          .opportunities-block {
            padding: 10rem 1.6rem 1.6rem;
          }

          .opportunities-img {
            width: 14rem;
            top: -5rem;
          }

          .opportunities-content {
            padding: 0 1.2rem;
          }

          .section-title {
            font-size: clamp(16px, 1.8rem, 1.8rem);
          }

          .btn {
            height: 3.6rem;
            padding: 0.6rem 1.4rem;
            font-size: 1rem;
          }

          .subtitle-text {
            font-size: clamp(12px, 1rem, 1rem);
          }

          .opportunities-subtitle {
            margin: 0 0 1.4rem 0;
          }
        }
      `}</style>

      <div className="container">
        <div className="opportunities-block">
          <div className="opportunities-img">
            <img
              src="/assets/opportunities-img.webp"
              alt="Opportunities illustration"
              width={896}
              height={896}
              
            />
          </div>

          <div className="opportunities-content" ref={contentRef}>
            <h2 className="section-title title-center opportunities-title has-subtitle">
              <span>Unlock new opportunities</span>
            </h2>

            <div className="subtitle-text text-l opportunities-subtitle">
              You're one step away from the best-fit solutions — contact us to learn more.
            </div>

      <button
  onClick={() => {
    const section = document.getElementById('contact-form-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="w-full md:w-auto"
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
  <span className="relative z-10 text-black font-bold">Get started</span>
</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;