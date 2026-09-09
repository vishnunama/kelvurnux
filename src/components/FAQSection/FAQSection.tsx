'use client';

import { useState, useRef, useEffect } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div
      className="border-b border-white/10 py-8 transition-all duration-300 cursor-pointer"
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onToggle();
        }
      }}
    >
      <div className="flex items-start justify-between gap-6">
        <h3 className="flex-1 text-lg sm:text-lg md:text-xl font-medium text-white">
          {question}
        </h3>
        <button
          className="flex-shrink-0 text-3xl text-white/70 transition-all duration-300 hover:text-white"
          style={{
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
          aria-label={isOpen ? 'Close answer' : 'Open answer'}
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          type="button"
        >
          +
        </button>
      </div>

      <div
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
      question: 'What are the advantages of working with Kvaornux?',
      answer:
        'Kvaornux is powered by a team with strong experience in building and scaling iGaming development solutions for both B2B and B2C businesses. We deliver practical strategies and proven systems that help you grow faster and operate efficiently.',
    },
    {
      question: 'What products and services does Kvaornux offer?',
      answer:
        'Kvaornux offers complete iGaming development solutions for starting a new project or upgrading an existing one. Our services include White Label development, Turnkey development, iGaming systems, turnkey sportsbook solutions, Affiliate systems, CRM tools, marketing automation, and game integration.',
    },
    {
      question: 'I am not sure which solution is right for me',
      answer:
        'No problem! You can connect with our team for a free consultation. Just click on the Contact Us button, share your requirements, and our team will guide you with the best solution based on your business goals.',
    },
    {
      question:
        'How long does it take to launch or integrate a development solution?',
      answer:
        'The timeline depends on your requirements and customization level. Basic setups can be launched quickly, while advanced solutions may take more time. After understanding your needs, we provide a clear and accurate timeline.',
    },
    {
      question:
        'Do you provide support after project launch?',
      answer:
        'Yes, Kvaornux provides full support even after launch. Our team assists you with technical issues, updates, and guidance whenever needed, ensuring smooth operation of your solution.',
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
      className="relative min-h-screen bg-black py-10 md:py-20"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-black to-black" />

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