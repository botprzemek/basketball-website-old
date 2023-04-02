import { Router } from 'express';
import { getData } from '../../storage/firebase/firestore/Get.js';
import { Player, positionList } from '../../models/Player.js';
import { getCachedData, saveCachedData } from '../../storage/cache/Cache.js';

const router = Router();

router.get('/', async (request, response) => {
    const data = getCachedData('players') != null ? getCachedData('players') : await getData('players', null, 'position', 'asc'), players = {};
    if (getCachedData('players') == null) saveCachedData('players', data, 3600 * 1000, () => console.log(`Players cache expired. (${new Date()})`));
    Object.keys(data).forEach(key => players[key] = (new Player(data[key].name, data[key].lastname).setHeight(data[key].height).setPosition(data[key].position).getPlayerData()));
    response.send(players);
});
router.get('/fullname/:player', async (request, response) => {
    const data = getCachedData('players') != null ? getCachedData('players')[request.params.player] : (await getData('players', request.params.player));
    response.send(new Player(data.name, data.lastname).setHeight(data.height).setPosition(data.position).getPlayerData());
    if (getCachedData('players') == null) saveCachedData('players', await getData('players', null), 3600 * 1000, () => console.log(`Players cache expired. (${new Date()})`));
});
router.get('/name/:name', async (request, response) => {
    const data = getCachedData('players') != null ? getCachedData('players') : await getData('players'), players = {};
    if (getCachedData('players') == null) saveCachedData('players', data, 3600 * 1000, () => console.log(`Players cache expired. (${new Date()})`));
    Object.keys(data).forEach(key => {
        if (data[key].name.toLowerCase() === request.params.name.toLowerCase()) players[key] = new Player(data[key].name, data[key].lastname).setHeight(data[key].height).setPosition(data[key].position).getPlayerData();
    });
    response.send(players);
});
router.get('/position/:position', async (request, response) => {
    const data = getCachedData('players') != null ? getCachedData('players') : await getData('players'), players = {};
    if (getCachedData('players') == null) saveCachedData('players', data, 3600 * 1000, () => console.log(`Players cache expired. (${new Date()})`));
    Object.keys(data).forEach(key => {
        if (positionList[data[key].position].short === request.params.position.toUpperCase() || positionList[data[key].position].index === request.params.position * 1) players[key] = new Player(data[key].name, data[key].lastname).setHeight(data[key].height).getPlayerData();
    });
    response.send(players);
});


export default router;