import React, { useState } from 'react';
import { servicesData } from '../data/websiteData';
import { Building2, TrendingUp, ShieldCheck, ArrowRight, Check, X, Sparkles } from 'lucide-react';

const iconMap = {
  Building2: Building2,
  TrendingUp: TrendingUp,
  ShieldCheck: ShieldCheck
};

export default function ServicesSection({ onOpenContact }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      {/* Subtle Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="window-slide-left inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-50 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            Comprehensive Real Estate Solutions
          </div>
          <h2 className="window-slide-left font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-1">
            Our Expertise
          </h2>
          <div className="window-slide-left w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mt-4 rounded-full" />
          <p className="window-slide-right delay-100 mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            At Anand Realty, we focus on what matters most — delivering measurable real estate solutions, safeguarding client investments, and unlocking prime residential and commercial opportunities across India.
          </p>
        </div>

        {/* 3-Column Services Grid with Treysta-Style Sliding Windows */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Building2;
            const slideClass = 
              index === 0 
                ? 'window-slide-left delay-150' 
                : index === 1 
                ? 'window-slide-up delay-250' 
                : 'window-slide-right delay-350';

            return (
              <div
                key={service.id}
                className={`${slideClass} card-shine group relative rounded-2xl bg-white border border-slate-200/90 hover:border-gold-400/90 overflow-hidden flex flex-col justify-between shadow-sm cursor-pointer`}
                onClick={() => setSelectedService(service)}
              >
                {/* Image Container with Dynamic Zoom */}
                <div className="relative h-60 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-[0.96]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Floating Luxury Icon with Micro-Elevation */}
                  <div className="absolute bottom-4 left-6 p-3.5 rounded-xl bg-white/95 border border-gold-300 text-gold-600 shadow-md backdrop-blur-md group-hover:bg-gold-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold-700 block">
                      {service.subtitle}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-1 group-hover:text-gold-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Feature Checkmarks */}
                    <div className="mt-6 space-y-2.5">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                          <Check className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link with Sliding Arrow */}
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service);
                      }}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-700 group-hover:text-gold-800 transition-colors"
                    >
                      <span>LEARN MORE</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                    </button>
                    <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                      Advisory
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Advisory Banner with Gold Gradient Accent */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-white via-gold-50/30 to-white border border-gold-300/70 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-lg transition-shadow">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
              Need Tailored Real Estate Consultation or Property Shortlisting?
            </h4>
            <p className="text-sm text-slate-600 mt-1">
              Speak directly with our senior advisors regarding upcoming developer projects and commercial opportunities.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="btn-shimmer shrink-0 px-7 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:shadow-xl hover:shadow-gold-500/20 active:scale-95 transition-all"
          >
            Schedule Consultation
          </button>
        </div>

      </div>

      {/* Service Detail Modal with Animated Scale-In */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity"
            onClick={() => setSelectedService(null)}
          />
          <div className="relative z-10 w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 max-h-[90vh] overflow-y-auto animate-scale-up">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
                  {selectedService.subtitle}
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mt-0.5">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 space-y-4 text-slate-700 text-sm leading-relaxed">
              <p>{selectedService.longDesc}</p>
              
              <h4 className="font-serif text-base font-bold text-slate-900 pt-2">
                What We Deliver:
              </h4>
              <ul className="space-y-2.5">
                {selectedService.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenContact();
                }}
                className="btn-shimmer px-6 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-slate-950 text-xs font-bold uppercase tracking-wider hover:brightness-105 shadow-md transition-all"
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
