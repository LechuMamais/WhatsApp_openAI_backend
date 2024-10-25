import { Request, Response } from 'express';
import Faq from '../models/Faq';

export const getFaqs = async (req: Request, res: Response): Promise<void> => {
  try {
    const faqs = await Faq.find({ businessId: req.params.businessId });
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createFaq = async (req: Request, res: Response): Promise<void> => {
  try {
    const newFaq = new Faq(req.body);
    const savedFaq = await newFaq.save();
    res.status(201).json(savedFaq);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
