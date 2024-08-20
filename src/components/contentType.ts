'use server';

import getToken from "./auth";

const getContentType = () => {
    return new Promise((resolve, reject) => {
        const url = new URL("https://app-ocxcdaoru1z58p003.cms.optimizely.com/_cms/preview2/contenttypes");
        fetch(url.href, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(async (response) => {
                if (!response.ok) {
                    reject(`Error: ${response.statusText}`);
                    return;
                }
                const data = await response.json();
                if (data) {
                    resolve(data);
                } else {
                    reject("Error: Couldn't get the content type");
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const createContentType = async (content: any): Promise<string> => {
    const body = {
        properties: content.properties,
        key: content.key,
        displayName: content.displayName,
        baseType: "component",
        usage: ["property"]
    };
    const token = await getToken();
    return new Promise((resolve, reject) => {
        const url = new URL("https://app-ocxcdaoru1z58p003.cms.optimizely.com/_cms/preview2/contenttypes");
        fetch(url.href, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(body)
        })
            .then(async (response) => {
                if (!response.ok) {
                    try {
                        const errorData = await response.json();
                        reject(`Error: ${errorData.message || response.statusText}`);
                    } catch (err) {
                        const errorText = await response.text();
                        reject(`Error: ${errorText || response.statusText}`);
                    }
                    return;
                }
                const data = await response.json();
                if (data && data) {
                    resolve(data);
                } else {
                    reject("Error: Could not create the new content type.");
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export { getContentType, createContentType };