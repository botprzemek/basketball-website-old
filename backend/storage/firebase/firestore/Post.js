import { firestore } from '../Firebase.js';

export const writeData = async (colPath, docPath, data) => await firestore.collection(colPath).doc(docPath.toString()).set(data);