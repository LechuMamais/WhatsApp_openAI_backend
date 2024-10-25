// models/faqModel.ts
import { Schema, model, Document } from 'mongoose';

interface FAQ extends Document {
  question: string;
  answer: string;
  business: Schema.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

const faqSchema = new Schema<FAQ>(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    business: { type: Schema.Types.ObjectId, ref: 'Business', required: true },
  },
  { timestamps: true }
);

export default model<FAQ>('FAQ', faqSchema);
