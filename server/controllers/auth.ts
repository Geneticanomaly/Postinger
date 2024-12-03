import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import 'express-async-errors';
import { clearAuthCookies, sendAuthCookies } from '../util/createAuthTokens';
import { isAuthenticated } from '../util/middleware';
import models from '../database/models';

const { User, File } = models;

type RegisterRequest = {
    email: string;
    password: string;
    username: string;
};

export const registerAuth = async (req: Request<{}, {}, RegisterRequest>, res: Response) => {
    const { email, username, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        email,
        password: hashedPassword,
        username,
        disabled: false,
        admin: false,
    });

    res.status(201).json(user);
};

type LoginRequest = {
    email: string;
    password: string;
};

export const loginAuth = async (req: Request<{}, {}, LoginRequest>, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({
        where: {
            email,
        },
        include: [
            { model: File, as: 'profileImage' },
            { model: File, as: 'backgroundImage' },
        ],
    });

    if (!user) {
        res.status(401).json({ error: 'invalid username' });
        return;
    }

    // Compare user's password and given password
    const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.password);
    if (!passwordCorrect) {
        res.status(401).json({ error: 'invalid password' });
        return;
    }
    sendAuthCookies(res, user);

    res.status(200).json(user);
};

export const logoutAuth = (_req: Request, res: Response) => {
    clearAuthCookies(res);
    res.status(200).end();
};

export const isUserAuthenticated = async (req: Request, res: Response) => {
    const response = isAuthenticated(req, res);
    res.json(response);
};
