import React, { useState } from 'react';
import { CENTRES_DATA } from '../data/mockData';

interface FindCentreProps {
  initialState?: string;
}

export const FindCentreView: React.FC<FindCentreProps> = ({ initialState = 'Delhi NCR' }) => {
  const [selectedState, setSelectedState] = useState<string>(initialState);
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const states = Array.from(new Set(CENTRES_DATA.map((c) => c.state)));
  const citiesForState = [
    'All',
    ...Array.from(new Set(CENTRES_DATA.filter((c) => c.state === selectedState).map((c) => c.city))),
  ];

  const filteredCentres = CENTRES_DATA.filter((c) => {
    const matchesState = c.state === selectedState;
    const matchesCity = selectedCity === 'All' || c.city === selectedCity;
    const matchesQuery =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.locality.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesState && matchesCity && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <span className="bg-rose-50 text-rose-600 border border-rose-200 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
          Pan-India Lab Network
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-2">
          Find a Suraksha Centre Near You
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          Locate reference laboratories, automated sample hubs, and imaging clinics.
        </p>
      </div>

      {/* Cascading State -> City Selector & Search */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-4">
        <div className="w-full md:w-1/3">
          <label className="block text-[11px] font-extrabold text-slate-500 uppercase mb-1">
            Select State
          </label>
          <select
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              setSelectedCity('All');
            }}
            className="w-full p-3 rounded-xl border border-slate-300 text-xs font-extrabold text-slate-800 bg-slate-50 focus:outline-none focus:border-rose-600"
          >
            {states.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full md:w-1/3">
          <label className="block text-[11px] font-extrabold text-slate-500 uppercase mb-1">
            Select City
          </label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full p-3 rounded-xl border border-slate-300 text-xs font-extrabold text-slate-800 bg-slate-50 focus:outline-none focus:border-rose-600"
          >
            {citiesForState.map((ct) => (
              <option key={ct} value={ct}>
                {ct === 'All' ? 'All Cities' : ct}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full md:w-1/3">
          <label className="block text-[11px] font-extrabold text-slate-500 uppercase mb-1">
            Search Locality / Address
          </label>
          <input
            type="text"
            placeholder="Search locality e.g. Connaught Place..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 rounded-xl border border-slate-300 text-xs font-extrabold text-slate-800 bg-slate-50 focus:outline-none focus:border-rose-600"
          />
        </div>
      </div>

      {/* Centre Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCentres.map((centre) => (
          <div
            key={centre.id}
            className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex justify-between items-start mb-2">
                <span className="bg-rose-50 text-rose-600 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                  {centre.city}, {centre.state}
                </span>
                {centre.hasHomePickup && (
                  <span className="bg-emerald-50 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                    Home Pickup
                  </span>
                )}
              </div>

              <h3 className="text-base font-extrabold text-slate-900 mb-2 leading-snug">
                {centre.name}
              </h3>

              <p className="text-xs text-slate-600 font-medium mb-3 leading-relaxed">
                {centre.address}
              </p>

              <p className="text-[11px] text-slate-500 font-bold mb-4">
                🕒 {centre.timings}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
              <a
                href={centre.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-rose-600 hover:bg-rose-700 text-white text-xs font-extrabold py-2.5 px-3 rounded-full text-center transition-colors flex items-center justify-center gap-1 shadow-md shadow-rose-600/20"
              >
                <span className="material-symbols-outlined text-sm">directions</span>
                Get Directions
              </a>

              <a
                href={`tel:${centre.phone.replace(/\s+/g, '')}`}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-extrabold py-2.5 px-4 rounded-full text-center transition-colors flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm text-rose-600">call</span>
                Call
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
