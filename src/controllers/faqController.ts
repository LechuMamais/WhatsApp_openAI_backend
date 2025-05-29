import { RequestHandler } from 'express';
import FAQ from '../models/faqModel';
import Business from '../models/businessModel';
import mongoose from 'mongoose';

export const createFAQ: RequestHandler = async (req, res) => {
  try {
    const { question, answer, businessId } = req.body;

    const business = await Business.findById(businessId);
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }

    const faq = new FAQ({ question, answer, business: businessId });
    await faq.save();

    business.faqs.push(faq._id as mongoose.Types.ObjectId);
    await business.save();
    
    res.status(201).json(faq);

  } catch (error) {
    res.status(500).json({ message: 'Error creating FAQ', error });
  }
};

export const getFAQsByBusinessId: RequestHandler = async (req, res) => {
  try {
    const { businessId } = req.params;

    const faqs = await FAQ.find({ business: businessId });
    if (!faqs) {
      res.status(404).json({ message: 'No FAQs found for this Business' });
    }else{
      res.status(200).json(faqs);
    }

  } catch (error) {
    res.status(500).json({ message: 'Error fetching FAQs', error });
  }
};

export const updateFAQ: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { question, answer } = req.body;

    const faq = await FAQ.findByIdAndUpdate(
      id,
      { question, answer },
      { new: true, runValidators: true }
    );

    if (!faq) {
      res.status(404).json({ message: 'FAQ not found' });
    }else{
      res.status(200).json(faq);
    }

  } catch (error) {
    res.status(500).json({ message: 'Error updating FAQ', error });
  }
};

export const deleteFAQ: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const faq = await FAQ.findByIdAndDelete(id);
    if (!faq) {
      res.status(404).json({ message: 'FAQ not found' });
    }else{
      await Business.findByIdAndUpdate(faq.business, { $pull: { faqs: faq._id } });
      res.status(200).json({ message: 'FAQ deleted successfully' });
    }

  } catch (error) {
    res.status(500).json({ message: 'Error deleting FAQ', error });
  }
};
