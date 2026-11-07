import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickContactBar from './components/QuickContactBar';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import LeadModal from './components/LeadModal';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [legalModalType, setLegalModalType] = useState(null); // 'privacy' | 'accessibility' | null
  const [leadModalOpen, setLeadModalOpen] = useState(false);

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
        onOpenContact={() => setLeadModalOpen(true)} 
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenContact={() => setLeadModalOpen(true)} />

        {/* Quick Contact / Requirement Submission Bar */}
        <QuickContactBar />

        {/* Services / Our Expertise */}
        <ServicesSection onOpenContact={() => setLeadModalOpen(true)} />

        {/* About Anand Realty & Core Values */}
        <AboutSection onOpenContact={() => setLeadModalOpen(true)} />

        {/* Dedicated Contact Section */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer 
        onOpenLegal={(type) => setLegalModalType(type)}
        onNavigate={handleNavigate}
      />

      {/* Floating CTA & WhatsApp Action Buttons */}
      <FloatingActions onOpenContact={() => setLeadModalOpen(true)} />

      {/* Lead Capture Modal */}
      <LeadModal 
        isOpen={leadModalOpen} 
        onClose={() => setLeadModalOpen(false)} 
      />

      {/* Legal & Policy Modal (Privacy Policy & Accessibility Statement) */}
      <LegalModal 
        type={legalModalType} 
        onClose={() => setLegalModalType(null)} 
      />
    </div>
  );
}
