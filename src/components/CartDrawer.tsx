import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const { cartItems, removeFromCart, clearCart, isCartOpen, setIsCartOpen, totalAmount } = useCart();
  const [step, setStep] = useState<'cart' | 'checkout' | 'confirmation'>('cart');

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [slotDate, setSlotDate] = useState('2026-08-15');
  const [slotTime, setSlotTime] = useState('08:00 AM - 10:00 AM');
  const [bookingId, setBookingId] = useState('');

  if (!isCartOpen) return null;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mockId = 'SRK-' + Math.floor(100000 + Math.random() * 900000);
    setBookingId(mockId);
    setStep('confirmation');
    clearCart();
  };

  const handleClose = () => {
    setIsCartOpen(false);
    setStep('cart');
  };

  return (
    <div className="fixed inset-0 z-[200] bg-slate-900/60 backdrop-blur-sm flex justify-end transition-opacity">
      <div className="bg-white w-full max-w-md h-full flex flex-col justify-between shadow-2xl relative">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-rose-600">shopping_cart</span>
            <h3 className="text-base font-extrabold text-slate-900">
              {step === 'cart' && 'Your Test Cart'}
              {step === 'checkout' && 'Complete Home Collection Booking'}
              {step === 'confirmation' && 'Booking Confirmed!'}
            </h3>
          </div>

          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-700 flex items-center justify-center font-bold text-sm"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5">
          {step === 'cart' && (
            <>
              {cartItems.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <span className="material-symbols-outlined text-slate-300 text-5xl">
                    remove_shopping_cart
                  </span>
                  <p className="text-sm font-bold text-slate-700">Your cart is empty</p>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto">
                    Add diagnostic tests or full body health packages to proceed.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3"
                    >
                      <div>
                        <span className="text-[10px] font-extrabold uppercase text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md">
                          {item.type}
                        </span>
                        <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 mt-1">
                          {item.title}
                        </h4>
                        <p className="text-xs font-bold text-slate-700 mt-0.5">
                          ₹{item.price} × {item.quantity}
                        </p>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-400 hover:text-rose-600 p-1"
                        title="Remove item"
                      >
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {step === 'checkout' && (
            <form onSubmit={handleCheckoutSubmit} className="space-y-4">
              <div className="bg-emerald-50 text-emerald-800 p-3 rounded-2xl text-xs font-bold border border-emerald-200">
                ⚡ Direct Guest Booking: No login or account required.
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Verma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-rose-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-rose-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Sample Pickup Address *
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="House/Flat No., Street, Landmark, Pincode"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-rose-600 resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    value={slotDate}
                    onChange={(e) => setSlotDate(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-rose-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Time Slot
                  </label>
                  <select
                    value={slotTime}
                    onChange={(e) => setSlotTime(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-semibold focus:outline-none focus:border-rose-600"
                  >
                    <option value="06:30 AM - 08:30 AM">06:30 AM - 08:30 AM</option>
                    <option value="08:00 AM - 10:00 AM">08:00 AM - 10:00 AM</option>
                    <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white font-extrabold text-xs sm:text-sm py-3.5 rounded-full shadow-lg shadow-rose-600/25 transition-colors mt-2"
              >
                Confirm Booking (Pay on Collection)
              </button>
            </form>
          )}

          {step === 'confirmation' && (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto shadow-sm">
                ✓
              </div>

              <div>
                <h4 className="text-lg font-extrabold text-slate-900">Booking Confirmed!</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Reference Booking ID: <strong className="text-rose-600 font-mono">{bookingId}</strong>
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-1.5 font-medium text-slate-700">
                <p><strong>Phlebotomist Assigned:</strong> Suraksha Express Agent</p>
                <p><strong>Scheduled Slot:</strong> {slotDate} ({slotTime})</p>
                <p><strong>Pickup Address:</strong> {address || 'Home Location'}</p>
              </div>

              <div className="p-4 rounded-2xl bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200">
                🚀 Track your sample status live on Suraksha App using ID {bookingId}.
              </div>

              <button
                onClick={handleClose}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-3 rounded-full transition-colors"
              >
                Done
              </button>
            </div>
          )}
        </div>

        {/* Footer Checkout Bar */}
        {step === 'cart' && cartItems.length > 0 && (
          <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3">
            <div className="flex justify-between items-center text-sm font-extrabold text-slate-900">
              <span>Total Subtotal:</span>
              <span className="text-rose-600 text-base">₹{totalAmount}</span>
            </div>

            <button
              onClick={() => setStep('checkout')}
              className="w-full bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-extrabold py-3.5 rounded-full shadow-lg shadow-rose-600/25 transition-all"
            >
              Proceed to Book →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
