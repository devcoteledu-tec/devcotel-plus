
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCareerGuidance = async (age: number, goal: string, interests: string[]) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Recommend a learning path and 3 project ideas for a ${age} year old student whose career goal is "${goal}" and interests include ${interests.join(', ')}. Format the output as JSON.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          path: { type: Type.STRING },
          projects: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING },
                difficulty: { type: Type.STRING }
              },
              required: ["title", "description", "difficulty"]
            }
          }
        },
        required: ["path", "projects"]
      }
    }
  });

  const text = response.text;
  if (!text) {
    throw new Error("Empty response from AI");
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    console.error("Failed to parse AI response:", text);
    throw e;
  }
};
