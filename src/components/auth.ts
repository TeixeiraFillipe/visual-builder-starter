const getToken = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
        const url = new URL("https://app-ocxcdaoru1z58p003.cms.optimizely.com/_cms/preview2/oauth/token");
        fetch(url.href, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                grant_type: "client_credentials",
                client_id: "ApiClient",
                client_secret: "sAjHuFmlZPffZ0I1UPvgSZcsuPeYIJZySzItkJQkbzR4P0l2",
            }).toString(),
        })
            .then(async (response) => {
                if (!response.ok) {
                    reject(`Error: ${response.statusText}`);
                    return;
                }
                const data = await response.json();
                if (data && data.access_token) {
                    resolve(data.access_token);
                } else {
                    reject("Error: Access token not found in response.");
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export default getToken;