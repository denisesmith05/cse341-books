// The controller receives the request, calls the model, and decides what response to send back.

import { getAllBooks } from '../models/books.js';

const getBooksHandler = async (req, res) => {
    try {
        const books = await getAllBooks();
        return res.status(200).json(books);
    } catch (error) {
        console.error('Failed to retrieve books:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

export { getBooksHandler };