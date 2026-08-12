import React from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-surface-container-lowest rounded-3xl max-w-3xl w-full p-4 relative shadow-2xl overflow-hidden">
        <div className="flex justify-between items-center px-4 py-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">play_circle</span>
            <span className="font-bold text-sm text-on-surface">
              Feelmind - Empathetic Precision Video Teaser
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container text-on-surface flex items-center justify-center text-sm hover:bg-surface-container-high"
          >
            ✕
          </button>
        </div>

        <div className="aspect-video bg-black rounded-2xl overflow-hidden relative flex items-center justify-center">
          {/* Simulated HTML5 Video container */}
          <iframe
            className="w-full h-full border-0"
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
            title="Feelmind Introductory Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
