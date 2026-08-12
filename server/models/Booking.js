import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema(
  {
    bookingId: { type: String, required: true, unique: true },
    patientName: { type: String, required: true },
    mobile: { type: String, required: true },
    address: { type: String, required: true },
    slotDate: { type: String, required: true },
    slotTime: { type: String, required: true },
    items: [
      {
        id: String,
        title: String,
        price: Number,
        type: { type: String },
        quantity: Number
      }
    ],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: 'Confirmed' }
  },
  { timestamps: true }
);

export const Booking = mongoose.model('Booking', BookingSchema);
