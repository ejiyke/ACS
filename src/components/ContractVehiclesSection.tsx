import React, { useState } from 'react';
import { ShieldCheck, Award, FileText, Check, Copy, ExternalLink, Building2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export const ContractVehiclesSection: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(label);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const certifications = [
    {
      name: 'SBA 8(a)',
      status: 'Certified Graduate',
      description: 'Streamlined federal sole-source and competitive small business contracting vehicle eligibility.',
      badgeColor: 'bg-white text-black',
    },
    {
      name: 'HUBZone',
      status: 'Certified Firm',
      description: 'Historically Underutilized Business Zone federal contracting preferences and set-asides.',
      badgeColor: 'bg-white text-black',
    },
    {
      name: 'SDB',
      status: 'Small Disadvantaged Business',
      description: 'SBA certified Small Disadvantaged Business offering subcontracting credit to prime integrators.',
      badgeColor: 'bg-white text-black',
    },
    {
      name: 'LSDBE',
      status: 'District of Columbia',
      description: 'Local Small Disadvantaged Business Enterprise certified with the D.C. Department of Small and Local Business.',
      badgeColor: 'bg-white text-black',
    },
    {
      name: 'MDOT MBE / DBE / SBE',
      status: 'Maryland Certified',
      description: 'Minority Business Enterprise and Disadvantaged Business Enterprise certified by MDOT.',
      badgeColor: 'bg-white text-black',
    },
    {
      name: 'GSA MAS Schedule',
      status: 'Contract Holder Eligible',
      description: 'Multiple Award Schedule pre-negotiated rates for federal financial & IT advisory services.',
      badgeColor: 'bg-white text-black',
    },
  ];

  const naicsCodes = [
    { code: '541512', desc: 'Computer Systems Design Services (Primary)' },
    { code: '541211', desc: 'Offices of Certified Public Accountants' },
    { code: '541611', desc: 'Administrative Management and General Management Consulting' },
    { code: '541519', desc: 'Other Computer Related Services' },
    { code: '541511', desc: 'Custom Computer Programming Services' },
    { code: '541219', desc: 'Other Accounting Services' },
    { code: '541618', desc: 'Other Management Consulting Services' },
    { code: '541513', desc: 'Computer Facilities Management Services' },
  ];

  return (
    <section id="vehicles" className="py-14 sm:py-20 md:py-36 px-4 sm:px-8 md:px-28 bg-black relative border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-white/[0.015] blur-[100px] sm:blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-zinc-400 uppercase">
                Procurement &amp; Vehicles
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              Socioeconomic Status &amp; <br />
              <span className="font-serif italic font-normal text-zinc-300">Contract Vehicles.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-md">
            ACS provides Contracting Officers and Prime Integrators with proven, streamlined acquisition channels to meet agency socioeconomic goals with zero friction.
          </p>
        </div>

        {/* Certifications Horizontal Auto-Scrolling Track with Stop-on-Hover */}
        <div
          className="relative w-full overflow-hidden marquee-container mb-12 sm:mb-16 py-2 group"
          aria-label="Contract Vehicles and Socioeconomic Certifications Track"
        >
          {/* Left and Right Fade Gradients */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 sm:w-16 md:w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 sm:w-16 md:w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

          <div
            className={`${
              prefersReducedMotion ? 'flex flex-wrap justify-center' : 'animate-marquee-slow'
            } flex items-stretch gap-4 sm:gap-5 pl-3 sm:pl-4 will-change-transform`}
          >
            {[...certifications, ...certifications].map((cert, idx) => (
              <div
                key={idx}
                className="liquid-glass p-5 sm:p-6 rounded-xl border border-white/10 flex flex-col justify-between w-[280px] sm:w-[340px] md:w-[380px] shrink-0 hover:border-brand-cyan/40 hover:bg-white/[0.04] transition-all duration-300 group cursor-pointer shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                    <span className={`text-[11px] sm:text-xs font-bold px-2.5 py-0.5 sm:py-1 rounded-md ${cert.badgeColor}`}>
                      {cert.name}
                    </span>
                    <span className="text-[11px] sm:text-xs font-medium text-zinc-400">
                      {cert.status}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1.5 sm:mb-2 group-hover:text-brand-cyan transition-colors">
                    {cert.name} Certification
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>
                <div className="pt-3.5 sm:pt-4 mt-3.5 sm:mt-4 border-t border-white/5 flex items-center gap-1.5 text-[10px] sm:text-[11px] text-zinc-400">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Verified Prime &amp; Subcontractor Ready</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NAICS Codes & Company Identifiers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Identifiers Card */}
          <div className="lg:col-span-4 liquid-glass p-5 sm:p-7 rounded-2xl border border-white/10 flex flex-col justify-between space-y-5 sm:space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  Corporate Identifiers
                </h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                Accounting &amp; Computer Solutions, Inc. is registered and active in SAM.gov for all civilian and defense contracting.
              </p>

              <div className="space-y-2.5 sm:space-y-3">
                <div className="p-3 sm:p-3.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
                      Legal Entity Name
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-white mt-0.5">
                      Accounting &amp; Computer Solutions, Inc.
                    </div>
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
                      SAM.gov Unique Entity ID (UEI)
                    </div>
                    <div className="text-xs sm:text-sm font-mono font-medium text-white mt-0.5">
                      ACS-GOV-9824X
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard('ACS-GOV-9824X', 'UEI')}
                    className="p-1.5 rounded hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                    title="Copy UEI"
                  >
                    {copiedCode === 'UEI' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-3 sm:p-3.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
                      CAGE Code
                    </div>
                    <div className="text-xs sm:text-sm font-mono font-medium text-white mt-0.5">
                      3Y7B2
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard('3Y7B2', 'CAGE')}
                    className="p-1.5 rounded hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                    title="Copy CAGE"
                  >
                    {copiedCode === 'CAGE' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="p-3 sm:p-3.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
                      Headquarters
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-white mt-0.5">
                      Washington, D.C. Metropolitan Area
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 sm:pt-4 border-t border-white/5 text-[10px] sm:text-[11px] text-zinc-500">
              Direct award and sole source capability available under federal small business programs.
            </div>
          </div>

          {/* NAICS Table */}
          <div className="lg:col-span-8 liquid-glass p-5 sm:p-7 rounded-2xl border border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  Primary NAICS Codes
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Registered North American Industry Classification System designations.
                </p>
              </div>
              <span className="self-start sm:self-auto text-[11px] sm:text-xs font-mono text-zinc-400 px-2.5 py-1 rounded bg-white/5 border border-white/10">
                8 Active Codes
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mt-4">
              {naicsCodes.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors flex items-start justify-between gap-3 group"
                >
                  <div>
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-white tracking-wide bg-white/10 px-2 py-0.5 rounded">
                      {item.code}
                    </span>
                    <p className="text-xs text-zinc-300 font-medium mt-1.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(item.code, item.code)}
                    className="opacity-70 sm:opacity-0 group-hover:opacity-100 p-1.5 rounded hover:bg-white/10 text-zinc-400 hover:text-white transition-opacity shrink-0"
                    title={`Copy NAICS ${item.code}`}
                  >
                    {copiedCode === item.code ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
