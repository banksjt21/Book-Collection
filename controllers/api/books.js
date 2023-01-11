/*  ===========================================================================
//  books.js
//  ===========================================================================
//  - Sends requests from server to the database
//  - Server then sends responses to the client
//  =======================================================================  */




/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
const Book = require('../../models/book');




/*  ===========================================================================
//  
//  =======================================================================  */
module.exports = {
    index,
    remove,
    create,
    update,
    show
}


async function index(req, res) {
    try {
        console.log(req.user._id)
        const books = await Book.find({ userID: req.user._id }).sort( { title : 1, _id: 1 } );
        res.status(200).json(books);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

async function remove(req, res) { // delete
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        res.status(200).json(book);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

async function create(req, res) {
    try {
        req.body.author = req.body.author.split(",");
        req.body.category = req.body.category.split(",");
        const book = await Book.create(req.body);
        res.status(200).json(book);
        // console.log(`${book.title} has been added to your collection!`);
    } catch (error) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json(error);
    }
}

async function update(req, res) {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(book);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

async function show(req, res) {
    try {
        const book = await Book.findById(req.params.id);
        res.status(200).json(book);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}