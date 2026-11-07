import React from 'react';
import { ShieldCheck, HeartHandshake, Eye } from 'lucide-react';

export default function AboutSection({ onOpenContact }) {
  return (
    <section id="about" className="py-24 bg-dark-950 border-b border-dark-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand & Architecture Image Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Border Frame */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-gold-500/20 via-transparent to-gold-400/30 blur-sm pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden bg-dark-900 border border-dark-700 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"
                  alt="Modern Luxury Real Estate in India"
                  className="w-full h-[460px] object-cover filter brightness-95 contrast-105"
                />
                
                {/* Gradient Card Overlay with Office & Brand Focus */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-dark-950 via-dark-950/85 to-transparent">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-2">
                    Anand Realty • India
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-warm-50">
                    Built on Loyalty and Trust
                  </h3>
                  <p className="text-xs text-warm-300/80 mt-1.5 leading-relaxed">
                    Dedicated to transparent real estate solutions, trusted documentation, and client-first property advisory across India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission, Vision, and Values */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
                Who We Are
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-warm-50 mt-2 leading-tight">
                About Anand Realty
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-300 mt-4 rounded-full" />
            </div>

            <p className="text-base sm:text-lg text-warm-200 font-light leading-relaxed">
              Welcome to <strong className="text-gold-400 font-semibold">Anand Realty</strong>, your trusted partner in the Indian real estate market. We specialize in simplifying property buying, selling, and leasing by offering a completely transparent, hands-on approach to homeownership, commercial investments, and strategic portfolio building.
            </p>

            <p className="text-sm sm:text-base text-warm-300/85 leading-relaxed">
              At Anand Realty, our objective is to provide reliable, long-term advisory to our clients. We offer carefully verified property opportunities, clear legal paperwork support, and end-to-end guidance to make your property journey seamless, safe, and successful.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-dark-900 border border-dark-800">
                <ShieldCheck className="w-6 h-6 text-gold-400 mb-2" />
                <h4 className="font-serif text-base font-bold text-warm-100">Integrity & Trust</h4>
                <p className="text-xs text-warm-300/70 mt-1">Honest market guidance, verified properties, and complete transaction transparency.</p>
              </div>

              <div className="p-4 rounded-xl bg-dark-900 border border-dark-800">
                <HeartHandshake className="w-6 h-6 text-gold-400 mb-2" />
                <h4 className="font-serif text-base font-bold text-warm-100">Client-First Focus</h4>
                <p className="text-xs text-warm-300/70 mt-1">We walk with you every step of the way, from property shortlisting to final registry.</p>
              </div>

              <div className="p-4 rounded-xl bg-dark-900 border border-dark-800">
                <Eye className="w-6 h-6 text-gold-400 mb-2" />
                <h4 className="font-serif text-base font-bold text-warm-100">Market Knowledge</h4>
                <p className="text-xs text-warm-300/70 mt-1">Curated real estate opportunities aligned with your budget and lifestyle preferences.</p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-7 py-3.5 rounded-lg bg-gold-400 text-dark-950 font-bold text-xs uppercase tracking-wider hover:bg-gold-300 transition-colors"
              >
                Get In Touch
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
