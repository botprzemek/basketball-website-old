const regex = {
    teamname: /([a-zA-Z0-9-]{3,24})/,
    email: /([a-z0-9]{3,24})(@)([a-z0-9]{3,24})(\.)([a-z]{1,5})/,
    category: /([0-2])/,
    player: {
        name: /([a-zA-Z]{3,24})(\s)([a-zA-Z]{3,24})/,
        age: /([0-9]{2})/,
    }
}

export const validateElement = (element, name) => {
    if (name !== 'players') return regex[name].test(element);
    let i = 0;
    Object.keys(element).forEach(player => {
        Object.keys(element[player]).forEach(key => {
            if (!regex.player[key].test(element[player][key])) return false;
            i++;
        });
    });
    return (i === 2);
}

export const validateElements = (data) => {
    let validationState = false;
    Object.keys(data.team).forEach(name => {
        validationState = validateElement(data.team[name], name);
    });
    return validationState;
}