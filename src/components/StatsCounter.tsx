import React from 'react';

export const StatsCounter: React.FC = () => {
  const stats = [
    { label: 'Partner Labs Across India', count: '50+', icon: 'local_hospital' },
    { label: 'Patients Served Annually', count: '10 Lakh+', icon: 'groups' },
    { label: 'Pharma Collaborations', count: '500+', icon: 'handshake' },
    { label: 'Doctors Trust Us', count: '5,000+', icon: 'verified' },
  ];

  return (
    <section className="py-12 bg-brand-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-brand-800/40 backdrop-blur-sm p-6 rounded-3xl border border-brand-600/30">
              <span className="material-symbols-outlined text-brand-200 text-3xl mb-2 block">
                {stat.icon}
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-1">
                {stat.count}
              </div>
              <div className="text-xs font-semibold text-brand-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
