//Function declaration
function calculateAge(userYearOfBirth) {
    let age = 2024 - userYearOfBirth;

    return age;
}

const currentAge = calculateAge(1989);

//Anonymous function 
const currentAgeSecond = function (userYearOfBirth) {
    let age = 2024 - userYearOfBirth;

    return age;
}

console.log(currentAge, currentAgeSecond);

//Arrow function
const calculateAgeThird = userYearOfBirth => 2024 - userYearOfBirth;


//Arrays

let numbers = [2, 3, 4, 5, 6];
numbers.push(7);
numbers.unshift(1);

console.log(numbers);

//Objects
const ani = {
    firstName: 'Ani',
    lastName: 'Ivanova',
    job: 'seller',
    friends: ['Mimi', 'Gabi', 'Dari'],
    calcAge: function(yearsOfBirth){
        return 2024 - yearsOfBirth;
    }
};

const ageAni = ani.calcAge(1992);
console.log(ageAni);

