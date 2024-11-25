import { Request, Response } from 'express';
import Post from '../database/models/post';
import File from '../database/models/file';
import multer from 'multer';
require('express-async-errors');

export const getPosts = async (_req: Request, res: Response) => {
    const posts = await Post.findAll();
    res.json(posts);
};

type CreatePostRequest = {
    userId: string;
    content: string;
};

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadMiddleware = upload.single('file');

export const createPost = async (req: Request<{}, {}, CreatePostRequest>, res: Response) => {
    uploadMiddleware(req, res, async (err: any) => {
        if (err) {
            res.status(500).json({ error: 'File upload failed' });
            return;
        }

        const { userId, content } = req.body;

        const post = await Post.create({
            userId: userId,
            content: content,
        });

        if (req.file) {
            const newFile = {
                postId: post.id,
                name: req.file.originalname,
                encoding: req.file.encoding,
                mimetype: req.file.mimetype,
                buffer: req.file.buffer,
                fileType: 'other-img',
            };

            await File.create(newFile);
        }

        res.json(post);
    });
};

export const getFiles = async (_req: Request, res: Response) => {
    const files = await File.findAll();
    res.json(files);
};
