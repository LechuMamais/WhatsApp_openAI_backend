import { Schema, model } from 'mongoose';

const faqSchema = new Schema<FAQ>(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    business: { type: Schema.Types.ObjectId, ref: 'Business', required: true },
  },
  { timestamps: true }
);

export default model<FAQ>('FAQ', faqSchema);
