import { database } from './Main.js';

const collection = database.collection('register');

export const sendData = async (path, data) => await collection.doc(path.toString()).set(data);