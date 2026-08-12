import React, { useState } from 'react';
import { PACKAGES_DATA } from '../data/mockData';
import { PackageItem } from '../types/suraksha';
import { useCart } from '../context/CartContext';

interface PackagesViewProps {
  initialFilter?: string;
}

export const PackagesView: React.FC<PackagesViewProps> = ({ initialFilter }) => {
  const { addToCart } = useCart();
  const [selectedConcern, setSelectedConcern] = useState<string>(initialFilter || 'all');
  const [selectedGender, setSelectedGender] = useState<string>('all');
  const [activePackage, setActivePackage] = useState<PackageItem | null>(null);

  const filteredPackages = PACKAGES_DATA.filter((pkg) => {
    const matchesConcern = selectedConcern === 'all' || pkg.concern === selectedConcern;
    const matchesGender = selectedGender === 'all' || pkg.gender === 'all' || pkg.gender === selectedGender;
    return matchesConcern && matchesGender;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="bg-rose-50 text-rose-600 border border-rose-200 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
          Preventive Diagnostics
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-2">
          Health Checkup Packages
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          Comprehensive multi-parameter health screenings designed by medical experts for early disease detection.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Filters */}
        <aside className="lg:col-span-3 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6 h-fit">
          <div>
            <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-3">
              Filter by Concern
            </h3>
            <div className="space-y-2 text-xs font-bold text-slate-700">
              {['all', 'heart', 'diabetes', 'women', 'senior', 'fever', 'pregnancy', 'liver', 'kidney', 'bone'].map((c) => (
                <label key={c} className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50 cursor-pointer">
                  <input
                    type="radio"
                    name="concern"
                    checked={selectedConcern === c}
                    onChange={() => setSelectedConcern(c)}
                    className="accent-rose-600"
                  />
                  <span className="capitalize">{c === 'all' ? 'All Health Concerns' : c}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-3">
              Filter by Gender
            </h3>
            <div className="space-y-2 text-xs font-bold text-slate-700">
              {['all', 'female', 'male'].map((g) => (
                <label key={g} className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-slate-50 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    checked={selectedGender === g}
                    onChange={() => setSelectedGender(g)}
                    className="accent-rose-600"
                  />
                  <span className="capitalize">{g === 'all' ? 'All Genders' : g}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Package Grid */}
        <main className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-teal-50 text-teal-800 text-[10px] font-extrabold px-2.5 py-1 rounded-full">
                    {pkg.testCount} Tests Included
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                    Free Home Collection
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-snug">
                  {pkg.name}
                </h3>

                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                  {pkg.description}
                </p>

                <div className="bg-slate-50 p-3 rounded-2xl mb-4 border border-slate-100">
                  <span className="text-[11px] font-bold text-slate-700 block mb-1">Key Tests:</span>
                  <ul className="text-xs text-slate-600 space-y-1 font-medium">
                    {pkg.testsIncluded.slice(0, 3).map((t, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-emerald-600 text-xs">check_circle</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 line-through mr-1 font-semibold">
                    ₹{pkg.originalPrice}
                  </span>
                  <span className="text-lg font-extrabold text-slate-900">
                    ₹{pkg.price}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setActivePackage(pkg)}
                    className="border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold px-3 py-2 rounded-full transition-colors"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => addToCart({ id: pkg.id, title: pkg.name, price: pkg.price, type: 'package' })}
                    className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-extrabold px-4 py-2 rounded-full transition-colors shadow-md"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>

      {/* Package Detail Modal */}
      {activePackage && (
        <div className="fixed inset-0 z-[160] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActivePackage(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-sm"
            >
              ✕
            </button>

            <span className="bg-teal-50 text-teal-800 text-[10px] font-extrabold px-3 py-1 rounded-full">
              {activePackage.testCount} Tests Included
            </span>

            <h3 className="text-xl font-extrabold text-slate-900 mt-2 mb-2">
              {activePackage.name}
            </h3>

            <p className="text-xs text-slate-600 mb-4 leading-relaxed font-medium">
              {activePackage.description}
            </p>

            <div className="bg-emerald-50 text-emerald-800 p-3 rounded-2xl text-xs font-bold mb-4 border border-emerald-200">
              ✓ Free Doorstep Home Sample Pickup & Digital Smart PDF Report Included.
            </div>

            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2">
              Full Test Breakdown ({activePackage.testCount} Tests)
            </h4>

            <ul className="space-y-2 mb-6">
              {activePackage.testsIncluded.map((testName, idx) => (
                <li key={idx} className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-2">
                  <span className="material-symbols-outlined text-rose-600 text-sm">science</span>
                  {testName}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <div>
                <span className="text-xs text-slate-400 line-through mr-1 font-semibold">₹{activePackage.originalPrice}</span>
                <span className="text-xl font-extrabold text-slate-900">₹{activePackage.price}</span>
              </div>
              <button
                onClick={() => {
                  addToCart({ id: activePackage.id, title: activePackage.name, price: activePackage.price, type: 'package' });
                  setActivePackage(null);
                }}
                className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-extrabold px-6 py-3 rounded-full shadow-lg shadow-rose-600/25"
              >
                Add Package to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
