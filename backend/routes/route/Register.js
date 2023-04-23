import { Router } from 'express';
import limiter from 'express-rate-limit';
import { Timestamp } from 'firebase-admin/firestore';
import { writeData } from '../../storage/firebase/firestore/Post.js';
import { Team, Player } from '../../models/Team.js';

const router = Router();

const errors = {
    teamname: 'Team name is null, try again.',
    email: 'Email is null, try again.',
    category: 'Category is null, try again.',
    players: 'Not enough players, try again.',
};

router.post('/', async (request, response) => {
    try {
        if (request.body.team == null) return response.send({error:errors.team});
        const data = JSON.parse(request.body.team);
        if (data.teamname == null) return response.send({error:errors.teamname});
        if (data.email == null) return response.send({error:errors.email});
        if (data.category == null) return response.send({error:errors.category});
        if (data.players == null) return response.send({error:errors.players});
        if (Object.keys(data.players).length < 3) return response.send({error:errors.players});
        Object.keys(data.players).forEach(key => data.players[key] = new Player(data.players[key].name, data.players[key].age));
        const team = new Team(data.teamname, data.email, data.category, data.players, Timestamp.now());
        await writeData('register', team.teamname, team.getTeam());
        response.sendStatus(201);
    } catch(error) {
        console.log(error);
        return response.sendStatus(400);
    }
});

limiter.apply({
    windowMs: 15 * 60 * 1000,
    max: 250,
    standardHeaders: true,
    legacyHeaders: false,
});

router.use(limiter);

export default router;