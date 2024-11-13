import { Router } from 'express';
import { getUsers, updateUserImage } from '../controllers/user';

export const router: Router = Router();

router.get('/v1/users/', getUsers);
router.post('/v1/users/:id', updateUserImage);
