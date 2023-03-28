import { Router } from 'express';
import { getData } from '../storage/firebase/Get.js';
import { Player } from '../models/Player.js';

const router = Router();

router.get('/', async (request, response) => {
    const data = await getData('players', ''), players = {};
    Object.keys(data).forEach(key => players[key] = (new Player(data[key].name, data[key].lastname, data[key].height, data[key].position).getPlayerData()));
    response.send(players);
});
router.get('/:player', async (request, response) => {
    const data = await getData('players', request.params.player);
    response.send(new Player(data.name, data.lastname, data.height, data.position).getPlayerData());
});

export default router;