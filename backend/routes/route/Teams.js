import {Router} from 'express';
import {getData} from "../../storage/firebase/firestore/Get.js";

const router = Router();

router.get('/', async (request, response) => response.send(await getData('register', null)));
router.get('/:team', async (request, response) => response.send(await getData('register', request.params.team)));

export default router;