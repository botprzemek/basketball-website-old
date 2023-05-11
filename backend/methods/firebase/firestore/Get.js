import {firestore} from '../Firebase.js';

export const getData = async (collectionPath, documentPath, filter, state, condition, matching, limit) => {
    let collection = await firestore.collection(collectionPath), result = {};
    if (filter !== undefined) collection = collection.orderBy(filter, state);
    if (limit !== undefined) collection = collection.limit(limit);
    if (condition !== null && matching !== undefined) collection = collection.where(filter, condition, matching);
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

export const getAmountWhere = async (collectionPath, filter, condition, matching) => {
    let collection = await firestore.collection(collectionPath);
    if (condition !== undefined && matching !== undefined) collection = collection.where(filter, condition, matching);
    const data = await collection.count().get();
    return data.data().count;
}

export const getMultipleAmount = async (collectionPath, filter, condition) => {
    let collection = await firestore.collection(collectionPath);
    const data = [];
    for (let i = 0; i < 3; i++) {
        if (condition !== undefined) collection = await firestore.collection(collectionPath).where(filter, condition, i);
        const data = await collection.count().get();
        data[i] = data.data().count;
    }
    return data;
}