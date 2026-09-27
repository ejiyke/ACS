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
    prefersReducedMotion ? [0, 0] : [0, -120]
  );
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

  const dashboardY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [0, -180]
  );
  const dashboardScale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [1, 1] : [1, 0.98]
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
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 28 },
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
      className="relative w-full overflow-hidden bg-background pt-20 pb-16 md:pt-24 md:pb-24"
      id="hero"
    >
      {/* Ambient background cyan radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-brand-cyan/[0.05] blur-[140px] pointer-events-none rounded-full" />

      {/* Hero Content Area */}
      <motion.div
        style={{ y: heroTextY, opacity: heroTextOpacity }}
        className="flex flex-col items-center text-center mt-10 md:mt-16 px-4 relative z-20 max-w-5xl mx-auto"
      >
        {/* 1. Tag Pill */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass border border-white/10 mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#00a3e0] animate-pulse" />
          <span className="text-xs md:text-sm font-medium text-zinc-300 tracking-wide">
            Mission-Critical Federal &amp; Commercial Consulting
          </span>
        </motion.div>

        {/* 2. Headline with Word Stagger & Glowing Accent Word */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-2px] font-medium leading-[1.15] md:leading-[1.12] mb-6 text-foreground max-w-4xl flex flex-wrap justify-center gap-x-[0.3em] gap-y-1"
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

        {/* 3. Subtitle (Fade in with 0.2s delay) */}
        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: 'hsl(var(--hero-subtitle))' }}
          className="text-base md:text-lg font-normal leading-relaxed opacity-90 mb-8 max-w-3xl text-center"
        >
          Integrating IT strategy, financial systems modernization, project management, and business process transformation to deliver mission-critical results.
        </motion.p>

        {/* 4. Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <motion.a
            href="#services"
            onClick={onExploreServices}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative group inline-flex items-center justify-center gap-2 bg-[#00a3e0] hover:bg-[#00b8fc] text-white rounded-full px-8 py-3.5 text-base font-semibold shadow-xl shadow-[#00a3e0]/25 hover:shadow-2xl hover:shadow-[#00a3e0]/40 transition-all overflow-hidden"
          >
            {/* Ambient energetic button pulse */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <span className="relative z-10">Explore Our Services</span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-0.5" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Enterprise Architecture Visual & Parallax Video Area */}
      <div
        className="w-screen relative aspect-[16/9] -mt-4 md:-mt-6"
        style={{ marginLeft: 'calc(-50vw + 50%)' }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-45 pointer-events-none filter contrast-125"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
        />

        {/* Hero System Dashboard Graphic with Parallax & Scale */}
        <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ y: dashboardY, scale: dashboardScale }}
            className="max-w-5xl w-[90%] relative group"
          >
            <div className="rounded-2xl border border-white/10 shadow-2xl overflow-hidden bg-black/40 backdrop-blur-sm p-1.5 ring-1 ring-white/10">
              <img
                src="/hero-dashboard.png"
                alt="ACS Enterprise Architecture & Systems Dashboard"
                className="w-full h-auto rounded-xl object-cover"
                style={{ mixBlendMode: 'luminosity' }}
              />
            </div>
            {/* Subtle glow border around dashboard */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan/20 via-white/5 to-brand-cyan/15 rounded-2xl blur-xl opacity-50 -z-10 group-hover:opacity-80 transition-opacity" />
          </motion.div>
        </div>

        {/* Bottom Fade Gradient */}
        <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-black via-black/80 to-transparent z-30 pointer-events-none" />
      </div>
    </section>
  );
};
