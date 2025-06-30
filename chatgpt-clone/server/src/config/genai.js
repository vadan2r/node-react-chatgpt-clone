const { GoogleGenerativeAI } = require('@google/genai'); // Importação correta

class GenAI {
  // Singleton para instância do Google Generative AI
  static #instance = null;

  static getInstance(apiKey = process.env.GEMINI_API_KEY) {
    if (!this.#instance) {
      this.#instance = new GoogleGenerativeAI(apiKey);
    }
    return this.#instance;
  }

  static async textCompletion({ prompt, model = 'gemini-2.0-flash' }) {
    const genAI = this.getInstance();
    const generativeModel = genAI.getGenerativeModel({ model });

    const response = await generativeModel.generateContent({
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }],
        },
      ],
    });

    return response.candidates[0].content.parts[0].text; // Retorna o texto diretamente
  }
}

module.exports = GenAI; // Exportação correta

// Exemplo de uso
async function getResponse() {
  try {
    const result = await GenAI.textCompletion({
      prompt: 'Explain how AI works in a few words',
    });
    console.log(result);
  } catch (error) {
    console.error('Erro na geração de conteúdo:', error);
  }
}

getResponse();