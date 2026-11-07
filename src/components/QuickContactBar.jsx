import React, { useState } from 'react';
import { siteConfig } from '../data/websiteData';
import { Send, CheckCircle2, Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function QuickContactBar() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirement: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate real demo submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-8">
      <div className="bg-dark-900/95 border border-dark-700/80 rounded-2xl shadow-2xl backdrop-blur-xl p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-dark-800 pb-8 lg:pb-0 lg:pr-8">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Immediate Consultation
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-warm-50 mt-1">
              Connect With Our Advisory Desk
            </h2>
            <p className="mt-3 text-sm text-warm-300/80 leading-relaxed">
              Have a question about high-yield off-plan developments, Golden Visa residency, or prime secondary acquisitions in Dubai? Submit your requirement below.
            </p>

            <div className="mt-6 space-y-3.5 text-sm text-warm-200">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-xs sm:text-sm text-warm-300">
                  {siteConfig.address.office}, {siteConfig.address.street}, {siteConfig.address.city}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-xs sm:text-sm text-warm-300">
                  {siteConfig.hours}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="text-xs sm:text-sm text-warm-100 hover:text-gold-400 transition-colors font-medium">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-xs sm:text-sm text-warm-100 hover:text-gold-400 transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-dark-850 border border-gold-400/30 rounded-xl p-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-gold-400/10 text-gold-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-warm-50">Inquiry Received</h3>
                <p className="text-sm text-warm-300 max-w-md mx-auto">
                  Thank you for connecting with Anand Realty. Our Senior Property Consultant will reach out via WhatsApp/Phone within 30 minutes during business hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', requirement: '' });
                  }}
                  className="mt-4 text-xs font-semibold uppercase tracking-wider text-gold-400 hover:underline"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-warm-300 font-medium mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-dark-950 border border-dark-700 text-warm-100 text-sm placeholder-dark-700 focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-warm-300 font-medium mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-dark-950 border border-dark-700 text-warm-100 text-sm placeholder-dark-700 focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-warm-300 font-medium mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-dark-950 border border-dark-700 text-warm-100 text-sm placeholder-dark-700 focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-warm-300 font-medium mb-1.5">
                    What is your requirement? *
                  </label>
                  <textarea
                    required
                    rows="3"
                    placeholder="Tell us what you are looking for (e.g. 2BHK off-plan investment in Business Bay or Dubai Hills, budget AED 2M - 3M, Golden Visa eligibility)..."
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-dark-950 border border-dark-700 text-warm-100 text-sm placeholder-dark-700 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-warm-300/60 hidden sm:inline">
                    🔒 Strict confidentiality guaranteed. No unsolicited spam.
                  </span>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3 rounded-md bg-gradient-to-r from-gold-500 to-gold-400 text-dark-950 font-bold text-xs uppercase tracking-wider hover:shadow-lg hover:shadow-gold-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <span>{loading ? 'Submitting...' : 'SUBMIT REQUIREMENT'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

