const books =
{
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
        goodreads: {
            rating: 4.41,
            ratingsCount: 1733,
            reviewsCount: 63,
            fiveStarRatingCount: 976,
            oneStarRatingCount: 13
        }
    },
    highlighted: true
};

const [first, second] = books.keywords;
console.log(first, second);

//Spread operator
let newKeywords = [...books.keywords, 'ORM'];
newKeywords[newKeywords.length - 1] = 'JavaScript';
console.log(newKeywords);
console.log(books.keywords);

//Rest pattern
const [a, b, ...other] = [1, 2, 3, 4, 5,6];
console.log(a, b, other);


//Functions
const addNumbers = function(...numbers) {

    let sum = 0;

    numbers.forEach(number => {
        sum += number;
    });

        return sum;
};

addNumbers(1);
addNumbers(2, 3);
addNumbers(99, 14, 83);