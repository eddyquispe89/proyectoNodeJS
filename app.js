const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola, Azure! Mi aplicación Node.js está corriendo!');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
