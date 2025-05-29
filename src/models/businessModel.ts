import { Document, Schema, model } from 'mongoose';

interface IBusiness extends Document {
  // Información básica
  name: string;
  description?: string;
  faqs: [{ type: Schema.Types.ObjectId, ref: 'FAQ' }]
  category?: string;
  subcategory?: string;
  logoUrl?: string;
  bannerUrl?: string;

  // Detalles de contacto
  email: string;
  phoneNumber?: string;
  whatsappNumber?: string;
  websiteUrl?: string;

  // Redes sociales
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
  };

  // Dirección y ubicación
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  geoLocation?: {
    lat: number;
    lng: number;
  };

  // Configuración de WhatsApp
  whatsappSettings?: {
    businessAccountId: string;
    apiKey: string;
    greetingMessage?: string; // Mensaje de bienvenida
    automatedResponses?: {
      keywords: string[];
      response: string;
    }[];
  };

  // Configuración de OpenAI
  aiSettings?: {
    apiKey: string;
    defaultResponse?: string; // Respuesta por defecto para preguntas sin respuesta definida
    personalityTone?: string; // Ej.: "friendly", "professional"
  };

  // Preferencias y configuración
  preferences?: {
    language?: string; // Ej.: "es", "en"
    timezone?: string;
    operatingHours?: {
      day: string; // Ej.: "Monday"
      open: string; // Hora de apertura (ej.: "09:00")
      close: string; // Hora de cierre (ej.: "18:00")
    }[];
  };

  // Análisis y datos de uso
  analytics?: {
    createdAt: Date;
    lastInteraction?: Date;
    totalInteractions?: number;
    faqUsageCount?: number;
    aiResponseCount?: number;
  };

  // Opciones de pago
  paymentOptions?: {
    paypal?: boolean;
    stripe?: boolean;
    cash?: boolean;
    bankTransfer?: boolean;
  };

  // Otros detalles opcionales
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

const BusinessSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    faqs: [{ type: Schema.Types.ObjectId, ref: 'FAQ' }],
    category: { type: String },
    subcategory: { type: String },
    logoUrl: { type: String },
    bannerUrl: { type: String },

    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String },
    whatsappNumber: { type: String },
    websiteUrl: { type: String },

    socialMedia: {
      facebook: { type: String },
      instagram: { type: String },
      twitter: { type: String },
      linkedin: { type: String },
      youtube: { type: String },
    },

    address: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    postalCode: { type: String },
    geoLocation: {
      lat: { type: Number },
      lng: { type: Number },
    },

    whatsappSettings: {
      businessAccountId: { type: String, required: true },
      apiKey: { type: String, required: true },
      greetingMessage: { type: String },
      automatedResponses: [
        {
          keywords: [{ type: String }],
          response: { type: String },
        },
      ],
    },

    aiSettings: {
      apiKey: { type: String, required: true },
      defaultResponse: { type: String },
      personalityTone: { type: String },
    },

    preferences: {
      language: { type: String, default: 'es' },
      timezone: { type: String },
      operatingHours: [
        {
          day: { type: String },
          open: { type: String },
          close: { type: String },
        },
      ],
    },

    analytics: {
      createdAt: { type: Date, default: Date.now },
      lastInteraction: { type: Date },
      totalInteractions: { type: Number, default: 0 },
      faqUsageCount: { type: Number, default: 0 },
      aiResponseCount: { type: Number, default: 0 },
    },

    paymentOptions: {
      paypal: { type: Boolean, default: false },
      stripe: { type: Boolean, default: false },
      cash: { type: Boolean, default: true },
      bankTransfer: { type: Boolean, default: false },
    },

    tags: [{ type: String }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export default model<IBusiness>('Business', BusinessSchema);
