export interface TwilioConfig {
  accountSid: string;
  authToken: string;
  phoneNumber: string;
}

export interface AIConfig {
  apiKey: string;
  model: string;
  maxTokens: number;
  temperature: number;
}

export interface AppConfig {
  //env: 'development' | 'production' | 'test';
  port: number;
  twilio: TwilioConfig;
  ai: AIConfig;
  // otros parámetros...
}

const config: AppConfig = {
  //env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3000'),
  
  twilio: {
    accountSid: process.env.TWILIO_ACCOUNT_SID || 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    authToken: process.env.TWILIO_AUTH_TOKEN || '',
    phoneNumber: process.env.TWILIO_WHATSAPP_NUMBER || ''
  },

  ai: {
    apiKey: process.env.OPENAI_API_KEY || '',
    //endpoint: process.env.AI_ENDPOINT || 'https://api.ai-service.com/v1',
    model: 'gpt-3.5-turbo',
    maxTokens: 400,
    temperature: 0 // A tope de serio, 0 creativo
  }
};

export default config;