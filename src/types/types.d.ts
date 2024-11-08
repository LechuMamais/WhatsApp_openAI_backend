type OpenAiAPIResponse = {
    role: string;
    content: string;
    refusal: unknown;
};

type MessageOpenAI = {
    role: 'system' | 'user' | 'assistant';
    content: string;
}