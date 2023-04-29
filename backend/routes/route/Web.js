import { Router } from 'express';
import { getData } from '../../methods/firebase/firestore/Get.js';
import { getCachedData, saveCachedData } from '../../methods/cache/Cache.js';
import { Timestamp } from 'firebase-admin/firestore';

const router = Router();

router.get('/section/:name', async (request, response) => response.send(await getData('webdata_pl', request.params.name)));
router.get('/updates/full', async (request, response) => response.send(await getData('webdata_pl/updates/content', null)));
router.get('/updates/full/:update', async (request, response) => response.send(await getData('webdata_pl/updates/content', request.params.update)));
router.get('/updates/short', async (request, response) => response.send(await getData('webdata_pl/updates/content', null, 'seconds', 'desc')));
router.get('/updates/short/:update', async (request, response) => response.send(await getData('webdata_pl/updates/content', request.params.update)));
router.get('/updates/short/exclude/:update', async (request, response) => response.send(await getData('webdata_pl/updates/content', null, 'seconds', 'desc', '!=', parseInt(request.params.update))));

export default router;