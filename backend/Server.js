import express from 'express';
import * as dotenv from 'dotenv';
import router from './routes/Routes.js';
import cors from 'cors';

dotenv.config();

const server = express(), serverPort = process.env.SERVER_PORT, websiteAddress = process.env.WEBSITE_ADDRESS;

server.disable('x-powered-by');

server.use(express.json({ limit: '1mb' }));
server.use(express.urlencoded({ extended: false }));
server.use(cors({ origin: websiteAddress }));

server.options('*', cors());

server.use('/', router);

server.listen(serverPort, () => console.log(`[server] Listening on http://localhost:${serverPort}`));