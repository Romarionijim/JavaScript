let Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    console.log(`the new speed of the car is ${Number.parseInt(this.speed) * 10} km/h`);
}

Car.prototype.brake = function () {
    console.log(`the brake speed of the car is ${Number.parseInt(this.speed) - 5} km/h`);
}

console.log(Car);

let EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);

EV.prototype.changeBattery = function(chargeTo) {
    this.charge = chargeTo
}

EV.prototype.accelerate = function() {
    console.log(`the speed will be plus ${Number.parseInt(this.speed) + 20} and minus one charge ${Number.parseInt(this.charge) -1}`);
}


const tesla = new EV('90 vv', '50 km',90);
console.log(tesla);
tesla.changeBattery(50);
console.log(tesla);

tesla.accelerate();
tesla.brake();