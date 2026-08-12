import React, { useState } from 'react';

interface CallBackProps {
  onSuccessToast: (msg: string) => void;
}

export const CallBackWidget: React.FC<CallBackProps> = ({ onSuccessToast }) => {
  const [mobile, setMobile] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mobile.trim()) return;
    onSuccessToast(`Callback requested! Suraksha care agent will call ${mobile} in 10 minutes.`);
    setMobile('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-20 left-4 sm:bottom-6 sm:left-6 z-[140]">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-full shadow-2xl text-xs font-extrabold flex items-center gap-2 border border-slate-700 transition-transform hover:scale-105"
        >
          <span className="material-symbols-outlined text-rose-500 text-base">support_agent</span>
          <span>Get a Call Back</span>
        </button>
      ) : (
        <div className="bg-white p-4 rounded-3xl shadow-2xl border border-slate-200 w-72 relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-slate-400 hover:text-slate-700 text-xs font-bold"
          >
            ✕
          </button>
          <h4 className="text-xs font-extrabold text-slate-900 mb-1">Request Free Call Back</h4>
          <p className="text-[11px] text-slate-500 mb-3">Instant consultation & test guidance.</p>
          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              type="tel"
              required
              placeholder="10-digit Mobile No."
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-rose-600"
            />
            <button
              type="submit"
              className="w-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-extrabold py-2 rounded-full shadow-md"
            >
              Submit Callback Request
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
