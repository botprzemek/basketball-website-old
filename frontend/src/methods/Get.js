const options = {
    method: 'GET',
    headers: {}
};

export const getForm = (path, callback) =>
    fetch(`http://localhost:8081/${path}`, options)
        .then(response => response.json())
        .then(json => callback(json))
        .catch(error => console.log(error));