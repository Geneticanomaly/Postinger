import { Router } from 'express';
import { getCurrentUser, getUser, getUsers, updateUserImage } from '../controllers/user';

export const router: Router = Router();

router.get('/v1/users', getUsers);
router.get('/v1/users/:username', getUser);
router.get('/v1/users/get/current_user', getCurrentUser);
router.post('/v1/users/edit_profile/image/:id', updateUserImage);
