//Scope is the place where variables are declared.
//Scopes in JS are: global scope, function scope, block scope

//Global scope. Variables in global scope are accessible everywhere
const me = 'Marcus';
const job = 'teacher';
const born = 1988;

//Function scope. Variables declared in function scope are accessible only there.
function calculateAge(yearsOfBirth) {
    let currentYear = 2024;
    let age = currentYear - yearsOfBirth;

    return age;
}

//Block scope. Only 'let' and 'const' are restricted to block scope.

const currentAge = calculateAge(born);

if (currentAge > 18) {
    console.log('You can enter in every club.');

    let drinks = ['Vodka', 'Rakia', 'Beer', 'Whiskey'];

    drinks.forEach(aperitif => {
        console.log(aperitif);
    });
}
else {
    console.log('You can\'t enter in any club.');
}

function FirstScope() {

    let lastName = 'Lee';
    console.log(lastName);

    function SecondScope() {
        const yearOfWedding = 2015;
        console.log(`Mr. ${me} ${lastName} has wedding back in ${yearOfWedding}`);
    }
}

///Variables in window object
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.z);
console.log(z === window.z);


//Primitives vs Objects
//Primitives are: numbers, strings, boolean, undefined, null, symbol, bigint. They are stored in the Call Stack.
//Objects are: arrays, functions, object literals, many more..

//In Call Stack where functions are executed and Heap where objectes are stored in memory.
