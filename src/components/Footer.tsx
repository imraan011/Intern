import React from 'react';
import { PageView } from '../types/suraksha';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <button onClick={() => onNavigate('home')} className="text-left">
              <span className="font-black text-2xl tracking-tighter text-rose-500 leading-none block">
                Suraksha
              </span>
              <span className="text-[11px] font-medium text-slate-400 tracking-normal">
                Clinic & Diagnostics
              </span>
            </button>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              "30+ Years of Trusted Diagnostics, Now Closer to You." Founded in 1994, Suraksha Care Diagnostics serves millions across India with accredited laboratory precision.
            </p>

            {/* Accreditation Badges */}
            <div className="pt-2 flex items-center gap-3">
              <div className="bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 text-[10px] font-bold text-slate-300 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-rose-500 text-sm">verified_user</span>
                NABL Accredited Lab
              </div>
              <div className="bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 text-[10px] font-bold text-slate-300 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-teal-400 text-sm">health_and_safety</span>
                ICMR Approved Network
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Patient Services
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-400">
              <li>
                <button onClick={() => onNavigate('book-test')} className="hover:text-white transition-colors">
                  Book a Diagnostic Test
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('packages')} className="hover:text-white transition-colors">
                  Health Checkup Packages
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('consult-doctor')} className="hover:text-white transition-colors">
                  Consult a Doctor Online
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('centres')} className="hover:text-white transition-colors">
                  Find Nearest Lab Centre
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('download-report')} className="hover:text-white transition-colors">
                  Download Test Report
                </button>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Suraksha Care
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-400">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About Our 30-Year Legacy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors">
                  Health Awareness Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Franchise & Partner Enquiries
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Careers & Recruitment
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Contact & Helpline
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Corporate Office
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              Suraksha Care Tower, Plot 42, Connaught Circus, New Delhi - 110001
            </p>
            <p className="text-xs font-bold text-slate-200">
              📞 <a href="tel:+911149823000" className="hover:text-rose-500">+91 11 4982 3000</a>
            </p>
            <p className="text-xs font-bold text-slate-200">
              ✉️ <a href="mailto:care@surakshacare.in" className="hover:text-rose-500">care@surakshacare.in</a>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 1994 - 2026 Suraksha Care Diagnostics. All rights reserved.</p>
          <div className="flex gap-6 font-medium">
            <a href="#privacy" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300">Terms of Use</a>
            <a href="#sitemap" className="hover:text-slate-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
