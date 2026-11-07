import React from 'react';
import { siteConfig } from '../data/websiteData';
import { ArrowUpRight, Phone, MapPin, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-slate-100">
      {/* Background Image / Ambient Light Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury Real Estate and Architecture"
          className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.02]"
        />
        {/* Soft Luminous Overlays for High Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-white/80 to-white/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/60 via-white/40 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 lg:py-28 text-center flex flex-col items-center">
        {/* Luxury Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-gold-500/40 backdrop-blur-md mb-6 shadow-sm shadow-gold-500/10">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span className="text-xs font-bold tracking-widest uppercase text-gold-700">
            Premier Real Estate Advisory • India
          </span>
        </div>

        {/* Brand Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 max-w-5xl leading-none">
          ANAND <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-gold-500 to-gold-700">REALTY</span>
        </h1>

        {/* Tagline */}
        <p className="mt-4 sm:mt-6 text-lg sm:text-2xl font-serif text-slate-800 tracking-wide font-medium">
          {siteConfig.tagline}
        </p>

        {/* Subtitle / Value Proposition */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl font-normal leading-relaxed">
          Your trusted real estate partner in India, delivering transparent property solutions, premium residential homes, luxury villas, and commercial real estate guidance.
        </p>

        {/* Call to Actions */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-4 rounded-md bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-slate-950 font-bold text-sm tracking-wider uppercase hover:shadow-xl hover:shadow-gold-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-4 h-4 text-slate-950" />
          </button>

          <button
            onClick={() => scrollToSection('services')}
            className="w-full sm:w-auto px-8 py-4 rounded-md bg-white border border-slate-300 text-slate-800 font-bold text-sm tracking-wider uppercase hover:bg-slate-50 hover:border-gold-500 hover:text-gold-700 shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <span>LEARN MORE</span>
          </button>
        </div>

        {/* Trust Points / Highlights */}
        <div className="mt-14 pt-10 border-t border-slate-200/80 w-full grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl text-left">
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/95 border border-slate-200 shadow-sm backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-gold-50 text-gold-600 border border-gold-200/60">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Headquarters</div>
              <div className="text-sm font-bold text-slate-800 mt-0.5">India</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/95 border border-slate-200 shadow-sm backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-gold-50 text-gold-600 border border-gold-200/60">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Advisory Line</div>
              <a href={`tel:${siteConfig.phone}`} className="text-sm font-bold text-slate-800 hover:text-gold-600 transition-colors mt-0.5 block">
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/95 border border-slate-200 shadow-sm backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-gold-50 text-gold-600 border border-gold-200/60">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Verification</div>
              <div className="text-sm font-bold text-slate-800 mt-0.5">RERA Compliant & Verified Listings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
