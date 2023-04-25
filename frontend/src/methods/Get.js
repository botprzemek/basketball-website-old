const options = { method: 'GET', headers: {} };

export const getData = async (path, callback) => {
    const response = await fetch(`http://localhost:8081/${path}`, options);
    return callback(response);
}