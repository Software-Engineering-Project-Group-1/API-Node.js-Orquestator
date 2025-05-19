const express = require('express');
const router = express.Router();
const { chatWithMistral } = require('../services/ollamaService');
const { query } = require('../services/chromaService');

router.post('/', async (req, res) => {
  const { message } = req.body;

  if (!message) return res.status(400).json({ error: 'Falta el mensaje 😢' });

  try {
    const context = await query(message); // busca el contexto relevante
    const response = await chatWithMistral(message, context); // manda el contexto y el mensaje al modelo

    res.json({ response, context }); // puedes incluir el contexto por si lo quieres mostrar en frontend
  } catch (error) {
    console.error('❌ Error en /chat:', error.message);
    res.status(500).json({ error: 'Error interno del servidor 💔' });
  }
});

module.exports = router;
