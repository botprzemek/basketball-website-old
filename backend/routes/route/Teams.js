import {Router} from 'express';
import {getAmount, getAmountWhere} from '../../methods/firebase/firestore/Get.js';

const router = Router();

//router.get('/', async (request, response) => response.send(await getData('register', null)));
//router.get('/:team', async (request, response) => response.send(await getData('register', request.params.team)));
router.get('/amount', async (request, response) => {
    const amount = await getAmount('register');
    response.send({amount:amount});
});
router.get('/amount/categories', async (request, response) => {
    const categories = [];
    for (let i = 0; i < 3; i++) categories[i] = await getAmountWhere('register', 'category', '==', i);
    response.send({amount:categories});
});

router.get('/amount/categories/:category', async (request, response) => {
    response.send({amount:await getAmountWhere('register', 'category', '==', 1*request.params.category)});
});

export default router;