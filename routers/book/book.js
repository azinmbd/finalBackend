const  book= require('../../controllers/booklist.controllers');
const router = require("express").Router();

router.post("/create", book.add )
router.post("/:id", book.updateBookById )
router.get("/", book.getAllBooks )
router.post("/:id", book.getBookById )
router.delete("/delete/:id", book.DeleteBookById )



module.exports = {
    BookRoutes: router
}