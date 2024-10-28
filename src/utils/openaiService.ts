import { OpenAI } from "openai";

const max_tokens = 200
const temperature = 0.001   // A tope de serio, 0 creativo

// Esta funcion es sólo para users, luego habrá que adaptarla para "system", que es el que lo configura.
export const getAnswerFromOpenAI = async (question: string ):Promise<string | unknown> => {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                  "role": "user",
                  "content": [{ "type": "text", "text": question }]
                }],
            max_tokens,
            temperature,
            });
        console.log(response)
        return (response.choices[0].message || 'No se encontró una respuesta');
    } catch (error) {
        console.error('Error al consultar OpenAI:', error);
        return 'Error al obtener la respuesta';
    }
};
