import { Router } from 'express';
import { getData } from "../storage/firebase/Get.js";

const router = Router();

router.get('/', async (request, response) => response.send(await getData('')));
router.get('/:path', async (request, response) => response.send(await getData(request.params.path)));

export default router;