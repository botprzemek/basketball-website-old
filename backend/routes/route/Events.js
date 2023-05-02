import {Router} from 'express';
import streetball from './event/Streetball.js';

const router = Router();

router.use('/streetball', streetball);

export default router;