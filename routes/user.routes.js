import express from 'express';
const router = express.Router();

import {signup,getAllUsers} from '../controllers/user.controller.js';

router.post('/signup', signup);
router.get('/users', getAllUsers);

export default router;