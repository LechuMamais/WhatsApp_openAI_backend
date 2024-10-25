import express, { Application } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import faqRoutes from './routes/faqRoutes';
import businessRoutes from './routes/businessRoutes';

dotenv.config();

const app: Application = express();

// Middleware
app.use(express.json());

// Routes
const baseEndPoint = '/api/v0'
app.use(baseEndPoint+'/faqs', faqRoutes);
app.use(baseEndPoint+'/businesses', businessRoutes);

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
