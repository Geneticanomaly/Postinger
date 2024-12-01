import { Request, Response } from 'express';
import multer from 'multer';
require('express-async-errors');
import models from '../database/models';
import { convertToBase64 } from '../util/helperFunctions';
import FileInstance from '../database/models/file';
import PostInstance from '../database/models/post';

const { Post, File, User } = models;

interface PostWithUser extends PostInstance {
    user: {
        username: string;
        profileImage: FileInstance | null;
    };
}

export const getPosts = async (_req: Request, res: Response) => {
    const posts = await Post.findAll({
        include: [
            {
                model: User,
                attributes: ['username'],
                include: [{ model: File, as: 'profileImage', attributes: ['mimetype', 'buffer'] }],
            },
        ],
    });

    const returnedPosts = (posts as PostWithUser[]).map((post) => {
        return {
            ...post.toJSON(),
            user: {
                username: post.user.username,
                profileImage: convertToBase64(post.user.profileImage),
            },
        };
    });

    res.status(200).json(returnedPosts);
};

export const getPost = async (req: Request<{ id: number }, {}, {}>, res: Response) => {
    const postId = req.params.id;
    const post = await Post.findByPk(postId, {
        include: [
            {
                model: User,
                attributes: ['username'],
                include: [{ model: File, as: 'profileImage', attributes: ['mimetype', 'buffer'] }],
            },
        ],
    });

    if (!post) {
        res.status(404).json({ error: 'Post not found' });
        return;
    }

    const postToReturn = post as PostWithUser;

    res.status(200).json({
        ...post.toJSON(),
        user: {
            username: postToReturn.user.username,
            profileImage: convertToBase64(postToReturn.user.profileImage),
        },
    });
};

type CreatePostRequest = {
    userId: string;
    parentPostId: number | null;
    content: string;
    fileType: string;
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

        const { userId, content, fileType, parentPostId } = req.body;

        console.log(parentPostId);

        const post = await Post.create({
            userId: userId,
            parentPostId: parentPostId ? parentPostId : null,
            content: content,
        });

        if (req.file) {
            const newFile = {
                postId: post.id,
                name: req.file.originalname,
                encoding: req.file.encoding,
                mimetype: req.file.mimetype,
                buffer: req.file.buffer,
                fileType: fileType,
            };

            await File.create(newFile);
        }

        res.status(201).json(post);
    });
};

export const getFiles = async (_req: Request, res: Response) => {
    const files = await File.findAll({ attributes: { exclude: ['buffer'] } });
    res.json(files);
};
