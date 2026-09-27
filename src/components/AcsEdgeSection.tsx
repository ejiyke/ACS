import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Award, ShieldCheck, Cpu, Sparkles } from 'lucide-react';

export const AcsEdgeSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [-40, 40]
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [0, 0] : [20, -20]
  );

  const pillars = [
    {
      icon: <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#00a3e0]" />,
      badge: 'Talent & Rigor',
      title: 'Intellectual Capital',
      desc: 'A multidisciplinary team of cleared engineers, CPAs, PMPs, and financial systems architects dedicated to execution integrity.',
      stat: '25+ Yrs Leadership',
    },
    {
      icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#00a3e0]" />,
      badge: 'Proven Practice',
      title: 'Deep Domain Expertise',
      desc: 'Dozens of successful compliance audits, ERP migrations, and architecture transformations completed for civilian & defense clients.',
      stat: '100% Unmodified Audits',
    },
    {
      icon: <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-[#00a3e0]" />,
      badge: 'Modern Architecture',
      title: 'State-of-the-Art Technology',
      desc: 'Bridging modern secure cloud models, automated data pipelines, and real-time telemetry with legacy enterprise frameworks.',
      stat: 'Zero Trust & FedRAMP',
    },
  ];

  return (
    <section
      ref={containerRef}
      id="company"
      className="relative py-14 sm:py-20 md:py-36 px-4 sm:px-8 md:px-28 bg-black overflow-hidden border-t border-white/5"
    >
      {/* Background Layer: Atmospheric Glowing Glass Flowers Artwork */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none opacity-20 sm:opacity-30 mix-blend-screen"
      >
        <img
          src="/dark-botanical-bg.jpg"
          alt="Ethereal Glass Flowers Ambient Artwork"
          className="w-full h-full object-cover object-center filter contrast-125 brightness-90"
        />
        {/* Soft dark vignetting & gradient overlays for flawless readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </motion.div>

      {/* Ambient Blue Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] sm:w-[800px] h-[300px] sm:h-[400px] bg-[#00a3e0]/[0.04] blur-[100px] sm:blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Header Section */}
        <motion.div
          style={{ y: contentY }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 md:mb-20 px-2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full liquid-glass border border-white/10 mb-4 sm:mb-6 shadow-sm">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00a3e0]" />
            <span className="text-[11px] sm:text-xs md:text-sm font-medium text-zinc-300 tracking-wide">
              The ACS Edge
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight mb-4 sm:mb-6">
            Solutions That Work Not Only in Theory, <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-zinc-300">
              But in Practice.
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-zinc-300 leading-relaxed font-normal max-w-2xl mx-auto">
            At ACS, we believe that true transformation happens at the intersection of intellectual capital, deep domain expertise, and state-of-the-art technology. We do not just design strategies; we construct the operational infrastructure to execute them flawlessly.
          </p>
        </motion.div>

        {/* Dynamic 3-Pillar Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              whileHover={prefersReducedMotion ? {} : { y: -4, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="liquid-glass p-5 sm:p-6 md:p-7 rounded-2xl border border-white/10 hover:border-[#00a3e0]/40 transition-all duration-300 group shadow-lg flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle cyan glow line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#00a3e0] transition-colors" />

              <div>
                <div className="flex items-center justify-between gap-3 mb-4 sm:mb-6">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/10 group-hover:bg-[#00a3e0]/10 group-hover:border-[#00a3e0]/30 transition-colors">
                    {pillar.icon}
                  </div>
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/5 text-zinc-400 border border-white/5">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-white transition-colors mb-2 sm:mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              {/* Bottom metric highlight */}
              <div className="border-t border-white/5 pt-4 sm:pt-5 mt-5 sm:mt-6 flex items-center justify-between">
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-[#00a3e0]">
                    {pillar.stat}
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono mt-0.5">
                    Verified Metric
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
