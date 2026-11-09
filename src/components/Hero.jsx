import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, Sparkles, Search, MapPin, Home, IndianRupee } from 'lucide-react';

export default function Hero({ onOpenContact }) {
  const [searchLocation, setSearchLocation] = useState('');
  const [propertyType, setPropertyType] = useState('All');
  const [budgetRange, setBudgetRange] = useState('All');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onOpenContact) {
      onOpenContact({
        location: searchLocation,
        propertyType,
        budget: budgetRange
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Cinematic Drone Video Background Loop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.9] contrast-[1.1]"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="https://www.treysta.ae/assets/frontend/images/banners/BannerVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Cinematic Dark Translucent Vignette Overlays - Preserves Rich Video Visibility */}
        <div className="absolute inset-0 bg-slate-950/45 backdrop-contrast-[1.05]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/30 to-slate-950/80 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 lg:py-28 text-center flex flex-col items-center">
        {/* Luxury Floating Badge */}
        <div className="window-slide-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-gold-400/40 backdrop-blur-md mb-6 shadow-lg shadow-black/40 hover:border-gold-400 transition-all cursor-default animate-float">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span className="text-xs font-bold tracking-widest uppercase text-gold-300">
            Premier Real Estate Advisory • India
          </span>
        </div>

        {/* Brand Headline with Fade-Up */}
        <h1 className="window-slide-up delay-100 font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white max-w-5xl leading-none drop-shadow-md">
          ANAND <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500">REALTY</span>
        </h1>

        {/* Tagline */}
        <p className="window-slide-up delay-150 mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl font-serif text-slate-100 tracking-wide font-medium drop-shadow-sm">
          Built on Loyalty, Transparency & Trust
        </p>

        {/* Subtitle / Value Proposition */}
        <p className="window-slide-up delay-200 mt-4 text-sm sm:text-base md:text-lg text-slate-200/90 max-w-3xl font-normal leading-relaxed drop-shadow-sm">
          Your trusted real estate partner in India, delivering transparent property solutions, premium residential homes, luxury villas, and commercial real estate guidance.
        </p>

        {/* Treysta-Style Floating Property Search & Inquire Bar */}
        <div className="window-slide-up delay-300 mt-8 w-full max-w-4xl">
          <form 
            onSubmit={handleSearchSubmit}
            className="p-3 sm:p-4 rounded-2xl bg-slate-900/85 border border-white/20 backdrop-blur-md shadow-2xl shadow-black/50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left"
          >
            {/* City / Location Field */}
            <div className="flex flex-col justify-center px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-gold-400/50 transition-colors">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-gold-400" /> City / Location
              </label>
              <input
                type="text"
                placeholder="e.g. Delhi NCR, Mumbai..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="bg-transparent text-sm font-semibold text-white placeholder-slate-400 focus:outline-none mt-0.5"
              />
            </div>

            {/* Property Type Field */}
            <div className="flex flex-col justify-center px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-gold-400/50 transition-colors">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                <Home className="w-3 h-3 text-gold-400" /> Property Type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                aria-label="Property Type"
                className="bg-transparent text-sm font-semibold text-white focus:outline-none mt-0.5 cursor-pointer [&>option]:bg-slate-900 [&>option]:text-white"
              >
                <option value="All">All Types</option>
                <option value="Luxury Villa">Luxury Villa</option>
                <option value="Premium Apartment">Premium Apartment</option>
                <option value="Commercial Space">Commercial Space</option>
                <option value="Plotted Development">Plotted Development</option>
              </select>
            </div>

            {/* Budget Range Field */}
            <div className="flex flex-col justify-center px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-gold-400/50 transition-colors">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                <IndianRupee className="w-3 h-3 text-gold-400" /> Budget Range
              </label>
              <select
                value={budgetRange}
                onChange={(e) => setBudgetRange(e.target.value)}
                aria-label="Budget Range"
                className="bg-transparent text-sm font-semibold text-white focus:outline-none mt-0.5 cursor-pointer [&>option]:bg-slate-900 [&>option]:text-white"
              >
                <option value="All">Any Budget</option>
                <option value="₹50L - ₹1.5 Cr">₹50 Lakhs - ₹1.5 Cr</option>
                <option value="₹1.5 Cr - ₹3 Cr">₹1.5 Cr - ₹3 Crore</option>
                <option value="₹3 Cr - ₹5 Cr">₹3 Cr - ₹5 Crore</option>
                <option value="₹5 Cr+">₹5 Crore & Above</option>
              </select>
            </div>

            {/* Submit / Search Button */}
            <button
              type="submit"
              className="btn-shimmer w-full px-5 py-3 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-slate-950 font-bold text-xs tracking-wider uppercase hover:shadow-lg hover:shadow-gold-500/30 hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 self-stretch"
            >
              <Search className="w-4 h-4 text-slate-950" />
              <span>Inquire Now</span>
            </button>
          </form>
        </div>

        {/* Secondary Action Links */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('services')}
            className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs tracking-wider uppercase backdrop-blur-sm transition-all flex items-center gap-2"
          >
            <span>Explore Services</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-2.5 rounded-full bg-transparent hover:bg-white/10 border border-white/20 text-slate-200 font-semibold text-xs tracking-wider uppercase backdrop-blur-sm transition-all"
          >
            Contact Desk
          </button>
        </div>

        {/* Official RERA Verification Badge with Glassmorphism */}
        <div className="window-slide-up delay-400 mt-12 pt-8 border-t border-white/15 w-full flex justify-center">
          <div className="group inline-flex items-center gap-4 px-6 py-3.5 rounded-2xl bg-slate-900/80 border border-white/20 shadow-2xl backdrop-blur-md hover:border-gold-400/80 hover:shadow-gold-500/10 transition-all cursor-default">
            {/* Real Badge Shield Emblem */}
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white shadow-md shadow-emerald-600/30 shrink-0 border border-emerald-400/50 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6 text-white" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-gold-400 border-2 border-slate-900 flex items-center justify-center text-[9px] font-black text-slate-950">
                ✓
              </div>
            </div>

            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold tracking-widest uppercase text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2 py-0.5 rounded-md">
                  RERA VERIFIED
                </span>
                <span className="text-[11px] text-slate-400 font-medium">•</span>
                <span className="text-[11px] text-slate-300 font-semibold tracking-wider uppercase">
                  Govt. of India Act Compliant
                </span>
              </div>
              <div className="text-sm sm:text-base font-bold text-white mt-0.5 group-hover:text-gold-300 transition-colors">
                100% Verified Listings & Approved Documentation
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
