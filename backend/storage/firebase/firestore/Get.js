import { firestore } from '../Firebase.js';

export const getData = async (colPath, docPath) => {
    const collection = firestore.collection(colPath);
    if (docPath === '' || docPath === undefined || docPath === null) {
        const data = await collection.get();
        let result = {};
        await data.forEach(doc => result[doc.id] = doc.data());
        return result;
    }
    else {
        const data = await collection.doc(docPath).get();
        return data.data();
    }
}