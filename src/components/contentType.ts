'use server';
import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';

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

const updateContent = async (componentName: string) => {
    const fs = require('fs');
    const exampleFilePath = `src/components/cms/component/HeroBanner.tsx`
    const newFilePath = `src/components/cms/component/${componentName}.tsx`

    fs.readFile(exampleFilePath, 'utf8', async (err: any, exampleData: any) => {
        if (err) {
            console.error('Error reading example file:', err);
            return;
        }

        fs.readFile(newFilePath, 'utf8', async (err2: any, data: any) => {
            if (err2) {
                console.error('Error reading example file:', err2);
                return;
            }

            const { text } = await generateText({
                model: openai('gpt-4o-mini'),
                prompt: `I need you to update a component. I'll give you an example of how it should look like, you're going to replace existing texts with variables, such as "Title" and "Subtitle" in my example. Do not update image url. Also you're going to add the same variables and the component name to the graphql fragment. This is the example: ${exampleData} and this is the component you need to update ${data}. The name of the component is ${componentName}. Just give me the update component code, without any other text.`,
            });
            const code = text.replace(/```javascript/g, '').replace(/```/g, '');

            fs.writeFile(newFilePath, code, 'utf8', (err3: any) => {
                if (err3) {
                    console.error('Error writing file', err3);
                }

                fs.readFile(newFilePath, 'utf8', async (err4: any, newData: any) => {
                    if (err4) {
                        console.log('Error reading file', err4);
                    }
                    const { text } = await generateText({
                        model: openai('gpt-4o-mini'),
                        prompt: `Read the content and return the variables of the fragment. Don't add any other text, only the variables in an array format. This is the content: ${newData}`,
                    });

                    const arr = JSON.parse(text.replace(/```json/g, '').replace(/```/g, ''));
                    const component = {
                        properties: arr.reduce((acc: { [x: string]: { type: string; displayName: any; }; }, curr: string | number) => {
                          acc[curr] = {
                            type: "string",
                            displayName: curr
                          };
                          return acc;
                        }, {}),
                        key: componentName,
                        displayName: componentName,
                      };
                    let response = await createContentType(component);
                    if (response) {
                      console.log(`Component created: ${JSON.stringify(response)}`)

                      try {
                        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/generate`, {
                          method: 'POST',
                        });
                    
                        if (!response.ok) {
                          throw new Error(`Failed to run command: ${response.statusText}`);
                        }
                    
                        const data = await response.json();
                        console.log('Command output:', data.message);
                      } catch (error) {
                        console.error('Error:', error);
                      }
                    } else {
                      console.log(`An error ocurred.`)
                    }
                });
            });
        });
    });
};

export { getContentType, createContentType, updateContent };