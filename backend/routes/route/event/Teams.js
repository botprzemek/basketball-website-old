import {Router} from 'express';
import {getAmount, getAmountWhere, getMultipleAmount} from '../../../methods/firebase/firestore/Get.js';
import {getCachedData, saveCachedData} from "../../../methods/cache/Cache.js";

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
    saveCachedData('categories-amount', categories, 24 * 3600 * 1000);
    response.send({amount:categories});
});
router.get('/amount/categories/:category', async (request, response) => {
    if (getCachedData('categories-amount') == null) {
        const categories = await getMultipleAmount('register', 'category', '==');
        saveCachedData('categories-amount', categories, 24 * 3600 * 1000);
        return response.send({amount:categories[1*request.params.category]});
    }
    response.send({amount:getCachedData('categories-amount')[1*request.params.category]});
});

export default router;