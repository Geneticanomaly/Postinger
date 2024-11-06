import { Request, Response } from 'express';
import User from '../database/models/user';
require('express-async-errors');

export const getUsers = async (_req: Request, res: Response) => {
    const users = await User.findAll();
    res.json(users);
};
