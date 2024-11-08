type Cellphone = string

type MessageOpenAI = {
    role: 'system' | 'user' | 'assistant';
    content: string;
    refusal?: any
}

type OpenAiAPIResponse = MessageOpenAI & {
    refusal: unknown;
};

type UserType = {
    cellphone: Cellphone;
    messages: MessageOpenAI[];
}