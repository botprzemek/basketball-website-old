import {cert, initializeApp} from 'firebase-admin/app';
import {getFirestore} from 'firebase-admin/firestore';
import {serviceKey} from "./ServiceKey.js";

initializeApp({
    credential: cert(serviceKey),
});

export const firestore = getFirestore();