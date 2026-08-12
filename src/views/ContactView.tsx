import React, { useState } from 'react';

interface ContactProps {
  onSuccessToast: (msg: string) => void;
}

export const ContactView: React.FC<ContactProps> = ({ onSuccessToast }) => {
  const [activeTab, setActiveTab] = useState<'contact' | 'career' | 'feedback' | 'franchisee'>('contact');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    onSuccessToast(`Thank you ${name}! Your ${activeTab} submission has been received by Suraksha team.`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <span className="bg-rose-50 text-rose-600 border border-rose-200 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
          Reach Out to Us
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-2">
          Contact & Partnership Center
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          Have queries about lab tests, franchise opportunities, or careers? We are here to assist.
        </p>
      </div>

      {/* Sub-Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto">
        {[
          { id: 'contact', label: 'Get In Touch' },
          { id: 'franchisee', label: 'Franchisee Inquiry' },
          { id: 'career', label: 'Careers' },
          { id: 'feedback', label: 'Patient Feedback' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
              activeTab === tab.id
                ? 'bg-rose-600 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Form Container */}
      <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 border border-slate-200 shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-lg font-extrabold text-slate-900 capitalize">
            {activeTab === 'contact' && 'General Inquiry Form'}
            {activeTab === 'franchisee' && 'Suraksha Lab Franchise Application'}
            {activeTab === 'career' && 'Join Suraksha Clinical Team'}
            {activeTab === 'feedback' && 'Patient Experience Feedback'}
          </h3>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Your Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Ananya Sharma"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-rose-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="ananya@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-rose-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {activeTab === 'franchisee' ? 'Proposed City & Investment Budget *' : 'Your Message / Inquiry Details *'}
            </label>
            <textarea
              rows={4}
              required
              placeholder={
                activeTab === 'franchisee'
                  ? 'Specify city, preferred area locality, and expected investment...'
                  : 'Write your message here...'
              }
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-rose-600 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-extrabold py-3.5 rounded-full shadow-lg shadow-rose-600/25 transition-colors"
          >
            Submit {activeTab.toUpperCase()} Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};
