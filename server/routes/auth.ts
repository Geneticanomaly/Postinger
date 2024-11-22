import { Router } from 'express';
import { registerAuth, loginAuth, logoutAuth, isUserAuthenticated } from '../controllers/auth';

export const router: Router = Router();

router.post('/v1/auth/register', registerAuth);
router.post('/v1/auth/login', loginAuth);
router.get('/v1/auth/logout', logoutAuth);
router.get('/v1/auth/isAuthenticated', isUserAuthenticated);
