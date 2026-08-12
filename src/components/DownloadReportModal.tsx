import React, { useState } from 'react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessToast: (msg: string) => void;
}

export const DownloadReportModal: React.FC<ReportModalProps> = ({
  isOpen,
  onClose,
  onSuccessToast,
}) => {
  const [crnOrMobile, setCrnOrMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  if (!isOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!crnOrMobile.trim()) return;
    setOtpSent(true);
  };

  const handleVerifyDownload = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccessToast(`Verified! Downloading diagnostic report PDF for reference ID ${crnOrMobile}...`);
    onClose();
    setOtpSent(false);
    setCrnOrMobile('');
    setOtp('');
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
            <span className="material-symbols-outlined text-xl">file_download</span>
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">Download Report</h3>
            <span className="text-xs font-semibold text-slate-500">
              Secure Patient Portal
            </span>
          </div>
        </div>

        {!otpSent ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Registered Mobile Number or Lab CRN *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 9876543210 or CRN-88492"
                value={crnOrMobile}
                onChange={(e) => setCrnOrMobile(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-brand-700"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-700 hover:bg-brand-800 text-white text-xs sm:text-sm font-extrabold py-3.5 rounded-full shadow-md transition-colors"
            >
              Get OTP to Download
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyDownload} className="space-y-4">
            <div className="bg-emerald-50 text-emerald-800 p-3 rounded-xl text-xs font-bold">
              ✓ OTP sent to registered number linked with {crnOrMobile}.
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Enter 4-Digit OTP *
              </label>
              <input
                type="text"
                required
                maxLength={4}
                placeholder="1234"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 text-xs font-bold tracking-widest text-center focus:outline-none focus:border-brand-700"
              />
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setOtpSent(false)}
                className="w-1/3 border border-slate-300 py-3 rounded-full text-xs font-bold text-slate-700"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-2/3 bg-brand-700 hover:bg-brand-800 text-white text-xs font-extrabold py-3 rounded-full shadow-md transition-colors"
              >
                Verify & Download PDF
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
