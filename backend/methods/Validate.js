export const errors = {
    null: {
        teamname: 'Team name is null, try again.',
        email: 'Email address is null, try again.',
        phone: 'Phone number is null, try again.',
        category: 'Team category is null, try again.',
        players: 'Not enough players, try again.',
    },
    regex: {
        teamname: 'Team name is not valid, try again.',
        email: 'Email address is not valid, try again.',
        phone: 'Phone number is not valid, try again.',
        category: 'Team category is not valid, try again.',
        players: 'One of the players is not valid, try again.',
    }
};

export const regex = {
    teamname: /([a-zA-Z0-9-\s]{3,24})/,
    email: /([a-z0-9]{3,24})(@)([a-z0-9]{3,24})(\.)([a-z]{1,5})/,
    phone: /([0-9]{9})/,
    category: /([0-2])/,
    players: {
        name: /([a-zA-Z]{3,24})(\s)([a-zA-Z]{3,24})/,
        age: /([0-9]{2})/,
    }
}

export const validateData = (data, response) => {
    let error = {};
    Object.keys(regex).forEach(key => {
        if (error[key] === null) return;
        if (!data[key] && key === 'phone') return;
        if (!data[key] && key !== 'category') return error[key] = errors.null[key];
        if (!validateElement(data[key], key)) error[key] = errors.regex[key];
    });
    if (Object.keys(data.players).length < 3) error = errors.null.players;
    if (Object.keys(error).length === 0) return true;
    response.send({errors: error});
    return false;
}

const validateElement = (element, name) => {
    if (name !== 'players') {
        if (regex[name] === undefined) return false;
        return regex[name].test(element);
    }
    let i = 0;
    element.forEach(player => {
        Object.keys(player).forEach(key => {
            if (regex.players[key].test(player[key])) i++;
            return false;
        });
    });
    return i >= 3;
}