import React from 'react';

export const AboutView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero Story */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="bg-rose-50 text-rose-600 border border-rose-200 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
          Established 1994
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          30+ Years of Diagnostic Excellence
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
          Founded over three decades ago, Suraksha Care Diagnostics has grown from a single clinical pathology laboratory into one of India’s most trusted reference networks.
        </p>
      </div>

      {/* Stats Counter Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="text-3xl sm:text-4xl font-black text-rose-600">30+</div>
          <p className="text-xs font-bold text-slate-700 mt-1">Years of Heritage</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="text-3xl sm:text-4xl font-black text-teal-700">50+</div>
          <p className="text-xs font-bold text-slate-700 mt-1">Accredited Reference Labs</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="text-3xl sm:text-4xl font-black text-rose-600">1,000+</div>
          <p className="text-xs font-bold text-slate-700 mt-1">Specialized Tests Offered</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
          <div className="text-3xl sm:text-4xl font-black text-teal-700">10 Lakh+</div>
          <p className="text-xs font-bold text-slate-700 mt-1">Patients Served Annually</p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h3 className="text-2xl font-extrabold text-white">Our Mission & Purpose</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
            To provide sub-specialty diagnostic accuracy to every family across India, using automated robotics, NABL quality protocols, and compassionate doorstep care.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-extrabold text-rose-500">Sub-Specialty Quality</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
            Every sample is barcoded at collection and tracked live across cold-chain logistics, ending in dual-pathologist verification before report release.
          </p>
        </div>
      </div>

      {/* CSR Section */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3 max-w-4xl mx-auto">
        <span className="text-xs font-extrabold text-teal-700 uppercase tracking-wider">
          Corporate Social Responsibility (CSR)
        </span>
        <h3 className="text-xl font-extrabold text-slate-900">Community Health Initiatives</h3>
        <p className="text-xs text-slate-600 leading-relaxed font-medium">
          Suraksha Care conducts free monthly diagnostic screening camps for diabetes and hypertension in semi-urban and rural districts, providing over 50,000 free lab tests annually to under-served communities.
        </p>
      </div>
    </div>
  );
};
