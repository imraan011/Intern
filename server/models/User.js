import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true
    },
    mobile: {
      type: String,
      required: [true, 'Mobile number is required'],
      trim: true
    },
    passwordHash: {
      type: String,
      required: true
    },
    salt: {
      type: String,
      required: true
    },
    token: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

export const User = mongoose.model('User', userSchema);
