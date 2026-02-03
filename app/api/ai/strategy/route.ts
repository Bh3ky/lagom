import { NextResponse } from 'next/server';
import { generateMarketingStrategy } from '@/lib/gemini';
import { validateTextInput } from '@/lib/ai/validation';

export async function POST(request: Request) {
  let body: { prompt?: unknown };

  try {
    body = await request.json();
  } catch (error) {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }

  const validation = validateTextInput(body.prompt, { field: 'prompt' });
  if (!validation.ok) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  try {
    const result = await generateMarketingStrategy(validation.value);
    return NextResponse.json({ result });
  } catch (error) {
    console.error('Gemini strategy generation failed', error);
    return NextResponse.json(
      { error: 'Failed to generate marketing strategy' },
      { status: 500 },
    );
  }
}
