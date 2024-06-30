// // Q1 - Square each element of the array using the map function with an arrow function
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers);

// // Q2 - Function to determine grade based on score using ternary operators
// function getGrade(score) {
//     return score >= 90 ? 'A' : 
//            score >= 80 ? 'B' :
//            score >= 70 ? 'C' :
//            score >= 60 ? 'D' : 'F';
// }

// const studentScore = 85;
// console.log(`Grade: ${getGrade(studentScore)}`);

// // Q3 - Object representing a car and changing its year property
// let car = {
//     companyName: 'Toyota',
//     model: 'Camry',
//     year: 2019
// };

// function changeYear(carObject, newYear) {
//     carObject.year = newYear;
// }

// changeYear(car, 2022);
// const { model, year } = car;
// console.log(`Model: ${model}, Year: ${year}`);


// // Q4 - Filter prime numbers from an array
// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;

//     if (num % 2 === 0 || num % 3 === 0) return false;

//     let i = 5;
//     while (i * i <= num) {
//         if (num % i === 0 || num % (i + 2) === 0) return false;
//         i += 6;
//     }

//     return true;
// }

// const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const primeNumbers = numbersArray.filter(num => isPrime(num));
// console.log(primeNumbers);


// // Q5 - Use cases of map, filter, and reduce functions

// // Map: Transforming each element of an array
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num * num);

// // Filter: Selecting elements from an array based on a condition
// const evenNumbers = numbers.filter(num => num % 2 === 0);

// // Reduce: Aggregating values of an array into a single value
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// // Q6 - Asynchronous function to fetch data from an API using async-await
// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// fetchData();

// Q7 - Nested object representing a person with optional chaining
const person = {
    name: 'John Doe',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

// Safely accessing phone number even if contact property is missing
const phoneNumber = person.contact?.phone;
console.log(phoneNumber);


