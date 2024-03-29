// import {validateData} from './Validate.js';

export const sendForm = (path, data, callback) => {
    // if (!validateData(data)) return console.log('Error occured');
    const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    };
    fetch(`https://api.knuryknurow.pl/${path}`, options)
        .then(response => callback(response))
        .catch(error => console.log(error));
}