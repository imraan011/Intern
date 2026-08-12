import React from 'react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20Suraksha%20Diagnostics%2C%20I%20want%20to%20inquire%20about%20a%20test%20booking."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-5 sm:bottom-6 sm:right-6 z-[140] bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center gap-2 group"
      title="Chat on WhatsApp"
      aria-label="WhatsApp Support Chat"
    >
      <span className="material-symbols-outlined text-2xl sm:text-3xl">chat</span>
      <span className="hidden group-hover:inline text-xs font-extrabold pr-1">
        WhatsApp Us
      </span>
    </a>
  );
};
