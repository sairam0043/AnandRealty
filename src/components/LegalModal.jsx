import React from 'react';
import { privacyPolicyContent, accessibilityContent } from '../data/websiteData';
import { X, ShieldCheck } from 'lucide-react';

export default function LegalModal({ type, onClose }) {
  if (!type) return null;

  const content = type === 'privacy' ? privacyPolicyContent : accessibilityContent;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-gold-600" />
            <h2 className="font-serif text-2xl font-bold text-slate-900">
              {content.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-2 text-xs text-slate-500 pb-4 font-semibold">
          {content.lastUpdated}
        </div>

        <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
          {content.sections.map((sec, idx) => (
            <div key={idx} className="space-y-1.5">
              <h3 className="font-serif text-base font-bold text-slate-900">
                {sec.title}
              </h3>
              <p className="text-slate-600">
                {sec.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-gold-500 to-gold-400 text-slate-950 text-xs font-bold uppercase tracking-wider hover:brightness-105 shadow-md"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
