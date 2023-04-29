import {firestore} from '../Firebase.js';

export const writeData = async (collectionPath, documentPath, data) => await firestore.collection(collectionPath).doc(documentPath.toString()).set(data);

export const updateData = async (collectionPath, data, limit, filter, state, condition, matching) => {
    if (data == null) return false;
    let collection = await firestore.collection(collectionPath);
    if (limit !== undefined) collection = collection.limit(limit);
    if (state !== null) collection = collection.orderBy(filter, state);
    if (condition !== undefined && matching !== undefined) collection = collection.where(filter, condition, matching);
    let documents = await collection.get();
    if (documents.empty) return false;
    documents.forEach(document => {
        let id = document.id;
        firestore.collection(collectionPath).doc(id).update(data);
    });
    return true;
}