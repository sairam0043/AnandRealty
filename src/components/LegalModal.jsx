import React from 'react';
import { privacyPolicyContent, accessibilityContent } from '../data/websiteData';
import { X, ShieldCheck } from 'lucide-react';

export default function LegalModal({ type, onClose }) {
  if (!type) return null;

  const content = type === 'privacy' ? privacyPolicyContent : accessibilityContent;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-2xl bg-dark-900 border border-dark-700 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-dark-800">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-gold-400" />
            <h2 className="font-serif text-2xl font-bold text-warm-50">
              {content.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-dark-800 text-warm-300 hover:text-warm-50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-2 text-xs text-warm-300/60 pb-4">
          {content.lastUpdated}
        </div>

        <div className="space-y-6 text-sm text-warm-200 leading-relaxed">
          {content.sections.map((sec, idx) => (
            <div key={idx} className="space-y-1.5">
              <h3 className="font-serif text-base font-bold text-warm-100">
                {sec.title}
              </h3>
              <p className="text-warm-300/85">
                {sec.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-dark-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gold-400 text-dark-950 text-xs font-bold uppercase tracking-wider hover:bg-gold-300"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

