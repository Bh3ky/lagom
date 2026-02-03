import { GoogleGenAI, Type } from '@google/genai';

const getAIClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not set');
  }

  return new GoogleGenAI({ apiKey });
};

const parseJsonResponse = <T>(text: string | undefined, fallback: T): T => {
  if (!text) {
    return fallback;
  }

  try {
    return JSON.parse(text) as T;
  } catch (error) {
    throw new Error('Failed to parse Gemini response as JSON');
  }
};

export const generateMarketingStrategy = async (brandDescription: string) => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `As an elite marketing agency strategist, create a comprehensive marketing strategy for this brand: ${brandDescription}.
    Provide actionable steps, social media hooks, and target audience segments.`,
    config: {
      temperature: 0.7,
      topP: 0.95,
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          executiveSummary: { type: Type.STRING },
          targetAudience: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          strategicHooks: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          contentCalendar: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                day: { type: Type.STRING },
                platform: { type: Type.STRING },
                topic: { type: Type.STRING },
              },
            },
          },
        },
        required: [
          'executiveSummary',
          'targetAudience',
          'strategicHooks',
          'contentCalendar',
        ],
      },
    },
  });

  return parseJsonResponse(response.text, {
    executiveSummary: '',
    targetAudience: [],
    strategicHooks: [],
    contentCalendar: [],
  });
};

export const generateCampaignCopy = async (campaignGoal: string) => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `Generate 3 high-converting ad copy versions for the following goal: ${campaignGoal}. Include a hook, body text, and CTA for each.`,
    config: {
      temperature: 1.0,
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            version: { type: Type.NUMBER },
            hook: { type: Type.STRING },
            body: { type: Type.STRING },
            cta: { type: Type.STRING },
          },
        },
      },
    },
  });

  return parseJsonResponse(response.text, [] as Array<{
    version: number;
    hook: string;
    body: string;
    cta: string;
  }>);
};
