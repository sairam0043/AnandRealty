import React, { useState } from 'react';
import { servicesData } from '../data/websiteData';
import { Building2, TrendingUp, ShieldCheck, ArrowRight, Check, X } from 'lucide-react';

const iconMap = {
  Building2: Building2,
  TrendingUp: TrendingUp,
  ShieldCheck: ShieldCheck
};

export default function ServicesSection({ onOpenContact }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-24 bg-dark-900 border-b border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Comprehensive Real Estate Solutions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-warm-50 mt-2">
            Our Expertise
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-300 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-warm-300/80 text-sm sm:text-base leading-relaxed">
            At Anand Realty, we focus on what matters most — delivering measurable real estate solutions, safeguarding client investments, and unlocking prime residential and commercial opportunities across India.
          </p>
        </div>

        {/* 3-Column Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = iconMap[service.icon] || Building2;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-dark-950 border border-dark-800 hover:border-gold-400/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-gold-500/5 hover:-translate-y-1.5"
              >
                {/* Image Header with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-6 p-3 rounded-xl bg-dark-900/90 border border-gold-400/30 text-gold-400 shadow-lg backdrop-blur-md">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-400/90 block">
                      {service.subtitle}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-warm-50 mt-1">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-warm-300/80 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Feature Checkmarks */}
                    <div className="mt-6 space-y-2.5">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-warm-200">
                          <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="mt-8 pt-6 border-t border-dark-800/80 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-400 group-hover:text-gold-300 transition-colors"
                    >
                      <span>LEARN MORE</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <span className="text-[11px] text-warm-300/50">
                      Advisory
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Advisory Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-dark-850 via-dark-900 to-dark-850 border border-gold-400/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-warm-50">
              Need Tailored Portfolio Advisory or Off-Market Access?
            </h4>
            <p className="text-sm text-warm-300/80 mt-1">
              Speak directly with our senior directors regarding pre-launch inventory and bulk floor acquisitions.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="shrink-0 px-6 py-3 rounded-lg bg-gold-400 text-dark-950 font-bold text-xs uppercase tracking-wider hover:bg-gold-300 transition-colors"
          >
            Schedule Consultation
          </button>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          />
          <div className="relative z-10 w-full max-w-2xl bg-dark-900 border border-dark-700 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-dark-800">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                  {selectedService.subtitle}
                </span>
                <h3 className="font-serif text-2xl font-bold text-warm-50 mt-0.5">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 rounded-lg bg-dark-800 text-warm-300 hover:text-warm-50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 space-y-4 text-warm-300 text-sm leading-relaxed">
              <p>{selectedService.longDesc}</p>
              
              <h4 className="font-serif text-base font-semibold text-warm-100 pt-2">
                What We Deliver:
              </h4>
              <ul className="space-y-2">
                {selectedService.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span className="text-warm-200">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-dark-800 flex justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2.5 rounded-lg border border-dark-700 text-xs font-semibold uppercase tracking-wider text-warm-300 hover:text-warm-100"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenContact();
                }}
                className="px-6 py-2.5 rounded-lg bg-gold-400 text-dark-950 text-xs font-bold uppercase tracking-wider hover:bg-gold-300 transition-colors"
              >
                Inquire About This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

