import { database } from './Main.js';

const collection = database.collection('register');

export const sendData = async (id, data) => await collection.doc(id.toString()).set(data);