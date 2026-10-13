import { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

// Inicializar el SDK de Gemini
// Asegúrate de usar import.meta.env.VITE_GEMINI_API_KEY si usas Vite, 
// o process.env.REACT_APP_GEMINI_API_KEY si usas Create React App.
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export default function GeminiChat() {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt.trim()) return;

        const descriptionPrompt = `Experto en Dragon Ball Z. Español. Genera 3 pistas cortas numeradas (1-3), misteriosas y poco obvias, para adivinar a este personaje: '${prompt}' en un juego de ahorcado. No reveles su raza, nombre ni tipo. Responde solo con las pistas`;

        setLoading(true);
        setResponse('');

        try {
            // Llamada al modelo estándar y eficiente (gemini-2.5-flash)
            const res = await ai.models.generateContent({
                // model: 'gemini-2.5-flash',
                // contents: prompt, 
                model: 'gemini-2.5-flash',
                contents: descriptionPrompt,
                config: {
                    responseMimeType: 'application/json'
                }
            });



            // Tu rol será ser experto en dragon ball. Te enviaré un nombre, me darás puntos: 1 - 5 breves y concisos pero no tan obvios... ¿para qué? para un juego de ahorcado con personajes de dragon ball Z (todas las sagas) el usuario mediante esas 5 pistas tratará de adivinar al personaje...
            console.log(res)
            setResponse(res.text || '');
        } catch (error) {
            console.error('Error al generar contenido:', error);
            setResponse('Ocurrió un error al comunicarse con Gemini.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'sans-serif', padding: '20px' }}>
            <h2>Asistente con Google Gemini 🚀</h2>

            <form onSubmit={handleGenerate} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <textarea
                    rows={4}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Escribe tu pregunta o instrucción aquí..."
                    style={{ padding: '10px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <button
                    type="submit"
                    disabled={loading}
                    style={{ padding: '10px 15px', backgroundColor: '#1a73e8', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}
                >
                    {loading ? 'Pensando...' : 'Enviar a Gemini'}
                </button>
            </form>

            {response && (
                <div className='text-black' style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '4px', border: '1px solid #e9ecef' }}>
                    <h3>Respuesta:</h3>
                    <p style={{ whiteSpace: 'pre-wrap' }}>{response}</p>
                </div>
            )}
        </div>
    );
}