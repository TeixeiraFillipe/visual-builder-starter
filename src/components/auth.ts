'use server';

const getToken = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
        const url = new URL("https://app-ocxcdaoru1z58p003.cms.optimizely.com/_cms/preview2/oauth/token");
        fetch(url.href, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + btoa("ApiClient:sAjHuFmlZPffZ0I1UPvgSZcsuPeYIJZySzItkJQkbzR4P0l2") // Base64 encode client_id and client_secret
            },
            body: new URLSearchParams({
                grant_type: "client_credentials",
                client_id: "ApiClient",
                client_secret: "sAjHuFmlZPffZ0I1UPvgSZcsuPeYIJZySzItkJQkbzR4P0l2",
            }).toString(),
        })
            .then(async (response) => {
                if (!response.ok) {
                    const errorText = await response.text();  // Read the response text for more detail
                    reject(new Error(`Error: ${response.statusText}. Details: ${errorText}`));
                    return;
                }
                const data = await response.json();
                if (data && data.access_token) {
                    resolve(data.access_token);
                } else {
                    reject(new Error("Error: Access token not found in response."));
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export default getToken;
