import React from 'react';

interface FooterProps {
  onNavigate: (tab: 'home' | 'solutions' | 'services' | 'portal') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full py-16 px-6 md:px-margin-desktop bg-surface-container-low max-w-container-max mx-auto rounded-t-[40px] mt-16 border-t border-outline-variant/20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-primary text-2xl">
              health_and_safety
            </span>
            <span className="font-bold text-lg text-primary">Feelmind</span>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Empathetic Precision in Healthcare for Personalized Wellness Solutions.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-4 text-on-surface">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <button
                onClick={() => onNavigate('home')}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('solutions')}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Wellness Solutions
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('services')}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Services & Doctors
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('portal')}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Patient Portal
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-4 text-on-surface">Support & Legal</h4>
          <ul className="space-y-2.5 text-sm text-on-surface-variant">
            <li>
              <a href="#privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#accessibility" className="hover:text-primary transition-colors">
                Accessibility
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact Support
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-4 text-on-surface">Emergency Care</h4>
          <p className="text-xs text-on-surface-variant mb-2">
            For urgent health consultations call our 24/7 hotline:
          </p>
          <span className="inline-block font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full text-xs">
            1-844-262-2583
          </span>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center text-xs text-on-surface-variant gap-4">
        <p>© 2026 Feelmind Wellness. All rights reserved.</p>
        <p className="text-center md:text-right">Empathetic Precision in Healthcare.</p>
      </div>
    </footer>
  );
};
