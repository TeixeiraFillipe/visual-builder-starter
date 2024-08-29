import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';

export const generateAiText = async (prompt: string, inputText: string): Promise<string> => {
    const openai = createOpenAI({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
     });
    const { text } = await generateText({
        model: openai('gpt-4o-mini'),
        prompt: `${prompt}: ${inputText}`,
    });
    return text;
}