const express = require('express');
const app = express();
const port = 3000; // se puede cambiar el puerto segun preferencias

// Middleware para mostrar en consola información sobre cada petición
app.use((req, res, next) => {
  console.log('Petición recibida del cliente');
  console.log('URL:', req.url);
  console.log('Método:', req.method);
  console.log('User-Agent:', req.get('User-Agent'));
  next();
});

// Ruta principal que devuelve un mensaje JSON
app.get('/', (req, res) => {
  res.status(200).json({ ok: true, message: 'Recibido!' });
});

// Ruta /bye que devuelve un mensaje de despedida en formato JSON
app.get('/bye', (req, res) => {
  res.status(200).json({ ok: true, message: 'Adios!' });
});

// Manejo de rutas no definidas
app.use((req, res) => {
  res.status(404).json({ ok: false, message: 'Ruta no encontrada' });
});

// Iniciar el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor web escuchando en http://localhost:${port}`);
});