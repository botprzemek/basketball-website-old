import { Router } from 'express';
import { rateLimit } from 'express-rate-limit';
import { Timestamp } from 'firebase-admin/firestore';
import { writeData } from '../../storage/firebase/firestore/Post.js';
import { Team, Player } from '../../models/Team.js';
import { validateData } from '../../methods/Validate.js';

const router = Router();

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 5,
    message: { status: 429, message: 'Too many requests, try again later.' }
});

const errors = {
    teamname: 'Team name is null, try again.',
    email: 'Email is null, try again.',
    category: 'Category is null, try again.',
    players: 'Not enough players, try again.',
};

router.use(limiter);

router.post('/', async (request, response) => {
    try {
        if (request.body.team == null) return response.sendStatus(400);
        const data = request.body.team;
        if (!validateData(data, errors, response)) return;
        Object.keys(data.players).forEach(key => data.players[key] = new Player(data.players[key].name, data.players[key].age));
        const team = new Team(data.teamname, data.email, data.category, data.players, Timestamp.now());
        await writeData('register', team.teamname, team.getTeam());
        response.sendStatus(201);
    }
    catch (error) { return response.sendStatus(500); }
});

export default router;