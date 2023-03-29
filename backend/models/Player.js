export class Player {
    name;
    lastname;
    height;
    position;

    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }

    setHeight(height) {
        this.height = height;
        return this;
    }

    setPosition(position) {
        this.position = (positionList[position] === undefined) ? positionList[2] : positionList[position];
        return this;
    }

    getHeightInInches() {
        const inch = 0.3937, feet = 12, tempFull = this.height * inch, height = { feet: 0, inch: 0 };
        height.feet = Math.floor(tempFull/feet);
        height.inch = Math.floor(tempFull - (feet * height.feet));
        return `${height.feet}'${height.inch}`;
    }

    getPlayerData() {
        const data = { name: this.name, lastname: this.lastname }
        if (this.height != null) data['height'] = this.getHeightInInches();
        if (this.position != null) data['position'] = this.position.short;
        return data;
    }
}

export const positionList = [
    { index: 0, name: 'Rozgrywający', short: 'PG' },
    { index: 1, name: 'Rzucający obrońca', short: 'SG' },
    { index: 2, name: 'Niski Skrzydłowy', short: 'SF' },
    { index: 3, name: 'Silny Skrzydłowy', short: 'PF' },
    { index: 4, name: 'Środkowy', short: 'C' }
];