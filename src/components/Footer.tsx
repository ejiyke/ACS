import React from 'react';
import { Shield, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 text-muted-foreground relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-28 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="sm:col-span-2 space-y-3.5 sm:space-y-4">
            <a href="#" className="inline-block group focus:outline-none" aria-label="ACS - Accounting & Computer Solutions">
              <img
                src="/logo.svg"
                alt="ACS - Accounting & Computer Solutions Logo"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
              />
            </a>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              Delivering high-performance IT and financial strategy consulting to federal, state, and commercial clients nationwide.
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1 text-[11px] sm:text-xs text-zinc-500 font-mono">
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400">
                CAGE: 3Y7B2
              </span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400">
                UEI: ACS-GOV-9824X
              </span>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Specialties
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Management Consulting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Financial Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Information Technology
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Sectors &amp; Vehicles
                </a>
              </li>
            </ul>
          </div>

          {/* Vehicles Col */}
          <div className="space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Contract Vehicles
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#vehicles" className="hover:text-white transition-colors">
                  SBA 8(a) Graduate
                </a>
              </li>
              <li>
                <a href="#vehicles" className="hover:text-white transition-colors">
                  HUBZone Certified Firm
                </a>
              </li>
              <li>
                <a href="#vehicles" className="hover:text-white transition-colors">
                  Small Disadvantaged Business (SDB)
                </a>
              </li>
              <li>
                <a href="#vehicles" className="hover:text-white transition-colors">
                  District of Columbia LSDBE
                </a>
              </li>
              <li>
                <a href="#vehicles" className="hover:text-white transition-colors">
                  MDOT Certified MBE / SDB
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Headquarters
            </h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                <span>
                  1200 G Street, NW, Suite 800<br />
                  Washington, DC 20005
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>(202) 555-0100</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>Toll-Free: (800) 555-0200</span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-[11px] text-zinc-500">
                <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Active SAM.gov Registered Entity</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} Accounting &amp; Computer Solutions, Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Engagement
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Accessibility
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors ml-1"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
