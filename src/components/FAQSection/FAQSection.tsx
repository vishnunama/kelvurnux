'use client';

import { useState, useRef, useEffect } from 'react';

interface FAQItemProps {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ id, question, answer, isOpen, onToggle }) => {
  const buttonId = `faq-button-${id}`;
  const panelId = `faq-answer-${id}`;

  return (
    <div className="border-b border-white/10 py-8 transition-all duration-300">
      <button
        id={buttonId}
        type="button"
        className="w-full flex items-start justify-between gap-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00ebaa] rounded-sm group cursor-pointer"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <h3 className="flex-1 text-lg sm:text-lg md:text-xl font-medium text-white">
          {question}
        </h3>
        <span
          className="flex-shrink-0 text-3xl text-white/70 transition-all duration-300 group-hover:text-white select-none"
          style={{
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? '400px' : '0px',
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? '1.5rem' : '0px',
        }}
      >
        <p className="leading-relaxed text-base sm:text-base md:text-base text-gray-300 pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
};

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs: customFaqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  const defaultFaqs: FAQ[] = [
    {
      question: 'What iGaming technology does Kvaornux provide?',
      answer:
        'Kvaornux provides technology for casino and sportsbook operations, including casino platforms, sportsbook integrations, game aggregation, player and wallet systems, back-office tools, payment integrations and custom development.',
    },
    {
      question: 'Can Kvaornux provide both casino and sportsbook technology?',
      answer:
        'Yes. Casino and sportsbook can be delivered as part of the same platform or integrated separately, depending on the operator’s existing setup and requirements.',
    },
    {
      question:
        'What is the difference between a turnkey platform and a white label solution?',
      answer:
        'A turnkey platform gives you a complete technology setup that can be configured around your business and operating model. A white label solution is designed for a faster launch using an existing platform setup, with your own brand and selected integrations.',
    },
    {
      question: 'How does Kvaornux game aggregation work?',
      answer:
        'Our game aggregation setup connects multiple game providers through a unified integration layer. This gives operators access to a broad game portfolio without having to build and maintain a separate integration for every provider.',
    },
    {
      question:
        'Can you integrate third-party game providers, payment systems and APIs?',
      answer:
        'Yes. We can integrate third-party game providers, payment services and other APIs based on the technical requirements of the project and the availability of documentation and access from the provider.',
    },
    {
      question: 'Can the platform support multiple currencies and markets?',
      answer:
        'Yes. Multi-currency and market-specific configurations can be implemented based on the project requirements, including payment methods, language support and other regional settings.',
    },
    {
      question: 'How long does it take to launch an iGaming platform?',
      answer:
        'The timeline depends on the scope of the project, required integrations and level of customization. Once the requirements are defined, we provide a project plan with the expected development, integration, testing and launch stages.',
    },
    {
      question: 'Do you provide technical support after launch?',
      answer:
        'Yes. We provide post-launch technical support for platform maintenance, integrations, issue resolution and agreed updates. The exact support scope is defined for each project.',
    },
  ];

  // Use custom faqs if provided, otherwise use default
  const faqs = customFaqs || defaultFaqs;

  useEffect(() => {
    const elements = elementsRef.current.filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#0b0b0f] py-10 md:py-20 overflow-hidden"
    >
      {/* Background Image - anchored to top with object-top to prevent shaking on accordion toggle */}
      <div className="section-bg absolute top-0 inset-x-0 h-full min-h-[900px] pointer-events-none z-0 overflow-hidden">
        <img
          width="1392"
          loading="lazy"
          alt=""
          src="/assets/faq-bg.avif"
          className="hidden md:block w-full h-full object-cover object-top opacity-70"
        />
        <img
          width="375"
          loading="lazy"
          alt=""
          src="/assets/faq-bg-mob.avif"
          className="block md:hidden w-full h-full object-cover object-top opacity-75"
        />
        {/* Gradient Filter Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #0b0b0f 0%, rgba(11,11,15,0.4) 25%, rgba(11,11,15,0.65) 75%, #0b0b0f 100%)',
          }}
        />
      </div>

      <style>{`
        @keyframes fadeInFromBottom {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        [data-anim="fade-in"] {
          opacity: 0;
        }

        [data-anim="fade-in"].visible {
          animation: fadeIn 0.6s ease-out forwards;
        }

        [data-anim="from-bottom"] {
          opacity: 0;
        }

        [data-anim="from-bottom"].visible {
          animation: fadeInFromBottom 0.6s ease-out forwards;
        }

        [data-anim-delay="1"].visible { animation-delay: 0.1s; }
        [data-anim-delay="2"].visible { animation-delay: 0.2s; }
        [data-anim-delay="3"].visible { animation-delay: 0.3s; }
        [data-anim-delay="4"].visible { animation-delay: 0.4s; }
        [data-anim-delay="5"].visible { animation-delay: 0.5s; }
      `}</style>

      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-10 text-center md:mb-20">
          <h2
            className="mb-4 text-4xl sm:text-4xl md:text-6xl font-bold text-white"
            ref={(el) => { if (el) elementsRef.current[0] = el; }}
            data-anim="from-bottom"
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-base sm:text-base md:text-lg text-gray-400"
            ref={(el) => { if (el) elementsRef.current[1] = el; }}
            data-anim="from-bottom"
            data-anim-delay="1"
          >
            All you need to know before launching with Kvaornux.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => { if (el) elementsRef.current[2 + index] = el; }}
              data-anim="fade-in"
              data-anim-delay={String((index % 5) + 1)}
            >
              <FAQItem
                id={String(index + 1)}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;