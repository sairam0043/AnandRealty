import React, { useState } from 'react';
import { siteConfig } from '../data/websiteData';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Residential Apartment / Flat',
    budget: '₹50 Lakhs - ₹1 Crore',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto window-slide-up">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Start Your Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-2">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Whether you are searching for your dream home, exploring new residential projects, or investing in commercial real estate across India, Anand Realty is with you every step of the way.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Information & Office Details - Slides in from Left Window */}
          <div className="lg:col-span-5 space-y-6 window-slide-left delay-100">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 space-y-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                Contact Information
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connect directly with our advisory team. Consultations and property inquiries are attended promptly by our advisors.
              </p>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4 group">
                  <div className="p-2.5 rounded-xl bg-gold-50 text-gold-600 border border-gold-200 shrink-0 group-hover:scale-105 group-hover:bg-gold-500 group-hover:text-white transition-all">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">Headquarters</div>
                    <div className="text-slate-900 font-semibold mt-0.5">
                      {siteConfig.address.office}<br />
                      {siteConfig.address.street}<br />
                      {siteConfig.address.city}, {siteConfig.address.country}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-2.5 rounded-xl bg-gold-50 text-gold-600 border border-gold-200 shrink-0 group-hover:scale-105 group-hover:bg-gold-500 group-hover:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">Phone & WhatsApp</div>
                    <a href={`tel:${siteConfig.phone}`} className="text-slate-900 font-semibold hover:text-gold-600 transition-colors mt-0.5 block">
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-2.5 rounded-xl bg-gold-50 text-gold-600 border border-gold-200 shrink-0 group-hover:scale-105 group-hover:bg-gold-500 group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">Official Inquiries</div>
                    <a href={`mailto:${siteConfig.email}`} className="text-slate-900 font-semibold hover:text-gold-600 transition-colors mt-0.5 block">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-2.5 rounded-xl bg-gold-50 text-gold-600 border border-gold-200 shrink-0 group-hover:scale-105 group-hover:bg-gold-500 group-hover:text-white transition-all">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">Operating Hours</div>
                    <div className="text-slate-900 font-semibold mt-0.5">
                      {siteConfig.hours}
                    </div>
                  </div>
                </div>
              </div>

              {/* Fast WhatsApp Box with Pulsing Active Dot */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50/50 to-slate-50 border border-emerald-200/60 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    Fast Response Desk
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5 font-medium">Connect on WhatsApp for instant assistance</div>
                </div>
                <a
                  href={siteConfig.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Card with Interactive Elevation - Slides in from Right Window */}
          <div className="lg:col-span-7 window-slide-right delay-200">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-shadow">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-scale-up">
                  <div className="w-16 h-16 rounded-full bg-gold-50 text-gold-600 border border-gold-200 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    Thank You for Connecting
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been received. Our Property Advisory Team will review your specifications and contact you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        serviceInterest: 'Residential Apartment / Flat',
                        budget: '₹50 Lakhs - ₹1 Crore',
                        message: ''
                      });
                    }}
                    className="btn-shimmer mt-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-105 shadow-md transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:bg-white focus:border-gold-500 focus:ring-2 focus:ring-gold-400/20 transition-all shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. rajesh@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:bg-white focus:border-gold-500 focus:ring-2 focus:ring-gold-400/20 transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:bg-white focus:border-gold-500 focus:ring-2 focus:ring-gold-400/20 transition-all shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                        Primary Interest
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-gold-500 focus:ring-2 focus:ring-gold-400/20 transition-all shadow-sm"
                      >
                        <option value="Residential Apartment / Flat">Residential Apartment / Flat</option>
                        <option value="Luxury Villa / Independent House">Luxury Villa / Independent House</option>
                        <option value="Commercial Office / Retail Space">Commercial Office / Retail Space</option>
                        <option value="Residential Plot / Land">Residential Plot / Land</option>
                        <option value="Property Management">Property Management & Leasing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                      Target Budget (INR)
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-gold-500 focus:ring-2 focus:ring-gold-400/20 transition-all shadow-sm"
                    >
                      <option value="Under ₹50 Lakhs">Under ₹50 Lakhs</option>
                      <option value="₹50 Lakhs - ₹1 Crore">₹50 Lakhs - ₹1 Crore</option>
                      <option value="₹1 Crore - ₹2.5 Crore">₹1 Crore - ₹2.5 Crore</option>
                      <option value="₹2.5 Crore - ₹5 Crore">₹2.5 Crore - ₹5 Crore</option>
                      <option value="Above ₹5 Crore">Above ₹5 Crore (Luxury Estate)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                      Your Requirement & Preferred Location *
                    </label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Please mention your preferred city/locality, property specifications, budget, and timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:bg-white focus:border-gold-500 focus:ring-2 focus:ring-gold-400/20 transition-all shadow-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-shimmer w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:shadow-xl hover:shadow-gold-500/25 active:scale-98 transition-all flex items-center justify-center gap-2"
                  >
                    <span>{submitting ? 'SENDING INQUIRY...' : 'SUBMIT INQUIRY'}</span>
                    <Send className="w-4 h-4 text-slate-950" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
