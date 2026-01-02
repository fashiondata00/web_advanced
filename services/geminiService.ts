
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getFashionAdvice = async (userInput: string) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Acting as a high-end tech-fashion stylist for the brand 'NEO-CYBER', provide style advice for this query: "${userInput}". 
    The style is futuristic, brutalist, high-performance, and luxury. 
    Focus on technical fabrics (Gore-Tex, Dyneema, carbon fiber) and avant-garde silhouettes.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          advice: { type: Type.STRING, description: 'Direct fashion advice' },
          recommendedItems: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: 'List of futuristic item names'
          },
          techSpecs: { type: Type.STRING, description: 'Technical material details' }
        },
        required: ["advice", "recommendedItems", "techSpecs"]
      }
    }
  });

  try {
    return JSON.parse(response.text || '{}');
  } catch (e) {
    console.error("Failed to parse Gemini response", e);
    return null;
  }
};
