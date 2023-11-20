let books = [{id_book:1, id_user:1, title:"text 1", type:"tapa 1", author:"Pedro", price:12, photo:"Url 1"},
            {id_book:2, id_user:2, title:"text 2", type:"tapa 2", author:"Pepe", price:25, photo:"Url 1"},
            {id_book:3, id_user:3, title:"text 3", type:"tapa 3", author:"Pablo", price:15, photo:"Url 1"}];

// Endpoint para Iniciar
function getStart(request, response){
    let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
    response.send(respuesta);
}

// Endpoint para obtener todos los libros
function getBooks(request, response){
  let respuesta = {error: true, codigo: 200, mensaje: 'todos los libros', books};
  response.send(respuesta)
}

// Endpoint para crear un nuevo libro y agregarlo al array de libros
function postBook(request, response){
  let respuesta;
  console.log(request.body)
  if (!books.some(book => book.id_book == request.body.id_book )){
    books.push(request.body);
    respuesta = {error: false, codigo: 200, mensaje: "libro creado", books}
    }
  else {
    respuesta = { error: true, codigo: 200, mensaje: "libro ya existe"};
  }
    response.send(respuesta);
   
}
// Endpoint para modificar los datos de un libro
function putBook(request, response){  
    const { id_book, id_user, title, type, author, price, photo } = request.body;
    const bookToUpdate = books.find(book => book.id_book == id_book);
  if (bookToUpdate) {
    bookToUpdate.id_user = id_user;
    bookToUpdate.title = title;
    bookToUpdate.type = type;
    bookToUpdate.author = author; 
    bookToUpdate.price = price;
    bookToUpdate.photo = photo;
    respuesta = { error: true, codigo: 200, mensaje: "Libro actualizado ", bookToUpdate}
  } else {
    respuesta = { error: false, codigo: 200, mensaje: "el libro no existe"}
  }
  response.send(respuesta);
}
// Endpoint para eliminar un libro
function deleteBook(request, response){

      const { id_book } = request.body;
      const index = books.findIndex(book => book.id_book == id_book);

  if (index !== -1) {
    const deletedBook = books.splice(index, 1)[0];
    respuesta = { error: true, codigo: 200, mensaje: "Libro eliminado", deletedBook}
  } else {
    respuesta = { error: false, codigo: 200, mensaje: "El libro no existe", }
  }
  response.send(respuesta);
}

function listenBook(){
    console.log(`Servidor web escuchando en http://localhost:${port}`);
}

module.exports = {
    getStart,
    getBooks,
    postBook,
    putBook,
    deleteBook,
    listenBook,
};
