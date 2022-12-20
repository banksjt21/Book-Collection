const Book = require('../models/book');

module.exports = {
    index,
    create,
    show
} 


async function index(req, res) {
    try {
        const books = await Book.find({});
        res.status(200).json(books);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

async function create(req, res) {

    try {
        req.body.author = req.body.author.split(",");
        const book = await Book.create(req.body);
        res.status(200).json(book);
        // console.log(`${book.title} has been added to your collection!`);
    } catch (error) {
        // Client will check for non-2xx status code
        // 400 = Bad Request
        res.status(400).json(error);
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