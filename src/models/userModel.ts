import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document, UserType {
    createdAt?: Date;
    updatedAt?: Date;
}

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
