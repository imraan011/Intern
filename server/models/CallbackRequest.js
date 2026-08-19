import mongoose from 'mongoose';

// MongoDB Schema for Patient Callback & Enquiry Requests
const CallbackRequestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    message: { type: String, default: '' },
    status: {
      type: String,
      enum: ['pending', 'contacted', 'resolved'],
      default: 'pending'
    }
  },
  { timestamps: true }
);

export const CallbackRequest = mongoose.model('CallbackRequest', CallbackRequestSchema);
