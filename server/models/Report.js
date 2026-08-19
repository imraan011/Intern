import mongoose from 'mongoose';

// MongoDB Schema for Diagnostic Test Reports
const ReportSchema = new mongoose.Schema(
  {
    labId: { type: String, required: true, unique: true },
    mobileNumber: { type: String, required: true },
    patientName: { type: String, required: true },
    testName: { type: String, required: true },
    reportUrl: { type: String, required: true },
    reportDate: { type: String, required: true }
  },
  { timestamps: true }
);

export const Report = mongoose.model('Report', ReportSchema);
