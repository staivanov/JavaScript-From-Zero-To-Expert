'use strict'

class Person {
    constructor(firstName, lastName) {

        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const lisa = new Person('Lisa', 'Jason');

console.log(Person.prototype)

//Prototype
Person.prototype.printName = function () {
    console.log(`${this.firstName} ${this.lastName}`);
};

lisa.printName();

console.log(lisa.__proto__);