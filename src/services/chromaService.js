const axios = require('axios');

const CHROMA_API = process.env.CHROMA_API || 'http://host.docker.internal:8001';

async function query(message) {
  try {
    const response = await axios.get(`${CHROMA_API}/buscar`, {
      params: { mensaje: message, n_resultados: 3 }
    });
    
    console.log('🔍 Resultados de Chroma:', response.data.resultados);
    
    return response.data.resultados || '';
  } catch (error) {
    console.error('❌ Error al consultar Chroma:', error.message);
    return '';
  }
}

module.exports = { query };
