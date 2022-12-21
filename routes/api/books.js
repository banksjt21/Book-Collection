const express         = require('express');
const router          = express.Router();
const booksController = require('../../controllers/books');

//  GET /api/books
router.get('/', booksController.index);

//  DELETE /api/books/q/:id
router.delete('/q/:id', booksController.remove);

//  POST /api/books
router.post('/', booksController.create); // send request to controller

//  PUT /api/books/q/:id/
router.put('/q/:id/', booksController.update);

//  GET /api/books/q/:id
router.get('/q/:id', booksController.show);



module.exports = router;