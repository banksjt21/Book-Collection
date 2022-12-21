const express         = require('express');
const router          = express.Router();
const booksController = require('../../controllers/books');

//  GET /api/books
router.get('/', booksController.index);

//  POST /api/books
router.post('/', booksController.create); // send request to controller

//  GET /api/books/q/:id
router.get('/:id', booksController.show);



module.exports = router;