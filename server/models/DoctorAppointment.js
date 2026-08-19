import mongoose from 'mongoose';

// MongoDB Schema for Specialist Doctor Appointments
const DoctorAppointmentSchema = new mongoose.Schema(
  {
    appointmentId: { type: String, required: true, unique: true },
    doctorId: { type: String, required: true },
    doctorName: { type: String, required: true },
    specialization: { type: String, required: true },
    centreName: { type: String, required: true },
    patientName: { type: String, required: true },
    mobile: { type: String, required: true },
    preferredDate: { type: String, required: true },
    preferredTime: { type: String, required: true },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'completed', 'cancelled'],
      default: 'confirmed'
    }
  },
  { timestamps: true }
);

export const DoctorAppointment = mongoose.model('DoctorAppointment', DoctorAppointmentSchema);
