export class Team {
    name;
    players = {};
    category;
    date;

    constructor(name, players, category, date) {
        this.name = name;
        players.forEach((player, i) => {
            this.players[i.toString()] = {
                name: player.name,
                age: player.age,
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