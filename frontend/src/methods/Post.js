import { validateData } from './Validate';

export const sendForm = (path, data) => {
    if (!validateData()) return console.log('Error');
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    };

    fetch(`http://localhost:8081/${path}`, options)
        .then(response => console.log(response))
        .catch(error => console.log(error));
}