import React, { useState } from 'react';
import { siteConfig } from '../data/websiteData';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function LeadModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-lg bg-dark-900 border border-dark-700 rounded-2xl shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-dark-800 text-warm-300 hover:text-warm-50"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-gold-400/10 text-gold-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-warm-50">
              Consultation Scheduled
            </h3>
            <p className="text-sm text-warm-300 max-w-sm mx-auto">
              Our Senior Property Advisor will reach out via WhatsApp/Phone shortly to review your criteria.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-lg bg-gold-400 text-dark-950 font-bold text-xs uppercase tracking-wider"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/10 text-gold-400 text-[11px] font-semibold uppercase tracking-wider mb-2 border border-gold-400/20">
              <ShieldCheck className="w-3.5 h-3.5" /> Confidential Inquiry
            </div>
            <h3 className="font-serif text-2xl font-bold text-warm-50">
              Get in Touch with Anand Realty
            </h3>
            <p className="text-xs text-warm-300/80 mt-1 mb-6">
              Fill in your details and our advisory desk in Business Bay will contact you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-warm-300 font-medium mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-dark-950 border border-dark-700 text-warm-100 text-sm placeholder-dark-700 focus:outline-none focus:border-gold-400"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-warm-300 font-medium mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. anand@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-dark-950 border border-dark-700 text-warm-100 text-sm placeholder-dark-700 focus:outline-none focus:border-gold-400"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-warm-300 font-medium mb-1">
                  Phone (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+971 50 123 4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-dark-950 border border-dark-700 text-warm-100 text-sm placeholder-dark-700 focus:outline-none focus:border-gold-400"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-warm-300 font-medium mb-1">
                  What is your requirement? *
                </label>
                <textarea
                  required
                  rows="3"
                  placeholder="Type your requirement (e.g. 2BHK off-plan investment in Business Bay or Dubai Hills, budget AED 2M - 3M)..."
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-dark-950 border border-dark-700 text-warm-100 text-sm placeholder-dark-700 focus:outline-none focus:border-gold-400 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-gold-500 to-gold-400 text-dark-950 font-bold text-xs uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 mt-4"
              >
                <span>{submitting ? 'Submitting...' : 'SUBMIT REQUIREMENT'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

