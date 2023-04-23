import { validateElements } from './Validate';

export const sendForm = (path, data) => {
    if (!validateElements(data)) return console.log('Error occured');

    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    };

    fetch(`https://localhost:8081/${path}`, options)
        .then(response => console.log(response.ok))
        .catch(error => console.log(error));
}