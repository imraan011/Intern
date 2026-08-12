import React, { useState } from 'react';

export const DownloadReportView: React.FC = () => {
  const [patientId, setPatientId] = useState('');
  const [mobile, setMobile] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [reportReady, setReportReady] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientId.trim() || !mobile.trim()) return;
    setOtpSent(true);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setReportReady(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg space-y-6">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto shadow-sm">
            <span className="material-symbols-outlined text-3xl">file_download</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Download Test Report
          </h1>
          <p className="text-xs text-slate-500 font-medium">
            Enter your Patient ID or Registered Mobile Number to access NABL digital PDF reports.
          </p>
        </div>

        {!reportReady ? (
          <>
            {!otpSent ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Patient CRN / Registration ID *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CRN-88492"
                    value={patientId}
                    onChange={(e) => setPatientId(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-rose-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Registered Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-rose-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-extrabold py-3.5 rounded-full shadow-lg shadow-rose-600/25 transition-colors"
                >
                  Send Security OTP
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div className="bg-emerald-50 text-emerald-800 p-3 rounded-xl text-xs font-bold">
                  ✓ OTP sent to mobile number ending in {mobile.slice(-4) || '3210'}.
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Enter 4-Digit Security OTP *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={4}
                    placeholder="1234"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full p-3.5 rounded-xl border border-slate-300 text-sm font-black text-center tracking-widest focus:outline-none focus:border-rose-600"
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
                    className="w-2/3 bg-rose-600 hover:bg-rose-700 text-white text-xs font-extrabold py-3 rounded-full shadow-md"
                  >
                    Verify & View Report
                  </button>
                </div>
              </form>
            )}
          </>
        ) : (
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3 text-xs">
              <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                <span className="font-extrabold text-slate-900">Patient: Sarah Jenkins</span>
                <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md">
                  Status: Verified
                </span>
              </div>
              <p><strong>CRN Number:</strong> {patientId}</p>
              <p><strong>Test Profile:</strong> Complete Health Shield + HbA1c Panel</p>
              <p><strong>Sample Date:</strong> Aug 12, 2026 (08:30 AM)</p>
              <p><strong>Ref Pathologist:</strong> Dr. Rohit Sharma, MD</p>
            </div>

            <div className="p-4 rounded-2xl bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200 flex items-center justify-between">
              <span>📄 Digital NABL Barcoded PDF Report Ready (2.4 MB)</span>
              <button
                onClick={() => alert(`Downloading PDF report for ${patientId}...`)}
                className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-full text-xs font-extrabold transition-colors shadow-md"
              >
                Download PDF
              </button>
            </div>

            <button
              onClick={() => {
                setReportReady(false);
                setOtpSent(false);
                setPatientId('');
                setMobile('');
              }}
              className="w-full text-xs font-bold text-slate-600 hover:text-slate-900 underline"
            >
              Search Another Report
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
