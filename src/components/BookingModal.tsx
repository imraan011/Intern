import React, { useState } from 'react';
import { DOCTORS_DATA } from '../data/feelmind-data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDoctor?: string;
  onSuccessToast: (msg: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialDoctor,
  onSuccessToast,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedDoctor, setSelectedDoctor] = useState<string>(
    initialDoctor || DOCTORS_DATA[0].name
  );
  const [date, setDate] = useState<string>('2026-08-15');
  const [time, setTime] = useState<string>('10:00 AM');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [reason, setReason] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSuccessToast(
      `Appointment scheduled with ${selectedDoctor} for ${date} at ${time}!`
    );
    onClose();
    // reset form
    setStep(1);
    setName('');
    setEmail('');
    setReason('');
  };

  return (
    <div className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-container text-on-surface flex items-center justify-center text-sm"
        >
          ✕
        </button>

        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-primary text-xl">
            calendar_month
          </span>
          <h3 className="text-xl font-bold text-on-surface">Book Appointment / Join Beta</h3>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-surface-container-high h-1.5 rounded-full mb-6 overflow-hidden">
          <div
            className="bg-primary h-full transition-all duration-300"
            style={{ width: `${(step / 2) * 100}%` }}
          />
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 ? (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-on-surface mb-1">
                  Select Specialist
                </label>
                <select
                  value={selectedDoctor}
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                  className="w-full p-3 rounded-xl border border-outline-variant bg-surface-container-low text-xs font-semibold text-on-surface focus:outline-none focus:border-primary"
                >
                  {DOCTORS_DATA.map((d) => (
                    <option key={d.id} value={d.name}>
                      {d.name} ({d.role})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-on-surface mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-outline-variant text-xs focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-outline-variant text-xs focus:outline-none focus:border-primary"
                  >
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="04:30 PM">04:30 PM</option>
                  </select>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full mt-4 bg-primary text-white text-xs font-semibold py-3 rounded-full hover:bg-primary-container transition-colors shadow-md"
              >
                Continue to Patient Details →
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-on-surface mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-outline-variant text-xs focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-outline-variant text-xs focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface mb-1">
                  Reason / Health Goals (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Brief summary of symptoms or goals..."
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-outline-variant text-xs focus:outline-none focus:border-primary resize-none"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 py-2.5 rounded-full border border-outline-variant text-xs font-semibold text-on-surface"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="w-2/3 bg-primary text-white text-xs font-semibold py-2.5 rounded-full hover:bg-primary-container transition-colors shadow-md"
                >
                  Confirm & Reserve
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
