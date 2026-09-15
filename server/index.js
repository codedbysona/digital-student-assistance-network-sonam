import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN,
    credentials: true
  })
);
app.use(cookieParser());
app.use(express.json());

// Mount Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
