import React from 'react';
import { siteConfig } from '../data/websiteData';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions({ onOpenContact }) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Quick Consultation Pill */}
      <button
        onClick={onOpenContact}
        className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-xl backdrop-blur-md hover:bg-slate-50 hover:text-gold-600 transition-all group"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span>Advisory Desk Online</span>
      </button>

      <div className="flex items-center gap-3">
        {/* Call Button */}
        <a
          href={`tel:${siteConfig.phone}`}
          className="w-12 h-12 rounded-full bg-white border border-slate-200 hover:border-gold-400 text-slate-800 hover:text-gold-600 flex items-center justify-center shadow-xl transition-all"
          title="Call Anand Realty"
          aria-label="Call Anand Realty"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp Button */}
        <a
          href={siteConfig.socials.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/30 hover:scale-105 transition-all"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
}
