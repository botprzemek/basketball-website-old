import { Router } from 'express';
import { getData } from "../storage/firebase/Get.js";

const router = Router();

router.get('/', async (request, response) => response.send(await getData('')));
router.get('/:team', async (request, response) => response.send(await getData(request.params.team)));

export default router;