import React, { useState } from 'react';
import { SurakshaHeader } from './components/SurakshaHeader';
import { SurakshaHero } from './components/SurakshaHero';
import { TestCategories } from './components/TestCategories';
import { TechStrip } from './components/TechStrip';
import { StatsCounter } from './components/StatsCounter';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FindCentreSection } from './components/FindCentreSection';
import { SurakshaFooter } from './components/SurakshaFooter';
import { BookTestModal } from './components/BookTestModal';
import { DownloadReportModal } from './components/DownloadReportModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileStickyBar } from './components/MobileStickyBar';

export const App: React.FC = () => {
  const [bookModalOpen, setBookModalOpen] = useState(false);
  const [bookType, setBookType] = useState<'test' | 'homeCollection'>('test');
  const [prefilledTest, setPrefilledTest] = useState<string>('');
  const [reportModalOpen, setReportModalOpen] = useState(false);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4500);
  };

  const handleOpenBookModal = (type: 'test' | 'homeCollection' = 'test', testName: string = '') => {
    setBookType(type);
    setPrefilledTest(testName);
    setBookModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-brand-700 selection:text-white">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed top-20 right-4 sm:right-6 z-[250] bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 text-xs sm:text-sm font-bold border border-slate-700 animate-bounce">
          <span className="material-symbols-outlined text-emerald-400">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Sticky Header */}
      <SurakshaHeader
        onOpenBookModal={(type) => handleOpenBookModal(type)}
        onOpenReportModal={() => setReportModalOpen(true)}
        onScrollToSection={scrollToSection}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <SurakshaHero
          onOpenBookModal={(type) => handleOpenBookModal(type)}
          onScrollToSection={scrollToSection}
        />

        <TestCategories
          onSelectTestToBook={(testName) => handleOpenBookModal('test', testName)}
        />

        <TechStrip />

        <StatsCounter />

        <TestimonialsSection />

        <FindCentreSection
          onOpenBookModal={(type) => handleOpenBookModal(type)}
        />
      </main>

      {/* Footer */}
      <SurakshaFooter
        onOpenBookModal={() => handleOpenBookModal('test')}
        onOpenReportModal={() => setReportModalOpen(true)}
        onScrollToSection={scrollToSection}
      />

      {/* Modals & Sticky Overlays */}
      <BookTestModal
        isOpen={bookModalOpen}
        onClose={() => setBookModalOpen(false)}
        bookingType={bookType}
        prefilledTest={prefilledTest}
        onSuccessToast={showToast}
      />

      <DownloadReportModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
        onSuccessToast={showToast}
      />

      <FloatingWhatsApp />

      <MobileStickyBar
        onOpenBookModal={(type) => handleOpenBookModal(type)}
        onOpenReportModal={() => setReportModalOpen(true)}
      />
    </div>
  );
};
