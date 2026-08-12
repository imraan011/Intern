import React from 'react';
import { DOCTORS_DATA } from '../data/feelmind-data';

interface HomeViewProps {
  onOpenBooking: () => void;
  onOpenVideo: () => void;
  onNavigate: (tab: 'home' | 'solutions' | 'services' | 'portal') => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onOpenBooking,
  onOpenVideo,
  onNavigate,
}) => {
  const tenaDoctor = DOCTORS_DATA[0];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-4 md:px-margin-desktop max-w-container-max mx-auto mb-16">
        <div className="rounded-[36px] overflow-hidden relative min-h-[580px] flex items-end p-6 md:p-12 hero-gradient shadow-sm">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1600"
              alt="Male doctor consulting mother and daughter"
              className="w-full h-full object-cover opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          {/* Floating Badges */}
          <div className="absolute top-8 left-8 glass-panel rounded-full px-4 py-2 flex items-center gap-2 z-10 hidden sm:flex">
            <span className="material-symbols-outlined text-primary text-xs">star</span>
            <span className="text-xs font-semibold text-on-surface">Empathetic Precision</span>
          </div>

          <div className="absolute top-8 left-60 glass-panel rounded-full px-4 py-2 flex items-center gap-2 z-10 hidden md:flex">
            <span className="material-symbols-outlined text-primary text-xs">medical_services</span>
            <span className="text-xs font-semibold text-on-surface">Surgical Department</span>
          </div>

          <div className="absolute top-12 right-12 glass-panel rounded-full px-4 py-2 flex items-center gap-2 z-10 hidden lg:flex">
            <span className="material-symbols-outlined text-primary text-xs">check_circle</span>
            <span className="text-xs font-semibold text-on-surface">Healthy patients</span>
          </div>

          {/* Floating Appointment Card */}
          <div className="absolute bottom-28 right-12 glass-panel rounded-2xl p-4 max-w-xs z-10 hidden lg:block border border-white/60 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-lg">calendar_month</span>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface">Book Appointment</p>
                <p className="text-[10px] text-on-surface-variant">Experience precise care</p>
              </div>
              <button
                onClick={onOpenBooking}
                className="ml-auto w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:scale-105 transition-transform"
              >
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-md tracking-tight">
              Healthcare<br />
              for Personalised<br />
              Wellness solutions!
            </h1>
            <div className="flex items-center gap-4">
              <button
                onClick={onOpenVideo}
                className="bg-white text-on-surface text-xs font-bold rounded-full px-6 py-3 flex items-center gap-2 hover:bg-surface-container-high transition-all shadow-md"
              >
                Watch Video
                <span className="material-symbols-outlined text-primary text-lg">play_circle</span>
              </button>

              <div className="flex items-center -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1594824813566-78853a152068?auto=format&fit=crop&q=80&w=100"
                  alt="Doctor avatar"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=100"
                  alt="Doctor avatar"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <div className="w-8 h-8 rounded-full border-2 border-white bg-surface-container text-primary font-bold text-[10px] flex items-center justify-center">
                  +2k
                </div>
              </div>
            </div>
          </div>

          {/* Phone Badge */}
          <div className="absolute bottom-6 right-8 glass-panel !bg-white/20 !border-white/30 rounded-full px-4 py-1.5 z-10 text-white text-xs font-semibold">
            1-844-262-2583
          </div>
        </div>
      </section>

      {/* World of Health Section */}
      <section className="px-4 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Text Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-3xl font-extrabold mb-4 text-on-surface">World of health</h2>
            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
              Embark on a transformative journey as you dive into the world of health with our commitment to your well-being goes beyond...
            </p>

            <div className="pl-4 border-l-2 border-outline-variant/40 relative mb-6">
              <span className="text-3xl text-outline-variant font-serif leading-none block mb-1">“</span>
              <p className="text-xs md:text-sm font-medium text-on-surface leading-relaxed">
                Join us on the forefront of a wellness revolution. This is dedicated to unleashing the potential of personalized healthcare, ensuring that each step of your health is a testament to extraordinary care.
              </p>
            </div>

            <button
              onClick={() => onNavigate('solutions')}
              className="flex items-center gap-2 text-primary font-bold text-xs hover:underline"
            >
              Read More
              <span className="material-symbols-outlined bg-primary text-white rounded-full p-1 text-xs">
                arrow_forward
              </span>
            </button>
          </div>

          {/* Right Bento Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Bento Card 1: Platform Graph */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-outline-variant/20 flex flex-col justify-between items-center text-center">
              <div className="w-36 h-36 rounded-full border border-dashed border-outline-variant/40 flex items-center justify-center relative mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-2xl">mic</span>
                </div>
                {/* Outer avatars */}
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="avatar" className="w-6 h-6 rounded-full absolute top-1 right-4" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="avatar" className="w-6 h-6 rounded-full absolute bottom-2 left-4" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" alt="avatar" className="w-6 h-6 rounded-full absolute top-1/2 -left-2" />
              </div>

              <h3 className="text-sm font-bold text-on-surface mb-4 max-w-xs">
                Feelmind is the platform for health and wellness
              </h3>

              <div className="w-full flex justify-between items-center text-xs font-semibold pt-4 border-t border-outline-variant/20">
                <span className="text-on-surface-variant">#Feelings</span>
                <button onClick={() => onNavigate('solutions')} className="text-on-surface hover:text-primary flex items-center gap-1">
                  Explore ›
                </button>
              </div>
            </div>

            {/* Right Column Stack */}
            <div className="flex flex-col gap-6">
              {/* Pill Card */}
              <div className="bg-surface-container-low rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between shadow-sm min-h-[160px]">
                <span className="glass-panel rounded-full px-3 py-1 text-[10px] font-bold text-on-surface w-fit mb-4">
                  #Professionals
                </span>
                <div className="flex items-center justify-center my-2">
                  <div className="w-16 h-8 rounded-full bg-primary/20 border border-primary/40 transform -rotate-12 flex items-center justify-center text-xs font-bold text-primary">
                    Pill
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <h3 className="text-base font-bold text-on-surface">Not just healthcare</h3>
                  <button onClick={onOpenBooking} className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center text-xs">
                    +
                  </button>
                </div>
              </div>

              {/* Doctor Card */}
              <div className="bg-secondary-fixed rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={tenaDoctor.avatar}
                      alt={tenaDoctor.name}
                      className="w-10 h-10 rounded-full object-cover shadow-sm"
                    />
                    <div>
                      <p className="text-xs font-bold text-on-secondary-fixed">
                        {tenaDoctor.name}
                      </p>
                      <p className="text-[10px] text-on-secondary-fixed/70">
                        {tenaDoctor.role}
                      </p>
                    </div>
                  </div>
                  <span className="bg-white/60 rounded-full px-2.5 py-1 text-[10px] font-bold text-on-secondary-fixed">
                    Appointment ↗
                  </span>
                </div>

                <h4 className="text-xs font-bold text-on-secondary-fixed leading-snug">
                  Redefines Precision and Compassion in Surgical Care!
                </h4>
                <p className="text-[10px] text-on-secondary-fixed/70 mt-2">
                  www.feelminds.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
