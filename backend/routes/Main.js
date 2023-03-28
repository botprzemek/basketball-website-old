import express from 'express';
import register from './Register.js';
import teams from './Teams.js';
import players from './Players.js';

const router = express.Router();

router.use((request, response, next) => next());
router.use('/register', register);
router.use('/teams', teams);
router.use('/players', players);

export default router;