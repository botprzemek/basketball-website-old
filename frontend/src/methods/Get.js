const options = { method: 'GET', headers: {} };

export const getData = (path, callback) =>
    fetch(`http://localhost:8081/${path}`, options)
        .then(response => response.json())
        .then(json => callback(json))
        .catch(error => callback(error));