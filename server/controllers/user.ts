import { Request, Response } from 'express';
import User from '../database/models/user';
import File from '../database/models/file';
import multer from 'multer';
require('express-async-errors');

export const getUsers = async (_req: Request, res: Response) => {
    const users = await User.findAll();
    res.json(users);
};

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadMiddleware = upload.single('file');

export const updateUserImage = async (req: Request<{ id: string }, {}, {}>, res: Response) => {
    uploadMiddleware(req, res, async (err: any) => {
        if (err) {
            res.status(500).json({ error: 'File upload failed' });
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
