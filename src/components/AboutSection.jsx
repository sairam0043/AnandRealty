import React from 'react';
import { ShieldCheck, HeartHandshake, Eye, Sparkles } from 'lucide-react';

export default function AboutSection({ onOpenContact }) {
  return (
    <section id="about" className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand & Architecture Image Showcase with Hover Zoom */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none group">
              {/* Decorative Border Frame with Glow */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-gold-500/20 via-transparent to-gold-400/30 blur-md pointer-events-none group-hover:scale-105 transition-transform duration-500" />
              
              <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"
                  alt="Modern Luxury Real Estate in India"
                  className="w-full h-[480px] object-cover filter brightness-[0.98] contrast-105 transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Card Overlay with Office & Brand Focus */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-400 text-xs font-bold uppercase tracking-wider mb-2 backdrop-blur-sm">
                    <Sparkles className="w-3 h-3 text-gold-400" />
                    Anand Realty • India
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Built on Loyalty and Trust
                  </h3>
                  <p className="text-xs text-slate-200 mt-1.5 leading-relaxed font-medium">
                    Dedicated to transparent real estate solutions, trusted documentation, and client-first property advisory across India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission, Vision, and Values */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
                Who We Are
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-2 leading-tight">
                About Anand Realty
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mt-4 rounded-full" />
            </div>

            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
              Welcome to <strong className="text-slate-900 font-bold">Anand Realty</strong>, your trusted partner in the Indian real estate market. We specialize in simplifying property buying, selling, and leasing by offering a completely transparent, hands-on approach to homeownership, commercial investments, and strategic portfolio building.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              At Anand Realty, our objective is to provide reliable, long-term advisory to our clients. We offer carefully verified property opportunities, clear legal paperwork support, and end-to-end guidance to make your property journey seamless, safe, and successful.
            </p>

            {/* Core Pillars with Treysta-Style Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="card-shine group p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:border-gold-300 hover:bg-white transition-all">
                <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600 mb-3 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-white transition-all">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-slate-900 group-hover:text-gold-700 transition-colors">Integrity & Trust</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Honest market guidance, verified properties, and complete transaction transparency.</p>
              </div>

              <div className="card-shine group p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:border-gold-300 hover:bg-white transition-all">
                <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600 mb-3 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-white transition-all">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-slate-900 group-hover:text-gold-700 transition-colors">Client-First Focus</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">We walk with you every step of the way, from property shortlisting to final registry.</p>
              </div>

              <div className="card-shine group p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:border-gold-300 hover:bg-white transition-all">
                <div className="w-10 h-10 rounded-xl bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-600 mb-3 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-white transition-all">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-bold text-slate-900 group-hover:text-gold-700 transition-colors">Market Knowledge</h4>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">Curated real estate opportunities aligned with your budget and lifestyle preferences.</p>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenContact}
                className="btn-shimmer px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:shadow-xl hover:shadow-gold-500/20 active:scale-95 transition-all"
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
