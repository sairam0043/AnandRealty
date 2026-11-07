import React, { useState, useEffect } from 'react';
import { siteConfig, navLinks } from '../data/websiteData';
import { Phone, Mail, Menu, X, ChevronRight, Award } from 'lucide-react';

export default function Navbar({ onOpenContact, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(href);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Notification / Contact Bar */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs text-slate-300 py-2.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-400/20 text-gold-400 font-semibold text-[11px] border border-gold-400/30">
              <Award className="w-3 h-3 text-gold-400" /> Premier Real Estate Advisory • India
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline">{siteConfig.hours}</span>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href={`tel:${siteConfig.phone}`} 
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-gold-400 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a 
              href={`mailto:${siteConfig.email}`} 
              className="hidden lg:inline-flex items-center gap-1.5 text-slate-200 hover:text-gold-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-gold-400" />
              <span>{siteConfig.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-3.5' 
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/80 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-md shadow-gold-500/10 border border-gold-300/40 group-hover:scale-105 transition-transform">
              <span className="font-serif font-bold text-slate-950 text-xl tracking-wider">A</span>
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-slate-900 block leading-tight">
                ANAND<span className="text-gold-600">REALTY</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-slate-500 font-semibold block">
                Loyalty & Trust
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-semibold tracking-wide uppercase text-slate-700 hover:text-gold-600 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gradient-to-r from-gold-500 to-gold-400 text-slate-950 font-bold text-xs tracking-wider uppercase hover:shadow-lg hover:shadow-gold-500/20 hover:brightness-105 active:scale-95 transition-all"
            >
              <span>Get In Touch</span>
              <ChevronRight className="w-4 h-4 text-slate-950" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-gold-600 border border-slate-200 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Body */}
          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-white border-l border-slate-200 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-gold-500 flex items-center justify-center font-serif font-bold text-white text-base">
                    A
                  </div>
                  <span className="font-serif text-lg font-bold text-slate-900">
                    ANAND<span className="text-gold-600">REALTY</span>
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-md text-slate-500 hover:text-slate-800 bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-gold-600 transition-all border border-transparent hover:border-slate-200"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-gold-500 to-gold-400 text-slate-950 font-bold text-center text-sm uppercase tracking-wider shadow-md hover:brightness-105"
              >
                Get In Touch
              </button>
              <div className="text-center text-xs text-slate-500 pt-2 font-medium">
                Corporate Office, India
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
