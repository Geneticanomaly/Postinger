import { Request, Response } from 'express';
import multer from 'multer';
import { isAuthenticated } from '../util/middleware';
require('express-async-errors');
import UserInstance from '../database/models/user';
import FileInstance from '../database/models/file';
import models from '../database/models';
import { convertToBase64 } from '../util/helperFunctions';

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

type UserWithImages = UserInstance & {
    profileImage: FileInstance | null;
    backgroundImage: FileInstance | null;
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

    if (!user) {
        res.status(400).json({ error: 'User not found' });
        return;
    }

    const userWithImages = user as UserWithImages;

    res.status(200).json({
        ...user.toJSON(),
        profileImage: convertToBase64(userWithImages.profileImage),
        backgroundImage: convertToBase64(userWithImages.backgroundImage),
    });
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

type updateUserImageRequest = {
    userId: string;
    fileType: string;
};

export const updateUserImage = async (
    req: Request<{}, {}, updateUserImageRequest>,
    res: Response
) => {
    uploadMiddleware(req, res, async (err: any) => {
        if (err) {
            res.status(500).json({ error: 'File upload failed' });
            return;
        }
        const { userId, fileType } = req.body;

        const user = await User.findByPk(userId);

        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }

        if (!req.file) {
            res.status(400).json({ error: 'No file uploaded' });
            return;
        }

        const existingFile = await File.findOne({
            where: {
                userId: userId,
                fileType: fileType,
            },
        });

        if (existingFile) {
            console.log('******************** UPDATING AN EXISTING FILE ********************');
            existingFile.name = req.file.originalname;
            existingFile.encoding = req.file.encoding;
            existingFile.mimetype = req.file.mimetype;
            existingFile.buffer = req.file.buffer;

            await existingFile.save();

            res.status(200).json({
                name: existingFile.name,
                encoding: existingFile.encoding,
                mimetype: existingFile.mimetype,
                buffer: existingFile.buffer.toString('base64'),
                fileType: fileType,
            });
        } else {
            console.log('******************** CREATING A NEW FILE ********************');
            const newFile = {
                userId: user.id,
                name: req.file.originalname,
                encoding: req.file.encoding,
                mimetype: req.file.mimetype,
                buffer: req.file.buffer,
                fileType: fileType,
            };

            const file = await File.create(newFile);

            res.status(200).json({
                name: file.name,
                encoding: file.encoding,
                mimetype: file.mimetype,
                buffer: file.buffer.toString('base64'),
                fileType: fileType,
            });
        }
    });
};
