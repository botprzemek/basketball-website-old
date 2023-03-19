export class Team {
    name;
    email;
    category;
    players = {};
    date;

    constructor(name, email, category, players, date) {
        this.name = name;
        this.email = email;
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
        return {
            email: this.email,
            category: this.category,
            players: this.players,
            date: this.date,
        }
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