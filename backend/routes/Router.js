import express from 'express';
import events from './route/Events.js';
import teams from './route/Teams.js';
import players from './route/Players.js';
import web from './route/Web.js';

const router = express.Router();

router.use((request, response, next) => next());
router.use('/events', events);
router.use('/teams', teams);
router.use('/players', players);
router.use('/webdata', web);

export default router;