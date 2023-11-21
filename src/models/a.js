const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {Book} = require('./Book.js');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const books = []; // Almacenar los libros en memoria 

// Endpoint para obtener todos los libros
app.get('/book', (req, res) => {
  res.json(books);
});

// Endpoint para crear un nuevo libro
app.post('/book', (req, res) => {
  const { id_book, id_user, title, type, author, price, photo } = req.body;
  const newBook = new Book(id_book, id_user, title, type, author, price, photo);
  books.push(newBook);
  res.status(201).json(newBook);
});

// Endpoint para modificar los datos de un libro
app.put('/book', (req, res) => {
  const { id_book, id_user, title, type, author, price, photo } = req.body;

  // Buscar el libro por su ID
  const bookToUpdate = books.find((book) => book.id_book === id_book);

  if (bookToUpdate) {
    bookToUpdate.id_user = id_user || bookToUpdate.id_user;
    bookToUpdate.title = title || bookToUpdate.title;
    bookToUpdate.type = type || bookToUpdate.type;
    bookToUpdate.author = author || bookToUpdate.author;
    bookToUpdate.price = price || bookToUpdate.price;
    bookToUpdate.photo = photo || bookToUpdate.photo;
    res.json(bookToUpdate);
  } else {
    res.status(404).json({ error: 'Libro no encontrado' });
  }
});

// Endpoint para eliminar un libro
app.delete('/book', (req, res) => {
  const { id_book } = req.body;
  const index = books.findIndex((book) => book.id_book === id_book);

  if (index !== -1) {
    const deletedBook = books.splice(index, 1)[0];
    res.json(deletedBook);
  } else {
    res.status(404).json({ error: 'Libro no encontrado' });
  }
});

app.listen(app.get(port), function () {
  console.log(`Servidor web escuchando en http://localhost:${port}`);
});