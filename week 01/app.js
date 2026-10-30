import express from 'express';
// import { getDb } from './src/db/connect.js'
// import getDb just for practice

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).json({ message: 'Server is running' });
});

// app.get('/trails', async (req, res) => {
//     try {
//         const trails = await getDb()
//             .collection('trails')
//             .find({})
//             .toArray();
        
//         return res.status(200).json(trails);
//     } catch (error) {
//         console.error('Failed to retrieve trails:', error);
//         return res.status(500).json({ message: 'Internal server error' });
//     }
// })
// GET/trails route just for practice. It is not required for the assignment.

export default app;