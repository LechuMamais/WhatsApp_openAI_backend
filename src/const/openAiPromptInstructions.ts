const maxCharacters = '1600';

export const openAiPromptInstructions: string = `Una vez hayas elaborado una respuesta, asegurate de tenga menos de ${maxCharacters} caracteres. Si no cumple esta condición, haz un pequeño resumen, y luego vuelve a realizar esta comprobación.`;