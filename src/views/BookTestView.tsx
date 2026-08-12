import React, { useState } from 'react';
import { TESTS_DATA } from '../data/mockData';
import { useCart } from '../context/CartContext';

export const BookTestView: React.FC = () => {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Hematology', 'Diabetes', 'Cardiology', 'Thyroid', 'Liver', 'Kidney', 'Bone & Joint'];

  const filteredTests = TESTS_DATA.filter((test) => {
    const matchesCategory = selectedCategory === 'All' || test.category === selectedCategory;
    const matchesQuery = test.name.toLowerCase().includes(searchQuery.toLowerCase()) || test.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header & Search Bar */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-10 shadow-lg text-center max-w-4xl mx-auto">
        <span className="bg-rose-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
          NABL Accredited Tests
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-2 tracking-tight">
          Book Diagnostic Tests
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 mb-6 font-medium">
          Free Home Sample Pickup • 100% Smart Barcoded Tubes • Digital PDF Reports
        </p>

        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search for a test, e.g. CBC, Lipid Profile, HbA1c..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 rounded-full text-xs font-bold text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 shadow-md"
          />
          <span className="material-symbols-outlined absolute left-4 top-3.5 text-slate-400">
            search
          </span>
        </div>
      </div>

      {/* Filter Category Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              selectedCategory === cat
                ? 'bg-rose-600 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tests Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTests.map((test) => (
          <div
            key={test.id}
            className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full">
                  {test.category}
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-400">
                  {test.code}
                </span>
              </div>

              <h3 className="text-base font-extrabold text-slate-900 mb-2 leading-snug">
                {test.name}
              </h3>

              <div className="space-y-1 text-xs text-slate-600 font-medium mb-4">
                <p><strong>Sample:</strong> {test.sampleType}</p>
                <p><strong>Report TAT:</strong> {test.tat}</p>
                <p><strong>Fasting:</strong> {test.fasting}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 line-through mr-1 font-semibold">
                  ₹{test.originalPrice}
                </span>
                <span className="text-base font-extrabold text-slate-900">
                  ₹{test.price}
                </span>
              </div>

              <button
                onClick={() => addToCart({ id: test.id, title: test.name, price: test.price, type: 'test' })}
                className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-extrabold px-5 py-2.5 rounded-full shadow-md transition-colors flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
