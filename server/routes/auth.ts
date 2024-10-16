import { Router } from 'express';
import { registerAuth, loginAuth, logoutAuth } from '../controllers/auth';

export const router: Router = Router();

router.post('/v1/auth/register', registerAuth);
router.post('/v1/auth/login', loginAuth);
router.get('/v1/auth/logout', logoutAuth);
