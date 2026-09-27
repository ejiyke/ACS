import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion, animate } from 'framer-motion';
import {
  Briefcase,
  TrendingUp,
  Server,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface Specialty {
  number: string;
  id: string;
  title: string;
  category: string;
  summary: string;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
  deliverables: string[];
  targetAudience: string;
  impactMetric: { label: string; value: string };
  badgeText: string;
}

const specialties: Specialty[] = [
  {
    number: '01',
    id: 'management',
    title: 'Management Consulting',
    category: 'Strategy & Governance',
    summary:
      'Strategic advisory, business process reengineering, and organizational transformation aligning operations with measurable mission outcomes.',
    icon: Briefcase,
    tags: ['Strategic Advisory', 'PMP Program Mgmt', 'BPR Reengineering', 'Change Governance'],
    deliverables: [
      'Enterprise Operating Model Design',
      'Cost-Benefit & Feasibility Studies',
      'Workforce Transition Roadmaps',
      'Executive Performance Telemetry',
    ],
    targetAudience: 'Federal Agencies & Enterprise Leadership',
    impactMetric: { label: 'Operational Efficiency', value: '+40%' },
    badgeText: 'Strategy & Advisory',
  },
  {
    number: '02',
    id: 'financial',
    title: 'Financial Systems',
    category: 'ERP & Modernization',
    summary:
      'Audit-ready ERP implementations, standard general ledger automation, and OMB Circular A-123 internal controls.',
    icon: TrendingUp,
    tags: ['ERP Modernization', 'OMB A-123', 'USSGL/GAAP', 'Auto-Reconciliation'],
    deliverables: [
      'Clean Financial Audit Preparation',
      'General Ledger (USSGL) Automation',
      'Continuous Control Monitoring (ICOFR)',
      'Treasury & G-Invoicing Integrations',
    ],
    targetAudience: 'Chief Financial Officers & Comptrollers',
    impactMetric: { label: 'Audit Readiness Rate', value: '100%' },
    badgeText: 'Audit-Ready USSGL/GAAP',
  },
  {
    number: '03',
    id: 'it',
    title: 'Information Technology',
    category: 'Cloud & Infrastructure',
    summary:
      'FedRAMP-certified GovCloud architectures, Zero Trust cybersecurity enclaves, and legacy microservices refactoring.',
    icon: Server,
    tags: ['GovCloud Migration', 'Cyber & FISMA High', 'Zero-Trust Enclaves', 'DevSecOps'],
    deliverables: [
      'FedRAMP & FISMA High ATO Packages',
      'Automated DevSecOps Pipelines',
      'Legacy Microservices Refactoring',
      'Real-Time Analytics & BI Dashboards',
    ],
    targetAudience: 'CIOs, CISOs & IT Program Leads',
    impactMetric: { label: 'ATO Delivery Timeline', value: '4 Months' },
    badgeText: 'FedRAMP & Zero Trust',
  },
  {
    number: '04',
    id: 'sectors',
    title: 'Sectors & Vehicles',
    category: 'Procurement & Delivery',
    summary:
      'Streamlined sole-source contracting pathways leveraging SBA 8(a), HUBZone, and pre-competed federal contract vehicles.',
    icon: Building2,
    tags: ['Federal & Defense', 'State & Local Gov', 'Direct Sole-Source', 'SBA 8(a) / HUBZone'],
    deliverables: [
      'Direct Sole-Source Award Pathways',
      'Prime & Sub Teaming Capacity',
      'Comprehensive NAICS & GSA Schedule',
      'Rapid Task Order Onboarding',
    ],
    targetAudience: 'Contracting Officers & Prime Integrators',
    impactMetric: { label: 'Procurement Cycle', value: 'Streamlined' },
    badgeText: 'SBA 8(a) & HUBZone Direct',
  },
];

// Easing Metric Counter Component
const MetricCounter: React.FC<{ value: string; inView: boolean }> = ({ value, inView }) => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const match = value.match(/([+~]?\s*)(\d+)(\s*[%a-zA-Z]*)/);
    if (!match || prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    if (inView) {
      const prefix = match[1] || '';
      const target = parseInt(match[2], 10);
      const suffix = match[3] || '';

      const controls = animate(0, target, {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => {
          setDisplayValue(`${prefix}${Math.round(latest)}${suffix}`);
        },
      });

      return () => controls.stop();
    }
  }, [inView, value, prefersReducedMotion]);

  return <span>{displayValue}</span>;
};

// Interactive Card with Mouse-Tracking Radial Gradient Glow
const ServiceCard: React.FC<{
  item: Specialty;
  idx: number;
  isExpanded: boolean;
  onSelect: () => void;
  inView: boolean;
}> = ({ item, idx, isExpanded, onSelect, inView }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const IconComponent = item.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || prefersReducedMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => {
        setIsHovered(true);
        onSelect();
      }}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={onSelect}
      whileHover={prefersReducedMotion ? {} : { scale: 1.012 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={`relative rounded-2xl border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden cursor-pointer flex flex-col justify-between ${
        isExpanded
          ? 'lg:flex-[2.8] bg-gradient-to-b from-zinc-900/95 to-zinc-950/98 border-[#00a3e0] shadow-2xl shadow-[#00a3e0]/15 p-5 sm:p-6 md:p-8'
          : 'lg:flex-1 bg-white/[0.015] hover:bg-white/[0.035] border-white/10 hover:border-[#38bdf8]/60 p-4 sm:p-5 md:p-6'
      }`}
    >
      {/* Interactive Mouse-Tracking Radial Gradient Glow */}
      {isHovered && !prefersReducedMotion && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 rounded-2xl"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 163, 224, 0.14), transparent 80%)`,
          }}
        />
      )}

      {/* Top Glowing Gradient Accent when Expanded */}
      <div
        className={`absolute top-0 inset-x-0 h-[2px] transition-opacity duration-500 z-10 ${
          isExpanded
            ? 'opacity-100 bg-gradient-to-r from-transparent via-[#00a3e0] to-transparent'
            : 'opacity-0'
        }`}
      />

      {/* Card Content Top Section */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3.5 sm:mb-4 pb-2.5 sm:pb-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span
              className={`font-mono text-[11px] sm:text-xs font-semibold px-2 py-0.5 rounded transition-colors ${
                isExpanded
                  ? 'bg-[#00a3e0]/20 text-[#00a3e0] border border-[#00a3e0]/30'
                  : 'bg-white/5 text-zinc-500'
              }`}
            >
              {item.number}
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-zinc-400">
              {item.category}
            </span>
          </div>

          <div
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
              isExpanded
                ? 'bg-[#00a3e0] text-white border-[#00a3e0] shadow-md shadow-[#00a3e0]/30'
                : 'bg-white/5 text-zinc-400 border-white/10'
            }`}
          >
            <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
        </div>

        {/* Title */}
        <h3
          className={`font-semibold tracking-tight transition-all duration-300 mb-2 ${
            isExpanded
              ? 'text-xl sm:text-2xl md:text-3xl text-white'
              : 'text-base sm:text-lg md:text-xl text-zinc-300 group-hover:text-white'
          }`}
        >
          {item.title}
        </h3>

        {/* Badges / Pill Tag in Expanded State */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="mb-3.5 sm:mb-4 inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#00a3e0]/10 text-[#00a3e0] border border-[#00a3e0]/25"
          >
            <Sparkles className="w-3 h-3" />
            <span>{item.badgeText}</span>
          </motion.div>
        )}

        {/* Summary */}
        <p
          className={`text-zinc-400 leading-relaxed transition-all duration-300 ${
            isExpanded ? 'text-xs sm:text-sm mb-4 sm:mb-5 text-zinc-300' : 'text-xs line-clamp-2 sm:line-clamp-3'
          }`}
        >
          {item.summary}
        </p>

        {/* Detailed Deliverables Drawer with Spring Animation */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                type: 'spring',
                damping: 24,
                stiffness: 200,
              }}
              className="space-y-3.5 sm:space-y-4 mb-4 sm:mb-6 overflow-hidden"
            >
              <div>
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-zinc-400 block mb-2 font-mono">
                  Key Technical Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                  {item.deliverables.map((d, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center gap-2 p-2 rounded-lg bg-black/40 border border-white/5 text-[11px] sm:text-xs text-zinc-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00a3e0] shrink-0" />
                      <span className="truncate">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capability Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card Content Bottom / Metric Counter */}
      <div className="relative z-10 pt-3.5 sm:pt-4 border-t border-white/5 flex items-center justify-between gap-2 mt-3 sm:mt-4">
        <div className="text-xs">
          <span className="text-zinc-500 text-[10px] sm:text-[11px] block font-mono">
            {item.impactMetric.label}
          </span>
          <span
            className={`font-bold transition-colors ${
              isExpanded ? 'text-base sm:text-lg text-white font-mono' : 'text-xs sm:text-sm text-zinc-300'
            }`}
          >
            <MetricCounter value={item.impactMetric.value} inView={inView} />
          </span>
        </div>

        {isExpanded ? (
          <motion.a
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-[#00a3e0] hover:bg-[#00b8fc] text-white text-xs font-semibold px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-md shadow-[#00a3e0]/25 transition-all group shrink-0"
          >
            <span>Engage Practice</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </motion.a>
        ) : (
          <span className="text-[11px] text-zinc-500 font-mono flex items-center gap-0.5 group-hover:text-zinc-300 transition-colors">
            <span>Expand</span>
            <ArrowRight className="w-3 h-3" />
          </span>
        )}
      </div>
    </motion.div>
  );
};

export const ServicesSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const containerRef = useRef<HTMLElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={containerRef}
      id="services"
      className="py-14 sm:py-20 md:py-32 px-4 sm:px-8 lg:px-20 bg-black relative border-t border-white/5 overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[300px] sm:h-[400px] bg-[#00a3e0]/[0.025] blur-[120px] sm:blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 md:mb-14 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00a3e0] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#00a3e0] uppercase">
                Capabilities Architecture
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              Our Core Consulting <br />
              <span className="font-serif italic font-normal text-zinc-300">Specialties.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed mb-2.5 sm:mb-3">
              Integrated management strategy, audit-ready financial modernization, and secure GovCloud infrastructure tailored for public and commercial enterprise missions.
            </p>
            <div className="flex items-center gap-2 text-[11px] sm:text-xs text-zinc-500 font-mono">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00a3e0]" />
              <span>Tap or hover across practice areas to expand</span>
            </div>
          </div>
        </div>

        {/* Expandable Feature Stack */}
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-5 items-stretch min-h-[420px] lg:min-h-[520px]">
          {specialties.map((item, idx) => (
            <ServiceCard
              key={item.id}
              item={item}
              idx={idx}
              isExpanded={hoveredIndex === idx}
              onSelect={() => setHoveredIndex(idx)}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
