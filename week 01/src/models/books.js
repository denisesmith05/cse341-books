// The model's job is to talk to the database and return data.

import { getDb }  from '../db/connect.js';

const getAllBooks = async () => {
    return await getDb().collection('books').find({}).toArray();
};

const getBookById = async (bookId) => {
    return await getDb().collection('books').findOne({ _id: bookId });
};

export { getAllBooks, getBookById };