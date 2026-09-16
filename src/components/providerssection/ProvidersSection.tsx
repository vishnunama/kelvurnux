'use client';

import React, { useState, useEffect } from 'react';

const col1 = [
  '3oaks.svg', 'tada.svg', 'spribe.svg', 'ruby.svg', 'octo.svg', 'blueprint.svg',
  'global.svg', 'ela-s2b.svg', 'pariplay.avif', 'ggames.svg', 'netgaming.svg',
  'tomhorn.svg', 'pg.svg', 'leap.svg', 'inspired.svg', 'spinomenal.svg', 'redrake.svg',
  'goldenhero.svg', 'givme.svg', 'oryxgaming2.svg', 'oryxgaming1.svg', 'casinotechnology.svg',
  'irondog.svg', '1x2.svg', 'betsoft.svg', 'playson.svg', 'nolimitcity.svg', 'playson1.svg',
  'wazdan.svg', 'skywind.svg', 'bf.svg', 'relaxgaming.svg', 'playtech.svg', 'elk.svg',
  'yggdrasil.svg', 'quickspin.svg', 'amatic.svg', 'redtiger.svg', 'novomatic.svg',
  'netent.svg', 'pragmaticplay.svg', 'playngo.svg', 'evolutiongaming.svg'
];

const col2 = [
  'global.svg', 'blueprint.svg', 'octo.svg', 'ruby.svg', 'spribe.svg', 'tada.svg',
  '3oaks.svg', 'pragmaticplay.svg', 'netent.svg', 'evolutiongaming.svg', 'playngo.svg',
  'spinomenal.svg', 'elk.svg', 'quickspin.svg', 'nolimitcity.svg', 'yggdrasil.svg',
  'pg.svg', 'redtiger.svg', 'relaxgaming.svg', 'bf.svg', '1x2.svg', 'skywind.svg',
  'wazdan.svg', 'tomhorn.svg', 'ela-s2b.svg', 'novomatic.svg', 'amatic.svg', 'playtech.svg',
  'playson1.svg', 'playson.svg', 'betsoft.svg', 'irondog.svg', 'casinotechnology.svg',
  'oryxgaming1.svg', 'oryxgaming2.svg', 'givme.svg', 'goldenhero.svg', 'redrake.svg',
  'inspired.svg', 'leap.svg', 'netgaming.svg', 'ggames.svg', 'pariplay.avif'
];

const col3 = [
  'yggdrasil.svg', 'wazdan.svg', 'tomhorn.svg', 'tada.svg', 'spribe.svg', 'spinomenal.svg',
  'skywind.svg', 'ruby.svg', 'relaxgaming.svg', 'pariplay.avif', 'redtiger.svg', 'redrake.svg',
  'quickspin.svg', 'pragmaticplay.svg', 'playtech.svg', 'playson.svg', 'playngo.svg',
  'oryxgaming1.svg', 'octo.svg', 'nolimitcity.svg', 'netgaming.svg', 'netent.svg', 'leap.svg',
  'oryxgaming2.svg', 'irondog.svg', 'inspired.svg', 'pg.svg', 'novomatic.svg',
  'goldenhero.svg', 'givme.svg', 'ggames.svg', 'playson1.svg', 'global.svg',
  'evolutiongaming.svg', 'elk.svg', 'ela-s2b.svg', 'casinotechnology.svg', 'blueprint.svg',
  'bf.svg', 'betsoft.svg', 'amatic.svg', '3oaks.svg', '1x2.svg'
];

const col4 = [
  'pragmaticplay.svg', 'netent.svg', 'evolutiongaming.svg', 'playngo.svg', 'spinomenal.svg',
  'elk.svg', 'quickspin.svg', 'nolimitcity.svg', 'yggdrasil.svg', 'pg.svg', 'redtiger.svg',
  'relaxgaming.svg', 'bf.svg', '1x2.svg', 'skywind.svg', 'wazdan.svg', 'tomhorn.svg',
  'ela-s2b.svg', 'novomatic.svg', 'amatic.svg', 'playtech.svg', 'playson1.svg', 'playson.svg',
  'betsoft.svg', 'irondog.svg', 'casinotechnology.svg', 'oryxgaming1.svg', 'oryxgaming2.svg',
  'givme.svg', 'goldenhero.svg', 'redrake.svg', 'inspired.svg', 'leap.svg', 'netgaming.svg',
  'ggames.svg', 'pariplay.avif', 'global.svg', 'blueprint.svg', 'octo.svg', 'ruby.svg',
  'spribe.svg', 'tada.svg', '3oaks.svg'
];

const ProviderCard = ({ fileName }: { fileName: string }) => {
  return (
    <div className="providers-card relative flex items-center justify-center w-full h-[3.4rem] xs:h-[3.8rem] sm:h-[5.2rem] lg:h-[6.5rem] border border-[#3d5042bf] rounded-[0.25rem] overflow-hidden bg-[#0e2f29]/30 transition-all duration-300 hover:border-[#00ebaa] hover:shadow-[0_0_20px_rgba(0,235,170,0.2)] shrink-0 group cursor-pointer">
      <img
        src="/assets/providers/prov-bg.avif"
        alt=""
        className="providers-card-bg absolute inset-0 w-full h-full object-cover z-0 opacity-80 group-hover:opacity-100 transition-opacity"
        loading="lazy"
      />
      <img
        src={`/assets/providers/${fileName}`}
        alt=""
        className="providers-card-img relative z-10 max-w-[78%] max-h-[62%] object-contain filter invert mix-blend-luminosity opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
        loading="lazy"
      />
    </div>
  );
};

export default function ProvidersSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="section bg-[#0b0b0f] text-white relative py-6 sm:py-10 lg:py-16 overflow-hidden">
      <style jsx global>{`
        @keyframes logoScrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes logoScrollDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .logo-scroll-up {
          animation: logoScrollUp 90s linear infinite;
        }

        .logo-scroll-down {
          animation: logoScrollDown 90s linear infinite;
        }

        @media (max-width: 478px) {
          .logo-scroll-up {
            animation: logoScrollUp 60s linear infinite;
          }
          .logo-scroll-down {
            animation: logoScrollDown 60s linear infinite;
          }
        }

        .logo-scroll-up:hover,
        .logo-scroll-down:hover {
          animation-play-state: paused;
        }

        .section-gradient-title {
          background: linear-gradient(147deg, rgba(255, 255, 255, 0.33) 10%, rgba(61, 75, 71, 0.33) 90%), #fff;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <div className="section-padding w-full h-full">
        <div className="container-new max-w-[1440px] mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 relative">
          
          {/* Centered Top Heading matching site sections */}
          <div
            className={`transition-all duration-700 text-center mb-4 sm:mb-6 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
          >
            <h2 className="section-gradient-title text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center mb-2">
              Top Tier iGaming Ecosystem
            </h2>
            <p className="text-[#a5a5a5] text-sm sm:text-base font-normal leading-relaxed text-center max-w-xl mx-auto">
              Empowering platform operators with premier games and seamless integration
            </p>
          </div>

          {/* Main Container: Stacked Flex on Mobile, 2-Column Grid on Desktop */}
          <div 
            className="home_providers flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-0 relative overflow-hidden items-center lg:items-stretch"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 3%, #000 97%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, transparent 0%, #000 3%, #000 97%, transparent 100%)',
            }}
          >
            {/* Unified Top & Bottom Gradient Fades */}
            <div className="absolute inset-x-0 top-0 h-10 sm:h-16 bg-gradient-to-b from-[#0b0b0f] via-[#0b0b0f]/60 to-transparent z-30 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-10 sm:h-16 bg-gradient-to-t from-[#0b0b0f] via-[#0b0b0f]/60 to-transparent z-30 pointer-events-none" />

            {/* Left Side (Top on Mobile): 3-4 Vertical Columns Infinite Wall */}
            <div className="home_providers-wr z-10 flex justify-between items-start w-full h-[19rem] xs:h-[22rem] sm:h-[30rem] lg:h-[38rem] relative overflow-hidden gap-[0.4rem] xs:gap-[0.63rem]">

              {/* Column 1 - Scroll Up */}
              <div className="home_providers-item flex-1 min-w-0 flex flex-col justify-start items-center gap-[0.4rem] xs:gap-[0.63rem]">
                <div className="providers-cl-wr logo-scroll-up w-full flex flex-col gap-[0.4rem] xs:gap-[0.63rem]">
                  {[...col1, ...col1].map((file, idx) => (
                    <ProviderCard key={`c1-${idx}`} fileName={file} />
                  ))}
                </div>
              </div>

              {/* Column 2 - Scroll Down */}
              <div className="home_providers-item flex-1 min-w-0 flex flex-col justify-start items-center gap-[0.4rem] xs:gap-[0.63rem]">
                <div className="providers-cl-wr logo-scroll-down w-full flex flex-col gap-[0.4rem] xs:gap-[0.63rem]">
                  {[...col2, ...col2].map((file, idx) => (
                    <ProviderCard key={`c2-${idx}`} fileName={file} />
                  ))}
                </div>
              </div>

              {/* Column 3 - Scroll Up (Visible on all screens including Mobile) */}
              <div className="home_providers-item flex-1 min-w-0 flex flex-col justify-start items-center gap-[0.4rem] xs:gap-[0.63rem]">
                <div className="providers-cl-wr logo-scroll-up w-full flex flex-col gap-[0.4rem] xs:gap-[0.63rem]">
                  {[...col3, ...col3].map((file, idx) => (
                    <ProviderCard key={`c3-${idx}`} fileName={file} />
                  ))}
                </div>
              </div>

              {/* Column 4 - Scroll Down (Visible on XL screens) */}
              <div className="home_providers-item hidden xl:flex flex-1 min-w-0 flex-col justify-start items-center gap-[0.4rem] xs:gap-[0.63rem]">
                <div className="providers-cl-wr logo-scroll-down w-full flex flex-col gap-[0.4rem] xs:gap-[0.63rem]">
                  {[...col4, ...col4].map((file, idx) => (
                    <ProviderCard key={`c4-${idx}`} fileName={file} />
                  ))}
                </div>
              </div>

            </div>

            {/* Right Side (Bottom on Mobile): Text Content & CTA */}
            <div className="home_providers-content flex flex-col justify-center items-start p-4 sm:p-8 lg:p-14 min-h-auto lg:min-h-[40rem] relative overflow-hidden w-full">

              {/* Background Graphic */}
              <img
                src="/assets/providers/providers-bg.avif"
                alt=""
                className="home_providers-bg-img absolute inset-0 z-0 h-full w-full object-cover opacity-30 pointer-events-none"
                style={{
                  WebkitMaskImage: 'radial-gradient(ellipse at center, #000 40%, transparent 100%)',
                  maskImage: 'radial-gradient(ellipse at center, #000 40%, transparent 100%)',
                }}
                loading="lazy"
              />

              {/* Content Wrap */}
              <div className="home_providers-top relative z-20 max-w-xl my-auto flex flex-col gap-3 sm:gap-5 text-left">

                <span className="text-white text-5xl xs:text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight block leading-none">
                  100+
                </span>

                <h3 className="section-gradient-title text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-tight">
                  GAMING PROVIDERS
                </h3>

                <p className="text-[#a5a5a5] text-sm sm:text-base lg:text-lg font-normal leading-relaxed">
                  At Soft2Bet, we focus on what really matters — your growth, health, and motivation are at the core of our benefits
                </p>

                {/* CTA Button */}
                <div className="mt-2 sm:mt-4">
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
                      border: '1px solid rgba(0, 235, 170, 0.3)',
                      outline: '0',
                      width: 'fit-content',
                      borderRadius: '9999px',
                      padding: '0.7rem 2.4rem',
                      minHeight: '2.8rem',
                      background: 'linear-gradient(180deg, #1fa56f 0%, #0a3a27 100%)',
                      boxShadow: '0 4px 15px rgba(0, 235, 170, 0.15)',
                      cursor: 'pointer',
                      color: '#000',
                      fontWeight: '700',
                      transition: 'all 0.3s ease',
                    }}
                    className="hover:scale-105 hover:shadow-[0_4px_25px_rgba(0,235,170,0.3)]"
                  >
                    <span className="relative z-10 text-black font-extrabold tracking-wide">Book a Demo</span>
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

