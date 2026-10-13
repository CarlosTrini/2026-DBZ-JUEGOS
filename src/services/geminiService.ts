import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export const GeminiService = {

    // async getHints(characterName: string, signal?: AbortSignal): Promise<string[]> {
    async getHints(characterName: string): Promise<string[]> {

        if (!characterName) return [];
        const descriptionPrompt = `Experto en Dragon Ball Z. Español. Genera 5 pistas cortas (no más de 15 palabras cada una) numeradas (1-3), misteriosas y poco obvias, para adivinar a este personaje: '${characterName}' en un juego de ahorcado. No reveles su raza, nombre ni tipo. Responde solo con las pistas`;

        try {
            // Llamada al modelo estándar y eficiente (gemini-2.5-flash)
            const res = await ai.models.generateContent({
                model: 'gemini-3.8-flash',
                contents: descriptionPrompt,
                config: {
                    responseMimeType: 'application/json',
                    // abortSignal: signal,
                },
            });



            // Tu rol será ser experto en dragon ball. Te enviaré un nombre, me darás puntos: 1 - 5 breves y concisos pero no tan obvios... ¿para qué? para un juego de ahorcado con personajes de dragon ball Z (todas las sagas) el usuario mediante esas 5 pistas tratará de adivinar al personaje...
            return res.text ? JSON.parse(res.text)?.pistas : ['El servicio de Gemini está fallando, intente más tarde'];
        } catch (error) {
            // Si fue abortado por timeout o cancelación manual
            // if (signal?.aborted || error?.name === 'AbortError') {
            //     console.warn('La petición a Gemini fue cancelada por tiempo límite.');
            //     throw new Error('Tiempo de espera agotado al consultar a Gemini');
            // }
            console.error('Error al generar contenido:', error);
            throw new Error('El servicio de Gemini está fallando, intente más tarde');
        }
    }
}