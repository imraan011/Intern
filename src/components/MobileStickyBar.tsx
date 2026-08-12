import React from 'react';
import { PageView } from '../types/suraksha';

interface MobileStickyProps {
  onNavigate: (page: PageView) => void;
}

export const MobileStickyBar: React.FC<MobileStickyProps> = ({ onNavigate }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[130] bg-white border-t border-slate-200 p-2.5 flex items-center justify-around sm:hidden shadow-2xl">
      <button
        onClick={() => onNavigate('book-test')}
        className="flex-1 bg-rose-600 active:bg-rose-700 text-white font-extrabold text-xs py-2.5 mx-1 rounded-full flex items-center justify-center gap-1 shadow-md"
      >
        <span className="material-symbols-outlined text-base">science</span>
        Book Test
      </button>

      <a
        href="tel:+911149823000"
        className="flex-1 bg-slate-900 active:bg-slate-800 text-white font-extrabold text-xs py-2.5 mx-1 rounded-full flex items-center justify-center gap-1 shadow-md"
      >
        <span className="material-symbols-outlined text-base">call</span>
        Call
      </a>

      <a
        href="https://wa.me/919876543210?text=Hi%20Suraksha%20Care%20Diagnostics%2C%20I%20want%20to%20book%20a%20test."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-emerald-600 active:bg-emerald-700 text-white font-extrabold text-xs py-2.5 mx-1 rounded-full flex items-center justify-center gap-1 shadow-md"
      >
        <span className="material-symbols-outlined text-base">chat</span>
        WhatsApp
      </a>
    </div>
  );
};
