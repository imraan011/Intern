import React, { useState } from 'react';
import { TEST_CATEGORIES } from '../data/suraksha-data';
import { TestCategory } from '../types/suraksha-types';
import { TestCategoryDetailModal } from './TestCategoryDetailModal';

interface CategoriesProps {
  onSelectTestToBook: (testName: string) => void;
}

export const TestCategories: React.FC<CategoriesProps> = ({
  onSelectTestToBook,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<TestCategory | null>(null);

  return (
    <section id="categories" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-wider text-brand-700 bg-brand-50 px-3.5 py-1 rounded-full border border-brand-100">
            Sub-Specialty Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
            Comprehensive Diagnostic Categories
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Explore advanced laboratory testing across major medical disciplines, analyzed on high-throughput robotic platforms.
          </p>
        </div>

        {/* 9 Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEST_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setSelectedCategory(cat)}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-slate-200/80 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-700 group-hover:bg-brand-700 group-hover:text-white transition-colors flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">
                    {cat.icon}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                  {cat.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-extrabold text-brand-700">
                <span>{cat.popularTests.length} Standard Panels</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  View Tests →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      <TestCategoryDetailModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
        onSelectTestToBook={onSelectTestToBook}
      />
    </section>
  );
};
