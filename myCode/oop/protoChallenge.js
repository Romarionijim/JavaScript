let Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    console.log(`the new speed of the car is ${Number.parseInt(this.speed) * 10} km/h`);
}

Car.prototype.brake = function() {
    console.log(`the brake speed of the car is ${Number.parseInt(this.speed) - 5} km/h`);
}

console.log(Car);

const car1 = new Car('100 km', '50 km/h');
const car2 = new Car('200 km', '100 speed ph')
console.log(car1);
console.log(car2);
car1.accelerate();
car1.brake();
car2.accelerate();
car2.brake();