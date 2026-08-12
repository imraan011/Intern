import React, { useState } from 'react';
import { CITY_CENTERS } from '../data/suraksha-data';

interface FindCentreProps {
  onOpenBookModal: (type?: 'test' | 'homeCollection') => void;
}

export const FindCentreSection: React.FC<FindCentreProps> = ({ onOpenBookModal }) => {
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const cities = ['All', ...Array.from(new Set(CITY_CENTERS.map((c) => c.city)))];

  const filteredCenters = CITY_CENTERS.filter((c) => {
    const matchesCity = selectedCity === 'All' || c.city === selectedCity;
    const matchesQuery =
      c.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesQuery;
  });

  return (
    <section id="centres" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700 bg-brand-50 px-3.5 py-1 rounded-full border border-brand-100">
              Pan-India Network
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-3 mb-2">
              Find a Diagnostics Centre Near You
            </h2>
            <p className="text-sm text-slate-600 font-medium max-w-xl">
              Locate fully equipped reference labs and walk-in sample collection centers across major Indian cities.
            </p>
          </div>

          {/* Search Filter Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full sm:w-44 px-4 py-2.5 rounded-full text-xs font-bold bg-slate-100 border border-slate-300 text-slate-800 focus:outline-none focus:border-brand-700"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city === 'All' ? 'All Cities' : city}
                </option>
              ))}
            </select>

            <div className="relative w-full sm:w-60">
              <input
                type="text"
                placeholder="Search area or address..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-full text-xs font-semibold bg-slate-100 border border-slate-300 focus:outline-none focus:border-brand-700"
              />
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-sm">
                search
              </span>
            </div>
          </div>
        </div>

        {/* City Results Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCenters.map((center) => (
            <div
              key={center.id}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-xs font-extrabold text-brand-700 uppercase">
                      {center.city}
                    </span>
                    <h3 className="text-base font-extrabold text-slate-900 leading-snug">
                      {center.area}
                    </h3>
                  </div>
                  {center.hasHomeCollection && (
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-200">
                      Home Pickup
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 font-medium mb-3 leading-relaxed">
                  {center.address}
                </p>

                <p className="text-[11px] text-slate-500 font-semibold mb-4">
                  🕒 {center.timings}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center gap-2">
                <a
                  href={center.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-brand-700 hover:bg-brand-800 text-white text-xs font-bold py-2.5 px-3 rounded-full text-center transition-colors flex items-center justify-center gap-1"
                >
                  <span className="material-symbols-outlined text-sm">directions</span>
                  Directions
                </a>

                <a
                  href={`tel:${center.phone.replace(/\s+/g, '')}`}
                  className="bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold py-2.5 px-3 rounded-full text-center transition-colors flex items-center justify-center gap-1"
                >
                  <span className="material-symbols-outlined text-sm text-brand-700">call</span>
                  Call
                </a>

                <button
                  onClick={() => onOpenBookModal('homeCollection')}
                  className="bg-accent-600 hover:bg-accent-700 text-white text-xs font-bold p-2.5 rounded-full"
                  title="Book Home Collection"
                >
                  <span className="material-symbols-outlined text-sm">home_health</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
