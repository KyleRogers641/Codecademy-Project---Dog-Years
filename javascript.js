const myAge = 19;
// my age
let earlyYears = 2;
// variable will change
earlyYears *= 10.5;
let laterYears = myAge - 2;
// Value will change for later years
laterYears *= 4;
// later years multiplied by 4 to calculate dog years.
console.log(earlyYears);
console.log(laterYears);
let myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);
// My age in dog years
const myName = 'Kyle Rogers'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`)
