import React, { useState } from 'react';
import { DOCTOR_TESTIMONIALS } from '../data/suraksha-data';

export const TestimonialsSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % DOCTOR_TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + DOCTOR_TESTIMONIALS.length) % DOCTOR_TESTIMONIALS.length);
  };

  const current = DOCTOR_TESTIMONIALS[activeIdx];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700 bg-brand-50 px-3.5 py-1 rounded-full border border-brand-100">
            Medical Endorsements
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3 mb-2">
            Trusted by Senior Clinicians
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Hear from oncologists, pathologists, and specialists relying on Suraksha's diagnostic precision.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/80 relative">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <img
              src={current.avatar}
              alt={current.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shadow-md shrink-0 border-2 border-brand-100"
            />
            <div className="space-y-3 text-center sm:text-left flex-1">
              <span className="text-3xl text-brand-700 font-serif leading-none block">“</span>
              <p className="text-sm sm:text-base font-extrabold text-slate-900 leading-relaxed italic">
                "{current.quote}"
              </p>
              <div>
                <h4 className="text-sm font-extrabold text-brand-700">{current.name}</h4>
                <p className="text-xs text-slate-600 font-semibold">
                  {current.role} • {current.hospital}, {current.city}
                </p>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
            <div className="flex gap-1.5">
              {DOCTOR_TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeIdx === idx ? 'bg-brand-700 w-6' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center font-bold text-sm transition-colors"
                aria-label="Previous quote"
              >
                ←
              </button>
              <button
                onClick={nextTestimonial}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center font-bold text-sm transition-colors"
                aria-label="Next quote"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
