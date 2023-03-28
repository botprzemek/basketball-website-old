export class Player {
    name;
    lastname;
    height;
    position;

    constructor(name, lastname, height, position) {
        this.name = name;
        this.lastname = lastname;
        this.height = height;
        this.position = (positionList[position] === undefined) ? positionList[2] : positionList[position];
    }

    getHeightInInches() {
        const inch = 0.3937, feet = 12, tempFull = this.height * inch, height = { feet: 0, inch: 0 };
        height.feet = Math.floor(tempFull/feet);
        height.inch = Math.floor(tempFull - (feet * height.feet));
        return `${height.feet}'${height.inch}`;
    }

    getPlayerData() {
        return {
            name: this.name,
            lastname: this.lastname,
            height: this.getHeightInInches(),
            position: this.position.short,
        }
    }
}

const positionList = [
    { index: 0, name: 'Rozgrywający', short: 'PG' },
    { index: 1, name: 'Rzucający obrońca', short: 'SG' },
    { index: 2, name: 'Niski Skrzydłowy', short: 'SF' },
    { index: 3, name: 'Silny Skrzydłowy', short: 'PF' },
    { index: 4, name: 'Środkowy', short: 'C' }
];