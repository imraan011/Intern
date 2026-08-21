import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import dns from 'dns';
import { fileURLToPath } from 'url';
import { apiRouter } from '../server/routes/api.js';

// DNS setup for MongoDB Atlas SRV resolution
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

app.use(
  cors({
    origin: '*',
    credentials: true
  })
);
app.use(express.json());

// MongoDB Serverless Cached Connection
let isConnected = 0;
const connectDB = async () => {
  if (isConnected === 1) return;
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) return;
  try {
    const db = await mongoose.connect(mongoUri);
    isConnected = db.connections[0].readyState;
    console.log('[Vercel Serverless] MongoDB Atlas connected');
  } catch (err) {
    console.error('[Vercel Serverless] DB Connect error:', err.message);
  }
};

app.use(async (req, res, next) => {
  await connectDB();
  next();
});

// API Routes
app.use('/api', apiRouter);

// Root API status
app.get('/api', (req, res) => {
  res.json({
    success: true,
    data: {
      server: 'Suraksha Care Diagnostics Vercel Serverless Backend',
      status: 'active'
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

export default app;
