import express, { Application } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import aiRoutes from './routes/aiRoutes';
import faqRouter from './routes/faqRoutes';
import twilioRouter from './routes/twilioRoutes';
import businessRouter from './routes/businessRoutes';

dotenv.config();

const app: Application = express();
app.use(express.json());

const baseEndPoint = '/api/v0'
app.use(baseEndPoint+'/faqs', faqRouter);
app.use(baseEndPoint+'/businesses', businessRouter);
app.use(baseEndPoint+'/ai', aiRoutes);
app.use(baseEndPoint+'/wa', twilioRouter)


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
