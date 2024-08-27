import { NextResponse } from 'next/server';
import { exec } from 'child_process';

type RequestData = {
    componentId: string;
    componentName: string;
};

export async function POST(request: Request): Promise<Response> {
    try {
        const { componentId, componentName } = (await request.json()) as RequestData;
        const command = `npx v0 add ${componentId} --name=${componentName}`;

        const result = await new Promise<{ stdout: string; stderr: string }>((resolve, reject) => {
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    reject({ stdout, stderr: error.message });
                } else {
                    resolve({ stdout, stderr });
                }
            });
        });

        // if (result.stderr) {
        //     console.error(`Command stderr: ${result.stderr}`);
        //     return NextResponse.json({ error: result.stderr }, { status: 500 });
        // }

        console.log(`Command stdout: ${result.stdout}`);
        return NextResponse.json({ message: result.stdout }, { status: 200 });
    } catch (error) {
        console.error(`Error: ${error}`);
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}
