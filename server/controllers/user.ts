import { Request, Response } from 'express';
import multer from 'multer';
import { isAuthenticated } from '../util/middleware';
require('express-async-errors');
import models from '../database/models';

const { User, File } = models;

export const getUsers = async (_req: Request, res: Response) => {
    const users = await User.findAll();
    res.json(users);
};

export const getUser = async (req: Request, res: Response) => {
    const user = await User.findOne({
        where: {
            username: req.params.username,
        },
        include: [
            { model: File, as: 'profileImage' },
            { model: File, as: 'backgroundImage' },
        ],
    });
    res.status(200).json(user);
};

export const getCurrentUser = async (req: Request, res: Response) => {
    const userId = isAuthenticated(req, res);

    if (!userId) {
        res.status(401).json({ error: 'Unauthorized: Token expired' });
        return;
    }

    const user = await User.findByPk(userId, {
        include: [
            { model: File, as: 'profileImage' },
            { model: File, as: 'backgroundImage' },
        ],
    });

    res.status(200).json(user);
};

type UserDataRequest = {
    username: string;
    description: string;
    residence: string;
};

export const updateUserData = async (req: Request<{}, {}, UserDataRequest>, res: Response) => {
    const { username, description, residence } = req.body;
    const user = await User.findOne({ where: { username: username } });

    if (!user) {
        res.status(400).json({ error: 'User not found' });
        return;
    }

    user.username = username;
    user.description = description;
    user.residence = residence;

    await user.save();

    res.status(200).json(user);
};

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadMiddleware = upload.single('file');

export const updateUserImage = async (req: Request<{ id: string }, {}, {}>, res: Response) => {
    uploadMiddleware(req, res, async (err: any) => {
        if (err) {
            res.status(500).json({ error: 'File upload failed' });
            return;
        }
        const user = await User.findByPk(req.params.id);

        if (req.file && user) {
            const newFile = {
                userId: user.id,
                name: req.file.originalname,
                encoding: req.file.encoding,
                mimetype: req.file.mimetype,
                buffer: req.file.buffer,
                fileType: 'profile',
            };

            await File.create(newFile);
        }

        res.json(user);
    });
};
