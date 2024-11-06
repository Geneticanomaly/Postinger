import { Router } from 'express';
import { createPost, getFiles, getPosts } from '../controllers/post';

export const router: Router = Router();

router.get('/v1/posts', getPosts);
router.post('/v1/posts', createPost);

router.get('/v1/files', getFiles);
