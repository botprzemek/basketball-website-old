import express from 'express';

import { sendData } from '../storage/firebase/Post.js';
import { Timestamp } from 'firebase-admin/firestore';
import { Team, Player } from '../models/Team.js';

const router = express.Router();

router.post('/', async (request, response) => {
    const data = request.body.team;
    console.log(JSON.parse(data).name);
    try {
        const team = new Team(
            data.name,
            [
                new Player(data.players[0].name, data.players[0].age),
                new Player(data.players[1].name, data.players[1].age),
                new Player(data.players[2].name, data.players[2].age),
                new Player(data.players[3].name, data.players[3].age),
            ],
            data.category,
            Timestamp.now(),
        );

        await sendData(team.name, team.getTeam());
        response.sendStatus(201);
    } catch {
        return response.sendStatus(400);
    }
});

export default router;