const express = require("express")
const cors = require('cors')
// const booksRouters = require("./router/books.routers")
const book1Routers = require("./router/book1.router")
const errorHandling = require("./error/errorHandling")

const app = express();


app.set("port", process.env.PORT || 2000)


app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
// app.use(booksRouters);
app.use(book1Routers);
app.use(function(req, res, next){
    res.status(404).json({error:true,
                          codigo: 404,
                          message: "Endpoint doesnt found",
                          books: {
                                    "id_book": number,
                                    "id_user": number,
                                    "title": string,
                                    "type": string,
                                    "author": string,
                                    "price": number,
                                    "photo": string}})

})

app.use(errorHandling);

module.exports = app;
