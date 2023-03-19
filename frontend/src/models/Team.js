export class Team {
    name;
    players = {};
    category;
    date;

    constructor(name, players, category, date) {
        this.name = name;
        Object.keys(players).forEach(key => {
            this.players[key.toString()] = {
                name: players[key].name,
                age: players[key].age,
            }
        });
        this.category = category;
        this.date = date;
    }

    getTeam() {
        return {
            name: this.name,
            players: this.players,
            category: this.category,
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