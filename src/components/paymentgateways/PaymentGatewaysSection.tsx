'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const col1 = [
  'applepay.svg',
  'mobilepay.svg',
  'klarna2.svg',
  'netbanking.svg',
  'paysafecard.svg',
  'gpay.svg',
  'klarna.svg',
  'boleto.svg',
  'zimpler.svg',
  'mastercard.svg',
  'visa.svg',
  'inpay-bank.svg',
  'switch.webp',
  'volttechnologies1.webp',
  'sofort.svg',
  'trustly.svg',
  'skrill.svg',
  'siru1.svg',
  'neteller1.svg',
  'neosurf.svg',
  'interaconline.svg',
  'ezeewallet1.webp',
  'ecopayz.svg'
];

const col2 = [
  'ecopayz.svg',
  'ezeewallet1.webp',
  'interaconline.svg',
  'neosurf.svg',
  'neteller1.svg',
  'siru1.svg',
  'skrill.svg',
  'trustly.svg',
  'sofort.svg',
  'volttechnologies1.webp',
  'switch.webp',
  'inpay-bank.svg',
  'visa.svg',
  'mastercard.svg',
  'zimpler.svg',
  'boleto.svg',
  'klarna.svg',
  'gpay.svg',
  'paysafecard.svg',
  'netbanking.svg',
  'klarna2.svg',
  'mobilepay.svg',
  'applepay.svg'
];

const col3 = [
  'zimpler.svg',
  'volttechnologies1.webp',
  'visa.svg',
  'trustly.svg',
  'switch.webp',
  'sofort.svg',
  'skrill.svg',
  'siru1.svg',
  'paysafecard.svg',
  'neteller1.svg',
  'netbanking.svg',
  'neosurf.svg',
  'mobilepay.svg',
  'mastercard.svg',
  'klarna.svg',
  'interaconline.svg',
  'inpay-bank.svg',
  'gpay.svg',
  'ezeewallet1.webp',
  'ecopayz.svg',
  'boleto.svg',
  'klarna2.svg',
  'applepay.svg'
];

const col4 = [
  'mastercard.svg',
  'visa.svg',
  'applepay.svg',
  'gpay.svg',
  'skrill.svg',
  'neteller1.svg',
  'trustly.svg',
  'paysafecard.svg',
  'sofort.svg',
  'klarna.svg',
  'interaconline.svg',
  'netbanking.svg',
  'boleto.svg',
  'zimpler.svg',
  'switch.webp',
  'volttechnologies1.webp',
  'siru1.svg',
  'neosurf.svg',
  'inpay-bank.svg',
  'ezeewallet1.webp',
  'ecopayz.svg',
  'mobilepay.svg',
  'klarna2.svg'
];

const PaymentCard = ({ fileName }: { fileName: string }) => {
  return (
    <div className="providers-card relative flex items-center justify-center w-full h-[3.4rem] xs:h-[3.8rem] sm:h-[5.2rem] lg:h-[6.5rem] border border-[#3d5042bf] rounded-[0.25rem] overflow-hidden bg-[#0e2f29]/30 transition-all duration-300 hover:border-[#00ebaa] hover:shadow-[0_0_20px_rgba(0,235,170,0.2)] shrink-0 group cursor-pointer">
      <img
        src="/assets/payments/prov-bg.avif"
        alt=""
        className="providers-card-bg absolute inset-0 w-full h-full object-cover z-0 opacity-80 group-hover:opacity-100 transition-opacity"
        loading="lazy"
      />
      <img
        src={`/assets/payments/${fileName}`}
        alt=""
        className="providers-card-img relative z-10 max-w-[78%] max-h-[62%] object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
        loading="lazy"
      />
    </div>
  );
};

export default function PaymentGatewaysSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="section bg-[#0b0b0f] text-white relative py-6 sm:py-10 lg:py-16 overflow-hidden border-t border-white/[0.04]">
      <style jsx global>{`
        @keyframes paymentScrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes paymentScrollDown {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .payment-scroll-up {
          animation: paymentScrollUp 90s linear infinite;
        }

        .payment-scroll-down {
          animation: paymentScrollDown 90s linear infinite;
        }

        @media (max-width: 478px) {
          .payment-scroll-up {
            animation: paymentScrollUp 60s linear infinite;
          }
          .payment-scroll-down {
            animation: paymentScrollDown 60s linear infinite;
          }
        }

        .payment-scroll-up:hover,
        .payment-scroll-down:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="section-padding w-full h-full">
        <div className="container-new max-w-[1440px] mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 relative">

          {/* Centered Top Heading matching site sections */}
          <div
            className={`transition-all duration-700 text-center mb-6 sm:mb-8 lg:mb-10 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <h2 className="section-gradient-title text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center">
              Payment Methods Through One Integration
            </h2>
          </div>

          {/* Main Container: Stacked Flex on Mobile, 2-Column Grid on Desktop */}
          <div className="home_providers flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-0 relative overflow-hidden items-center lg:items-stretch">
            
            {/* Left Side on Desktop, Bottom on Mobile: Content & CTA */}
            <div className="home_providers-content flex flex-col justify-center items-start p-4 sm:p-8 lg:p-14 min-h-auto lg:min-h-[40rem] relative overflow-hidden w-full order-2 lg:order-1">

              {/* Background Graphic */}
              <img
                src="/assets/payments/providers-bg.avif"
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

                <h3 className="section-gradient-title text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-tight">
                  <span className="text-[#00ebaa]">DIVERSE PORTFOLIO</span> OF GLOBAL & LOCAL PROVIDERS
                </h3>

                <p className="text-[#a5a5a5] text-sm sm:text-base lg:text-lg font-normal leading-relaxed">
                  Connect to a diverse portfolio of global and local providers from cards and wallets to bank transfers and regional solutions. All methods are pre‑integrated and available through one API, supported by smart routing, multi‑currency conversion, and automated withdrawals.
                </p>

                {/* CTA Button */}
                <div className="mt-2 sm:mt-4">
                  <Link
                    href="/crypto-igaming-solutions"
                    className="btn-main"
                  >
                    <span>Explore Crypto Payment Solutions</span>
                  </Link>
                </div>

              </div>

            </div>

            {/* Right Side on Desktop, Top on Mobile: 3-4 Vertical Columns Infinite Wall */}
            <div
              className="home_providers-wr z-10 flex justify-between items-start w-full h-[19rem] xs:h-[22rem] sm:h-[30rem] lg:h-[38rem] relative overflow-hidden gap-[0.4rem] xs:gap-[0.63rem] order-1 lg:order-2"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 4%, #000 96%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, transparent 0%, #000 4%, #000 96%, transparent 100%)',
              }}
            >
              {/* Top & Bottom Gradient Fades for Infinite Scroll Wall */}
              <div className="absolute inset-x-0 top-0 h-10 sm:h-16 bg-gradient-to-b from-[#0b0b0f] via-[#0b0b0f]/60 to-transparent z-20 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-10 sm:h-16 bg-gradient-to-t from-[#0b0b0f] via-[#0b0b0f]/60 to-transparent z-20 pointer-events-none" />

              {/* Column 1 - Scroll Up */}
              <div className="home_providers-item flex-1 min-w-0 flex flex-col justify-start items-center gap-[0.4rem] xs:gap-[0.63rem]">
                <div className="providers-cl-wr payment-scroll-up w-full flex flex-col gap-[0.4rem] xs:gap-[0.63rem]">
                  {[...col1, ...col1].map((file, idx) => (
                    <PaymentCard key={`p1-${idx}`} fileName={file} />
                  ))}
                </div>
              </div>

              {/* Column 2 - Scroll Down */}
              <div className="home_providers-item flex-1 min-w-0 flex flex-col justify-start items-center gap-[0.4rem] xs:gap-[0.63rem]">
                <div className="providers-cl-wr payment-scroll-down w-full flex flex-col gap-[0.4rem] xs:gap-[0.63rem]">
                  {[...col2, ...col2].map((file, idx) => (
                    <PaymentCard key={`p2-${idx}`} fileName={file} />
                  ))}
                </div>
              </div>

              {/* Column 3 - Scroll Up (Visible on all screens) */}
              <div className="home_providers-item flex-1 min-w-0 flex flex-col justify-start items-center gap-[0.4rem] xs:gap-[0.63rem]">
                <div className="providers-cl-wr payment-scroll-up w-full flex flex-col gap-[0.4rem] xs:gap-[0.63rem]">
                  {[...col3, ...col3].map((file, idx) => (
                    <PaymentCard key={`p3-${idx}`} fileName={file} />
                  ))}
                </div>
              </div>

              {/* Column 4 - Scroll Down (Visible on XL screens) */}
              <div className="home_providers-item hidden xl:flex flex-1 min-w-0 flex-col justify-start items-center gap-[0.4rem] xs:gap-[0.63rem]">
                <div className="providers-cl-wr payment-scroll-down w-full flex flex-col gap-[0.4rem] xs:gap-[0.63rem]">
                  {[...col4, ...col4].map((file, idx) => (
                    <PaymentCard key={`p4-${idx}`} fileName={file} />
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
