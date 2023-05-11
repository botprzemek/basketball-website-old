const regex = {
    teamname: /([a-zA-ZZĄĆĘŁŃÓŚŹŻąćęłńóśźż0-9-]{3,24}$)/,
    email: /([a-z0-9]{3,54})(@)([a-z0-9]{3,24})(\.)([a-z]{1,5}$)/,
    phone: /([0-9]{9}$)/,
    category: /([0-2]$)/,
    player: {
        firstName: /([a-zA-ZZĄĆĘŁŃÓŚŹŻąćęłńóśźż]{3,24}$)/,
        lastName: /([a-zA-ZZĄĆĘŁŃÓŚŹŻąćęłńóśźż]{3,24}$)/,
        age: /([0-9]{2}$)/,
    }
}

export const validateInput = (key, value) => {
    return regex[key].test(value);
}

export const validateInputs = (key, object) => {
    let validation = 0;
    Object.keys(regex[key]).forEach(key1 => {
        if (object[key1] === null) return;
        if (regex[key][key1].test(object[key1])) return validation++;
    });
    return validation === 3;
}