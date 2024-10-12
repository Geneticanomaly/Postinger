import express from 'express';
import cors from 'cors';
import { PORT } from './util/config';
import { connectToDatabase } from './util/db';
import { app, server } from './socket/socket';
import { router as authRouter } from './routes/auth';
import { errorHandler, unknownEndpoint } from './util/middleware';

app.use(cors());
app.use(express.json());

app.use(authRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

server.listen(PORT, async () => {
    await connectToDatabase();
    console.log(`Server running on port ${PORT}`);
});
