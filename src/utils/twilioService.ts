import twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export const sendWhatsappMessage = async (to: string, message: string): Promise<void> => {
    console.log('TwilioService - sendWhatsappMessage')
    console.log('to: ', to)
    console.log('message: ', message)

    await client.messages.create({
        body: message,
        from: process.env.TWILIO_WHATSAPP_NUMBER,
        to: to,
    });
};