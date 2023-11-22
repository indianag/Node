const {Router} = require ("express")
const router = Router();
const bookCtrl = require ("../controller/books.controller")

// Endpoint para iniciar
router.get("/", bookCtrl.getStart);

// Endpoint para obtener todos los libros
router.get("/books", bookCtrl.getBooks);

// Endpoint para obtener un libro por su ID
router.get("/books/:id", bookCtrl.getBookId)

// Endpoint para crear un nuevo libro
router.post("/books", bookCtrl.postBook);

// Endpoint para modificar los datos de un libro
router.put("/books", bookCtrl.putBook);

// Endpoint para eliminar un libro
router.delete("/books", bookCtrl.deleteBook);




module.exports = router;
