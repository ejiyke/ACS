import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, CheckCircle2, Building, Mail, User, Lock, Calendar, Clock } from 'lucide-react';

interface BriefingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BriefingModal: React.FC<BriefingModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agency: '',
    topic: 'Federal ERP Modernization (Oracle/SAP)',
    clearance: 'Public Trust / Sensitive',
    preferredDate: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-zinc-950 border border-white/15 rounded-2xl shadow-2xl shadow-black p-5 sm:p-6 md:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Modal Header */}
              <div className="mb-5 sm:mb-6 pr-8">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="bg-white/10 text-white text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded border border-white/10">
                    EXECUTIVE ADVISORY
                  </span>
                  <span className="text-[11px] sm:text-xs text-zinc-400 flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    Direct-to-Principal Consultation
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-tight">
                  Schedule Executive Briefing
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                  Connect directly with Anthony T. Stevenson and the ACS GovTech leadership team to discuss federal financial systems, OMB A-123 audit readiness, or sole-source procurement.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Full Name &amp; Title
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jane Doe, Branch Chief"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-black/60 border border-white/15 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Official Email (.gov / .mil / corporate)
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                      <input
                        type="email"
                        required
                        placeholder="name@agency.gov"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-black/60 border border-white/15 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Agency / Department / Organization
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dept of Veterans Affairs"
                        value={formData.agency}
                        onChange={(e) => setFormData({ ...formData, agency: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-black/60 border border-white/15 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Practice Focus Area
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3 py-2.5 bg-black/60 border border-white/15 rounded-lg text-sm text-white focus:outline-none focus:border-white/40 transition-colors"
                    >
                      <option value="Federal ERP Modernization (Oracle/SAP)">Federal ERP Modernization</option>
                      <option value="OMB Circular A-123 Audit Readiness">OMB Circular A-123 Audit Readiness</option>
                      <option value="GovCloud & Microservices Migration">GovCloud &amp; Microservices Migration</option>
                      <option value="Direct Sole-Source 8(a) / HUBZone Award">Direct Sole-Source 8(a) / HUBZone Award</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Mission Requirements &amp; Scope Overview
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your agency requirements, current legacy systems, and targeted program milestones..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-3 bg-black/60 border border-white/15 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
                  <div className="flex items-center gap-1.5 self-start sm:self-auto">
                    <Lock className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span>GovTech Confidentiality Guaranteed</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#00a3e0] hover:bg-[#00b8fc] text-white font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-[#00a3e0]/25 transition-all text-center"
                  >
                    Confirm Briefing Request
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-8 sm:py-12">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 text-emerald-400">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Executive Briefing Request Received
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto mb-6 leading-relaxed">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>. An executive partner from the ACS leadership office will reach out to <span className="text-white font-semibold">{formData.email}</span> within 1 business day.
              </p>
              <button
                onClick={handleReset}
                className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors"
              >
                Close Window
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
