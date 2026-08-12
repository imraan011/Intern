import React from 'react';

interface SolutionsViewProps {
  onOpenBooking: () => void;
  onOpenVideo: () => void;
  onNavigate: (tab: 'home' | 'solutions' | 'services' | 'portal') => void;
}

export const SolutionsView: React.FC<SolutionsViewProps> = ({
  onOpenBooking,
  onOpenVideo,
  onNavigate,
}) => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="px-4 md:px-margin-desktop max-w-container-max mx-auto mb-16">
        <div className="rounded-[36px] overflow-hidden relative min-h-[560px] flex items-center p-8 md:p-14 hero-gradient shadow-sm">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600"
              alt="Medical team consulting mother & child"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent"></div>
          </div>

          {/* Floating badges */}
          <div className="absolute top-8 right-12 glass-panel rounded-full px-4 py-2 flex items-center gap-2 z-10 hidden sm:flex">
            <span className="material-symbols-outlined text-primary text-xs">medical_services</span>
            <span className="text-xs font-semibold text-on-surface">Surgical Department</span>
          </div>

          <div className="absolute bottom-16 right-12 glass-panel rounded-2xl p-4 max-w-xs z-10 hidden lg:block border border-white/60 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary-container text-on-secondary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-lg">calendar_month</span>
              </div>
              <div>
                <p className="text-xs font-bold text-on-surface">Book Appointment</p>
                <p className="text-[10px] text-on-surface-variant">Available today</p>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-on-surface mb-6 border border-white/50 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>Personalized Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface leading-tight mb-4 tracking-tight">
              Healthcare<br />
              for Personalised<br />
              Wellness solutions!
            </h1>

            <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
              Embark on a transformative journey as you dive into the world of health with our commitment to your well-being.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-primary text-white text-xs font-bold rounded-full px-7 py-3.5 flex items-center gap-2 hover:bg-primary-container transition-all shadow-md"
              >
                Explore Programs
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>

              <button
                onClick={onOpenVideo}
                className="bg-white/80 backdrop-blur-md text-on-surface text-xs font-bold rounded-full px-6 py-3.5 flex items-center gap-2 hover:bg-white transition-all border border-outline-variant/30 shadow-sm"
              >
                <span className="material-symbols-outlined text-primary text-lg">play_circle</span>
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* World of Health Section */}
      <section className="px-4 md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-on-surface mb-2">World of health</h2>
            <p className="text-sm text-on-surface-variant max-w-xl leading-relaxed">
              Join us on the forefront of a wellness revolution. This is dedicated to unleashing the potential of personalized healthcare, ensuring that each step of your health is a testament to extraordinary care.
            </p>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="text-primary font-bold text-xs flex items-center gap-1 hover:underline self-start sm:self-auto"
          >
            Read More
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        {/* 3 Equal Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-outline-variant/20 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="h-40 w-full rounded-2xl overflow-hidden bg-secondary-container/20 mb-6 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400"
                  alt="Connected network preview"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <span className="bg-surface-container px-3 py-1 rounded-full text-[10px] font-bold text-on-surface-variant">
                #Feelings
              </span>
              <h3 className="text-lg font-bold text-on-surface mt-3 mb-2">
                Feelmind Platform
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                The digital core for managing your personal health and wellness journey.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-secondary-container/30 rounded-3xl p-6 shadow-sm border border-outline-variant/10 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="h-40 w-full rounded-2xl mb-6 flex items-center justify-center">
                <div className="w-20 h-10 rounded-full bg-primary/20 border border-primary/40 transform -rotate-12 flex items-center justify-center text-xs font-bold text-primary shadow-inner">
                  Pill 3D
                </div>
              </div>
              <span className="bg-white/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-on-surface-variant">
                #Professionals
              </span>
              <h3 className="text-lg font-bold text-on-surface mt-3 mb-2">
                Not just healthcare
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Comprehensive support from leading industry professionals.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-container-low rounded-3xl p-6 shadow-sm border border-outline-variant/20 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-6 bg-white p-3 rounded-2xl shadow-sm border border-outline-variant/10">
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
                <button
                  onClick={onOpenBooking}
                  className="text-primary bg-primary/10 px-3 py-1 rounded-full text-[10px] font-bold"
                >
                  Consult
                </button>
              </div>

              <h3 className="text-lg font-bold text-on-surface mb-4 leading-snug">
                Redefines Precision and Compassion in Care!
              </h3>
              <a href="#" className="text-xs font-bold text-primary hover:underline">
                www.feelmind.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
