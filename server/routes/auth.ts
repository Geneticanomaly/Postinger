import { Router } from 'express';
import { registerAuth, loginAuth } from '../controllers/auth';

export const router: Router = Router();

router.post('/v1/auth/register', registerAuth);
router.post('/v1/auth/login', loginAuth);
