import express from 'express';
import register from './api/Register.js';
import teams from './api/Teams.js';
import players from './api/Players.js';
import web from './api/Web.js';

const router = express.Router();

router.use((request, response, next) => next());
router.use('/register', register);
router.use('/teams', teams);
router.use('/players', players);
router.use('/webdata', web);

export default router;