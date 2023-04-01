import express from 'express';
import register from './Register.js';
import teams from './Teams.js';
import players from './Players.js';
import web from './Web.js';

const router = express.Router();

router.use((request, response, next) => next());
router.use('/register', register);
router.use('/teams', teams);
router.use('/players', players);
router.use('/webdata', web);

export default router;