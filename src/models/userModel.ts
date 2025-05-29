import { Schema, model } from 'mongoose';

const userSchema = new Schema<IUser>(
    {
        cellphone: { type: String, required: true },
        messages: [
            {
                role: { type: String, required: true, enum: ['system', 'user', 'assistant'] },
                content: { type: String, required: true }
            }
        ]
    },

    { timestamps: true }
);

export default model<IUser>('User', userSchema);
