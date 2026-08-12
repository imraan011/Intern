import React from 'react';

interface HeroProps {
  onOpenBookModal: (type?: 'test' | 'homeCollection') => void;
  onScrollToSection: (sectionId: string) => void;
}

export const SurakshaHero: React.FC<HeroProps> = ({
  onOpenBookModal,
  onScrollToSection,
}) => {
  return (
    <section id="hero" className="relative py-12 md:py-20 bg-gradient-to-b from-brand-50 via-slate-50 to-slate-50 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-brand-100/80 text-brand-800 px-3.5 py-1.5 rounded-full text-xs font-bold border border-brand-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
              <span>NABL Accredited & ICMR Approved Reference Network</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              High-End Diagnostics, <br />
              <span className="text-brand-700">Closer to You.</span>
            </h1>

            <p className="text-lg sm:text-xl font-bold text-accent-600">
              "Diagnosis that changes what happens next."
            </p>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Delivering sub-specialty accuracy across 50+ partner laboratories, molecular diagnostics, and automated home sample pickup across India.
            </p>

            {/* 3 Clickable CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={() => onOpenBookModal('test')}
                className="bg-accent-600 hover:bg-accent-700 text-white text-xs sm:text-sm font-extrabold px-6 py-3.5 rounded-full shadow-lg shadow-accent-600/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">science</span>
                Book a Test
              </button>

              <button
                onClick={() => onScrollToSection('centres')}
                className="bg-brand-700 hover:bg-brand-800 text-white text-xs sm:text-sm font-extrabold px-6 py-3.5 rounded-full shadow-lg shadow-brand-700/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">location_on</span>
                Find a Centre
              </button>

              <button
                onClick={() => onOpenBookModal('homeCollection')}
                className="bg-white text-slate-800 hover:text-brand-700 border border-slate-300 hover:border-brand-700 text-xs sm:text-sm font-extrabold px-6 py-3.5 rounded-full shadow-sm transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">home_health</span>
                Home Collection
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-600 font-semibold">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-brand-700 text-base">verified</span>
                100% Barcoded Samples
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-brand-700 text-base">schedule</span>
                Same-Day Reports
              </span>
            </div>
          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative">
                <img
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800"
                  alt="Diagnostic laboratory robotics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-slate-900">
                  Fully Automated Reference Lab
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-50 p-4 rounded-2xl border border-brand-100">
                  <span className="text-xs font-bold text-brand-800 block mb-0.5">QC Protocol</span>
                  <span className="text-sm font-extrabold text-slate-900">NABL & CAP 100%</span>
                </div>
                <div className="bg-slate-100 p-4 rounded-2xl border border-slate-200">
                  <span className="text-xs font-bold text-slate-600 block mb-0.5">Sample Pickup</span>
                  <span className="text-sm font-extrabold text-brand-700">Cold-Chain Sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
