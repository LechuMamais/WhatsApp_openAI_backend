import { Request, Response } from 'express';
import { getAnswerFromOpenAI } from '../utils/openaiService';

export const getAIResponse = async (req: Request, res: Response): Promise<void> => {
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
