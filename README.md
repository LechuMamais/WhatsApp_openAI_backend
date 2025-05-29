# 🤖 WhatsApp AI Assistant

Este proyecto integra **Twilio**, **OpenAI** y **Express** para crear un asistente conversacional que responde automáticamente a mensajes de WhatsApp. Ideal para automatizar respuestas de atención al cliente, FAQs o simplemente tener un chatbot personalizado 🚀.

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![TypeScript](https://img.shields.io/badge/TypeScript-✅-blue?logo=typescript)
![OpenAI](https://img.shields.io/badge/OpenAI-API-lightgrey?logo=openai)
![Twilio](https://img.shields.io/badge/Twilio-WhatsApp-red?logo=twilio)

---

## ✨ Funcionalidades

- 📩 Recibe mensajes de WhatsApp a través de Twilio
- 🧠 Genera respuestas inteligentes con OpenAI GPT-3.5/4
- 🗃️ Guarda el historial de conversación por usuario
- ⚙️ Configuración segura con variables de entorno
- 🌐 Deploy-ready para Vercel

---

## 🛠️ Tecnologías

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [OpenAI API](https://platform.openai.com/)
- [Twilio WhatsApp API](https://www.twilio.com/whatsapp)
- [MongoDB (opcional para persistencia)](https://www.mongodb.com/)

---

## 📦 Instalación

```bash

git clone https://github.com/tu-usuario/whatsapp-ai-assistant.git
cd whatsapp-ai-assistant
npm install

```


## 🔐 Variables de entorno

```bash
PORT=3000

# Twilio
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=whatsapp:+14155238886

# OpenAI
OPENAI_API_KEY=your_openai_api_key
```


```js example-bad
Asegurate de que TWILIO_PHONE_NUMBER tenga el prefijo whatsapp: y sea un número válido habilitado en la sandbox o tu cuenta de Twilio.
```

## 🚀 Uso

```bash
    npm run dev
```

El servidor escuchará peticiones POST en:

```bash
/api/whatsapp
```
Usá este endpoint como Webhook en tu sandbox de Twilio WhatsApp.


📁 Estructura del proyecto

```bash
src/
├── controllers/
│   └── whatsappController.ts     # Lógica principal del webhook
├── routes/
│   └── whatsappRoutes.ts         # Ruta para Twilio
├── utils/
│   ├── openaiService.ts          # Comunicación con la API de OpenAI
│   ├── twilioService.ts          # Envío de mensajes a WhatsApp
│   └── createMessage.ts          # Lógica para construir historial
├── app.config.ts                 # Configuración desde .env
├── app.ts                        # Configuración general de Express
└── server.ts                     # Arranque del servidor
```

📦 Deploy en Vercel

Este proyecto está preparado para deploy en Vercel:

    Subí el repo a GitHub

    Importalo en Vercel

    Añadí tus variables en la sección Environment Variables

    ¡Listo!

📋 Notas

    El endpoint espera un POST con los campos Body y From (formato de Twilio).

    Usá la consola de Twilio o tu propio frontend para enviar mensajes al bot.

    Se puede adaptar fácilmente para guardar los mensajes en base de datos.


🧑‍💻 Autor

Hecho con ❤️ por LechuMamais
