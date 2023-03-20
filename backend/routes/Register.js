import { Router } from 'express';
import { Timestamp } from 'firebase-admin/firestore';
import { sendData } from '../storage/firebase/Post.js';
import { Team, Player } from '../models/Team.js';

const router = Router();

router.post('/', async (request, response) => {
    try {
        let data = null;
        if (request.body.team == null) return response.sendStatus(400);
        data = request.body.team;
        Object.keys(data.players).forEach(key => data.players[key] = new Player(data.players[key].name, data.players[key].age));
        const team = new Team(data.teamname, data.email, data.category, data.players, Timestamp.now());
        await sendData(team.teamname, team.getTeam());
        response.sendStatus(201);
    } catch(error) {
        console.log(error);
        return response.sendStatus(400);
    }
});

export default router;