import React from 'react';

interface ServicesViewProps {
  onOpenBooking: () => void;
  onOpenVideo: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onOpenBooking,
  onOpenVideo,
}) => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-4 md:px-margin-desktop max-w-container-max mx-auto mb-16">
        <div className="rounded-[36px] overflow-hidden relative min-h-[560px] flex items-center p-8 md:p-14 hero-gradient shadow-sm">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600"
              alt="Medical team walking in hallway"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent"></div>
          </div>

          {/* Floating Badges */}
          <div className="absolute top-8 right-60 glass-panel rounded-full px-4 py-2 flex items-center gap-2 z-10 hidden sm:flex">
            <span className="material-symbols-outlined text-primary text-xs">medical_services</span>
            <span className="text-xs font-semibold text-on-surface">Surgical Department</span>
          </div>

          <div className="absolute top-24 right-12 glass-panel rounded-full px-4 py-2 flex items-center gap-2 z-10 hidden lg:flex">
            <span className="material-symbols-outlined text-primary text-xs">favorite</span>
            <span className="text-xs font-semibold text-on-surface">Healthy patients</span>
          </div>

          {/* Floating Card Right */}
          <div className="absolute bottom-16 right-12 glass-panel rounded-2xl p-5 max-w-sm z-10 hidden lg:block border border-white/60 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-primary/20 text-primary text-[10px] font-bold px-3 py-1 rounded-full">
                Book Appointment
              </span>
            </div>
            <p className="text-xs font-medium text-on-surface leading-relaxed mb-3">
              Experience precision care tailored to your unique wellness journey.
            </p>
            <div className="flex justify-between items-center text-xs font-bold text-on-surface">
              <span>1-844-262-2583</span>
              <button
                onClick={onOpenBooking}
                className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:scale-105 transition-transform"
              >
                →
              </button>
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface leading-tight mb-6 tracking-tight">
              Healthcare<br />
              for Personalised<br />
              Wellness solutions!
            </h1>

            <button
              onClick={onOpenVideo}
              className="bg-white text-on-surface text-xs font-bold rounded-full px-6 py-3.5 flex items-center gap-2 hover:bg-surface-container-high transition-all shadow-md"
            >
              Watch Video
              <span className="material-symbols-outlined text-primary text-lg">play_circle</span>
            </button>
          </div>
        </div>
      </section>

      {/* World of Health Grid Section */}
      <section className="px-4 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-on-surface mb-2">World of health</h2>
          <p className="text-sm text-on-surface-variant max-w-xl">
            Embark on a transformative journey as you dive into the world of health with our commitment to your well-being goes beyond...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Quote Block */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-outline-variant/20 flex flex-col justify-between">
            <div>
              <span className="text-4xl text-primary/30 font-serif font-extrabold block mb-2">99</span>
              <p className="text-sm md:text-base font-bold text-on-surface leading-relaxed mb-6">
                Join us on the forefront of a wellness revolution. This is dedicated to unleashing the potential of personalized healthcare, ensuring that each step of your health is a testament to extraordinary care.
              </p>
            </div>
            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 text-xs font-bold text-on-surface hover:text-primary"
            >
              Read More
              <span className="w-6 h-6 rounded-full bg-on-surface text-white flex items-center justify-center text-xs">
                →
              </span>
            </button>
          </div>

          {/* Card 2: Soft Blue Pill Card */}
          <div className="bg-secondary-container/30 rounded-3xl p-8 shadow-sm border border-outline-variant/10 flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
              💊
            </div>
            <span className="bg-white/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-on-surface-variant mb-2">
              #Professionals
            </span>
            <h3 className="text-xl font-extrabold text-on-surface">Not just healthcare</h3>
          </div>

          {/* Card 3: Mic Node Network */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-outline-variant/20 flex flex-col justify-between items-center text-center">
            <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center my-4 shadow-md">
              <span className="material-symbols-outlined text-3xl">hub</span>
            </div>
            <h3 className="text-xs font-bold text-on-surface max-w-xs mb-4">
              Feelmind is the platform for health and wellness
            </h3>
            <div className="w-full flex justify-between text-xs font-bold pt-3 border-t border-outline-variant/20">
              <span className="text-on-surface-variant">#Feelings</span>
              <button onClick={onOpenBooking} className="text-primary">Explore</button>
            </div>
          </div>

          {/* Card 4: Doctor Specialist Card */}
          <div className="bg-surface-container-low rounded-3xl p-6 shadow-sm border border-outline-variant/20 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100"
                  alt="Tena Johnson"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs font-bold text-on-surface">Tena Johnson</p>
                  <p className="text-[10px] text-on-surface-variant">Surgery specialist</p>
                </div>
              </div>
              <span className="bg-primary/10 text-primary text-[10px] font-bold px-2.5 py-1 rounded-full">
                Appointment
              </span>
            </div>

            <h3 className="text-sm font-bold text-on-surface mb-4 leading-snug">
              Redefines Precision and Compassion in Surgical Care!
            </h3>
            <p className="text-[10px] text-primary font-bold">www.feelminds.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};
