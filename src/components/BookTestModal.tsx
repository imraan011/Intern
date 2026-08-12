import React, { useState, useEffect } from 'react';

interface BookModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingType?: 'test' | 'homeCollection';
  prefilledTest?: string;
  onSuccessToast: (msg: string) => void;
}

export const BookTestModal: React.FC<BookModalProps> = ({
  isOpen,
  onClose,
  bookingType = 'test',
  prefilledTest = '',
  onSuccessToast,
}) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [pincode, setPincode] = useState('');
  const [date, setDate] = useState('2026-08-15');
  const [testSearch, setTestSearch] = useState(prefilledTest);
  const [isHomeSample, setIsHomeSample] = useState(bookingType === 'homeCollection');

  useEffect(() => {
    if (prefilledTest) setTestSearch(prefilledTest);
    setIsHomeSample(bookingType === 'homeCollection');
  }, [prefilledTest, bookingType]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mode = isHomeSample ? 'Home Sample Pickup' : 'Lab Visit';
    onSuccessToast(
      `Request received for ${name}! Our counselor will call ${mobile} within 15 mins to confirm your ${mode}.`
    );
    onClose();
    setName('');
    setMobile('');
    setPincode('');
  };

  return (
    <div className="fixed inset-0 z-[170] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 flex items-center justify-center font-bold text-sm transition-colors"
        >
          ✕
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center">
            <span className="material-symbols-outlined text-xl">
              {isHomeSample ? 'home_health' : 'science'}
            </span>
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">
              {isHomeSample ? 'Book Home Sample Pickup' : 'Book Diagnostic Test'}
            </h3>
            <span className="text-xs font-semibold text-slate-500">
              Instant Callback & Confirmation
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Patient Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rajesh Kumar"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-brand-700"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Mobile Number *
              </label>
              <input
                type="tel"
                required
                placeholder="10-digit mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-brand-700"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Pincode *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 110001"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-brand-700"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-brand-700"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Service Type
              </label>
              <select
                value={isHomeSample ? 'home' : 'lab'}
                onChange={(e) => setIsHomeSample(e.target.value === 'home')}
                className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-brand-700"
              >
                <option value="lab">Walk-in Center Visit</option>
                <option value="home">Home Sample Pickup</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Select or Search Test / Profile
            </label>
            <input
              type="text"
              placeholder="e.g. Complete Blood Count, Thyroid, NIPT..."
              value={testSearch}
              onChange={(e) => setTestSearch(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-brand-700"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent-600 hover:bg-accent-700 text-white text-xs sm:text-sm font-extrabold py-3.5 rounded-full shadow-lg shadow-accent-600/25 transition-colors mt-2"
          >
            Request Callback & Confirm
          </button>
        </form>
      </div>
    </div>
  );
};
