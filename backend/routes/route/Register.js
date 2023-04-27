import {Router} from 'express';
import {rateLimit} from 'express-rate-limit';
import {Timestamp} from 'firebase-admin/firestore';
import {writeData} from '../../storage/firebase/firestore/Post.js';
import {Player, Team} from '../../models/Team.js';
import {validateData} from '../../methods/Validate.js';

const router = Router();

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 5,
    message: {status: 429, message: 'Too many requests, try again later.'}
});

router.use(limiter);

router.post('/register', async (request, response) => {
    try {
        if (request.body.team == null) return response.sendStatus(400);
        const data = request.body.team;
        if (!validateData(data, response)) return;
        Object.keys(data.players).forEach(key => data.players[key] = new Player(data.players[key].name, data.players[key].age));
        const team = new Team(data.teamname, data.email, data.phone, data.category, data.players, Timestamp.now());
        await writeData('register', team.teamname, team.getTeam());
        response.sendStatus(201);
    } catch (error) {
        console.log(error);
        return response.sendStatus(500);
    }
});

export default router;