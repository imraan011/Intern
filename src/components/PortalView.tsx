import React, { useState } from 'react';
import { MOCK_PATIENT_RECORD } from '../data/feelmind-data';

interface PortalViewProps {
  onOpenBooking: () => void;
  onNavigateHome: () => void;
}

export const PortalView: React.FC<PortalViewProps> = ({
  onOpenBooking,
  onNavigateHome,
}) => {
  const patient = MOCK_PATIENT_RECORD;
  const [activePortalTab, setActivePortalTab] = useState<string>('dashboard');

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex text-on-surface">
      {/* Left Sidebar */}
      <aside className="w-64 bg-white border-r border-outline-variant/20 flex flex-col justify-between p-6 shrink-0 min-h-screen">
        <div>
          {/* Brand header */}
          <div
            onClick={onNavigateHome}
            className="flex items-center gap-3 cursor-pointer mb-8"
          >
            <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs">
              FM
            </div>
            <div>
              <h2 className="text-sm font-bold text-on-surface">Patient Portal</h2>
              <p className="text-[10px] text-on-surface-variant">Manage your wellness</p>
            </div>
          </div>

          {/* Book CTA */}
          <button
            onClick={onOpenBooking}
            className="w-full bg-primary text-white text-xs font-bold py-3 px-4 rounded-full mb-8 hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-md shadow-primary/20"
          >
            <span className="text-base font-bold">+</span>
            Book New Appointment
          </button>

          {/* Nav list */}
          <nav className="space-y-1">
            <button
              onClick={() => setActivePortalTab('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
                activePortalTab === 'dashboard'
                  ? 'bg-primary/15 text-primary'
                  : 'text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              <span className="material-symbols-outlined text-sm">grid_view</span>
              Dashboard
            </button>
            <button
              onClick={() => setActivePortalTab('plans')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
                activePortalTab === 'plans'
                  ? 'bg-primary/15 text-primary'
                  : 'text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              <span className="material-symbols-outlined text-sm">spa</span>
              Wellness Plans
            </button>
            <button
              onClick={() => setActivePortalTab('depts')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
                activePortalTab === 'depts'
                  ? 'bg-primary/15 text-primary'
                  : 'text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              <span className="material-symbols-outlined text-sm">local_hospital</span>
              Medical Depts
            </button>
            <button
              onClick={() => setActivePortalTab('appointments')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
                activePortalTab === 'appointments'
                  ? 'bg-primary/15 text-primary'
                  : 'text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              <span className="material-symbols-outlined text-sm">calendar_month</span>
              Appointments
            </button>
            <button
              onClick={() => setActivePortalTab('records')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
                activePortalTab === 'records'
                  ? 'bg-primary/15 text-primary'
                  : 'text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              <span className="material-symbols-outlined text-sm">description</span>
              Health Records
            </button>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="space-y-4 pt-6 border-t border-outline-variant/20">
          <div className="space-y-1 text-xs text-on-surface-variant font-medium">
            <button className="w-full flex items-center gap-3 px-4 py-2 hover:text-primary">
              <span className="material-symbols-outlined text-sm">settings</span>
              Settings
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2 hover:text-primary">
              <span className="material-symbols-outlined text-sm">help</span>
              Support
            </button>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
              alt="Sarah Jenkins"
              className="w-9 h-9 rounded-full object-cover shadow-sm"
            />
            <div>
              <p className="text-xs font-bold text-on-surface">{patient.patientName}</p>
              <p className="text-[10px] text-on-surface-variant">Patient ID: 8934</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        {/* Header Greeting */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-on-surface tracking-tight">
              Good morning, Sarah
            </h1>
            <p className="text-xs text-on-surface-variant mt-1">
              Here is your wellness summary for today. Your vitals are looking great, and you have an upcoming consultation this afternoon.
            </p>
          </div>

          <div className="bg-white px-4 py-2 rounded-full border border-outline-variant/20 shadow-sm text-xs font-semibold text-on-surface flex items-center gap-2 self-start sm:self-auto">
            <span className="material-symbols-outlined text-sm text-primary">calendar_today</span>
            <span>Oct 24, 2026</span>
          </div>
        </div>

        {/* Row 1 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Next Appointment Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 shadow-sm border border-outline-variant/20 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2 text-xs font-bold text-on-surface">
                <span className="material-symbols-outlined text-primary text-sm">calendar_month</span>
                <span>Next Appointment</span>
              </div>
              <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full">
                Today
              </span>
            </div>

            <div className="bg-surface-container-low/60 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200"
                  alt="Dr. Alexander Chen"
                  className="w-14 h-14 rounded-full object-cover shadow-sm"
                />
                <div>
                  <h4 className="text-sm font-bold text-on-surface">Dr. Alexander Chen</h4>
                  <p className="text-xs text-on-surface-variant flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-xs">stethoscope</span>
                    Cardiology Specialist
                  </p>
                  <p className="text-[11px] text-on-surface-variant mt-1">
                    🕒 2:30 PM &nbsp;|&nbsp; 📹 Telehealth
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="bg-primary text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-primary-container transition-all shadow-md shadow-primary/20"
              >
                Join Call
              </button>
            </div>
          </div>

          {/* Wellness Score Card */}
          <div className="lg:col-span-5 bg-secondary-container/40 rounded-3xl p-6 shadow-sm border border-outline-variant/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-on-surface mb-1">
                <span className="material-symbols-outlined text-primary text-sm">favorite</span>
                <span>Wellness Score</span>
              </div>
              <p className="text-[11px] text-on-surface-variant">Based on recent activity & vitals</p>
            </div>

            <div className="my-4">
              <span className="text-4xl font-extrabold text-on-surface">86</span>
              <span className="text-xs font-bold text-on-surface-variant"> /100</span>
            </div>

            <div>
              <div className="flex justify-between text-[11px] font-bold text-on-surface-variant mb-1">
                <span>Weekly Goal</span>
                <span className="text-primary">+4 pts</span>
              </div>
              <div className="w-full bg-white h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full" style={{ width: '86%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 Vitals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-3xl border border-outline-variant/20 shadow-sm">
            <span className="text-xs text-on-surface-variant font-semibold block mb-1">Avg Heart Rate</span>
            <p className="text-2xl font-extrabold text-on-surface">72 <span className="text-xs font-normal">bpm</span></p>
            <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 mt-2">
              ~ Normal range
            </span>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-outline-variant/20 shadow-sm">
            <span className="text-xs text-on-surface-variant font-semibold block mb-1">Daily Steps</span>
            <p className="text-2xl font-extrabold text-on-surface">8,432</p>
            <div className="w-full bg-surface-container-high h-1.5 rounded-full mt-3 overflow-hidden">
              <div className="bg-primary h-full rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-outline-variant/20 shadow-sm">
            <span className="text-xs text-on-surface-variant font-semibold block mb-1">Sleep Duration</span>
            <p className="text-2xl font-extrabold text-on-surface">7h 15m</p>
            <span className="text-[10px] text-primary font-bold flex items-center gap-1 mt-2">
              ✓ Optimal
            </span>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-outline-variant/20 shadow-sm">
            <span className="text-xs text-on-surface-variant font-semibold block mb-1">Current Weight</span>
            <p className="text-2xl font-extrabold text-on-surface">142 <span className="text-xs font-normal">lbs</span></p>
            <span className="text-[10px] text-on-surface-variant font-bold flex items-center gap-1 mt-2">
              — Steady
            </span>
          </div>
        </div>

        {/* Row 3 Documents & Results */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-outline-variant/20">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-base font-bold text-on-surface">Recent Documents & Results</h3>
            <button className="text-xs font-bold text-primary hover:underline">View All</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-surface-container-low p-4 rounded-2xl flex items-center justify-between border border-outline-variant/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                  🧪
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface">Comprehensive Blood Panel</p>
                  <p className="text-[10px] text-on-surface-variant">Lab Report</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-on-surface-variant bg-white px-2.5 py-1 rounded-full border border-outline-variant/20">
                Oct 20
              </span>
            </div>

            <div className="bg-surface-container-low p-4 rounded-2xl flex items-center justify-between border border-outline-variant/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                  📋
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface">Prescription Renewal</p>
                  <p className="text-[10px] text-on-surface-variant">CardioShield Rx</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-on-surface-variant bg-white px-2.5 py-1 rounded-full border border-outline-variant/20">
                Oct 15
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden min-h-[70px] flex items-center p-4 text-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400"
                alt="Wellness program banner"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <span className="relative z-10 text-xs font-bold bg-white/30 backdrop-blur-md px-3 py-1 rounded-full">
                Wellness Program
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
