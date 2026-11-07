import React from 'react';
import { siteConfig, navLinks } from '../data/websiteData';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
      <polygon points="10 15 15 12 10 9 10 15"/>
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

export default function Footer({ onOpenLegal, onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (e, href) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(href);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white text-slate-600 pt-16 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-200">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center font-serif font-bold text-slate-950 text-xl shadow-md shadow-gold-500/10">
                A
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-slate-900">
                ANAND<span className="text-gold-600">REALTY</span>
              </span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Anand Realty is your trusted real estate partner in India. Delivering transparent property solutions, verified residential homes, and commercial advisory across prime Indian cities.
            </p>

            <div className="pt-2 text-xs text-slate-500 font-semibold">
              RERA Compliant • Trusted Real Estate Advisory in India
            </div>
          </div>

          {/* Quick Navigate Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-slate-900 tracking-wider uppercase text-xs">
              NAVIGATE
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLink(e, link.href)}
                    className="hover:text-gold-600 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-gold-600 transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('accessibility')}
                  className="hover:text-gold-600 transition-colors text-left"
                >
                  Accessibility Statement
                </button>
              </li>
            </ul>
          </div>

          {/* Office Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-slate-900 tracking-wider uppercase text-xs">
              CONTACT US
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                <span className="text-slate-600">
                  {siteConfig.address.office},<br />
                  {siteConfig.address.street},<br />
                  {siteConfig.address.city}, {siteConfig.address.country}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-600 shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="text-slate-900 font-semibold hover:text-gold-600 transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-600 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-slate-900 hover:text-gold-600 transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-slate-900 tracking-wider uppercase text-xs">
              FOLLOW US
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-gold-600 hover:border-gold-400 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-gold-600 hover:border-gold-400 transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-gold-600 hover:border-gold-400 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-4">
              <button
                onClick={scrollToTop}
                className="w-full py-2.5 px-3 rounded-lg bg-slate-100 border border-slate-200 hover:border-gold-400 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-gold-700 transition-colors flex items-center justify-center gap-2"
              >
                <span>Back To Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Copyright & Disclaimer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            &copy; 2026 by Anand Realty. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-900 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenLegal('accessibility')}
              className="hover:text-slate-900 transition-colors"
            >
              Accessibility Statement
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
