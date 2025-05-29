import { RequestHandler } from 'express';
import { getAnswerFromOpenAI } from '../utils/openaiService';

export const getAIResponse: RequestHandler = async (req, res) => {
  try {
    const { question } = req.body;
    if (!question) {
      res.status(400).json({ message: 'La pregunta es requerida' });
      return;
    }

    const answer = await getAnswerFromOpenAI(question);
    res.json({ answer });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la respuesta de OpenAI' });
  }
};
