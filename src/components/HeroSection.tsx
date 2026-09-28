import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onExploreServices?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreServices,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Scroll driven transforms for Hero Text and Dashboard Showcase
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const heroTextY = useTransform(
    scrollYProgress,
    [0, 0.45],
    prefersReducedMotion ? [0, 0] : [0, -100]
  );
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  const dashboardY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -24]
  );
  const dashboardScale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [1, 1] : [1, 0.99]
  );

  const headlineWords = [
    'Empowering',
    'Public',
    '&',
    'Private',
    'Sectors',
    'Through',
    'Technology',
    'and',
    'Financial',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-background pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6"
      id="hero"
    >
      {/* Ambient background cyan radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[1000px] h-[350px] sm:h-[450px] bg-brand-cyan/[0.05] blur-[100px] sm:blur-[140px] pointer-events-none rounded-full" />

      {/* Hero Content Area */}
      <motion.div
        style={{ y: heroTextY, opacity: heroTextOpacity }}
        className="flex flex-col items-center text-center mt-4 sm:mt-8 md:mt-12 px-2 sm:px-4 relative z-20 max-w-5xl mx-auto"
      >
        {/* 1. Tag Pill */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full liquid-glass border border-white/10 mb-5 sm:mb-6 shadow-sm max-w-full"
        >
          <span className="w-2 h-2 rounded-full bg-[#00a3e0] animate-pulse shrink-0" />
          <span className="text-[11px] sm:text-xs md:text-sm font-medium text-zinc-300 tracking-wide truncate">
            Mission-Critical Federal &amp; Commercial Consulting
          </span>
        </motion.div>

        {/* 2. Headline with Word Stagger & Glowing Accent Word */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-[28px] leading-[1.2] sm:text-4xl md:text-6xl lg:text-7xl tracking-tight font-medium sm:leading-[1.14] mb-5 sm:mb-6 text-foreground max-w-4xl flex flex-wrap justify-center gap-x-[0.25em] sm:gap-x-[0.3em] gap-y-0.5 sm:gap-y-1"
        >
          {headlineWords.map((word, idx) => (
            <motion.span
              key={idx}
              variants={wordVariants}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            variants={wordVariants}
            className="inline-block font-serif italic font-normal text-white relative group"
          >
            <motion.span
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      textShadow: [
                        '0 0 0px rgba(0,163,224,0)',
                        '0 0 24px rgba(56,189,248,0.7)',
                        '0 0 8px rgba(0,163,224,0.3)',
                      ],
                    }
              }
              transition={{
                duration: 2.4,
                delay: 1.1,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
              className="relative z-10"
            >
              Ingenuity.
            </motion.span>
          </motion.span>
        </motion.h1>

        {/* 3. Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: 'hsl(var(--hero-subtitle))' }}
          className="text-sm sm:text-base md:text-lg font-normal leading-relaxed opacity-90 mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl text-center px-1"
        >
          Integrating IT strategy, financial systems modernization, project management, and business process transformation to deliver mission-critical results.
        </motion.p>

        {/* 4. Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full sm:w-auto flex items-center justify-center"
        >
          <motion.a
            href="#services"
            onClick={onExploreServices}
            whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            className="w-full sm:w-auto relative group inline-flex items-center justify-center gap-2 bg-[#00a3e0] hover:bg-[#00b8fc] text-white rounded-full px-7 sm:px-8 py-3.5 text-sm sm:text-base font-semibold shadow-xl shadow-[#00a3e0]/25 hover:shadow-2xl hover:shadow-[#00a3e0]/40 transition-all overflow-hidden"
          >
            {/* Ambient energetic button pulse */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <span className="relative z-10">Explore Our Services</span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-0.5" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Enterprise Architecture Visual & Parallax Video Area */}
      <div className="w-full relative mt-6 sm:mt-10 md:mt-14 overflow-hidden rounded-2xl sm:rounded-3xl max-w-6xl mx-auto px-2 sm:px-6 md:px-12 py-10 sm:py-16 md:py-20 flex items-center justify-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-65 pointer-events-none filter contrast-125 saturate-110"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
        />

        {/* Ambient Top & Bottom Blends on Video (Behind Dashboard) */}
        <div className="absolute top-0 inset-x-0 h-10 sm:h-16 bg-gradient-to-b from-background/90 via-background/40 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-12 sm:h-20 bg-gradient-to-t from-background via-background/50 to-transparent z-10 pointer-events-none" />

        {/* Hero System Dashboard Graphic with Parallax & Scale */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ y: dashboardY, scale: dashboardScale }}
          className="w-[92%] sm:w-[86%] md:w-[80%] lg:w-[76%] max-w-4xl relative z-20 group"
        >
          <div className="rounded-xl sm:rounded-2xl border border-white/20 shadow-2xl overflow-hidden bg-black/60 backdrop-blur-md p-1 sm:p-1.5 ring-1 ring-white/10">
            <img
              src="/hero-dashboard.png"
              alt="ACS Enterprise Architecture & Systems Dashboard"
              className="w-full h-auto rounded-lg sm:rounded-xl block object-contain shadow-inner"
              style={{ mixBlendMode: 'luminosity' }}
            />
          </div>
          {/* Subtle glow border around dashboard */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan/25 via-white/10 to-brand-cyan/20 rounded-xl sm:rounded-2xl blur-xl opacity-60 -z-10 group-hover:opacity-90 transition-opacity" />
        </motion.div>
      </div>
    </section>
  );
};
