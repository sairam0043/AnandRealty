import React from 'react';
import { ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

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
          Built on Loyalty, Transparency & Trust
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

        {/* Official Verification Badge */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 w-full flex justify-center">
          <div className="inline-flex items-center gap-4 px-6 py-3.5 rounded-2xl bg-white/95 border border-slate-200/90 shadow-md shadow-slate-200/50 backdrop-blur-sm hover:border-gold-400/80 transition-all">
            {/* Real Badge Shield Emblem */}
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white shadow-md shadow-emerald-600/25 shrink-0 border border-emerald-400/50">
              <ShieldCheck className="w-6 h-6 text-white" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-gold-400 border-2 border-white flex items-center justify-center text-[9px] font-black text-slate-950">
                ✓
              </div>
            </div>

            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold tracking-widest uppercase text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-md">
                  RERA VERIFIED
                </span>
                <span className="text-[11px] text-slate-400 font-medium">•</span>
                <span className="text-[11px] text-slate-500 font-semibold tracking-wider uppercase">
                  Govt. of India Act Compliant
                </span>
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                100% Verified Listings & Approved Documentation
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
