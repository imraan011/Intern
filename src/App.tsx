import React, { useState } from 'react';
import { NavTab } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { SolutionsView } from './components/SolutionsView';
import { ServicesView } from './components/ServicesView';
import { PortalView } from './components/PortalView';
import { BookingModal } from './components/BookingModal';
import { WellnessQuizModal } from './components/WellnessQuizModal';
import { VideoModal } from './components/VideoModal';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingDoctor, setBookingDoctor] = useState<string | undefined>();
  const [quizOpen, setQuizOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleOpenBooking = (docName?: string) => {
    setBookingDoctor(docName);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-sans selection:bg-primary-container selection:text-on-primary-container">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[250] bg-on-surface text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs font-semibold animate-bounce">
          <span className="material-symbols-outlined text-emerald-400">
            check_circle
          </span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header (Hidden on Portal tab) */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeView
            onOpenBooking={() => handleOpenBooking()}
            onOpenVideo={() => setVideoOpen(true)}
            onNavigate={(tab) => setActiveTab(tab)}
          />
        )}

        {activeTab === 'solutions' && (
          <SolutionsView
            onOpenBooking={() => handleOpenBooking()}
            onOpenVideo={() => setVideoOpen(true)}
            onNavigate={(tab) => setActiveTab(tab)}
          />
        )}

        {activeTab === 'services' && (
          <ServicesView
            onOpenBooking={() => handleOpenBooking()}
            onOpenVideo={() => setVideoOpen(true)}
          />
        )}

        {activeTab === 'portal' && (
          <PortalView
            onOpenBooking={() => handleOpenBooking()}
            onNavigateHome={() => setActiveTab('home')}
          />
        )}
      </main>

      {/* Footer (Hidden on Portal tab) */}
      {activeTab !== 'portal' && (
        <Footer onNavigate={(tab) => setActiveTab(tab)} />
      )}

      {/* Interactive Modals */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialDoctor={bookingDoctor}
        onSuccessToast={showToast}
      />

      <WellnessQuizModal
        isOpen={quizOpen}
        onClose={() => setQuizOpen(false)}
        onSelectDoctor={(doc) => handleOpenBooking(doc)}
      />

      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  );
};
