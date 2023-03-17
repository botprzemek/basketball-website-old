import { database } from './Main.js';
import { getDoc } from 'firebase-admin/'

export const getData = async (path) => {
    const collection = (path === '' || path === undefined || path === null) ? (await database.collection('register').get()).docs. : database.collection('register').doc(path).data();
    const request = await collection;
    const result = {};
    console.log(request);
    //request.forEach(doc => result[doc.id] = doc.data());
    //return result;
}