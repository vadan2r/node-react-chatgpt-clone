const inputPrompt = require("../models/input-prompt"); // Importa o modelo InputPrompt

const GenAI = require("../config/genai"); // Importa a classe GenAI

module.exports = {
  async sendText(req, res) {
    const { prompt } = req.body;
    const inputModel = new inputPrompt(req.body); // Cria uma instância do modelo InputPrompt

    if (!prompt) {
      return res.status(400).json({
        success: false,
        error: "Prompt is required",
      });
    }

    try {
      const response = await GenAI.textCompletion({ prompt, model: 'gemini-2.0-flash' });
      return res.status(200).json({
        success: true,
        data: response,
      });
    } catch (error) {
      console.error('Error generating text with Gemini API:', error);
      return res.status(500).json({
        success: false,
        error: error.message || 'There was an issue on the server',
      });
    }
  },
};