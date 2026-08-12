import React from 'react';
import { TestCategory, TestItem } from '../types/suraksha-types';

interface DetailModalProps {
  category: TestCategory | null;
  onClose: () => void;
  onSelectTestToBook: (testName: string) => void;
}

export const TestCategoryDetailModal: React.FC<DetailModalProps> = ({
  category,
  onClose,
  onSelectTestToBook,
}) => {
  if (!category) return null;

  return (
    <div className="fixed inset-0 z-[160] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 flex items-center justify-center font-bold text-sm transition-colors"
        >
          ✕
        </button>

        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">
              {category.icon}
            </span>
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">{category.name}</h3>
            <span className="text-xs font-semibold text-brand-700">Specialized Panel</span>
          </div>
        </div>

        <p className="text-xs text-slate-600 mb-6 leading-relaxed">
          {category.description}
        </p>

        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          Available Tests & Profiles
        </h4>

        <div className="space-y-3 mb-6">
          {category.popularTests.map((test: TestItem) => (
            <div
              key={test.code}
              className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div>
                <h5 className="text-xs sm:text-sm font-extrabold text-slate-900">
                  {test.name}
                </h5>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Code: {test.code} • Sample: {test.sampleType} • TAT: {test.tat}
                </p>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                <span className="text-sm font-extrabold text-brand-700">
                  ₹{test.price}
                </span>
                <button
                  onClick={() => {
                    onSelectTestToBook(test.name);
                    onClose();
                  }}
                  className="bg-accent-600 hover:bg-accent-700 text-white text-xs font-bold px-3.5 py-1.5 rounded-full transition-colors"
                >
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold py-3 rounded-full transition-colors"
        >
          Close Panel
        </button>
      </div>
    </div>
  );
};
