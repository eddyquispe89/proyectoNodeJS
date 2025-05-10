const express = require('express');
const path = require('path'); // Para manejar rutas de archivos
const app = express();
const port = process.env.PORT || 8080;

// Establecer EJS como motor de plantillas
app.set('view engine', 'ejs')

// Servir archivos estáticos (como imágenes) desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Clase de APP Service - WME', 
    description: 'Capacitación sobre APP Service para el equipo Kyndryl', 
    imageUrl: '/images/kyndryl-logo.png' // Asegúrate de tener la imagen en la carpeta 'public/images'
  });
});

// Middleware de manejo de errores (si ocurre un error)
app.use((err, req, res, next) => {
  console.error(err.stack); // Esto debería registrar el error en la consola
  res.status(500).send('Something broke!'); // Esto envía una respuesta de error 500 al cliente
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});