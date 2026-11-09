import React, { useState } from 'react';
import { MapPin, TrendingUp, IndianRupee, Building2, ArrowUpRight, Sparkles } from 'lucide-react';

const cityData = [
  {
    id: 'ncr',
    name: 'Gurugram & NCR',
    state: 'Delhi NCR',
    tagline: 'India’s Corporate & Ultra-Luxury Residential Epicenter',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=85',
    avgPrice: '₹14,500 – ₹32,000 / sq.ft',
    rentalYield: '4.2% – 5.5% p.a.',
    capitalAppreciation: '11.8% YoY',
    hotspots: ['Golf Course Ext. Road', 'Dwarka Expressway', 'DLF Phase 5', 'Sector 62 Noida'],
    description: 'Home to Fortune 500 headquarters, international schools, and premier golf-side condominiums. Gurugram and Greater Noida lead North India in high-end residential capital appreciation.'
  },
  {
    id: 'mumbai',
    name: 'Mumbai MMR',
    state: 'Maharashtra',
    tagline: 'The Financial Capital of Unrivaled Prestige & Sea-Facing Living',
    image: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1200&q=85',
    avgPrice: '₹28,000 – ₹75,000 / sq.ft',
    rentalYield: '3.6% – 4.5% p.a.',
    capitalAppreciation: '9.2% YoY',
    hotspots: ['BKC Corporate Belt', 'Worli Sea Face', 'Bandra West', 'Lower Parel'],
    description: 'Mumbai continues to command India’s highest real estate valuations. Driven by coastal road connectivity and premium high-rise duplexes, it remains the ultimate wealth preservation asset.'
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    state: 'Karnataka',
    tagline: 'Silicon Valley of India & Gated Villa Communities',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=85',
    avgPrice: '₹8,500 – ₹18,000 / sq.ft',
    rentalYield: '4.8% – 6.2% p.a.',
    capitalAppreciation: '12.4% YoY',
    hotspots: ['Whitefield', 'Indiranagar', 'North Bengaluru (Airport Corridor)', 'Sarjapur Road'],
    description: 'Powered by global tech campuses and affluent founders, Bengaluru offers India’s highest residential rental yields alongside sprawling luxury villa developments in green corridors.'
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    tagline: 'Rapid Infrastructure Growth & High-Yield Modern Sky Living',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=85',
    avgPrice: '₹7,500 – ₹15,500 / sq.ft',
    rentalYield: '4.5% – 5.8% p.a.',
    capitalAppreciation: '13.5% YoY',
    hotspots: ['Financial District', 'HITEC City', 'Kokapet Golden Mile', 'Jubilee Hills'],
    description: 'Known for wide expressways, robust water infrastructure, and zero FSI limits. Hyderabad is currently the fastest-growing luxury residential and commercial corridor in South India.'
  }
];

export default function CityHubsSection({ onOpenContact }) {
  const [activeCity, setActiveCity] = useState(cityData[0]);

  const handleInquire = () => {
    if (onOpenContact) {
      onOpenContact({
        location: activeCity.name,
        propertyType: 'Luxury Residential',
        budget: '₹2 Cr+'
      });
    }
  };

  return (
    <section id="city-hubs" className="py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto window-slide-up">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-50 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            Nationwide Presence
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-1">
            Prime City Hubs & Corridors
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            From high-growth tech capital zones to prestigious coastal towers, Anand Realty advises clients across India’s most lucrative real estate micro-markets.
          </p>
        </div>

        {/* City Tab Switcher */}
        <div className="mt-12 flex items-center justify-center gap-2 sm:gap-4 flex-wrap window-slide-up delay-100">
          {cityData.map((city) => {
            const isActive = activeCity.id === city.id;
            return (
              <button
                key={city.id}
                onClick={() => setActiveCity(city)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-gold-400 hover:bg-slate-50'
                }`}
              >
                <MapPin className={`w-4 h-4 ${isActive ? 'text-gold-400' : 'text-slate-400'}`} />
                <span>{city.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active City Showcase Card */}
        <div className="mt-12 rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 transition-all duration-500">
          
          {/* Left Visual Image with Overlay */}
          <div className="lg:col-span-6 relative min-h-[340px] sm:min-h-[420px] overflow-hidden group window-slide-left">
            <img
              src={activeCity.image}
              alt={activeCity.name}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-[0.95]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span className="inline-block px-2.5 py-1 rounded-md bg-gold-500 text-slate-950 text-[11px] font-extrabold uppercase tracking-wider">
                {activeCity.state}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                {activeCity.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                {activeCity.tagline}
              </p>
            </div>
          </div>

          {/* Right Metrics & Key Hotspots */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6 window-slide-right delay-150">
            <div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {activeCity.description}
              </p>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Avg. Luxury Price</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1">{activeCity.avgPrice}</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Rental Yield</div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-600 mt-1 flex items-center justify-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{activeCity.rentalYield}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">Capital Growth</div>
                  <div className="text-xs sm:text-sm font-bold text-gold-600 mt-1">{activeCity.capitalAppreciation}</div>
                </div>
              </div>

              {/* Prime Hotspots */}
              <div className="mt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2.5">
                  Prime Investment Corridors:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeCity.hotspots.map((spot) => (
                    <span
                      key={spot}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 hover:bg-gold-50 border border-slate-200 hover:border-gold-300 text-slate-700 hover:text-gold-700 text-xs font-medium transition-colors cursor-default"
                    >
                      <Building2 className="w-3 h-3 text-gold-500" />
                      <span>{spot}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 font-medium">
                Verified RERA properties & developer allotments available
              </span>

              <button
                onClick={handleInquire}
                className="btn-shimmer w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-xl hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Explore {activeCity.name} Listings</span>
                <ArrowUpRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
