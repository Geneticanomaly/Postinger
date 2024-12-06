import { Router } from 'express';
import { createPost, getFiles, getPost, getPosts, getUserPosts } from '../controllers/post';

export const router: Router = Router();

router.get('/v1/posts', getPosts);
router.get('/v1/posts/:id', getPost);
router.post('/v1/posts', createPost);
router.get('/v1/userPosts/:username', getUserPosts);

router.get('/v1/files', getFiles);
