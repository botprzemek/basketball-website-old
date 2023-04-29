export class Team {
    teamname;
    email;
    phone;
    category;
    players = {};
    date;

    constructor(teamname, email, token, verified, phone, category, players, date) {
        this.teamname = teamname;
        this.email = email;
        this.token = token;
        this.verified = verified;
        this.phone = phone;
        this.category = category;
        Object.keys(players).forEach(key => {
            this.players[key.toString()] = {
                name: players[key].name,
                age: players[key].age,
            }
        });
        this.date = date;
    }

    getTeam() {
        let data = {
            teamname: this.teamname,
            email: this.email,
            token: this.token,
            verified: this.verified,
            category: this.category,
            players: this.players,
            date: this.date,
        }
        if (this.phone) data['phone'] = this.phone;
        return data;
    }
}

export class Player {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}