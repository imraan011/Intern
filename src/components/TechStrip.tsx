import React, { useState } from 'react';
import { DIAGNOSTIC_TECHS } from '../data/suraksha-data';

export const TechStrip: React.FC = () => {
  const [activeTechId, setActiveTechId] = useState<string>(DIAGNOSTIC_TECHS[0].id);

  const activeTech = DIAGNOSTIC_TECHS.find((t) => t.id === activeTechId) || DIAGNOSTIC_TECHS[0];

  return (
    <section id="tech" className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700 bg-brand-50 px-3.5 py-1 rounded-full border border-brand-100">
            Advanced Infrastructure
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3 mb-3">
            Reference Laboratory Technology
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Powered by world-leading analytical platforms ensuring unmatched analytical sensitivity.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {DIAGNOSTIC_TECHS.map((tech) => (
            <button
              key={tech.id}
              onClick={() => setActiveTechId(tech.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeTechId === tech.id
                  ? 'bg-brand-700 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tech.title}
            </button>
          ))}
        </div>

        {/* Selected Tech Card Showcase */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">
              {activeTech.subtitle}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {activeTech.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              {activeTech.description}
            </p>

            <div className="pt-2 space-y-2">
              {activeTech.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs font-bold text-slate-800">
                  <span className="material-symbols-outlined text-brand-700 text-base">
                    check_circle
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg border border-slate-200 relative">
            <img
              src={activeTech.image}
              alt={activeTech.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
            <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-slate-900">
              Suraksha Tech Center
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
