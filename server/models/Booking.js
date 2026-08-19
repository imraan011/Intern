import mongoose from 'mongoose';

// MongoDB Schema for Diagnostic Test & Package Bookings
const BookingSchema = new mongoose.Schema(
  {
    bookingId: { type: String, required: true, unique: true },
    patientName: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String, default: '' },
    address: { type: String, required: true },
    scheduledDate: { type: String, required: true },
    timeSlot: { type: String, required: true },
    items: [
      {
        id: { type: String, required: true },
        title: { type: String, required: true },
        price: { type: Number, required: true },
        type: { type: String, enum: ['test', 'package'], required: true },
        quantity: { type: Number, default: 1 }
      }
    ],
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'completed', 'cancelled'],
      default: 'confirmed'
    }
  },
  { timestamps: true }
);

export const Booking = mongoose.model('Booking', BookingSchema);
