import { Request, Response } from 'express';
import { getAnswerFromOpenAI } from '../utils/openaiService';
import { sendWhatsappMessage } from '../utils/twilioService';

export const handleIncomingMessage = async (req: Request, res: Response) => {
  const { Body, From } = req.body; // Body:string = mensaje, From:string = número del remitente

  try {
    // 1. Enviar el mensaje de usuario a OpenAI
    const responseText = await getAnswerFromOpenAI(Body);

    // 2. Enviar la respuesta de IA al usuario a través de WhatsApp
    await sendWhatsappMessage(From, responseText.content);

    // 3. Confirmar recepción
    res.status(200).send({ statusMessage: 'Mensaje procesado correctamente', responseMessage: responseText });
  } catch (error) {
    console.error('Error al procesar el mensaje de whatsapp:', error);
    res.status(500).send('Hubo un error al procesar el mensaje de whatsapp');
  }
};