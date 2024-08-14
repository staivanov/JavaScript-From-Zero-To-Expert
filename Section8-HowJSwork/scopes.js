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