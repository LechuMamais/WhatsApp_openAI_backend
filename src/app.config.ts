const config: AppConfig = {
  port: parseInt(process.env.PORT || '5000'),
  
  twilio: {
    accountSid: process.env.TWILIO_ACCOUNT_SID || 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    authToken: process.env.TWILIO_AUTH_TOKEN || '',
    phoneNumber: process.env.TWILIO_WHATSAPP_NUMBER || ''
  },

  ai: {
    apiKey: process.env.OPENAI_API_KEY || '',
    model: 'gpt-3.5-turbo',
    maxTokens: 400,
    temperature: 0 // A tope de serio, 0 creativo
  }
};

export default config;