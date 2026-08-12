import { Router } from 'express';
import { Test } from '../models/Test.js';
import { Package } from '../models/Package.js';
import { Doctor } from '../models/Doctor.js';
import { Centre } from '../models/Centre.js';
import { Booking } from '../models/Booking.js';

export const apiRouter = Router();

// Health Check
apiRouter.get('/health', (req, res) => {
  res.json({ success: true, message: 'Suraksha Care MERN API running smoothly' });
});

// GET Tests
apiRouter.get('/tests', async (req, res) => {
  try {
    const tests = await Test.find();
    res.json({ success: true, data: tests });
  } catch (err) {
    res.status(500).json({ success: false, error: { message: err.message } });
  }
});

// GET Packages
apiRouter.get('/packages', async (req, res) => {
  try {
    const packages = await Package.find();
    res.json({ success: true, data: packages });
  } catch (err) {
    res.status(500).json({ success: false, error: { message: err.message } });
  }
});

// GET Doctors
apiRouter.get('/doctors', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json({ success: true, data: doctors });
  } catch (err) {
    res.status(500).json({ success: false, error: { message: err.message } });
  }
});

// GET Centres
apiRouter.get('/centres', async (req, res) => {
  try {
    const centres = await Centre.find();
    res.json({ success: true, data: centres });
  } catch (err) {
    res.status(500).json({ success: false, error: { message: err.message } });
  }
});

// POST Booking (Home sample / Lab Visit)
apiRouter.post('/bookings', async (req, res) => {
  try {
    const { patientName, mobile, address, slotDate, slotTime, items, totalAmount } = req.body;
    const mockId = 'SRK-' + Math.floor(100000 + Math.random() * 900000);
    
    const newBooking = new Booking({
      bookingId: mockId,
      patientName,
      mobile,
      address,
      slotDate,
      slotTime,
      items,
      totalAmount
    });

    await newBooking.save();
    res.status(201).json({ success: true, data: newBooking });
  } catch (err) {
    res.status(400).json({ success: false, error: { message: err.message } });
  }
});
