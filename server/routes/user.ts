import { Router } from 'express';
import { getCurrentUser, getUsers, updateUserImage } from '../controllers/user';

export const router: Router = Router();

router.get('/v1/users', getUsers);
router.get('/v1/users/current_user', getCurrentUser);
router.post('/v1/users/edit_profile/image/:id', updateUserImage);
