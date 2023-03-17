import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const { default: serviceAccountKey } = await import('./serviceAccountKey.json', {assert: { type: 'json' }});

initializeApp({ credential: cert(serviceAccountKey) });

export const database = getFirestore();