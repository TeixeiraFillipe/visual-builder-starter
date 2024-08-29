'use client'
import React from 'react';
import { generateAiText } from '../../openAi';
import odpSegments from '../../odpSegments';

interface ChildProps {
    text?: string;
}

const getODPSegments = async (vuid: string) => {
    try {
        const result = await odpSegments(vuid);
        return result;
    } catch (error) {
        console.error('Error in component:', error);
    }
}

const parseSegments = (segments: any): string[] => {
    if (!segments || !segments.data || !segments.data.customer || !segments.data.customer.audiences || !segments.data.customer.audiences.edges) {
        return [];
    }
    return segments.data.customer.audiences.edges.map((edge: any) => edge.node.description);
}

const AITextWrapper = ({ headingText, AIPrompt, ODP, children }: { headingText: string, AIPrompt: string, ODP: boolean, children: React.ReactNode }) => {
    const [text, setText] = React.useState<string | undefined>(headingText);
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
        const fetchAIText = async () => {
            var vuid: string = '';
            var segments = null;
            if (ODP && document !== undefined) {
                const cookies = document.cookie.split('; ');
                const vuidCookie = cookies.find(cookie => cookie.startsWith('vuid='));
                vuid = vuidCookie ? vuidCookie.split('=')[1] : '';
                const segmentsData = await getODPSegments(vuid);
                segments = parseSegments(segmentsData);
                console.log(segments);
            }
            if (AIPrompt && headingText) {
                setIsLoaded(false);
                const aiText = await generateAiText(AIPrompt, headingText);
                setText(aiText);
                setIsLoaded(true);
            }
        };

        fetchAIText();
    }, [headingText, AIPrompt, ODP]);

    return (
        <div className={`duration-1000 transition-opacity ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {React.Children.map(children, child =>
                React.isValidElement<ChildProps>(child)
                    ? React.cloneElement(child, { text: text || undefined })
                    : child
            )}
        </div>
    );
}

export default AITextWrapper;