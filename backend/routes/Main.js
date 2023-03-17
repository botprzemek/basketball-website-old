import express from 'express';
import register from './Register.js';

const router = express.Router();

router.use((req, res, next) => next());
router.use('/register', register);

export default router;