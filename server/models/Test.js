import mongoose from 'mongoose';

const TestSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    sampleType: { type: String, required: true },
    tat: { type: String, required: true },
    fasting: { type: String, default: 'Not Required' },
    price: { type: Number, required: true },
    originalPrice: { type: Number, required: true },
    popular: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const Test = mongoose.model('Test', TestSchema);
