import database from './Main.js';

export const getData = async (path) => {
    const collection = database.collection('register');
    if (path === '' || path === undefined || path === null) {
        const data = await collection.get();
        let result = {};
        await data.forEach(doc => result[doc.id] = doc.data());
        return result;
    }
    else {
        const data = await collection.doc(path).get();
        return data.data();
    }
}