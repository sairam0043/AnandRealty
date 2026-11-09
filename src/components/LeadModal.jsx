import React, { useState } from 'react';
import { siteConfig } from '../data/websiteData';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function LeadModal({ isOpen, onClose, initialData = null }) {
  if (!isOpen) return null;

  const defaultRequirement = initialData
    ? [
        initialData.propertyType && initialData.propertyType !== 'All' ? `Property Type: ${initialData.propertyType}` : '',
        initialData.location ? `Location: ${initialData.location}` : '',
        initialData.budget && initialData.budget !== 'All' ? `Budget: ${initialData.budget}` : ''
      ].filter(Boolean).join(' | ')
    : '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: defaultRequirement || ''
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
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-lg bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-gold-50 text-gold-600 border border-gold-200 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-900">
              Consultation Scheduled
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Our Property Advisor will reach out via WhatsApp/Phone shortly to review your criteria.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-lg bg-gradient-to-r from-gold-500 to-gold-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-105 shadow-md"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-50 text-gold-700 text-[11px] font-bold uppercase tracking-wider mb-2 border border-gold-200">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-600" /> Confidential Inquiry
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-900">
              Get in Touch with Anand Realty
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-6 font-medium">
              Fill in your details and our advisory desk will contact you promptly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:bg-white focus:border-gold-500 shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. rajesh@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:bg-white focus:border-gold-500 shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1">
                  Phone (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:bg-white focus:border-gold-500 shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1">
                  What is your requirement? *
                </label>
                <textarea
                  required
                  rows="3"
                  placeholder="Type your requirement (e.g. 2/3 BHK apartment in prime area, budget ₹75 Lakhs - ₹1.5 Cr)..."
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:bg-white focus:border-gold-500 shadow-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-gold-500 to-gold-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-105 active:scale-95 shadow-md transition-all flex items-center justify-center gap-2 mt-4"
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
