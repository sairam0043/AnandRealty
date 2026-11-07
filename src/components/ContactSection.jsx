import React, { useState } from 'react';
import { siteConfig } from '../data/websiteData';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';

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
    <section id="contact" className="py-24 bg-dark-950 border-b border-dark-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Start Your Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-warm-50 mt-2">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-300 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-warm-300/80 text-sm sm:text-base leading-relaxed">
            Whether you are searching for your dream home, exploring new residential projects, or investing in commercial real estate across India, Anand Realty is with you every step of the way.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Information & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-dark-900 border border-dark-800 space-y-6 shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-warm-50">
                Contact Information
              </h3>
              <p className="text-sm text-warm-300/80 leading-relaxed">
                Connect directly with our advisory team. Consultations and property inquiries are attended promptly by our advisors.
              </p>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-gold-400/10 text-gold-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-warm-300/60 font-medium">Headquarters</div>
                    <div className="text-warm-100 font-semibold mt-0.5">
                      {siteConfig.address.office}<br />
                      {siteConfig.address.street}<br />
                      {siteConfig.address.city}, {siteConfig.address.country}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-gold-400/10 text-gold-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-warm-300/60 font-medium">Phone & WhatsApp</div>
                    <a href={`tel:${siteConfig.phone}`} className="text-warm-100 font-semibold hover:text-gold-400 transition-colors mt-0.5 block">
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-gold-400/10 text-gold-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-warm-300/60 font-medium">Official Inquiries</div>
                    <a href={`mailto:${siteConfig.email}`} className="text-warm-100 font-semibold hover:text-gold-400 transition-colors mt-0.5 block">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-gold-400/10 text-gold-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-warm-300/60 font-medium">Operating Hours</div>
                    <div className="text-warm-100 font-semibold mt-0.5">
                      {siteConfig.hours}
                    </div>
                  </div>
                </div>
              </div>

              {/* Fast WhatsApp Box */}
              <div className="p-4 rounded-xl bg-dark-950 border border-gold-400/20 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-gold-400 uppercase tracking-wider">Fast Response</div>
                  <div className="text-xs text-warm-300/70 mt-0.5">Connect on WhatsApp for instant assistance</div>
                </div>
                <a
                  href={siteConfig.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Chat Now
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-dark-900 border border-dark-800 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gold-400/10 text-gold-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-warm-50">
                    Thank You for Connecting
                  </h3>
                  <p className="text-sm text-warm-300 max-w-md mx-auto leading-relaxed">
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
                    className="mt-4 px-6 py-2.5 rounded-lg bg-gold-400 text-dark-950 font-bold text-xs uppercase tracking-wider hover:bg-gold-300 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-warm-300 font-medium mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-dark-950 border border-dark-700 text-warm-100 text-sm placeholder-dark-700 focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-warm-300 font-medium mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. rajesh@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-dark-950 border border-dark-700 text-warm-100 text-sm placeholder-dark-700 focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-warm-300 font-medium mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-dark-950 border border-dark-700 text-warm-100 text-sm placeholder-dark-700 focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-warm-300 font-medium mb-1.5">
                        Primary Interest
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-dark-950 border border-dark-700 text-warm-100 text-sm focus:outline-none focus:border-gold-400 transition-colors"
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
                    <label className="block text-xs uppercase tracking-wider text-warm-300 font-medium mb-1.5">
                      Target Budget (INR)
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-dark-950 border border-dark-700 text-warm-100 text-sm focus:outline-none focus:border-gold-400 transition-colors"
                    >
                      <option value="Under ₹50 Lakhs">Under ₹50 Lakhs</option>
                      <option value="₹50 Lakhs - ₹1 Crore">₹50 Lakhs - ₹1 Crore</option>
                      <option value="₹1 Crore - ₹2.5 Crore">₹1 Crore - ₹2.5 Crore</option>
                      <option value="₹2.5 Crore - ₹5 Crore">₹2.5 Crore - ₹5 Crore</option>
                      <option value="Above ₹5 Crore">Above ₹5 Crore (Luxury Estate)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-warm-300 font-medium mb-1.5">
                      Your Requirement & Preferred Location *
                    </label>
                    <textarea
                      required
                      rows="4"
                      placeholder="Please mention your preferred city/locality, property specifications, budget, and timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-dark-950 border border-dark-700 text-warm-100 text-sm placeholder-dark-700 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-lg bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-dark-950 font-bold text-xs uppercase tracking-wider hover:shadow-2xl hover:shadow-gold-500/20 active:scale-98 transition-all flex items-center justify-center gap-2"
                  >
                    <span>{submitting ? 'SENDING INQUIRY...' : 'SUBMIT INQUIRY'}</span>
                    <Send className="w-4 h-4 text-dark-950" />
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
