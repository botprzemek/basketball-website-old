import { Router } from 'express';
import { Timestamp } from 'firebase-admin/firestore';
import { writeData } from '../../storage/firebase/firestore/Post.js';
import { Team, Player } from '../../models/Team.js';

const router = Router();

router.post('/', async (request, response) => {
    try {
        let data = null;
        if (request.body.team == null) return response.sendStatus(400);
        data = JSON.parse(request.body.team);
        if (Object.keys(data.players).length <= 3) return response.sendStatus(400);
        Object.keys(data.players).forEach(key => data.players[key] = new Player(data.players[key].name, data.players[key].age));
        const team = new Team(data.teamname, data.email, data.category, data.players, Timestamp.now());
        await writeData('register', team.teamname, team.getTeam());
        response.sendStatus(201);
    } catch(error) {
        console.log(error);
        return response.sendStatus(400);
    }
});

export default router;