import React, { useState } from 'react';
import { NavTab } from '../types';

interface HeaderProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenBooking,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  if ((activeTab as string) === 'portal') return null;

  return (
    <header className="fixed top-0 w-full z-[100] px-4 md:px-margin-desktop py-4 max-w-container-max mx-auto left-0 right-0">
      <div className="w-full flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-2 font-bold text-xl text-on-surface tracking-tight"
        >
          <span className="material-symbols-outlined text-primary text-2xl">
            health_and_safety
          </span>
          <span>Feelmind</span>
        </button>

        {/* Center Pill Nav Bar */}
        <div className="hidden md:flex items-center gap-6 bg-surface-container-low/90 backdrop-blur-md rounded-full px-6 py-2 border border-outline-variant/20 shadow-sm">
          <button
            onClick={() => setActiveTab('home')}
            className={`text-xs font-bold transition-all px-3 py-1 rounded-full ${
              activeTab === 'home'
                ? 'text-primary border-b-2 border-primary pb-0.5'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveTab('solutions')}
            className={`text-xs font-bold transition-all px-3 py-1 rounded-full ${
              activeTab === 'solutions'
                ? 'text-primary border-b-2 border-primary pb-0.5'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Solutions
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`text-xs font-bold transition-all px-3 py-1 rounded-full ${
              activeTab === 'services'
                ? 'text-primary border-b-2 border-primary pb-0.5'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => setActiveTab('portal')}
            className={`text-xs font-bold transition-all px-3 py-1 rounded-full ${
              activeTab === 'portal'
                ? 'text-primary border-b-2 border-primary pb-0.5'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Portal
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setActiveTab('portal')}
            className="hidden md:block text-xs font-bold text-on-surface-variant hover:text-primary transition-colors"
          >
            Login
          </button>
          <button
            onClick={onOpenBooking}
            className="bg-primary text-white text-xs font-bold rounded-full px-5 py-2.5 hover:bg-primary-container transition-all flex items-center gap-1.5 shadow-sm"
          >
            Join Beta
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-on-surface p-1"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white mt-2 rounded-2xl p-4 shadow-xl flex flex-col gap-2 border border-outline-variant/20">
          <button
            onClick={() => {
              setActiveTab('home');
              setMobileOpen(false);
            }}
            className="text-left font-bold text-xs py-2 px-3 rounded-lg text-on-surface"
          >
            Home
          </button>
          <button
            onClick={() => {
              setActiveTab('solutions');
              setMobileOpen(false);
            }}
            className="text-left font-bold text-xs py-2 px-3 rounded-lg text-on-surface"
          >
            Solutions
          </button>
          <button
            onClick={() => {
              setActiveTab('services');
              setMobileOpen(false);
            }}
            className="text-left font-bold text-xs py-2 px-3 rounded-lg text-on-surface"
          >
            Services
          </button>
          <button
            onClick={() => {
              setActiveTab('portal');
              setMobileOpen(false);
            }}
            className="text-left font-bold text-xs py-2 px-3 rounded-lg text-on-surface"
          >
            Patient Portal
          </button>
        </div>
      )}
    </header>
  );
};
