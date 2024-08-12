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