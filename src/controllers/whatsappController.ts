import { Request, RequestHandler, Response } from 'express';
import { getAnswerFromOpenAI } from '../utils/openaiService';
import { sendWhatsappMessage } from '../utils/twilioService';
import { createMessage } from '../utils/createMessage';

export const handleIncomingMessage: RequestHandler = async (req, res)  => {
  const { Body, From } = req.body;
  try {
    const user = await createMessage({ cellphone: From, role: 'user', content: Body });

    if (!('messages' in user)) {
      res.status(400).send({ message: 'Error al obtener los mensajes del usuario' });
      return;
    }

    const responseText = await getAnswerFromOpenAI(user.messages);

    user.messages.push(responseText);
    await user.save();

    await sendWhatsappMessage(From, responseText.content);

    res.status(200).send({
      statusMessage: 'Mensaje procesado correctamente',
      responseMessage: responseText,
    });
  } catch (error) {
    console.error('Error al procesar el mensaje de whatsapp:', error);
    res.status(500).send('Hubo un error al procesar el mensaje de whatsapp');
  }
};
