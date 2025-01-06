import { Router } from 'express';
import { createUser, login } from '../controllers/users';
import { validateAuth, validateUser } from '../middlewares/validations';

const router = Router();

// @ts-ignore
router.post('/signin', validateAuth, login);
router.post('/signup', validateUser, createUser);

export default router;
