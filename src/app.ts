import express, { Application } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import faqRoutes from './routes/faqRoutes';

dotenv.config();

const app: Application = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/faqs', faqRoutes);

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
    process.exit(1); // Exit process with failure
  }
};

export { app, connectDB };
