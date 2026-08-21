'use client';

import { useEffect, useState } from 'react';

const MISSION_DATA = [
  {
    id: 1,
    title: 'Our mission',
    description: "To help businesses turn their ideas into reliable, scalable, and high-quality digital solutions using modern technologies and best development practices.",
  },
  {
    id: 2,
    title: 'Our vision',
    description: 'To become a trusted technology partner for global clients by delivering innovative software solutions and long-term digital value.',
  },
];

export default function OurMissionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: 'radial-gradient(50% 100% at 50.76% 100%, rgba(0, 235, 170, 0.18) 0%, rgba(0, 235, 170, 0.04) 49.23%, #0b0b0f 91.15%), #0b0b0f',
        padding: isMobile ? '3.2rem 0' : '10rem 0',
        paddingTop: isMobile ? '3.2rem' : 'clamp(6.4rem, 10rem, 10rem)',
      }}
    >
      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='134' height='106' viewBox='0 0 134 106' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%2300ebaa' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h134M0 10h134M0 20h134M0 30h134M0 40h134M0 50h134M0 60h134M0 70h134M0 80h134M0 90h134M0 100h134M0 106h134'/%3E%3Cpath d='M0 0v106M10 0v106M20 0v106M30 0v106M40 0v106M50 0v106M60 0v106M70 0v106M80 0v106M90 0v106M100 0v106M110 0v106M120 0v106M134 0v106'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '134px 106px',
          backgroundPosition: '50% 50%',
          opacity: 0.05,
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 20%, #000 80%, transparent)',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskSize: 'cover',
          maskImage: 'linear-gradient(to bottom, transparent, #000 20%, #000 80%, transparent)',
          maskRepeat: 'no-repeat',
          maskSize: 'cover',
        }}
      />

      {/* Container */}
      <div
        className="container mx-auto max-w-6xl relative z-10"
        style={{
          padding: isMobile ? '0 1.6rem' : '0 2rem',
        }}
      >
        {/* Grid Wrapper */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: isMobile ? '1.6rem' : '2.4rem',
          }}
        >
          {MISSION_DATA.map((item, index) => (
            <MissionCard
              key={item.id}
              title={item.title}
              description={item.description}
              isVisible={isVisible}
              delay={index * 200}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface MissionCardProps {
  title: string;
  description: string;
  isVisible: boolean;
  delay: number;
  isMobile: boolean;
}

function MissionCard({
  title,
  description,
  isVisible,
  delay,
  isMobile,
}: MissionCardProps) {
  return (
    <div
      style={{
        borderRadius: '2.4rem',
        background: 'linear-gradient(121deg, rgba(0, 235, 170, 0.2) 10.25%, rgba(0, 235, 170, 0.03) 99.99%), #0a141a',
        border: '1px solid rgba(0, 235, 170, 0.3)',
        padding: isMobile ? '2.4rem 1.6rem' : '3.2rem',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 800ms ease-out ${delay}ms, transform 800ms ease-out ${delay}ms`,
      }}
    >
      {/* Title */}
      <h3
        style={{
          fontSize: isMobile ? 'clamp(22px, 6vw, 32px)' : '2.4rem',
          fontWeight: 700,
          lineHeight: 1.25,
          background: 'linear-gradient(147deg, rgba(255, 255, 255, .33) 10%, rgba(61, 75, 71, .33) 90%), #fff',
          backgroundBlendMode: 'darken',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: isMobile ? '1.2rem' : '2rem',
          margin: `0 0 ${isMobile ? '1.2rem' : '2rem'} 0`,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: isMobile ? 'clamp(13px, 3.5vw, 15px)' : '1.1rem',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 1.44,
          color: '#a5a5a5',
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
}