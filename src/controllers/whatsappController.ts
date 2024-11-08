import { Request, Response } from 'express';
import { getAnswerFromOpenAI } from '../utils/openaiService';
import { sendWhatsappMessage } from '../utils/twilioService';

export const handleIncomingMessage = async (req: Request, res: Response) => {
  const { Body, From } = req.body; // Body:string = mensaje, From:string = número del remitente

  try {
    // 1. Chequear que haya en la BD una conversación con este número de teléfono, y obtener la conversación
    // En caso de que no haya, creamos un nuevo usuario, con este nuevo número, y le agregamos el primer mensaje role = system


    // 2. Agregar el mensaje que recibimos en el Body al array de mensajes de este usuario/número.

    // 3. Enviarle a openAi el array de mensajes completo, y esperar su respuesta.

    // 4. Enviar la respuesta de la IA al usuario, a través de whatsappp

    // 5. Confirmar recepción


    /*
    // 1. Enviar el mensaje de usuario a OpenAI
    const responseText = await getAnswerFromOpenAI(Body);

    // 2. Enviar la respuesta de IA al usuario a través de WhatsApp
    await sendWhatsappMessage(From, responseText.content);
    // 3. Confirmar recepción
    res.status(200).send({ statusMessage: 'Mensaje procesado correctamente', responseMessage: responseText });
    */


  } catch (error) {
    console.error('Error al procesar el mensaje de whatsapp:', error);
    res.status(500).send('Hubo un error al procesar el mensaje de whatsapp');
  }
};
