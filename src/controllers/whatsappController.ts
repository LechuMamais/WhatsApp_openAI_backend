import { Request, Response } from 'express';
import { getAnswerFromOpenAI } from '../utils/openaiService';
import { sendWhatsappMessage } from '../utils/twilioService';
import { createMessage } from '../utils/createMessage';

export const handleIncomingMessage = async (req: Request, res: Response) => {
  const { Body, From } = req.body;
  try {
    // 1. Chequear que haya en la BD una conversación con este número de teléfono, y obtener la conversación
    // En caso de que no haya, creamos un nuevo usuario, con este nuevo número, y le agregamos el primer mensaje role = system
    // 2. Agregar el mensaje que recibimos en el Body al array de mensajes de este usuario/número.
    const user = await createMessage({ cellphone: From, role: 'user', content: Body })
    console.log('handleIncomingMessage -> user: ', user)

    if (!('messages' in user)) {
      return res.status(400).send({ message: 'Error al obtener los mensajes del usuario' });
    }

    // 3. Enviarle a openAi el array de mensajes completo, y esperar su respuesta.
    const responseText = await getAnswerFromOpenAI(user?.messages);

    console.log('Respuesta de openAI: ', responseText)

    // 4. Enviar la respuesta de la IA al usuario, a través de whatsappp
    await sendWhatsappMessage(From, responseText.content);
    // 5. Confirmar recepción
    res.status(200).send({ statusMessage: 'Mensaje procesado correctamente', responseMessage: responseText });

  } catch (error) {
    console.error('Error al procesar el mensaje de whatsapp:', error);
    res.status(500).send('Hubo un error al procesar el mensaje de whatsapp');
  }
};
