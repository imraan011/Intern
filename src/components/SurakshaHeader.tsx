import React, { useState } from 'react';
import { UserProfile } from '../api/client';

interface HeaderProps {
  onOpenBookModal: (type?: 'test' | 'homeCollection') => void;
  onOpenReportModal: () => void;
  onScrollToSection: (sectionId: string) => void;
  user?: UserProfile | null;
  onOpenAuthModal?: () => void;
  onLogout?: () => void;
}

export const SurakshaHeader: React.FC<HeaderProps> = ({
  onOpenBookModal,
  onOpenReportModal,
  onScrollToSection,
  user,
  onOpenAuthModal,
  onLogout,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onScrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2.5 text-left group"
        >
          <div className="w-10 h-10 rounded-xl bg-brand-700 text-white flex items-center justify-center font-extrabold text-xl shadow-md group-hover:bg-brand-600 transition-colors">
            S
          </div>
          <div>
            <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight block leading-none">
              Suraksha <span className="text-brand-700">Diagnostics</span>
            </span>
            <span className="text-[10px] font-semibold text-slate-500 tracking-wide uppercase">
              High-End Diagnostic Network
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-slate-700">
          <button
            onClick={() => onOpenBookModal('test')}
            className="hover:text-brand-700 transition-colors"
          >
            Book a Test
          </button>
          <button
            onClick={() => handleNavClick('centres')}
            className="hover:text-brand-700 transition-colors"
          >
            Find a Centre
          </button>
          <button
            onClick={() => onOpenBookModal('homeCollection')}
            className="hover:text-brand-700 transition-colors"
          >
            Home Collection
          </button>
          <button
            onClick={onOpenReportModal}
            className="text-brand-700 hover:text-brand-800 transition-colors bg-brand-50 px-3 py-1.5 rounded-full"
          >
            Download Report
          </button>
          <button
            onClick={() => handleNavClick('tech')}
            className="hover:text-brand-700 transition-colors"
          >
            About & Tech
          </button>
          <button
            onClick={() => handleNavClick('footer')}
            className="hover:text-brand-700 transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full text-xs font-bold text-slate-800">
              <span className="w-6 h-6 rounded-full bg-brand-700 text-white flex items-center justify-center text-[10px]">
                {user.name.charAt(0).toUpperCase()}
              </span>
              <span>{user.name}</span>
              <button
                onClick={onLogout}
                className="text-[10px] text-rose-600 hover:underline ml-1"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuthModal}
              className="flex items-center gap-1.5 text-xs font-bold text-white bg-brand-700 hover:bg-brand-800 px-4 py-2 rounded-full transition-colors shadow-sm"
            >
              Sign In / Account
            </button>
          )}

          <a
            href="tel:+911149823000"
            className="flex items-center gap-1.5 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-full transition-colors"
          >
            <span className="material-symbols-outlined text-sm text-brand-700">call</span>
            Call Us
          </a>

          <a
            href="https://wa.me/919876543210?text=Hi%20Suraksha%20Diagnostics%2C%20I%20want%20to%20inquire%20about%20a%20diagnostic%20test."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-colors"
            title="Chat on WhatsApp"
          >
            <span className="material-symbols-outlined text-lg">chat</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-brand-700"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 p-4 space-y-3">
          {user ? (
            <div className="flex items-center justify-between p-3 bg-brand-50 rounded-xl text-xs font-bold text-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-brand-700 text-white flex items-center justify-center text-xs">
                  {user.name.charAt(0).toUpperCase()}
                </span>
                <div>
                  <span className="block leading-tight">{user.name}</span>
                  <span className="text-[10px] text-slate-500 font-normal">{user.email}</span>
                </div>
              </div>
              <button onClick={onLogout} className="text-xs text-rose-600 hover:underline">
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                onOpenAuthModal?.();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2.5 px-3 text-xs font-bold text-white bg-brand-700 rounded-xl shadow-sm"
            >
              Sign In / Create Account
            </button>
          )}

          <button
            onClick={() => {
              onOpenBookModal('test');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 px-3 text-xs font-bold text-brand-700 bg-brand-50 rounded-xl"
          >
            Book a Test
          </button>
          <button
            onClick={() => handleNavClick('centres')}
            className="w-full text-left py-2 px-3 text-xs font-bold text-slate-700 rounded-xl"
          >
            Find a Centre
          </button>
          <button
            onClick={() => {
              onOpenBookModal('homeCollection');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 px-3 text-xs font-bold text-slate-700 rounded-xl"
          >
            Home Collection
          </button>
          <button
            onClick={() => {
              onOpenReportModal();
              setMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 px-3 text-xs font-bold text-slate-700 rounded-xl"
          >
            Download Report
          </button>
          <button
            onClick={() => handleNavClick('tech')}
            className="w-full text-left py-2 px-3 text-xs font-bold text-slate-700 rounded-xl"
          >
            About & Technology
          </button>

          <div className="pt-2 flex items-center justify-between gap-2 border-t border-slate-100">
            <a
              href="tel:+911149823000"
              className="flex-1 py-2 text-center text-xs font-bold bg-slate-100 rounded-full text-slate-800"
            >
              Call Us
            </a>
            <a
              href="https://wa.me/919876543210?text=Hi%20Suraksha%20Diagnostics%2C%20I%20want%20to%20inquire%20about%20a%20diagnostic%20test."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-center text-xs font-bold bg-emerald-600 text-white rounded-full"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
