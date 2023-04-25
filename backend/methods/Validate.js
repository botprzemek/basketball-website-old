export const validateData = (data, errors, response) => {
    Object.keys(errors).forEach(key => {
        if (data[key] == null) return response.send({error:errors[key]});
    });
    if (Object.keys(data.players).length < 3) return response.send({error:errors.players});
    return true;
}