import React from 'react';
import { siteConfig } from '../data/websiteData';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions({ onOpenContact }) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3.5 animate-fade-in">
      {/* Quick Consultation Pill with Live Radar Pulse */}
      <button
        onClick={onOpenContact}
        className="hidden sm:inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-xl backdrop-blur-md hover:bg-white hover:text-gold-700 hover:border-gold-300 hover:shadow-2xl hover:-translate-y-0.5 transition-all group"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span>Advisory Desk Online</span>
      </button>

      <div className="flex items-center gap-3">
        {/* Call Button */}
        <a
          href={`tel:${siteConfig.phone}`}
          className="w-12 h-12 rounded-full bg-white border border-slate-200 hover:border-gold-400 text-slate-800 hover:text-gold-600 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all"
          title="Call Anand Realty"
          aria-label="Call Anand Realty"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp Button with Pulsing Wave */}
        <a
          href={siteConfig.socials.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="relative w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/35 hover:scale-110 active:scale-95 transition-all group"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping group-hover:hidden pointer-events-none" />
          <MessageCircle className="w-7 h-7 relative z-10" />
        </a>
      </div>
    </div>
  );
}
