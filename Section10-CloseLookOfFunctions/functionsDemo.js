const flight = 'LH234';
const jonas = {
    name: 'Jonas',
    passport: 899494
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH9999';
    passenger.name = 'Mr + ' + passenger.name;
    let isFlightNumValid = true;


    if (passenger.flightNum == flightNum) {
        return isFlightNumValid;
    }
    else {
        return isFlightNumValid = false;
    }
};

console.log(checkIn(flight, jonas));

const oneWord = function (str) {
    return str.replace(/ /g, ' ').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');

    return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function (str, fn) {

    console.log(`Original string ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
};

const statementAboutJS = 'JavaScript is one of the best programming language';
transformer(statementAboutJS, upperFirstWord);

//Function return function
const greet = function (message, sender) {
    return function (message, sender) {
        console.log(`${message} ${sender}`);
    }
};

const yourGreeting = greet('Hello', 'Mr. Smith');

//The Call and Apply methods


//IIFE
(function () {
    console.log('This will never run again.');
    const isPrivate = 24;
})();

console.log(isPrivate);

(() => console.log('And this will never run again.'))();

//Closure
let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a);
    }
};

const h = function () {

    const b = 777;

    f = function() {
        console.log(b = 2);
    };
};