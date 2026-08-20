// 'use client';

// import { useEffect, useState } from 'react';

// export default function HeroSection() {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   return (
//     <section className="hero-section relative overflow-hidden bg-[#0b0b0f]">
//       {/* Animated Gradient Background */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background: `radial-gradient(40% 80% at 50% 0, rgba(0, 235, 170, 0.25) 0, rgba(13, 11, 16, 0) 80.49%), #0b0b0f`,
//           backgroundSize: '125% 125%',
//           animation: 'gradient 20s ease infinite',
//         }}
//       />

//       {/* Grid Background Pattern */}
//       <div
//         className="absolute inset-0 opacity-5 pointer-events-none"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
//           backgroundSize: '214.4px 169.6px',
//           backgroundPosition: '50% 50%',
//           WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 20%, #000 80%, transparent)',
//           maskImage: 'linear-gradient(to bottom, transparent, #000 20%, #000 80%, transparent)',
//           WebkitMaskRepeat: 'no-repeat',
//           maskRepeat: 'no-repeat',
//           WebkitMaskSize: 'cover',
//           maskSize: 'cover',
//         }}
//       />

//       {/* Hero Image */}
//       <div className="hero-img">
//         <img
//           src="/assets/hero-img-768.webp"
//           width={1312}
//           height={1312}
//           srcSet={`
//             /assets/hero-img-480.webp 480w,
//             /assets/hero-img-768.webp 768w,
//             /assets/hero-img.webp 1312w
//           `}
//           sizes="
//             (max-width: 480px) 100vw,
//             (max-width: 600px) 94vw,
//             (max-width: 840px) 71vw,
//             (max-width: 1320px) 51vw,
//             46vw
//           "
//           fetchPriority="high"
//           decoding="async"
//           alt="Kelvurnux iGaming Platform"
//           style={{ width: '100%', height: 'auto' }}
//         />
//       </div>

//       {/* Container */}
//       <div className="container-hero">
//         <div className="hero-content-wrap">

//           {/* Small Text */}
//           <div
//             className={`text-base md:text-lg font-normal transition-all duration-700 ${
//               isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
//             }`}
//             style={{
//               background: 'linear-gradient(147deg, rgba(255, 255, 255, 0.33) 10%, rgba(61, 75, 71, 0.33) 90%), #fff',
//               backgroundClip: 'text',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               transitionDelay: isLoaded ? '0.1s' : '0s',
//             }}
//           >
//             Power By Kelvurnux
//           </div>

//           {/* Main Title */}
//           <h1
//             className={`font-bold leading-tight tracking-tight transition-all duration-700 hero-h1 ${
//               isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
//             }`}
//             style={{
//               background: 'linear-gradient(147deg, rgba(255, 255, 255, 0.33) 10%, rgba(61, 75, 71, 0.33) 90%), #fff',
//               backgroundClip: 'text',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               transitionDelay: isLoaded ? '0.2s' : '0s',
//             }}
//           >
//             One Stop Solution For Your Online iGaming Business
//           </h1>

//           {/* Subtitle */}
//           <p
//             className={`font-normal leading-relaxed text-[#b4d5da] transition-all duration-700 hero-subtitle ${
//               isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
//             }`}
//             style={{
//               transitionDelay: isLoaded ? '0.3s' : '0s',
//             }}
//           >
//             Develop your online casino business today with the help of Kelvurnux. We have developed the best platform for your business which includes everything from games integration to payment system.
//           </p>

//           {/* CTA Button */}
//           <div
//             className={`transition-all duration-700 w-fit ${
//               isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
//             }`}
//             style={{
//               transitionDelay: isLoaded ? '0.4s' : '0s',
//             }}
//           >
//            <button
//   onClick={() => {
//     const section = document.getElementById('contact-form-section');
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   }}
//   className="relative group font-bold rounded-full overflow-hidden text-black hover:shadow-lg transition-all duration-300 hero-btn"
//   style={{
//     background: 'radial-gradient(51.68% 146.29% at 65.07% -28.85%, #46ffc4 26.68%, #15d5e3 100%)',
//     boxShadow: '0 -5px 3.5px 0 rgba(132, 202, 255, 0.18) inset, 0 1px 1.8px 0 rgba(255, 244, 230, 0.93) inset',
//   }}
// >
//   <span className="relative z-10">Learn more</span>
//   <div
//     className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//     style={{
//       background: 'radial-gradient(67.03% 100% at 49.76% 99.23%, #ff8b2e 0, #dbd646 36.72%, #00c3b3 100%)',
//       boxShadow: '0 2px 10.1px 0 rgba(62, 250, 184, 0.5), 0 -3px 2.5px 0 rgba(255, 228, 132, 0.58) inset, 0 1px 1.8px 0 rgba(255, 244, 230, 0.93) inset',
//     }}
//   />
// </button>
//           </div>

//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes gradient {
//           0%, 100% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//         }

//         /* ── DESKTOP default ── */
//         .hero-section {
//           padding: 5rem 0;
//         }

//         .container-hero {
//           max-width: 124rem;
//           width: 100%;
//           margin: 0 auto;
//           padding: 4rem 5rem;
//           position: relative;
//           z-index: 2;
//         }

//         .hero-content-wrap {
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           min-height: 460px;
//           max-width: 40%;
//           gap: 1.2rem;
//         }

//         .hero-h1 {
//           font-size: 3.5rem;
//         }

//         .hero-subtitle {
//           font-size: 1.125rem;
//         }

//         .hero-btn {
//           padding: 0.85rem 2rem;
//           font-size: 1.05rem;
//         }

//         /* Image — desktop: right side, vertically centered */
//         .hero-img {
//           position: absolute;
//           right: 0;
//           top: 50%;
//           transform: translateY(-50%);
//           pointer-events: none;
//           width: 48em;
//           display: flex;
//           z-index: 1;
//         }

//         /* ── TABLET ~840px ── */
//         @media (max-width: 840px) {
//           .hero-section {
//             padding: 4rem 0;
//           }

//           .container-hero {
//             padding: 0 3rem;
//           }

//           .hero-content-wrap {
//             max-width: 55%;
//             min-height: 380px;
//           }

//           .hero-h1 {
//             font-size: 2.4rem;
//           }

//           .hero-subtitle {
//             font-size: 1rem;
//           }

//           .hero-img {
//             left: 88%;
//             top: 30%;
//             transform: translate(-50%, -50%) rotate(-19deg);
//             width: 42em;
//           }
//         }

//         /* ── MOBILE ~600px ── */
//         @media (max-width: 600px) {
//           /* Push section down so image at top has space */
//           .hero-section {
//             padding-top: 15rem;
//             padding-bottom: 3rem;
//           }

//           .container-hero {
//             padding: 0 1.6rem;
//           }

//           .hero-content-wrap {
//             max-width: 100%;
//             min-height: unset;
//             gap: 0.9rem;
//           }

//           .hero-h1 {
//             font-size: 1.8rem;
//           }

//           .hero-subtitle {
//             font-size: 0.95rem;
//           }

//           .hero-btn {
//             padding: 0.75rem 1.6rem;
//             font-size: 0.95rem;
//           }

//           /* Image — mobile: sits at the top of section */
//           .hero-img {
//             width: 23em;
//             left: 40%;
//             top: -2.5rem;
//             right: auto;
//             transform: translateX(-10%);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="hero-section relative overflow-hidden bg-[#0b0b0f]">
      {/* Static High Performance Gradient Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(40% 80% at 50% 0, rgba(0, 235, 170, 0.25) 0, rgba(13, 11, 16, 0) 80.49%), #0b0b0f`,
        }}
      />

      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          backgroundSize: '214.4px 169.6px',
          backgroundPosition: '50% 50%',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 20%, #000 80%, transparent)',
          maskImage: 'linear-gradient(to bottom, transparent, #000 20%, #000 80%, transparent)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskSize: 'cover',
          maskSize: 'cover',
        }}
      />

      {/* Hero Image */}
      <div className="hero-img">
        <img
          src="/assets/hero-img-768.webp"
          width={1312}
          height={1312}
          srcSet={`
            /assets/hero-img-480.webp 480w,
            /assets/hero-img-768.webp 768w,
            /assets/hero-img.webp 1312w
          `}
          sizes="
            (max-width: 480px) 100vw,
            (max-width: 600px) 94vw,
            (max-width: 840px) 71vw,
            (max-width: 1320px) 51vw,
            46vw
          "
          fetchPriority="high"
          decoding="async"
          alt="Custom iGaming Solution Solutions"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      {/* Container */}
      <div className="container-hero">
        <div className="hero-content-wrap">

          {/* Small Text */}
          <div
            className={`text-base md:text-lg font-normal transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              background: 'linear-gradient(147deg, rgba(255, 255, 255, 0.33) 10%, rgba(61, 75, 71, 0.33) 90%), #fff',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              transitionDelay: isLoaded ? '0.1s' : '0s',
            }}
          >
iGaming Software Development Company  </div>

          {/* Main Title */}
          <h1
            className={`font-bold leading-tight tracking-tight transition-all duration-700 hero-h1 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              background: 'linear-gradient(147deg, rgba(255, 255, 255, 0.33) 10%, rgba(61, 75, 71, 0.33) 90%), #fff',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              transitionDelay: isLoaded ? '0.2s' : '0s',
            }}
          >
Start Your Casino & Sportsbook Business Today        </h1>

          {/* Subtitle */}
          <p
            className={`font-normal leading-relaxed text-[#a5a5a5] transition-all duration-700 hero-subtitle ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              transitionDelay: isLoaded ? '0.3s' : '0s',
            }}
          >
Build and scale your iGaming business with our casino software, sportsbook platforms, crypto gaming solutions, and turnkey systems powered by seamless API integration and scalable white-label infrastructure.          </p>

          {/* CTA Button */}
          <div
            className={`transition-all duration-700 w-fit ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{
              transitionDelay: isLoaded ? '0.4s' : '0s',
            }}
          >
<button
  onClick={() => {
    const contactSection = document.getElementById('contact-form-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    outline: '0',
    width: 'fit-content',
    borderRadius: '9999px',
    padding: '0.6rem 2.2rem',
    minHeight: '2.8rem',
    backgroundColor: '#00ebaa',
    cursor: 'pointer',
    color: '#000',
    fontWeight: '700',
  }}
>
  <span className="relative z-10 text-black font-bold">Book a Demo</span>
</button>
          </div>

        </div>
      </div>
<style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* ── DESKTOP default ── */
        .hero-section {
          padding: 5rem 0;
        }

        .container-hero {
          max-width: 124rem;
          width: 100%;
          margin: 0 auto;
          padding: 4rem 5rem;
          position: relative;
          z-index: 2;
        }

        .hero-content-wrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 460px;
          max-width: 40%;
          gap: 1.2rem;
        }

        .hero-h1 {
          font-size: 3.5rem;
        }

        .hero-subtitle {
          font-size: 1.125rem;
        }

        .hero-btn {
          padding: 0.85rem 2rem;
          font-size: 1.05rem;
        }

        /* Image — desktop: right side, vertically centered */
        .hero-img {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          width: 48em;
          display: flex;
          z-index: 1;
        }

        /* ── TABLET ~840px ── */
        @media (max-width: 840px) {
          .hero-section {
            padding: 4rem 0;
          }

          .container-hero {
            padding: 0 3rem;
          }

          .hero-content-wrap {
            max-width: 55%;
            min-height: 380px;
          }

          .hero-h1 {
            font-size: 2.4rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .hero-img {
            left: 88%;
            top: 30%;
            transform: translate(-50%, -50%) rotate(-19deg);
            width: 42em;
          }
        }

        /* ── MOBILE ~600px ── */
        @media (max-width: 600px) {
          /* Push section down so image at top has space */
          .hero-section {
            padding-top: 15rem;
            padding-bottom: 3rem;
          }

          .container-hero {
            padding: 0 1.6rem;
          }

          .hero-content-wrap {
            max-width: 100%;
            min-height: unset;
            gap: 0.9rem;
          }

          .hero-h1 {
            font-size: 1.8rem;
          }

          .hero-subtitle {
            font-size: 0.95rem;
          }

          .hero-btn {
            padding: 0.75rem 1.6rem;
            font-size: 0.95rem;
          }

          /* Image — mobile: sits at the top of section */
          .hero-img {
            width: 23em;
            left: 40%;
            top: -2.5rem;
            right: auto;
            transform: translateX(-10%);
          }
        }
      `}</style>
    
    </section>
  );
}