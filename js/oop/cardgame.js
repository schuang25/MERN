class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        console.log(`${name} is played on the field.`);
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        if (target instanceof Unit) {
            console.log(`${this.name} attacks ${target.name}!`);
            target.res -= this.power;
            console.log(`${target.name}'s remaining resilience: ${target.res}`);
        } else {
            throw new Error(`Target is not a Unit`);
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, amount) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.amount = amount;
    }

    play(target) {
        if (target instanceof Unit) {
            console.log(`${this.name} is played on ${target.name}.`)
            if (this.stat === `power`)
                target.power += this.amount;
            else if (this.stat === `res`)
                target.res += this.amount;
            if (this.amount > 0)
                console.log(`${target.name}'s ${this.stat} increased by ${this.amount}.`)
            else
                console.log(`${target.name}'s ${this.stat} decreased by ${Math.abs(this.amount)}.`);
        } else {
            throw new Error(`Target is not a Unit`);
        }
    }
}

console.log(`----- Turn 1 -----`);
let redbelt = new Unit(`Red Belt Ninja`, 3, 3, 4);
let hardalgo = new Effect(`Hard Algorithm`, 2, `increase target's resilience by 3`, `res`, 3);
hardalgo.play(redbelt);
console.log(`----- Turn 2 -----`);
let blackbelt = new Unit(`Black Belt Ninja`, 4, 5, 4);
let upr = new Effect(`Unhandled Promise Rejection`, 1, `reduce target's resilience by 2`, `res`, -2);
upr.play(redbelt);
console.log(`----- Turn 3 -----`);
let pp = new Effect(`Pair Programming`, 3, `increase target's power by 2`, `power`, 2);
pp.play(redbelt);
redbelt.attack(blackbelt);