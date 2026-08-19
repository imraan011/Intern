import React, { useState } from 'react';
import { DOCTORS_DATA } from '../data/mockData';
import { Doctor } from '../types/suraksha';
import { bookDoctorAppointment } from '../api/client';

interface DoctorViewProps {
  onSuccessToast: (msg: string) => void;
}

export const ConsultDoctorView: React.FC<DoctorViewProps> = ({ onSuccessToast }) => {
  const [selectedSpec, setSelectedSpec] = useState<string>('All');
  const [activeDoctor, setActiveDoctor] = useState<Doctor | null>(null);
  const [selectedDay, setSelectedDay] = useState<string>('Mon');
  const [selectedTime, setSelectedTime] = useState<string>('10:30 AM');
  const [patientName, setPatientName] = useState<string>('');
  const [patientMobile, setPatientMobile] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const specializations = [
    'All',
    'Cardiologist',
    'Dermatologist',
    'Gastroenterologist',
    'Gynaecologist',
    'Endocrinologist',
    'Neurologist',
    'Oncologist',
    'General Physician',
    'Nephrologist',
    'Pediatrician',
    'Pulmonologist',
    'Orthopedic Specialist'
  ];

  const filteredDoctors = DOCTORS_DATA.filter((doc) => {
    return selectedSpec === 'All' || doc.specialization === selectedSpec;
  });

  const handleConfirmAppointment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeDoctor) return;
    if (!patientName.trim() || !patientMobile.trim()) {
      setErrorMsg('Please provide patient name and mobile number');
      return;
    }

    setErrorMsg(null);
    setIsSubmitting(true);

    try {
      const res = await bookDoctorAppointment({
        doctorId: activeDoctor.id,
        doctorName: activeDoctor.name,
        specialization: activeDoctor.specialization,
        centreName: activeDoctor.centreName,
        patientName,
        mobile: patientMobile,
        preferredDate: selectedDay,
        preferredTime: selectedTime
      });

      onSuccessToast(
        `Appointment (${res.appointmentId || 'Confirmed'}) booked for ${patientName} with ${activeDoctor.name} on ${selectedDay} at ${selectedTime}!`
      );
      setActiveDoctor(null);
      setPatientName('');
      setPatientMobile('');
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to book appointment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="bg-teal-50 text-teal-800 border border-teal-200 text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider">
          Expert Clinical Consultations
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-2">
          Consult Senior Specialist Doctors
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          In-person consultations at Suraksha reference centers or via tele-health consultations.
        </p>
      </div>

      {/* Specialization Filter Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {specializations.map((spec) => (
          <button
            key={spec}
            onClick={() => setSelectedSpec(spec)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              selectedSpec === spec
                ? 'bg-teal-700 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {spec}
          </button>
        ))}
      </div>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {filteredDoctors.map((doc) => (
          <div
            key={doc.id}
            className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-md transition-shadow"
          >
            <img
              src={doc.avatar}
              alt={doc.name}
              className="w-24 h-24 rounded-2xl object-cover shadow-sm shrink-0 border-2 border-teal-100"
            />

            <div className="flex-1 text-center sm:text-left space-y-1">
              <span className="bg-teal-50 text-teal-800 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                {doc.specialization}
              </span>
              <h3 className="text-base font-extrabold text-slate-900 mt-1">{doc.name}</h3>
              <p className="text-xs font-semibold text-slate-600">{doc.qualification}</p>
              <p className="text-[11px] text-slate-500 font-bold">
                ⭐ {doc.experienceYears}+ Years Experience • {doc.city}
              </p>
              <p className="text-[11px] text-slate-600 font-medium">📍 {doc.centreName}</p>

              <div className="pt-3 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100">
                <span className="text-sm font-extrabold text-slate-900">
                  Fee: ₹{doc.consultFee}
                </span>
                <button
                  onClick={() => {
                    setActiveDoctor(doc);
                    setSelectedDay(doc.availableDays[0] || 'Mon');
                  }}
                  className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-extrabold px-4 py-2 rounded-full transition-colors shadow-md"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slot Picker Modal */}
      {activeDoctor && (
        <div className="fixed inset-0 z-[160] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => {
                setActiveDoctor(null);
                setErrorMsg(null);
              }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-sm"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <img src={activeDoctor.avatar} alt={activeDoctor.name} className="w-12 h-12 rounded-xl object-cover" />
              <div>
                <h4 className="text-sm font-extrabold text-slate-900">{activeDoctor.name}</h4>
                <p className="text-xs text-teal-800 font-bold">{activeDoctor.specialization}</p>
              </div>
            </div>

            <form onSubmit={handleConfirmAppointment} className="space-y-3">
              {errorMsg && (
                <div className="bg-rose-50 text-rose-700 p-2.5 rounded-xl text-xs font-bold border border-rose-200">
                  ⚠️ {errorMsg}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Patient Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anish Kumar"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-teal-700"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Patient Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={patientMobile}
                  onChange={(e) => setPatientMobile(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-teal-700"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Select Available Day
                </label>
                <div className="flex gap-2">
                  {activeDoctor.availableDays.map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => setSelectedDay(day)}
                      className={`flex-1 py-2 rounded-xl text-xs font-extrabold border ${
                        selectedDay === day
                          ? 'bg-teal-700 text-white border-teal-700'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Select Time Slot
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-800"
                >
                  <option value="10:30 AM">10:30 AM (In-Person)</option>
                  <option value="02:00 PM">02:00 PM (Tele-Health)</option>
                  <option value="05:30 PM">05:30 PM (In-Person)</option>
                </select>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl text-xs font-bold text-slate-700 flex justify-between">
                <span>Consultation Fee:</span>
                <span className="text-rose-600">₹{activeDoctor.consultFee}</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-extrabold py-3.5 rounded-full shadow-lg shadow-rose-600/25 disabled:opacity-50"
              >
                {isSubmitting ? 'Booking Appointment...' : 'Confirm Appointment Slot'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
