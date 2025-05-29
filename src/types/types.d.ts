type Cellphone = string

type MessageOpenAI = {
    role: 'system' | 'user' | 'assistant';
    content: string;
    refusal?: any
}

type OpenAiAPIResponse = MessageOpenAI & {
    refusal: unknown;
};

type UserType = {
    cellphone: Cellphone;
    messages: MessageOpenAI[];
}




interface IUser extends Document, UserType {
    createdAt?: Date;
    updatedAt?: Date;
    save: () => Promise<IUser>;
}



interface FAQ extends Document {
  question: string;
  answer: string;
  business: Schema.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}




interface TwilioConfig {
  accountSid: string;
  authToken: string;
  phoneNumber: string;
}

interface AIConfig {
  apiKey: string;
  model: string;
  maxTokens: number;
  temperature: number;
}

interface AppConfig {
  port: number;
  twilio: TwilioConfig;
  ai: AIConfig;
}