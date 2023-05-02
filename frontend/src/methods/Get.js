const options = {method: 'GET', headers: {}};

export const getData = async (path, callback) => {
    fetch(`http://localhost:8081/${path}`, options)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.log(error));
}