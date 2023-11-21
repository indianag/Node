const {Router} = require ("express")
const router = Router();
const bookCtrl1 = require ("../controller/book1.controller")

// Endpoint para iniciar
router.get("/", bookCtrl1.getStart);

// Endpoint para obtener todos los libros
router.get("/book", bookCtrl1.getBooks);

// Endpoint para crear un nuevo libro
router.post("/book", bookCtrl1.postBook);

// Endpoint para modificar los datos de un libro
router.put("/book", bookCtrl1.putBook);

// Endpoint para eliminar un libro
router.delete("/book", bookCtrl1.deleteBook);



module.exports = router;

