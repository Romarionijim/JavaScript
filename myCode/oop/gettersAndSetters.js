// class FastCar {
    
//     constructor(engine,wheels) {
//         this.engine = engine;
//         this.wheels = wheels;
//     }

//     getEngine() {
//         return this.engine;
//     }

//      getWheels() {
//         return this.wheels;
//     }

//     setEngine(engine) {
//         this.engine = engine
//     }

//     setWheel(wheel) {
//         this.wheels = wheel
//     }
// }

let obj = {
    first: 'name random',
    last: 'lastname',
    getFirst() {
        return this.first
    },

    setFirst(firstName) {
        this.first = firstName
    }
}

console.log(obj.setFirst = 'jane');
console.log(obj.getFirst());
