import React from 'react';

interface MobileStickyProps {
  onOpenBookModal: (type?: 'test' | 'homeCollection') => void;
  onOpenReportModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyProps> = ({
  onOpenBookModal,
  onOpenReportModal,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[130] bg-white border-t border-slate-200 p-3 flex items-center gap-2 sm:hidden shadow-2xl">
      <button
        onClick={() => onOpenBookModal('test')}
        className="flex-1 bg-accent-600 active:bg-accent-700 text-white font-extrabold text-xs py-3 rounded-full flex items-center justify-center gap-1.5 shadow-md"
      >
        <span className="material-symbols-outlined text-base">science</span>
        Book Test
      </button>

      <button
        onClick={() => onOpenBookModal('homeCollection')}
        className="flex-1 bg-brand-700 active:bg-brand-800 text-white font-extrabold text-xs py-3 rounded-full flex items-center justify-center gap-1.5 shadow-md"
      >
        <span className="material-symbols-outlined text-base">home_health</span>
        Home Pickup
      </button>

      <button
        onClick={onOpenReportModal}
        className="bg-slate-100 p-3 rounded-full text-slate-800 shrink-0"
        title="Download Report"
      >
        <span className="material-symbols-outlined text-base text-brand-700">file_download</span>
      </button>
    </div>
  );
};
