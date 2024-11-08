import { Schema, model, Document } from 'mongoose';

// Define la interfaz Message extendiendo MessageOpenAI y Document
interface Message extends MessageOpenAI, Document {
    cellphone: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const messageSchema = new Schema<Message>(
    {
        cellphone: { type: String, required: true },
        role: { type: String, required: true, enum: ['system', 'user', 'assistant'] },
        content: { type: String, required: true },
    },

    { timestamps: true }
);

export default model<Message>('messageSchema', messageSchema);
