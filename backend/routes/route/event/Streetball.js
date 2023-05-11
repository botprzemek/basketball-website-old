import {randomBytes} from 'crypto';
import {Router} from 'express';
import {rateLimit} from 'express-rate-limit';
import {Timestamp} from 'firebase-admin/firestore';
import {updateData, writeData} from '../../../methods/firebase/firestore/Post.js';
import {Player, Team} from '../../../models/Team.js';
import {validateData} from '../../../methods/Validate.js';
import {sendMail} from "../../../methods/mail/Mail.js";
import {saveCachedData} from "../../../methods/cache/Cache.js";
import {getMultipleAmount} from "../../../methods/firebase/firestore/Get.js";
import teams from "./Teams.js";

const router = Router();

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 10,
    message: {status: 429, message: 'Too many requests, try again later.'}
});

router.use(limiter);
router.use('/teams', teams);

router.post('/register', async (request, response) => {
    try {
        if (request.body.team == null) return response.sendStatus(400);
        const data = request.body.team;
        console.log(data);
        if (!validateData(data, response)) return;
        Object.keys(data.players).forEach(key => {
            if (data.players[key] == null) return delete data.players[key];
            data.players[key] = new Player(data.players[key].name, data.players[key].age);
        });
        const id = randomBytes(6).toString('hex');
        const token = randomBytes(6).toString('hex');
        const team = new Team(data.teamname, data.email, token, false, data.phone, data.category, data.players, Timestamp.now());
        await writeData('register', id, team.getTeam());
        await sendMail(team.email, token);
        response.sendStatus(201);
        saveCachedData('categories', getMultipleAmount('register', 'category', '=='), 24 * 3600 * 1000);
    } catch (error) {
        console.log(error);
        return response.sendStatus(500);
    }
});

router.post('/verify', async (request, response) => {
    try {
        if (request.body.token == null || request.body.verified == null) return response.sendStatus(400);
        if (request.body.verified) return response.sendStatus(201);
        const data = { token: request.body.token, verified: true };
        console.log(data);
        const status = await updateData('register', data,1, 'token', null, '==', request.body.token);
        if (!status) return response.send({errors:{token:'Token is null, try again.'}});
        response.sendStatus(201);
    }
    catch (error) {
        console.log(error);
        return response.sendStatus(500);
    }
});

export default router;