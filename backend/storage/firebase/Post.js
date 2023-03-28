import database from './Main.js';

export const sendData = async (colPath, docPath, data) => await database.collection(colPath).doc(docPath.toString()).set(data);