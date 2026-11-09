import React, { useRef } from 'react';
import { featuredProjects } from '../data/websiteData';
import { ChevronLeft, ChevronRight, ArrowUpRight, Bed, Building, MapPin, Sparkles, ShieldCheck } from 'lucide-react';

export default function FeaturedProjectsSection({ onOpenContact }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleProjectInquire = (project) => {
    if (onOpenContact) {
      onOpenContact({
        project: project.title,
        location: project.location,
        propertyType: project.type,
        budget: project.price
      });
    }
  };

  return (
    <section id="projects" className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Section Info & Controls (Treysta Style) */}
          <div className="lg:col-span-4 space-y-6 window-slide-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600 flex items-center gap-1.5 mb-2">
                <span className="w-4 h-0.5 bg-gold-500 rounded-full inline-block" />
                Featured Projects
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Exclusive from Anand Realty
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Start your search for India's top residential and commercial developments with Anand Realty. Our expert advisors will match you with the perfect opportunity, offering RERA verified documentation, transparent pricing, and high capital appreciation potential—all backed by our trusted approach.
            </p>

            {/* Action Button & Carousel Controls */}
            <div className="pt-2 flex items-center gap-4 flex-wrap">
              <button
                onClick={() => onOpenContact && onOpenContact({ inquiryType: 'All Featured Projects' })}
                className="btn-shimmer px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-xl active:scale-95 transition-all flex items-center gap-2"
              >
                <span>View All Projects</span>
                <ArrowUpRight className="w-4 h-4 text-gold-400" />
              </button>

              {/* Slider Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scroll('left')}
                  aria-label="Previous Project"
                  className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-950 flex items-center justify-center transition-all shadow-sm active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  aria-label="Next Project"
                  className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-950 flex items-center justify-center transition-all shadow-sm active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Trust Micro-Tag */}
            <div className="pt-2 inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% RERA Registered & Legal Clearances Verified</span>
            </div>
          </div>

          {/* Right Column: Sliding Project Cards Carousel (Treysta Style) */}
          <div className="lg:col-span-8 window-slide-right delay-150">
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-4 pt-2 scroll-smooth no-scrollbar scrollbar-none snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="w-[320px] sm:w-[360px] shrink-0 snap-start rounded-3xl bg-slate-50 border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-gold-400/80 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                >
                  {/* Image Container with Top-Right Status Badge */}
                  <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-200">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/20" />

                    {/* Possession / Status Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-gold-500 text-slate-950 font-extrabold text-[11px] uppercase tracking-wider shadow-md">
                      {project.possession}
                    </div>

                    {/* Micro-Location Pill */}
                    <div className="absolute bottom-3 left-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-sm text-white text-xs font-medium">
                      <MapPin className="w-3 h-3 text-gold-400 shrink-0" />
                      <span className="truncate max-w-[240px]">{project.location}</span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 group-hover:text-gold-700 transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      
                      {/* Price Highlight */}
                      <div className="text-sm sm:text-base font-bold text-gold-600 mt-1">
                        {project.priceDisplay}
                      </div>

                      {/* Specs */}
                      <div className="flex items-center gap-2 text-xs text-slate-600 font-medium mt-3 pb-3 border-b border-slate-200">
                        <Bed className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{project.type}</span>
                      </div>
                    </div>

                    {/* Bottom Row: Developer / Tag & Pre-Register CTA Button */}
                    <div className="flex items-center justify-between gap-3 pt-1">
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                        {project.developer}
                      </span>

                      <button
                        onClick={() => handleProjectInquire(project)}
                        className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:border-gold-500 text-slate-900 hover:text-gold-700 text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all flex items-center gap-1 active:scale-95 group/btn"
                      >
                        <span>Pre Register</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-gold-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
