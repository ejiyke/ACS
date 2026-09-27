import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Calendar, Clock, CheckCircle2, Building, Mail, User, Lock } from 'lucide-react';

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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-zinc-950 border border-white/15 rounded-2xl shadow-2xl shadow-black overflow-hidden p-6 md:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Modal Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-white/10 text-white text-[11px] font-bold px-2 py-0.5 rounded border border-white/10">
                    EXECUTIVE ADVISORY
                  </span>
                  <span className="text-xs text-zinc-400 flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    Direct-to-Principal Consultation
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                  Schedule Executive Briefing
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">
                  Connect directly with Anthony T. Stevenson and the ACS GovTech leadership team to discuss federal financial systems, OMB A-123 audit readiness, or sole-source procurement.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        placeholder="jane.doe@agency.gov"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-black/60 border border-white/15 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Agency or Prime Contractor
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. U.S. Dept of Treasury / Lockheed Martin"
                        value={formData.agency}
                        onChange={(e) => setFormData({ ...formData, agency: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 bg-black/60 border border-white/15 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Focus Area / Consultation Topic
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3 py-2.5 bg-zinc-900 border border-white/15 rounded-lg text-sm text-white focus:outline-none focus:border-white/40 transition-colors"
                    >
                      <option>Federal ERP Modernization (Oracle/SAP)</option>
                      <option>OMB Circular A-123 &amp; Audit Remediation</option>
                      <option>Contract Vehicles &amp; 8(a)/HUBZone Teaming</option>
                      <option>GovCloud &amp; NIST 800-53 FISMA Architecture</option>
                      <option>General Ledger &amp; G-Invoicing Telemetry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Engagement Objectives / Scope Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your agency requirements, timeline, or solicitation details..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-3 bg-black/60 border border-white/15 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-white/40 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-zinc-500">
                    <Lock className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Strict NDA &amp; CUI safeguards apply.</span>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#00a3e0] hover:bg-[#00b8fc] text-white font-semibold text-sm px-7 py-2.5 rounded-full shadow-lg shadow-[#00a3e0]/25 hover:shadow-[#00a3e0]/40 transition-all active:scale-[0.98]"
                  >
                    Confirm Briefing Request
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#00a3e0]/10 border border-[#00a3e0]/30 text-[#00a3e0] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Briefing Request Logged
              </h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Thank you, <strong className="text-white">{formData.name}</strong>. The ACS Executive Office has received your request for <strong className="text-white">{formData.agency}</strong> regarding <span className="text-zinc-300">{formData.topic}</span>. We will follow up within 4 business hours to coordinate calendars.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="bg-[#00a3e0] hover:bg-[#00b8fc] text-white font-semibold text-sm px-8 py-2.5 rounded-full shadow-md shadow-[#00a3e0]/25 transition-all active:scale-[0.98]"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
