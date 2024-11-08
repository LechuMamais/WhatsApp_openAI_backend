import { Schema, model, Document } from 'mongoose';

interface User extends Document {
    cellphone: string;
    messages: MessageOpenAI[];
    createdAt?: Date;
    updatedAt?: Date;
}

const userSchema = new Schema<User>(
    {
        cellphone: { type: String, required: true },
        messages: [{ type: Schema.Types.ObjectId, ref: 'messageSchema' }],
    },

    { timestamps: true }
);

export default model<User>('User', userSchema);
