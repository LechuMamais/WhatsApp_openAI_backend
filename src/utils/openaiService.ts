import { OpenAI } from "openai";
import config from "../app.config";

const max_tokens = config.ai.maxTokens || 400;
const temperature = config.ai.temperature

// Esta funcion es sólo para users, luego habrá que adaptarla para "system", que es el que lo configura.
// A futuro puede ser interesante configurarla para que sea capaz de recibir no sólo una question, sino los ultimas
// X cantidad de mensajes, para dar mayor contexto y que elabore una mejor respuesta.
export const getAnswerFromOpenAI = async (messages: MessageOpenAI[]): Promise<OpenAiAPIResponse> => {
    const openai = new OpenAI({
        apiKey: config.ai.apiKey,
    });

    try {
        const response = await openai.chat.completions.create({
            model: config.ai.model,
            messages,
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
