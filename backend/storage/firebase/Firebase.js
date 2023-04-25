import {cert, initializeApp} from 'firebase-admin/app';
import {getFirestore} from 'firebase-admin/firestore';
import {getDatabase} from 'firebase-admin/database';
import {serviceKey} from './ServiceKey.js';

initializeApp({
    credential: cert(serviceKey),
    databaseURL: 'https://basketball-website-c1397-default-rtdb.europe-west1.firebasedatabase.app/'
});

export const firestore = getFirestore();
export const database = getDatabase();