import express from 'express';
import cors from 'cors';
import { PORT } from './util/config';
import { connectToDatabase } from './util/db';
import { app, server } from './socket/socket';
import { errorHandler, unknownEndpoint } from './util/middleware';
import cookieParser from 'cookie-parser';
import { router as authRouter } from './routes/auth';
import { router as postRouter } from './routes/post';
import { router as userRouter } from './routes/user';

app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
    })
);
app.use(express.json());
app.use(cookieParser());

app.use(authRouter);
app.use(postRouter);
app.use(userRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

server.listen(PORT, async () => {
    await connectToDatabase();
    console.log(`Server running on port ${PORT}`);
});
