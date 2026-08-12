import mongoose from 'mongoose';

const CentreSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    locality: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    timings: { type: String, required: true },
    mapsUrl: { type: String, required: true },
    hasImaging: { type: Boolean, default: true },
    hasHomePickup: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export const Centre = mongoose.model('Centre', CentreSchema);
