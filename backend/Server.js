import express from 'express';
import limiter from 'express-rate-limit';
import * as dotenv from 'dotenv';
import router from './routes/Main.js';
import cors from 'cors';

dotenv.config();

const server = express(), serverPort = process.env.SERVER_PORT, websiteAddress = process.env.WEBSITE_ADDRESS;

limiter.apply({windowMs: 15 * 60 * 1000, max: 50, standardHeaders: true, legacyHeaders: false});

server.disable('x-powered-by');

server.use(express.json({ limit: '1mb' }));
server.use(express.urlencoded({ extended: false }));
server.use(cors({ origin: websiteAddress }), router);
server.use(limiter);

server.use('/', router);
server.listen(serverPort, ()=> console.log(`Server started working on localhost:${serverPort}`));