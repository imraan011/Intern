import React, { useState } from 'react';
import { loginUser, registerUser, UserProfile } from '../api/client';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: UserProfile) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      if (isLogin) {
        const data = await loginUser({ email: formData.email, password: formData.password });
        onSuccess(data.user);
        onClose();
      } else {
        const data = await registerUser(formData);
        onSuccess(data.user);
        onClose();
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Authentication failed. Please check details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-slate-100 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition-colors"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-br from-brand-700 to-brand-800 text-white">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center font-bold text-lg mb-2">
            S
          </div>
          <h2 className="text-xl font-bold">{isLogin ? 'Patient Login' : 'Create Account'}</h2>
          <p className="text-xs text-brand-100 mt-1">
            Access your lab reports, manage bookings & doctor appointments.
          </p>
        </div>

        {/* Form Area */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {errorMsg && (
            <div className="p-3 text-xs bg-rose-50 border border-rose-200 text-rose-700 rounded-xl">
              {errorMsg}
            </div>
          )}

          {!isLogin && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-700 focus:outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. rahul@example.com"
              className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-700 focus:outline-none"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                required
                value={formData.mobile}
                onChange={handleChange}
                placeholder="e.g. 9876543210"
                className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-700 focus:outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-brand-700 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-brand-700 hover:bg-brand-800 text-white text-xs font-bold rounded-xl shadow-md transition-colors disabled:opacity-50"
          >
            {loading ? 'Please wait...' : isLogin ? 'Sign In' : 'Create Account'}
          </button>

          <div className="text-center pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setErrorMsg('');
              }}
              className="text-xs text-brand-700 font-semibold hover:underline"
            >
              {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
