import {firestore} from '../Firebase.js';

export const getData = async (collectionPath, documentPath, filter, state, condition, matching) => {
    let collection = await firestore.collection(collectionPath), result = {};
    if (filter !== undefined) collection = collection.orderBy(filter, state);
    if (condition !== undefined && matching !== undefined) collection = collection.where(filter, condition, matching);
    if (typeof documentPath !== 'object') {
        const data = await collection.doc(documentPath).get();
        return data.data();
    }
    const data = await collection.get();
    await data.forEach(doc => result[doc.id] = doc.data());
    return result;
}

export const getAmount = async (collectionPath) => {
    const data = await firestore.collection(collectionPath).count().get();
    return data.data().count;
}