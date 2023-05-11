import {Router} from 'express';
import {getAmountWhere} from '../../methods/firebase/firestore/Get.js';

const router = Router();

//router.get('/', async (request, response) => response.send(await getData('register', null)));
//router.get('/:team', async (request, response) => response.send(await getData('register', request.params.team)));
router.get('/amount/:category', async (request, response) => {
    response.send({amount:await getAmountWhere('register', 'category', '==', 1*request.body.params.category)});
});

export default router;