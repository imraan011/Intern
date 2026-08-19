import React, { useState } from 'react';
import { PageView } from './types/suraksha';
import { CartProvider } from './context/CartContext';
import { HeaderNav } from './components/HeaderNav';
import { CartDrawer } from './components/CartDrawer';
import { CallBackWidget } from './components/CallBackWidget';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileStickyBar } from './components/MobileStickyBar';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';

// Views
import { HomeView } from './views/HomeView';
import { BookTestView } from './views/BookTestView';
import { PackagesView } from './views/PackagesView';
import { ConsultDoctorView } from './views/ConsultDoctorView';
import { FindCentreView } from './views/FindCentreView';
import { DownloadReportView } from './views/DownloadReportView';
import { AboutView } from './views/AboutView';
import { BlogView } from './views/BlogView';
import { ContactView } from './views/ContactView';

export const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [packageFilter, setPackageFilter] = useState<string | undefined>();
  const [selectedState, setSelectedState] = useState<string>('Delhi NCR');

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4500);
  };

  const handleNavigate = (page: PageView, filter?: string) => {
    if (filter) setPackageFilter(filter);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-rose-600 selection:text-white">
      {/* Dynamic SEO Meta Manager */}
      <SEOHead currentPage={currentPage} />

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-20 right-4 sm:right-6 z-[250] bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 text-xs sm:text-sm font-bold border border-slate-700 animate-bounce">
          <span className="material-symbols-outlined text-emerald-400">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Navigation */}
      <HeaderNav
        currentPage={currentPage}
        onNavigate={handleNavigate}
        selectedState={selectedState}
        onSelectState={setSelectedState}
      />

      {/* Main Page View Switching */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenReportModal={() => handleNavigate('download-report')}
          />
        )}

        {currentPage === 'book-test' && <BookTestView />}

        {currentPage === 'packages' && (
          <PackagesView initialFilter={packageFilter} />
        )}

        {currentPage === 'consult-doctor' && (
          <ConsultDoctorView onSuccessToast={showToast} />
        )}

        {currentPage === 'centres' && (
          <FindCentreView initialState={selectedState} />
        )}

        {currentPage === 'download-report' && <DownloadReportView />}

        {currentPage === 'about' && <AboutView />}

        {currentPage === 'blog' && <BlogView />}

        {currentPage === 'contact' && (
          <ContactView onSuccessToast={showToast} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Global Slide-In Cart Drawer */}
      <CartDrawer />

      {/* Floating & Sticky Action Widgets */}
      <CallBackWidget onSuccessToast={showToast} />
      <FloatingWhatsApp />
      <MobileStickyBar onNavigate={handleNavigate} />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};
