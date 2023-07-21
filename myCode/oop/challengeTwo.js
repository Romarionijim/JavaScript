 class RandomOne {
    constructor(engine, speed) {
        this.engine = engine;
        this.speed = speed;
    }

     getEngine() {
        return this.engine;
    }

    getSpeed() {
        return `the speed is ${Number.parseInt(this.speed) * 10} km`;
    }

    setEngine(engine) {
        this.engine = engine
    }

    setSpeed(speed) {
        this.speed = speed;
    }
}

const instance1 = new RandomOne('Engine vx', '10km');
console.log(instance1); 
console.log(instance1.getEngine());
console.log(instance1.getSpeed());
console.log(instance1.setEngine = 'new engine setter');
console.log(instance1.setSpeed = '1000X speed');