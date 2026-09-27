import React from 'react';
import { Landmark, Shield, FileSpreadsheet, LockKeyhole, ArrowUpRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const AgencyImpactSection: React.FC = () => {
  const agencyTrackRecords = [
    {
      agency: 'U.S. Department of the Treasury',
      tag: 'Federal Financial Systems',
      outcome: 'CARARS & General Ledger Automated Reconciliation',
      detail:
        'Engineered continuous reconciliation pipelines eliminating manual journal voucher discrepancies across multi-billion-dollar fund allocations.',
      stats: '$24.8B Reconciled',
    },
    {
      agency: 'Department of Defense (DoD)',
      tag: 'Audit Readiness & ICOFR',
      outcome: 'FIAR & Standard Financial Information Structure',
      detail:
        'Prepared defense sub-agencies for Financial Improvement and Audit Readiness (FIAR) compliance, addressing critical NFRs before statutory reporting deadlines.',
      stats: 'Zero Material Findings',
    },
    {
      agency: 'Department of Homeland Security (DHS)',
      tag: 'ERP Modernization',
      outcome: 'Integrated Financial Management System Deployment',
      detail:
        'Migrated disparate operational components to a unified FedRAMP-certified core financial system with automated USSGL controls.',
      stats: '100% On-Schedule Cutover',
    },
    {
      agency: 'Department of Health & Human Services (HHS)',
      tag: 'OMB Circular A-123',
      outcome: 'Enterprise Internal Controls & Grant Oversight',
      detail:
        'Structured automated sampling and testing protocols for billions in federal grant disbursements, ensuring full DATA Act transparency.',
      stats: '99.8% Testing Accuracy',
    },
  ];

  return (
    <section id="company" className="py-28 md:py-36 px-8 md:px-28 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Landmark className="w-4 h-4 text-white" />
              <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
                Proven Track Record
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              Mission Integrity Across <br />
              <span className="font-serif italic font-normal text-zinc-300">Federal Agencies.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-md">
            Decades of technical leadership navigating federal oversight, inspector general evaluations, and statutory mandates.
          </p>
        </div>

        {/* Agency Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {agencyTrackRecords.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -2 }}
              className="liquid-glass p-8 rounded-2xl border border-white/10 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-white/10 text-white border border-white/10">
                    {item.stats}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.agency}
                </h3>
                <div className="text-sm font-medium text-zinc-300 mb-3">
                  {item.outcome}
                </div>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  Federal Compliance Verified
                </span>
                <span className="font-mono text-[11px] text-zinc-500">
                  REF: ACS-GOV-{idx + 101}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Metrics Banner */}
        <div className="liquid-glass p-8 md:p-12 rounded-2xl border border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-1">
              $50B+
            </div>
            <div className="text-xs text-muted-foreground">
              Federal Ledger Transactions Managed
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-1">
              100%
            </div>
            <div className="text-xs text-muted-foreground">
              Audit Readiness Success Rate
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-1">
              25+ Yrs
            </div>
            <div className="text-xs text-muted-foreground">
              Federal &amp; Commercial Consulting Experience
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-1">
              Clean
            </div>
            <div className="text-xs text-muted-foreground">
              Unmodified Audit Opinions Supported
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
