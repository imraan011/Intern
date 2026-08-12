import React, { useState } from 'react';
import { PageView } from '../types/suraksha';
import { useCart } from '../context/CartContext';

interface HeaderNavProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  selectedState: string;
  onSelectState: (st: string) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  currentPage,
  onNavigate,
  selectedState,
  onSelectState,
}) => {
  const { setIsCartOpen, totalCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const states = [
    'Delhi NCR',
    'Uttar Pradesh',
    'Bihar',
    'West Bengal',
    'Maharashtra',
    'Karnataka',
    'Telangana',
    'Tamil Nadu',
    'Gujarat',
    'Rajasthan'
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-[100] bg-white border-b border-slate-200 shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <a
              href="tel:+911149823000"
              className="flex items-center gap-1.5 hover:text-white font-semibold transition-colors"
            >
              <span className="material-symbols-outlined text-rose-500 text-sm">call</span>
              <span>24/7 Helpline: +91 11 4982 3000</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-400">Est. 1994 • 30+ Years of Legacy</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Location Selector Dropdown */}
            <div className="flex items-center gap-1.5 bg-slate-800 px-3 py-1 rounded-full text-slate-200 font-semibold border border-slate-700">
              <span className="material-symbols-outlined text-rose-500 text-xs">location_on</span>
              <select
                value={selectedState}
                onChange={(e) => onSelectState(e.target.value)}
                className="bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer"
              >
                {states.map((st) => (
                  <option key={st} value={st} className="bg-slate-900 text-white">
                    {st}
                  </option>
                ))}
              </select>
            </div>

            {/* Cart Icon Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white px-3 py-1 rounded-full text-xs font-extrabold transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-sm">shopping_cart</span>
              <span>Cart</span>
              {totalCount > 0 && (
                <span className="bg-white text-rose-600 w-4 h-4 rounded-full text-[10px] font-black flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Brand Logo (Matching attached logo: Red Suraksha + Grey Clinic & Diagnostics) */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex flex-col text-left group"
        >
          <span className="font-extrabold text-2xl tracking-tighter text-rose-600 leading-none">
            Suraksha
          </span>
          <span className="text-[11px] font-medium text-slate-500 tracking-normal leading-tight">
            Clinic & Diagnostics
          </span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-extrabold text-slate-700">
          <button
            onClick={() => handleNavClick('book-test')}
            className={`transition-colors py-1 ${
              currentPage === 'book-test' ? 'text-rose-600 border-b-2 border-rose-600' : 'hover:text-rose-600'
            }`}
          >
            Book a Test
          </button>

          <button
            onClick={() => handleNavClick('consult-doctor')}
            className={`transition-colors py-1 ${
              currentPage === 'consult-doctor' ? 'text-rose-600 border-b-2 border-rose-600' : 'hover:text-rose-600'
            }`}
          >
            Consult a Doctor
          </button>

          <button
            onClick={() => handleNavClick('packages')}
            className={`transition-colors py-1 ${
              currentPage === 'packages' ? 'text-rose-600 border-b-2 border-rose-600' : 'hover:text-rose-600'
            }`}
          >
            Health Packages
          </button>

          <button
            onClick={() => handleNavClick('centres')}
            className={`transition-colors py-1 ${
              currentPage === 'centres' ? 'text-rose-600 border-b-2 border-rose-600' : 'hover:text-rose-600'
            }`}
          >
            Centres
          </button>

          <button
            onClick={() => handleNavClick('download-report')}
            className={`transition-colors py-1 px-3 rounded-full bg-slate-100 ${
              currentPage === 'download-report' ? 'text-rose-600 bg-rose-50' : 'hover:text-rose-600'
            }`}
          >
            Download Report
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`transition-colors py-1 ${
              currentPage === 'about' ? 'text-rose-600 border-b-2 border-rose-600' : 'hover:text-rose-600'
            }`}
          >
            About Us
          </button>

          <button
            onClick={() => handleNavClick('blog')}
            className={`transition-colors py-1 ${
              currentPage === 'blog' ? 'text-rose-600 border-b-2 border-rose-600' : 'hover:text-rose-600'
            }`}
          >
            Blog
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`transition-colors py-1 ${
              currentPage === 'contact' ? 'text-rose-600 border-b-2 border-rose-600' : 'hover:text-rose-600'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700"
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 p-4 space-y-2">
          <button
            onClick={() => handleNavClick('home')}
            className="w-full text-left py-2.5 px-3 rounded-xl text-xs font-bold text-slate-800 hover:bg-slate-100"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('book-test')}
            className="w-full text-left py-2.5 px-3 rounded-xl text-xs font-bold text-rose-600 bg-rose-50"
          >
            Book a Test
          </button>
          <button
            onClick={() => handleNavClick('consult-doctor')}
            className="w-full text-left py-2.5 px-3 rounded-xl text-xs font-bold text-slate-800 hover:bg-slate-100"
          >
            Consult a Doctor
          </button>
          <button
            onClick={() => handleNavClick('packages')}
            className="w-full text-left py-2.5 px-3 rounded-xl text-xs font-bold text-slate-800 hover:bg-slate-100"
          >
            Health Packages
          </button>
          <button
            onClick={() => handleNavClick('centres')}
            className="w-full text-left py-2.5 px-3 rounded-xl text-xs font-bold text-slate-800 hover:bg-slate-100"
          >
            Centres & Labs
          </button>
          <button
            onClick={() => handleNavClick('download-report')}
            className="w-full text-left py-2.5 px-3 rounded-xl text-xs font-bold text-slate-800 hover:bg-slate-100"
          >
            Download Report
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="w-full text-left py-2.5 px-3 rounded-xl text-xs font-bold text-slate-800 hover:bg-slate-100"
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick('blog')}
            className="w-full text-left py-2.5 px-3 rounded-xl text-xs font-bold text-slate-800 hover:bg-slate-100"
          >
            Health Blog
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full text-left py-2.5 px-3 rounded-xl text-xs font-bold text-slate-800 hover:bg-slate-100"
          >
            Contact & Support
          </button>
        </div>
      )}
    </header>
  );
};
