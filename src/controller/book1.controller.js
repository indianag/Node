let book1 = {id_book:1, id_user:1, title:"text 1", type:"tapa 1", author:"Pedro", price:12, photo:"Url 1"};

// Endpoint para Iniciar
function getStart(request, response){
    let respuesta = {error: true, codigo: 200, mensaje: 'Punto de inicio'};
    response.send(respuesta);
}

// Endpoint para obtener todos los libros
function getBooks(request, response){
    let respuesta;
    if(book1 != null)
        respuesta = {error: false, codigo: 200, book1};
    else 
        respuesta= { error: true, codigo: 200, mensaje: "El libro no existe"}
  response.send(respuesta)
}

// Endpoint para crear un nuevo libro
function postBook(request, response){
  let respuesta;

  console.log(request.body);

  // Verificar si el libro ya existe por su ID
  if (book1.id_book !== request.body.id_book )
  // if (!book1[request.body.id_book]) 
  {
    // Agregar el nuevo libro al objeto literal
    book1[request.body.id_book] = request.body;
    respuesta = { error: false, codigo: 200, mensaje: "Libro creado", book1 };
  } else {
    respuesta = { error: true, codigo: 200, mensaje: "El libro ya existe" };
  }

  response.send(respuesta);
   
}
// Endpoint para modificar los datos de un libro
function putBook(request, response){  
    const { id_user, title, type, author, price, photo } = request.body;
    let respuesta;

    if (book1.id_book === request.body.id_book) {
      // Actualizar las propiedades del libro existente
      book1.id_user = id_user;
      book1.title = title;
      book1.type = type;
      book1.author = author;
      book1.price = price;
      book1.photo = photo;
    respuesta = { error: false, codigo: 200, mensaje: "Libro actualizado ", book1}
  } else {
    respuesta = { error: true, codigo: 200, mensaje: "el libro no existe"}
  }
  response.send(respuesta);
}
// Endpoint para eliminar un libro
function deleteBook(request, response){
    const { id_book } = request.body;

    let respuesta;

    // Verificar si el libro con id_book existe
    if (book1.id_book === request.body.id_book) {
      // Eliminar el libro del objeto literal
      const deletedBook = book1[id_book];
      delete book1[id_book];
    respuesta = { error: false, codigo: 200, mensaje: "Libro eliminado", deletedBook}
  } else {
    respuesta = { error: true, codigo: 200, mensaje: "El libro no existe", }
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