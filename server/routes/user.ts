import { Router } from 'express';
import { getUsers } from '../controllers/user';

export const router: Router = Router();

router.get('/v1/users/', getUsers);