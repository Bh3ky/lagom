import { NextResponse } from 'next/server';
import { generateCampaignCopy } from '@/lib/gemini';
import { validateTextInput } from '@/lib/ai/validation';

export async function POST(request: Request) {
  let body: { goal?: unknown };

  try {
    body = await request.json();
  } catch (error) {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }

  const validation = validateTextInput(body.goal, { field: 'goal' });
  if (!validation.ok) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  try {
    const result = await generateCampaignCopy(validation.value);
    return NextResponse.json({ result });
  } catch (error) {
    console.error('Gemini copy generation failed', error);
    return NextResponse.json(
      { error: 'Failed to generate campaign copy' },
      { status: 500 },
    );
  }
}
