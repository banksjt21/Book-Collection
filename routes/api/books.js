/*  ===========================================================================
//  books.js
//  ===========================================================================
//  - Manages requests to server routes
//  - Sends a request to the controller based on the url (link/button clicked)
//    and HTTP request method specified here.
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
const express         = require('express');
const router          = express.Router();
const booksController = require('../../controllers/books');




/*  ===========================================================================
//  SERVER ROUTES
//  =======================================================================  */
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