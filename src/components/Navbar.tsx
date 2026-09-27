import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface NavbarProps {
  onOpenBriefing: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBriefing }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const services = [
    { title: 'Federal Financial ERP Modernization', desc: 'Oracle Federal Financials, SAP S/4HANA Public Sector, Momentum implementations', href: '#services' },
    { title: 'OMB Circular A-123 & Audit Readiness', desc: 'Internal controls evaluation, ICOFR assessment, and audit remediation', href: '#services' },
    { title: 'IT Systems Modernization & Cloud', desc: 'Secure FedRAMP migration, microservices architecture, and legacy refactoring', href: '#services' },
    { title: 'Data Analytics & Federal Telemetry', desc: 'JFMIP-compliant reporting, automated General Ledger reconciliation pipelines', href: '#services' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/50 py-3 sm:py-3.5'
          : 'bg-black/30 backdrop-blur-sm sm:bg-transparent border-b border-white/5 sm:border-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-28 flex items-center justify-between relative">
        {/* Left: ACS Logo */}
        <div className="flex items-center shrink-0">
          <a href="#" className="flex items-center group focus:outline-none" aria-label="ACS - Accounting & Computer Solutions">
            <img
              src="/logo.svg"
              alt="ACS - Accounting & Computer Solutions Logo"
              className="h-8 sm:h-10 md:h-11 w-auto object-contain transition-transform group-hover:scale-105 duration-200 drop-shadow-sm"
            />
          </a>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center justify-center gap-1 absolute left-1/2 -translate-x-1/2" aria-label="Main Navigation">
          <a
            href="#company"
            className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2 rounded-md transition-colors hover:bg-white/5"
          >
            Company
          </a>

          {/* Services with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2 rounded-md transition-colors hover:bg-white/5 focus:outline-none"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesDropdownOpen ? 'rotate-180 text-foreground' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-96 mt-2 p-2 rounded-xl bg-zinc-950/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/80 z-50"
                >
                  <div className="p-2 border-b border-white/5 mb-1 flex items-center justify-between">
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-muted-foreground">
                      Core Federal Practice Areas
                    </span>
                    <span className="text-[10px] text-zinc-500 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      FedRAMP &amp; FISMA
                    </span>
                  </div>
                  {services.map((svc, idx) => (
                    <a
                      key={idx}
                      href={svc.href}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="block p-3 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <div className="text-sm font-medium text-foreground group-hover:text-white flex items-center justify-between">
                        <span>{svc.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-zinc-400" />
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                        {svc.desc}
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="#clients"
            className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2 rounded-md transition-colors hover:bg-white/5"
          >
            Clients
          </a>

          <a
            href="#vehicles"
            className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2 rounded-md transition-colors hover:bg-white/5"
          >
            Contract Vehicles
          </a>

          <a
            href="#careers"
            className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2 rounded-md transition-colors hover:bg-white/5"
          >
            Careers
          </a>
        </nav>

        {/* Right: CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Header CTA Button - Compact on small screens, full on desktop */}
          <motion.button
            onClick={onOpenBriefing}
            whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            className="relative group bg-[#00a3e0] hover:bg-[#00b8fc] text-white rounded-full text-xs sm:text-sm font-semibold px-3.5 py-1.5 sm:px-5 sm:py-2.5 transition-all shadow-md shadow-[#00a3e0]/25 hover:shadow-lg hover:shadow-[#00a3e0]/40 overflow-hidden shrink-0"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <span className="relative z-10 whitespace-nowrap">Schedule Briefing</span>
          </motion.button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors focus:outline-none shrink-0"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with Full-Screen App Sheet Experience */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-b border-white/10 bg-black/95 px-6 py-6 space-y-4 backdrop-blur-2xl overflow-hidden max-h-[calc(100vh-60px)] overflow-y-auto"
          >
            <div className="space-y-1.5 pt-2">
              <a
                href="#company"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-foreground py-2.5 px-3 rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors"
              >
                <span>Company</span>
                <ArrowRight className="w-4 h-4 text-zinc-500" />
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-foreground py-2.5 px-3 rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors"
              >
                <span>Services &amp; Capabilities</span>
                <ArrowRight className="w-4 h-4 text-zinc-500" />
              </a>
              <a
                href="#clients"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-foreground py-2.5 px-3 rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors"
              >
                <span>Clients &amp; Testimonials</span>
                <ArrowRight className="w-4 h-4 text-zinc-500" />
              </a>
              <a
                href="#vehicles"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-foreground py-2.5 px-3 rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors"
              >
                <span>Contract Vehicles &amp; Socioeconomic</span>
                <ArrowRight className="w-4 h-4 text-zinc-500" />
              </a>
              <a
                href="#careers"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-foreground py-2.5 px-3 rounded-xl hover:bg-white/5 active:bg-white/10 transition-colors"
              >
                <span>Careers</span>
                <ArrowRight className="w-4 h-4 text-zinc-500" />
              </a>
            </div>

            <div className="pt-4 border-t border-white/10">
              <motion.button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBriefing();
                }}
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                className="w-full bg-[#00a3e0] hover:bg-[#00b8fc] text-white rounded-full text-sm font-semibold py-3.5 hover:shadow-lg hover:shadow-[#00a3e0]/30 transition-all text-center shadow-lg shadow-[#00a3e0]/20"
              >
                Schedule Executive Briefing
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
