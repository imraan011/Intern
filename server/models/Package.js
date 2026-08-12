import mongoose from 'mongoose';

const PackageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    concern: { type: String, required: true },
    gender: { type: String, default: 'all' },
    ageGroup: { type: String, default: 'All Ages' },
    testCount: { type: Number, required: true },
    price: { type: Number, required: true },
    originalPrice: { type: Number, required: true },
    testsIncluded: [{ type: String }],
    description: { type: String, required: true },
    popular: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const Package = mongoose.model('Package', PackageSchema);
