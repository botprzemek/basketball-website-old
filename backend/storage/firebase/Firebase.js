import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getDatabase } from 'firebase-admin/database';

const { default: serviceAccountKey } = await import('./serviceAccountKey.json', { assert: { type: 'json' } });

initializeApp({
    credential: cert(serviceAccountKey),
    databaseURL: 'https://basketball-website-c1397-default-rtdb.europe-west1.firebasedatabase.app/'
});

export const firestore = getFirestore();
export const database = getDatabase();