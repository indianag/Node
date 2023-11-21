const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Book = require('./Book');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const books = []; // Array de libros 

// Endpoint para obtener los datos de un libro por id
app.get('/books', (req, res) => {
  const { id } = req.query;

  if (id) {
    const book = books.find((book) => book.id_book === parseInt(id));
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Libro no encontrado' });
    }
  } else {
    res.status(400).json({ error: 'Se requiere el parámetro id' });
  }
});

// Endpoint para obtener toda la lista de libros
app.get('/books', (req, res) => {
  res.json(books);
});

// Endpoint para añadir un libro nuevo
app.post('/books', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

// Endpoint para modificar los datos de un libro por id
app.put('/books', (req, res) => {
  const { id } = req.query;
  const updatedBook = req.body;

  if (id) {
    const index = books.findIndex((book) => book.id_book === parseInt(id));

    if (index !== -1) {
      books[index] = { ...books[index], ...updatedBook };
      res.json(books[index]);
    } else {
      res.status(404).json({ error: 'Libro no encontrado' });
    }
  } else {
    res.status(400).json({ error: 'Se requiere el parámetro id' });
  }
});

// Endpoint para eliminar un libro por id
app.delete('/books', (req, res) => {
  const { id } = req.query;

  if (id) {
    const index = books.findIndex((book) => book.id_book === parseInt(id));

    if (index !== -1) {
      const deletedBook = books.splice(index, 1)[0];
      res.json(deletedBook);
    } else {
      res.status(404).json({ error: 'Libro no encontrado' });
    }
  } else {
    res.status(400).json({ error: 'Se requiere el parámetro id' });
  }
});

app.listen(port, () => {
  console.log(`Servidor web escuchando en http://localhost:${port}`);
});