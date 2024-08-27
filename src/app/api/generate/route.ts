import { NextResponse } from 'next/server';
import { exec } from 'child_process';

export async function POST(): Promise<Response> {
  try {
    const command = 'yarn generate';

    const result = await new Promise<{ stdout: string; stderr: string }>((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reject({ stdout, stderr: error.message });
        } else {
          resolve({ stdout, stderr });
        }
      });
    });

    if (result.stderr) {
      console.error(`Command stderr: ${result.stderr}`);
      return NextResponse.json({ error: result.stderr }, { status: 500 });
    }

    console.log(`Command stdout: ${result.stdout}`);
    return NextResponse.json({ message: result.stdout }, { status: 200 });
  } catch (error) {
    console.error(`Error: ${error}`);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
