import React from 'react';
import { MapPin, TrendingUp, Building2, ArrowUpRight, Sparkles } from 'lucide-react';

const cityHubs = [
  {
    id: 'ncr',
    name: 'Gurugram & NCR',
    state: 'Delhi NCR',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    avgPrice: '₹14,500 – ₹32,000 / sq.ft',
    rentalYield: '4.2% – 5.5% p.a.',
    capitalGrowth: '+11.8% YoY',
    hotspots: ['Golf Course Ext.', 'Dwarka Expressway', 'DLF Phase 5'],
    tagline: 'Corporate & Ultra-Luxury Living'
  },
  {
    id: 'mumbai',
    name: 'Mumbai MMR',
    state: 'Maharashtra',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
    avgPrice: '₹28,000 – ₹75,000 / sq.ft',
    rentalYield: '3.6% – 4.5% p.a.',
    capitalGrowth: '+9.2% YoY',
    hotspots: ['BKC Belt', 'Worli Sea Face', 'Bandra West'],
    tagline: 'Prestige & Coastal Duplexes'
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    state: 'Karnataka',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
    avgPrice: '₹8,500 – ₹18,000 / sq.ft',
    rentalYield: '4.8% – 6.2% p.a.',
    capitalGrowth: '+12.4% YoY',
    hotspots: ['Whitefield', 'Indiranagar', 'Airport Corridor'],
    tagline: 'Tech Hub & Gated Villas'
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    state: 'Telangana',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    avgPrice: '₹7,500 – ₹15,500 / sq.ft',
    rentalYield: '4.5% – 5.8% p.a.',
    capitalGrowth: '+13.5% YoY',
    hotspots: ['Financial District', 'HITEC City', 'Kokapet Mile'],
    tagline: 'Fast-Growing Sky Corridors'
  }
];

export default function CityHubsSection({ onOpenContact }) {
  const handleCityInquire = (city) => {
    if (onOpenContact) {
      onOpenContact({
        location: city.name,
        propertyType: 'Luxury Residential & Commercial',
        budget: '₹1.5 Cr+'
      });
    }
  };

  return (
    <section id="city-hubs" className="py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      {/* Background Ambience */}
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
            Curated micro-market intelligence across India’s premier investment destinations.
          </p>
        </div>

        {/* Balanced 4-Column Grid: Proportional & Matching Card Sizing */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cityHubs.map((city, index) => {
            const slideClass =
              index === 0
                ? 'window-slide-left delay-100'
                : index === 1
                ? 'window-slide-up delay-150'
                : index === 2
                ? 'window-slide-up delay-200'
                : 'window-slide-right delay-250';

            return (
              <div
                key={city.id}
                className={`${slideClass} group rounded-2xl bg-white border border-slate-200/90 hover:border-gold-400 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between`}
              >
                {/* Image Header with State Badge */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.96]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* State Tag */}
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-white/95 text-slate-900 font-bold text-[10px] uppercase tracking-wider shadow-sm">
                    {city.state}
                  </div>

                  {/* City Name on Image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-serif text-lg font-bold leading-tight flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      <span>{city.name}</span>
                    </h3>
                    <p className="text-[11px] text-slate-200 truncate mt-0.5 font-medium">
                      {city.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Body Metrics */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    {/* Price & Yield Badges */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5 text-xs">
                      <div className="flex justify-between items-center text-slate-600">
                        <span className="font-medium text-[11px]">Avg. Luxury:</span>
                        <span className="font-bold text-slate-900 text-[11px]">{city.avgPrice}</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-600 pt-1 border-t border-slate-200/60">
                        <span className="font-medium text-[11px]">Rental Yield:</span>
                        <span className="font-bold text-emerald-600 text-[11px] flex items-center gap-0.5">
                          <TrendingUp className="w-3 h-3" /> {city.rentalYield}
                        </span>
                      </div>
                    </div>

                    {/* Key Corridors */}
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                        Key Corridors
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {city.hotspots.map((spot) => (
                          <span
                            key={spot}
                            className="inline-block px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-medium"
                          >
                            {spot}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <button
                    onClick={() => handleCityInquire(city)}
                    className="w-full py-2.5 rounded-xl bg-white border border-slate-200 hover:border-gold-500 hover:bg-gold-50/50 text-slate-900 hover:text-gold-700 text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-1.5 group/btn active:scale-95"
                  >
                    <span>Inquire Listings</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
