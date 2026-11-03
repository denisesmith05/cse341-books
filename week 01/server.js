import app from './app.js';
import { connectToDb, getDb } from './src/db/connect.js';

const PORT = process.env.PORT;

if (!PORT) {
    console.error('PORT is not defined. Make sure your local npm scripts reference the .env file with --env-file=.env, or define PORT in your hosted environment settings.');
}
const startServer = async () => {
    try {
        await connectToDb();

        app.listen(PORT, () => {
            console.log(`Server listening on port 127.0.0.1:${PORT}`);
        });
    } 
    catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
    const books = await getDb().collection('books').find({}).toArray();
    console.log('Book documents:', books);
};

await startServer();