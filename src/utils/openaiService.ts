import { OpenAI } from "openai";

const max_tokens = 300
const temperature = 0.001   // A tope de serio, 0 creativo

// Esta funcion es sólo para users, luego habrá que adaptarla para "system", que es el que lo configura.
// Además habrá que configurarla para que sea capaz de recibir no sólo una question, sino las ultimas
// X cantidad de respuestas, para dar una mejor respuesta.
export const getAnswerFromOpenAI = async (question: string): Promise<OpenAiAPIResponse> => {
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
                }
            ],
            max_tokens,
            temperature,
        });

        return {
            role: response.choices[0].message?.role || '',
            content: response.choices[0].message?.content || 'Respuesta no disponible',
            refusal: response.choices[0].message?.refusal,
        };
    } catch (error) {
        console.error('Error al consultar OpenAI:', error);
        return {
            role: 'assistant',
            content: 'Error al obtener la respuesta de OpenAI',
            refusal: error,
        };
    }
};
