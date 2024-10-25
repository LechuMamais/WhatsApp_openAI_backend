import mongoose, { Document, Schema } from 'mongoose';

interface IFaq extends Document {
  question: string;
  answer: string;
  businessId: string;
}

const FaqSchema: Schema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  businessId: { type: String, required: true },
});

export default mongoose.model<IFaq>('Faq', FaqSchema);
