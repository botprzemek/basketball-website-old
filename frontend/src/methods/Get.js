const options = {method: 'GET', headers: {}};

export const getData = async (path, callback) => {
    fetch(`https://api.knuryknurow.pl/${path}`, options)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.log(error));
}