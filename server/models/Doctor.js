import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    experienceYears: { type: Number, required: true },
    qualification: { type: String, required: true },
    centreName: { type: String, required: true },
    city: { type: String, required: true },
    avatar: { type: String, required: true },
    availableDays: [{ type: String }],
    consultFee: { type: Number, required: true }
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', DoctorSchema);
