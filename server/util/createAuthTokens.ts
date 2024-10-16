import jwt from 'jsonwebtoken';
import User from '../database/models/user';
import { REFRESH_TOKEN_SECRET, ACCESS_TOKEN_SECRET } from './config';
import { Response } from 'express';

export type Token = {
    userId: string;
};

const createAuthTokens = (user: User): { refreshToken: string; accessToken: string } => {
    const refreshToken = jwt.sign({ userId: user.id }, REFRESH_TOKEN_SECRET, { expiresIn: '30d' });
    const accessToken = jwt.sign({ userId: user.id }, ACCESS_TOKEN_SECRET, { expiresIn: '15min' });

    return { refreshToken, accessToken };
};

const cookieOpts = {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 year
} as const;

export const sendAuthCookies = (res: Response, user: User) => {
    const { refreshToken, accessToken } = createAuthTokens(user);
    res.cookie('id', accessToken, cookieOpts);
    res.cookie('rid', refreshToken, cookieOpts);
};

export const clearAuthCookies = (res: Response) => {
    res.clearCookie('id', { ...cookieOpts, maxAge: 0 });
    res.clearCookie('rid', { ...cookieOpts, maxAge: 0 });
};
