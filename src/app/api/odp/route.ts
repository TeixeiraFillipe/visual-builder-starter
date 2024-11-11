import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<Response> {
  try {
    const { vuid } = (await request.json());
    const HOSTNAME_ZAIUS_API = 'https://api.zaius.com/v3/graphql';
    const apiKey = process.env.ZAIUS_API_KEY ?? '';
    const segments = ['customers_who_are_interested_in_credit_cards', 'customers_who_are_interested_in_loans'];

    const response = await fetch(HOSTNAME_ZAIUS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
      body: JSON.stringify({
        query: `query { 
                        customer(vuid: "${vuid}") { 
                            audiences(subset: ${JSON.stringify(segments)}) { 
                                edges { 
                                    node {
                                        description
                                    } 
                                } 
                            } 
                        } 
                    }`
      })
    });

    if (!response.ok) {
      throw new Error(`Zaius API error: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error(`Error: ${JSON.stringify(error)}`);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'GET request received' });
}