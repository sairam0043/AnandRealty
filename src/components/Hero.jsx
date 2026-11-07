import React from 'react';
import { siteConfig } from '../data/websiteData';
import { ArrowUpRight, Phone, Mail, MapPin, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-dark-950">
      {/* Background Image / Ambient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=85"
          alt="Dubai Skyline and Luxury Real Estate"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-105"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/70 to-dark-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-400/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 lg:py-28 text-center flex flex-col items-center">
        {/* Luxury Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-900/80 border border-gold-400/30 backdrop-blur-md mb-6 shadow-xl shadow-gold-500/5 animate-pulse">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span className="text-xs font-semibold tracking-widest uppercase text-gold-400">
            Premier Real Estate Advisory • Dubai & International
          </span>
        </div>

        {/* Brand Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-warm-50 max-w-5xl leading-none">
          ANAND <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500">REALTY</span>
        </h1>

        {/* Tagline */}
        <p className="mt-4 sm:mt-6 text-lg sm:text-2xl font-serif text-warm-200 tracking-wide font-light">
          {siteConfig.tagline}
        </p>

        {/* Subtitle / Value Proposition */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-warm-300/80 max-w-3xl font-normal leading-relaxed">
          Your trusted real estate partner in Dubai, delivering transparent property solutions, exclusive off-plan developer allocations, and hands-on portfolio management for global investors and NRIs.
        </p>

        {/* Call to Actions */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-8 py-4 rounded-md bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-dark-950 font-bold text-sm tracking-wider uppercase hover:shadow-2xl hover:shadow-gold-500/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-4 h-4 text-dark-950" />
          </button>

          <button
            onClick={() => scrollToSection('services')}
            className="w-full sm:w-auto px-8 py-4 rounded-md bg-dark-900/90 border border-warm-200/20 text-warm-100 font-semibold text-sm tracking-wider uppercase hover:bg-dark-800 hover:border-gold-400/50 hover:text-gold-400 transition-all flex items-center justify-center gap-2"
          >
            <span>LEARN MORE</span>
          </button>
        </div>

        {/* Trust Points / Highlights */}
        <div className="mt-14 pt-10 border-t border-dark-800/80 w-full grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl text-left">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-dark-900/40 border border-dark-800/60 backdrop-blur-sm">
            <div className="p-2 rounded bg-gold-400/10 text-gold-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-warm-300/60 uppercase tracking-wider font-medium">Headquarters</div>
              <div className="text-sm font-semibold text-warm-100 mt-0.5">Business Bay, Dubai, UAE</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-dark-900/40 border border-dark-800/60 backdrop-blur-sm">
            <div className="p-2 rounded bg-gold-400/10 text-gold-400">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-warm-300/60 uppercase tracking-wider font-medium">Advisory Line</div>
              <a href={`tel:${siteConfig.phone}`} className="text-sm font-semibold text-warm-100 hover:text-gold-400 transition-colors mt-0.5 block">
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-dark-900/40 border border-dark-800/60 backdrop-blur-sm">
            <div className="p-2 rounded bg-gold-400/10 text-gold-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-warm-300/60 uppercase tracking-wider font-medium">Verification</div>
              <div className="text-sm font-semibold text-warm-100 mt-0.5">DLD Licensed & Escrow Protected</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

