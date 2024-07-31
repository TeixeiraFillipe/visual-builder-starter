import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';

export const generateAiText = async (prompt: string, inputText: string | null | undefined): Promise<string | string[]> => {
    if(!prompt || !inputText) return '';
    const { text } = await generateText({
        model: openai('gpt-3.5-turbo-16k'),
        prompt: `Rewrite this sentence to make it more suitable for ${prompt}: ${inputText}. Do not mention the prompt. Try not to add a lot more characters than the ones used on the original text`,
    });
    return text;
}