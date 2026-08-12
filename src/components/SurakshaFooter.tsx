import React from 'react';

interface FooterProps {
  onOpenBookModal: () => void;
  onOpenReportModal: () => void;
  onScrollToSection: (sectionId: string) => void;
}

export const SurakshaFooter: React.FC<FooterProps> = ({
  onOpenBookModal,
  onOpenReportModal,
  onScrollToSection,
}) => {
  return (
    <footer id="footer" className="bg-slate-900 text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center font-extrabold text-xl shadow-md">
                S
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Suraksha <span className="text-brand-500">Diagnostics</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              "Diagnosis that changes what happens next." Pan-India reference network powering sub-specialty diagnostics, molecular profiling, and automated home sample pickup.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#linkedin" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs">
                in
              </a>
              <a href="#instagram" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs">
                ig
              </a>
              <a href="#twitter" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-xs">
                tw
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Patient Services
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-400">
              <li>
                <button onClick={onOpenBookModal} className="hover:text-white transition-colors">
                  Book a Test
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('centres')} className="hover:text-white transition-colors">
                  Find a Centre
                </button>
              </li>
              <li>
                <button onClick={onOpenBookModal} className="hover:text-white transition-colors">
                  Home Collection Request
                </button>
              </li>
              <li>
                <button onClick={onOpenReportModal} className="hover:text-white transition-colors">
                  Download Test Report
                </button>
              </li>
              <li>
                <button onClick={() => onScrollToSection('categories')} className="hover:text-white transition-colors">
                  Test Catalog & Prices
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Diagnostic Technology */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Specialist Labs
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-400">
              <li>Molecular Diagnostics</li>
              <li>Immunohistochemistry (IHC)</li>
              <li>Flow Cytometry</li>
              <li>Histopathology</li>
              <li>Cytopathology & FNAC</li>
              <li>Cytogenetics & FISH</li>
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Head Office Contact
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              E-42, Inner Circle, Connaught Place, New Delhi - 110001
            </p>
            <p className="text-xs font-bold text-slate-200">
              📞 <a href="tel:+911149823000" className="hover:text-brand-500">+91 11 4982 3000</a>
            </p>
            <p className="text-xs font-bold text-slate-200">
              ✉️ <a href="mailto:support@surakshadiagnostics.com" className="hover:text-brand-500">care@surakshadiagnostics.in</a>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Suraksha Diagnostics Network. All rights reserved.</p>
          <div className="flex gap-6 font-medium">
            <a href="#privacy" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300">Terms of Service</a>
            <a href="#nabl" className="hover:text-slate-300">NABL Accreditation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
