export class Team {
    teamname;
    email;
    phone;
    category;
    players = {};
    date;

    constructor(teamname, email, phone, category, players, date) {
        this.teamname = teamname;
        this.email = email;
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
            email: this.email,
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