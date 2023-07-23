const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthyear)
    },

    initFunc(firstName, Lastname) {
        this.firstName = firstName
        this.lastName = lastName
    },
};

const steph = Object.create(PersonProto)

const StudentsProto = Object.create(PersonProto)
const jay = Object.create(StudentsProto)
jay.initFunc('Jay','jaylastname')

console.log(StudentsProto.isPrototypeOf(jay))
console.log(PersonProto.isPrototypeOf(jay))
console.log(PersonProto.isPrototypeOf(StudentsProto))
console.log(jay.__proto__ === PersonProto)

