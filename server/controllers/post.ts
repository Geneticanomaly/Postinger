import { Request, Response } from 'express';
import multer from 'multer';
require('express-async-errors');
import models from '../database/models';
import { convertToBase64 } from '../util/helperFunctions';
import { CreatePostRequest, PostWithUser } from '../types';

const { Post, File, User } = models;

export const getPosts = async (_req: Request, res: Response) => {
    const posts = await Post.findAll({
        include: [
            {
                model: User,
                attributes: ['username'],
                include: [
                    {
                        model: File,
                        as: 'profileImage',
                        attributes: ['mimetype', 'buffer'],
                        foreignKey: 'userId',
                    },
                ],
            },
            {
                model: File,
                as: 'media',
                attributes: ['mimetype', 'buffer'],
                foreignKey: 'postId',
            },
        ],
        order: [['createdAt', 'DESC']],
    });

    const returnedPosts = (posts as PostWithUser[]).map((post) => {
        return {
            ...post.toJSON(),
            user: {
                username: post.user.username,
                profileImage: convertToBase64(post.user.profileImage),
            },
            // Handle multiple files due to hasMany relationship
            media: Array.isArray(post.media)
                ? post.media.map((media) => convertToBase64(media))
                : convertToBase64(post.media),
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
            {
                model: File,
                as: 'media',
                attributes: ['mimetype', 'buffer'],
                foreignKey: 'postId',
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
        media: Array.isArray(postToReturn.media)
            ? postToReturn.media.map((media) => convertToBase64(media))
            : convertToBase64(postToReturn.media),
    });
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

export const getUserPosts = async (req: Request<{ username: string }, {}, {}>, res: Response) => {
    const username = req.params.username;

    const user = await User.findOne({ where: { username: username } });

    if (!user) {
        res.status(400).json({ error: 'No such user found!' });
        return;
    }

    const posts = await Post.findAll({
        where: { userId: user.id },
        include: [
            {
                model: User,
                attributes: ['username'],
                include: [{ model: File, as: 'profileImage', attributes: ['mimetype', 'buffer'] }],
            },
            { model: File, as: 'media', attributes: ['mimetype', 'buffer'], foreignKey: 'postId' },
        ],
    });

    const userPosts = (posts as PostWithUser[]).map((post) => {
        return {
            ...post.toJSON(),
            user: {
                username: post.user.username,
                profileImage: convertToBase64(post.user.profileImage),
            },
            media: Array.isArray(post.media)
                ? post.media.map((media) => convertToBase64(media))
                : convertToBase64(post.media),
        };
    });

    res.status(200).json(userPosts);
};

export const getUserReplies = async (_req: Request, res: Response) => {
    res.status(200).json();
};

export const getUserLikes = async (_req: Request, res: Response) => {
    res.status(200).json();
};
