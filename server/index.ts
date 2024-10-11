import express from 'express';
import cors from 'cors';
import { PORT } from './util/config';
import { connectToDatabase } from './util/db';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/test', (_req, res) => {
    res.send('Working');
});

app.listen(PORT, async () => {
    await connectToDatabase();
    console.log(`Server running on port ${PORT}`);
});
