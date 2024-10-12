import { Request, Response, NextFunction } from 'express';

export const unknownEndpoint = (_req: Request, res: Response) => {
    res.status(404).send({ error: 'unknown endpoint' });
    return;
};

export const errorHandler = (error: Error, _req: Request, res: Response, next: NextFunction) => {
    if (error.name === 'SequelizeValidationError') {
        res.status(400).json({ error: error.message });
        return;
    }
    next(error);
};
