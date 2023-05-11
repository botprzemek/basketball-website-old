import {Router} from 'express';
import {getAmount} from '../../methods/firebase/firestore/Get.js';

const router = Router();

//router.get('/', async (request, response) => response.send(await getData('register', null)));
//router.get('/:team', async (request, response) => response.send(await getData('register', request.params.team)));
router.get('/amount/:category', async (request, response) => {
    response.send({amount:await getAmount('register', 'category', '==', 1*request.body.params.category)});
});

export default router;