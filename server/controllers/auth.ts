import { Request, Response } from 'express';
import User from '../database/models/user';
import bcrypt from 'bcrypt';
import 'express-async-errors';
import { clearAuthCookies, sendAuthCookies } from '../util/createAuthTokens';

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
    });

    // Compare user's password and given password
    const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.password);
    if (!(user && passwordCorrect)) {
        res.status(401).json({ error: 'invalid username or password' });
        return;
    }
    sendAuthCookies(res, user);

    res.status(200).json({ user: user });
};

export const logoutAuth = (_req: Request, res: Response) => {
    clearAuthCookies(res);
    res.status(200).end();
};
