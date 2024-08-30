"use client";

const odpSegments = async (vuidCookie: string): Promise<any> => {
    try {
        const formattedVuid = vuidCookie?.split('%')[0]?.replaceAll('-', '');
        const vuid = formattedVuid?.substring(formattedVuid?.indexOf('=') + 1);
        const response = await fetch("/api/odp", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                vuid,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export default odpSegments;