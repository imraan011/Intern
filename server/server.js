import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { apiRouter } from './routes/api.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/suraksha_diagnostics';

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', apiRouter);

// Root route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Suraksha Care Diagnostics MERN Stack Backend Server Active'
  });
});

// MongoDB Connection & Server Launch
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log(`[MERN Backend] MongoDB Connected Successfully to ${MONGODB_URI}`);
    app.listen(PORT, () => {
      console.log(`[MERN Backend] Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.warn(`[MERN Backend] MongoDB Connection Warning: ${err.message}`);
    console.log(`[MERN Backend] Launching Server on port ${PORT} with fallback handling...`);
    app.listen(PORT, () => {
      console.log(`[MERN Backend] Express Server running at http://localhost:${PORT}`);
    });
  });
