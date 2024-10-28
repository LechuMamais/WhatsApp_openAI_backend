import express, { Application } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import faqRoutes from './routes/faqRoutes';
import businessRoutes from './routes/businessRoutes';
import aiRoutes from './routes/aiRoutes';

dotenv.config();

const app: Application = express();
app.use(express.json());

const baseEndPoint = '/api/v0'
app.use(baseEndPoint+'/faqs', faqRoutes);
app.use(baseEndPoint+'/businesses', businessRoutes);
app.use(baseEndPoint+'/ai', aiRoutes);


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export { app, connectDB };
