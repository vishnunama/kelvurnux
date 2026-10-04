'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  Lock,
} from 'lucide-react';
import ContactForm from '@/src/components/contactform/ContactForm';

// Global function to initialize or reset animations consistent with Kvaornux Blog
const resetAllAnimations = () => {
  const allAnimElements = document.querySelectorAll('[data-anim]');

  allAnimElements.forEach((el) => {
    el.classList.remove('visible');
  });

  setTimeout(() => {
    allAnimElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05 }
    );

    allAnimElements.forEach((el) => {
      observer.observe(el);
    });
  }, 50);
};

export default function CaseStudiesClient() {
  React.useEffect(() => {
    resetAllAnimations();
    const timer = setTimeout(() => {
      resetAllAnimations();
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const handlePopState = () => {
      setTimeout(() => {
        resetAllAnimations();
      }, 100);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  React.useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setTimeout(() => {
          resetAllAnimations();
        }, 100);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById('contact-us');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [activeTab, setActiveTab] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');

  const caseStudiesData = [
    {
      id: 'lakebets',
      category: 'casino',
      slug: 'casino-platform-development',
      title: 'Building a Scalable Mobile-First Casino Platform',
      description: 'Kvaornux developed a mobile-first casino platform for the Nigerian market, connecting multi-provider game integrations, NGN wallet infrastructure, payments, affiliate operations and centralized back-office management.',
      image: '/assets/case-studies/lakebets/mobile-casino-platform-development.webp',
      imageAlt: 'Lakebets mobile-first casino platform development case study',
      features: [
        'Nigeria',
        'Mobile-First H5',
        'NGN Wallet',
        '10 Game Aggregator Integrations',
        '6-Level Affiliate System',
        'Live Platform',
      ],
      link: '/igaming-case-studies/casino-platform-development/',
    },
    {
      id: 'jeestfast24',
      category: 'sportsbook',
      slug: 'agent-based-casino-sportsbook-platform',
      title: 'Building a Multi-Tier Agent-Based Casino & Sportsbook Platform',
      description: 'Kvaornux developed a PKR-based iGaming platform combining casino and sportsbook functionality with multi-tier agent management, wallet operations and role-based back-office controls.',
      image: '/assets/case-studies/jeestfast24/jeetfast24-agent-based-casino-sportsbook-platform.webp',
      imageAlt: 'Jeetfast24 agent-based casino and sportsbook platform development case study',
      features: [
        'Pakistan',
        'Casino & Sportsbook',
        'PKR Wallet',
        'Multi-Tier Agent System',
        'Mobile-First H5',
        'Live Platform',
      ],
      link: '/igaming-case-studies/agent-based-casino-sportsbook-platform/',
    },
  ];

  const testimonialsData = [
    {
      id: 1,
      text: "The flexibility of Kvaornux’s modular setup is a significant plus. It lets us swap tools or tweak parts of the project without interrupting operations, which is a huge win when you’re live 24/7. Working with their team feels more like having an in-house department of experts than a standard vendor. They focus on technical execution and keep things moving, so we don’t lose time on long coordination cycles.",
      authorName: "",
      authorPosition: "Yep Casino",
      photo: "/assets/author-nikita.jpg",
      rating: 5,
    },
    {
      id: 2,
      text: "Kvaornux has a clear commitment to excellence, combining operational efficiency with a deep understanding of player engagement, trends and market dynamics. Working with them has been a seamless experience. Their professionalism, responsiveness, and attention to detail have made integration and ongoing operations smooth and effective. They have shown a remarkable ability to leverage Betsoft’s portfolio, presenting our games in a way that maximizes both performance and player satisfaction.",
      authorName: "Jonathan Crook",
      authorPosition: "Betsoft",
      photo: "/assets/author-nikita.jpg",
      rating: 5,
    },
    {
      id: 3,
      text: "It has been one of the most rewarding partnerships I’ve had. From the very beginning, Kvaornux’s team has been incredibly easy to communicate with, attentive, and consistently proactive in addressing any request. Their technologically advanced platform deserves special recognition. The level of expertise Kvaornux brings to the table is evident in every interaction. They set a high standard, and I’m glad to work with a team that consistently exceeds expectations.",
      authorName: "Kirill Miroshnichenko",
      authorPosition: "CCO, Endorphina",
      photo: "/assets/author-karyna.jpg",
      rating: 5,
    },
    {
      id: 4,
      text: "For Evoplay, working with partners who share a proactive mindset and high standards is crucial. Kvaornux delivers on this through a structured approach, innovative solutions, and a strong understanding of the iGaming product landscape. The team communicates clearly, remains open to dialogue, and pays close attention to detail. I would highlight how they stay aligned throughout the process, respond quickly to adjustments requested, and maintain a consistent level of execution.",
      authorName: "Ivan Kravchuk",
      authorPosition: "CEO, Evoplay",
      photo: "/assets/author-nikita.jpg",
      rating: 5,
    },
    {
      id: 5,
      text: "Our collaboration with Kvaornux has become one of the most productive partnerships for our company. Their team is fast, professional, and consistently transparent in all technical and operational matters. The integration of our games was smooth, and their platform provides excellent stability along with access to a wide network of operators. We appreciate their commitment to innovation and high-quality service. Confidently recommend Kvaornux as a reliable and proactive B2B provider.",
      authorName: "",
      authorPosition: "CEO, Gamzix",
      photo: "/assets/author-karyna.jpg",
      rating: 5,
    },
    {
      id: 6,
      text: "In this industry, you value partners who understand the operational flow of a live environment. Our experience with Kvaornux has been consistently efficient. Their team is technically grounded and focuses on delivering results that actually save time. The platform’s stability is also clear. They operate as a professional extension of our own team. For any business prioritizing clean execution and a reliable B2B partnership, Kvaornux is a solid choice.",
      authorName: "",
      authorPosition: "GG Bet",
      photo: "/assets/author-nikita.jpg",
      rating: 5,
    },
    {
      id: 7,
      text: "You can see how it’s put together once you start using it. Kvaornux handles our volume without any lag or stability issues. Nothing breaks in the flow, and there’s no need to second-guess what’s happening under the hood. That takes a lot of pressure off the team day to day. They’re strong technically, communication is straight to the point, and the whole platform just feels reliable and well-built.",
      authorName: "",
      authorPosition: "Hit Spin",
      photo: "/assets/author-karyna.jpg",
      rating: 5,
    },
    {
      id: 8,
      text: "Usually, partnerships mean dealing with a lot of formalities and waiting on someone to ‘check with their boss.’ With Kvaornux, it’s the exact opposite. You’re talking to the people running the show. If we need to make a change, we hash it out, get a ‘yes’ right then and there, and keep moving. It’s an incredibly frictionless way to work.",
      authorName: "",
      authorPosition: "Ice Casino",
      photo: "/assets/author-nikita.jpg",
      rating: 5,
    },
    {
      id: 9,
      text: "Getting campaigns, data, and affiliate tools to actually sync is usually a massive headache. With Kvaornux, it just clicks. You can tell they have real B2C experience because the ecosystem’s logic matches how we actually operate. We didn’t spend weeks forcing modules to connect. It’s stable, it drastically cuts our daily overhead, and their team is just as no-nonsense as the tech.",
      authorName: "",
      authorPosition: "NV Casino",
      photo: "/assets/author-karyna.jpg",
      rating: 5,
    },
    {
      id: 10,
      text: "At Slotoro, we run a massive portfolio with heavy traffic spikes, and the API response times stay completely flat. No lag, no backend fires for our devs to constantly put out. It’s serious infrastructure. And because Kvaornux’s team actually understands the B2C side, we didn’t waste months arguing over requirements before launching. Recommend teaming up with them.",
      authorName: "",
      authorPosition: "Slotoro",
      photo: "/assets/author-nikita.jpg",
      rating: 5,
    },
    {
      id: 11,
      text: "As a project, Verde was very important to me. I didn’t want it lumped in with the noisy, over-designed gambling sites. I envisioned something quieter, more confident, more refined. And I thank Kvaornux for understanding that. The UI is clean, the flow makes sense, and there’s none of the visual shouting you usually see in our space. Now, its look matches the level of service we want to provide.",
      authorName: "",
      authorPosition: "Verde Casino",
      photo: "/assets/author-karyna.jpg",
      rating: 5,
    },
    {
      id: 12,
      text: "I value tools that actually change how the team works. Kvaornux helped us build a consistent experimentation process and bring more structure into how we approach product improvements. We now run experiments as a continuous process across the entire user journey. This influenced how quickly we can validate and scale new initiatives. I would recommend Kvaornux to teams looking to build a strong experimentation culture and drive sustainable product growth.",
      authorName: "",
      authorPosition: "VOX Casino",
      photo: "/assets/author-nikita.jpg",
      rating: 5,
    },
  ];

  const [activeTestimonialIndex, setActiveTestimonialIndex] = React.useState(1);

  const handlePrevTestimonial = () => {
    setActiveTestimonialIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const handleNextTestimonial = () => {
    setActiveTestimonialIndex((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  const filteredStudies = caseStudiesData.filter((study) => {
    const matchesTab = activeTab === '' || study.category === activeTab;
    const matchesSearch =
      searchQuery === '' ||
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white selection:bg-[#00ebaa] selection:text-black">
      <style>{`
        @keyframes from-bottom {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes from-top {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        [data-anim] { 
          opacity: 1 !important;
        }
        
        [data-anim="from-bottom"] { 
          animation: from-bottom 0.6s ease-out forwards !important;
          opacity: 1 !important;
        }
        
        [data-anim="from-top"] { 
          animation: from-top 0.6s ease-out forwards !important;
          opacity: 1 !important;
        }

        [data-anim-delay="1"] { animation-delay: 0.1s !important; }
        [data-anim-delay="2"] { animation-delay: 0.2s !important; }
        [data-anim-delay="3"] { animation-delay: 0.3s !important; }

        /* PORTFOLIO HERO STYLES */
        .portfolio-hero {
          position: relative;
          overflow: hidden;
          padding: clamp(6.5rem, 10vw, 11rem) 0 4.5rem;
          border-bottom: 2px solid rgba(255, 255, 255, 0);
          background: radial-gradient(91.56% 100% at 50% 0, rgba(0, 235, 170, 0.3) 0%, rgba(13, 11, 16, 0.4) 65.41%);
        }

        .grid-bg {
          position: absolute;
          pointer-events: none;
          width: 100%;
          height: 100%;
          background: url(/assets/grid-bg.svg) repeat 50% 50%;
          background-size: 6.7rem 5.3rem;
          left: 0;
          top: 0;
          opacity: 0.2;
          -webkit-mask-image: linear-gradient(to bottom, transparent, #000 20%, #000 80%, transparent);
          mask-image: linear-gradient(to bottom, transparent, #000 20%, #000 80%, transparent);
        }

        .portfolio-hero-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
          overflow: hidden;
          pointer-events: none;
        }

        .portfolio-hero-el {
          position: absolute;
          pointer-events: none;
        }

        .portfolio-hero-el-main {
          width: 880px;
          max-width: 62vw;
          bottom: -36%;
          left: 72%;
          transform: translateX(-50%);
          filter: brightness(0.8) contrast(1.08) drop-shadow(0 0 35px rgba(0, 235, 170, 0.25));
          opacity: 0.92;
          -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0.15) 100%);
          mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0.15) 100%);
        }

        .portfolio-hero-el-left {
          left: 2%;
          top: -12%;
          width: 580px;
          max-width: 42vw;
          transform: translateX(-35%);
          filter: drop-shadow(0 0 25px rgba(0, 235, 170, 0.2));
        }

        .portfolio-hero-el-right {
          left: auto;
          right: 0%;
          top: -4%;
          width: 210px;
          max-width: 15vw;
          filter: drop-shadow(0 0 25px rgba(0, 235, 170, 0.35));
        }

        .portfolio-hero-container {
          max-width: 124rem;
          margin: 0 auto;
          padding: 0 clamp(1.2rem, 4.5rem, 4.5rem);
          position: relative;
          z-index: 10;
        }

        .portfolio-hero-content {
          max-width: 720px;
          margin-bottom: 3.5rem;
          text-align: left;
          position: relative;
          z-index: 10;
        }

        .portfolio-hero-title {
          font-size: clamp(2.3rem, 4.4vw, 4.2rem);
          font-style: normal;
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.04rem;
          background: linear-gradient(147deg, rgba(255, 255, 255, 0.33) 10%, rgba(61, 75, 71, 0.33) 90%), #fff;
          background-blend-mode: darken, normal;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1.4rem;
          text-align: left !important;
        }

        .portfolio-hero-text {
          font-size: clamp(1.05rem, 1.6vw, 1.35rem);
          font-style: normal;
          font-weight: 400;
          line-height: 1.5;
          color: #a5d8d0 !important;
          margin-bottom: 2.5rem;
          max-width: 580px;
        }

        .portfolio-hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          outline: 0;
          border: none;
          cursor: pointer;
          font-weight: 700;
          width: 240px;
          max-width: 100%;
          height: 3.75rem;
          padding: 0.9rem 2.5rem;
          font-size: 1.15rem;
          border-radius: 3.2rem;
          position: relative;
          overflow: hidden;
          color: #121314;
          text-decoration: none;
          text-align: center;
          line-height: 1.5;
          background: radial-gradient(51.68% 146.29% at 65.07% -28.85%, #00ebaa 26.68%, #00c3b3 100%);
          box-shadow: 0 -5px 3.5px 0 rgba(0, 235, 170, 0.25) inset, 0 1px 1.8px 0 rgba(255, 244, 230, 0.93) inset;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .portfolio-hero-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0, 235, 170, 0.45);
        }

        .portfolio-hero-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: flex-start;
          margin-top: 2rem;
          position: relative;
          z-index: 10;
        }

        .portfolio-hero-stat {
          position: relative;
          width: 320px;
          max-width: 100%;
          min-height: 7.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 0.4rem;
          padding: 1.6rem 2rem;
          border-radius: 1.8rem;
          border: 1px solid rgba(0, 235, 170, 0.35);
          overflow: hidden;
          background: linear-gradient(180deg, rgba(0, 235, 170, 0.18) 0%, rgba(0, 235, 170, 0.12) 32.21%, rgba(0, 235, 170, 0.07) 68.75%, rgba(0, 235, 170, 0.03) 100%);
          box-shadow: 0 -2px 4.7px 0 rgba(0, 235, 170, 0.3) inset;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .portfolio-hero-stat-value {
          font-size: 1.4rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.1;
        }

        .portfolio-hero-stat-value span {
          color: #00ebaa;
          font-weight: 800;
          font-size: 1.8rem;
          text-shadow: 0 0 12px rgba(0, 235, 170, 0.3);
        }

        .portfolio-hero-stat-label {
          font-size: 0.9rem;
          color: #a5d8d0 !important;
          line-height: 1.35;
          font-weight: 400;
        }

        .section-title-gradient {
          background: linear-gradient(147deg, rgba(255, 255, 255, 0.33) 10%, rgba(61, 75, 71, 0.33) 90%), #fff;
          background-blend-mode: darken, normal;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @media (min-width: 601px) and (max-width: 1024px) {
          .portfolio-hero {
            padding: 9rem 0 4rem;
          }
          .portfolio-hero-container {
            padding: 0 2.5rem;
          }
          .portfolio-hero-el-main {
            width: 720px;
            max-width: 65vw;
            bottom: -30%;
            left: 68%;
            top: auto;
            transform: translateX(-50%);
            display: block;
            opacity: 0.95;
            filter: brightness(0.85) contrast(1.05) drop-shadow(0 0 35px rgba(0, 235, 170, 0.3));
            mask-image: none;
            -webkit-mask-image: none;
          }
          .portfolio-hero-el-left {
            width: 420px;
            max-width: 40vw;
            left: 2%;
            top: -10%;
            transform: translateX(-30%);
            display: block;
            opacity: 0.9;
            filter: drop-shadow(0 0 25px rgba(0, 235, 170, 0.25));
            mask-image: none;
            -webkit-mask-image: none;
          }
          .portfolio-hero-el-right {
            width: 200px;
            max-width: 18vw;
            right: 0%;
            top: -2%;
            display: block;
            left: auto;
            filter: drop-shadow(0 0 25px rgba(0, 235, 170, 0.35));
          }
          .portfolio-hero-stats {
            display: flex;
            flex-wrap: nowrap;
            gap: 1.2rem;
          }
          .portfolio-hero-stat {
            width: auto;
            min-width: 0;
            flex: 1 1 0%;
            min-height: 9.5rem;
            padding: 1.8rem 1.4rem;
            border-radius: 1.8rem;
          }
          .portfolio-hero-stat:last-child {
            width: auto;
            flex: 1 1 0%;
            min-height: 9.5rem;
          }
          .portfolio-hero-stat-value {
            font-size: 1.35rem;
          }
          .portfolio-hero-stat-value span {
            font-size: 1.75rem;
          }
          .portfolio-hero-stat-label {
            font-size: 0.88rem;
          }
        }

        @media (max-width: 600px) {
          .portfolio-hero {
            padding: 11rem 0 3.5rem;
          }
          .portfolio-hero-container {
            padding: 0 1rem !important;
          }
          .portfolio-hero-el-main {
            width: 350px;
            max-width: 92vw;
            top: 5%;
            left: 68%;
            bottom: auto;
            transform: translateX(-35%);
            opacity: 0.92;
            filter: brightness(0.8) contrast(1.08) drop-shadow(0 0 35px rgba(0, 235, 170, 0.25));
            -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0.15) 100%);
            mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0.15) 100%);
          }
          .portfolio-hero-el-left {
            width: 260px;
            max-width: 65vw;
            left: -25%;
            top: 1%;
            transform: none;
            opacity: 0.88;
            filter: brightness(0.75) contrast(1.1) drop-shadow(0 0 25px rgba(0, 235, 170, 0.35));
            -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.45) 65%, rgba(0, 0, 0, 0.1) 100%);
            mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.45) 65%, rgba(0, 0, 0, 0.1) 100%);
          }
          .portfolio-hero-el-right {
            display: none;
          }
          .portfolio-hero-content {
            margin-bottom: 2.5rem;
          }
          .portfolio-hero-title {
            font-size: clamp(2.2rem, 8.2vw, 3rem);
            line-height: 1.1;
            margin-bottom: 1.2rem;
          }
          .portfolio-hero-text {
            font-size: 1.12rem;
            line-height: 1.45;
            margin-bottom: 2.2rem;
          }
          .portfolio-hero-btn {
            width: 240px;
            max-width: 100%;
          }
          .portfolio-hero-stats {
            gap: 1.2rem;
            display: flex;
            flex-wrap: wrap;
          }
          .portfolio-hero-stat {
            width: calc(50% - 0.6rem);
            min-width: 140px;
            flex: 1 1 calc(50% - 0.6rem);
            min-height: 10.5rem;
            padding: 1.8rem 1.4rem;
            border-radius: 2rem;
          }
          .portfolio-hero-stat:last-child {
            width: 100%;
            flex: 1 1 100%;
            min-height: 8.5rem;
            padding: 1.8rem 1.6rem;
          }
          .portfolio-hero-stat-value {
            font-size: 1.35rem;
            line-height: 1.2;
          }
          .portfolio-hero-stat-value span {
            font-size: 1.7rem;
          }
          .portfolio-hero-stat-label {
            font-size: 0.88rem;
            line-height: 1.35;
          }
        }

        /* ALL CASE STUDIES SECTION STYLES */
        .case-studies-section {
          position: relative;
          padding: 5rem 0 7rem;
          background: #0b0b0f;
        }

        .section-padding-s {
          padding: 5rem 0;
        }

        .cs-container {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 2;
        }

        .section-title-left {
          margin: 0 0 1.6rem;
          text-align: left;
        }

        .section-title {
          color: #fff;
          text-align: left;
          font-size: clamp(1.8rem, 2.4rem, 2.6rem);
          font-style: normal;
          font-weight: 700;
          line-height: 1.2;
          background: linear-gradient(147deg, rgba(255, 255, 255, 0.33) 10%, rgba(61, 75, 71, 0.33) 90%), #fff;
          background-blend-mode: darken, normal;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          z-index: 2;
          width: max-content;
          max-width: 100%;
        }

        .cs-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.2rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .cs-filter-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          flex-shrink: 0;
        }

        .cs-filter-tab {
          border: none;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          border-radius: 9.9rem;
          background: rgba(255, 255, 255, 0.12);
          display: block;
          padding: 0.5rem 1.6rem;
          color: #eaeaea;
          font-family: inherit;
          font-size: 1.15rem;
          font-weight: 500;
          line-height: 1.6rem;
          white-space: nowrap;
        }

        .cs-filter-tab:hover {
          background: rgba(255, 255, 255, 0.22);
          color: #ffffff;
        }

        .cs-filter-tab.active {
          background: #00ebaa;
          color: #0b0b0f;
          border-radius: 3.2rem;
          font-weight: 600;
        }

        .cs-search {
          flex-grow: 1;
          max-width: 240px;
          min-width: 180px;
        }

        .cs-search-field {
          position: relative;
          display: flex;
          align-items: center;
        }

        .cs-search-icon {
          position: absolute;
          left: 1.1rem;
          width: 1.4rem;
          height: 1.4rem;
          pointer-events: none;
        }

        .cs-search-input {
          width: 100%;
          padding: 0.55rem 2.8rem 0.55rem 3.2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 9.9rem;
          color: #fff;
          font-size: 1.15rem;
          outline: none;
          transition: border-color 0.3s ease, background 0.3s ease;
        }

        .cs-search-input::placeholder {
          color: #71717a;
        }

        .cs-search-input:focus {
          border-color: #00ebaa;
          background: rgba(255, 255, 255, 0.08);
        }

        .cs-search-clear {
          position: absolute;
          right: 1.4rem;
          background: transparent;
          border: none;
          color: #00ebaa;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }

        .case-studies-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 1.4rem;
        }

        .case-studies-card {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          height: 100%;
        }

        .case-studies-card-img {
          position: relative;
          width: 100%;
          border-radius: 0.5rem;
          overflow: hidden;
          display: block;
          aspect-ratio: 505 / 253;
          background: #141a20;
        }

        .case-studies-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .case-studies-card-body {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          padding: 1.4rem;
          flex-grow: 1;
          border-radius: 0.5rem;
          background: linear-gradient(180deg, rgba(0, 235, 170, 0.12) 0%, rgba(0, 235, 170, 0.06) 40%, rgba(0, 235, 170, 0.02) 100%), #10161a;
          border: none;
          box-shadow: 0 -2px 4.7px 0 rgba(0, 235, 170, 0.15) inset;
          backdrop-filter: blur(10px);
        }

        .case-studies-card-title {
          color: #fff;
          font-size: 1.35rem;
          font-weight: 700;
          line-height: 1.35;
          text-align: left;
          text-decoration: none;
          transition: color 0.3s ease;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .case-studies-card-title:hover {
          color: #00ebaa;
        }

        .case-studies-card-text {
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          color: #a5d8d0;
        }

        .case-studies-card-features {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          padding: 0;
          margin: 0.2rem 0 0 0;
          list-style: none;
          max-width: calc(100% - 4.5rem);
        }

        .case-studies-card-feature {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
        }

        .case-studies-card-feature-text {
          font-size: 0.95rem;
          color: #e2e8f0;
          font-weight: 500;
          line-height: 1.4;
        }

        .case-studies-card-btn {
          position: absolute;
          bottom: 1.2rem;
          right: 1.2rem;
          width: 3rem;
          height: 3rem;
          border-radius: 9.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(51.68% 146.29% at 65.07% -28.85%, #00ebaa 26.68%, #00c3b3 100%);
          color: #121314;
          text-decoration: none;
          box-shadow: 0 -3px 3px 0 rgba(0, 235, 170, 0.25) inset, 0 1px 1.5px 0 rgba(255, 244, 230, 0.93) inset;
        }

        .case-studies-card-btn svg {
          width: 1.4rem;
          height: 1.4rem;
        }

        @media (max-width: 1024px) {
          .case-studies-list {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 2rem;
          }
        }

        @media (max-width: 640px) {
          .case-studies-section {
            padding: 3rem 0 4rem !important;
          }
          .cs-container {
            padding: 0 1rem !important;
          }
          .case-studies-list {
            grid-template-columns: 1fr;
            grid-gap: 1.5rem;
          }
          .case-studies-card-body {
            padding: 1.1rem 1rem;
          }
          .cs-toolbar {
            flex-direction: column;
            align-items: stretch;
            gap: 1.2rem;
            margin-bottom: 1.5rem;
          }
          .cs-search {
            max-width: 100%;
          }
          .title-mob-center {
            text-align: center !important;
            margin-left: auto;
            margin-right: auto;
          }
        }

        /* CLIENT TESTIMONIALS SECTION STYLES */
        .clients-testimonials-section {
          position: relative;
          padding: 6.4rem 0 8rem;
          background: radial-gradient(105.28% 100.86% at 82.74% 0, rgba(0, 235, 170, 0.15) 0, rgba(0, 235, 170, 0) 47.08%), radial-gradient(90.07% 98.52% at 31.01% 0, rgba(0, 195, 179, 0.12) 0, rgba(0, 195, 179, 0) 47.08%), #0b0b0f;
          overflow: hidden;
        }

        .section-padding-m {
          padding: 6.4rem 0;
        }

        .clients-testimonials-title {
          font-size: clamp(2.4rem, 3.2vw, 3.4rem);
          margin-bottom: 3.5rem;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        .clients-testimonials-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 1rem 0 2.5rem;
          --slide-w: 660px;
          --slide-m: 16px;
        }

        .clients-testimonials-wrapper::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 16vw;
          height: 100%;
          background: linear-gradient(270deg, rgba(11, 11, 15, 0) 0%, #0b0b0f 100%);
          z-index: 5;
          pointer-events: none;
        }

        .clients-testimonials-wrapper::after {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          width: 16vw;
          height: 100%;
          background: linear-gradient(90deg, rgba(11, 11, 15, 0) 0%, #0b0b0f 100%);
          z-index: 5;
          pointer-events: none;
        }

        .clients-testimonials-slider-track {
          display: flex;
          align-items: center;
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          width: max-content;
        }

        .clients-testimonial-slide {
          flex-shrink: 0;
          width: var(--slide-w);
          max-width: 82vw;
          margin: 0 var(--slide-m);
          opacity: 0.35;
          transition: opacity 0.5s ease, transform 0.5s ease;
          pointer-events: none;
        }

        .clients-testimonial-slide.active-slide {
          opacity: 1 !important;
          transform: scale(1.02);
          pointer-events: auto;
        }

        .clients-testimonial-item {
          border-radius: 1.6rem;
          background: linear-gradient(180deg, rgba(0, 235, 170, 0.1) 0%, rgba(0, 235, 170, 0.04) 50%, rgba(0, 235, 170, 0.01) 100%), #10161a;
          padding: 2.8rem;
          min-height: 240px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: none !important;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
          transition: background 0.5s ease, box-shadow 0.5s ease;
        }

        .clients-testimonial-slide.active-slide .clients-testimonial-item {
          background: linear-gradient(180deg, rgba(0, 235, 170, 0.18) 0%, rgba(0, 235, 170, 0.1) 40%, rgba(0, 235, 170, 0.04) 100%), #121c19 !important;
          border: none !important;
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.6) !important;
        }

        .clients-testimonial-content {
          margin-bottom: 2rem;
        }

        .clients-testimonial-text {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #a5d8d0;
          font-weight: 400;
        }

        .clients-testimonial-slide.active-slide .clients-testimonial-text {
          color: #ffffff !important;
          font-size: 1.25rem;
          font-weight: 400;
        }

        .clients-testimonial-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .clients-testimonial-author {
          display: flex;
          align-items: center;
          gap: 0.9rem;
        }

        .clients-testimonial-author-photo {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          overflow: hidden;
          background: rgba(0, 235, 170, 0.2);
          border: 1px solid rgba(0, 235, 170, 0.4);
          flex-shrink: 0;
        }

        .clients-testimonial-author-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
        }

        .clients-testimonial-author-position {
          font-size: 1.1rem;
          color: #00ebaa;
          font-weight: 600;
        }

        .stars-wrapper {
          background: rgba(0, 235, 170, 0.12);
          padding: 0.4rem 0.8rem;
          border-radius: 2rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .star-icon {
          width: 1.1rem;
          height: 1.1rem;
          color: #00ebaa;
          fill: currentColor;
        }

        .swiper-navigation-clients-testimonials {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2.5rem;
          gap: 1rem;
          position: relative;
          z-index: 10;
        }

        .swiper-button-custom {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 -3px 4px 0 rgba(6, 10, 13, 0.26) inset, 0 2px 2.8px 0 rgba(255, 255, 255, 0.13) inset;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #ffffff;
          border: none;
          transition: all 0.3s ease-in-out;
        }

        .swiper-button-custom:hover {
          background: rgba(0, 235, 170, 0.25);
          color: #00ebaa;
          transform: scale(1.05);
        }

        .swiper-pagination-dots {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin: 0 1rem;
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
          box-shadow: 0 0 10px rgba(0, 235, 170, 0.6);
          transform: scale(1.3);
        }

        @media (max-width: 768px) {
          .clients-testimonials-section {
            padding: 3rem 0 4rem;
          }
          .clients-testimonials-title {
            margin-bottom: 2rem;
            font-size: 2rem;
          }
          .clients-testimonials-wrapper {
            --slide-w: calc(100vw - 64px);
            --slide-m: 8px;
            padding: 0.5rem 0 1.5rem;
          }
          .clients-testimonials-wrapper::before,
          .clients-testimonials-wrapper::after {
            display: none !important;
          }
          .clients-testimonial-slide {
            width: var(--slide-w);
            max-width: calc(100vw - 40px);
            margin: 0 var(--slide-m);
          }
          .clients-testimonial-item {
            padding: 1.5rem 1.25rem !important;
            min-height: auto !important;
            border-radius: 1.25rem !important;
          }
          .clients-testimonial-content {
            margin-bottom: 1.25rem !important;
          }
          .clients-testimonial-text {
            font-size: 0.95rem !important;
            line-height: 1.55 !important;
          }
          .clients-testimonial-slide.active-slide .clients-testimonial-text {
            font-size: 0.98rem !important;
          }
          .clients-testimonial-info {
            margin-top: 0.5rem !important;
            gap: 0.75rem !important;
          }
          .clients-testimonial-author {
            gap: 0.75rem !important;
          }
          .clients-testimonial-author-photo {
            width: 38px !important;
            height: 38px !important;
          }
          .clients-testimonial-author-name {
            font-size: 1.05rem !important;
          }
          .clients-testimonial-author-position {
            font-size: 0.9rem !important;
          }
          .stars-wrapper {
            padding: 0.3rem 0.6rem !important;
          }
          .star-icon {
            width: 0.9rem !important;
            height: 0.9rem !important;
          }
        }
      `}</style>

      {/* =========================================================================
          HERO SECTION (Matching requested Kvaornux Portfolio hero layout)
          ========================================================================= */}
      <section className="portfolio-hero">
        <div className="grid-bg"></div>

        {/* Hero Background Decor */}
        <div className="portfolio-hero-bg">
          <div className="portfolio-hero-el portfolio-hero-el-main">
            <Image
              src="/assets/case-studies/Glossy Teal Swirl Sphere Emblem.png"
              alt=""
              aria-hidden="true"
              width={880}
              height={870}
              priority
              className="w-full h-auto"
            />
          </div>
          <div className="portfolio-hero-el portfolio-hero-el-left">
            <Image
              src="/assets/case-studies/case-studies-el-left.webp"
              alt=""
              aria-hidden="true"
              width={469}
              height={469}
              priority
              className="w-full h-auto"
            />
          </div>
          <div className="portfolio-hero-el portfolio-hero-el-right">
            <Image
              src="/assets/case-studies/case-studies-el-right.webp"
              alt=""
              aria-hidden="true"
              width={210}
              height={302}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Hero Container */}
        <div className="portfolio-hero-container">
          <div className="portfolio-hero-content" data-anim="from-bottom" data-anim-delay="1">
            <h1 className="portfolio-hero-title">
              iGaming case studies
            </h1>

            <p className="portfolio-hero-text">
              Explore real iGaming platforms and technology projects developed by Kvaornux, covering casino infrastructure, game integrations, wallets, payments, affiliate systems and back-office operations.
            </p>

            <a
              className="portfolio-hero-btn"
              href="#contact-us"
              onClick={handleScrollToContact}
            >
              <span>Discuss project</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="portfolio-hero-stats" data-anim="from-bottom" data-anim-delay="2">
            <div className="portfolio-hero-stat">
              <p className="portfolio-hero-stat-value">
                <span>50+</span>
              </p>
              <p className="portfolio-hero-stat-label">
                Projects
              </p>
            </div>

            <div className="portfolio-hero-stat">
              <p className="portfolio-hero-stat-value">
                <span>150+</span>
              </p>
              <p className="portfolio-hero-stat-label">
                Provider/API Integrations
              </p>
            </div>

            <div className="portfolio-hero-stat">
              <p className="portfolio-hero-stat-value">
                <span>20K+</span>
              </p>
              <p className="portfolio-hero-stat-label">
                Games
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ALL CASE STUDIES SECTION
          ========================================================================= */}
      <section className="case-studies-section section-padding-s">
        <div className="cs-container">
          <h2 className="section-title section-title-left title-mob-center">
            All case studies
          </h2>

          {caseStudiesData.length > 1 && (
            <div className="cs-toolbar">
              <div className="cs-filter-tabs">
                <button
                  type="button"
                  className={`cs-filter-tab ${activeTab === '' ? 'active' : ''}`}
                  onClick={() => setActiveTab('')}
                >
                  All
                </button>
                <button
                  type="button"
                  className={`cs-filter-tab ${activeTab === 'casino' ? 'active' : ''}`}
                  onClick={() => setActiveTab('casino')}
                >
                  Casino
                </button>
              </div>

              <div className="cs-search">
                <div className="cs-search-field">
                  <svg className="cs-search-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2938 14.5697 18.0025 12.8204 18 11C18 7.133 14.867 4 11 4C7.133 4 4 7.133 4 11C4 14.867 7.133 18 11 18C12.8204 18.0025 14.5697 17.2938 15.875 16.025L16.025 15.875Z" fill="#8EE8FF"></path>
                  </svg>
                  <input
                    type="search"
                    className="cs-search-input"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoComplete="off"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      className="cs-search-clear"
                      aria-label="Clear search"
                      onClick={() => setSearchQuery('')}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {filteredStudies.length === 0 ? (
            <div className="py-16 text-center text-[#94a3b8] text-xl font-medium">
              No case studies found matching your criteria.
            </div>
          ) : (
            <div className="cs-page-content">
              <div className="case-studies-list">
                {filteredStudies.map((study) => (
                  <div key={study.id} className="case-studies-card">
                    <Link href={study.link} className="case-studies-card-img">
                      <Image
                        src={study.image}
                        alt={study.imageAlt || study.title}
                        width={505}
                        height={253}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="case-studies-card-body">
                      <h3 className="title-xs text-left case-studies-card-title">
                        <Link href={study.link} title={study.title}>
                          {study.title}
                        </Link>
                      </h3>

                      <div className="text-s case-studies-card-text">
                        {study.description}
                      </div>

                      <ul className="case-studies-card-features">
                        {study.features.map((feature, idx) => (
                          <li key={idx} className="case-studies-card-feature">
                            <svg className="w-2.5 h-2.5 text-[#00ebaa] shrink-0 mt-[4px]" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2L2 12l10 10 10-10L12 2z" />
                            </svg>
                            <span className="text-m case-studies-card-feature-text">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center justify-between mt-auto pt-4">
                        <Link href={study.link} className="inline-flex items-center gap-2 text-[#00ebaa] font-semibold text-base hover:underline">
                          <span>View Case Study</span>
                        </Link>
                        <Link
                          href={study.link}
                          className="case-studies-card-btn"
                          aria-label={study.title}
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          CLIENT TESTIMONIALS SECTION
          ========================================================================= */}
      {testimonialsData.length > 0 && (
        <section className="clients-testimonials-section section-padding-m">
          <div className="cs-container">
            <h2 className="section-title clients-testimonials-title">
              Client testimonials
            </h2>
          </div>

          <div className="clients-testimonials-wrapper">
            <div
              className="clients-testimonials-slider-track"
              style={{
                transform: `translateX(calc(50vw - (${activeTestimonialIndex} * (var(--slide-w) + (var(--slide-m) * 2)) + ((var(--slide-w) + (var(--slide-m) * 2)) / 2))))`,
              }}
            >
              {testimonialsData.map((testimonial, idx) => (
                <div
                  key={testimonial.id}
                  className={`clients-testimonial-slide ${idx === activeTestimonialIndex ? 'active-slide' : ''
                    }`}
                  onClick={() => setActiveTestimonialIndex(idx)}
                >
                  <div className="clients-testimonial-item">
                    <div className="clients-testimonial-content">
                      <div className="clients-testimonial-text">
                        <p>{testimonial.text}</p>
                      </div>
                    </div>

                    <div className="clients-testimonial-info">
                      <div className="clients-testimonial-author">
                        <div className="clients-testimonial-author-photo">
                          <Image
                            src={testimonial.photo}
                            alt={testimonial.authorName || testimonial.authorPosition}
                            width={44}
                            height={44}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="clients-testimonial-author-content">
                          {testimonial.authorName && (
                            <div className="clients-testimonial-author-name">
                              {testimonial.authorName}
                            </div>
                          )}
                          <div className="clients-testimonial-author-position">
                            {testimonial.authorPosition}
                          </div>
                        </div>
                      </div>

                      <div className="stars-wrapper">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="star-icon"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls Navigation (Arrows & Pagination Dots) */}
            <div className="swiper-navigation-clients-testimonials">
              <button
                type="button"
                className="swiper-button-custom"
                aria-label="Previous slide"
                onClick={handlePrevTestimonial}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>

              <div className="swiper-pagination-dots">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`swiper-pagination-dot ${idx === activeTestimonialIndex ? 'active-dot' : ''
                      }`}
                    onClick={() => setActiveTestimonialIndex(idx)}
                  />
                ))}
              </div>

              <button
                type="button"
                className="swiper-button-custom"
                aria-label="Next slide"
                onClick={handleNextTestimonial}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Contact Form Section */}
      <section id="contact-us" className="py-16 bg-[#0b0b0f] relative z-10 border-t border-white/10">
        <ContactForm />
      </section>
    </div>
  );
}

