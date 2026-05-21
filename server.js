const express = require('express');
const db = require('./db');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', productRoutes);

app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    hostname: require('os').hostname() // ID do container
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}`);
});

// Error handling
process.on('unhandledRejection', (err) => {
  console.error('Erro não tratado:', err);
});
