import express from 'express';
import * as dotenv from 'dotenv';
import router from './routes/Router.js';
import cors from 'cors';

dotenv.config();

const server = express(), serverPort = process.env.SERVER_PORT, websiteAddress = process.env.WEBSITE_ADDRESS;
const options = {
    origin: ['https://knuryknurow.pl', websiteAddress],
};

server.use(cors(options));
server.options('*', cors(options));

server.disable('x-powered-by');

server.use(express.json({ limit: '1mb' }));
server.use(express.urlencoded({ extended: false }));

server.use('/', router);

server.listen(serverPort, () => console.log(`[server] Listening on http://localhost:${serverPort}`));