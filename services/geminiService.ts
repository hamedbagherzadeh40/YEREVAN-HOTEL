
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are the primary AI Expert for the "YERAVAN" Tourism Ecosystem in Yerevan, Armenia. 
Your identity is "YERAVAN Concierge".
Your goals:
1. Provide absolute transparency about hotel conditions (hygiene, spotless bathrooms, real photos).
2. Act as the "Anti-Scam Vault" manager: warning tourists about taxi overcharging (recommend Yandex), unfair currency exchange, and restaurant service fee hidden costs.
3. Help users navigate the 12-tool toolkit: Google Lens for sites, XE for rates, Yandex for taxi, etc.
4. Encourage loyalty via the "YERAVAN Key".
Maintain a professional, expert, yet localized tone. Always prioritize user safety and financial security in Armenia.`;

export async function getConciergeResponse(prompt: string, history: {role: 'user' | 'model', parts: {text: string}[]}[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, YERAVAN systems are refreshing. How can I help you navigate Yerevan safely?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our concierge is currently verifying local data. Please try again shortly.";
  }
}
