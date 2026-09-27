import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CertificationsStrip } from './components/CertificationsStrip';
import { ServicesSection } from './components/ServicesSection';
import { AcsEdgeSection } from './components/AcsEdgeSection';
import { TestimonialSection } from './components/TestimonialSection';
import { ContractVehiclesSection } from './components/ContractVehiclesSection';
import { Footer } from './components/Footer';
import { BriefingModal } from './components/BriefingModal';

export const App: React.FC = () => {
  const [briefingModalOpen, setBriefingModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-foreground antialiased selection:bg-white selection:text-black">
      {/* Executive Navigation */}
      <Navbar onOpenBriefing={() => setBriefingModalOpen(true)} />

      {/* Main Landing Content */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onExploreServices={() => scrollToSection('services')}
        />

        {/* Socioeconomic & Certifications Strip */}
        <CertificationsStrip />

        {/* Core Specialties & Capabilities */}
        <ServicesSection />

        {/* The ACS Edge: Solutions That Work in Practice */}
        <AcsEdgeSection />

        {/* Executive Statement & Testimonial */}
        <TestimonialSection />

        {/* Contract Vehicles & Corporate Identifiers */}
        <ContractVehiclesSection />
      </main>

      {/* Executive Footer */}
      <Footer />

      {/* Interactive Consultation / Briefing Modal */}
      <BriefingModal
        isOpen={briefingModalOpen}
        onClose={() => setBriefingModalOpen(false)}
      />
    </div>
  );
};

export default App;
