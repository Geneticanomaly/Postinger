import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { clearAuthCookies } from './createAuthTokens';

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

export const isAuthenticated = (req: Request, res: Response): string | undefined => {
    const refreshToken = req.cookies.rid;
    const currentTime = Math.floor(Date.now() / 1000);

    // Check refresh token expiration
    let isRefreshTokenValid = false;
    let userId = '';
    if (refreshToken) {
        const decodedRefreshToken = jwt.decode(refreshToken);
        if (decodedRefreshToken && typeof decodedRefreshToken !== 'string') {
            const payload = decodedRefreshToken as JwtPayload;
            if (payload.exp && payload.exp > currentTime) {
                isRefreshTokenValid = true;
                userId = payload.userId;
            }
        }
    }

    if (isRefreshTokenValid) {
        return userId;
    } else {
        // CLear cookies if refreshToken has expired
        clearAuthCookies(res);
        return undefined;
    }
};
