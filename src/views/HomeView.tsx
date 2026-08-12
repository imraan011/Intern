import React, { useState } from 'react';
import { PageView } from '../types/suraksha';
import { PACKAGES_DATA, BLOG_POSTS } from '../data/mockData';
import { useCart } from '../context/CartContext';

interface HomeProps {
  onNavigate: (page: PageView, filter?: string) => void;
  onOpenReportModal: () => void;
}

export const HomeView: React.FC<HomeProps> = ({ onNavigate, onOpenReportModal }) => {
  const { addToCart } = useCart();
  const [heroSlide, setHeroSlide] = useState(0);

  const heroSlides = [
    {
      title: '30+ Years of Trusted Diagnostic Excellence',
      subtitle: 'NABL & ICMR Accredited Automated Reference Network Across India',
      ctaText: 'Book a Test Now',
      page: 'book-test' as PageView,
      bgImg: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Consult Expert Doctors & Specialists Online',
      subtitle: '100+ Senior Clinicians & Pathologists Available for Consultation',
      ctaText: 'Find a Specialist',
      page: 'consult-doctor' as PageView,
      bgImg: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1200'
    },
    {
      title: 'Free Home Sample Pickup in 60 Minutes',
      subtitle: 'Barcoded Smart Tubes & Cold-Chain Transport Guaranteed',
      ctaText: 'Schedule Home Pickup',
      page: 'book-test' as PageView,
      bgImg: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  const concerns = [
    { name: 'Heart', id: 'heart', icon: 'favorite' },
    { name: 'Liver', id: 'liver', icon: 'medical_services' },
    { name: 'Kidney', id: 'kidney', icon: 'water_drop' },
    { name: 'Thyroid', id: 'thyroid', icon: 'vital_signs' },
    { name: 'Diabetes', id: 'diabetes', icon: 'bloodtype' },
    { name: 'Bone & Joint', id: 'bone', icon: 'accessibility' },
    { name: 'Fever Profile', id: 'fever', icon: 'thermostat' },
    { name: 'Pregnancy', id: 'pregnancy', icon: 'pregnant_woman' },
  ];

  const imagingScans = [
    { title: 'MRI Scan', tag: 'High-Field 3T Imaging', icon: 'radiology' },
    { title: 'CT Scan', tag: '128-Slice Low Dose', icon: 'view_in_ar' },
    { title: 'Endoscopy', tag: 'HD Video Visualization', icon: 'biotech' },
    { title: 'Ultrasound', tag: '3D/4D Color Doppler', icon: 'sensors' },
    { title: 'DEXA Scan', tag: 'Bone Density Metric', icon: 'monitor_weight' },
  ];

  const cityChips = ['Delhi', 'Noida', 'Gurugram', 'Lucknow', 'Varanasi', 'Patna', 'Kolkata', 'Mumbai', 'Pune', 'Bengaluru', 'Hyderabad', 'Chennai', 'Jaipur'];
  const specChips = ['Cardiologist', 'Dermatologist', 'Gynaecologist', 'Gastroenterologist', 'Endocrinologist', 'Neurologist', 'Oncologist', 'General Physician', 'Nephrologist', 'Pediatrician', 'Pulmonologist', 'Orthopedic Specialist'];

  return (
    <div className="space-y-16 pb-12">
      {/* 1. Hero Banner Carousel */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="rounded-3xl overflow-hidden relative min-h-[420px] flex items-center p-8 sm:p-14 text-white shadow-xl">
          <img
            src={heroSlides[heroSlide].bgImg}
            alt="Hero banner"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>

          <div className="relative z-10 max-w-xl space-y-4">
            <span className="bg-rose-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Suraksha Care Priority
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              {heroSlides[heroSlide].title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
              {heroSlides[heroSlide].subtitle}
            </p>
            <button
              onClick={() => onNavigate(heroSlides[heroSlide].page)}
              className="bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-extrabold px-7 py-3.5 rounded-full shadow-lg shadow-rose-600/30 transition-all flex items-center gap-2 w-fit"
            >
              <span>{heroSlides[heroSlide].ctaText}</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          {/* Carousel Slide Indicators */}
          <div className="absolute bottom-6 right-8 flex gap-2 z-10">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setHeroSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  heroSlide === idx ? 'bg-rose-600 w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. 4 Quick Action Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            onClick={() => onNavigate('book-test')}
            className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-2xl">science</span>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">Book a Test</h4>
              <p className="text-[11px] text-slate-500 font-semibold">1,000+ Lab Tests</p>
            </div>
          </div>

          <div
            onClick={() => onNavigate('consult-doctor')}
            className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 group-hover:bg-teal-700 group-hover:text-white transition-colors flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-2xl">stethoscope</span>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">Consult Doctor</h4>
              <p className="text-[11px] text-slate-500 font-semibold">Specialist Care</p>
            </div>
          </div>

          <div
            onClick={onOpenReportModal}
            className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 group-hover:bg-sky-700 group-hover:text-white transition-colors flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-2xl">file_download</span>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">Download Report</h4>
              <p className="text-[11px] text-slate-500 font-semibold">PDF Reports</p>
            </div>
          </div>

          <div
            onClick={() => onNavigate('book-test')}
            className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition-colors flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-2xl">home_health</span>
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">Home Collection</h4>
              <p className="text-[11px] text-slate-500 font-semibold">Free Doorstep Pickup</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Most Booked Health Packages Carousel/Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-xs font-extrabold text-rose-600 bg-rose-50 px-3 py-1 rounded-full uppercase">
              Popular Checkups
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Most Booked Health Packages
            </h2>
          </div>
          <button
            onClick={() => onNavigate('packages')}
            className="text-xs font-extrabold text-rose-600 hover:underline flex items-center gap-1"
          >
            View All Packages →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES_DATA.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                <span className="bg-slate-100 text-slate-700 text-[10px] font-extrabold px-2.5 py-1 rounded-full">
                  {pkg.testCount} Tests Included
                </span>
                <h3 className="text-base font-extrabold text-slate-900 mt-3 mb-2 leading-snug">
                  {pkg.name}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 mb-4 font-medium">
                  {pkg.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 line-through mr-1 font-semibold">
                    ₹{pkg.originalPrice}
                  </span>
                  <span className="text-base font-extrabold text-slate-900">
                    ₹{pkg.price}
                  </span>
                </div>
                <button
                  onClick={() => addToCart({ id: pkg.id, title: pkg.name, price: pkg.price, type: 'package' })}
                  className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-extrabold px-4 py-2 rounded-full transition-colors shadow-md"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Browse by Health Concern */}
      <section className="bg-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-2xl font-extrabold text-slate-900">Browse by Health Concern</h2>
            <p className="text-xs text-slate-600 font-semibold mt-1">
              Select your health focus to see tailored diagnostic packages.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {concerns.map((con) => (
              <div
                key={con.id}
                onClick={() => onNavigate('packages', con.id)}
                className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer text-center group border border-slate-200"
              >
                <span className="material-symbols-outlined text-rose-600 text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {con.icon}
                </span>
                <h4 className="text-xs font-extrabold text-slate-800">{con.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Health Scans & Imaging Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-slate-900">Health Scans & Advanced Imaging</h2>
          <p className="text-xs text-slate-600 font-semibold mt-1">High-Precision MRI, CT, and Ultrasound Modalities</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {imagingScans.map((scan, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-center">
              <span className="material-symbols-outlined text-teal-700 text-2xl mb-1">
                {scan.icon}
              </span>
              <h4 className="text-xs font-extrabold text-slate-900">{scan.title}</h4>
              <p className="text-[10px] text-slate-500 mt-0.5">{scan.tag}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Find Your Nearest Centre (Cities Chip List) */}
      <section className="bg-white py-12 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Find Your Nearest Suraksha Centre</h2>
          <p className="text-xs text-slate-600 font-semibold mb-6">Select a city to view locations, timings, and directions</p>

          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {cityChips.map((city) => (
              <button
                key={city}
                onClick={() => onNavigate('centres')}
                className="bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-800 px-4 py-2 rounded-full text-xs font-extrabold border border-slate-200 transition-colors"
              >
                📍 {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Find a Specialist Doctor (Chips) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Find a Specialist Doctor</h2>
        <p className="text-xs text-slate-600 font-semibold mb-6">Consult senior clinicians in-person or via telehealth</p>

        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {specChips.map((spec) => (
            <button
              key={spec}
              onClick={() => onNavigate('consult-doctor')}
              className="bg-teal-50 text-teal-900 hover:bg-teal-700 hover:text-white px-4 py-2 rounded-full text-xs font-extrabold transition-colors border border-teal-100"
            >
              🩺 {spec}
            </button>
          ))}
        </div>
      </section>

      {/* 8. Blog Preview Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">Health Awareness Blog</h2>
            <p className="text-xs text-slate-600 font-semibold mt-1">Medical insights written by reference lab doctors</p>
          </div>
          <button onClick={() => onNavigate('blog')} className="text-xs font-extrabold text-rose-600 hover:underline">
            View All Articles →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((blog) => (
            <div key={blog.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover" />
                <div className="p-5">
                  <span className="text-[10px] font-extrabold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full">
                    {blog.category}
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 mt-2 mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 font-medium">
                    {blog.excerpt}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <button onClick={() => onNavigate('blog')} className="text-xs font-extrabold text-rose-600 hover:underline">
                  Continue Reading →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
