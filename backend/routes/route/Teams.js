import {Router} from 'express';
import {getAmount} from '../../methods/firebase/firestore/Get.js';

const router = Router();

//router.get('/', async (request, response) => response.send(await getData('register', null)));
//router.get('/:team', async (request, response) => response.send(await getData('register', request.params.team)));
router.get('/amount', async (request, response) => {
    response.send({amount:getAmount('register')});
});

export default router;