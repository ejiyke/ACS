import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export const CertificationsStrip: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const badges = [
    { name: 'SBA 8(a)', status: 'Certified Graduate' },
    { name: 'HUBZone', status: 'Certified Firm' },
    { name: 'SDB', status: 'Small Disadvantaged Business' },
    { name: 'LSDBE', status: 'District of Columbia' },
    { name: 'MDOT MBE / DBE / SBE', status: 'Maryland Certified' },
    { name: 'GSA MAS Schedule', status: 'Pre-vetted Partner' },
  ];

  // Repeat items so the horizontal marquee loops smoothly across all screen resolutions
  const marqueeItems = [...badges, ...badges, ...badges, ...badges];

  return (
    <section className="py-8 sm:py-10 bg-black border-y border-white/5 relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-28 mb-4 sm:mb-6 text-center">
        <h3 className="text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider sm:tracking-widest text-zinc-400">
          Federal &amp; State Procurement Qualifications / Socioeconomic Status
        </h3>
      </div>

      {/* Horizontal scrolling marquee container with gradient edge fades & hover pause */}
      <div
        className="relative w-full overflow-hidden marquee-container py-2 group"
        aria-label="Federal and State Certifications Marquee"
      >
        {/* Left gradient fade mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 sm:w-16 md:w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />

        {/* Right gradient fade mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 sm:w-16 md:w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

        {/* Marquee Track */}
        <div
          className={`${
            prefersReducedMotion ? 'flex flex-wrap justify-center' : 'animate-marquee'
          } flex items-center gap-3 sm:gap-4 md:gap-6 pl-3 sm:pl-4 will-change-transform`}
        >
          {marqueeItems.map((badge, idx) => (
            <motion.div
              key={idx}
              whileHover={prefersReducedMotion ? {} : { y: -2 }}
              transition={{ duration: 0.2 }}
              className="liquid-glass px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl border border-white/10 flex items-center gap-3 hover:border-[#38BDF8]/60 hover:brightness-110 hover:bg-white/[0.04] hover:shadow-[0_0_20px_rgba(56,189,248,0.18)] transition-all duration-300 shadow-sm group shrink-0 cursor-pointer"
            >
              <div className="p-1.5 sm:p-2 rounded-lg bg-white/[0.04] border border-white/10 group-hover:border-[#38BDF8]/40 group-hover:bg-[#00a3e0]/10 transition-colors shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#38BDF8]" />
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-[#38BDF8] transition-colors whitespace-nowrap">
                  {badge.name}
                </div>
                <div className="text-[10px] sm:text-[11px] md:text-xs text-zinc-400 font-medium whitespace-nowrap">
                  {badge.status}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
