import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';

export const generateAiText = async (prompt: string, inputText: string): Promise<string | string[]> => {
    const { text } = await generateText({
        model: openai('gpt-4o-mini'),
        prompt: `${prompt}: ${inputText}`,
    });
    return text;
}