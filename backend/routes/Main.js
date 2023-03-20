import express from 'express';
import register from './Register.js';
import teams from './Teams.js';

const router = express.Router();

router.use((request, response, next) => next());
router.use('/register', register);
router.use('/teams', teams);

export default router;