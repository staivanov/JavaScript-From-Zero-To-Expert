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
const transformer = function(str, fn){

    console.log(`Original string ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
};

const statementAboutJS = 'JavaScript is one of the best programming language';
transformer(statementAboutJS, upperFirstWord);