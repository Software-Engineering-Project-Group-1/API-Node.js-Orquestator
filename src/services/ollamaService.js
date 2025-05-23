const axios = require('axios');

async function chatWithMistral(userMessage, context = '') {
  const prompt = `
Eres un chatbot de atención al cliente de WhatsApp para una empresa. 
Tu función es responder preguntas de los usuarios basándote en el contexto proporcionado más abajo. 



Contexto:
${context}

Pregunta:
${userMessage}

Respuesta:
`;

  const response = await axios.post('http://host.docker.internal:11434/api/generate', {
    model: 'gemma:2b', // o 'mistral', si tienes suficiente RAM
    prompt,
    stream: false
  });

  return response.data.response;
}

module.exports = { chatWithMistral };
