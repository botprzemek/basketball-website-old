import {Router} from 'express';
import streetball from './event/Streetball.js';
import teams from './event/Teams.js';

const router = Router();

router.use('/streetball', streetball);
router.use('/teams', teams);

export default router;