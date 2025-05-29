import twilio from 'twilio';
import config from '../app.config';

const client = twilio(config.twilio.accountSid, config.twilio.authToken);

export const sendWhatsappMessage = async (to: string, message: string): Promise<void> => {
    await client.messages.create({
        body: message,
        from: config.twilio.phoneNumber,
        to: to,
    });
};