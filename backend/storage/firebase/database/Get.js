import {child, get, ref} from 'firebase/database';
import {database} from '../Firebase.js';

const reference = ref(database);

export const getData = async (path) => {
    get(child(reference, path)).then(snapshot => {
        if (snapshot.exists()) console.log(snapshot.val());
        else console.log('No data available');
    }).catch(error => console.error(error));
}