import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjectsSection from './components/FeaturedProjectsSection';
import CityHubsSection from './components/CityHubsSection';
import ServicesSection from './components/ServicesSection';
import CalculatorSection from './components/CalculatorSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import LeadModal from './components/LeadModal';
import FloatingActions from './components/FloatingActions';
import { useWindowSlideReveal } from './hooks/useScrollReveal';

export default function App() {
  useWindowSlideReveal();

  const [legalModalType, setLegalModalType] = useState(null); // 'privacy' | 'accessibility' | null
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [leadModalData, setLeadModalData] = useState(null);

  const handleOpenLead = (data = null) => {
    setLeadModalData(data);
    setLeadModalOpen(true);
  };

  const handleNavigate = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-gold-400 selection:text-white flex flex-col font-sans">
      {/* Navigation */}
      <Navbar 
        onOpenContact={() => handleOpenLead(null)} 
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Cinematic Video Background & Search */}
        <Hero onOpenContact={handleOpenLead} />

        {/* Featured Projects - Curated by Anand Realty (Treysta-style Carousel) */}
        <FeaturedProjectsSection onOpenContact={handleOpenLead} />

        {/* Prime City Hubs & High-Growth Corridors */}
        <CityHubsSection onOpenContact={handleOpenLead} />

        {/* Services / Our Expertise */}
        <ServicesSection onOpenContact={() => handleOpenLead(null)} />

        {/* Interactive Real Estate EMI & Investment Calculator */}
        <CalculatorSection onOpenContact={handleOpenLead} />

        {/* About Anand Realty & Core Values */}
        <AboutSection onOpenContact={() => handleOpenLead(null)} />

        {/* Dedicated Contact Section */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer 
        onOpenLegal={(type) => setLegalModalType(type)}
        onNavigate={handleNavigate}
      />

      {/* Floating CTA & WhatsApp Action Buttons */}
      <FloatingActions onOpenContact={() => handleOpenLead(null)} />

      {/* Lead Capture Modal */}
      <LeadModal 
        isOpen={leadModalOpen} 
        initialData={leadModalData}
        onClose={() => {
          setLeadModalOpen(false);
          setLeadModalData(null);
        }} 
      />

      {/* Legal & Policy Modal (Privacy Policy & Accessibility Statement) */}
      <LegalModal 
        type={legalModalType} 
        onClose={() => setLegalModalType(null)} 
      />
    </div>
  );
}
