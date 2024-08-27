import { NextResponse } from 'next/server';
import { spawn } from 'child_process';

type RequestData = {
    componentId: string;
    componentName: string;
};

export async function POST(request: Request): Promise<Response> {
    try {
        const { componentId, componentName } = (await request.json()) as RequestData;
        return new Promise((resolve, reject) => {
            const command = spawn('npx', ['v0', 'add', componentId]);

            let output = '';
            let errorOutput = '';

            command.stdout.on('data', (data) => {
                output += data.toString();
                if (output.includes('component')) {
                    command.stdin.write(`${componentName}\n`);
                }
            });

            command.stderr.on('data', (data) => {
                errorOutput += data.toString();
            });

            command.on('close', (code) => {
                if (code === 0) {
                    resolve(NextResponse.json({ message: 'Command executed successfully' }, { status: 200 }));
                } else {
                    reject(NextResponse.json({ error: `Command failed with code ${code}`, errorOutput }, { status: 500 }));
                }
            });

            command.on('error', (err) => {
                reject(NextResponse.json({ error: err.message }, { status: 500 }));
            });
        });
    } catch (error) {
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
    }
}
