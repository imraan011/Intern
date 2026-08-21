import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import dns from 'dns';
import { fileURLToPath } from 'url';
import { apiRouter } from './routes/api.js';

// Use Google & Cloudflare DNS to bypass local ISP SRV record blocks (Jio/Airtel/Windows DNS)
try {
  dns.setServers(['8.8.8.8', '1.1.1.1', '8.8.4.4']);
  dns.setDefaultResultOrder('ipv4first');
} catch (err) {
  console.warn('[DNS Setup]', err.message);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/suraksha_diagnostics';

// Middlewares
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost:3000'],
    credentials: true
  })
);
app.use(express.json());

// API Routes
app.use('/api', apiRouter);

// Root Status Route
app.get('/', (req, res) => {
  res.json({
    success: true,
    data: {
      server: 'Suraksha Care Diagnostics MERN Stack Backend',
      status: 'active',
      endpoints: [
        'POST /api/bookings',
        'GET /api/bookings/:id',
        'POST /api/appointments',
        'POST /api/callback',
        'GET /api/reports/lookup'
      ]
    }
  });
});

// Centralized Error Handling Middleware (Rule §17 Standard Shape)
app.use((err, req, res, next) => {
  console.error(`[Server Error] ${err.stack || err.message}`);
  const statusCode = err.status || err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    error: {
      message: err.message || 'Internal Server Error',
      code: err.code || 'SERVER_ERROR'
    }
  });
});

// MongoDB Connection & Server Launch
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log(`[MERN Backend] MongoDB Connected Successfully to ${MONGODB_URI}`);
    app.listen(PORT, () => {
      console.log(`[MERN Backend] Express Server listening on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.warn(`[MERN Backend] MongoDB Connection Notice: ${err.message}`);
    console.log(`[MERN Backend] Launching Express Server on port ${PORT}...`);
    app.listen(PORT, () => {
      console.log(`[MERN Backend] Express Server active at http://localhost:${PORT}`);
    });
  });
