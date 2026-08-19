import { Router } from 'express';
import { Test } from '../models/Test.js';
import { Package } from '../models/Package.js';
import { Doctor } from '../models/Doctor.js';
import { Centre } from '../models/Centre.js';
import { Booking } from '../models/Booking.js';
import { DoctorAppointment } from '../models/DoctorAppointment.js';
import { CallbackRequest } from '../models/CallbackRequest.js';
import { Report } from '../models/Report.js';

export const apiRouter = Router();

// Health Check Endpoint
apiRouter.get('/health', (req, res) => {
  res.json({ success: true, data: { status: 'active', timestamp: new Date().toISOString() } });
});

// GET /api/tests — Fetch available pathology/radiology tests
apiRouter.get('/tests', async (req, res, next) => {
  try {
    const tests = await Test.find();
    res.json({ success: true, data: tests });
  } catch (err) {
    next(err);
  }
});

// GET /api/packages — Fetch health checkup packages
apiRouter.get('/packages', async (req, res, next) => {
  try {
    const packages = await Package.find();
    res.json({ success: true, data: packages });
  } catch (err) {
    next(err);
  }
});

// GET /api/doctors — Fetch list of specialist doctors
apiRouter.get('/doctors', async (req, res, next) => {
  try {
    const doctors = await Doctor.find();
    res.json({ success: true, data: doctors });
  } catch (err) {
    next(err);
  }
});

// GET /api/centres — Fetch diagnostic lab centres
apiRouter.get('/centres', async (req, res, next) => {
  try {
    const centres = await Centre.find();
    res.json({ success: true, data: centres });
  } catch (err) {
    next(err);
  }
});

// POST /api/bookings — Create new home sample / lab test booking
apiRouter.post('/bookings', async (req, res, next) => {
  try {
    const { patientName, mobile, email, address, scheduledDate, timeSlot, items, totalAmount } = req.body;

    // Field validation
    if (!patientName || !mobile || !address || !items || !items.length) {
      return res.status(400).json({
        success: false,
        error: { message: 'Missing required booking fields (patientName, mobile, address, items)' }
      });
    }

    const bookingId = 'SRK-' + Math.floor(100000 + Math.random() * 900000);

    const newBooking = new Booking({
      bookingId,
      patientName,
      mobile,
      email: email || '',
      address,
      scheduledDate: scheduledDate || new Date().toISOString().split('T')[0],
      timeSlot: timeSlot || '08:00 AM - 10:00 AM',
      items,
      totalAmount: totalAmount || items.reduce((acc, curr) => acc + curr.price * (curr.quantity || 1), 0),
      status: 'confirmed'
    });

    await newBooking.save();
    res.status(201).json({ success: true, data: newBooking });
  } catch (err) {
    next(err);
  }
});

// GET /api/bookings/:id — Retrieve booking by bookingId or Mongoose _id
apiRouter.get('/bookings/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findOne({
      $or: [{ bookingId: id }, { _id: id.match(/^[0-9a-fA-F]{24}$/) ? id : null }]
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        error: { message: `Booking not found with ID '${id}'` }
      });
    }

    res.json({ success: true, data: booking });
  } catch (err) {
    next(err);
  }
});

// POST /api/appointments — Book doctor consultation appointment
apiRouter.post('/appointments', async (req, res, next) => {
  try {
    const { doctorId, doctorName, specialization, centreName, patientName, mobile, preferredDate, preferredTime } = req.body;

    if (!patientName || !mobile || !doctorName) {
      return res.status(400).json({
        success: false,
        error: { message: 'Missing required appointment fields (patientName, mobile, doctorName)' }
      });
    }

    const appointmentId = 'DOC-APT-' + Math.floor(100000 + Math.random() * 900000);

    const appointment = new DoctorAppointment({
      appointmentId,
      doctorId: doctorId || 'doc-general',
      doctorName,
      specialization: specialization || 'General Physician',
      centreName: centreName || 'Suraksha Main Center',
      patientName,
      mobile,
      preferredDate: preferredDate || 'Mon',
      preferredTime: preferredTime || '10:30 AM',
      status: 'confirmed'
    });

    await appointment.save();
    res.status(201).json({ success: true, data: appointment });
  } catch (err) {
    next(err);
  }
});

// POST /api/callback — Request a callback
apiRouter.post('/callback', async (req, res, next) => {
  try {
    const { name, mobile, message } = req.body;

    if (!name || !mobile) {
      return res.status(400).json({
        success: false,
        error: { message: 'Missing name or mobile number for callback request' }
      });
    }

    const callbackReq = new CallbackRequest({
      name,
      mobile,
      message: message || '',
      status: 'pending'
    });

    await callbackReq.save();
    res.status(201).json({ success: true, data: callbackReq });
  } catch (err) {
    next(err);
  }
});

// GET /api/reports/lookup — Search report by labId or mobileNumber
apiRouter.get('/reports/lookup', async (req, res, next) => {
  try {
    const labId = (req.query.labId || req.query.patientId || '').toString().trim();
    const mobile = (req.query.mobile || req.query.mobileNumber || '').toString().trim();

    if (!labId && !mobile) {
      return res.status(400).json({
        success: false,
        error: { message: 'Please provide either a Lab CRN / Patient ID or Mobile Number to search.' }
      });
    }

    // Query DB for matching report
    const queryConditions = [];
    if (labId) queryConditions.push({ labId: new RegExp(`^${labId}$`, 'i') });
    if (mobile) queryConditions.push({ mobileNumber: new RegExp(`^${mobile}$`, 'i') });

    let report = await Report.findOne({ $or: queryConditions });

    // Fallback seed reports if database is fresh
    if (!report && (labId || mobile)) {
      const sampleReports = [
        {
          labId: 'LAB-98421',
          mobileNumber: '9876543210',
          patientName: 'Rahul Sharma',
          testName: 'Complete Blood Count (CBC) + HbA1c',
          reportUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
          reportDate: new Date().toLocaleDateString('en-IN')
        },
        {
          labId: 'LAB-10293',
          mobileNumber: '9123456789',
          patientName: 'Priya Verma',
          testName: 'Suraksha Full Body Health Shield',
          reportUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
          reportDate: new Date().toLocaleDateString('en-IN')
        }
      ];

      const matchSample = sampleReports.find(
        (sr) => (labId && sr.labId.toLowerCase() === labId.toLowerCase()) || (mobile && sr.mobileNumber === mobile)
      );

      if (matchSample) {
        report = await Report.create(matchSample);
      }
    }

    if (!report) {
      return res.status(404).json({
        success: false,
        error: { message: 'No patient report found matching the provided CRN ID or Mobile Number.' }
      });
    }

    res.json({ success: true, data: report });
  } catch (err) {
    next(err);
  }
});

// POST /api/seed — Seed initial diagnostic lab reports into MongoDB
apiRouter.post('/seed', async (req, res, next) => {
  try {
    await Report.deleteMany({});
    const initialReports = await Report.insertMany([
      {
        labId: 'LAB-98421',
        mobileNumber: '9876543210',
        patientName: 'Rahul Sharma',
        testName: 'Complete Blood Count (CBC) + HbA1c',
        reportUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        reportDate: '18/08/2026'
      },
      {
        labId: 'LAB-10293',
        mobileNumber: '9123456789',
        patientName: 'Priya Verma',
        testName: 'Suraksha Full Body Health Shield',
        reportUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        reportDate: '19/08/2026'
      }
    ]);
    res.json({ success: true, data: { count: initialReports.length, reports: initialReports } });
  } catch (err) {
    next(err);
  }
});
