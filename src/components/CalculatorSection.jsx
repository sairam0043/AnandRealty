import React, { useState, useMemo } from 'react';
import { Calculator, IndianRupee, Percent, Calendar, ShieldCheck, ArrowUpRight, Sparkles, Building } from 'lucide-react';

export default function CalculatorSection({ onOpenContact }) {
  // State variables for Indian Real Estate Home Loan Calculator
  const [propertyValue, setPropertyValue] = useState(25000000); // ₹2.5 Crores default
  const [downPaymentPercent, setDownPaymentPercent] = useState(20); // 20%
  const [tenureYears, setTenureYears] = useState(20); // 20 Years
  const [interestRate, setInterestRate] = useState(8.5); // 8.5% p.a. standard Indian Home Loan rate

  // Financial Calculations
  const { loanAmount, downPaymentAmount, emi, totalInterest, totalPayment, principalPercent, interestPercent } = useMemo(() => {
    const downPayment = Math.round(propertyValue * (downPaymentPercent / 100));
    const principal = propertyValue - downPayment;

    const monthlyRate = interestRate / (12 * 100);
    const totalMonths = tenureYears * 12;

    let monthlyEmi = 0;
    if (principal > 0 && monthlyRate > 0) {
      monthlyEmi = Math.round(
        (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
      );
    }

    const totalPay = monthlyEmi * totalMonths;
    const interest = totalPay - principal;

    const pPct = totalPay > 0 ? Math.round((principal / totalPay) * 100) : 50;
    const iPct = 100 - pPct;

    return {
      loanAmount: principal,
      downPaymentAmount: downPayment,
      emi: monthlyEmi,
      totalInterest: interest,
      totalPayment: totalPay,
      principalPercent: pPct,
      interestPercent: iPct
    };
  }, [propertyValue, downPaymentPercent, tenureYears, interestRate]);

  // Formatter for Indian Rupees
  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const formatShort = (val) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakhs`;
    }
    return formatINR(val);
  };

  const handleApply = () => {
    if (onOpenContact) {
      onOpenContact({
        project: `Loan Assistance for ${formatShort(propertyValue)} Property`,
        budget: `${formatShort(loanAmount)} Loan @ ${interestRate}%`,
        propertyType: 'Home Loan Advisory'
      });
    }
  };

  return (
    <section id="calculator" className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto window-slide-up">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-50 border border-gold-200 text-gold-700 text-xs font-bold uppercase tracking-widest mb-3">
            <Calculator className="w-3.5 h-3.5 text-gold-600" />
            Financial Advisory Tools
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-1">
            Real Estate EMI & Investment Estimator
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Estimate your monthly investment outflows, loan eligibility, and interest breakdown with current Tier-1 Indian banking rates.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Sliders */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-6 window-slide-left">
            
            {/* Slider 1: Property Value */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-gold-600" /> Property Value
                </label>
                <span className="font-serif text-lg sm:text-xl font-bold text-slate-950">
                  {formatShort(propertyValue)}
                </span>
              </div>
              <input
                type="range"
                min="3000000"
                max="100000000"
                step="500000"
                value={propertyValue}
                onChange={(e) => setPropertyValue(Number(e.target.value))}
                aria-label="Property Value"
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
              {/* Quick Presets */}
              <div className="flex items-center gap-2 mt-2.5">
                {[7500000, 15000000, 25000000, 50000000].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setPropertyValue(preset)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors ${
                      propertyValue === preset
                        ? 'bg-gold-500 text-slate-950 font-bold'
                        : 'bg-white border border-slate-200 text-slate-600 hover:border-gold-400'
                    }`}
                  >
                    {formatShort(preset)}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 2: Down Payment */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Percent className="w-4 h-4 text-gold-600" /> Down Payment ({downPaymentPercent}%)
                </label>
                <span className="text-sm sm:text-base font-bold text-slate-900">
                  {formatShort(downPaymentAmount)}
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                aria-label="Down Payment Percentage"
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                <span>10% (Min)</span>
                <span>20% (Standard)</span>
                <span>50% (High Equity)</span>
              </div>
            </div>

            {/* Slider 3: Loan Tenure */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-gold-600" /> Loan Tenure
                </label>
                <span className="text-sm sm:text-base font-bold text-slate-900">
                  {tenureYears} Years ({tenureYears * 12} Months)
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                aria-label="Loan Tenure in Years"
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
              <div className="flex items-center gap-2 mt-2.5">
                {[10, 15, 20, 25, 30].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTenureYears(t)}
                    className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-colors ${
                      tenureYears === t
                        ? 'bg-slate-900 text-white font-bold'
                        : 'bg-white border border-slate-200 text-slate-600 hover:border-gold-400'
                    }`}
                  >
                    {t} Yrs
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 4: Interest Rate */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Percent className="w-4 h-4 text-gold-600" /> Interest Rate (% p.a.)
                </label>
                <span className="text-sm sm:text-base font-bold text-slate-900">
                  {interestRate}% p.a.
                </span>
              </div>
              <input
                type="range"
                min="7.0"
                max="12.0"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                aria-label="Interest Rate Percentage per Annum"
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                <span>7.0% (Prime)</span>
                <span>8.5% (Benchmark SBI/HDFC)</span>
                <span>12.0%</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live EMI Output Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-900 text-white shadow-2xl border border-slate-800 space-y-6 window-slide-right delay-150">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-gold-400 block mb-1">
                Estimated Outflow
              </span>
              <div className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
                {formatINR(emi)}
              </div>
              <span className="text-xs text-slate-400 font-medium block mt-1">
                Monthly EMI for {tenureYears} years
              </span>
            </div>

            {/* Dual Color Breakdown Progress Bar */}
            <div className="space-y-2">
              <div className="h-3 rounded-full bg-slate-800 overflow-hidden flex shadow-inner">
                <div
                  style={{ width: `${principalPercent}%` }}
                  className="bg-gold-500 transition-all duration-500"
                />
                <div
                  style={{ width: `${interestPercent}%` }}
                  className="bg-slate-600 transition-all duration-500"
                />
              </div>
              <div className="flex justify-between text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-gold-500" />
                  <span>Principal: {principalPercent}%</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                  <span>Interest: {interestPercent}%</span>
                </div>
              </div>
            </div>

            {/* Key Metric Rows */}
            <div className="space-y-3 pt-3 border-t border-slate-800 text-sm">
              <div className="flex justify-between text-slate-300">
                <span>Principal Loan Amount:</span>
                <span className="font-semibold text-white">{formatShort(loanAmount)}</span>
              </div>

              <div className="flex justify-between text-slate-300">
                <span>Total Interest Payable:</span>
                <span className="font-semibold text-gold-400">{formatShort(totalInterest)}</span>
              </div>

              <div className="flex justify-between text-slate-300 pt-2 border-t border-slate-800/80">
                <span>Total Payment (Principal + Int):</span>
                <span className="font-bold text-white">{formatShort(totalPayment)}</span>
              </div>
            </div>

            {/* Preferred Bank Partners */}
            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 text-gold-400 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Preferred Banking Partners</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Pre-approved rate assistance available via SBI, HDFC Bank, ICICI Bank, and Axis Bank.
              </p>
            </div>

            {/* Action Button */}
            <button
              onClick={handleApply}
              className="btn-shimmer w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-105 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>Inquire For Preferred Bank Rates</span>
              <ArrowUpRight className="w-4 h-4 text-slate-950" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
